export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LANG = "fr";
export type Locale = (typeof LOCALES)[number];
