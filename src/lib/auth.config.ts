import type { NextAuthConfig } from "next-auth";

/**
 * Edge-compatible auth configuration
 * This file should NOT import any database dependencies (mongoose, etc.)
 * as it needs to run in Edge Runtime (middleware)
 */
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith("/admin");
      const isOnLogin = nextUrl.pathname === "/admin/login";
      const isOnAdminApi = nextUrl.pathname.startsWith("/api/admin/");
      const isSetupApi = nextUrl.pathname === "/api/admin/setup";

      // Allow setup API without auth (it has its own protection)
      if (isSetupApi) {
        return true;
      }

      // Protect admin API routes
      if (isOnAdminApi) {
        if (!isLoggedIn) return false;
        const userRole = (auth?.user as { role?: string })?.role;
        return userRole === "admin" || userRole === "editor";
      }

      // Protect admin pages (except login)
      if (isOnAdmin && !isOnLogin) {
        if (!isLoggedIn) {
          return false; // Redirect to login
        }
        const userRole = (auth?.user as { role?: string })?.role;
        if (userRole !== "admin" && userRole !== "editor") {
          return Response.redirect(new URL("/", nextUrl));
        }
        return true;
      }

      // Allow login page
      if (isOnLogin) {
        if (isLoggedIn) {
          return Response.redirect(new URL("/admin/dashboard", nextUrl));
        }
        return true;
      }

      // Allow all other routes
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role;
        token.id = (user as { id?: string }).id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { role?: string }).role = token.role as string;
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60, // 8 hours
    updateAge: 60 * 60, // Update session every hour
  },
  cookies: {
    sessionToken: {
      name: `${
        process.env.NODE_ENV === "production" ? "__Secure-" : ""
      }next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
        maxAge: 8 * 60 * 60,
      },
    },
    callbackUrl: {
      name: `${
        process.env.NODE_ENV === "production" ? "__Secure-" : ""
      }next-auth.callback-url`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
    csrfToken: {
      name: `${
        process.env.NODE_ENV === "production" ? "__Host-" : ""
      }next-auth.csrf-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
  debug: true,
  providers: [], // Providers are added in auth.ts
};


