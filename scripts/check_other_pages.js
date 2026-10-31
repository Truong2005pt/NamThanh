const fs = require('fs');

const files = [
  'app/complaints-policy/page.tsx',
  'app/funded-account-disclaimer/page.tsx',
  'app/signup/page.tsx',
  'app/trading-competition/page.tsx'
];

files.forEach(f => {
  if (fs.existsSync(f)) {
    const lines = fs.readFileSync(f, 'utf8').split('\n').slice(0, 15).join('\n');
    console.log(`=== ${f} ===\n${lines}\n`);
  } else {
    console.log(`File not found: ${f}`);
  }
});
