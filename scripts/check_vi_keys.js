const fs = require('fs');
const c = JSON.parse(fs.readFileSync('lib/locales/vi.ts', 'utf8').replace(/^[^{]+/, '').replace(/;?\s*$/, ''));
console.log('Top level keys in vi.ts:', Object.keys(c));
console.log('vi.ts rules section:', JSON.stringify(c.rules, null, 2));
