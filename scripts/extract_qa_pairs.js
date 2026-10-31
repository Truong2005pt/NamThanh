const fs = require('fs');

const d = JSON.parse(fs.readFileSync('content/faq/faq.json', 'utf8'));

const qMap = {};
['two', 'one', 'instant'].forEach(tab => {
  d[tab].categories.forEach(c => {
    c.items.forEach(it => {
      if (!qMap[it.q]) {
        qMap[it.q] = {
          tab,
          category: c.category,
          paragraphs: it.a.filter(b => b.t === 'p').map(b => b.x),
          tables: it.a.filter(b => b.t === 'table').map(b => b.rows[0])
        };
      }
    });
  });
});

fs.writeFileSync('scratch/faq_qa_pairs.json', JSON.stringify(qMap, null, 2), 'utf8');
console.log('Saved faq_qa_pairs.json with', Object.keys(qMap).length, 'questions');
