const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    if (f === 'node_modules' || f === '.next' || f === '.git') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchDir(full);
    } else if (/\.(tsx|ts|jsx|js|json|css|html)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('Video') && (content.includes('Khớp') || content.includes('Lệnh'))) {
        console.log('Found in:', full);
      }
    }
  }
}

searchDir('.');
console.log('Search complete.');
