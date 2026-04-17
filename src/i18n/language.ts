export type Language = "fr" | "en";

export const SUPPORTED_LANGUAGES: readonly Language[] = ["fr", "en"] as const;

const STORAGE_KEY = "sdgtechs.language";

function normalizeLanguage(input: string | null | undefined): Language | null {
  if (!input) return null;
  const value = input.trim().toLowerCase();
  if (!value) return null;
  if (value === "fr" || value.startsWith("fr-")) return "fr";
  if (value === "en" || value.startsWith("en-")) return "en";
  return null;
}

export function getInitialLanguage(fallback: Language = "fr"): Language {
  if (typeof window === "undefined") return fallback;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const parsed = normalizeLanguage(stored);
    if (parsed) return parsed;
  } catch {
    // ignore storage errors
  }

  const browser = normalizeLanguage(window.navigator.language);
  return browser ?? fallback;
}

export function persistLanguage(lang: Language) {
  try {
    window.localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore storage errors
  }
}
