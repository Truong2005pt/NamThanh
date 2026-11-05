
export interface LanguageMeta {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const ENABLED_LANGUAGE_CODES = ['en', 'es', 'pt', 'hi', 'vi', 'id', 'fr', 'de', 'it', 'pl', 'tr', 'th', 'fil', 'ja', 'zh'];

const ALL_LANGUAGES: LanguageMeta[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'fil', name: 'Filipino', nativeName: 'Filipino', flag: '🇵🇭' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Simplified Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇦🇪' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
];

export const SUPPORTED_LANGUAGES: LanguageMeta[] = ALL_LANGUAGES.filter((l) => ENABLED_LANGUAGE_CODES.includes(l.code));

export interface TranslationDictionary {
  nav: {
    home: string;
    pricing: string;
    rules: string;
    affiliate: string;
    faq: string;
    blog: string;
    login: string;
    startChallenge: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    description: string;
    startNow: string;
    calculatorCta: string;
    fundedMetric: string;
    tradersMetric: string;
    countriesMetric: string;
    payoutMetric: string;
    liveRecentPayout: string;
    platformBanner: string;
    profitSplitBadgeTitle: string;
    profitSplitBadgeVal: string;
    payoutSpeedBadgeTitle: string;
    payoutSpeedBadgeVal: string;
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    tabTwoPhase: string;
    tabOnePhase: string;
    popularBadge: string;
    feeRefundNotice: string;
    targetPhase1: string;
    targetPhase2: string;
    dailyDrawdown: string;
    maxDrawdown: string;
    profitSplit: string;
    leverage: string;
    buyButton: string;
  };
  matrix: {
    badge: string;
    title: string;
    subtitle: string;
    tab2Step: string;
    tab1Step: string;
    recBadge: string;
    speedBadge: string;
    step1: string;
    step1Sub: string;
    step1Desc: string;
    step2: string;
    step2Sub: string;
    step2Desc: string;
    step3: string;
    step3Sub: string;
    step3Desc: string;
    rowPeriod: string;
    rowPeriodVal: string;
    rowDays: string;
    rowDaysVal: string;
    rowDailyLoss: string;
    rowMaxLoss: string;
    rowProfitTarget: string;
    rowTargetFunded: string;
    rowLeverage: string;
    rowLeverageVal: string;
    rowFee: string;
    rowFeeStep2: string;
    rowFeeRefund: string;
    totalFeeLabel: string;
    savingNotice: string;
    checkoutBtn: string;
    hotBadge: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    capitalLabel: string;
    profitLabel: string;
    safeNotice: string;
    avgNotice: string;
    highNotice: string;
    fastPayoutPerk: string;
    refundPerk: string;
    yourShareLabel: string;
    perMonth: string;
    totalProfitLabel: string;
    traderTakeHome: string;
    firmTakeHome: string;
    annualLabel: string;
    perYear: string;
    ctaBtn: string;
  };
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    colCriteria: string;
    colEracex: string;
    row1Title: string;
    row1Val: string;
    row2Title: string;
    row2Val: string;
    row3Title: string;
    row3Val: string;
    row4Title: string;
    row4Val: string;
    row5Title: string;
    row5Val: string;
    row6Title: string;
    row6Val: string;
    row7Title: string;
    row7Val: string;
    row8Title: string;
    row8Val: string;
  };
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
  };
  steps: {
    badge: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  platform: {
    badge: string;
    title: string;
    desc: string;
    mobileTitle: string;
    mobileDesc: string;
    liveFeeds: string;
    spread: string;
    ping: string;
    terminalTitle: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
    readyTitle: string;
  };
  rules: {
    badge: string;
    title: string;
    subtitle: string;
    colRule: string;
    colPhase2: string;
    colPhase1: string;
    colNotes: string;
    scalingBadge: string;
    scalingTitle: string;
    scalingDesc: string;
    stageInitial: string;
    stageInitialPerk: string;
    stage4m: string;
    stage4mPerk: string;
    stage8m: string;
    stage8mPerk: string;
    stage12m: string;
    stage12mPerk: string;
    stageMax: string;
    stageMaxPerk: string;
    r1Title: string;
    r1Note: string;
    r2Title: string;
    r2Note: string;
    r3Title: string;
    r3Note: string;
    r4Title: string;
    r4Note: string;
    r5Title: string;
    r5Note: string;
    r6Title: string;
    r6Note: string;
    r7Title: string;
    r7Note: string;
    r8Title: string;
    r8Note: string;
    r9Title: string;
    r9Note: string;
  };
  payouts: {
    badge: string;
    title: string;
    subtitle: string;
    certBadge: string;
    certTitle: string;
    certDesc: string;
    metricAvgTime: string;
    metricAvgTimeVal: string;
    metricMonthTotal: string;
    metricLargest: string;
    metricSuccessRate: string;
    receivedLabel: string;
    verifiedLabel: string;
    colTrader: string;
    colAmount: string;
    colMethod: string;
    colAccount: string;
    colGain: string;
  };
  reviews: {
    badge: string;
    title: string;
    subtitle: string;
    verifiedBuyer: string;
    withdrawn: string;
    rev1Title: string;
    rev1Comment: string;
    rev2Title: string;
    rev2Comment: string;
    rev3Title: string;
    rev3Comment: string;
  };
  affiliate: {
    badge: string;
    title: string;
    subtitle: string;
    tier1Title: string;
    tier1Desc: string;
    tier2Title: string;
    tier2Desc: string;
    tier3Title: string;
    tier3Desc: string;
    refBoxTitle: string;
    copied: string;
    copy: string;
    ctaBtn: string;
    weeklyPayoutNotice: string;
    popularBadge: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    catAll: string;
    catEvaluation: string;
    catDrawdown: string;
    catPayout: string;
    catRules: string;
    needHelp: string;
    contactSupport: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
  };
  blog: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    closeBtn: string;
    post1Title: string;
    post1Excerpt: string;
    post1Cat: string;
    post2Title: string;
    post2Excerpt: string;
    post2Cat: string;
    post3Title: string;
    post3Excerpt: string;
    post3Cat: string;
  };
  footer: {
    desc: string;
    supportDesk: string;
    networkNotice: string;
    paymentMethodsTitle: string;
    riskTitle: string;
    riskText: string;
    copyright: string;
    terms: string;
    privacy: string;
    riskDisclosure: string;
    colChallenges: string;
    colRules: string;
    colPortal: string;
    link2Step: string;
    link1Step: string;
    link100kVip: string;
    link200kPro: string;
    linkCalculator: string;
    linkRulesDrawdown: string;
    linkRulesScaling: string;
    linkAffiliate: string;
    linkFaq: string;
    linkBlog: string;
    linkLogin: string;
    linkRegister: string;
  };
  cookie: {
    title: string;
    text: string;
    accept: string;
    decline: string;
  };
  ctaBanner: {
    title: string;
    highlight: string;
    desc: string;
    startBtn: string;
    rulesBtn: string;
  };
}

import { vi } from './locales/vi';
import { en } from './locales/en';
import { zh } from './locales/zh';
import { ja } from './locales/ja';
import { ko } from './locales/ko';
import { es } from './locales/es';
import { pt } from './locales/pt';
import { fr } from './locales/fr';
import { de } from './locales/de';
import { ru } from './locales/ru';
import { it } from './locales/it';
import { ar } from './locales/ar';
import { tr } from './locales/tr';
import { th } from './locales/th';
import { id } from './locales/id';
import { hi } from './locales/hi';
import { pl } from './locales/pl';
import { nl } from './locales/nl';
import { fil } from './locales/fil';

export const translations: Record<string, TranslationDictionary> = {
  vi,
  en,
  zh,
  ja,
  ko,
  es,
  pt,
  fr,
  de,
  ru,
  it,
  ar,
  tr,
  th,
  id,
  hi,
  pl,
  nl,
  fil,
};

export function getDictionary(lang: string): TranslationDictionary {
  return translations[lang] || translations['en'];
}
