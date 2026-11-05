
const HIGH_SHARE_WORD: Record<string, string> = {
  vi: 'Cao',
  en: 'High',
  zh: '高',
  ja: '高い',
  es: 'Alto',
  pt: 'Alta',
  fr: 'Élevé',
  de: 'Hoch',
  it: 'Alta',
  pl: 'Wysoki',
  tr: 'Yüksek',
  id: 'Tinggi',
  th: 'สูง',
  fil: 'Mataas',
  hi: 'उच्च',
  ko: '높음',
  ru: 'Высокая',
  ar: 'مرتفعة',
  nl: 'Hoog',
};

export function getHighShareWord(lang: string): string {
  return HIGH_SHARE_WORD[lang] || HIGH_SHARE_WORD.en;
}
