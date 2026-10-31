const fs = require('fs');
let code = fs.readFileSync('components/eracex/Footer.tsx', 'utf8').replace(/\r\n/g, '\n');

// Add import
if (!code.includes('footer-disclaimers-i18n.json')) {
  code = code.replace("import { FooterDisclaimers } from './FooterDisclaimers';", "import { FooterDisclaimers } from './FooterDisclaimers';\nimport disclaimersI18n from '@/content/legal/footer-disclaimers-i18n.json';");
}

// Inside component
code = code.replace("const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];", "const fLinks = FOOTER_EXTRA_DICT[currentLang] || FOOTER_EXTRA_DICT['en'];\n  const legalDict = ((disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)[currentLang] || (disclaimersI18n as unknown as Record<string, { links: Record<string, string> }>)['en']).links;");

// Replace array
const oldLinks = `            {[
              ['/terms-and-conditions', 'Terms & Conditions'],
              ['/funded-terms', 'Funded Account Terms'],
              ['/privacy-policy', 'Privacy Policy'],
              ['/client-privacy-policy', 'Client Privacy Policy'],
              ['/restricted-jurisdictions', 'Restricted Jurisdictions'],
            ].map(([href, label]) => (`;

const newLinks = `            {[
              ['/terms-and-conditions', legalDict.terms],
              ['/funded-terms', legalDict.fundedTerms],
              ['/privacy-policy', legalDict.privacy],
              ['/client-privacy-policy', legalDict.clientPrivacy],
              ['/restricted-jurisdictions', legalDict.restricted],
            ].map(([href, label]) => (`;

code = code.replace(oldLinks, newLinks);

fs.writeFileSync('components/eracex/Footer.tsx', code, 'utf8');
console.log('Updated Footer.tsx successfully');
