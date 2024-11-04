import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const session = req.cookies.get("next-auth.session-token");

  // Redirect to login if not authenticated
  if (!session) {
    url.pathname = "/api/auth/signin";
    return NextResponse.redirect(url);
  }

  // Check user role for protected routes
  if (url.pathname.startsWith("/admin")) {
    const user = JSON.parse(Buffer.from(session, "base64").toString());
    if (user.role !== "admin") {
      url.pathname = "/403"; // Forbidden page
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}
