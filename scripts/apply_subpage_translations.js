// scripts/apply_subpage_translations.js
const fs = require('fs');
const path = require('path');

const mod1 = require('./subpage_lang_es_pt_fr'); // es, pt, fr
const mod2 = require('./subpage_lang_de_it_pl'); // de, it, pl
const mod3 = require('./subpage_lang_tr_id_th'); // tr, id, th
const mod4 = require('./subpage_lang_fil_hi_ko'); // fil, hi, ko
const mod5 = require('./subpage_lang_ru_ar_nl'); // ru, ar, nl

const targetPath = path.join(__dirname, '../components/eracex/subpage-translations.ts');
const targetContent = fs.readFileSync(targetPath, 'utf8');

const lastCloseIdx = targetContent.lastIndexOf('  },\n};');
if (lastCloseIdx === -1) {
  console.error('Could not find last close of SUBPAGE_TRANSLATIONS');
  process.exit(1);
}

const beforeClosing = targetContent.slice(0, lastCloseIdx + 4);
const afterClosing = targetContent.slice(lastCloseIdx + 4);

const allNewLangs = {
  ...mod1,
  ...mod2,
  ...mod3,
  ...mod4,
  ...mod5
};

console.log('Languages to inject:', Object.keys(allNewLangs));

let injectedCode = '';
for (const [lang, dict] of Object.entries(allNewLangs)) {
  injectedCode += `\n  ${lang}: ${JSON.stringify(dict, null, 2).replace(/\n/g, '\n  ')},`;
}

const newContent = beforeClosing + injectedCode + '\n' + afterClosing.trimStart();
fs.writeFileSync(targetPath, newContent, 'utf8');
console.log('Successfully updated components/eracex/subpage-translations.ts with all 19 languages!');
