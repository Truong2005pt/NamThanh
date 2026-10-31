const fs = require('fs');
const ts = require('typescript');

const code = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');
const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const m = { exports: {} };
new Function('module', 'exports', 'require', js)(m, m.exports, require);
const sub = m.exports.SUBPAGE_TRANSLATIONS;

console.log('en.rulesScaling keys:\n', JSON.stringify(sub.en.rulesScaling, null, 2));
console.log('ko.rulesScaling keys:\n', JSON.stringify(sub.ko.rulesScaling, null, 2));
