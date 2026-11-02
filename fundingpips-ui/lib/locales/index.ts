import { Dict } from './types';
import { en } from './en';
import { vi } from './vi';
import { es } from './es';
import { pt } from './pt';
import { fr } from './fr';
import { de } from './de';
import { it } from './it';
import { pl } from './pl';
import { tr } from './tr';
import { id } from './id';
import { th } from './th';
import { tl } from './tl';
import { hi } from './hi';
import { ja } from './ja';
import { zh } from './zh';

export type { Dict };

export const translations: Record<string, Dict> = {
  en,
  vi,
  es,
  pt,
  fr,
  de,
  it,
  pl,
  tr,
  id,
  th,
  tl,
  hi,
  ja,
  zh,
};

export function getDict(lang: string): Dict {
  return translations[lang] || translations.en;
}
