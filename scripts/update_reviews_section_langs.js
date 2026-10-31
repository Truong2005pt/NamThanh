const fs = require('fs');

const reviewsSectionLangs = {
  es: {
    headerTitle: 'Reseñas Verificadas de Traders Financiados',
    headerSubtitle: 'Más de 17.000 valoraciones de traders de todo el mundo destacando la velocidad de ejecución, el drawdown estático y los payouts automáticos.',
    viewCert: 'Ver Certificado',
    withdrawnLabel: 'Retirado:',
    verifiedTrader: 'TRADER VERIFICADO',
    onChainTransferred: 'Transferencia On-Chain Confirmada',
    verifiedSuffix: 'Verificado',
  },
  pt: {
    headerTitle: 'Avaliações Verificadas de Traders Financiados',
    headerSubtitle: 'Mais de 17.000 avaliações 5 estrelas elogiando a velocidade de execução, regras de drawdown estático e saques automatizados.',
    viewCert: 'Ver Certificado',
    withdrawnLabel: 'Sacado:',
    verifiedTrader: 'TRADER VERIFICADO',
    onChainTransferred: 'Transferência On-Chain Concluída',
    verifiedSuffix: 'Verificado',
  },
  fr: {
    headerTitle: 'Avis Vérifiés de Traders Financés',
    headerSubtitle: 'Plus de 17 000 avis 5 étoiles louant la rapidité d’exécution, le drawdown statique et les retraits automatisés.',
    viewCert: 'Voir le Certificat',
    withdrawnLabel: 'Retiré :',
    verifiedTrader: 'TRADER VÉRIFIÉ',
    onChainTransferred: 'Transfert On-Chain Validé',
    verifiedSuffix: 'Vérifié',
  },
  de: {
    headerTitle: 'Verifizierte Bewertungen von Funded Tradern',
    headerSubtitle: 'Über 17.000 5-Sterne-Bewertungen weltweiter Trader über Ausführungsgeschwindigkeit, statischen Drawdown und automatisierte Payouts.',
    viewCert: 'Zertifikat Ansehen',
    withdrawnLabel: 'Ausgezahlt:',
    verifiedTrader: 'VERIFIZIERTER TRADER',
    onChainTransferred: 'On-Chain-Überweisung Erfolgreich',
    verifiedSuffix: 'Verifiziert',
  },
  it: {
    headerTitle: 'Recensioni Verificate di Trader Finanziati',
    headerSubtitle: 'Oltre 17.000 recensioni a 5 stelle da trader di tutto il mondo che lodano la velocità di esecuzione, il drawdown statico e i prelievi veloci.',
    viewCert: 'Visualizza Certificato',
    withdrawnLabel: 'Prelevato:',
    verifiedTrader: 'TRADER VERIFICATO',
    onChainTransferred: 'Trasferimento On-Chain Riuscito',
    verifiedSuffix: 'Verificato',
  },
  pl: {
    headerTitle: 'Zweryfikowane Opinie Ufundowanych Traderów',
    headerSubtitle: 'Ponad 17 000 5-gwiazdkowych opinii traderów z całego świata chwalących szybkość egzekucji, statyczny drawdown i zautomatyzowane wypłaty.',
    viewCert: 'Zobacz Certyfikat',
    withdrawnLabel: 'Wypłacono:',
    verifiedTrader: 'ZWERYFIKOWANY TRADER',
    onChainTransferred: 'Przelew On-Chain Zrealizowany',
    verifiedSuffix: 'Zweryfikowano',
  },
  tr: {
    headerTitle: 'Fonlanan Yatırımcılardan Doğrulanmış Değerlendirmeler',
    headerSubtitle: 'Emir iletim hızını, sabit kayıp limitini ve otomatik kâr ödemelerini öven dünya çapında 17.000’den fazla 5 yıldızlı yorum.',
    viewCert: 'Sertifikayı İncele',
    withdrawnLabel: 'Çekilen Tutar:',
    verifiedTrader: 'DOĞRULANMIŞ YATIRIMCI',
    onChainTransferred: 'On-Chain Transfer Tamamlandı',
    verifiedSuffix: 'Doğrulandı',
  },
  id: {
    headerTitle: 'Ulasan Terverifikasi dari Trader Terdanai',
    headerSubtitle: 'Lebih dari 17.000 ulasan bintang 5 dari trader global yang mengapresiasi kecepatan eksekusi, drawdown statis, dan pencairan otomatis.',
    viewCert: 'Lihat Sertifikat',
    withdrawnLabel: 'Telah Ditarik:',
    verifiedTrader: 'TRADER TERVERIFIKASI',
    onChainTransferred: 'Transfer On-Chain Berhasil',
    verifiedSuffix: 'Terverifikasi',
  },
  th: {
    headerTitle: 'รีวิวที่ได้รับการยืนยันจากเทรดเดอร์พอร์ตทุนจริง',
    headerSubtitle: 'รีวิว 5 ดาวกว่า 17,000 รายการจากชุมชนเทรดเดอร์ทั่วโลก ชื่นชมความเร็วในการส่งคำสั่ง กฎ Drawdown แบบคงที่ และการโอนเงินที่รวดเร็ว',
    viewCert: 'ดูใบรับรอง',
    withdrawnLabel: 'ถอนแล้ว:',
    verifiedTrader: 'เทรดเดอร์ที่ได้รับการยืนยัน',
    onChainTransferred: 'โอนเงิน On-Chain สำเร็จแล้ว',
    verifiedSuffix: 'ยืนยันตัวตนแล้ว',
  },
  fil: {
    headerTitle: 'Mga Beripikadong Review Mula sa Funded Traders',
    headerSubtitle: 'Mahigit 17,000 5-star ratings mula sa mga trader sa buong mundo na nagpupuri sa bilis ng execution, static drawdown, at automated payouts.',
    viewCert: 'Tingnan ang Sertipiko',
    withdrawnLabel: 'Na-withdraw:',
    verifiedTrader: 'BERIPIKADONG TRADER',
    onChainTransferred: 'On-Chain Transfer Matagumpay',
    verifiedSuffix: 'Beripikado',
  },
  hi: {
    headerTitle: 'फंडेड ट्रेडर्स से सत्यापित समीक्षाएं',
    headerSubtitle: 'निष्पादन गति, स्थिर ड्रॉडाउन नियमों और स्वचालित पेआउट की प्रशंसा करते हुए वैश्विक ट्रेडर्स की 17,000 से अधिक शीर्ष रेटिंग।',
    viewCert: 'प्रमाणपत्र देखें',
    withdrawnLabel: 'निकासी की गई:',
    verifiedTrader: 'सत्यापित ट्रेडर',
    onChainTransferred: 'ऑन-चेन ट्रांसफर सफल',
    verifiedSuffix: 'सत्यापित',
  },
  ko: {
    headerTitle: '실제 펀딩 통과 트레이더들의 검증된 평가',
    headerSubtitle: '체결 속도, 원금 고정 드로우다운 및 신속한 자동 출금 프로세스에 대해 전 세계 트레이더들이 부여한 17,000개 이상의 5성급 평가.',
    viewCert: '인증서 확인',
    withdrawnLabel: '누적 출금액:',
    verifiedTrader: '공식 검증 트레이더',
    onChainTransferred: '온체인 결제 송금 완료',
    verifiedSuffix: '인증 완료',
  },
  ru: {
    headerTitle: 'Проверенные отзывы от финансируемых трейдеров',
    headerSubtitle: 'Более 17 000 5-звездочных отзывов со всего мира с высокой оценкой скорости исполнения, статического drawdown и быстрых выплат.',
    viewCert: 'Смотреть сертификат',
    withdrawnLabel: 'Выведено:',
    verifiedTrader: 'ПРОВЕРЕННЫЙ ТРЕЙДЕР',
    onChainTransferred: 'On-Chain перевод подтвержден',
    verifiedSuffix: 'Проверено',
  },
  ar: {
    headerTitle: 'تقييمات معتمدة من المتداولين الممولين',
    headerSubtitle: 'أكثر من 17,000 تقييم 5 نجوم من متداولين حول العالم يشيدون بسرعة التنفيذ وقواعد التراجع الثابت والسحوبات الآلية.',
    viewCert: 'عرض الشهادة',
    withdrawnLabel: 'إجمالي المسحوب:',
    verifiedTrader: 'متداول معتمد',
    onChainTransferred: 'تم التحويل On-Chain بنجاح',
    verifiedSuffix: 'معتمد',
  },
  nl: {
    headerTitle: 'Geverifieerde Reviews Van Gefinancierde Traders',
    headerSubtitle: 'Meer dan 17.000 5-sterrenbeoordelingen van wereldwijde handelaren die de uitvoeringssnelheid, statische drawdown en automatische uitbetalingen prijzen.',
    viewCert: 'Bekijk Certificaat',
    withdrawnLabel: 'Opgenomen:',
    verifiedTrader: 'GEVERIFIEERDE TRADER',
    onChainTransferred: 'On-Chain Overboeking Geslaagd',
    verifiedSuffix: 'Geverifieerd',
  },
};

let code = fs.readFileSync('components/eracex/ReviewsSection.tsx', 'utf8').replace(/\r\n/g, '\n');

const enMarker = `    en: {
      headerTitle: 'Verified Reviews from Funded Traders',
      headerSubtitle: 'Over 17,000 top ratings from global traders praising execution speed, static drawdown rules, and automated payouts.',
      viewCert: 'View Certificate',
      withdrawnLabel: 'Withdrawn:',
      verifiedTrader: 'VERIFIED TRADER',
      onChainTransferred: 'On-Chain Transferred',
      verifiedSuffix: 'Verified',
    },`;

if (!code.includes(enMarker)) {
  console.error('Could not find enMarker in ReviewsSection.tsx');
  process.exit(1);
}

let extraStr = Object.entries(reviewsSectionLangs).map(([lang, val]) => `    ${lang}: ${JSON.stringify(val, null, 6).replace(/\n/g, '\n    ')},`).join('\n');
const newCode = code.replace(enMarker, enMarker + '\n' + extraStr);
fs.writeFileSync('components/eracex/ReviewsSection.tsx', newCode, 'utf8');
console.log('Successfully updated ReviewsSection.tsx with 19 languages');
