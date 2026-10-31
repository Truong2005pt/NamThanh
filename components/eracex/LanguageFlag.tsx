import React from 'react';
import GB from 'country-flag-icons/react/3x2/GB';
import ES from 'country-flag-icons/react/3x2/ES';
import BR from 'country-flag-icons/react/3x2/BR';
import IN from 'country-flag-icons/react/3x2/IN';
import VN from 'country-flag-icons/react/3x2/VN';
import ID from 'country-flag-icons/react/3x2/ID';
import FR from 'country-flag-icons/react/3x2/FR';
import DE from 'country-flag-icons/react/3x2/DE';
import IT from 'country-flag-icons/react/3x2/IT';
import PL from 'country-flag-icons/react/3x2/PL';
import TR from 'country-flag-icons/react/3x2/TR';
import TH from 'country-flag-icons/react/3x2/TH';
import PH from 'country-flag-icons/react/3x2/PH';
import JP from 'country-flag-icons/react/3x2/JP';
import CN from 'country-flag-icons/react/3x2/CN';
import KR from 'country-flag-icons/react/3x2/KR';
import RU from 'country-flag-icons/react/3x2/RU';
import AE from 'country-flag-icons/react/3x2/AE';
import NL from 'country-flag-icons/react/3x2/NL';

type FlagComponent = typeof GB;

// Language code -> country flag. Real SVG flags: emoji flags render as letters ("VN") on Windows.
const FLAG_BY_LANG: Record<string, FlagComponent> = {
  en: GB,
  es: ES,
  pt: BR,
  hi: IN,
  vi: VN,
  id: ID,
  fr: FR,
  de: DE,
  it: IT,
  pl: PL,
  tr: TR,
  th: TH,
  fil: PH,
  ja: JP,
  zh: CN,
  ko: KR,
  ru: RU,
  ar: AE,
  nl: NL,
};

export const LanguageFlag: React.FC<{ code: string; className?: string }> = ({ code, className = 'w-6 h-4' }) => {
  const Flag = FLAG_BY_LANG[code] || GB;
  return <Flag className={`shrink-0 rounded-[2px] ${className}`} />;
};
