const fs = require('fs');
let pl = fs.readFileSync('lib/locales/pl.ts', 'utf8');
pl = pl.replace(/"badge":\s*"STOPKA",\s*/g, '');
fs.writeFileSync('lib/locales/pl.ts', pl, 'utf8');
console.log('Removed extra badge from pl.ts footer');
