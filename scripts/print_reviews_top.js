const fs = require('fs');

const c = fs.readFileSync('app/reviews/page.tsx', 'utf8');
console.log(c.slice(0, 800));
