const fs = require('fs');
const path = require('path');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

// Check all files in components/eracex
console.log('=== CHECKING COMPONENTS/ERACEX ===');
const compDir = 'components/eracex';
const compFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.tsx'));

compFiles.forEach(file => {
  const code = fs.readFileSync(path.join(compDir, file), 'utf8');
  // Check if it uses useLanguage
  const hasUseLang = code.includes('useLanguage');
  // Check if it has an inline dict
  const dictMatches = langs.filter(l => new RegExp(`(^|\\n|\\s|{|,)['"]?${l}['"]?\\s*:\\s*{`).test(code));
  
  if (dictMatches.length > 0 && dictMatches.length < 19) {
    console.log(`[INLINE DICT INCOMPLETE] ${file}: has ${dictMatches.length}/19 langs -> missing:`, langs.filter(l => !dictMatches.includes(l)).join(', '));
  }
  
  // If it doesn't use useLanguage, check if it renders text
  if (!hasUseLang) {
    console.log(`[NO useLanguage] ${file}`);
  }
});

console.log('\n=== CHECKING APP/ PAGES ===');
function checkApp(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) checkApp(full);
    else if (e.name.endsWith('.tsx')) {
      const code = fs.readFileSync(full, 'utf8');
      const hasUseLang = code.includes('useLanguage');
      const dictMatches = langs.filter(l => new RegExp(`(^|\\n|\\s|{|,)['"]?${l}['"]?\\s*:\\s*{`).test(code));
      if (dictMatches.length > 0 && dictMatches.length < 19) {
        console.log(`[APP DICT INCOMPLETE] ${full}: has ${dictMatches.length}/19 langs`);
      }
      if (!hasUseLang && code.length > 1000) {
        console.log(`[APP NO useLanguage & >1KB] ${full}`);
      }
    }
  }
}
checkApp('app');
