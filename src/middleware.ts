// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { RequestCookie } from "next/dist/server/web/spec-extension/cookies";

const protectedRoutes: { [key: string]: boolean } = {
  "/": true,
  protected: true,
};

let credentials: RequestCookie | undefined;
let route: string;

export function middleware(request: NextRequest) {
  credentials = request.cookies.get("token");

  route = request.nextUrl.pathname.split("/")[1] || "/";

  if (["login", "signup", "oauth"].includes(route) && credentials) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (protectedRoutes[route] && !credentials) {
    return NextResponse.redirect(
      new URL(
        `/login${request.nextUrl.search}${
          request.nextUrl.searchParams.get("path")
            ? ""
            : request.nextUrl.pathname !== "/"
            ? `${request.nextUrl.search ? "&" : "?"}path=${
                request.nextUrl.pathname
              }`
            : ""
        }`,
        request.url
      )
    );
  }

  return NextResponse.next();
}
