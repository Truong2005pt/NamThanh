const fs = require('fs');

const components = [
  'Footer.tsx',
  'BenefitsGrid.tsx',
  'CompetitionBanner.tsx',
  'PricingTraderReviews.tsx',
  'TradingObjectivesMatrix.tsx',
  'PayoutProofSection.tsx',
  'GftTestimonialsSection.tsx',
  'FaqSection.tsx',
  'BlogSection.tsx',
  'ReviewsComplaintsFaq.tsx',
  'AffiliateMilestonesFaq.tsx',
  'PaymentAndPlatformBadges.tsx',
  'TransparencyView.tsx'
];

components.forEach(c => {
  const name = c.replace('.tsx', '');
  const res = [];
  const searchFiles = ['app/page.tsx', 'app/pricing/page.tsx', 'app/rules/page.tsx', 'app/affiliate/page.tsx', 'app/reviews/page.tsx', 'app/faq/page.tsx', 'app/competition/page.tsx'];
  searchFiles.forEach(sf => {
    if (fs.existsSync(sf)) {
      const c = fs.readFileSync(sf, 'utf8');
      if (c.includes(name)) res.push(sf);
    }
  });
  console.log(name, 'used in:', res);
});
