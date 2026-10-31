const fs = require('fs');
const content = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

langs.forEach(lang => {
  const hasLang = content.includes(`  ${lang}: {`) || content.includes(`  "${lang}": {`);
  console.log(`Subpage language ${lang.padEnd(5)}: ${hasLang ? 'OK' : 'MISSING'}`);
});
