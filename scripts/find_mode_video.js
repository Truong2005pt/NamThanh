const fs = require('fs');
const path = require('path');

function searchWord(dir, word) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'scratch') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchWord(full, word);
    } else if (/\.(tsx|ts|jsx|js)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes(word)) {
        console.log(`Found ${word} in: ${full}`);
      }
    }
  }
}

searchWord('components', 'modeVideo');
searchWord('app', 'modeVideo');
