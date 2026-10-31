const fs = require('fs');
const path = require('path');
const dir = 'lib/locales';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts'));

files.forEach(f => {
  const c = fs.readFileSync(path.join(dir, f), 'utf8');
  const emptyMatches = [...c.matchAll(/:\s*['"]['"]/g)];
  console.log(f.padEnd(8), 'empty strings:', emptyMatches.length);
});
