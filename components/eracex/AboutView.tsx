'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';
import { getSubpageTranslations } from './subpage-translations';
import { 
  Target, 
  ShieldCheck, 
  Users, 
  Globe2, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Server, 
  HeartHandshake,
  Sparkles,
  Lock,
  Cpu
} from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

export const AboutView: React.FC = () => {
  const { currentLang } = useLanguage();
  const sub = getSubpageTranslations(currentLang);
  const ab = sub.about || {
    heroTitle1: 'Trao Quyền Cho Trader.',
    heroHighlight: 'Chuẩn Mực Prop Firm',
    heroTitle2: 'Định Nghĩa Lại',
    heroDesc: 'ERACEX cung cấp các chương trình đánh giá giao dịch mô phỏng với quy tắc được công bố rõ ràng trước khi thanh toán.',
    btnExplore: 'Khám Phá Các Gói',
    btnReviews: 'Xem Quy Tắc',
    statCapital: 'Quy Mô Tài Khoản Tối Đa',
    statTraders: 'Chia Sẻ Lợi Nhuận',
    statSpeed: 'Rút Tối Thiểu',
    statCountries: 'Giới Hạn Vốn / Người Dùng',
    pillarsTitle: 'Tại Sao Chọn ERACEX?',
    p1Title: 'Quy Tắc Minh Bạch',
    p1Desc: 'Giới hạn lỗ theo ngày và tổng lỗ tối đa dựa trên equity, được hiển thị rõ cho từng chương trình.',
    p2Title: 'Điều Kiện Rút Tiền Rõ Ràng',
    p2Desc: 'Rút tối thiểu 1% lợi nhuận. Phí chương trình không được hoàn lại sau khi cấp quyền truy cập.',
    p3Title: 'Môi Trường Mô Phỏng',
    p3Desc: 'Mọi giao dịch diễn ra trên tài khoản mô phỏng, không dùng vốn thật của khách hàng.',
    p4Title: 'Hỗ Trợ Khách Hàng',
    p4Desc: 'Đội ngũ hỗ trợ tiếp nhận yêu cầu qua Live Chat và Email.',
    teamTitle: 'Đội Ngũ ERACEX',
    m1Role: 'Quản Lý',
    m1Bio: 'Phụ trách định hướng và vận hành ERACEX.',
    m2Role: 'Quản Trị Rủi Ro',
    m2Bio: 'Phụ trách quản trị rủi ro và quy tắc chương trình.',
    m3Role: 'Công Nghệ',
    m3Bio: 'Phụ trách nền tảng ERACEX Platform và bảo mật dữ liệu.',
  };

  return (
    <div className="min-h-screen py-10">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 space-y-16">
        
        {/* HERO SECTION */}
        <section className="relative rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-[#0b0b0d] p-6 sm:p-10 lg:p-14 text-center space-y-6 shadow-sm dark:shadow-2xl">
          <h1 className="gft-title text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] max-w-4xl mx-auto text-neutral-900 dark:text-white">
            {ab.heroTitle1}{' '}
            <span className="text-[#c68a00] dark:text-[#ffc501]">
              {ab.heroHighlight}
            </span>{' '}
            {ab.heroTitle2}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            {ab.heroDesc}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              href="/pricing"
              className="px-8 py-4 rounded-2xl btn-gold text-black font-black text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>{ab.btnExplore}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/reviews"
              className="px-6 py-4 rounded-2xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 font-bold text-sm text-neutral-800 dark:text-neutral-200 transition-all shadow-xs cursor-pointer"
            >
              <span>{ab.btnReviews}</span>
            </Link>
          </div>
        </section>

        <ImageBand caption="simulated" variant="wide" inline images={[{ src: '/images/eracex-f1-banner.jpg', alt: 'ERACEX simulated trading programs' }]} />

        {/* METRICS BAR */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-center space-y-1 shadow-xs dark:shadow-none">
            <div className="text-3xl sm:text-4xl font-black text-[#c68a00] dark:text-[#ffc501] font-mono">{SITE_CONFIG.stats.totalFunded}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase">{ab.statCapital}</div>
          </div>
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-center space-y-1 shadow-xs dark:shadow-none">
            <div className="text-3xl sm:text-4xl font-black text-[#c68a00] dark:text-[#f6bf4a] font-mono">{SITE_CONFIG.stats.avgPayoutHours}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase">{ab.statSpeed}</div>
          </div>
          <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] text-center space-y-1 shadow-xs dark:shadow-none">
            <div className="text-3xl sm:text-4xl font-black text-[#c68a00] dark:text-[#f6bf4a] font-mono">{SITE_CONFIG.stats.countriesSupported}</div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 font-bold uppercase">{ab.statCountries}</div>
          </div>
        </section>

        {/* 4 CORE PILLARS */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-900 dark:text-white">
              {ab.pillarsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-4 hover:border-[#f6bf4a]/50 transition-all shadow-xs dark:shadow-none">
              <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#ffc501] flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{ab.p1Title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ab.p1Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-4 hover:border-[#f6bf4a]/50 transition-all shadow-xs dark:shadow-none">
              <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{ab.p2Title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ab.p2Desc}
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/[0.02] space-y-4 hover:border-[#f6bf4a]/50 transition-all shadow-xs dark:shadow-none">
              <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-bold">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-neutral-900 dark:text-white">{ab.p3Title}</h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                {ab.p3Desc}
              </p>
            </div>
          </div>
        </section>

        <ImageBand caption="discipline" variant="wide" inline images={[{ src: '/images/eracex-office.png', alt: 'ERACEX trading desk' }]} />

      </div>
    </div>
  );
};
