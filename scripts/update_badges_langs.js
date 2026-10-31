const fs = require('fs');

const reviewsWordMap = {
  vi: 'đánh giá',
  en: 'reviews',
  zh: '条评价',
  ja: '件のレビュー',
  es: 'reseñas',
  pt: 'avaliações',
  fr: 'avis',
  de: 'Bewertungen',
  it: 'recensioni',
  pl: 'opinii',
  tr: 'değerlendirme',
  id: 'ulasan',
  th: 'รีวิว',
  fil: 'mga review',
  hi: 'समीक्षाएं',
  ko: '개의 평가',
  ru: 'отзывов',
  ar: 'تقييم',
  nl: 'beoordelingen',
};

let code = fs.readFileSync('components/eracex/PaymentAndPlatformBadges.tsx', 'utf8').replace(/\r\n/g, '\n');

const oldLine = `  const { currentLang } = useLanguage();
  const reviewsWord = currentLang === 'vi' ? 'đánh giá' : 'reviews';`;

const newLine = `  const { currentLang } = useLanguage();
  const REVIEWS_WORDS: Record<string, string> = ${JSON.stringify(reviewsWordMap, null, 2)};
  const reviewsWord = REVIEWS_WORDS[currentLang] || 'reviews';`;

code = code.replace(oldLine, newLine);
fs.writeFileSync('components/eracex/PaymentAndPlatformBadges.tsx', code, 'utf8');
console.log('Successfully updated PaymentAndPlatformBadges.tsx with 19 languages');
