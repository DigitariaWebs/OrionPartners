"use client";

import { useI18n } from "@/i18n/useI18n";

export default function BlogPostLoading() {
  const { t } = useI18n();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
        <p className="text-dark/60">{t("loading.article")}</p>
      </div>
    </div>
  );
}
