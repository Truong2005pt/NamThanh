const fs = require('fs');
const c = fs.readFileSync('lib/locales/vi.ts', 'utf8');
const lines = c.split('\n');
const idx = lines.findIndex(l => l.includes('rules'));
lines.slice(idx, idx + 45).forEach((l, i) => console.log(idx + 1 + i, l));
