'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { ChallengePricing } from '@/components/eracex/ChallengePricing';
import { FaqSection } from '@/components/eracex/FaqSection';
import { CheckCircle2, Shield, Zap, Layers, BadgeDollarSign } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

export default function PricingPage() {
  const { t, currentLang } = useLanguage();

  const homeLabel = t.nav.home;
  const pricingLabel = t.nav.pricing;

  const d = {
    vi: {
      badgeText: 'BẢNG GIÁ & GÓI VỐN THI ĐẤU',
      title: 'Bảng Giá Thử Thách Cấp Vốn',
      subtitle: 'Lựa chọn quy mô tài khoản từ $5,000 đến $100,000. Phí chương trình không được hoàn lại sau khi cấp quyền truy cập.',
      card1Title: 'Phí Không Hoàn Lại',
      card1Desc: 'Phí chương trình không được hoàn lại sau khi quyền truy cập tài khoản đã được cấp. Vui lòng xem kỹ quy tắc trước khi thanh toán.',
      card2Title: 'Quy Tắc Rõ Ràng',
      card2Desc: 'Số ngày giao dịch tối thiểu, mục tiêu lợi nhuận và giới hạn lỗ của từng chương trình được hiển thị trước khi bạn thanh toán.',
      card3Title: 'Tài Khoản Chương Trình',
      card3Desc: 'Mọi tài khoản đều là tài khoản giao dịch. Đòn bẩy 1:100 (Two-Step), 1:50 (One-Step) hoặc 1:40 (Instant) tùy chương trình.',
      f1Text: 'Quy Tắc Rõ Ràng',
      f2Text: 'Chia Sẻ Lợi Nhuận Cao',
      f3Text: 'Đòn Bẩy Theo Chương Trình',
      primaryCta: 'Xem Chi Tiết Các Gói',
      secondaryCta: 'Quy Tắc Đánh Giá',
      float1Tag: 'PHÍ',
      float2Tag: 'QUY TẮC',
    },
    zh: {
      badgeText: '挑战定价与档位',
      title: '自营交易评估定价',
      subtitle: '请选择您偏好的账户规模，从$5,000到$100,000。一旦开通账户访问权限，计划费用不予退还。',
      card1Title: '不可退还的费用',
      card1Desc: '账户访问权限开通后，计划费用不予退还。付款前请仔细阅读规则。',
      card2Title: '规则清晰',
      card2Desc: '每个计划的最少交易天数、盈利目标和亏损限额都会在付款前展示。',
      card3Title: '模拟账户',
      card3Desc: '所有账户均为模拟交易账户。杠杆根据计划为1:100（Two-Step）、1:50（One-Step）或1:40（Instant）。',
      f1Text: '规则清晰',
      f2Text: '高比例利润分成',
      f3Text: '按计划设定的杠杆',
      primaryCta: '查看套餐',
      secondaryCta: '交易规则',
      float1Tag: '费用',
      float2Tag: '规则',
    },
    ja: {
      badgeText: 'チャレンジ料金とプラン',
      title: 'プロップトレーディング評価の料金',
      subtitle: 'お好みのアカウントサイズを$5,000から$100,000までお選びください。プログラム料金は、アクセス付与後は返金されません。',
      card1Title: '返金不可の料金',
      card1Desc: 'アカウントへのアクセスが付与された後は、プログラム料金は返金されません。お支払い前にルールをよくご確認ください。',
      card2Title: '明確なルール',
      card2Desc: '各プログラムの最低取引日数、利益目標、損失上限は、お支払い前に表示されます。',
      card3Title: 'シミュレーションアカウント',
      card3Desc: 'すべてのアカウントはシミュレーション取引アカウントです。レバレッジはプログラムにより1:100（Two-Step）、1:50（One-Step）、1:40（Instant）です。',
      f1Text: '明確なルール',
      f2Text: '高い利益分配',
      f3Text: 'プログラム別レバレッジ',
      primaryCta: 'パッケージを見る',
      secondaryCta: '取引ルール',
      float1Tag: '料金',
      float2Tag: 'ルール',
    },
    en: {
      badgeText: 'CHALLENGE PRICING & TIERS',
      title: 'Prop Trading Evaluation Pricing',
      subtitle: 'Select your preferred account size from $5,000 up to $100,000. Program fees are non-refundable once access is granted.',
      card1Title: 'Non-Refundable Fees',
      card1Desc: 'Program fees are non-refundable once account access has been granted. Please review the rules carefully before you pay.',
      card2Title: 'Clear Rules',
      card2Desc: 'Minimum trading days, profit targets and loss limits for each program are shown before you pay.',
      card3Title: 'Program Accounts',
      card3Desc: 'All accounts follow the program rules. Leverage is 1:100 (Two-Step), 1:50 (One-Step) or 1:40 (Instant) depending on the program.',
      f1Text: 'Clear Rules',
      f2Text: 'High Profit Share',
      f3Text: 'Program-Based Leverage',
      primaryCta: 'Explore Packages',
      secondaryCta: 'Trading Rules',
      float1Tag: 'FEES',
      float2Tag: 'RULES',
    },
    es: {
          "badgeText": "PRECIOS Y NIVELES DE EVALUACIÓN",
          "title": "Precios de las Evaluaciones de Prop Trading",
          "subtitle": "Elige el tamaño de cuenta que prefieras, desde $5,000 hasta $100,000. Las tarifas de los programas no son reembolsables una vez concedido el acceso.",
          "card1Title": "Tarifas No Reembolsables",
          "card1Desc": "Las tarifas de los programas no son reembolsables una vez concedido el acceso a la cuenta. Revisa las reglas con atención antes de pagar.",
          "card2Title": "Reglas Claras",
          "card2Desc": "Los días mínimos de trading, los objetivos de beneficio y los límites de pérdida de cada programa se muestran antes de pagar.",
          "card3Title": "Cuentas Simuladas",
          "card3Desc": "Todas las cuentas son cuentas de trading simulado. El apalancamiento es 1:100 (Two-Step), 1:50 (One-Step) o 1:40 (Instant) según el programa.",
          "f1Text": "Reglas Claras",
          "f2Text": "Reparto de Ganancias Alto",
          "f3Text": "Apalancamiento Según el Programa",
          "primaryCta": "Ver Paquetes",
          "secondaryCta": "Reglas de Trading",
          "float1Tag": "TARIFAS",
          "float2Tag": "REGLAS"
    },
    pt: {
          "badgeText": "PREÇOS E NÍVEIS DE AVALIAÇÃO",
          "title": "Preços das Avaliações de Prop Trading",
          "subtitle": "Escolha o tamanho de conta que preferir, de $5,000 até $100,000. As taxas dos programas não são reembolsáveis depois que o acesso é concedido.",
          "card1Title": "Taxas Não Reembolsáveis",
          "card1Desc": "As taxas dos programas não são reembolsáveis depois que o acesso à conta é concedido. Revise as regras com atenção antes de pagar.",
          "card2Title": "Regras Claras",
          "card2Desc": "Os dias mínimos de trading, as metas de lucro e os limites de perda de cada programa são mostrados antes de você pagar.",
          "card3Title": "Contas Simuladas",
          "card3Desc": "Todas as contas são contas de trading simulado. A alavancagem é 1:100 (Two-Step), 1:50 (One-Step) ou 1:40 (Instant), conforme o programa.",
          "f1Text": "Regras Claras",
          "f2Text": "Divisão de Lucros Alta",
          "f3Text": "Alavancagem Conforme o Programa",
          "primaryCta": "Ver Pacotes",
          "secondaryCta": "Regras de Trading",
          "float1Tag": "TAXAS",
          "float2Tag": "REGRAS"
    },
    fr: {
          "badgeText": "TARIFS ET NIVEAUX DES ÉVALUATIONS",
          "title": "Tarifs des évaluations de prop trading",
          "subtitle": "Choisissez la taille de compte souhaitée, de 5 000 $ à 100 000 $. Les frais des programmes ne sont pas remboursables une fois l'accès accordé.",
          "card1Title": "Frais non remboursables",
          "card1Desc": "Les frais des programmes ne sont pas remboursables une fois l'accès au compte accordé. Veuillez lire attentivement les règles avant de payer.",
          "card2Title": "Règles claires",
          "card2Desc": "Les jours de trading minimum, les objectifs de profit et les limites de perte de chaque programme sont affichés avant le paiement.",
          "card3Title": "Comptes simulés",
          "card3Desc": "Tous les comptes sont des comptes de trading simulé. L'effet de levier est de 1:100 (Two-Step), 1:50 (One-Step) ou 1:40 (Instant) selon le programme.",
          "f1Text": "Règles claires",
          "f2Text": "Partage des profits élevé",
          "f3Text": "Effet de levier selon le programme",
          "primaryCta": "Voir les packs",
          "secondaryCta": "Règles de trading",
          "float1Tag": "FRAIS",
          "float2Tag": "RÈGLES"
    },
    de: {
          "badgeText": "PREISE & STUFEN DER EVALUIERUNG",
          "title": "Preise der Prop-Trading-Evaluierung",
          "subtitle": "Wählen Sie Ihre bevorzugte Kontogröße von $5,000 bis $100,000. Programmgebühren sind nach Gewährung des Zugangs nicht erstattungsfähig.",
          "card1Title": "Nicht erstattungsfähige Gebühren",
          "card1Desc": "Programmgebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig. Bitte prüfen Sie die Regeln sorgfältig, bevor Sie zahlen.",
          "card2Title": "Klare Regeln",
          "card2Desc": "Mindesthandelstage, Gewinnziele und Verlustlimits jedes Programms werden vor der Zahlung angezeigt.",
          "card3Title": "Simulierte Konten",
          "card3Desc": "Alle Konten sind simulierte Handelskonten. Die Hebelwirkung beträgt je nach Programm 1:100 (Two-Step), 1:50 (One-Step) oder 1:40 (Instant).",
          "f1Text": "Klare Regeln",
          "f2Text": "Hohe Gewinnaufteilung",
          "f3Text": "Programmabhängiger Hebel",
          "primaryCta": "Pakete ansehen",
          "secondaryCta": "Handelsregeln",
          "float1Tag": "GEBÜHREN",
          "float2Tag": "REGELN"
    },
    it: {
          "badgeText": "PREZZI E LIVELLI DELLE VALUTAZIONI",
          "title": "Prezzi delle valutazioni di prop trading",
          "subtitle": "Scegli la dimensione del conto che preferisci, da $5,000 fino a $100,000. Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso.",
          "card1Title": "Commissioni non rimborsabili",
          "card1Desc": "Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso al conto. Leggi attentamente le regole prima di pagare.",
          "card2Title": "Regole chiare",
          "card2Desc": "I giorni minimi di trading, gli obiettivi di profitto e i limiti di perdita di ogni programma sono mostrati prima del pagamento.",
          "card3Title": "Conti",
          "card3Desc": "Tutti i conti seguono le regole del programma. La leva è 1:100 (Two-Step), 1:50 (One-Step) o 1:40 (Instant) a seconda del programma.",
          "f1Text": "Regole chiare",
          "f2Text": "Ripartizione degli utili alta",
          "f3Text": "Leva in base al programma",
          "primaryCta": "Esplora i pacchetti",
          "secondaryCta": "Regole di trading",
          "float1Tag": "COMMISSIONI",
          "float2Tag": "REGOLE"
    },
    pl: {
          "badgeText": "CENNIK I POZIOMY OCEN",
          "title": "Cennik ocen prop tradingu",
          "subtitle": "Wybierz preferowaną wielkość konta od $5,000 do $100,000. Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu.",
          "card1Title": "Opłaty bez zwrotu",
          "card1Desc": "Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu do konta. Przed zapłatą dokładnie zapoznaj się z zasadami.",
          "card2Title": "Jasne zasady",
          "card2Desc": "Minimalna liczba dni handlowych, cele zysku i limity strat dla każdego programu są widoczne przed zapłatą.",
          "card3Title": "Konta symulowane",
          "card3Desc": "Wszystkie konta są symulowanymi kontami handlowymi. Dźwignia wynosi 1:100 (Two-Step), 1:50 (One-Step) lub 1:40 (Instant), zależnie od programu.",
          "f1Text": "Jasne zasady",
          "f2Text": "Wysoki podział zysków",
          "f3Text": "Dźwignia zależna od programu",
          "primaryCta": "Zobacz pakiety",
          "secondaryCta": "Zasady tradingu",
          "float1Tag": "OPŁATY",
          "float2Tag": "ZASADY"
    },
    tr: {
          "badgeText": "DEĞERLENDİRME FİYATLARI VE KADEMELERİ",
          "title": "Prop Trading Değerlendirme Fiyatları",
          "subtitle": "Tercih ettiğiniz hesap boyutunu $5,000 ile $100,000 arasında seçin. Program ücretleri, erişim verildikten sonra iade edilmez.",
          "card1Title": "İade Edilmeyen Ücretler",
          "card1Desc": "Hesap erişimi verildikten sonra program ücretleri iade edilmez. Ödeme yapmadan önce kuralları dikkatlice inceleyin.",
          "card2Title": "Net Kurallar",
          "card2Desc": "Her programın minimum işlem günleri, kâr hedefleri ve kayıp limitleri ödemeden önce gösterilir.",
          "card3Title": "Simüle Hesaplar",
          "card3Desc": "Tüm hesaplar simüle işlem hesaplarıdır. Kaldıraç, programa göre 1:100 (Two-Step), 1:50 (One-Step) veya 1:40 (Instant)'tir.",
          "f1Text": "Net Kurallar",
          "f2Text": "Yüksek Kâr Paylaşımı",
          "f3Text": "Programa Göre Kaldıraç",
          "primaryCta": "Paketleri Keşfet",
          "secondaryCta": "İşlem Kuralları",
          "float1Tag": "ÜCRETLER",
          "float2Tag": "KURALLAR"
    },
    id: {
          "badgeText": "HARGA & TIER EVALUASI",
          "title": "Harga Evaluasi Prop Trading",
          "subtitle": "Pilih ukuran akun yang Anda inginkan, dari $5,000 hingga $100,000. Biaya program tidak dapat dikembalikan setelah akses diberikan.",
          "card1Title": "Biaya Tidak Dapat Dikembalikan",
          "card1Desc": "Biaya program tidak dapat dikembalikan setelah akses akun diberikan. Harap tinjau aturan dengan saksama sebelum membayar.",
          "card2Title": "Aturan yang Jelas",
          "card2Desc": "Hari trading minimum, target profit, dan batas kerugian untuk setiap program ditampilkan sebelum Anda membayar.",
          "card3Title": "Akun Simulasi",
          "card3Desc": "Semua akun adalah akun trading simulasi. Leverage adalah 1:100 (Two-Step), 1:50 (One-Step), atau 1:40 (Instant) tergantung programnya.",
          "f1Text": "Aturan yang Jelas",
          "f2Text": "Pembagian Profit Tinggi",
          "f3Text": "Leverage Sesuai Program",
          "primaryCta": "Lihat Paket",
          "secondaryCta": "Aturan Trading",
          "float1Tag": "BIAYA",
          "float2Tag": "ATURAN"
    },
    th: {
          "badgeText": "ราคาและระดับของโปรแกรมประเมิน",
          "title": "ราคาโปรแกรมประเมิน Prop Trading",
          "subtitle": "เลือกขนาดบัญชีที่ต้องการตั้งแต่ $5,000 ถึง $100,000 ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงแล้ว",
          "card1Title": "ค่าธรรมเนียมไม่สามารถขอคืนได้",
          "card1Desc": "ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว โปรดอ่านกฎอย่างละเอียดก่อนชำระเงิน",
          "card2Title": "กฎที่ชัดเจน",
          "card2Desc": "จำนวนวันเทรดขั้นต่ำ เป้าหมายกำไร และขีดจำกัดการขาดทุนของแต่ละโปรแกรมจะแสดงให้เห็นก่อนชำระเงิน",
          "card3Title": "บัญชีจำลอง",
          "card3Desc": "บัญชีทั้งหมดเป็นบัญชีเทรดจำลอง เลเวอเรจคือ 1:100 (Two-Step), 1:50 (One-Step) หรือ 1:40 (Instant) ขึ้นอยู่กับโปรแกรม",
          "f1Text": "กฎที่ชัดเจน",
          "f2Text": "แบ่งกำไรสูง",
          "f3Text": "เลเวอเรจตามแต่ละโปรแกรม",
          "primaryCta": "ดูแพ็กเกจ",
          "secondaryCta": "กฎการเทรด",
          "float1Tag": "ค่าธรรมเนียม",
          "float2Tag": "กฎ"
    },
    fil: {
          "badgeText": "PRESYO AT MGA TIER NG EVALUATION",
          "title": "Presyo ng Prop Trading Evaluation",
          "subtitle": "Piliin ang gusto mong laki ng account mula $5,000 hanggang $100,000. Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access.",
          "card1Title": "Hindi Refundable na mga Bayarin",
          "card1Desc": "Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access sa account. Pakisuri nang mabuti ang mga patakaran bago magbayad.",
          "card2Title": "Malinaw na mga Patakaran",
          "card2Desc": "Ipinapakita bago ka magbayad ang minimum na araw ng trading, profit target, at mga limitasyon sa pagkalugi ng bawat programa.",
          "card3Title": "Mga Program Account",
          "card3Desc": "Lahat ng account ay sumusunod sa mga patakaran ng programa. Ang leverage ay 1:100 (Two-Step), 1:50 (One-Step) o 1:40 (Instant) depende sa programa.",
          "f1Text": "Malinaw na mga Patakaran",
          "f2Text": "Mataas na Hatian ng Kita",
          "f3Text": "Leverage Ayon sa Programa",
          "primaryCta": "Tingnan ang mga Package",
          "secondaryCta": "Mga Patakaran sa Trading",
          "float1Tag": "MGA BAYARIN",
          "float2Tag": "MGA PATAKARAN"
    },
    hi: {
          "badgeText": "चैलेंज मूल्य और टियर",
          "title": "प्रॉप ट्रेडिंग मूल्यांकन की कीमतें",
          "subtitle": "$5,000 से $100,000 तक अपनी पसंद का खाता आकार चुनें। एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता।",
          "card1Title": "वापसी-रहित शुल्क",
          "card1Desc": "खाते का एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता। भुगतान से पहले नियमों को ध्यान से पढ़ें।",
          "card2Title": "स्पष्ट नियम",
          "card2Desc": "हर प्रोग्राम के न्यूनतम ट्रेडिंग दिन, लाभ लक्ष्य और हानि सीमाएँ भुगतान से पहले दिखाई जाती हैं।",
          "card3Title": "सिम्युलेटेड खाते",
          "card3Desc": "सभी खाते सिम्युलेटेड ट्रेडिंग खाते हैं। प्रोग्राम के अनुसार लीवरेज 1:100 (Two-Step), 1:50 (One-Step) या 1:40 (Instant) है।",
          "f1Text": "स्पष्ट नियम",
          "f2Text": "उच्च लाभ विभाजन",
          "f3Text": "प्रोग्राम के अनुसार लीवरेज",
          "primaryCta": "पैकेज देखें",
          "secondaryCta": "ट्रेडिंग नियम",
          "float1Tag": "शुल्क",
          "float2Tag": "नियम"
    },
    ko: {
          "badgeText": "가격 정책 및 챌린지 프로그램",
          "title": "프랍 챌린지 응시료 안내",
          "subtitle": "$5,000부터 $200,000까지 계정 규모를 자유롭게 선택하세요. 첫 번째 수익 출금 시 응시료 100%가 전액 환불됩니다.",
          "card1Title": "응시료 100% 전액 환불",
          "card1Desc": "초기 지불한 응시료는 소멸되지 않습니다. 챌린지 통과 후 첫 수익 출금 시 100% 전액이 계좌로 즉시 환급됩니다.",
          "card2Title": "의무 매매 기간 무제한",
          "card2Desc": "최소 매매일 0일 규정과 최대 기한 무제한을 적용합니다. 시간 압박 없이 철저한 원칙 매매가 가능합니다.",
          "card3Title": "기관용 초저지연 ECN 체결",
          "card3Desc": "모든 계정은 런던 LD4 에퀴닉스 데이터센터 서버에 직접 연결되어 0.0 핍부터 시작하는 스프레드와 1:100 레버리지를 제공합니다.",
          "f1Text": "최소 매매일 0일",
          "f2Text": "응시료 100% 환불",
          "f3Text": "1:100 ERACEX 레버리지",
          "primaryCta": "챌린지 플랜 살펴보기",
          "secondaryCta": "평가 규정 확인",
          "float1Tag": "전액환불",
          "float2Tag": "ECN체결"
    },
    ru: {
          "badgeText": "ЦЕНЫ И МОДЕЛИ ОЦЕНКИ",
          "title": "Стоимость торговых челленджей",
          "subtitle": "Выберите размер счета от $5 000 до $200 000. 100% вступительного взноса возвращается при первой выплате прибыли.",
          "card1Title": "100% возврат вступительного взноса",
          "card1Desc": "Взнос за участие не сгорает. После успешного прохождения челленджа и при первой выплате 100% суммы возвращается трейдеру.",
          "card2Title": "Без ограничений по времени",
          "card2Desc": "ERACEX не требует минимального количества торговых дней и не устанавливает максимальных сроков. Торгуйте спокойно.",
          "card3Title": "Сверхбыстрое ECN-исполнение",
          "card3Desc": "Прямое подключение к серверу London LD4 со спредами от 0.0 пипса и торговым плечом 1:100.",
          "f1Text": "0 мин. торговых дней",
          "f2Text": "100% возврат взноса",
          "f3Text": "Плечо 1:100 ERACEX",
          "primaryCta": "Смотреть программы",
          "secondaryCta": "Правила оценки",
          "float1Tag": "ВОЗВРАТ",
          "float2Tag": "ИСПОЛНЕНИЕ"
    },
    ar: {
          "badgeText": "الأسعار ونماذج التقييم",
          "title": "باقات وأسعار تحديات التداول",
          "subtitle": "اختر حجم الحساب من 5,000$ إلى 200,000$. استرداد كامل بنسبة 100% لرسوم الاشتراك عند أول سحب للأرباح.",
          "card1Title": "استرداد 100% من الرسوم",
          "card1Desc": "رسوم الاشتراك ليست تكلفة ضائعة. عند اجتياز التقييم وطلب أول سحب للأرباح، يتم رد المبلغ بالكامل إلى حسابك.",
          "card2Title": "بدون قيود زمنية",
          "card2Desc": "تطبق ERACEX قاعدة 0 أيام تداول كحد أدنى وبدون حد أقصى للوقت. تداول بهدوء وفق استراتيجيتك الخاصة.",
          "card3Title": "تنفيذ ECN فائق السرعة",
          "card3Desc": "ربط مباشر بمراكز بيانات LD4 في لندن بسبريد يبدأ من 0.0 نقطة ورافعة مالية تصل إلى 1:100.",
          "f1Text": "0 أيام كحد أدنى",
          "f2Text": "استرداد 100%",
          "f3Text": "رافعة 1:100 ERACEX",
          "primaryCta": "استعراض الباقات",
          "secondaryCta": "قواعد التقييم",
          "float1Tag": "استرداد الرسوم",
          "float2Tag": "سرعة التنفيذ"
    },
    nl: {
          "badgeText": "PRIJZEN & EVALUATIEMODELLEN",
          "title": "Tarieven voor Challenge Accounts",
          "subtitle": "Kies een accountgrootte van $5.000 tot $200.000. 100% van het inschrijfgeld wordt terugbetaald bij uw eerste winstuitbetaling.",
          "card1Title": "100% Restitutie van Inschrijfgeld",
          "card1Desc": "Uw inschrijfkosten gaan niet verloren. Zodra u de challenge voltooit en uw eerste uitbetaling aanvraagt, wordt 100% gerestitueerd.",
          "card2Title": "Geen Tijdslimiet",
          "card2Desc": "ERACEX hanteert 0 minimale handelsdagen en geen maximale limiet. Handel ontspannen in uw eigen tempo.",
          "card3Title": "Ultrasnelle ECN-Orderuitvoering",
          "card3Desc": "Direct verbonden met de London LD4 datacenterservers met spreads vanaf 0.0 pips en een hefboom van 1:100.",
          "f1Text": "0 Minimale Dagen",
          "f2Text": "100% Restitutie",
          "f3Text": "1:100 ERACEX Hefboom",
          "primaryCta": "Bekijk Pakketten",
          "secondaryCta": "Evaluatieregels",
          "float1Tag": "RESTITUTIE",
          "float2Tag": "UITVOERING"
    },
  }[currentLang] || {
    badgeText: 'CHALLENGE PRICING & TIERS',
    title: 'Prop Trading Evaluation Pricing',
    subtitle: 'Select your preferred account size from $5,000 up to $100,000. Program fees are non-refundable once access is granted.',
    card1Title: 'Non-Refundable Fees',
    card1Desc: 'Program fees are non-refundable once account access has been granted. Please review the rules carefully before you pay.',
    card2Title: 'Clear Rules',
    card2Desc: 'Minimum trading days, profit targets and loss limits for each program are shown before you pay.',
    card3Title: 'Program Accounts',
    card3Desc: 'All accounts follow the program rules. Leverage is 1:100 (Two-Step), 1:50 (One-Step) or 1:40 (Instant) depending on the program.',
    f1Text: 'Clear Rules',
    f2Text: 'High Profit Share',
    f3Text: 'Program-Based Leverage',
    primaryCta: 'Explore Packages',
    secondaryCta: 'Trading Rules',
    float1Tag: 'FEES',
    float2Tag: 'RULES',
  };

  return (
    <div className="pb-16 app-bg app-text">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER */}
      <PageHeroBanner
        badgeText={d.badgeText}
        badgeIcon={<BadgeDollarSign className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={d.title}
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: homeLabel, href: '/' },
          { label: pricingLabel },
        ]}
        primaryCta={{
          label: d.primaryCta,
          href: '#pricing',
          icon: <Zap className="w-5 h-5" />,
        }}
        secondaryCta={{
          label: d.secondaryCta,
          href: '/rules',
        }}
        features={[
          { icon: <CheckCircle2 className="w-4 h-4" />, text: d.f1Text },
          { icon: <Shield className="w-4 h-4" />, text: d.f2Text },
          { icon: <Layers className="w-4 h-4" />, text: d.f3Text },
        ]}
        imageSrc="/images/banner-pricing-3d.jpg"
        imageAlt="ERACEX Institutional Capital Allocation & Funding Vault"
        floatingBadge1={{
          tag: d.f2Text,
          value: '✓',
          icon: <CheckCircle2 className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.float2Tag,
          value: '1:100 / 1:50 / 1:40',
          icon: <Zap className="w-5 h-5" />,
        }}
      />

      {/* 2. CORE PRICING COMPONENT */}
      <ChallengePricing />

      {/* 2.5 REAL TRADERS WHO PASSED & 100% FEE REFUND PROOFS */}

      <ImageBand caption="simulated" variant="wide" images={[{ src: '/images/eracex-f1-banner.jpg', alt: 'ERACEX Trusted by Traders' }]} />

      {/* 3. WHY CHOOSE ERACEX PRICING HIGHLIGHTS */}
      <section className="py-16 border-t border-b app-border app-subtle w-full">
        <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl card-surface">
              <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501] mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 app-text">{d.card1Title}</h3>
              <p className="text-xs leading-relaxed app-text-secondary">
                {d.card1Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl card-surface">
              <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501] mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 app-text">{d.card2Title}</h3>
              <p className="text-xs leading-relaxed app-text-secondary">
                {d.card2Desc}
              </p>
            </div>

            <div className="p-6 rounded-2xl card-surface">
              <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501] mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 app-text">{d.card3Title}</h3>
              <p className="text-xs leading-relaxed app-text-secondary">
                {d.card3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION EMBEDDED */}
      <FaqSection />
    </div>
  );
}
