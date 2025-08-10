import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DOCS_URL =
  process.env.NEXT_PUBLIC_DOCS_URL ||
  "https://idle-finance.gitbook.io/idle-finance.md/";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Handle docs subdomain for any domain
  if (hostname.startsWith("docs.")) {
    // Redirect to GitBook documentation
    return NextResponse.redirect(DOCS_URL, 301);
  }

  // Continue with normal request for main domain
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
