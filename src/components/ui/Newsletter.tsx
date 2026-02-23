"use client";

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/useI18n';

interface NewsletterProps {
  variant?: 'footer' | 'section' | 'inline';
  className?: string;
}

export default function Newsletter({ variant = 'footer', className = '' }: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const { t } = useI18n();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setStatus("error");
      setMessage(t("newsletter.empty_email"));
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage(t("newsletter.invalid_email"));
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/newsletter/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(t("newsletter.success"));
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.error || t("newsletter.error")
        );
      }
    } catch {
      setStatus("error");
      setMessage(t("newsletter.error"));
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    }
  };

  const isFooterVariant = variant === "footer";
  const textColor = isFooterVariant
    ? "rgba(0, 0, 0, 0.7)"
    : "var(--color-text-primary)";
  const headingColor = isFooterVariant
    ? "var(--color-primary)"
    : "var(--color-primary)";

  return (
    <div className={`newsletter-container ${className}`}>
      <div className="mb-4">
        <h3
          className="text-lg font-bold mb-2 flex items-center gap-2"
          style={{ color: headingColor }}
        >
          <Mail className="w-5 h-5" />
          {t("newsletter.title")}
        </h3>
        <p className="text-sm mb-4" style={{ color: textColor }}>
          {t("newsletter.description")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("newsletter.placeholder")}
            disabled={isLoading}
            className={`w-full px-4 py-2 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 ${
              isFooterVariant
                ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
                : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:ring-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]"
            } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full px-4 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
            isLoading
              ? "opacity-60 cursor-not-allowed"
              : "hover:transform hover:scale-[1.02] active:scale-[0.98]"
          }`}
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-white)",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.currentTarget.style.backgroundColor =
                "var(--color-primary-hover)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--color-primary)";
          }}
        >
          {isLoading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t("newsletter.subscribing")}
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              {t("newsletter.subscribe")}
            </>
          )}
        </button>
      </form>

      <AnimatePresence>
        {status !== "idle" && message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-3 p-3 rounded-lg flex items-center gap-2 text-sm ${
              status === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
            )}
            <span>{message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

