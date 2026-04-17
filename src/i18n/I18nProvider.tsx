import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getInitialLanguage, persistLanguage, type Language } from "./language";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage("fr"));

  useEffect(() => {
    document.documentElement.lang = language;
    persistLanguage(language);

    // Basic UX: keep the tab title consistent with the chosen language.
    document.title =
      language === "fr"
        ? "SDG Techs | Agence Marketing Digital"
        : "SDG Techs | Digital Marketing Agency";

    // Some of the theme scripts (meanmenu) rebuild on resize;
    // trigger a resize so the generated mobile menu reflects new labels.
    try {
      window.dispatchEvent(new Event("resize"));
    } catch {
      // ignore
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export type { Language };
