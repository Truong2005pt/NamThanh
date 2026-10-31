const fs = require('fs');

['AffiliateSection.tsx', 'AffiliateTopPartnersProof.tsx', 'ReviewsSection.tsx', 'RulesSuccessStories.tsx'].forEach(f => {
  const p = 'components/eracex/' + f;
  const content = fs.readFileSync(p, 'utf8');
  console.log('================= ' + f + ' =================');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('const d') || l.includes('const DICTIONARY') || l.includes('const text') || l.includes('const content = {') || l.includes('currentLang')) {
      console.log(`${idx + 1}: ${l}`);
    }
  });
});
