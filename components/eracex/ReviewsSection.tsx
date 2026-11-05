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
      country: 'Evaluation program',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Hai Giai Đoạn Đánh Giá',
        zh: '两个评估步骤',
        ja: '2つの評価ステップ',
        es: "Dos pasos de evaluación",
        pt: "Duas etapas de avaliação",
        hi: "दो मूल्यांकन स्टेप",
        id: "Dua Langkah Evaluasi",
        fr: "Deux étapes d'évaluation",
        de: "Zwei Evaluierungsschritte",
        it: "Due fasi di valutazione",
        pl: "Dwa kroki oceny",
        tr: "İki Değerlendirme Adımı",
        th: "การประเมินสองขั้นตอน",
        fil: "Dalawang Hakbang ng Evaluation",
        en: 'Two Evaluation Steps',
      }[currentLang] || 'Two Evaluation Steps',
      comment: {
        vi: 'Mục tiêu 10% ở Bước 1 và 5% ở Bước 2, lỗ ngày 5% và lỗ tối đa 10% dựa trên equity. Quy tắc được hiển thị rõ ràng trước khi thanh toán.',
        zh: '第1步目标10%，第2步目标5%，每日亏损5%、最大亏损10%，均基于净值。规则在付款前清晰展示。',
        ja: 'ステップ1の目標は10%、ステップ2は5%で、日次損失5%、最大損失10%（いずれもエクイティ基準）。ルールはお支払い前に明確に表示されます。',
        es: "Objetivo del 10 % en el Paso 1 y del 5 % en el Paso 2, con una pérdida diaria del 5 % y una pérdida máxima del 10 %, basadas en el equity. Las reglas se muestran con claridad antes de pagar.",
        pt: "Meta de 10% na Etapa 1 e 5% na Etapa 2, com perda diária de 5% e perda máxima de 10%, baseadas em equity. As regras são mostradas com clareza antes do pagamento.",
        hi: "स्टेप 1 में 10% लक्ष्य और स्टेप 2 में 5%, साथ में 5% दैनिक हानि और 10% अधिकतम हानि, इक्विटी आधारित। भुगतान से पहले नियम स्पष्ट रूप से दिखाए जाते हैं।",
        id: "Target 10% di Langkah 1 dan 5% di Langkah 2, dengan kerugian harian 5% dan kerugian maksimum 10%, berbasis equity. Aturan ditampilkan dengan jelas sebelum Anda membayar.",
        fr: "Objectif de 10% à l'étape 1 et de 5% à l'étape 2, avec une perte quotidienne de 5% et une perte maximale de 10%, basées sur l'equity. Les règles sont clairement affichées avant le paiement.",
        de: "10 % Ziel in Schritt 1 und 5 % in Schritt 2, bei 5 % Tagesverlust und 10 % Maximalverlust, auf Equity-Basis. Die Regeln werden vor der Zahlung klar angezeigt.",
        it: "Obiettivo del 10% nella Fase 1 e del 5% nella Fase 2, con perdita giornaliera del 5% e perdita massima del 10%, calcolate sull'equity. Le regole sono mostrate chiaramente prima del pagamento.",
        pl: "Cel 10% w Kroku 1 i 5% w Kroku 2, przy dziennej stracie 5% i maksymalnej stracie 10%, w oparciu o equity. Zasady są wyraźnie pokazane przed zapłatą.",
        tr: "1. Adımda %10, 2. Adımda %5 hedef; %5 günlük kayıp ve %10 maksimum kayıp, equity bazlı. Kurallar ödeme yapmadan önce açıkça gösterilir.",
        th: "เป้าหมาย 10% ในขั้นที่ 1 และ 5% ในขั้นที่ 2 โดยมีขาดทุนรายวัน 5% และขาดทุนสูงสุด 10% อิงตาม Equity กฎทั้งหมดแสดงให้เห็นชัดเจนก่อนชำระเงิน",
        fil: "10% na target sa Step 1 at 5% sa Step 2, na may 5% na araw-araw na lugi at 10% na pinakamataas na lugi, batay sa equity. Malinaw na ipinapakita ang mga patakaran bago ka magbayad.",
        en: '10% target in Step 1 and 5% in Step 2, with a 5% daily loss and 10% max loss, equity-based. Rules are shown clearly before you pay.',
      }[currentLang] || '10% target in Step 1 and 5% in Step 2, with a 5% daily loss and 10% max loss, equity-based. Rules are shown clearly before you pay.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút lần đầu sau 5 ngày',
        zh: '5天后首次提现',
        ja: '5日後に初回出金',
        es: "Primer retiro tras 5 días",
        pt: "Primeiro saque após 5 dias",
        hi: "5 दिन बाद पहली निकासी",
        id: "Penarikan pertama setelah 5 hari",
        fr: "Premier retrait après 5 jours",
        de: "Erste Auszahlung nach 5 Tagen",
        it: "Primo prelievo dopo 5 giorni",
        pl: "Pierwsza wypłata po 5 dniach",
        tr: "5 gün sonra ilk çekim",
        th: "ถอนครั้งแรกหลังจาก 5 วัน",
        fil: "Unang withdrawal pagkatapos ng 5 araw",
        en: 'First withdrawal after 5 days',
      }[currentLang] || 'First withdrawal after 5 days',
    },
    {
      id: 'rev-2',
      name: 'One-Step',
      flag: '',
      country: 'Evaluation program',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Một Giai Đoạn Đánh Giá',
        zh: '单步评估',
        ja: '1ステップ評価',
        es: "Un único paso de evaluación",
        pt: "Uma única etapa de avaliação",
        hi: "एकल मूल्यांकन स्टेप",
        id: "Satu Langkah Evaluasi",
        fr: "Une seule étape d'évaluation",
        de: "Ein einziger Evaluierungsschritt",
        it: "Una sola fase di valutazione",
        pl: "Pojedynczy krok oceny",
        tr: "Tek Değerlendirme Adımı",
        th: "การประเมินขั้นตอนเดียว",
        fil: "Isang Hakbang ng Evaluation",
        en: 'A Single Evaluation Step',
      }[currentLang] || 'A Single Evaluation Step',
      comment: {
        vi: 'Mục tiêu 10%, lỗ ngày 3% và lỗ tối đa 6% dựa trên equity, đòn bẩy 1:50 trong thử thách và 1:40 khi funded.',
        zh: '目标10%，每日亏损3%、最大亏损6%（基于净值），挑战阶段杠杆1:50，获得资金后为1:40。',
        ja: '目標10%、日次損失3%、最大損失6%（エクイティ基準）。レバレッジはチャレンジ中が1:50、ファンデッド後は1:40です。',
        es: "Objetivo del 10 % con una pérdida diaria del 3 % y una pérdida máxima del 6 %, basadas en el equity, apalancamiento 1:50 en el desafío y 1:40 una vez financiada.",
        pt: "Meta de 10% com perda diária de 3% e perda máxima de 6%, baseadas em equity, alavancagem de 1:50 no desafio e 1:40 depois de financiada.",
        hi: "10% लक्ष्य के साथ 3% दैनिक हानि और 6% अधिकतम हानि, इक्विटी आधारित; चैलेंज में 1:50 लीवरेज और Funded होने के बाद 1:40।",
        id: "Target 10% dengan kerugian harian 3% dan kerugian maksimum 6%, berbasis equity, leverage 1:50 pada challenge dan 1:40 setelah funded.",
        fr: "Objectif de 10% avec une perte quotidienne de 3% et une perte maximale de 6%, basées sur l'equity, levier de 1:50 pendant le challenge et de 1:40 une fois financé.",
        de: "10 % Ziel bei 3 % Tagesverlust und 6 % Maximalverlust, auf Equity-Basis, Hebel 1:50 in der Challenge und 1:40 nach der Finanzierung.",
        it: "Obiettivo del 10% con perdita giornaliera del 3% e perdita massima del 6%, calcolate sull'equity, leva 1:50 nella sfida e 1:40 una volta finanziato.",
        pl: "Cel 10% przy dziennej stracie 3% i maksymalnej stracie 6%, w oparciu o equity, dźwignia 1:50 w challenge i 1:40 po uzyskaniu finansowania.",
        tr: "%10 hedef, %3 günlük kayıp ve %6 maksimum kayıp, equity bazlı; challenge'da 1:50, funded hesapta 1:40 kaldıraç.",
        th: "เป้าหมาย 10% โดยมีขาดทุนรายวัน 3% และขาดทุนสูงสุด 6% อิงตาม Equity เลเวอเรจ 1:50 ในชาเลนจ์ และ 1:40 เมื่อได้รับ Funded",
        fil: "10% na target na may 3% na araw-araw na lugi at 6% na pinakamataas na lugi, batay sa equity, 1:50 na leverage sa challenge at 1:40 kapag funded na.",
        en: '10% target with a 3% daily loss and 6% max loss, equity-based, 1:50 leverage in the challenge and 1:40 once funded.',
      }[currentLang] || '10% target with a 3% daily loss and 6% max loss, equity-based, 1:50 leverage in the challenge and 1:40 once funded.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút lần đầu sau 5 ngày',
        zh: '5天后首次提现',
        ja: '5日後に初回出金',
        es: "Primer retiro tras 5 días",
        pt: "Primeiro saque após 5 dias",
        hi: "5 दिन बाद पहली निकासी",
        id: "Penarikan pertama setelah 5 hari",
        fr: "Premier retrait après 5 jours",
        de: "Erste Auszahlung nach 5 Tagen",
        it: "Primo prelievo dopo 5 giorni",
        pl: "Pierwsza wypłata po 5 dniach",
        tr: "5 gün sonra ilk çekim",
        th: "ถอนครั้งแรกหลังจาก 5 วัน",
        fil: "Unang withdrawal pagkatapos ng 5 araw",
        en: 'First withdrawal after 5 days',
      }[currentLang] || 'First withdrawal after 5 days',
    },
    {
      id: 'rev-3',
      name: 'Instant Funding',
      flag: '',
      country: 'Funded account',
      model: '$5,000 to $100,000',
      rating: 0,
      title: {
        vi: 'Tài Khoản Funded Ngay',
        zh: '从一开始即为资金账户',
        ja: '最初からファンデッド',
        es: "Funded desde el inicio",
        pt: "Funded desde o início",
        hi: "शुरुआत से ही Funded",
        id: "Funded Sejak Awal",
        fr: "Funded dès le départ",
        de: "Von Anfang an Funded",
        it: "Funded fin dall'inizio",
        pl: "Funded od początku",
        tr: "Baştan Funded",
        th: "Funded ตั้งแต่เริ่มต้น",
        fil: "Funded Mula sa Simula",
        en: 'Funded From The Start',
      }[currentLang] || 'Funded From The Start',
      comment: {
        vi: 'Không có giai đoạn đánh giá, lỗ ngày 3% và lỗ tối đa 5% trailing, tối thiểu 5 ngày giao dịch. Giao dịch tin tức bị cấm trên tài khoản Instant.',
        zh: '无评估阶段，每日亏损3%、最大亏损5%（追踪式），最少交易5天。Instant账户禁止新闻交易。',
        ja: '評価フェーズなし。日次損失3%、最大損失5%（トレーリング）、最低取引日数5日。Instantアカウントではニューストレードは禁止です。',
        es: "Sin fase de evaluación, pérdida diaria del 3 % y pérdida máxima móvil del 5 %, mínimo de 5 días de trading. El trading de noticias está prohibido en las cuentas Instant.",
        pt: "Sem fase de avaliação, perda diária de 3% e perda máxima móvel de 5%, mínimo de 5 dias de trading. Operar notícias é proibido nas contas Instant.",
        hi: "कोई मूल्यांकन चरण नहीं, 3% दैनिक हानि और 5% ट्रेलिंग अधिकतम हानि, न्यूनतम 5 ट्रेडिंग दिन। Instant अकाउंट पर न्यूज़ ट्रेडिंग प्रतिबंधित है।",
        id: "Tanpa fase evaluasi, kerugian harian 3% dan kerugian maksimum trailing 5%, minimal 5 hari trading. News trading dilarang pada akun Instant.",
        fr: "Sans phase d'évaluation, perte quotidienne de 3% et perte maximale glissante de 5%, minimum de 5 jours de trading. Le trading sur les actualités est interdit sur les comptes Instant.",
        de: "Keine Evaluierungsphase, 3 % Tagesverlust und 5 % Trailing-Maximalverlust, mindestens 5 Handelstage. News-Trading ist auf Instant-Konten verboten.",
        it: "Nessuna fase di valutazione, perdita giornaliera del 3% e perdita massima trailing del 5%, minimo 5 giorni di trading. Il news trading è vietato sui conti Instant.",
        pl: "Bez fazy oceny, dzienna strata 3% i maksymalna strata trailing 5%, minimum 5 dni handlowych. Handel w czasie publikacji wiadomości jest zabroniony na kontach Instant.",
        tr: "Değerlendirme aşaması yok, %3 günlük kayıp ve %5 trailing maksimum kayıp, en az 5 işlem günü. Instant hesaplarda haber işlemi (news trading) yasaktır.",
        th: "ไม่มีช่วงประเมิน ขาดทุนรายวัน 3% และขาดทุนสูงสุดแบบ Trailing 5% ขั้นต่ำ 5 วันเทรด ห้ามเทรดตามข่าวในบัญชี Instant",
        fil: "Walang yugto ng evaluation, 3% na araw-araw na lugi at 5% na trailing na pinakamataas na lugi, hindi bababa sa 5 araw ng trading. Ipinagbabawal ang news trading sa mga Instant account.",
        en: 'No evaluation phase, 3% daily loss and 5% trailing max loss, minimum 5 trading days. News trading is forbidden on Instant accounts.',
      }[currentLang] || 'No evaluation phase, 3% daily loss and 5% trailing max loss, minimum 5 trading days. News trading is forbidden on Instant accounts.',
      fundedCapital: '$100,000',
      payoutAmount: getHighShareWord(currentLang),
      payoutSpeed: {
        vi: 'Rút sau 14 ngày',
        zh: '14天后提现',
        ja: '14日後に出金',
        es: "Retiro tras 14 días",
        pt: "Saque após 14 dias",
        hi: "14 दिन बाद निकासी",
        id: "Penarikan setelah 14 hari",
        fr: "Retrait après 14 jours",
        de: "Auszahlung nach 14 Tagen",
        it: "Prelievo dopo 14 giorni",
        pl: "Wypłata po 14 dniach",
        tr: "14 gün sonra çekim",
        th: "ถอนได้หลังจาก 14 วัน",
        fil: "Mag-withdraw pagkatapos ng 14 na araw",
        en: 'Withdraw after 14 days',
      }[currentLang] || 'Withdraw after 14 days',
    },
  ];

  return (
    <section className="py-20 sm:py-24 relative app-bg" id="reviews">
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">

        {}
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

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={rev.id}
              className={`p-7 sm:p-8 rounded-3xl border app-border app-surface flex flex-col justify-between hover:border-[#f6bf4a]/50 dark:hover:border-[#ffc501]/50 transition-all duration-300 shadow-xl hover-float reveal-up stagger-${idx + 1}`}
            >
              <div>
                {}
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

                {}
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

              {}
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
