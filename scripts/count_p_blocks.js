const fs = require('fs');

const en = JSON.parse(fs.readFileSync('content/faq/locales/en.json', 'utf8'));

let count = 0;
['two', 'one', 'instant'].forEach(tab => {
  en[tab].categories.forEach((cat, ci) => {
    cat.items.forEach((it, ii) => {
      it.a.forEach((b, bi) => {
        if (b.t === 'p') {
          count++;
        }
      });
    });
  });
});
console.log('Total p blocks in all 3 tabs:', count);
