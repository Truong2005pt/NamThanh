'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { ArrowUpRight, Check, Copy } from 'lucide-react';


export const AffiliateSection: React.FC = () => {
  const { t, currentLang } = useLanguage();
  const [copied, setCopied] = useState(false);
  const sampleRefLink = 'https://eracex.com/?ref=YOUR_CODE';

  const handleCopy = () => {
    navigator.clipboard.writeText(sampleRefLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loc = {
    vi: {
      earnRecurring: 'Nhận Hoa Hồng Cùng ',
      becomeAffiliate: 'Đăng Ký Làm Đại Lý Ngay',
    },
    zh: {
      earnRecurring: '赚取佣金，选择 ',
      becomeAffiliate: '立即申请成为合伙人',
    },
    ja: {
      earnRecurring: 'コミッションを稼ぐなら ',
      becomeAffiliate: 'アフィリエイトに今すぐ登録',
    },
    en: {
      earnRecurring: 'Earn Commission with ',
      becomeAffiliate: 'Become an Affiliate Now',
    },
    es: {
          "earnRecurring": "Gana Comisiones con ",
          "becomeAffiliate": "Conviértete en Afiliado Ahora",
    },
    pt: {
          "earnRecurring": "Ganhe Comissões com ",
          "becomeAffiliate": "Seja um Afiliado Agora",
    },
    fr: {
          "earnRecurring": "Gagnez des commissions avec ",
          "becomeAffiliate": "Devenir Affilié Maintenant",
    },
    de: {
          "earnRecurring": "Verdienen Sie Provisionen mit ",
          "becomeAffiliate": "Jetzt Affiliate Werden",
    },
    it: {
          "earnRecurring": "Guadagna commissioni con ",
          "becomeAffiliate": "Diventa Subito un Affiliato",
    },
    pl: {
          "earnRecurring": "Zarabiaj prowizje z ",
          "becomeAffiliate": "Zostań Partnerem Teraz",
    },
    tr: {
          "earnRecurring": "Komisyon Kazanın: ",
          "becomeAffiliate": "Hemen İş Ortağı Olun",
    },
    id: {
          "earnRecurring": "Dapatkan Komisi bersama ",
          "becomeAffiliate": "Daftar Jadi Afiliasi Sekarang",
    },
    th: {
          "earnRecurring": "รับค่าคอมมิชชันกับ ",
          "becomeAffiliate": "สมัครเป็นตัวแทนพันธมิตรทันที",
    },
    fil: {
          "earnRecurring": "Kumita ng Komisyon kasama ang ",
          "becomeAffiliate": "Maging Affiliate Ngayon",
    },
    hi: {
          "earnRecurring": "कमीशन कमाएँ, साथ में ",
          "becomeAffiliate": "अभी एफिलिएट पार्टनर बनें",
    },
    ko: {
          "earnRecurring": "ERACEX와 함께 수수료를 받으세요 ",
          "becomeAffiliate": "파트너 계정 지금 신청하기",
    },
    ru: {
          "earnRecurring": "Получайте комиссию вместе с ",
          "becomeAffiliate": "Стать партнером прямо сейчас",
    },
    ar: {
          "earnRecurring": "احصل على عمولة مع ",
          "becomeAffiliate": "كن شريكاً معنا الآن",
    },
    nl: {
          "earnRecurring": "Verdien commissie met ",
          "becomeAffiliate": "Word Nu Partner",
    },
  }[currentLang] || {
    earnRecurring: 'Earn Commission with ',
    becomeAffiliate: 'Become an Affiliate Now',
  };

  return (
    <section className="min-h-[calc(100vh-80px)] min-h-[100dvh] flex flex-col justify-center py-16 sm:py-24 relative app-bg" id="affiliate">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* HERO PROMO CARD */}
        <div className="w-full mb-16 sm:mb-20 p-8 sm:p-12 rounded-3xl border app-border app-surface shadow-2xl relative overflow-hidden reveal-up">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* LEFT: COMMUNITY & IB PHOTO */}
            <div className="lg:col-span-5 reveal-left">
              <div className="relative rounded-2xl overflow-hidden bg-black shadow-xl max-w-md mx-auto lg:max-w-none">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/eracex-payout-cash.webp"
                  alt="ERACEX affiliate program"
                  className="w-full h-auto block"
                />
              </div>
            </div>

            {/* RIGHT: HIGHLIGHTS (7 COLS) */}
            <div className="lg:col-span-7 reveal-right">
              <h3 className="text-2xl sm:text-4xl font-black app-text mb-4 leading-tight">
                {loc.earnRecurring}
                <span className="text-[#c68a00] dark:text-[#ffc501] font-mono">ERACEX</span>
              </h3>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#referral-link"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold btn-gold shadow-xl hover-float btn-shimmer transition-all text-black"
                >
                  <GftIcon src="/icons/gft/fast-foward-icon.webp" className="w-5 h-5 text-black" />
                  <span>{loc.becomeAffiliate}</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CODE ATTACHMENT BOX */}
        <div id="referral-link" className="w-full max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl border app-border app-surface shadow-2xl scroll-mt-28">
          <label className="text-xs font-mono font-bold text-[#c68a00] dark:text-[#ffc501] uppercase tracking-wider block mb-3">
            {t.affiliate.refBoxTitle}
          </label>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
            {/* INPUT LINK FIELD */}
            <div className="flex-1 flex items-center h-12 px-4 rounded-xl app-subtle border app-border font-mono text-sm app-text select-all overflow-x-auto whitespace-nowrap min-w-0">
              {sampleRefLink}
            </div>

            {/* BUTTON 1: SAO CHÉP */}
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border app-border app-subtle font-mono text-sm font-bold app-text hover:border-[#ffc501] transition-all shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#f6bf4a]" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? t.affiliate.copied : t.affiliate.copy}</span>
            </button>

            {/* BUTTON 2: ĐĂNG KÝ TIẾP THỊ */}
            <a
              href="#referral-link"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl btn-gold text-sm font-extrabold shadow-lg hover:scale-105 transition-all shrink-0 whitespace-nowrap cursor-pointer text-black"
            >
              <span>{t.affiliate.ctaBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
