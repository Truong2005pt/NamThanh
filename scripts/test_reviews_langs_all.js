const fs = require('fs');

const c = fs.readFileSync('app/reviews/page.tsx', 'utf8');
const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];
langs.forEach(l => {
  const hasLang = c.includes(`\n${l}: {`) || c.includes(`\n  ${l}: {`) || c.includes(`\n    ${l}: {`) || c.includes(`\n      ${l}: {`);
  console.log(l.padEnd(5), hasLang);
});
