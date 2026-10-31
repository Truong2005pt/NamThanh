const fs = require('fs');
const c = fs.readFileSync('lib/locales/en.ts', 'utf8');
const start = c.indexOf('footer: {');
console.log(c.slice(start, start + 800));
