'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Dict, getDict, translations } from './locales';

export const LANG_CODES = ['en', 'es', 'pt', 'hi', 'vi', 'id', 'fr', 'de', 'it', 'pl', 'tr', 'th', 'tl', 'ja', 'zh'] as const;
export type Lang = (typeof LANG_CODES)[number];

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  hi: 'हिन्दी',
  vi: 'Tiếng Việt',
  id: 'Bahasa Indonesia',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  pl: 'Polski',
  tr: 'Türkçe',
  th: 'ไทย',
  tl: 'Tagalog',
  ja: '日本語',
  zh: '中文',
};

const KEYS = [
  'home', 'pricing', 'rules', 'affiliate', 'faq', 'blog', 'login', 'start',
  'legal', 'menu', 'terms', 'fundedTerms', 'privacy', 'clientPrivacy',
  'cookies', 'risk', 'restricted', 'pages', 'programs', 'contact', 'rights',
  'cookieText', 'accept', 'decline', 'disclaimer'
] as const;
export type Key = (typeof KEYS)[number];

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: Key) => string;
  dict: Dict;
}

const defaultDict = getDict('en');

const Ctx = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (k) => defaultDict.nav[k] || k,
  dict: defaultDict,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setL] = useState<Lang>('en');

  useEffect(() => {
    try {
      const s = localStorage.getItem('lang') as Lang | null;
      if (s && (LANG_CODES as readonly string[]).includes(s)) {
        setL(s);
        document.documentElement.lang = s;
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setL(l);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l;
    }
    try {
      localStorage.setItem('lang', l);
    } catch {}
  };

  const currentDict = getDict(lang);

  const t = (k: Key): string => {
    return (currentDict.nav as any)[k] || (defaultDict.nav as any)[k] || k;
  };

  return (
    <Ctx.Provider value={{ lang, setLang, t, dict: currentDict }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLang = () => useContext(Ctx);
export type { Dict };
