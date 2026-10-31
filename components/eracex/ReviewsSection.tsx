'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { getHighShareWord } from '@/lib/high-share';
import { Star, BadgeCheck, ShieldCheck, UserRound } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { currentLang } = useLanguage();
  
  const [selectedCert, setSelectedCert] = useState<{
    img: string;
    trader: string;
    amount: string;
  } | null>(null);

  const t = {
    vi: {
      headerTitle: 'Thông Tin Các Chương Trình',
      headerSubtitle: 'Tóm tắt quy tắc của từng chương trình đánh giá giao dịch mô phỏng. Phí không được hoàn lại sau khi cấp quyền truy cập tài khoản.',
      viewCert: 'Xem Chứng Chỉ',
      withdrawnLabel: 'Chia sẻ lợi nhuận:',
      verifiedTrader: 'THÔNG TIN CHƯƠNG TRÌNH',
      onChainTransferred: 'Quy tắc hiển thị rõ ràng',
      verifiedSuffix: 'Chương trình',
    },
    zh: {
      headerTitle: '计划信息',
      headerSubtitle: '各模拟交易评估计划的规则概要。账户访问权限开通后，费用不予退还。',
      viewCert: '查看证书',
      withdrawnLabel: '利润分成：',
      verifiedTrader: '计划信息',
      onChainTransferred: '规则清晰展示',
      verifiedSuffix: '计划',
    },
    ja: {
      headerTitle: 'プログラム情報',
      headerSubtitle: '各シミュレーション取引評価プログラムのルールの概要です。アカウントへのアクセスが付与された後は、料金は返金されません。',
      viewCert: '証明書を見る',
      withdrawnLabel: '利益分配：',
      verifiedTrader: 'プログラム情報',
      onChainTransferred: 'ルールを明確に表示',
      verifiedSuffix: 'プログラム',
    },
    en: {
      headerTitle: 'Program Information',
      headerSubtitle: 'A summary of the rules of each simulated trading evaluation program. Fees are non-refundable once account access is granted.',
      viewCert: 'View Certificate',
      withdrawnLabel: 'Profit split:',
      verifiedTrader: 'PROGRAM INFO',
      onChainTransferred: 'Rules shown clearly',
      verifiedSuffix: 'Program',
    },
    es: {
          "headerTitle": "Información de los Programas",
          "headerSubtitle": "Un resumen de las reglas de cada programa de evaluación de trading simulado. Las tarifas no son reembolsables una vez concedido el acceso a la cuenta.",
          "viewCert": "Ver Certificado",
          "withdrawnLabel": "Reparto de beneficios:",
          "verifiedTrader": "INFORMACIÓN DEL PROGRAMA",
          "onChainTransferred": "Reglas mostradas con claridad",
          "verifiedSuffix": "Programa"
    },
    pt: {
          "headerTitle": "Informações dos Programas",
          "headerSubtitle": "Um resumo das regras de cada programa de avaliação de trading simulado. As taxas não são reembolsáveis depois que o acesso à conta é concedido.",
          "viewCert": "Ver Certificado",
          "withdrawnLabel": "Divisão de lucros:",
          "verifiedTrader": "INFORMAÇÕES DO PROGRAMA",
          "onChainTransferred": "Regras mostradas com clareza",
          "verifiedSuffix": "Programa"
    },
    fr: {
          "headerTitle": "Informations sur les programmes",
          "headerSubtitle": "Un résumé des règles de chaque programme d'évaluation de trading simulé. Les frais ne sont pas remboursables une fois l'accès au compte accordé.",
          "viewCert": "Voir le certificat",
          "withdrawnLabel": "Partage des profits :",
          "verifiedTrader": "INFOS DU PROGRAMME",
          "onChainTransferred": "Règles présentées clairement",
          "verifiedSuffix": "Programme"
    },
    de: {
          "headerTitle": "Programminformationen",
          "headerSubtitle": "Eine Zusammenfassung der Regeln jedes simulierten Trading-Evaluierungsprogramms. Gebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig.",
          "viewCert": "Zertifikat ansehen",
          "withdrawnLabel": "Gewinnaufteilung:",
          "verifiedTrader": "PROGRAMMINFO",
          "onChainTransferred": "Regeln klar dargestellt",
          "verifiedSuffix": "Programm"
    },
    it: {
          "headerTitle": "Informazioni sui programmi",
          "headerSubtitle": "Un riepilogo delle regole di ogni programma di valutazione di trading simulato. Le commissioni non sono rimborsabili una volta concesso l'accesso al conto.",
          "viewCert": "Visualizza certificato",
          "withdrawnLabel": "Ripartizione degli utili:",
          "verifiedTrader": "INFO SUL PROGRAMMA",
          "onChainTransferred": "Regole mostrate chiaramente",
          "verifiedSuffix": "Programma"
    },
    pl: {
          "headerTitle": "Informacje o programach",
          "headerSubtitle": "Podsumowanie zasad każdego programu oceny symulowanego tradingu. Opłaty nie podlegają zwrotowi po przyznaniu dostępu do konta.",
          "viewCert": "Zobacz certyfikat",
          "withdrawnLabel": "Podział zysków:",
          "verifiedTrader": "INFORMACJE O PROGRAMIE",
          "onChainTransferred": "Zasady jasno przedstawione",
          "verifiedSuffix": "Program"
    },
    tr: {
          "headerTitle": "Program Bilgileri",
          "headerSubtitle": "Her simüle işlem değerlendirme programının kurallarının özeti. Hesap erişimi verildikten sonra ücretler iade edilmez.",
          "viewCert": "Sertifikayı Görüntüle",
          "withdrawnLabel": "Kâr paylaşımı:",
          "verifiedTrader": "PROGRAM BİLGİSİ",
          "onChainTransferred": "Kurallar açıkça gösterilir",
          "verifiedSuffix": "Program"
    },
    id: {
          "headerTitle": "Informasi Program",
          "headerSubtitle": "Ringkasan aturan setiap program evaluasi trading simulasi. Biaya tidak dapat dikembalikan setelah akses akun diberikan.",
          "viewCert": "Lihat Sertifikat",
          "withdrawnLabel": "Pembagian profit:",
          "verifiedTrader": "INFO PROGRAM",
          "onChainTransferred": "Aturan ditampilkan dengan jelas",
          "verifiedSuffix": "Program"
    },
    th: {
          "headerTitle": "ข้อมูลโปรแกรม",
          "headerSubtitle": "สรุปกฎของแต่ละโปรแกรมประเมินการเทรดจำลอง ค่าธรรมเนียมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว",
          "viewCert": "ดูใบรับรอง",
          "withdrawnLabel": "การแบ่งกำไร:",
          "verifiedTrader": "ข้อมูลโปรแกรม",
          "onChainTransferred": "แสดงกฎอย่างชัดเจน",
          "verifiedSuffix": "โปรแกรม"
    },
    fil: {
          "headerTitle": "Impormasyon ng mga Programa",
          "headerSubtitle": "Buod ng mga patakaran ng bawat simulated trading evaluation program. Hindi na maibabalik ang mga bayad kapag naibigay na ang access sa account.",
          "viewCert": "Tingnan ang Certificate",
          "withdrawnLabel": "Hatian ng kita:",
          "verifiedTrader": "IMPORMASYON NG PROGRAMA",
          "onChainTransferred": "Malinaw na ipinapakita ang mga patakaran",
          "verifiedSuffix": "Programa"
    },
    hi: {
          "headerTitle": "प्रोग्राम की जानकारी",
          "headerSubtitle": "हर सिम्युलेटेड ट्रेडिंग मूल्यांकन प्रोग्राम के नियमों का सारांश। खाते का एक्सेस दिए जाने के बाद शुल्क वापस नहीं किया जाता।",
          "viewCert": "प्रमाणपत्र देखें",
          "withdrawnLabel": "लाभ विभाजन:",
          "verifiedTrader": "प्रोग्राम की जानकारी",
          "onChainTransferred": "नियम स्पष्ट रूप से दिखाए गए",
          "verifiedSuffix": "प्रोग्राम"
    },
    ko: {
          "headerTitle": "실제 펀딩 통과 트레이더들의 검증된 평가",
          "headerSubtitle": "체결 속도, 원금 고정 드로우다운 및 신속한 자동 출금 프로세스에 대해 전 세계 트레이더들이 부여한 17,000개 이상의 5성급 평가.",
          "viewCert": "인증서 확인",
          "withdrawnLabel": "누적 출금액:",
          "verifiedTrader": "공식 검증 트레이더",
          "onChainTransferred": "온체인 결제 송금 완료",
          "verifiedSuffix": "인증 완료"
    },
    ru: {
          "headerTitle": "Проверенные отзывы от финансируемых трейдеров",
          "headerSubtitle": "Более 17 000 5-звездочных отзывов со всего мира с высокой оценкой скорости исполнения, статического drawdown и быстрых выплат.",
          "viewCert": "Смотреть сертификат",
          "withdrawnLabel": "Выведено:",
          "verifiedTrader": "ПРОВЕРЕННЫЙ ТРЕЙДЕР",
          "onChainTransferred": "On-Chain перевод подтвержден",
          "verifiedSuffix": "Проверено"
    },
    ar: {
          "headerTitle": "تقييمات معتمدة من المتداولين الممولين",
          "headerSubtitle": "أكثر من 17,000 تقييم 5 نجوم من متداولين حول العالم يشيدون بسرعة التنفيذ وقواعد التراجع الثابت والسحوبات الآلية.",
          "viewCert": "عرض الشهادة",
          "withdrawnLabel": "إجمالي المسحوب:",
          "verifiedTrader": "متداول معتمد",
          "onChainTransferred": "تم التحويل On-Chain بنجاح",
          "verifiedSuffix": "معتمد"
    },
    nl: {
          "headerTitle": "Geverifieerde Reviews Van Gefinancierde Traders",
          "headerSubtitle": "Meer dan 17.000 5-sterrenbeoordelingen van wereldwijde handelaren die de uitvoeringssnelheid, statische drawdown en automatische uitbetalingen prijzen.",
          "viewCert": "Bekijk Certificaat",
          "withdrawnLabel": "Opgenomen:",
          "verifiedTrader": "GEVERIFIEERDE TRADER",
          "onChainTransferred": "On-Chain Overboeking Geslaagd",
          "verifiedSuffix": "Geverifieerd"
    },
  }[currentLang] || {
    headerTitle: 'Program Information',
    headerSubtitle: 'A summary of the rules of each simulated trading evaluation program. Fees are non-refundable once account access is granted.',
    viewCert: 'View Certificate',
    withdrawnLabel: 'Profit split:',
    verifiedTrader: 'PROGRAM INFO',
    onChainTransferred: 'Rules shown clearly',
    verifiedSuffix: 'Program',
  };

  const reviews = [
    {
      id: 'rev-1',
      name: 'Two-Step',
      flag: '',
      country: 'Simulated evaluation',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Hai Giai Đoạn Đánh Giá',
        zh: '两个评估步骤',
        ja: '2つの評価ステップ',
        en: 'Two Evaluation Steps',
      }[currentLang] || 'Two Evaluation Steps',
      comment: {
        vi: 'Mục tiêu 10% ở Bước 1 và 5% ở Bước 2, lỗ ngày 5% và lỗ tối đa 10% dựa trên equity. Quy tắc được hiển thị rõ ràng trước khi thanh toán.',
        zh: '第1步目标10%，第2步目标5%，每日亏损5%、最大亏损10%，均基于净值。规则在付款前清晰展示。',
        ja: 'ステップ1の目標は10%、ステップ2は5%で、日次損失5%、最大損失10%（いずれもエクイティ基準）。ルールはお支払い前に明確に表示されます。',
        en: '10% target in Step 1 and 5% in Step 2, with a 5% daily loss and 10% max loss, equity-based. Rules are shown clearly before you pay.',
      }[currentLang] || '10% target in Step 1 and 5% in Step 2, with a 5% daily loss and 10% max loss, equity-based. Rules are shown clearly before you pay.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút lần đầu sau 5 ngày',
        zh: '5天后首次提现',
        ja: '5日後に初回出金',
        en: 'First withdrawal after 5 days',
      }[currentLang] || 'First withdrawal after 5 days',
    },
    {
      id: 'rev-2',
      name: 'One-Step',
      flag: '',
      country: 'Simulated evaluation',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Một Giai Đoạn Đánh Giá',
        zh: '单步评估',
        ja: '1ステップ評価',
        en: 'A Single Evaluation Step',
      }[currentLang] || 'A Single Evaluation Step',
      comment: {
        vi: 'Mục tiêu 10%, lỗ ngày 3% và lỗ tối đa 6% dựa trên equity, đòn bẩy 1:50 trong thử thách và 1:40 khi funded.',
        zh: '目标10%，每日亏损3%、最大亏损6%（基于净值），挑战阶段杠杆1:50，获得资金后为1:40。',
        ja: '目標10%、日次損失3%、最大損失6%（エクイティ基準）。レバレッジはチャレンジ中が1:50、ファンデッド後は1:40です。',
        en: '10% target with a 3% daily loss and 6% max loss, equity-based, 1:50 leverage in the challenge and 1:40 once funded.',
      }[currentLang] || '10% target with a 3% daily loss and 6% max loss, equity-based, 1:50 leverage in the challenge and 1:40 once funded.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút lần đầu sau 5 ngày',
        zh: '5天后首次提现',
        ja: '5日後に初回出金',
        en: 'First withdrawal after 5 days',
      }[currentLang] || 'First withdrawal after 5 days',
    },
    {
      id: 'rev-3',
      name: 'Instant Funding',
      flag: '',
      country: 'Simulated funded account',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Tài Khoản Funded Ngay',
        zh: '从一开始即为资金账户',
        ja: '最初からファンデッド',
        en: 'Funded From The Start',
      }[currentLang] || 'Funded From The Start',
      comment: {
        vi: 'Không có giai đoạn đánh giá, lỗ ngày 3% và lỗ tối đa 5% trailing, tối thiểu 5 ngày giao dịch. Giao dịch tin tức bị cấm trên tài khoản Instant.',
        zh: '无评估阶段，每日亏损3%、最大亏损5%（追踪式），最少交易5天。Instant账户禁止新闻交易。',
        ja: '評価フェーズなし。日次損失3%、最大損失5%（トレーリング）、最低取引日数5日。Instantアカウントではニューストレードは禁止です。',
        en: 'No evaluation phase, 3% daily loss and 5% trailing max loss, minimum 5 trading days. News trading is forbidden on Instant accounts.',
      }[currentLang] || 'No evaluation phase, 3% daily loss and 5% trailing max loss, minimum 5 trading days. News trading is forbidden on Instant accounts.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút sau 14 ngày',
        zh: '14天后提现',
        ja: '14日後に出金',
        en: 'Withdraw after 14 days',
      }[currentLang] || 'Withdraw after 14 days',
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative app-bg" id="reviews">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-5xl font-black tracking-normal app-text mb-4">
            {t.headerTitle}
          </h2>
          <p className="text-base sm:text-lg app-text-secondary max-w-2xl mx-auto">
            {t.headerSubtitle}
          </p>
          <div className="mt-6 flex justify-center scale-105">
            {null}
          </div>
        </div>

        {/* 3 REVIEWS CARDS WITH REAL TRADER PORTRAITS & CERTIFICATES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              className={`p-7 sm:p-8 rounded-3xl border app-border app-surface flex flex-col justify-between hover:border-[#f6bf4a]/50 dark:hover:border-[#ffc501]/50 transition-all duration-300 shadow-xl hover-float reveal-up stagger-${idx + 1}`}
            >
              <div>
                {/* TRADER HEADER WITH REAL PORTRAIT */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-2xl border-2 border-[#f6bf4a]/40 dark:border-[#ffc501]/50 shadow-md app-subtle flex items-center justify-center text-[#c68a00] dark:text-[#f6bf4a]">
                      <UserRound className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#f6bf4a] text-black flex items-center justify-center">
                      <BadgeCheck className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="overflow-hidden">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-base app-text truncate">{rev.name}</span>
                      <span>{rev.flag}</span>
                    </div>
                    <span className="text-xs font-mono app-text-muted block">{rev.country}</span>
                    <span className="text-xs font-mono text-[#c68a00] dark:text-[#f6bf4a] font-bold block">{rev.model}</span>
                  </div>
                </div>

                {/* 5 CRISP GOLD STARS & SPEED */}
                <div className="flex items-center justify-between mb-3 py-1.5 border-y app-border">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f6bf4a] text-[#f6bf4a]" />
                    ))}
                  </div>
                  <span className="text-xs font-mono text-[#c68a00] dark:text-[#f6bf4a] font-bold">
                    {rev.payoutSpeed}
                  </span>
                </div>

                <h4 className="font-bold text-base app-text mb-2.5 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h4>
                <p className="text-sm leading-relaxed app-text-secondary mb-4 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>

              </div>

              {/* FOOTER BADGE WITH CRISP VECTOR VERIFIED ICON */}
              <div className="mt-4 pt-4 border-t app-border flex items-center justify-between text-xs font-mono">
                <span className="text-[#f6bf4a] font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                  <span>{t.verifiedTrader}</span>
                </span>
                <span className="px-2.5 py-1 rounded bg-[#f6bf4a]/15 dark:bg-[#ffc501]/15 text-[#c68a00] dark:text-[#ffc501] font-extrabold">
                  {t.withdrawnLabel} {rev.payoutAmount}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
