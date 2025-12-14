import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";
import { authConfig } from "./auth.config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        // Apply rate limiting based on email to prevent brute force attacks
        const email = String(credentials.email).toLowerCase().trim();
        const rateLimitResult = checkRateLimit(
          `login:${email}`,
          RATE_LIMITS.login
        );

        if (!rateLimitResult.success) {
          console.warn(`Rate limited login attempt for: ${email}`);
          return null;
        }

        try {
          await connectDB();

          // Find user - case insensitive email search
          // Must explicitly select password since it has select: false in schema
          const user = await User.findOne({ email }).select('+password');

          console.log('[AUTH DEBUG] User found:', !!user);
          console.log('[AUTH DEBUG] Password exists:', !!user?.password);
          console.log('[AUTH DEBUG] Password length:', user?.password?.length);

          if (!user) {
            console.warn(`User not found: ${email}`);
            return null;
          }

          if (!user.password) {
            console.error(`Password field missing for user: ${email}`);
            return null;
          }

          const isPasswordValid = await bcrypt.compare(
            credentials.password as string,
            user.password
          );

          if (!isPasswordValid) {
            console.warn(`Failed login attempt for: ${email}`);
            return null;
          }

          // Successful login
          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
});

