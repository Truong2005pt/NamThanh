'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './LanguageContext';
import { getHighShareWord } from '@/lib/high-share';
import { SITE_CONFIG } from '@/config/site-config';
import { ProfitCalculator } from './ProfitCalculator';
import { getSubpageTranslations } from './subpage-translations';
import { 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Coins, 
  Clock, 
  Award,
  Layers,
  BarChart3,
  Cpu
} from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';
import { CryptoCurrencyGrid } from './CryptoCurrencyGrid';


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

export const HowItWorksView: React.FC = () => {
  const { currentLang } = useLanguage();
  const cap = HOW_IT_WORKS_CAPITAL_DICT[currentLang] || HOW_IT_WORKS_CAPITAL_DICT['en'];
  const sub = getSubpageTranslations(currentLang);
  const hw = sub.howItWorks || {
    heroTitle1: 'Quy Trình Hoạt Động',
    heroHighlight: 'Đơn Giản, Minh Bạch & Tối Ưu',
    heroTitle2: '',
    heroDesc: 'Quy tắc rõ ràng cho từng chương trình, chia sẻ lợi nhuận cao và điều kiện rút tiền được hiển thị trước khi thanh toán.',
    btnChoose: 'Chọn Gói Thử Thách Ngay',
    btnRules: 'Xem Quy Tắc Chi Tiết',
    roadmapTitle: 'Hành Trình Cấp Vốn Chuyên Nghiệp',
    step1Badge: 'BƯỚC 1: LỰA CHỌN GÓI THI',
    step1Title: 'Chọn Quy Mô Tài Khoản Phù Hợp',
    step1Desc: 'Lựa chọn giữa Two-Step, One-Step, Instant Funding hoặc Instant Funding Light. Tài khoản từ $5,000 tới $100,000.',
    step1Link: 'Xem bảng giá chi tiết',
    card2PhaseTitle: 'Two-Step',
    card2PhaseDesc: 'Phí từ $44. Mục tiêu Bước 1: 10%, Bước 2: 5%.',
    card1PhaseTitle: 'One-Step',
    card1PhaseDesc: 'Một giai đoạn đánh giá với mục tiêu 10%. Phí từ $58.',
    cardInstantTitle: 'Instant Funding',
    cardInstantDesc: 'Không có giai đoạn đánh giá. Tài khoản được cấp vốn mô phỏng ngay, tuân theo giới hạn lỗ trailing 5%.',
    step2Badge: 'BƯỚC 2: CHỨNG MINH KỸ NĂNG',
    step2Title: 'Giao Dịch Theo Kế Hoạch Của Bạn',
    step2Desc: 'Giao dịch theo kế hoạch của bạn trong giới hạn lỗ theo ngày và tổng lỗ tối đa dựa trên equity. Không giữ lệnh qua cuối tuần. Giao dịch tin tức được phép khi đánh giá và bị cấm khi funded.',
    step2Link: 'Xem quy định chi tiết',
    statZeroDays: '5 Ngày',
    statMinDays: 'Tối Thiểu Mỗi Bước',
    statUnlimited: 'Xem Quy Tắc',
    statUnlimitedDays: 'Thời Gian Thi',
    statMaxLoss: 'Sụt Giảm Tối Đa',
    statMaxLeverage: 'Đòn Bẩy Forex',
    autoDetectionNotice: 'Khi bạn đạt mục tiêu lợi nhuận và các điều kiện của chương trình, hệ thống sẽ ghi nhận kết quả.',
    step3Badge: 'BƯỚC 3: XÁC THỰC & NHẬN QUỸ',
    step3Title: 'Xác Minh KYC',
    step3Desc: 'Hoàn thành thủ tục xác minh danh tính (KYC) bằng giấy tờ tùy thân hợp lệ để nhận thông tin tài khoản được cấp vốn.',
    step3Link: 'Xem quy tắc chương trình →',
    kycFeature1Title: 'Xác minh danh tính',
    kycFeature1Desc: 'Thủ tục xác minh áp dụng cho các tài khoản được cấp vốn.',
    kycFeature2Title: 'Giới Hạn Vốn Cấp',
    kycFeature2Desc: 'Tổng vốn được cấp tối đa cho mỗi người dùng là $400,000.',
    step4Badge: 'BƯỚC 4: RÚT LỢI NHUẬN',
    step4Title: 'Nhận Chia Sẻ Lợi Nhuận Cao',
    step4Desc: 'Thời gian chờ rút tiền lần đầu: 5 ngày với Two-Step và One-Step, 14 ngày với Instant. Rút tối thiểu 1%. Mỗi tài khoản funded có tối đa 5 lần chi trả thưởng.',
    step4Link: 'Xem điều kiện rút tiền →',
    splitStatLabel: 'Chia Sẻ Lợi Nhuận',
    speedStatLabel: 'Rút Tối Thiểu',
    refundStatLabel: 'Chờ Rút Lần Đầu (Ngày)',
    speedUnit: '%',
    disbursementNotice: 'Phương thức rút tiền được hiển thị trong bảng điều khiển khi có sẵn.',
    techTitle: 'Giao Dịch Trên ERACEX Platform',
    techDesc: 'Giao dịch mô phỏng trên ERACEX Platform.',
    pillar1Title: 'Quy Tắc Rõ Ràng',
    pillar1Desc: 'Mục tiêu lợi nhuận, giới hạn lỗ và đòn bẩy được hiển thị cho từng chương trình.',
    pillar2Title: 'Giới Hạn Dựa Trên Equity',
    pillar2Desc: 'Two-Step và One-Step dùng giới hạn lỗ dựa trên equity; Instant dùng giới hạn lỗ tối đa trailing 5%.',
    pillar3Title: 'Điều Kiện Rút Tiền',
    pillar3Desc: 'Rút tối thiểu 1% lợi nhuận, thời gian chờ tùy từng chương trình.',
    pillar4Title: 'Phí Không Hoàn Lại',
    pillar4Desc: 'Phí chương trình không được hoàn lại sau khi cấp quyền truy cập tài khoản.',
  };

  return (
    <div className="min-h-screen py-10">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
        
        {/* HERO BANNER */}
        <section className="relative rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#0b0b0d] p-6 sm:p-10 lg:p-14 text-center space-y-6 shadow-sm dark:shadow-2xl">
          <h1 className="gft-title text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto text-neutral-900 dark:text-white">
            {hw.heroTitle1}{' '}
            <span className="text-[#c68a00] dark:text-[#ffc501]">
              {hw.heroHighlight}
            </span>{' '}
            {hw.heroTitle2}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {hw.heroDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-2xl btn-gold text-black font-black text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{hw.btnChoose}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/rules"
              className="px-6 py-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 font-bold text-sm text-neutral-800 dark:text-neutral-200 transition-all shadow-xs cursor-pointer"
            >
              <span>{hw.btnRules}</span>
            </Link>
          </div>
        </section>

        <ImageBand caption="discipline" variant="wide" inline images={[{ src: '/images/eracex-office.png', alt: 'ERACEX trading desk' }]} />

        {/* 4 DETAILED LIFECYCLE STEPS */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white">
              {hw.roadmapTitle || 'Your Road To Funded Trading'}
            </h2>
          </div>

          <div className="space-y-8">
            {/* STEP 1 */}
            <div className="p-8 sm:p-12 rounded-none border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#f6bf4a]/40 transition-all shadow-sm dark:shadow-none">
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                <div className="w-14 h-14 rounded-none bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#ffc501] flex items-center justify-center font-black text-2xl font-mono">
                  01
                </div>
                <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase tracking-wider">
                  {hw.step1Badge || 'STEP 1: CHOOSE MODEL'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  {hw.step1Title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {hw.step1Desc}
                </p>
                <div className="pt-2">
                  <Link href="/pricing" className="text-xs font-bold text-[#c68a00] dark:text-[#ffc501] hover:underline flex items-center gap-1">
                    <span>{hw.step1Link || 'Explore challenge models'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8 p-6 rounded-none bg-neutral-50 dark:bg-black/30 border border-neutral-200/80 dark:border-white/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-none border border-neutral-200/80 dark:border-white/5 bg-white dark:bg-white/5 space-y-2 shadow-xs">
                  <div className="font-bold text-[#c68a00] dark:text-[#ffc501] text-sm">{hw.card2PhaseTitle || '2-Phase Evaluation'}</div>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {hw.card2PhaseDesc}
                  </div>
                </div>
                <div className="p-4 rounded-none border border-neutral-200/80 dark:border-white/5 bg-white dark:bg-white/5 space-y-2 shadow-xs">
                  <div className="font-bold text-[#c68a00] dark:text-[#f6bf4a] text-sm">{hw.card1PhaseTitle || '1-Phase Express'}</div>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {hw.card1PhaseDesc}
                  </div>
                </div>
                <div className="p-4 rounded-none border border-neutral-200/80 dark:border-white/5 bg-white dark:bg-white/5 space-y-2 shadow-xs">
                  <div className="font-bold text-[#c68a00] dark:text-[#f6bf4a] text-sm">{hw.cardInstantTitle || 'Instant Funding'}</div>
                  <div className="text-neutral-500 dark:text-neutral-400">
                    {hw.cardInstantDesc}
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="p-8 sm:p-12 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#f6bf4a]/40 transition-all shadow-sm dark:shadow-none">
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-black text-2xl font-mono">
                  02
                </div>
                <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#f6bf4a] uppercase tracking-wider">
                  {hw.step2Badge || 'STEP 2: TRADE & PASS'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  {hw.step2Title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {hw.step2Desc}
                </p>
                <div className="pt-2">
                  <Link href="/rules" className="text-xs font-bold text-[#c68a00] dark:text-[#f6bf4a] hover:underline flex items-center gap-1">
                    <span>{hw.step2Link || 'Read trading rules'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8 p-6 rounded-2xl bg-neutral-50 dark:bg-black/30 border border-neutral-200/80 dark:border-white/5 space-y-4 text-xs">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent text-center shadow-xs">
                    <div className="font-bold text-neutral-900 dark:text-white text-base">{hw.statZeroDays || '5 Days'}</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">{hw.statMinDays || 'Min Trading Days'}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent text-center shadow-xs">
                    <div className="font-bold text-neutral-900 dark:text-white text-base">{hw.statUnlimited || 'See Rules'}</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">{hw.statUnlimitedDays || 'Time Limit'}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent text-center shadow-xs">
                    <div className="font-bold text-[#c68a00] dark:text-[#f6bf4a] text-base">10% Equity</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">{hw.statMaxLoss || 'Max Drawdown'}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent text-center shadow-xs">
                    <div className="font-bold text-[#c68a00] dark:text-[#f6bf4a] text-base">1:100</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-0.5">{hw.statMaxLeverage || 'Max Leverage'}</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/20 text-[#c68a00] dark:text-[#f6bf4a] font-medium flex items-start gap-2">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{hw.autoDetectionNotice}</span>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="p-8 sm:p-12 rounded-none border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-[#f6bf4a]/40 transition-all shadow-sm dark:shadow-none">
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                <div className="w-14 h-14 rounded-none bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-black text-2xl font-mono">
                  03
                </div>
                <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#f6bf4a] uppercase tracking-wider">
                  {hw.step3Badge || 'STEP 3: GET FUNDED'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  {hw.step3Title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {hw.step3Desc}
                </p>
                <div className="pt-2">
                  <Link href="/reviews" className="text-xs font-bold text-[#c68a00] dark:text-[#f6bf4a] hover:underline flex items-center gap-1">
                    <span>{hw.step3Link || 'View program rules'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8 p-6 rounded-none bg-neutral-50 dark:bg-black/30 border border-neutral-200/80 dark:border-white/5 space-y-3 text-xs">
                <div className="flex items-center gap-3 p-3.5 rounded-none bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#c68a00] dark:text-[#f6bf4a] shrink-0" />
                  <div>
                    <div className="font-bold text-neutral-900 dark:text-white">{hw.kycFeature1Title || 'Identity verification'}</div>
                    <div className="text-neutral-500 dark:text-neutral-400">{hw.kycFeature1Desc}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-none bg-white dark:bg-neutral-500/10 border border-neutral-200/80 dark:border-transparent shadow-xs">
                  <TrendingUp className="w-5 h-5 text-[#c68a00] dark:text-[#f6bf4a] shrink-0" />
                  <div>
                    <div className="font-bold text-neutral-900 dark:text-white">{hw.kycFeature2Title || 'Funded Capital Cap'}</div>
                    <div className="text-neutral-500 dark:text-neutral-400">{hw.kycFeature2Desc}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="p-8 sm:p-12 rounded-3xl border border-[#f6bf4a]/40 bg-white dark:bg-[#0b0b0d] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-lg dark:shadow-2xl">
              <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[#f6bf4a]/20 text-[#c68a00] dark:text-[#ffc501] flex items-center justify-center font-black text-2xl font-mono">
                  04
                </div>
                <div className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase tracking-wider">
                  {hw.step4Badge || 'STEP 4: WITHDRAW PROFIT'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                  {hw.step4Title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {hw.step4Desc}
                </p>
                <div className="pt-2">
                  <Link href="/reviews" className="text-xs font-bold text-[#c68a00] dark:text-[#ffc501] hover:underline flex items-center gap-1">
                    <span>{hw.step4Link || 'View withdrawal conditions'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-8 p-6 rounded-2xl bg-white/90 dark:bg-black/40 border border-[#f6bf4a]/20 space-y-4 text-xs shadow-xs">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/20 text-center">
                    <div className="text-2xl font-black text-[#c68a00] dark:text-[#ffc501]">{getHighShareWord(currentLang)}</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-1 font-bold">{hw.splitStatLabel || 'Trader Profit Split'}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/20 text-center">
                    <div className="text-2xl font-black text-[#c68a00] dark:text-[#f6bf4a]">1{hw.speedUnit || '%'}</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-1 font-bold">{hw.speedStatLabel || 'Min Withdrawal'}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-[#f6bf4a]/10 border border-[#f6bf4a]/20 text-center">
                    <div className="text-2xl font-black text-[#c68a00] dark:text-[#f6bf4a]">5 / 14</div>
                    <div className="text-neutral-500 dark:text-neutral-400 mt-1 font-bold">{hw.refundStatLabel || 'First Withdrawal Wait (Days)'}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-100 dark:bg-neutral-500/10 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-transparent">
                  <span>{hw.disbursementNotice}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ImageBand caption="platform" variant="device" inline />

        <CryptoCurrencyGrid inline />

        {/* MORE CAPITAL, NOT BETTER RETURNS */}
        <section className="p-8 sm:p-12 rounded-none border border-[#f6bf4a]/30 bg-[#f6bf4a]/10 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
            {cap.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="p-6 border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
              <div className="text-xs font-mono text-neutral-500 dark:text-neutral-400">
                {cap.ownCapital}
              </div>
              <div className="text-3xl font-black font-mono text-neutral-900 dark:text-white mt-2">$40</div>
            </div>
            <div className="p-6 border border-[#f6bf4a]/40 bg-white dark:bg-white/[0.02]">
              <div className="text-xs font-mono text-[#c68a00] dark:text-[#ffc501]">
                {cap.fundedCapital}
              </div>
              <div className="text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501] mt-2">$4,000</div>
            </div>
          </div>
        </section>

        {/* PROFIT CALCULATOR */}
        <ProfitCalculator />

      </div>
    </div>
  );
};
