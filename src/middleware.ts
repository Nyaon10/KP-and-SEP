import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // We are bypassing server-side middleware and relying on your 
  // AdminLayout client-side protection so you don't get locked out.
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/manager/:path*'],
};