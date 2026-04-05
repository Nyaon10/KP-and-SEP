import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // We need to check for the session (ideally via cookies for middleware)
  // But for now, let's fix the redirect target:
  const isInternalPath = pathname.startsWith('/admin') || pathname.startsWith('/manager');
  const isLoginPage = pathname === '/admin/login';

  // If you want to add a basic check here:
  // if (isInternalPath && !isLoginPage && !request.cookies.has('wanst_session')) {
  //   return NextResponse.redirect(new URL('/admin/login', request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/manager/:path*'],
};