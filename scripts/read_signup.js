const fs = require('fs');
const content = fs.readFileSync('app/sign-up/page.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(20, 115).join('\n'));
