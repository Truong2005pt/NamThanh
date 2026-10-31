const fs = require('fs');

const vi = JSON.parse(fs.readFileSync('content/faq/locales/vi.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('content/faq/locales/en.json', 'utf8'));

let matchEnCount = 0;
let total = 0;

['two', 'one', 'instant'].forEach(tab => {
  vi[tab].categories.forEach((cat, ci) => {
    total++;
    if (cat.category === en[tab].categories[ci].category) matchEnCount++;
    cat.items.forEach((it, ii) => {
      total++;
      if (it.q === en[tab].categories[ci].items[ii].q) matchEnCount++;
      it.a.forEach((b, bi) => {
        if (b.t === 'p') {
          total++;
          if (b.x === en[tab].categories[ci].items[ii].a[bi].x) {
            matchEnCount++;
            console.log('Untranslated p:', b.x.slice(0, 60));
          }
        }
      });
    });
  });
});

console.log(`Vietnamese FAQ verification: ${total - matchEnCount}/${total} translated (${matchEnCount} remaining in EN).`);
