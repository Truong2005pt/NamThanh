const fs = require('fs');

const filePath = 'components/eracex/HowItWorksView.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const CAPITAL_DICT = `
const HOW_IT_WORKS_CAPITAL_DICT: Record<string, {
  title: string;
  ownCapital: string;
  fundedCapital: string;
}> = {
  "vi": {
    "title": "Không cần lợi suất tốt hơn, chỉ cần nhiều vốn hơn",
    "ownCapital": "VỐN CÁ NHÂN $1,000, LỢI NHUẬN 4%",
    "fundedCapital": "VỐN CẤP $100,000, LỢI NHUẬN 4%"
  },
  "en": {
    "title": "It is not about better returns, it is about more capital",
    "ownCapital": "OWN $1,000 CAPITAL, 4% RETURN",
    "fundedCapital": "$100,000 FUNDED, 4% RETURN"
  },
  "zh": {
    "title": "无需追求超高收益率，核心在于掌握更大体量资金",
    "ownCapital": "自有本金 $1,000，收益率 4%",
    "fundedCapital": "机构资助 $100,000，收益率 4%"
  },
  "ja": {
    "title": "より高い利回りではなく、より大きな資金を運用すること",
    "ownCapital": "自己資金 $1,000 · 利益率 4%",
    "fundedCapital": "プロップ資金 $100,000 · 利益率 4%"
  },
  "ko": {
    "title": "더 높은 수익률이 아닌, 더 큰 자본 규모가 핵심입니다",
    "ownCapital": "개인 자본 $1,000, 수익률 4%",
    "fundedCapital": "펀딩 자본 $100,000, 수익률 4%"
  },
  "es": {
    "title": "No se trata de mayores rendimientos, se trata de mayor capital",
    "ownCapital": "CAPITAL PROPIO $1,000, RENDIMIENTO 4%",
    "fundedCapital": "CAPITAL FINANCIADO $100,000, RENDIMIENTO 4%"
  },
  "pt": {
    "title": "Não se trata de rendimentos absurdos, trata-se de mais capital",
    "ownCapital": "CAPITAL PRÓPRIO $1.000, RETORNO 4%",
    "fundedCapital": "CAPITAL FINANCIADO $100.000, RETORNO 4%"
  },
  "fr": {
    "title": "Il ne s'agit pas de rendements démesurés, mais de plus de capital",
    "ownCapital": "CAPITAL PERSONNEL $1,000, RENDEMENT 4%",
    "fundedCapital": "CAPITAL FINANCÉ $100,000, RENDEMENT 4%"
  },
  "de": {
    "title": "Es geht nicht um extreme Renditen, sondern um mehr Kapital",
    "ownCapital": "EIGENKAPITAL $1.000, 4% RENDITE",
    "fundedCapital": "$100.000 FUNDED KAPITAL, 4% RENDITE"
  },
  "ru": {
    "title": "Дело не в заоблачной доходности, а в объеме доступного капитала",
    "ownCapital": "ЛИЧНЫЙ ДЕПОЗИТ $1,000, ПРИБЫЛЬ 4%",
    "fundedCapital": "СЧЕТ ОТ ФИРМЫ $100,000, ПРИБЫЛЬ 4%"
  },
  "it": {
    "title": "Non si tratta di rendimenti estremi, ma di più capitale",
    "ownCapital": "CAPITALE PROPRIO $1.000, RESA 4%",
    "fundedCapital": "CAPITALE FINANZIATO $100.000, RESA 4%"
  },
  "ar": {
    "title": "الأمر لا يتعلق بعوائد مستحيلة، بل بامتلاك رأس مال أكبر",
    "ownCapital": "رأس مال شخصي $1,000، عائد 4%",
    "fundedCapital": "حساب ممول $100,000، عائد 4%"
  },
  "tr": {
    "title": "Mesele daha yüksek getiri oranı değil, daha büyük sermayedir",
    "ownCapital": "KENDİ SERMAYENİZ $1.000, %4 GETİRİ",
    "fundedCapital": "FONLANMIŞ $100.000, %4 GETİRİ"
  },
  "th": {
    "title": "ไม่ใช่เรื่องของการทำกำไรสูงเกินจริง แต่คือการมีพอร์ตทุนที่ใหญ่กว่า",
    "ownCapital": "ทุนตัวเอง $1,000, กำไร 4%",
    "fundedCapital": "พอร์ตรับทุน $100,000, กำไร 4%"
  },
  "id": {
    "title": "Ini bukan tentang persentase fantastis, tapi tentang modal yang lebih besar",
    "ownCapital": "MODAL PRIBADI $1.000, PROFIT 4%",
    "fundedCapital": "MODAL FUNDED $100.000, PROFIT 4%"
  },
  "hi": {
    "title": "यह अवास्तविक रिटर्न के बारे में नहीं है, बल्कि अधिक पूंजी के बारे में है",
    "ownCapital": "निजी पूंजी $1,000, 4% रिटर्न",
    "fundedCapital": "$100,000 फंडेड पूंजी, 4% रिटर्न"
  },
  "pl": {
    "title": "Nie chodzi o nierealistyczne zyski, lecz o większy kapitał",
    "ownCapital": "KAPITAŁ WŁASNY $1.000, 4% ZYSKU",
    "fundedCapital": "$100.000 KAPITAŁU FUNDED, 4% ZYSKU"
  },
  "nl": {
    "title": "Het gaat niet om torenhoge rendementen, maar om meer werkkapitaal",
    "ownCapital": "EIGEN VERMOGEN $1.000, 4% RENDEMENT",
    "fundedCapital": "$100.000 FUNDED VERMOGEN, 4% RENDEMENT"
  },
  "fil": {
    "title": "Hindi ito tungkol sa sobrang laking tubo, kundi sa pagkakaroon ng mas malaking kapital",
    "ownCapital": "SARILING PUHUNAN $1,000, 4% TUBO",
    "fundedCapital": "PINONDOANG $100,000, 4% TUBO"
  }
};
`;

content = content.replace(
  'export const HowItWorksView: React.FC = () => {',
  CAPITAL_DICT + '\nexport const HowItWorksView: React.FC = () => {'
);

content = content.replace(
  'const { currentLang } = useLanguage();',
  "const { currentLang } = useLanguage();\n  const cap = HOW_IT_WORKS_CAPITAL_DICT[currentLang] || HOW_IT_WORKS_CAPITAL_DICT['en'];"
);

content = content.replace(
  "{currentLang === 'vi' ? 'Không cần lợi suất tốt hơn, chỉ cần nhiều vốn hơn' : 'It is not about better returns, it is about more capital'}",
  "{cap.title}"
);

content = content.replace(
  "{currentLang === 'vi' ? 'VỐN CÁ NHÂN $1,000, LỢI NHUẬN 4%' : 'OWN $1,000 CAPITAL, 4% RETURN'}",
  "{cap.ownCapital}"
);

content = content.replace(
  "{currentLang === 'vi' ? 'VỐN CẤP $100,000, LỢI NHUẬN 4%' : '$100,000 FUNDED, 4% RETURN'}",
  "{cap.fundedCapital}"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated HowItWorksView.tsx with all 19 languages');
