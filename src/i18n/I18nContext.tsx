import React from "react";

export type SupportedLanguage = "en" | "fr";

export type MessagesDictionary = Record<string, unknown>;

export interface I18nContextValue {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

export const I18nContext = React.createContext<I18nContextValue | undefined>(
  undefined,
);
