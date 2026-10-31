const fs = require('fs');

function check(file) {
  if (fs.existsSync(file)) {
    const text = fs.readFileSync(file, 'utf8');
    const matches = text.match(/(video|khớp lệnh|khop lenh)/gi);
    console.log(file, matches ? matches.length : 0);
  }
}

check('components/eracex/GftPlatformMockupSection.tsx');
check('components/eracex/EracexPlatformShowcaseSection.tsx');
