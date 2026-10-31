// scripts/apply_gft_translations.js
const fs = require('fs');
const path = require('path');

const gftEs = require('./test_es'); // contains es
const mod1 = require('./gft_lang_modules'); // pt, fr
const mod2 = require('./gft_lang_modules_2'); // de, it, pl, tr, id, th
const mod3 = require('./gft_lang_modules_3'); // fil, hi, ko, ru, ar, nl

const originalPath = path.join(__dirname, '../components/eracex/gft-translations.ts');
const originalContent = fs.readFileSync(originalPath, 'utf8');

// Find where "  en: {" ends before "};"
// Let's find the closing "  },\n};"
const endEnIdx = originalContent.lastIndexOf('  },\n};');
if (endEnIdx === -1) {
  console.error('Could not find end of en dictionary in gft-translations.ts');
  process.exit(1);
}

const beforeClosing = originalContent.slice(0, endEnIdx + 4); // includes "  },"
const afterClosing = originalContent.slice(endEnIdx + 4); // ",\n};\n\nexport function getGftTranslations..."

const allNewLangs = {
  es: require('./test_es').es || gftEs,
  ...mod1,
  ...mod2,
  ...mod3
};

let injectedCode = '';
for (const [lang, dict] of Object.entries(allNewLangs)) {
  injectedCode += `\n  ${lang}: ${JSON.stringify(dict, null, 2).replace(/\n/g, '\n  ')},`;
}

// Ensure the new content ends properly
const newContent = beforeClosing + injectedCode + '\n' + afterClosing.trimStart();

fs.writeFileSync(originalPath, newContent, 'utf8');
console.log('Successfully updated components/eracex/gft-translations.ts with all 19 languages!');
