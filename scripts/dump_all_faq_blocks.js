const fs = require('fs');

const en = JSON.parse(fs.readFileSync('content/faq/locales/en.json', 'utf8'));

const blocks = [];

['two', 'one', 'instant'].forEach(tab => {
  en[tab].categories.forEach((cat, ci) => {
    cat.items.forEach((it, ii) => {
      it.a.forEach((b, bi) => {
        if (b.t === 'p') {
          blocks.push({
            path: [tab, ci, ii, bi],
            category: cat.category,
            q: it.q,
            en: b.x
          });
        }
      });
    });
  });
});

fs.writeFileSync('scratch/faq_all_blocks.json', JSON.stringify(blocks, null, 2), 'utf8');
console.log('Saved scratch/faq_all_blocks.json with', blocks.length, 'blocks');
