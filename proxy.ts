import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const { pathname, searchParams } = url;

  // 1. Block directory traversal and path manipulation attacks
  const decodedPath = decodeURIComponent(pathname).toLowerCase();
  const decodedSearch = decodeURIComponent(url.search).toLowerCase();
  
  const hasTraversal = 
    decodedPath.includes('..') || 
    decodedPath.includes('../') || 
    decodedPath.includes('..\\') ||
    decodedSearch.includes('..') || 
    decodedSearch.includes('../') || 
    decodedSearch.includes('..\\');

  if (hasTraversal) {
    return new NextResponse('Bad Request: Invalid Path', { status: 400 });
  }

  // 2. Prevent Open Redirect Vulnerabilities
  // Common redirect parameter keys
  const redirectKeys = ['redirect', 'next', 'redirect_url', 'returnto', 'goto', 'url'];
  for (const key of redirectKeys) {
    const target = searchParams.get(key);
    if (target) {
      // Validate that the target is a safe relative path (starts with / but not // or /\)
      // or matches the current origin
      const isRelative = target.startsWith('/') && !target.startsWith('//') && !target.startsWith('/\\');
      let isSameOrigin = false;
      try {
        const targetUrl = new URL(target);
        isSameOrigin = targetUrl.origin === url.origin;
      } catch {
        // Target is not a valid absolute URL, which is fine if it's relative
      }

      if (!isRelative && !isSameOrigin) {
        // Redirect to homepage or block request to prevent open redirect
        const safeUrl = new URL('/', url.origin);
        return NextResponse.redirect(safeUrl);
      }
    }
  }

  // 3. Handle preview deployment indexing protection
  const response = NextResponse.next();
  const vercelEnv = process.env.VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV;
  if (vercelEnv && vercelEnv !== 'production') {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, nosnippet, noarchive');
  }

  // 4. Force Security Headers (additional fallback check at proxy level)
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images (image assets folder)
     * - works (static works folder)
     * - file.svg, globe.svg, next.svg, vercel.svg, window.svg
     */
    '/((?!_next/static|_next/image|favicon.ico|images|works|file.svg|globe.svg|next.svg|vercel.svg|window.svg).*)',
  ],
};
