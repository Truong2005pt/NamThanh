const fs = require('fs');
const content = fs.readFileSync('components/eracex/AffiliateSection.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(115, 250).join('\n'));
