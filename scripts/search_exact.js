const fs = require('fs');
const path = require('path');

function searchDetailed(dir) {
  const list = fs.readdirSync(dir);
  for (const f of list) {
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'scratch') continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      searchDetailed(full);
    } else if (/\.(tsx|ts|jsx|js)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (line.includes('Video') || line.includes('Khớp Lệnh') || line.includes('Khớp') || line.includes('trực tiếp')) {
          if (line.toLowerCase().includes('video') && line.toLowerCase().includes('khớp')) {
            console.log(`${full}:${idx+1}: ${line.trim()}`);
          }
        }
      });
    }
  }
}

searchDetailed('components');
searchDetailed('app');
