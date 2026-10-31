const fs = require('fs');
const content = fs.readFileSync('components/eracex/gft-translations.ts', 'utf8');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

langs.forEach(lang => {
  const hasLang = content.includes(`  ${lang}: {`) || content.includes(`  "${lang}": {`);
  console.log(`Language ${lang.padEnd(5)}: ${hasLang ? 'OK' : 'MISSING'}`);
});
