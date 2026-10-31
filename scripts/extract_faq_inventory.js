const fs = require('fs');

const d = JSON.parse(fs.readFileSync('content/faq/faq.json', 'utf8'));

const categories = new Set();
const questions = new Set();
const answers = new Set();

['two', 'one', 'instant'].forEach(tab => {
  d[tab].categories.forEach(c => {
    categories.add(c.category);
    c.items.forEach(it => {
      questions.add(it.q);
      it.a.forEach(b => {
        if (b.t === 'p') answers.add(b.x);
      });
    });
  });
});

console.log('Categories (' + categories.size + '):');
[...categories].forEach((c, i) => console.log(`  ${i + 1}. "${c}"`));

console.log('\nQuestions (' + questions.size + '):');
[...questions].forEach((q, i) => console.log(`  ${i + 1}. "${q}"`));

console.log('\nAnswers (' + answers.size + '):');
[...answers].slice(0, 10).forEach((a, i) => console.log(`  ${i + 1}. "${a.slice(0, 80)}..."`));
