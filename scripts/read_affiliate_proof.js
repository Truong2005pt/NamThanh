const fs = require('fs');
const content = fs.readFileSync('components/eracex/AffiliateTopPartnersProof.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(15, 80).join('\n'));
