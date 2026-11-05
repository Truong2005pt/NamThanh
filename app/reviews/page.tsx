'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { getHighShareWord } from '@/lib/high-share';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { ReviewsSection } from '@/components/eracex/ReviewsSection';
import { ReviewsComplaintsFaq } from '@/components/eracex/ReviewsComplaintsFaq';
import { 
  Star, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Coins, 
  Clock, 
  ZoomIn, 
  X,
  FileCheck,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

export default function ReviewsPage() {
  const { t, currentLang } = useLanguage();
  const d = {
    vi: {
      badgeText: 'THÔNG TIN CHƯƠNG TRÌNH',
      title: <>Thông Tin Về <span className="text-[#c68a00] dark:text-[#ffc501]">Chương Trình ERACEX</span></>,
      subtitle: 'Tìm hiểu các chương trình đánh giá giao dịch của ERACEX: chia sẻ lợi nhuận cao, điều kiện rút tiền và quy tắc từng gói.',
      breadcrumbLabel: 'Thông Tin Chương Trình',
      primaryCta: 'Khám Phá Các Gói',
      secondaryCta: 'Quy Tắc Quản Trị Rủi Ro',
      f1Text: 'Quy tắc rõ ràng',
      f2Text: 'Chia sẻ lợi nhuận cao',
      f3Text: 'Rút tối thiểu 1%',
      floatTag1: 'CHIA SẺ LỢI NHUẬN',
      floatTag2: 'TÀI KHOẢN TỐI ĐA',
      trustpilotScore: 'Chia Sẻ Lợi Nhuận',
      fiveStarReviews: 'Tỷ lệ tiêu chuẩn',
      verifiedReviews: 'Quy Mô Tối Đa',
      avgSpeedVal: '5 / 14 Ngày',
      avgSpeedLabel: 'Thời Gian Chờ Rút Lần Đầu',
      feeReimbursement: 'Rút Tối Thiểu',
      refundFulfillment: 'Trên Lợi Nhuận',
      wallTitle: 'Thông Tin Chứng Nhận',
      wallDesc: 'Thông tin chứng nhận tài khoản được cung cấp theo điều kiện của chương trình.',
      zoom: 'Phóng To',
      readyLabel: 'SẴN SÀNG BẮT ĐẦU?',
      ctaTitle: 'Bắt Đầu Chương Trình Đánh Giá ERACEX',
      ctaDesc: 'Chọn chương trình Two-Step, One-Step hoặc Instant, xem kỹ quy tắc và nhớ rằng phí chương trình không được hoàn lại sau khi cấp quyền truy cập.',
      ctaBtn1: 'Đăng Ký Gói Ngay',
      ctaBtn2: 'Đọc Quy Tắc Chương Trình',
    },
    zh: {
      badgeText: '计划信息',
      title: <>关于<span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX计划</span>的信息</>,
      subtitle: '了解ERACEX模拟交易评估计划：高比例利润分成、提现条件以及每个套餐的规则。',
      breadcrumbLabel: '计划信息',
      primaryCta: '查看套餐',
      secondaryCta: '风控与交易规则',
      f1Text: '规则清晰',
      f2Text: '高比例利润分成',
      f3Text: '最低提现1%',
      floatTag1: '利润分成',
      floatTag2: '最大账户',
      trustpilotScore: '利润分成',
      fiveStarReviews: '标准比例',
      verifiedReviews: '最大账户规模',
      avgSpeedVal: '5 / 14天',
      avgSpeedLabel: '首次提现等待期',
      feeReimbursement: '最低提现',
      refundFulfillment: '占利润',
      wallTitle: '证书信息',
      wallDesc: '模拟账户证书信息按各计划的条件提供。',
      zoom: '放大证书',
      readyLabel: '准备好开始了吗？',
      ctaTitle: '开始ERACEX评估计划',
      ctaDesc: '选择Two-Step、One-Step或Instant，仔细阅读规则，并请记住：一旦开通访问权限，计划费用不予退还。',
      ctaBtn1: '立即开始',
      ctaBtn2: '阅读计划规则',
    },
    ja: {
      badgeText: 'プログラム情報',
      title: <><span className="text-[#c68a00] dark:text-[#ffc501]">ERACEXプログラム</span>に関する情報</>,
      subtitle: 'ERACEXのシミュレーション取引評価プログラムについてご紹介します：高い利益分配、出金条件、各パッケージのルール。',
      breadcrumbLabel: 'プログラム情報',
      primaryCta: 'パッケージを見る',
      secondaryCta: 'リスク管理ルール',
      f1Text: '明確なルール',
      f2Text: '高い利益分配',
      f3Text: '最低出金額1%',
      floatTag1: '利益分配',
      floatTag2: '最大アカウント',
      trustpilotScore: '利益分配',
      fiveStarReviews: '標準比率',
      verifiedReviews: '最大アカウントサイズ',
      avgSpeedVal: '5 / 14日',
      avgSpeedLabel: '初回出金までの待機期間',
      feeReimbursement: '最低出金額',
      refundFulfillment: '利益の',
      wallTitle: '証明書情報',
      wallDesc: 'シミュレーションアカウントの証明書情報は、各プログラムの条件に基づいて提供されます。',
      zoom: '拡大表示',
      readyLabel: '始める準備はできましたか？',
      ctaTitle: 'ERACEX評価プログラムを始めましょう',
      ctaDesc: 'Two-Step、One-Step、Instantから選び、ルールをよく確認してください。アクセス付与後はプログラム料金が返金されない点にご注意ください。',
      ctaBtn1: '今すぐ始める',
      ctaBtn2: 'プログラムルールを読む',
    },
    en: {
      badgeText: 'PROGRAM INFORMATION',
      title: <>Information About <span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX Programs</span></>,
      subtitle: 'Learn about ERACEX trading evaluation programs: a high profit share, withdrawal conditions and the rules of every package.',
      breadcrumbLabel: 'Program Information',
      primaryCta: 'Explore Packages',
      secondaryCta: 'Trading Rules',
      f1Text: 'Clear rules',
      f2Text: 'High profit share',
      f3Text: '1% minimum withdrawal',
      floatTag1: 'PROFIT SPLIT',
      floatTag2: 'MAX ACCOUNT',
      trustpilotScore: 'Profit Split',
      fiveStarReviews: 'Standard ratio',
      verifiedReviews: 'Max Account Size',
      avgSpeedVal: '5 / 14 Days',
      avgSpeedLabel: 'First Withdrawal Wait',
      feeReimbursement: 'Minimum Withdrawal',
      refundFulfillment: 'Of Profit',
      wallTitle: 'Certificate Information',
      wallDesc: 'Account certificate information is provided under the conditions of each program.',
      zoom: 'Zoom Certificate',
      readyLabel: 'READY TO START?',
      ctaTitle: 'Start an ERACEX Evaluation Program',
      ctaDesc: 'Choose Two-Step, One-Step or Instant, review the rules carefully, and remember that program fees are non-refundable once access is granted.',
      ctaBtn1: 'Get Started Now',
      ctaBtn2: 'Read Program Rules',
    },
es: {
      badgeText: 'INFORMACIÓN DEL PROGRAMA',
      title: <>Información Sobre los <span className="text-[#c68a00] dark:text-[#ffc501]">Programas de ERACEX</span></>,
      subtitle: 'Conoce los programas de evaluación de trading simulado de ERACEX: reparto de beneficios alto, condiciones de retiro y las reglas de cada paquete.',
      breadcrumbLabel: 'Información del Programa',
      primaryCta: 'Ver Paquetes',
      secondaryCta: 'Reglas de Trading',
      f1Text: 'Reglas claras',
      f2Text: 'Reparto de beneficios alto',
      f3Text: 'Retiro mínimo del 1%',
      floatTag1: 'REPARTO DE BENEFICIOS',
      floatTag2: 'CUENTA MÁX.',
      trustpilotScore: 'Reparto de Beneficios',
      fiveStarReviews: 'Proporción estándar',
      verifiedReviews: 'Tamaño Máx. de Cuenta',
      avgSpeedVal: '5 / 14 Días',
      avgSpeedLabel: 'Espera para el Primer Retiro',
      feeReimbursement: 'Retiro Mínimo',
      refundFulfillment: 'Del Beneficio',
      wallTitle: 'Información de Certificados',
      wallDesc: 'La información de los certificados de cuentas simuladas se ofrece según las condiciones de cada programa.',
      zoom: 'Ampliar Certificado',
      readyLabel: '¿LISTO PARA EMPEZAR?',
      ctaTitle: 'Empieza un Programa de Evaluación de ERACEX',
      ctaDesc: 'Elige Two-Step, One-Step o Instant, revisa las reglas con atención y recuerda que las tarifas de los programas no son reembolsables una vez concedido el acceso.',
      ctaBtn1: 'Empezar Ahora',
      ctaBtn2: 'Leer las Reglas del Programa',
    },
    pt: {
      badgeText: 'INFORMAÇÕES DO PROGRAMA',
      title: <>Informações Sobre os <span className="text-[#c68a00] dark:text-[#ffc501]">Programas da ERACEX</span></>,
      subtitle: 'Conheça os programas de avaliação de trading simulado da ERACEX: divisão de lucros alta, condições de saque e as regras de cada pacote.',
      breadcrumbLabel: 'Informações do Programa',
      primaryCta: 'Ver Pacotes',
      secondaryCta: 'Regras de Trading',
      f1Text: 'Regras claras',
      f2Text: 'Divisão de lucros alta',
      f3Text: 'Saque mínimo de 1%',
      floatTag1: 'DIVISÃO DE LUCROS',
      floatTag2: 'CONTA MÁX.',
      trustpilotScore: 'Divisão de Lucros',
      fiveStarReviews: 'Proporção padrão',
      verifiedReviews: 'Tamanho Máx. de Conta',
      avgSpeedVal: '5 / 14 Dias',
      avgSpeedLabel: 'Espera para o Primeiro Saque',
      feeReimbursement: 'Saque Mínimo',
      refundFulfillment: 'Do Lucro',
      wallTitle: 'Informações de Certificados',
      wallDesc: 'As informações dos certificados de contas simuladas são fornecidas conforme as condições de cada programa.',
      zoom: 'Ampliar Certificado',
      readyLabel: 'PRONTO PARA COMEÇAR?',
      ctaTitle: 'Comece um Programa de Avaliação da ERACEX',
      ctaDesc: 'Escolha Two-Step, One-Step ou Instant, revise as regras com atenção e lembre-se de que as taxas dos programas não são reembolsáveis depois que o acesso é concedido.',
      ctaBtn1: 'Começar Agora',
      ctaBtn2: 'Ler as Regras do Programa',
    },
    fr: {
      badgeText: 'INFORMATIONS SUR LE PROGRAMME',
      title: <>Informations sur les <span className="text-[#c68a00] dark:text-[#ffc501]">programmes ERACEX</span></>,
      subtitle: 'Découvrez les programmes d\'évaluation de trading simulé d\'ERACEX : partage des profits élevé, conditions de retrait et règles de chaque pack.',
      breadcrumbLabel: 'Informations sur le programme',
      primaryCta: 'Voir les packs',
      secondaryCta: 'Règles de Trading',
      f1Text: 'Règles claires',
      f2Text: 'Partage des profits élevé',
      f3Text: 'Retrait minimum de 1 %',
      floatTag1: 'PARTAGE DES PROFITS',
      floatTag2: 'COMPTE MAX.',
      trustpilotScore: 'Partage des profits',
      fiveStarReviews: 'Ratio standard',
      verifiedReviews: 'Taille max. du compte',
      avgSpeedVal: '5 / 14 jours',
      avgSpeedLabel: 'Délai avant le premier retrait',
      feeReimbursement: 'Retrait minimum',
      refundFulfillment: 'Du profit',
      wallTitle: 'Informations sur les certificats',
      wallDesc: 'Les informations sur les certificats de comptes simulés sont fournies selon les conditions de chaque programme.',
      zoom: 'Agrandir le Certificat',
      readyLabel: 'PRÊT À COMMENCER ?',
      ctaTitle: 'Démarrez un programme d\'évaluation ERACEX',
      ctaDesc: 'Choisissez Two-Step, One-Step ou Instant, lisez attentivement les règles et rappelez-vous que les frais des programmes ne sont pas remboursables une fois l\'accès accordé.',
      ctaBtn1: 'Commencer maintenant',
      ctaBtn2: 'Lire les règles du programme',
    },
    de: {
      badgeText: 'PROGRAMMINFORMATIONEN',
      title: <>Informationen zu den <span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX-Programmen</span></>,
      subtitle: 'Erfahren Sie mehr über die simulierten Trading-Evaluierungsprogramme von ERACEX: Hohe Gewinnaufteilung, Auszahlungsbedingungen und die Regeln jedes Pakets.',
      breadcrumbLabel: 'Programminformationen',
      primaryCta: 'Pakete ansehen',
      secondaryCta: 'Handelsregeln',
      f1Text: 'Klare Regeln',
      f2Text: 'Hohe Gewinnaufteilung',
      f3Text: 'Mindestauszahlung 1 %',
      floatTag1: 'GEWINNAUFTEILUNG',
      floatTag2: 'MAX. KONTO',
      trustpilotScore: 'Gewinnaufteilung',
      fiveStarReviews: 'Standardverhältnis',
      verifiedReviews: 'Max. Kontogröße',
      avgSpeedVal: '5 / 14 Tage',
      avgSpeedLabel: 'Wartezeit bis zur ersten Auszahlung',
      feeReimbursement: 'Mindestauszahlung',
      refundFulfillment: 'Vom Gewinn',
      wallTitle: 'Zertifikatsinformationen',
      wallDesc: 'Informationen zu Zertifikaten simulierter Konten werden gemäß den Bedingungen des jeweiligen Programms bereitgestellt.',
      zoom: 'Zertifikat Vergrößern',
      readyLabel: 'BEREIT ZUM START?',
      ctaTitle: 'Starten Sie ein ERACEX-Evaluierungsprogramm',
      ctaDesc: 'Wählen Sie Two-Step, One-Step oder Instant, prüfen Sie die Regeln sorgfältig und denken Sie daran, dass Programmgebühren nach Gewährung des Zugangs nicht erstattungsfähig sind.',
      ctaBtn1: 'Jetzt starten',
      ctaBtn2: 'Programmregeln lesen',
    },
    it: {
      badgeText: 'INFORMAZIONI SUL PROGRAMMA',
      title: <>Informazioni sui <span className="text-[#c68a00] dark:text-[#ffc501]">programmi ERACEX</span></>,
      subtitle: 'Scopri i programmi di valutazione del trading di ERACEX: ripartizione degli utili alta, condizioni di prelievo e regole di ogni pacchetto.',
      breadcrumbLabel: 'Informazioni sul programma',
      primaryCta: 'Esplora i pacchetti',
      secondaryCta: 'Regole di Trading',
      f1Text: 'Regole chiare',
      f2Text: 'Ripartizione degli utili alta',
      f3Text: 'Prelievo minimo dell\'1%',
      floatTag1: 'RIPARTIZIONE DEGLI UTILI',
      floatTag2: 'CONTO MAX',
      trustpilotScore: 'Ripartizione degli Utili',
      fiveStarReviews: 'Rapporto standard',
      verifiedReviews: 'Dimensione max del conto',
      avgSpeedVal: '5 / 14 giorni',
      avgSpeedLabel: 'Attesa per il primo prelievo',
      feeReimbursement: 'Prelievo minimo',
      refundFulfillment: 'Dell\'utile',
      wallTitle: 'Informazioni sui certificati',
      wallDesc: 'Le informazioni sui certificati dei conti sono fornite secondo le condizioni di ciascun programma.',
      zoom: 'Ingrandisci Certificato',
      readyLabel: 'PRONTO A INIZIARE?',
      ctaTitle: 'Inizia un programma di valutazione ERACEX',
      ctaDesc: 'Scegli Two-Step, One-Step o Instant, leggi attentamente le regole e ricorda che le commissioni dei programmi non sono rimborsabili una volta concesso l\'accesso.',
      ctaBtn1: 'Inizia ora',
      ctaBtn2: 'Leggi le regole del programma',
    },
    pl: {
      badgeText: 'INFORMACJE O PROGRAMIE',
      title: <>Informacje o <span className="text-[#c68a00] dark:text-[#ffc501]">programach ERACEX</span></>,
      subtitle: 'Poznaj programy oceny symulowanego tradingu ERACEX: wysoki podział zysków, warunki wypłat i zasady każdego pakietu.',
      breadcrumbLabel: 'Informacje o programie',
      primaryCta: 'Zobacz pakiety',
      secondaryCta: 'Reguły Tradingu',
      f1Text: 'Jasne zasady',
      f2Text: 'Wysoki podział zysków',
      f3Text: 'Minimalna wypłata 1%',
      floatTag1: 'PODZIAŁ ZYSKÓW',
      floatTag2: 'MAKS. KONTO',
      trustpilotScore: 'Podział Zysków',
      fiveStarReviews: 'Standardowy stosunek',
      verifiedReviews: 'Maks. wielkość konta',
      avgSpeedVal: '5 / 14 dni',
      avgSpeedLabel: 'Okres oczekiwania na pierwszą wypłatę',
      feeReimbursement: 'Minimalna wypłata',
      refundFulfillment: 'Z zysku',
      wallTitle: 'Informacje o certyfikatach',
      wallDesc: 'Informacje o certyfikatach kont symulowanych są udostępniane zgodnie z warunkami każdego programu.',
      zoom: 'Powiększ Certyfikat',
      readyLabel: 'GOTOWY NA START?',
      ctaTitle: 'Rozpocznij program oceny ERACEX',
      ctaDesc: 'Wybierz Two-Step, One-Step lub Instant, dokładnie zapoznaj się z zasadami i pamiętaj, że opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu.',
      ctaBtn1: 'Zacznij teraz',
      ctaBtn2: 'Przeczytaj zasady programu',
    },
    tr: {
      badgeText: 'PROGRAM BİLGİLERİ',
      title: <><span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX Programları</span> Hakkında Bilgi</>,
      subtitle: 'ERACEX simüle işlem değerlendirme programlarını keşfedin: yüksek kâr paylaşımı, çekim koşulları ve her paketin kuralları.',
      breadcrumbLabel: 'Program Bilgileri',
      primaryCta: 'Paketleri Keşfet',
      secondaryCta: 'Değerlendirme Kuralları',
      f1Text: 'Net kurallar',
      f2Text: 'yüksek kâr paylaşımı',
      f3Text: '%1 minimum çekim',
      floatTag1: 'KÂR PAYLAŞIMI',
      floatTag2: 'MAKS. HESAP',
      trustpilotScore: 'Kâr Paylaşımı',
      fiveStarReviews: 'Standart oran',
      verifiedReviews: 'Maks. Hesap Boyutu',
      avgSpeedVal: '5 / 14 Gün',
      avgSpeedLabel: 'İlk Çekim Bekleme Süresi',
      feeReimbursement: 'Minimum Çekim',
      refundFulfillment: 'Kârdan',
      wallTitle: 'Sertifika Bilgileri',
      wallDesc: 'Simüle hesap sertifikası bilgileri, her programın koşulları çerçevesinde sağlanır.',
      zoom: 'Sertifikayı Büyüt',
      readyLabel: 'BAŞLAMAYA HAZIR MISINIZ?',
      ctaTitle: 'Bir ERACEX Değerlendirme Programı Başlatın',
      ctaDesc: 'Two-Step, One-Step veya Instant seçin, kuralları dikkatle inceleyin ve erişim verildikten sonra program ücretlerinin iade edilmediğini unutmayın.',
      ctaBtn1: 'Hemen Başlayın',
      ctaBtn2: 'Program Kurallarını Okuyun',
    },
    id: {
      badgeText: 'INFORMASI PROGRAM',
      title: <>Informasi Tentang <span className="text-[#c68a00] dark:text-[#ffc501]">Program ERACEX</span></>,
      subtitle: 'Pelajari program evaluasi trading simulasi ERACEX: pembagian profit tinggi, ketentuan penarikan, dan aturan setiap paket.',
      breadcrumbLabel: 'Informasi Program',
      primaryCta: 'Lihat Paket',
      secondaryCta: 'Aturan Evaluasi',
      f1Text: 'Aturan yang jelas',
      f2Text: 'Pembagian profit tinggi',
      f3Text: 'Penarikan minimum 1%',
      floatTag1: 'PEMBAGIAN PROFIT',
      floatTag2: 'AKUN MAKS.',
      trustpilotScore: 'Pembagian Profit',
      fiveStarReviews: 'Rasio standar',
      verifiedReviews: 'Ukuran Akun Maksimum',
      avgSpeedVal: '5 / 14 Hari',
      avgSpeedLabel: 'Masa Tunggu Penarikan Pertama',
      feeReimbursement: 'Penarikan Minimum',
      refundFulfillment: 'Dari Profit',
      wallTitle: 'Informasi Sertifikat',
      wallDesc: 'Informasi sertifikat akun simulasi diberikan sesuai ketentuan setiap program.',
      zoom: 'Perbesar Sertifikat',
      readyLabel: 'SIAP MEMULAI?',
      ctaTitle: 'Mulai Program Evaluasi ERACEX',
      ctaDesc: 'Pilih Two-Step, One-Step, atau Instant, tinjau aturan dengan saksama, dan ingat bahwa biaya program tidak dapat dikembalikan setelah akses diberikan.',
      ctaBtn1: 'Mulai Sekarang',
      ctaBtn2: 'Baca Aturan Program',
    },
    th: {
      badgeText: 'ข้อมูลโปรแกรม',
      title: <>ข้อมูลเกี่ยวกับ<span className="text-[#c68a00] dark:text-[#ffc501]">โปรแกรม ERACEX</span></>,
      subtitle: 'ทำความรู้จักโปรแกรมประเมินการเทรดจำลองของ ERACEX: แบ่งกำไรสูง เงื่อนไขการถอนเงิน และกฎของแต่ละแพ็กเกจ',
      breadcrumbLabel: 'ข้อมูลโปรแกรม',
      primaryCta: 'ดูแพ็กเกจ',
      secondaryCta: 'กฎการประเมิน',
      f1Text: 'กฎที่ชัดเจน',
      f2Text: 'แบ่งกำไรสูง',
      f3Text: 'ถอนขั้นต่ำ 1%',
      floatTag1: 'การแบ่งกำไร',
      floatTag2: 'บัญชีสูงสุด',
      trustpilotScore: 'การแบ่งกำไร',
      fiveStarReviews: 'สัดส่วนมาตรฐาน',
      verifiedReviews: 'ขนาดบัญชีสูงสุด',
      avgSpeedVal: '5 / 14 วัน',
      avgSpeedLabel: 'ระยะเวลารอถอนครั้งแรก',
      feeReimbursement: 'ถอนขั้นต่ำ',
      refundFulfillment: 'ของกำไร',
      wallTitle: 'ข้อมูลใบรับรอง',
      wallDesc: 'ข้อมูลใบรับรองบัญชีจำลองจะให้ตามเงื่อนไขของแต่ละโปรแกรม',
      zoom: 'ซูมใบรับรอง',
      readyLabel: 'พร้อมเริ่มหรือยัง?',
      ctaTitle: 'เริ่มโปรแกรมประเมิน ERACEX',
      ctaDesc: 'เลือก Two-Step, One-Step หรือ Instant อ่านกฎอย่างละเอียด และโปรดจำไว้ว่าค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงแล้ว',
      ctaBtn1: 'เริ่มต้นเลย',
      ctaBtn2: 'อ่านกฎของโปรแกรม',
    },
    fil: {
      badgeText: 'IMPORMASYON NG PROGRAMA',
      title: <>Impormasyon Tungkol sa mga <span className="text-[#c68a00] dark:text-[#ffc501]">Programa ng ERACEX</span></>,
      subtitle: 'Alamin ang mga trading evaluation program ng ERACEX: mataas na hatian ng kita, mga kondisyon sa pag-withdraw, at mga patakaran ng bawat package.',
      breadcrumbLabel: 'Impormasyon ng Programa',
      primaryCta: 'Tingnan ang mga Package',
      secondaryCta: 'Mga Patakaran sa Trading',
      f1Text: 'Malinaw na mga patakaran',
      f2Text: 'mataas na hatian ng kita',
      f3Text: '1% na minimum na withdrawal',
      floatTag1: 'HATIAN NG KITA',
      floatTag2: 'MAX NA ACCOUNT',
      trustpilotScore: 'Hatian ng Kita',
      fiveStarReviews: 'Karaniwang ratio',
      verifiedReviews: 'Max na Laki ng Account',
      avgSpeedVal: '5 / 14 Araw',
      avgSpeedLabel: 'Paghihintay sa Unang Withdrawal',
      feeReimbursement: 'Minimum na Withdrawal',
      refundFulfillment: 'Ng Kita',
      wallTitle: 'Impormasyon ng Certificate',
      wallDesc: 'Ibinibigay ang impormasyon ng certificate ng account ayon sa mga kondisyon ng bawat programa.',
      zoom: 'Palakihin ang Certificate',
      readyLabel: 'HANDA KA NA BANG SUMIMULA?',
      ctaTitle: 'Magsimula ng ERACEX Evaluation Program',
      ctaDesc: 'Piliin ang Two-Step, One-Step, o Instant, suriing mabuti ang mga patakaran, at tandaan na hindi na maibabalik ang bayad sa programa kapag naibigay na ang access.',
      ctaBtn1: 'Magsimula Ngayon',
      ctaBtn2: 'Basahin ang mga Patakaran ng Programa',
    },
    hi: {
      badgeText: 'प्रोग्राम की जानकारी',
      title: <><span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX प्रोग्राम</span> की जानकारी</>,
      subtitle: 'ERACEX के सिम्युलेटेड ट्रेडिंग मूल्यांकन प्रोग्राम के बारे में जानें: उच्च लाभ विभाजन, निकासी की शर्तें और हर पैकेज के नियम।',
      breadcrumbLabel: 'प्रोग्राम की जानकारी',
      primaryCta: 'पैकेज देखें',
      secondaryCta: 'ट्रेडिंग नियम',
      f1Text: 'स्पष्ट नियम',
      f2Text: 'उच्च लाभ विभाजन',
      f3Text: 'न्यूनतम 1% निकासी',
      floatTag1: 'लाभ विभाजन',
      floatTag2: 'अधिकतम खाता',
      trustpilotScore: 'लाभ विभाजन',
      fiveStarReviews: 'मानक अनुपात',
      verifiedReviews: 'अधिकतम खाता आकार',
      avgSpeedVal: '5 / 14 दिन',
      avgSpeedLabel: 'पहली निकासी की प्रतीक्षा अवधि',
      feeReimbursement: 'न्यूनतम निकासी',
      refundFulfillment: 'लाभ का',
      wallTitle: 'प्रमाणपत्र की जानकारी',
      wallDesc: 'सिम्युलेटेड खाते के प्रमाणपत्र की जानकारी प्रत्येक प्रोग्राम की शर्तों के अनुसार दी जाती है।',
      zoom: 'प्रमाणपत्र बड़ा करें',
      readyLabel: 'शुरू करने के लिए तैयार?',
      ctaTitle: 'ERACEX मूल्यांकन प्रोग्राम शुरू करें',
      ctaDesc: 'Two-Step, One-Step या Instant चुनें, नियमों को ध्यान से पढ़ें, और याद रखें कि एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता।',
      ctaBtn1: 'अभी शुरू करें',
      ctaBtn2: 'प्रोग्राम के नियम पढ़ें',
    },
    ko: {
      badgeText: '검증된 실제 후기 및 페이아웃 인증',
      title: <>ERACEX <span className="text-[#c68a00] dark:text-[#ffc501]">G.O.A.T 펀디드 트레이더</span>들의 실제 이야기</>,
      subtitle: '17,000개 이상의 실제 5성급 평가, 온체인 출금 인증서 및 누적 $30,000,000+ 이상의 수익을 지급받은 트레이더들의 독점 인터뷰를 확인하세요.',
      breadcrumbLabel: '후기 및 출금인증',
      primaryCta: '챌린지 즉시 도전',
      secondaryCta: '트레이딩 규정 확인',
      f1Text: 'Trustpilot 4.8/5.0 검증',
      f2Text: '8시간 이내 초고속 정산',
      f3Text: '응시료 100% 전액 환불',
      floatTag1: '평가점수',
      floatTag2: '누적 지급액',
      trustpilotScore: 'Trustpilot 평점',
      fiveStarReviews: '92% 5성급 리뷰',
      verifiedReviews: '검증된 실제 후기',
      avgSpeedVal: '3.4 시간',
      avgSpeedLabel: '평균 출금 소요 시간',
      feeReimbursement: '응시료 전액 환급',
      refundFulfillment: '환불 이행 완료율',
      wallTitle: '출금 증명 월: 페이아웃 공식 인증서',
      wallDesc: '모든 인증서는 글로벌 은행 전신환 또는 블록체인 온체인 거래를 통해 정상 집행 완료된 실제 출금 건입니다.',
      zoom: '인증서 확대',
      readyLabel: '첫 번째 페이아웃 인증서의 주인공이 될 준비가 되셨나요?',
      ctaTitle: 'ERACEX의 차세대 G.O.A.T 트레이더로 도약하세요',
      ctaDesc: '기한 제한 없는 1-Step 또는 2-Step 패키지를 선택하고, 8% 원금 고정 드로우다운과 100% 참가비 환불 혜택을 누리세요.',
      ctaBtn1: '펀딩 계정 도전하기',
      ctaBtn2: '평가 매트릭스 확인',
    },
    ru: {
      badgeText: 'ПРОВЕРЕННЫЕ ОТЗЫВЫ И ПОДТВЕРЖДЕНИЯ ВЫПЛАТ',
      title: <>Истории Наших <span className="text-[#c68a00] dark:text-[#ffc501]">G.O.A.T Проп-Трейдеров</span></>,
      subtitle: 'Ознакомьтесь с более чем 17 000 честных отзывов, проверяемыми сертификатами выплат и интервью с трейдерами, получившими более $30M+.',
      breadcrumbLabel: 'Отзывы и Выплаты',
      primaryCta: 'Начать Челлендж',
      secondaryCta: 'Правила Торговли',
      f1Text: 'Trustpilot 4.8/5.0',
      f2Text: 'Выплаты быстрее 8 часов',
      f3Text: '100% Возврат Взноса',
      floatTag1: 'РЕЙТИНГ',
      floatTag2: 'ВСЕГО ВЫПЛАЧЕНО',
      trustpilotScore: 'Балл на Trustpilot',
      fiveStarReviews: '92% 5-звездочных отзывов',
      verifiedReviews: 'Проверенные отзывы',
      avgSpeedVal: '3.4 Часа',
      avgSpeedLabel: 'Средняя скорость выплат',
      feeReimbursement: 'Возврат взноса',
      refundFulfillment: 'Исполнение возвратов',
      wallTitle: 'Стена Доказательств: Сертификаты Выплат',
      wallDesc: 'Каждый сертификат подтверждает реально исполненную выплату через банковские каналы или расчет в блокчейне.',
      zoom: 'Увеличить Сертификат',
      readyLabel: 'ГОТОВЫ ПОЛУЧИТЬ СВОЙ ПЕРВЫЙ СЕРТИФИКАТ ВЫПЛАТЫ?',
      ctaTitle: 'Станьте следующим G.O.A.T трейдером в ERACEX',
      ctaDesc: 'Выберите 1-Step или 2-Step челлендж без лимита по времени со статическим drawdown 8% и 100% возвратом взноса.',
      ctaBtn1: 'Получить Капитал',
      ctaBtn2: 'Таблица Правил',
    },
    ar: {
      badgeText: 'تقييمات معتمدة وإثباتات السحب',
      title: <>قصص نجاح من <span className="text-[#c68a00] dark:text-[#ffc501]">متداولي G.O.A.T الممولين</span></>,
      subtitle: 'استكشف أكثر من 17,000 تقييم معتمد، وشهادات سحب قابلة للتحقق على البلوكشين، ومقابلات حصرية لمتداولين سحبوا أكثر من 30 مليون دولار.',
      breadcrumbLabel: 'التقييمات والسحوبات',
      primaryCta: 'بدء التحدي الآن',
      secondaryCta: 'قواعد التداول',
      f1Text: 'Trustpilot 4.8/5.0',
      f2Text: 'سحوبات خلال أقل من 8 ساعات',
      f3Text: 'استرداد الرسوم 100%',
      floatTag1: 'التقييم العام',
      floatTag2: 'إجمالي المسحوبات',
      trustpilotScore: 'تقييم Trustpilot',
      fiveStarReviews: '92% تقييمات 5 نجوم',
      verifiedReviews: 'تقييمات معتمدة',
      avgSpeedVal: '3.4 ساعات',
      avgSpeedLabel: 'متوسط سرعة معالجة السحب',
      feeReimbursement: 'استرداد رسوم التقييم',
      refundFulfillment: 'نسبة إتمام الاسترداد',
      wallTitle: 'جدار الإثبات: شهادات صرف الأرباح الرسمية',
      wallDesc: 'تمثل كل شهادة عملية دفع حقيقية تم التحقق منها عبر القنوات المصرفية الدولية أو تسوية البلوكشين.',
      zoom: 'تكبير الشهادة',
      readyLabel: 'هل أنت مستعد لاستلام شهادة أول سحب لأرباحك؟',
      ctaTitle: 'كن متداول G.O.A.T التالي مع ERACEX',
      ctaDesc: 'اختر تحدي 1-Step أو 2-Step بدون قيود زمنية، مع تراجع ثابت 8% واسترداد كامل لرسوم الاشتراك مع أول سحب.',
      ctaBtn1: 'احصل على التمويل الآن',
      ctaBtn2: 'مصفوفة القواعد',
    },
    nl: {
      badgeText: 'GEVERIFIEERDE REVIEWS & UITBETALINGSBEWIJZEN',
      title: <>Verhalen Van Onze <span className="text-[#c68a00] dark:text-[#ffc501]">Gefinancierde G.O.A.T Traders</span></>,
      subtitle: 'Ontdek meer dan 17.000 authentieke beoordelingen, controleerbare uitbetalingscertificaten en video-interviews van handelaren die meer dan $30M+ hebben opgenomen.',
      breadcrumbLabel: 'Reviews & Payouts',
      primaryCta: 'Start Challenge',
      secondaryCta: 'Handelsregels',
      f1Text: 'Trustpilot 4.8/5.0',
      f2Text: 'Uitbetaling < 8 Uur',
      f3Text: '100% Teruggave Kosten',
      floatTag1: 'SCORE',
      floatTag2: 'TOTAAL UITBETAALD',
      trustpilotScore: 'Trustpilot-score',
      fiveStarReviews: '92% 5-Sterren Beoordelingen',
      verifiedReviews: 'Geverifieerde Reviews',
      avgSpeedVal: '3.4 Uur',
      avgSpeedLabel: 'Gemiddelde Verwerkingsduur',
      feeReimbursement: 'Restitutie van Inschrijfgeld',
      refundFulfillment: 'Uitvoeringspercentage Restitutie',
      wallTitle: 'Muur van Bewijs: Uitbetalingscertificaten',
      wallDesc: 'Elk certificaat staat voor een uitgevoerde uitbetaling, gevalideerd via bankoverschrijving of blockchain-afwikkeling.',
      zoom: 'Certificaat Vergroten',
      readyLabel: 'KLAAR OM JE EERSTE UITBETALINGSCERTIFICAAT TE ONTVANGEN?',
      ctaTitle: 'Word de Volgende G.O.A.T Trader bij ERACEX',
      ctaDesc: 'Kies jouw 1-Step of 2-Step programma zonder tijdslimiet, 8% statische drawdown en 100% restitutie bij de eerste uitbetaling.',
      ctaBtn1: 'Krijg Financiering',
      ctaBtn2: 'Bekijk Regels',
    },
  }[currentLang] || {
    badgeText: 'PROGRAM INFORMATION',
    title: <>Information About <span className="text-[#c68a00] dark:text-[#ffc501]">ERACEX Programs</span></>,
    subtitle: 'Learn about ERACEX trading evaluation programs: a high profit share, withdrawal conditions and the rules of every package.',
    breadcrumbLabel: 'Program Information',
    primaryCta: 'Explore Packages',
    secondaryCta: 'Trading Rules',
    f1Text: 'Clear rules',
    f2Text: 'High profit share',
    f3Text: '1% minimum withdrawal',
    floatTag1: 'PROFIT SPLIT',
    floatTag2: 'MAX ACCOUNT',
    trustpilotScore: 'Profit Split',
    fiveStarReviews: 'Standard ratio',
    verifiedReviews: 'Max Account Size',
    avgSpeedVal: '5 / 14 Days',
    avgSpeedLabel: 'First Withdrawal Wait',
    feeReimbursement: 'Minimum Withdrawal',
    refundFulfillment: 'Of Profit',
    wallTitle: 'Certificate Information',
    wallDesc: 'Account certificate information is provided under the conditions of each program.',
    zoom: 'Zoom Certificate',
    readyLabel: 'READY TO START?',
    ctaTitle: 'Start an ERACEX Evaluation Program',
    ctaDesc: 'Choose Two-Step, One-Step or Instant, review the rules carefully, and remember that program fees are non-refundable once access is granted.',
    ctaBtn1: 'Get Started Now',
    ctaBtn2: 'Read Program Rules',
  };

  return (
    <div className="pb-16 app-bg app-text">
      {}
      <PageHeroBanner
        badgeText={d.badgeText}
        badgeIcon={<Award className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={d.title}
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: d.breadcrumbLabel },
        ]}
        primaryCta={{
          label: d.primaryCta,
          href: '/pricing',
          icon: <Award className="w-5 h-5" />,
        }}
        secondaryCta={{
          label: d.secondaryCta,
          href: '/rules',
        }}
        features={[
          { icon: <CheckCircle2 className="w-4 h-4" />, text: d.f1Text },
          { icon: <ShieldCheck className="w-4 h-4" />, text: d.f2Text },
          { icon: <Coins className="w-4 h-4" />, text: d.f3Text },
        ]}
        imageSrc="/images/banner-affiliate-3d.jpg"
        imageAlt="ERACEX Authentic Verified Payout Wall and Trader Interviews"
        floatingBadge1={{
          tag: d.floatTag1,
          value: getHighShareWord(currentLang),
          icon: <Award className="w-5 h-5 text-[#f6bf4a]" />,
        }}
        floatingBadge2={{
          tag: d.floatTag2,
          value: '$100,000',
          icon: <Coins className="w-5 h-5 text-[#f6bf4a]" />,
        }}
      />

      {/* 2. INSTITUTIONAL METRICS SUMMARY BAR */}
      <section className="py-12 border-b app-border app-surface">
        <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl app-subtle border app-border hover-float">
              <div className="text-3xl font-black font-mono app-text">{getHighShareWord(currentLang)}</div>
              <span className="text-xs font-mono app-text-muted uppercase">
                {d.trustpilotScore}
              </span>
            </div>

            <div className="p-6 rounded-2xl app-subtle border app-border hover-float">
              <div className="text-2xl font-black font-mono text-[#c68a00] dark:text-[#f6bf4a] mb-1">
                $100,000
              </div>
              <div className="text-xs font-mono text-[#c68a00] dark:text-[#f6bf4a] font-bold mb-1">
                <span>{d.fiveStarReviews}</span>
              </div>
              <span className="text-xs font-mono app-text-muted uppercase">
                {d.verifiedReviews}
              </span>
            </div>

            <div className="p-6 rounded-2xl app-subtle border app-border hover-float">
              <div className="text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501] mb-1">
                {d.avgSpeedVal}
              </div>
              <div className="text-xs font-mono text-[#c68a00] dark:text-[#f6bf4a] font-bold mb-1 flex items-center justify-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Two-Step / Instant</span>
              </div>
              <span className="text-xs font-mono app-text-muted uppercase">
                {d.avgSpeedLabel}
              </span>
            </div>

            <div className="p-6 rounded-2xl app-subtle border app-border hover-float">
              <div className="text-3xl font-black font-mono text-[#c68a00] dark:text-[#f6bf4a] mb-1">
                1%
              </div>
              <div className="text-xs font-mono text-[#c68a00] dark:text-[#ffc501] font-bold mb-1">
                <span>{d.feeReimbursement}</span>
              </div>
              <span className="text-xs font-mono app-text-muted uppercase">
                {d.refundFulfillment}
              </span>
            </div>
          </div>
        </div>
      </section>

      {}
      <ReviewsSection />

      <ImageBand caption="markets" variant="wide" maxWidth={900} images={[{ src: '/images/market-city-chart.jpg', alt: 'Global markets' }]} />

      {/* 5. CALL TO ACTION BAR */}
      <section className="py-20 relative overflow-hidden">
        <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          <div className="rounded-3xl border-2 border-[#f6bf4a]/40 dark:border-[#ffc501]/50 p-8 sm:p-14 text-center app-surface shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-5xl font-black app-text mb-6">
                {d.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg app-text-secondary mb-8">
                {d.ctaDesc}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/pricing"
                  className="px-8 py-4 rounded-2xl btn-gold text-black font-extrabold text-sm sm:text-base hover:scale-105 transition-all shadow-xl"
                >
                  {d.ctaBtn1}
                </Link>
                <Link
                  href="/rules"
                  className="px-8 py-4 rounded-2xl border app-border app-surface hover:border-[#f6bf4a]/50 app-text font-bold text-sm sm:text-base transition-all"
                >
                  {d.ctaBtn2}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
