"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Lang } from "@/data/content";

// Converte recursivamente os textos literais (ex: "Skip to content") em string comum
type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationType = DeepString<(typeof copy)["en"]>;

type Ctx = {
  lang: Lang;
  toggle: () => void;
  t: TranslationType;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-lang");
    if (saved === "en" || saved === "pt") setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-lang", lang);
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      toggle: () => setLang((prev) => (prev === "en" ? "pt" : "en")),
      t: copy[lang] as unknown as TranslationType,
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}