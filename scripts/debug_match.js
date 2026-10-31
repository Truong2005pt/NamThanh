const fs = require('fs');

const en = JSON.parse(fs.readFileSync('content/faq/locales/en.json', 'utf8'));
const viStrings = require('./faq_lang_vi');

const p1 = en.two.categories[0].items[0].a[0].x;
console.log('En text:');
console.log(JSON.stringify(p1));

const keys = Object.keys(require('./faq_lang_vi'));
// Let's inspect the first answer key in faq_lang_vi.js
const code = fs.readFileSync('scripts/faq_lang_vi.js', 'utf8');
const sampleMatch = code.match(/'It is a two-phase evaluation[^']+'/);
console.log('Script key:');
console.log(sampleMatch ? JSON.stringify(sampleMatch[0]) : 'none');
console.log('Direct comparison:', sampleMatch ? p1 === sampleMatch[0].slice(1, -1) : false);
