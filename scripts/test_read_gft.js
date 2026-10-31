const fs = require('fs');

const fileContent = fs.readFileSync('components/eracex/gft-translations.ts', 'utf8');
const viMatch = fileContent.indexOf('  vi: {');
const zhMatch = fileContent.indexOf('  zh: {');
const jaMatch = fileContent.indexOf('  ja: {');
const enMatch = fileContent.indexOf('  en: {');
console.log({ viMatch, zhMatch, jaMatch, enMatch });
