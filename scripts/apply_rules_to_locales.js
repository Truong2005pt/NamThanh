const fs = require('fs');
const path = require('path');

const rulesData = JSON.parse(fs.readFileSync('scratch/rules_translations_all.json', 'utf8'));

const langs = ['zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

for (const lang of langs) {
  const filePath = path.join('lib', 'locales', `${lang}.ts`);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const rules = rulesData[lang];
  if (!rules) {
    console.log(`No rules translations for ${lang}`);
    continue;
  }

  // Regex to match "rules": { ... } or rules: { ... }
  const regex = /["']?rules["']?\s*:\s*\{[\s\S]*?\n  \},/;
  if (!regex.test(content)) {
    console.log(`Regex did not match rules in ${lang}.ts`);
    continue;
  }

  const formatted = `"rules": ` + JSON.stringify(rules, null, 4).replace(/\n/g, '\n  ') + ',';
  content = content.replace(regex, formatted);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated rules in ${lang}.ts`);
}
