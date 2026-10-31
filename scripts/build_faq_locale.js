const fs = require('fs');
const path = require('path');

const en = JSON.parse(fs.readFileSync('content/faq/locales/en.json', 'utf8'));

function buildLocale(lang, { categories, questions, answers, tableHeaders, titles }) {
  const result = JSON.parse(JSON.stringify(en));

  ['two', 'one', 'instant'].forEach(tab => {
    if (titles && titles[tab]) {
      if (titles[tab].title) result[tab].title = titles[tab].title;
      if (titles[tab].subtitle) result[tab].subtitle = titles[tab].subtitle;
    }

    result[tab].categories.forEach(cat => {
      if (categories && categories[cat.category]) {
        cat.category = categories[cat.category];
      }

      cat.items.forEach(it => {
        if (questions && questions[it.q]) {
          it.q = questions[it.q];
        }

        it.a.forEach(block => {
          if (block.t === 'p' && answers && answers[block.x]) {
            block.x = answers[block.x];
          }
          if (block.t === 'table' && block.rows && block.rows[0] && tableHeaders) {
            const headerStr = JSON.stringify(block.rows[0]);
            if (tableHeaders[headerStr]) {
              block.rows[0] = tableHeaders[headerStr];
            }
          }
        });
      });
    });
  });

  const outPath = path.join('content', 'faq', 'locales', `${lang}.json`);
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Successfully generated content/faq/locales/${lang}.json`);
}

module.exports = { buildLocale };
