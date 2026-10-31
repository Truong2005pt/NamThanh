const fs = require('fs');

const content = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');
const enIdx = content.indexOf('  en: {');
console.log('en begins at index:', enIdx);
if (enIdx !== -1) {
  console.log(content.slice(enIdx, enIdx + 400));
}
