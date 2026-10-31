const fs = require('fs');
let c = fs.readFileSync('components/eracex/Footer.tsx', 'utf8');

c = c.replace(
  "{currentLang === 'vi' ? 'Thi Đấu Miễn Phí' : currentLang === 'zh' ? '免费交易大赛' : currentLang === 'ja' ? '無料トレード大会' : 'Free Competition'}",
  "{fLinks.freeCompetition}"
);

c = c.replace(
  "{currentLang === 'vi' ? 'Hỗ Trợ 24/7 (Contact)' : currentLang === 'zh' ? '联系客服 24/7' : currentLang === 'ja' ? '24時間サポート' : 'Contact Support'}",
  "{fLinks.contactSupport}"
);

fs.writeFileSync('components/eracex/Footer.tsx', c, 'utf8');
console.log('Successfully updated Footer.tsx');
