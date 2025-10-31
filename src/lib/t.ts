import en from "../i18n/en.json";
import fr from "../i18n/fr.json";

import type { Locale } from "./i18n";
const dict = { en, fr } as const;

export function t(lang: Locale, key: string) {
  return (dict[lang] as Record<string, string>)[key] ?? key;
}
