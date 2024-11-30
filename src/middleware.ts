import jwt from "jsonwebtoken";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/api/public") ||
    pathname.endsWith(".ico") ||
    pathname.endsWith(".css") ||
    pathname.endsWith(".js")
  ) {
    return NextResponse.next();
  }
  const accessToken = request.cookies.get("accessToken")?.value;
  if (!accessToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  try {
    const decoded: any = jwt.decode(accessToken);
    if (!decoded || !decoded.exp) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp < now) {
      throw new Error("token expired");
    }
  } catch (error) {
    console.error("JWT Error:", error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/", "/profile", "/rating", "/metrics"],
};
