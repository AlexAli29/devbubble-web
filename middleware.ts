import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkSession } from "./app/shared/lib/server";

export async function middleware(request: NextRequest) {
  const isAuthorized = await checkSession(request);
  const email = request.nextUrl.searchParams.get("email");

  if (request.nextUrl.pathname == "/" && isAuthorized) {
    return NextResponse.redirect(new URL("/feed", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/signIn") && isAuthorized) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/signUp") && isAuthorized) {
    return NextResponse.redirect(new URL("/account", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/signIn/verification") && !email) {
    return NextResponse.redirect(new URL("/signIn", request.url));
  }
  if (request.nextUrl.pathname.startsWith("/signUp/verification") && !email) {
    return NextResponse.redirect(new URL("/signUp", request.url));
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
