import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const isInternalPath = pathname.startsWith('/admin') || pathname.startsWith('/manager');
  const isLoginPage = pathname === '/admin/login';

  // 1. Check if the browser sent the auth cookie
  const sessionCookie = request.cookies.get('wanst_admin_session');

  // 2. If they are trying to access a protected page WITHOUT a cookie, kick them to login
  if (isInternalPath && !isLoginPage && !sessionCookie) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  // 3. If they HAVE a cookie and try to visit the login page, send them to the dashboard
  if (isLoginPage && sessionCookie) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  // Let them pass
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/manager/:path*'],
};