import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

// Create edge-compatible auth (no database dependencies)
const { auth } = NextAuth(authConfig);

export default auth(async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Create response with security headers
  const response = NextResponse.next();

  // ===== SECURITY HEADERS =====

  // Prevent clickjacking attacks
  response.headers.set("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Control referrer information
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Legacy XSS protection (for older browsers)
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Restrict browser features
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()"
  );

  // HTTP Strict Transport Security (HSTS)
  if (process.env.NODE_ENV === "production") {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=31536000; includeSubDomains; preload"
    );
  }

  // Prevent DNS prefetch for privacy
  response.headers.set("X-DNS-Prefetch-Control", "off");

  // Disable page caching for sensitive routes
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
  }

  // Content Security Policy
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data: https://res.cloudinary.com https://*.cloudinary.com",
    "font-src 'self' https://r2cdn.perplexity.ai",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "connect-src 'self' https://api.cloudinary.com",
    "media-src 'self' https://res.cloudinary.com https://*.cloudinary.com",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
  ];

  // Only upgrade insecure requests in production
  if (process.env.NODE_ENV === "production") {
    cspDirectives.push("upgrade-insecure-requests");
  }

  response.headers.set("Content-Security-Policy", cspDirectives.join("; "));

  return response;
});

// Apply middleware to relevant routes
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public assets (images, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};


