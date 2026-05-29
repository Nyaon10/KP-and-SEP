import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

// Retrieve the JWT secret from environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey'; 
const secret = new TextEncoder().encode(JWT_SECRET);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const tokenCookie = request.cookies.get('authToken');
  const token = tokenCookie?.value;

  // 1. If no token is present, redirect to the login page
  if (!token) {
    console.log(`Middleware: No token found. Redirecting from ${pathname} to /login`);
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirectedFrom', pathname);
    return NextResponse.redirect(loginUrl);
  }

  try {
    // 2. Verify the JWT token
    const { payload } = await jwtVerify(token, secret);

    if (!payload || typeof payload.role !== 'string' || !payload.userId) {
      throw new Error('Invalid token payload structure');
    }

    const userRole = payload.role as 'user' | 'admin';

    // 3. Role-based Access Rules
    if (pathname.startsWith('/dashboard-admin')) {
      // ONLY 'admin' role can access the admin dashboard
      if (userRole !== 'admin') {
        console.warn(`Middleware: Role '${userRole}' is unauthorized for ${pathname}. Redirecting to /dashboard`);
        const userDashboardUrl = new URL('/dashboard', request.url);
        return NextResponse.redirect(userDashboardUrl);
      }
    } else if (pathname.startsWith('/dashboard')) {
      // Both 'user' and 'admin' can access /dashboard. 
      // (Admins land here first on login, then they can navigate to /dashboard-admin if they wish)
    }

    return NextResponse.next();
  } catch (error) {
    // Token is invalid, expired, or verification failed
    console.error('Middleware: Token verification failed:', error);
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('error', 'session_expired');
    const response = NextResponse.redirect(loginUrl);
    
    // Clean up the invalid cookie to prevent infinite loops or broken states
    response.cookies.delete('authToken');
    return response;
  }
}

// Explicitly list matching routes to protect instead of a complex regex.
// This prevents middleware from running on APIs, _next files, images, or favicon.
export const config = {
  matcher: [
    '/dashboard',
    '/dashboard/:path*',
    '/dashboard-admin',
    '/dashboard-admin/:path*',
  ],
};