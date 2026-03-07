import React, { createContext, useContext, useState, useCallback } from "react";
import { Lang, translations } from "./i18n";

type LanguageContextType = {
  lang: Lang;
  t: typeof translations.en;
  toggleLang: () => void;
  isRtl: boolean;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "ar" : "en")), []);
  const t = translations[lang];
  const isRtl = lang === "ar";

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang, isRtl }}>
      <div dir={isRtl ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
