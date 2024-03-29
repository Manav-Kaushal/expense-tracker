import { NextResponse } from "next/server";

export function middleware(request, response) {
  let token = request.cookies.get("token")?.value;

  if (token) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: "/",
};
