"use client";

import React from "react";
import { useI18n } from "./useI18n";
import { SupportedLanguage } from "./I18nContext";

export function LanguageSwitcher(): React.JSX.Element {
  const { language, setLanguage } = useI18n();
  const isFR = language === "fr";
  const nextLang: SupportedLanguage = isFR ? "en" : "fr";
  const label = isFR ? "FR" : "EN";
  const title = isFR ? "Switch to English" : "Basculer en français";
  const ariaLabel = title;

  return (
    <button
      type="button"
      onClick={() => setLanguage(nextLang)}
      title={title}
      aria-label={ariaLabel}
      className="font-semibold transition-colors duration-200 hover:opacity-70"
      style={{
        color: "var(--color-dark)",
      }}
    >
      {label}
    </button>
  );
}
