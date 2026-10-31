const fs = require('fs');
const content = fs.readFileSync('components/eracex/CheckoutModal.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(25, 90).join('\n'));
