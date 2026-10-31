const fs = require('fs');

const d = JSON.parse(fs.readFileSync('content/faq/faq.json', 'utf8'));

const qVariants = {};
['two', 'one', 'instant'].forEach(tab => {
  d[tab].categories.forEach(c => {
    c.items.forEach(it => {
      const pText = it.a.filter(b => b.t === 'p').map(b => b.x).join(' || ');
      if (!qVariants[it.q]) qVariants[it.q] = {};
      qVariants[it.q][tab] = pText;
    });
  });
});

let diffCount = 0;
for (const [q, tabs] of Object.entries(qVariants)) {
  const tabKeys = Object.keys(tabs);
  if (tabKeys.length > 1) {
    const first = tabs[tabKeys[0]];
    const hasDiff = tabKeys.some(k => tabs[k] !== first);
    if (hasDiff) {
      diffCount++;
      console.log('Diff across tabs for:', q, tabKeys);
    }
  }
}
console.log('Total questions with different answers across tabs:', diffCount);
