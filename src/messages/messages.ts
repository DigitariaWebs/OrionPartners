import en from "@/messages/en.json";
import fr from "@/messages/fr.json";

export type SupportedLanguage = "en" | "fr";

export const messages: Record<SupportedLanguage, typeof en> = {
  en,
  fr,
};

export const defaultLanguage: SupportedLanguage = "en";
