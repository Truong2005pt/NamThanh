const fs = require('fs');

const c = fs.readFileSync('app/reviews/page.tsx', 'utf8');
const enIdx = c.indexOf('\n    en: {');
console.log(c.slice(enIdx + 1100, enIdx + 2200));
