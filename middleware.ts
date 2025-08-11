import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  // Check if the request is coming from ico.idlefinances.com
  if (host === "ico.idlefinances.com") {
    // Redirect to the main domain with /ico path
    return NextResponse.redirect(
      new URL("/ico", "https://idlefinances.com"),
      { status: 301 }, // Permanent redirect
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
