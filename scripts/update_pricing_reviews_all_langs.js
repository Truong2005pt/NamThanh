const fs = require('fs');

const filePath = 'components/eracex/PricingTraderReviews.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const targetObj = 'const PRICING_REVIEWS_DICT: Record<string, {';
if (!content.includes(targetObj)) {
  console.error('Target not found in PricingTraderReviews.tsx');
  process.exit(1);
}

// Add vi, en, zh, ja at the top of PRICING_REVIEWS_DICT
const newKeys = `  "vi": {
    "title": "Trader Đã Vượt Qua Các Gói Vốn Này",
    "subtitle": "Chi phí đăng ký gói thi không phải là khoản chi mất đi. Bạn sẽ nhận lại 100% lệ phí thi ngay khi có khoản rút lợi nhuận đầu tiên.",
    "viewProof": "Xem Chứng Chỉ",
    "timeToPass": [
      "Vượt qua sau 6 ngày",
      "Vượt qua sau 12 ngày",
      "Vượt qua sau 9 ngày",
      "Cấp vốn trong 5 phút"
    ],
    "reviews": [
      "Tôi nhận lại đủ $299 lệ phí thi ngay khi lệnh rút $18,400 được duyệt. Không bị trừ phí ngầm, spread vàng cực kỳ mỏng giúp tôi đánh scalping rất tự tin.",
      "Gói $100K 2-Step là lựa chọn đáng tiền nhất. Đòn bẩy 1:100 MT5, sụt giảm tĩnh 8% dựa trên số dư ban đầu giúp tôi gồng lãi an toàn tuyệt đối.",
      "Lần đầu tiên tôi giao dịch tài khoản $200K mà được hỗ trợ viên trực 24/7 nhiệt tình như vậy. Tiền payout và hoàn phí về ví chỉ sau chưa đầy 2 giờ.",
      "Instant Hero giúp tôi tiết kiệm nhiều tuần thi cử. Được cấp tài khoản thật ngay lập tức, quy trình rút tiền trực tiếp và mức chia lợi nhuận xứng tầm."
    ]
  },
  "en": {
    "title": "Traders Who Passed These Tiers",
    "subtitle": "Your evaluation fee is 100% reimbursed alongside your very first withdrawal. See real proofs from funded traders below.",
    "viewProof": "View Certificate",
    "timeToPass": [
      "Passed in 6 days",
      "Passed in 12 days",
      "Passed in 9 days",
      "Funded in 5 minutes"
    ],
    "reviews": [
      "Received my full $299 evaluation fee back alongside my $18,400 payout. Zero hidden fees, ultra-thin gold spreads made scalping seamless.",
      "The $100K 2-Step package is peak value. 1:100 MT5 leverage and 8% static drawdown let me hold profitable swing trades with total confidence.",
      "Trading a $200K account with 24/7 VIP support made all the difference. Full fee refund and payout credited to my wallet in under 2 hours.",
      "Instant Hero saved me weeks of evaluation stages. Immediate funded account access with rapid withdrawals and elite simulated profit shares."
    ]
  },
  "zh": {
    "title": "成功通关并获得资助的优秀交易员",
    "subtitle": "查看真实通关交易员官方认证凭单、100% 报名费退还凭据以及实盘利润出金凭证。",
    "viewProof": "查看通关凭证",
    "timeToPass": [
      "6 天极速通关",
      "12 天达标",
      "9 天达标",
      "5 分钟内直通资金"
    ],
    "reviews": [
      "在首笔 $18,400 利润出金获批时，$299 报名费全额原路退返。无任何隐形收费，黄金超低点差让剥头皮交易非常丝滑。",
      "$100K 经典 2 阶段性价比极高。MT5 1:100 杠杆加上基于初始本金计算的 8% 纯静态固定回撤，让我能完全放心地持仓波段盈利。",
      "第一次在大资金 $200K 账户上体验到如此高效的 24/7 VIP 客服。出金分红和报名费退款不到 2 小时就直接到账钱包。",
      "Instant Hero 免考模式省去了我数周的考核时间。直接获得模拟实盘，出金流程通畅，高比例利润分成非常可观。"
    ]
  },
  "ja": {
    "title": "各プランの合格トレーダー実績",
    "subtitle": "ERACEX で合格したトレーダーの公式認定証と、初回出金時の100%受験料返還の実績です。",
    "viewProof": "認定証を見る",
    "timeToPass": [
      "6 日で合格",
      "12 日で合格",
      "9 日で合格",
      "5 分で即時資金交付"
    ],
    "reviews": [
      "18,400ドルの出金が承認された際、299ドルの受験料が100%全額返金されました。隠れコストゼロで、ゴールドの極狭スプレッドのおかげでスキャルピングが非常に快適です。",
      "$100K 2ステッププランは最も費用対効果が高いです。MT5の1:100レバレッジと初期資金ベースの8%静的ドローダウンにより、安心してスイングトレードを維持できます。",
      "$200K の大口口座でこれほど手厚い24時間サポートを受けられたのは初めてです。出金報酬と受験料返金は2時間足らずで着金しました。",
      "Instant Hero は数週間の試験期間を完全に節約してくれました。即座に資金口座を取得でき、出金もスムーズで利益配分も業界最高峰です。"
    ]
  },
`;

content = content.replace(
  'const PRICING_REVIEWS_DICT: Record<string, {\n  title: string;\n  subtitle: string;\n  viewProof: string;\n  timeToPass: string[];\n  reviews: string[];\n}> = {\n',
  'const PRICING_REVIEWS_DICT: Record<string, {\n  title: string;\n  subtitle: string;\n  viewProof: string;\n  timeToPass: string[];\n  reviews: string[];\n}> = {\n' + newKeys
);

// Update packagePassers to cleanly read from dReviews
const oldPackagePassersStart = '  const packagePassers = [\n    {\n      id: \'pass-50k\',';
const oldPackagePassersEnd = '  return (\n    <section className="py-20 sm:py-24 relative app-bg border-t app-border" id="passers">';

const targetPassers = content.substring(content.indexOf(oldPackagePassersStart), content.indexOf(oldPackagePassersEnd));

const newPackagePassers = `  const packagePassers = [
    {
      id: 'pass-50k',
      trader: 'Artur Dostal',
      avatar: '/images/gft/Lifetime Payout Awards Artur.webp',
      certificate: '/images/gft/Highest Payout 05.png',
      flag: '🇦🇹',
      country: 'Austria',
      tier: '$50,000 Package',
      packageCode: '1-Step Rapid $50K',
      originalFee: '$299',
      refundedAmount: '$299 (100% Refund)',
      payoutAmount: '$18,400.00',
      payoutMethod: 'Crypto USDT (TRC20)',
      timeToPass: dReviews?.timeToPass?.[0] || 'Passed in 6 days',
      rating: 5,
      review: dReviews?.reviews?.[0] || 'Received my full $299 evaluation fee back alongside my $18,400 payout. Zero hidden fees, ultra-thin gold spreads made scalping seamless.',
    },
    {
      id: 'pass-100k',
      trader: 'Shane M.',
      avatar: '/images/gft/review-interview-shane.jpg',
      certificate: '/images/gft/Highest Payout 17.png',
      flag: '🇬🇧',
      country: 'United Kingdom',
      tier: '$100,000 Package',
      packageCode: '2-Step GOAT $100K',
      originalFee: '$499',
      refundedAmount: '$499 (100% Refund)',
      payoutAmount: '$42,150.00',
      payoutMethod: 'Crypto USDT & Skrill',
      timeToPass: dReviews?.timeToPass?.[1] || 'Passed in 12 days',
      rating: 5,
      review: dReviews?.reviews?.[1] || 'The $100K 2-Step package is peak value. 1:100 MT5 leverage and 8% static drawdown let me hold profitable swing trades with total confidence.',
    },
    {
      id: 'pass-200k',
      trader: 'Duaa Al-Mansoor',
      avatar: '/images/gft/Lifetime Payout Awards Duaa.webp',
      certificate: '/images/gft/Highest Payout 20.png',
      flag: '🇦🇪',
      country: 'UAE, Dubai',
      tier: '$200,000 Package',
      packageCode: '2-Step GOAT $200K',
      originalFee: '$999',
      refundedAmount: '$999 (100% Refund)',
      payoutAmount: '$54,300.00',
      payoutMethod: 'Crypto USDT (ERC20)',
      timeToPass: dReviews?.timeToPass?.[2] || 'Passed in 9 days',
      rating: 5,
      review: dReviews?.reviews?.[2] || 'Trading a $200K account with 24/7 VIP support made all the difference. Full fee refund and payout credited to my wallet in under 2 hours.',
    },
    {
      id: 'pass-instant',
      trader: 'Arthur V.',
      avatar: '/images/gft/goatstraders3.avif',
      certificate: '/images/gft/Highest Payout 21.png',
      flag: '🇫🇷',
      country: 'France',
      tier: 'Instant Funding $100K',
      packageCode: 'Instant HERO Model',
      originalFee: 'Direct Allocation',
      refundedAmount: 'Immediate Live Equity',
      payoutAmount: '$67,840.00',
      payoutMethod: 'Crypto USDT (TRC20)',
      timeToPass: dReviews?.timeToPass?.[3] || 'Funded in 5 minutes',
      rating: 5,
      review: dReviews?.reviews?.[3] || 'Instant Hero saved me weeks of evaluation stages. Immediate funded account access with rapid withdrawals and elite simulated profit shares.',
    },
  ];\n\n`;

content = content.replace(targetPassers, newPackagePassers);

// Replace fallback strings in the render
content = content.replace(
  '{dReviews ? dReviews.title : (currentLang === "vi" ? "Trader Đã Vượt Qua Các Gói Vốn Này" : currentLang === "zh" ? "成功通关并获得资助的优秀交易员" : currentLang === "ja" ? "各プランの合格トレーダー実績" : "Traders Who Passed These Tiers")}',
  '{(dReviews || PRICING_REVIEWS_DICT["en"]).title}'
);

content = content.replace(
  '{dReviews ? dReviews.subtitle : (currentLang === "vi" ? "Chi phí đăng ký gói thi không phải là khoản chi mất đi. Bạn sẽ nhận lại 100% lệ phí thi ngay khi có khoản rút lợi nhuận đầu tiên." : currentLang === "zh" ? "查看真实通关交易员官方认证凭单、100% 报名费退还凭据以及实盘利润出金凭证。" : currentLang === "ja" ? "ERACEX で合格したトレーダーの公式認定証と、初回出金時の100%受験料返還の実績です。" : "Your evaluation fee is 100% reimbursed alongside your very first withdrawal. See real proofs from funded traders below.")}',
  '{(dReviews || PRICING_REVIEWS_DICT["en"]).subtitle}'
);

content = content.replace(
  '<span>{dReviews ? dReviews.viewProof : (currentLang === "vi" ? "Xem Chứng Chỉ" : currentLang === "zh" ? "查看通关凭证" : currentLang === "ja" ? "認定証を見る" : "View Certificate")}</span>',
  '<span>{(dReviews || PRICING_REVIEWS_DICT["en"]).viewProof}</span>'
);

content = content.replace(
  'const dReviews = PRICING_REVIEWS_DICT[currentLang] || null;',
  'const dReviews = PRICING_REVIEWS_DICT[currentLang] || PRICING_REVIEWS_DICT["en"];'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated PricingTraderReviews.tsx with all 19 languages');
