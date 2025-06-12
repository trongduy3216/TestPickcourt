import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Log để kiểm tra middleware chạy
  console.log(
    `🚀 Middleware running for: ${request.nextUrl.pathname} at ${new Date().toISOString()}`
  );

  // Get auth token from cookies
  const authToken = request.cookies.get("auth-token")?.value;
  const userRole = request.cookies.get("user-role")?.value;

  const { pathname } = request.nextUrl;

  // Route definitions for clarity
  const playerRoutes = ["/dashboard", "/my-bookings", "/history", "/profile"];

  // Auth pages that logged-in users shouldn't access
  const authPages = ["/login", "/register", "/forgot-password"];

  // If user is authenticated and tries to access auth pages, redirect to appropriate dashboard
  if (authToken && authPages.some((page) => pathname.startsWith(page))) {
    const redirectUrl = userRole === "owner" ? "/owner/dashboard" : "/dashboard";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  // Check owner routes protection
  if (pathname.startsWith("/owner")) {
    if (!authToken) {
      // Not authenticated, redirect to login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    if (userRole !== "owner") {
      // Not owner, redirect to appropriate dashboard or 403
      const redirectUrl = userRole === "player" ? "/dashboard" : "/";
      return NextResponse.redirect(new URL(redirectUrl, request.url));
    }
  }

  // Check player routes protection
  if (playerRoutes.some((route) => pathname.startsWith(route))) {
    if (!authToken) {
      // Not authenticated, redirect to login
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }

    // Player can access these routes, owner should stay in their area
    if (userRole === "owner" && pathname.startsWith("/dashboard")) {
      return NextResponse.redirect(new URL("/owner/dashboard", request.url));
    }
  }

  // Check courts page - should redirect based on role
  if (pathname === "/courts" && authToken) {
    // Authenticated users can access courts, but owners might want different view
    // This is optional - keep current behavior
  }

  return NextResponse.next();
}
