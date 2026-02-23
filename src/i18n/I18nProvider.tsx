"use client";

import React, { useCallback, useMemo, useState } from "react";
import {
  I18nContext,
  MessagesDictionary,
  SupportedLanguage,
} from "./I18nContext";

type Props = {
  children: React.ReactNode;
  initialLanguage?: SupportedLanguage;
  messages: Partial<Record<SupportedLanguage, MessagesDictionary>>;
};

function getNestedValue(obj: unknown, path: string): unknown {
  if (typeof obj !== "object" || obj === null) return undefined;
  return path.split(".").reduce<unknown>((acc, part) => {
    if (typeof acc !== "object" || acc === null) return undefined;
    return (acc as Record<string, unknown>)[part];
  }, obj);
}

export function I18nProvider({
  children,
  initialLanguage = "en",
  messages,
}: Props): React.JSX.Element {
  const [language, setLanguage] = useState<SupportedLanguage>(initialLanguage);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const langMessages = messages[language] ?? {};
      const value = getNestedValue(langMessages, key);
      let text = typeof value === "string" ? value : key;
      if (params) {
        Object.entries(params).forEach(([k, v]) => {
          text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        });
      }
      return text;
    },
    [language, messages],
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
