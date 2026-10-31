const fs = require('fs');
const ts = require('typescript');

function loadLocale(lang) {
  const code = fs.readFileSync(`lib/locales/${lang}.ts`, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports[lang];
}

const en = loadLocale('en');
const langs = ['vi', 'zh', 'ja', 'ko', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ru', 'ar', 'nl'];

const sections = Object.keys(en);

console.log('SECTIONS THAT HAVE ENGLISH COPIES IN NON-EN LOCALES:');

langs.forEach(lang => {
  const loc = loadLocale(lang);
  let untranslatedSections = [];
  sections.forEach(sec => {
    let secUntranslated = 0;
    let secTotal = 0;
    for (const k in en[sec]) {
      secTotal++;
      const enVal = String(en[sec][k]).trim();
      const locVal = String(loc[sec]?.[k] || '').trim();
      if (enVal === locVal && enVal.length > 3 && /[a-zA-Z]{3,}/.test(enVal)) {
        secUntranslated++;
      }
    }
    if (secUntranslated > secTotal * 0.4) {
      untranslatedSections.push(`${sec} (${secUntranslated}/${secTotal})`);
    }
  });
  console.log(`[${lang.toUpperCase()}]:`, untranslatedSections.join(', ') || 'ALL CLEAN');
});
