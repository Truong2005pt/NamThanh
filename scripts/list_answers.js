const fs = require('fs');

const d = JSON.parse(fs.readFileSync('scratch/faq_strings.json', 'utf8'));
console.log('Total answer strings:', d.answers.length);
d.answers.forEach((ans, i) => {
  console.log(`[${i + 1}] (${ans.length} chars): ${ans.slice(0, 70)}...`);
});
