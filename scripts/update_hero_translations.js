const fs = require('fs');

const heroExtra = {
  vi: { traders: '1M+ trader tin dùng', rating: '4.8 sao từ 5K đánh giá xác thực' },
  en: { traders: '1M+ traders trust us', rating: '4.8 stars from 5K verified reviews' },
  zh: { traders: '超过100万交易者信赖', rating: '5,000+真实评价 4.8星好评' },
  ja: { traders: '100万人以上のトレーダーが信頼', rating: '5,000件以上の認証レビューで4.8星' },
  es: { traders: 'Más de 1M de traders confían en nosotros', rating: '4.8 estrellas de 5K reseñas verificadas' },
  pt: { traders: 'Mais de 1M de traders confiam em nós', rating: '4.8 estrelas em 5K avaliações verificadas' },
  fr: { traders: 'Plus de 1M de traders nous font confiance', rating: '4.8 étoiles sur 5K avis vérifiés' },
  de: { traders: 'Über 1 Mio. Trader vertrauen uns', rating: '4,8 Sterne aus 5K verifizierten Bewertungen' },
  it: { traders: 'Oltre 1 milione di trader si fidano di noi', rating: '4.8 stelle da 5K recensioni verificate' },
  pl: { traders: 'Ponad 1 mln traderów nam ufa', rating: '4,8 gwiazdki z 5K zweryfikowanych opinii' },
  tr: { traders: '1M+ yatırımcı bize güveniyor', rating: '5K doğrulanmış değerlendirmeden 4.8 yıldız' },
  id: { traders: '1Jt+ trader mempercayai kami', rating: '4.8 bintang dari 5Rb ulasan terverifikasi' },
  th: { traders: 'เทรดเดอร์กว่า 1 ล้านคนไว้วางใจเรา', rating: '4.8 ดาวจาก 5,000+ รีวิวที่ได้รับการยืนยัน' },
  fil: { traders: '1M+ trader ang nagtitiwala sa amin', rating: '4.8 bituin mula sa 5K beripikadong review' },
  hi: { traders: '10 लाख+ ट्रेडर्स का भरोसा', rating: '5,000+ सत्यापित समीक्षाओं से 4.8 स्टार' },
  ko: { traders: '100만 명 이상의 트레이더가 신뢰', rating: '5,000개 이상의 검증된 리뷰에서 4.8점' },
  ru: { traders: 'Более 1 млн трейдеров доверяют нам', rating: '4.8 звезды на основе 5 000 проверенных отзывов' },
  ar: { traders: 'أكثر من مليون متداول يثقون بنا', rating: '4.8 نجوم من أكثر من 5,000 تقييم معتمد' },
  nl: { traders: '1M+ handelaren vertrouwen op ons', rating: '4.8 sterren uit 5K geverifieerde beoordelingen' }
};

let code = fs.readFileSync('components/eracex/HeroSection.tsx', 'utf8');
code = code.replace(/\r\n/g, '\n');

const targetOld = `  const extra = currentLang === 'vi'
    ? { traders: '1M+ trader tin dùng', rating: '4.8 sao từ 5K đánh giá xác thực' }
    : { traders: '1M+ traders trust us', rating: '4.8 stars from 5K verified reviews' };`;

const replacement = `  const HERO_EXTRA: Record<string, { traders: string; rating: string }> = ${JSON.stringify(heroExtra, null, 2)};
  const extra = HERO_EXTRA[currentLang] || HERO_EXTRA['en'];`;

if (!code.includes(targetOld)) {
  console.error('Target not found in HeroSection.tsx');
  process.exit(1);
}

code = code.replace(targetOld, replacement);
fs.writeFileSync('components/eracex/HeroSection.tsx', code, 'utf8');
console.log('Successfully updated HeroSection.tsx with 19 languages');
