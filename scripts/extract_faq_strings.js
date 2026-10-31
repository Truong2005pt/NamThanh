const fs = require('fs');

const d = JSON.parse(fs.readFileSync('content/faq/faq.json', 'utf8'));

const categories = new Set();
const questions = new Set();
const answers = new Set();
const tableHeaders = new Set();

['two', 'one', 'instant'].forEach(tab => {
  d[tab].categories.forEach(c => {
    categories.add(c.category);
    c.items.forEach(it => {
      questions.add(it.q);
      it.a.forEach(b => {
        if (b.t === 'p') answers.add(b.x);
        if (b.t === 'table' && b.rows && b.rows[0]) {
          tableHeaders.add(JSON.stringify(b.rows[0]));
        }
      });
    });
  });
});

const extracted = {
  categories: [...categories],
  questions: [...questions],
  answers: [...answers],
  tableHeaders: [...tableHeaders].map(x => JSON.parse(x))
};

fs.writeFileSync('scratch/faq_strings.json', JSON.stringify(extracted, null, 2), 'utf8');
console.log('Saved faq_strings.json:');
console.log('Categories:', extracted.categories.length);
console.log('Questions:', extracted.questions.length);
console.log('Answers:', extracted.answers.length);
console.log('Table Headers:', extracted.tableHeaders.length);
