const fs = require('fs');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

langs.forEach(l => {
  const c = fs.readFileSync('lib/locales/' + l + '.ts', 'utf8');
  const m = c.match(/copyright:\s*['"]([^'"]+)['"]/);
  console.log(l.padEnd(5), m ? m[1] : 'NOT FOUND');
});
