const fs = require('fs');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

const content = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');

console.log('--- Analyzing subpage-translations.ts ---');
// Evaluate the object or parse keys
// Let's see which sections are defined in en
// Let's create a temporary node script that imports or requires subpage-translations
