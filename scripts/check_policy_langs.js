const fs = require('fs');

['app/complaints-policy/page.tsx', 'app/funded-account-disclaimer/page.tsx'].forEach(f => {
  const c = fs.readFileSync(f, 'utf8');
  const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];
  const found = langs.filter(l => c.includes(`\n  ${l}: {`));
  console.log(f, 'langs (' + found.length + '/19):', found.join(', '));
});
