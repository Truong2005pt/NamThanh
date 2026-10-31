'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { getDictionary, SUPPORTED_LANGUAGES, TranslationDictionary } from '@/lib/i18n';

interface LanguageContextType {
  currentLang: string;
  setLanguage: (lang: string) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType>({
  currentLang: 'vi',
  setLanguage: () => {},
  t: getDictionary('vi'),
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Start from the server default; the effect below applies ?lang= / saved / browser language after mount.
  const [currentLang, setCurrentLangState] = useState<string>('vi');

  useEffect(() => {
    // 1. Kiểm tra query param ?lang= (ưu tiên cao nhất)
    if (typeof window !== 'undefined') {
      try {
        const params = new URLSearchParams(window.location.search);
        const queryLang = params.get('lang');
        if (queryLang && SUPPORTED_LANGUAGES.some((l) => l.code === queryLang)) {
          setCurrentLangState(queryLang);
          localStorage.setItem('eracex_lang', queryLang);
          document.documentElement.lang = queryLang;
          return;
        }
      } catch (err) {
        console.error('Lỗi khi đọc query lang:', err);
      }
    }

    const saved = localStorage.getItem('eracex_lang');
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      setCurrentLangState(saved);
      document.documentElement.lang = saved;
    } else {
      // Tự động nhận diện ngôn ngữ trình duyệt
      const navLang = navigator.language?.toLowerCase() || '';
      let detected = 'en';
      if (navLang.startsWith('vi')) {
        detected = 'vi';
      } else {
        const found = SUPPORTED_LANGUAGES.find((l) => navLang.startsWith(l.code === 'fil' ? 'fil' : l.code)) || (navLang.startsWith('tl') ? SUPPORTED_LANGUAGES.find((l) => l.code === 'fil') : undefined);
        detected = found ? found.code : 'en';
      }
      setCurrentLangState(detected);
      document.documentElement.lang = detected;
    }

    // Lắng nghe thay đổi từ các tab khác
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'eracex_lang' && e.newValue && SUPPORTED_LANGUAGES.some((l) => l.code === e.newValue)) {
        setCurrentLangState(e.newValue);
        document.documentElement.lang = e.newValue;
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const setLanguage = (lang: string) => {
    setCurrentLangState(lang);
    localStorage.setItem('eracex_lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  };

  const t = getDictionary(currentLang);

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
