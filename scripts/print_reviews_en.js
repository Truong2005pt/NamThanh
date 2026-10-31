const fs = require('fs');

const c = fs.readFileSync('app/reviews/page.tsx', 'utf8');
const enIdx = c.indexOf('\n    en: {');
const nextIdx = c.indexOf('\n    ', enIdx + 10);
console.log(c.slice(enIdx, nextIdx));
