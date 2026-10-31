const fs = require('fs');

const files = [
  'AffiliateMilestonesFaq.tsx',
  'AffiliateTopPartnersProof.tsx',
  'ReviewsComplaintsFaq.tsx',
  'TraderDashboardSection.tsx',
  'PolicyPage.tsx',
  'TransparencyView.tsx'
];

files.forEach(f => {
  const c = fs.readFileSync('components/eracex/' + f, 'utf8');
  console.log('=== ' + f + ' ===');
  console.log('Length:', c.length);
  const langs = [...c.matchAll(/["']([a-z]{2})["']:\s*\{/g)].map(x => x[1]);
  if (langs.length > 0) {
    console.log('Langs found:', [...new Set(langs)].join(', '));
  } else {
    console.log('No lang dict keys found! First 25 lines:');
    console.log(c.split('\n').slice(0, 25).join('\n'));
  }
});
