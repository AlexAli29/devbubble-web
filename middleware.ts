import axios from "axios";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSession } from "./app/shared/lib/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isAuthorized = await checkSession(request);
  if (request.nextUrl.pathname.startsWith("/signIn") && isAuthorized) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/signUp") && isAuthorized) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/account") && !isAuthorized) {
    return NextResponse.redirect(new URL("/signIn", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/feed") && !isAuthorized) {
    return NextResponse.redirect(new URL("/signIn", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
