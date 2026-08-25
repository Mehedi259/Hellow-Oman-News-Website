import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the country from Vercel's IP geolocation header
  const country = request.headers.get('x-vercel-ip-country');

  // The bot attack is coming primarily from Washington D.C., USA (iad1)
  // Blocking 'US' country code to mitigate the attack.
  if (country === 'US') {
    return new NextResponse('Access Denied: Security Protection Active', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except for the ones starting with:
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};
