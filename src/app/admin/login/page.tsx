"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Suppress NextAuth console errors during initial load
  useEffect(() => {
    const originalWarn = console.warn;
    const originalError = console.error;

    console.warn = (...args) => {
      if (
        args[0]?.includes?.("ClientFetchError") ||
        args[0]?.includes?.("Failed to fetch")
      ) {
        return; // Suppress auth-related fetch errors
      }
      originalWarn.apply(console, args);
    };

    console.error = (...args) => {
      if (
        args[0]?.includes?.("ClientFetchError") ||
        args[0]?.includes?.("Failed to fetch")
      ) {
        return; // Suppress auth-related fetch errors
      }
      originalError.apply(console, args);
    };

    return () => {
      console.warn = originalWarn;
      console.error = originalError;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("[LOGIN] SignIn result:", result);

      // Check for actual errors (not the string 'undefined')
      if (result?.error && result.error !== 'undefined') {
        console.error("[LOGIN] Error:", result.error);
        setError(result.error);
      } else if (result?.ok) {
        console.log("[LOGIN] Success! Redirecting to dashboard...");
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        console.error("[LOGIN] Unexpected result:", result);
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      console.error("[LOGIN] Exception:", err);
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#095797] via-[#0a5fa3] to-[#095797] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#095797] mb-2">
            Admin Login
          </h1>
          <p className="text-gray-600">Sign in to manage your blog</p>
        </div>

        {error && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent transition-all"
              placeholder="admin@example.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#095797] focus:border-transparent transition-all"
              placeholder="••••••••"
              required
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#095797] hover:bg-[#074171] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#095797] hover:underline">
            ← Back to website
          </Link>
        </div>
      </motion.div>
    </div>
  );
}



