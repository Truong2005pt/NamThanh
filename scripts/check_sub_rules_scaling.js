const fs = require('fs');
const ts = require('typescript');

const code = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');
const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);
const sub = m.exports.SUBPAGE_TRANSLATIONS;

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

langs.forEach(l => {
  console.log(l.padEnd(5), 'has rulesScaling:', !!sub[l]?.rulesScaling);
  if (sub[l]?.rulesScaling) {
    console.log('   boostText:', sub[l].rulesScaling.boostText);
  }
});
