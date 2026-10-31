const fs = require('fs');
const c = fs.readFileSync('lib/locales/vi.ts', 'utf8');
const start = c.indexOf('rules: {');
console.log(c.slice(start, start + 1200));
