const fs = require('fs');

const content = fs.readFileSync('components/eracex/TraderVideosSection.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('categoryLabel[') || l.includes('title[') || l.includes('quote[')) {
    console.log(`${i+1}: ${l.trim()}`);
  }
});
