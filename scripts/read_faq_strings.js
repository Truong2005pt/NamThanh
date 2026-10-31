const fs = require('fs');

const d = JSON.parse(fs.readFileSync('scratch/faq_strings.json', 'utf8'));
console.log('Categories:', d.categories);
console.log('---');
console.log('Questions (first 10):', d.questions.slice(0, 10));
