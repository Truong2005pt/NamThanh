const fs = require('fs');

const text = fs.readFileSync('components/eracex/EracexPlatformShowcaseSection.tsx', 'utf8');
text.split('\n').forEach((line, i) => {
  if (/(video|khớp lệnh|khop lenh)/i.test(line)) {
    console.log(`${i+1}: ${line.trim()}`);
  }
});
