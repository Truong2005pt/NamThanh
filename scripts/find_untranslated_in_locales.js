const fs = require('fs');

const langs = ['vi', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

const ts = require('typescript');

function loadLocale(lang) {
  const code = fs.readFileSync(`lib/locales/${lang}.ts`, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports[lang];
}

const en = loadLocale('en');

function extractFlat(obj, prefix = '') {
  let res = {};
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(res, extractFlat(obj[k], prefix ? `${prefix}.${k}` : k));
    } else {
      res[prefix ? `${prefix}.${k}` : k] = obj[k];
    }
  }
  return res;
}

const enFlat = extractFlat(en);

langs.forEach(lang => {
  const loc = loadLocale(lang);
  const locFlat = extractFlat(loc);
  
  let identicalToEnglish = [];
  for (const k in enFlat) {
    const enVal = String(enFlat[k]).trim();
    const locVal = String(locFlat[k] || '').trim();
    // Only flag if it's text (more than 3 letters, contains space or letters, not just numbers/symbols)
    if (enVal === locVal && enVal.length > 3 && /[a-zA-Z]{3,}/.test(enVal)) {
      identicalToEnglish.push({ key: k, val: enVal });
    }
  }
  console.log(`[${lang.toUpperCase()}] Identical to English: ${identicalToEnglish.length} keys`);
  if (identicalToEnglish.length > 0) {
    console.log(`   Sample keys:`, identicalToEnglish.slice(0, 8).map(x => x.key));
  }
});
