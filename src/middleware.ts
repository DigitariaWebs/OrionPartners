import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Simple middleware - let the pages handle their own auth
  return NextResponse.next();
}

// Protect all admin routes except login
export const config = {
  matcher: ["/admin/dashboard/:path*", "/admin/posts/:path*"],
};

