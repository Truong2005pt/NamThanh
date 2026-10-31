const fs = require('fs');
const ts = require('typescript');

function loadLocale(lang) {
  const code = fs.readFileSync(`lib/locales/${lang}.ts`, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports[lang];
}

const ko = loadLocale('ko');
console.log('ko.rules:\n', JSON.stringify(ko.rules, null, 2));
