const fs = require('fs');

['AffiliateTopPartnersProof.tsx', 'ReviewsComplaintsFaq.tsx', 'TraderDashboardSection.tsx'].forEach(f => {
  const c = fs.readFileSync('components/eracex/' + f, 'utf8');
  console.log('=== ' + f + ' ===');
  const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];
  const found = langs.filter(l => new RegExp(`(^|\\n)\\s*["']?${l}["']?\\s*:\\s*\\{`, 'm').test(c));
  console.log('Supported langs (' + found.length + '/19):', found.join(', '));
});
