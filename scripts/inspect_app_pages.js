const fs = require('fs');

const appPages = [
  'app/login/page.tsx',
  'app/sign-up/page.tsx',
  'app/pricing/page.tsx',
  'app/rules/page.tsx',
  'app/affiliate/page.tsx',
  'app/reviews/page.tsx',
  'app/faq/page.tsx',
  'app/blog/page.tsx',
  'app/blog/[slug]/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/risk-disclosure/page.tsx'
];

appPages.forEach(p => {
  const content = fs.readFileSync(p, 'utf8');
  console.log('=== ' + p + ' ===');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('const d') || l.includes('const DICTIONARY') || l.includes('currentLang') || l.includes('useLanguage')) {
      console.log(`  ${idx + 1}: ${l.trim()}`);
    }
  });
});
