import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/tea-data/item", request.url));
  }

  if (request.nextUrl.pathname === "/tea-data") {
    return NextResponse.redirect(new URL("/tea-data/item", request.url));
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
