const fs = require('fs');

const pages = [
  'app/rules/page.tsx',
  'app/pricing/page.tsx',
  'app/reviews/page.tsx',
  'app/affiliate/page.tsx',
  'app/blog/page.tsx',
  'app/login/page.tsx',
  'app/sign-up/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx'
];

pages.forEach(p => {
  const c = fs.readFileSync(p, 'utf8');
  const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];
  const found = langs.filter(l => c.includes(`\n  ${l}: {`) || c.includes(`\n    "${l}": {`) || c.includes(`\n  "${l}": {`) || c.includes(`\n    ${l}: {`));
  console.log(p.padEnd(25), 'langs (' + found.length + '/19):', found.join(', '));
});
