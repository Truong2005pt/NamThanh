const fs = require('fs');

// ==========================================
// 1. FIX BlogSection.tsx
// ==========================================
console.log('Fixing BlogSection.tsx...');
let blogContent = fs.readFileSync('components/eracex/BlogSection.tsx', 'utf8');

// Replace post 1 content
blogContent = blogContent.replace(
  /content:\s*currentLang === 'vi'\s*\?[\s\S]*?:\s*\[[\s\S]*?\](?=\s*\},[\s\n]*\{[\s\n]*id: 'zero-minimum-trading-days')/,
  'content: bDict.post1Content'
);

// Replace post 2 content
blogContent = blogContent.replace(
  /content:\s*currentLang === 'vi'\s*\?[\s\S]*?:\s*\[[\s\S]*?\](?=\s*\},[\s\n]*\{[\s\n]*id: 'scaling-plan-roadmap-1m')/,
  'content: bDict.post2Content'
);

// Replace post 3 content
blogContent = blogContent.replace(
  /content:\s*currentLang === 'vi'\s*\?[\s\S]*?:\s*\[[\s\S]*?\](?=\s*\},[\s\n]*\];)/,
  'content: bDict.post3Content'
);

fs.writeFileSync('components/eracex/BlogSection.tsx', blogContent, 'utf8');
console.log('BlogSection.tsx updated.');

// ==========================================
// 2. FIX ContactView.tsx
// ==========================================
console.log('Fixing ContactView.tsx...');
let contactContent = fs.readFileSync('components/eracex/ContactView.tsx', 'utf8');

const oldContactOptionsRegex = /<option value="technical">\{currentLang === 'vi'[\s\S]*?<\/option>\s*<option value="payout">\{currentLang === 'vi'[\s\S]*?<\/option>\s*<option value="rules">\{currentLang === 'vi'[\s\S]*?<\/option>\s*<option value="billing">\{currentLang === 'vi'[\s\S]*?<\/option>\s*<option value="affiliate">\{currentLang === 'vi'[\s\S]*?<\/option>\s*<option value="general">\{currentLang === 'vi'[\s\S]*?<\/option>/;

const newContactOptions = `<option value="technical">{cats.technical}</option>
                      <option value="payout">{cats.payout}</option>
                      <option value="rules">{cats.rules}</option>
                      <option value="billing">{cats.billing}</option>
                      <option value="affiliate">{cats.affiliate}</option>
                      <option value="general">{cats.general}</option>`;

contactContent = contactContent.replace(oldContactOptionsRegex, newContactOptions);
fs.writeFileSync('components/eracex/ContactView.tsx', contactContent, 'utf8');
console.log('ContactView.tsx updated.');

// ==========================================
// 3. FIX PayoutProofSection.tsx
// ==========================================
console.log('Fixing PayoutProofSection.tsx...');
let payoutContent = fs.readFileSync('components/eracex/PayoutProofSection.tsx', 'utf8');

const oldDateRegex = /const dateStr = currentLang === 'vi'[\s\S]*?: rec\.dateEn;/;
const newDateCode = `const dateStr = rec.dateVi
                      .replace('Hôm nay', pProof.today)
                      .replace('Hôm qua', pProof.yesterday)
                      .replace('2 ngày trước', pProof.daysAgo);`;

payoutContent = payoutContent.replace(oldDateRegex, newDateCode);
fs.writeFileSync('components/eracex/PayoutProofSection.tsx', payoutContent, 'utf8');
console.log('PayoutProofSection.tsx updated.');

// ==========================================
// 4. FIX PricingTraderReviews.tsx
// ==========================================
console.log('Fixing PricingTraderReviews.tsx...');
let pricingContent = fs.readFileSync('components/eracex/PricingTraderReviews.tsx', 'utf8');

pricingContent = pricingContent.replace(
  '<span>{dReviews ? dReviews.viewProof : (currentLang === "vi" ? "Xem Chứng Chỉ" : currentLang === "zh" ? "查看通关凭证" : currentLang === "ja" ? "認定証を見る" : "View Proof")}</span>',
  '<span>{dReviews.viewProof}</span>'
);

fs.writeFileSync('components/eracex/PricingTraderReviews.tsx', pricingContent, 'utf8');
console.log('PricingTraderReviews.tsx updated.');

console.log('All 4 files updated successfully.');
