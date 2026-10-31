const fs = require('fs');
const path = require('path');

function inspectFiles(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'scratch') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      inspectFiles(full);
    } else if (/\.(tsx|ts)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('currentLang') || content.includes('useLanguage') || content.includes('TRANSLATION') || content.includes('Dictionary')) {
        console.log(full);
      }
    }
  }
}

console.log('--- Language using files ---');
inspectFiles('components');
inspectFiles('app');
inspectFiles('lib');
