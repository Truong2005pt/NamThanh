const fs = require('fs');

['pricing', 'rules', 'affiliate', 'reviews', 'faq'].forEach(p => {
  const file = `app/${p}/page.tsx`;
  const content = fs.readFileSync(file, 'utf8');
  console.log(`=== app/${p}/page.tsx ===`);
  const lines = content.split('\n');
  const dStart = lines.findIndex(l => l.includes('const d = {') || l.includes('const DICTIONARY:'));
  console.log('d starts around line', dStart + 1);
  console.log(lines.slice(dStart, dStart + 25).join('\n'));
});
