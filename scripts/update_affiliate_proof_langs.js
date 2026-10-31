const fs = require('fs');

const proofLangs = {
  es: {
    headerTitle: 'Opiniones de los Principales Socios IB del Mundo',
    headerSubtitle: 'Construye ingresos pasivos de 5 cifras al mes con ERACEX. Pagos semanales automáticos vía USDT o transferencia bancaria sin límite de ganancias.',
    commEarned: 'Comisiones Ganadas',
    activeRef: 'Referidos Activos',
    verifiedIB: 'IB VERIFICADO',
  },
  pt: {
    headerTitle: 'Depoimentos dos Principais Parceiros IB Globais',
    headerSubtitle: 'Construa uma renda passiva mensal de 5 dígitos com a ERACEX. Pagamentos semanais automáticos em USDT ou transferência bancária sem limite de ganhos.',
    commEarned: 'Comissões Recebidas',
    activeRef: 'Indicados Ativos',
    verifiedIB: 'IB VERIFICADO',
  },
  fr: {
    headerTitle: 'Témoignages des Meilleurs Partenaires IB Mondiaux',
    headerSubtitle: 'Générez des revenus passifs mensuels à 5 chiffres avec ERACEX. Versements hebdomadaires automatisés en USDT ou virement sans plafond.',
    commEarned: 'Commissions Gagnées',
    activeRef: 'Filleuls Actifs',
    verifiedIB: 'IB VÉRIFIÉ',
  },
  de: {
    headerTitle: 'Feedback Unserer Top Globalen IB-Partner',
    headerSubtitle: 'Bauen Sie fünfstellige monatliche passive Einnahmen mit ERACEX auf. Wöchentliche automatische Auszahlungen via USDT oder Überweisung ohne Deckelung.',
    commEarned: 'Verdiente Provision',
    activeRef: 'Aktive Empfehlungen',
    verifiedIB: 'VERIFIZIERTER IB',
  },
  it: {
    headerTitle: 'Opinioni dei Migliori Partner IB Mondiali',
    headerSubtitle: 'Crea entrate passive mensili a 5 cifre con ERACEX. Pagamenti settimanali automatici via USDT o bonifico senza tetti di guadagno.',
    commEarned: 'Commissioni Guadagnate',
    activeRef: 'Trader Attivi',
    verifiedIB: 'IB VERIFICATO',
  },
  pl: {
    headerTitle: 'Opinie Najlepszych Globalnych Partnerów IB',
    headerSubtitle: 'Buduj 5-cyfrowy miesięczny dochód pasywny z ERACEX. Cotygodniowe automatyczne wypłaty w USDT lub na konto bez żadnych limitów.',
    commEarned: 'Zarobiona Prowizja',
    activeRef: 'Aktywni Poleceni',
    verifiedIB: 'ZWERYFIKOWANY IB',
  },
  tr: {
    headerTitle: 'Dünyanın En Başarılı IB Ortaklarının Görüşleri',
    headerSubtitle: 'ERACEX ile her ay 5 haneli düzenli pasif gelir elde edin. USDT veya banka havalesi ile haftalık sınırsız otomatik ödemeler.',
    commEarned: 'Kazanılan Komisyon',
    activeRef: 'Aktif Yatırımcı',
    verifiedIB: 'DOĞRULANMIŞ IB',
  },
  id: {
    headerTitle: 'Ulasan dari Top Mitra IB Global Kami',
    headerSubtitle: 'Bangun pendapatan pasif 5 digit setiap bulan bersama ERACEX. Pembayaran mingguan otomatis via USDT atau transfer bank tanpa batas.',
    commEarned: 'Komisi Diperoleh',
    activeRef: 'Rujukan Aktif',
    verifiedIB: 'IB TERVERIFIKASI',
  },
  th: {
    headerTitle: 'ความคิดเห็นจากสุดยอดพาร์ตเนอร์ IB ระดับโลก',
    headerSubtitle: 'สร้างกระแสรายได้แบบ Passive Income หลัก 5 หลักต่อเดือนกับ ERACEX โอนจ่ายอัตโนมัติทุกสัปดาห์ผ่าน USDT หรือธนาคารโดยไม่มีขีดจำกัด',
    commEarned: 'คอมมิชชันที่ได้รับ',
    activeRef: 'ผู้ใช้งานที่แอคทีฟ',
    verifiedIB: 'พาร์ตเนอร์ IB ที่ได้รับการยืนยัน',
  },
  fil: {
    headerTitle: 'Feedback Mula sa Top Global IB Partners',
    headerSubtitle: 'Bumuo ng 5-figure na buwanang passive income sa ERACEX. Awtomatikong lingguhang bayad sa USDT o bank wire nang walang limit.',
    commEarned: 'Kinita na Komisyon',
    activeRef: 'Aktibong Referrals',
    verifiedIB: 'BERIPIKADONG IB',
  },
  hi: {
    headerTitle: 'शीर्ष वैश्विक IB भागीदारों की प्रतिक्रिया',
    headerSubtitle: 'ERACEX के साथ 5-अंकीय मासिक निष्क्रिय आय अर्जित करें। बिना किसी आय सीमा के USDT या बैंक वायर के माध्यम से साप्ताहिक स्वचालित भुगतान।',
    commEarned: 'अर्जित कमीशन',
    activeRef: 'सक्रिय रेफरल',
    verifiedIB: 'सत्यापित IB',
  },
  ko: {
    headerTitle: '글로벌 톱 클래스 공식 IB 파트너들의 생생한 후기',
    headerSubtitle: 'ERACEX와 함께 매월 5자리 수 달러($)의 강력한 패시브 인컴을 구축하세요. USDT 및 해외 은행 전신환을 통해 한도 없이 매주 자동 정산됩니다.',
    commEarned: '월간 누적 커미션',
    activeRef: '활동 중인 추천 팀',
    verifiedIB: '공식 인증 IB',
  },
  ru: {
    headerTitle: 'Отзывы ведущих международных IB-партнеров',
    headerSubtitle: 'Создайте 5-значный ежемесячный пассивный доход с ERACEX. Еженедельные автоматические выплаты в USDT или банком без ограничений.',
    commEarned: 'Заработанная комиссия',
    activeRef: 'Активных рефералов',
    verifiedIB: 'ПРОВЕРЕННЫЙ IB',
  },
  ar: {
    headerTitle: 'آراء كبار الشركاء والوسطاء المعرفين (IB) حول العالم',
    headerSubtitle: 'ابنِ دخلاً سلبياً شهرياً من 5 أرقام مع ERACEX. تسويات أسبوعية آلية عبر USDT أو التحويل المصرفي بلا سقف للأرباح.',
    commEarned: 'العمولات المكتسبة',
    activeRef: 'المتداولين النشطين',
    verifiedIB: 'وسيط معرف معتمد',
  },
  nl: {
    headerTitle: 'Ervaringen Van Onze Wereldwijde Top IB-Partners',
    headerSubtitle: 'Bouw een maandelijks passief inkomen van 5 cijfers op met ERACEX. Wekelijkse geautomatiseerde uitbetalingen via USDT of bankoverschrijving zonder limiet.',
    commEarned: 'Verdiende Commissie',
    activeRef: 'Actieve Verwijzingen',
    verifiedIB: 'GEVERIFIEERDE IB',
  },
};

let code = fs.readFileSync('components/eracex/AffiliateTopPartnersProof.tsx', 'utf8').replace(/\r\n/g, '\n');

const enMarker = `    en: {
      headerTitle: 'Feedback From Top Global Affiliates',
      headerSubtitle: 'Build 5-figure monthly passive income with ERACEX. Automated weekly payouts via USDT or international wire with zero earnings cap.',
      commEarned: 'Commission Earned',
      activeRef: 'Active Referrals',
      verifiedIB: 'VERIFIED IB',
    },`;

if (!code.includes(enMarker)) {
  console.error('Could not find enMarker in AffiliateTopPartnersProof.tsx');
  process.exit(1);
}

let extraStr = Object.entries(proofLangs).map(([lang, val]) => `    ${lang}: ${JSON.stringify(val, null, 6).replace(/\n/g, '\n    ')},`).join('\n');
const newCode = code.replace(enMarker, enMarker + '\n' + extraStr);
fs.writeFileSync('components/eracex/AffiliateTopPartnersProof.tsx', newCode, 'utf8');
console.log('Successfully updated AffiliateTopPartnersProof.tsx with 19 languages');
