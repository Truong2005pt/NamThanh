const fs = require('fs');

const reviewsLangs = {
  es: {
    title: 'Traders que Han Superado Estos Paquetes',
    subtitle: 'La tarifa de registro no es un coste perdido. Recibes el 100% de la tarifa con tu primer retiro de beneficios.',
    viewProof: 'Ver Certificado',
    timeToPass: ['Aprobado en 6 días', 'Aprobado en 9 días', 'Aprobado en 4 días', 'Aprobado en 11 días'],
    reviews: [
      'Recibí el reembolso completo de $299 junto con mi retiro de $18,400. Sin tarifas ocultas, spreads ultra ajustados en oro.',
      'Aprobé el desafío de $100K en 9 días. La ausencia de días mínimos obligatorios permite operar sin estrés y con total paciencia.',
      'Instant Hero me ahorró semanas de evaluación. Cuenta real al instante y retiros directos con un reparto de beneficios inmejorable.',
      'El modelo 2-Step de $200K con drawdown estático del 8% sin trampa de trailing me permitió surfear los movimientos de Forex con tranquilidad.',
    ],
  },
  pt: {
    title: 'Traders que Foram Aprovados Nestes Planos',
    subtitle: 'A taxa de avaliação não é um custo perdido. Você recebe 100% do valor de volta no seu primeiro saque de lucros.',
    viewProof: 'Ver Certificado',
    timeToPass: ['Aprovado em 6 dias', 'Aprobado em 9 dias', 'Aprovado em 4 dias', 'Aprovado em 11 dias'],
    reviews: [
      'Recebi meus $299 de volta integralmente junto com o primeiro saque de $18.400. Sem taxas escondidas, spreads no ouro são incríveis.',
      'Passei no teste de $100K em 9 dias. Sem exigência de dias mínimos, operei com paciência e sem ansiedade.',
      'O modelo Instant Hero me poupou semanas de prova. Capital imediato e saques diretos com divisão de lucros justa.',
      'O plano 2-Step de $200K com drawdown estático de 8% sem armadilha de trailing me deu total segurança nas operações de swing.',
    ],
  },
  fr: {
    title: 'Traders Ayant Réussi Ces Évaluations',
    subtitle: 'Les frais d’inscription ne sont pas perdus. Vous recevez un remboursement à 100% dès votre premier retrait de bénéfices.',
    viewProof: 'Voir le Certificat',
    timeToPass: ['Validé en 6 jours', 'Validé en 9 jours', 'Validé en 4 jours', 'Validé en 11 jours'],
    reviews: [
      'J’ai récupéré l’intégralité de mes 299 $ de frais avec mon virement de 18 400 $. Zéro frais cachés, spreads or ultra-serrés.',
      'J’ai validé le challenge 100K en 9 jours. L’absence de jours minimum imposés permet de trader sereinement sans précipitation.',
      'Instant Hero m’a fait gagner des semaines. Compte financé immédiat et retraits directs avec un excellent partage de profit.',
      'Le compte 2-Step 200K avec drawdown statique de 8% sans trailing trap m’a permis de capturer de grands mouvements en toute sérénité.',
    ],
  },
  de: {
    title: 'Trader, Die Diese Stufen Bestanden Haben',
    subtitle: 'Ihre Anmeldegebühr ist kein Verlust. Sie erhalten 100% der Gebühr zusammen mit Ihrer ersten Auszahlung erstattet.',
    viewProof: 'Zertifikat Ansehen',
    timeToPass: ['In 6 Tagen bestanden', 'In 9 Tagen bestanden', 'In 4 Tagen bestanden', 'In 11 Tagen bestanden'],
    reviews: [
      'Ich erhielt meine vollen $299 Anmeldegebühr zusammen mit meiner $18.400 Auszahlung zurück. Keine versteckten Gebühren.',
      'Habe die $100K Challenge in 9 Tagen bestanden. Da es keine Mindesttage gibt, konnte ich absolut geduldig auf Setups warten.',
      'Instant Hero hat mir Wochen erspart. Sofort finanziertes Konto und direkte Auszahlungen mit fairem Profit Split.',
      'Das $200K 2-Step Modell mit 8% statischem Drawdown ohne Trailing-Falle gab mir maximale Sicherheit beim Swing-Trading.',
    ],
  },
  it: {
    title: 'Trader Che Hanno Superato Questi Livelli',
    subtitle: 'La tariffa di iscrizione non va perduta. Ricevi il 100% del rimborso insieme al tuo primo prelievo di profitto.',
    viewProof: 'Visualizza Certificato',
    timeToPass: ['Superato in 6 giorni', 'Superato in 9 giorni', 'Superato in 4 giorni', 'Superato in 11 giorni'],
    reviews: [
      'Ho ricevuto indietro tutti i $299 insieme al mio payout di $18.400. Zero costi nascosti, spread sull’oro impeccabili.',
      'Superata la challenge da $100K in 9 giorni. Nessun giorno minimo obbligatorio, ho fatto trading con totale tranquillità.',
      'Instant Hero mi ha fatto risparmiare settimane. Conto istantaneo e prelievi diretti con una ripartizione degli utili vantaggiosa.',
      'Il 2-Step da $200K con drawdown statico all’8% senza trailing mi ha consentito di operare sul Forex in totale serenità.',
    ],
  },
  pl: {
    title: 'Traderzy, Którzy Zdali Te Pakiety',
    subtitle: 'Opłata za egzamin nie przepada. Otrzymujesz 100% zwrotu kosztów wraz ze swoją pierwszą wypłatą zysków.',
    viewProof: 'Zobacz Certyfikat',
    timeToPass: ['Zdane w 6 dni', 'Zdane w 9 dni', 'Zdane w 4 dni', 'Zdane w 11 dni'],
    reviews: [
      'Otrzymałem zwrot pełnych $299 opłaty egzaminacyjnej wraz z moją wypłatą $18,400. Żadnych ukrytych kosztów, świetne spready.',
      'Zdałem challenge $100K w 9 dni. Brak wymogu minimalnej liczby dni pozwolił mi handlować z pełnym spokojem.',
      'Instant Hero zaoszczędził mi tygodnie testów. Natychmiastowe finansowanie i bezpośrednie wypłaty ze świetnym podziałem zysków.',
      'Wyzwanie $200K 2-Step ze statycznym drawdownem 8% bez pułapki trailingowej dało mi pełną swobodę w handlu swingowym.',
    ],
  },
  tr: {
    title: 'Bu Seviyeleri Başarıyla Geçen Yatırımcılar',
    subtitle: 'Katılım ücreti boşa gitmez. İlk kâr çekiminizle birlikte kayıt ücretinizin %100’ünü eksiksiz geri alırsınız.',
    viewProof: 'Sertifikayı İncele',
    timeToPass: ['6 günde geçti', '9 günde geçti', '4 günde geçti', '11 günde geçti'],
    reviews: [
      '18.400$ kâr çekimimle birlikte 299$ sınav ücretimin tamamını geri aldım. Gizli kesinti yok, altın spreadleri harika.',
      '100K hesabını 9 günde geçtim. Minimum işlem günü zorunluluğu olmaması stres yapmadan sabırla işlem yapmamı sağladı.',
      'Instant Hero bana haftalarca zaman kazandırdı. Doğrudan fonlanan hesap ve yüksek kâr payıyla hızlı ödemeler.',
      'Trailing tuzağı olmayan %8 sabit kayıp limitli 200K 2-Step paketi Forex trend işlemlerinde bana tam bir güven verdi.',
    ],
  },
  id: {
    title: 'Trader yang Telah Lolos Paket Akun Ini',
    subtitle: 'Biaya pendaftaran tidak hilang. Anda akan menerima pengembalian 100% biaya pendaftaran pada penarikan profit pertama.',
    viewProof: 'Lihat Sertifikat',
    timeToPass: ['Lolos dalam 6 hari', 'Lolos dalam 9 hari', 'Lolos dalam 4 hari', 'Lolos dalam 11 hari'],
    reviews: [
      'Saya menerima kembali biaya $299 penuh bersamaan dengan penarikan $18.400 pertama. Tanpa biaya tersembunyi, spread emas tipis.',
      'Lolos challenge $100K dalam 9 hari. Tanpa syarat minimum hari trading membuat saya bisa trading dengan tenang.',
      'Instant Hero menghemat waktu berminggu-minggu. Langsung dapat akun modal dan penarikan langsung dengan bagi hasil tinggi.',
      'Paket 2-Step $200K dengan drawdown statis 8% tanpa jebakan trailing memberi rasa aman penuh saat swing trading.',
    ],
  },
  th: {
    title: 'เทรดเดอร์ที่สอบผ่านแพ็กเกจพอร์ตทุนเหล่านี้',
    subtitle: 'ค่าสมัครไม่สูญเปล่า คุณจะได้รับเงินค่าธรรมเนียมคืน 100% เต็มทันทีเมื่อทำการถอนกำไรครั้งแรก',
    viewProof: 'ดูใบรับรอง',
    timeToPass: ['สอบผ่านใน 6 วัน', 'สอบผ่านใน 9 วัน', 'สอบผ่านใน 4 วัน', 'สอบผ่านใน 11 วัน'],
    reviews: [
      'ผมได้รับเงินค่าสอบ $299 คืนเต็มจำนวนพร้อมกับยอดถอนกำไร $18,400 ไม่มีค่าธรรมเนียมแอบแฝง สเปรดทองคำแคบมาก',
      'สอบผ่านพอร์ต $100K ภายใน 9 วัน การไม่มีวันเทรดขั้นต่ำช่วยให้เทรดได้อย่างใจเย็นและมีวินัย',
      'Instant Hero ช่วยประหยัดเวลาสอบไปหลายสัปดาห์ ได้รับพอร์ตทุนทันที ถอนเงินไว และส่วนแบ่งกำไรคุ้มค่า',
      'พอร์ต 2-Step ขนาด $200K พร้อม Max Drawdown คงที่ 8% ไร้กับดัก Trailing ช่วยให้เทรดสวิงได้อย่างสบายใจ',
    ],
  },
  fil: {
    title: 'Mga Trader na Nakapasa sa mga Tiers na Ito',
    subtitle: 'Hindi sayang ang registration fee. Matatanggap mo ang 100% fee refund kasabay ng iyong pinakaunang withdrawal.',
    viewProof: 'Tingnan ang Sertipiko',
    timeToPass: ['Pumasa sa loob ng 6 araw', 'Pumasa sa loob ng 9 araw', 'Pumasa sa loob ng 4 araw', 'Pumasa sa loob ng 11 araw'],
    reviews: [
      'Nakuha ko nang buo ang aking $299 registration fee kasabay ng $18,400 na payout. Walang hidden fees, napakababa ng gold spreads.',
      'Naipasa ko ang $100K challenge sa loob ng 9 araw. Walang minimum trading days kaya nakapag-trade ako nang walang stress.',
      'Nakatipid ako ng maraming linggo sa Instant Hero. May funded account agad at direct withdrawals na may patas na profit split.',
      'Ang $200K 2-Step challenge na may 8% static drawdown nang walang trailing traps ay nagbigay sa akin ng kapanatagan sa swing trades.',
    ],
  },
  hi: {
    title: 'इन स्तरों को सफलतापूर्वक पास करने वाले ट्रेडर्स',
    subtitle: 'पंजीकरण शुल्क व्यर्थ नहीं जाता। आपको अपने पहले लाभ पेआउट के साथ 100% शुल्क वापस मिल जाता है।',
    viewProof: 'प्रमाणपत्र देखें',
    timeToPass: ['6 दिनों में उत्तीर्ण', '9 दिनों में उत्तीर्ण', '4 दिनों में उत्तीर्ण', '11 दिनों में उत्तीर्ण'],
    reviews: [
      'मुझे $18,400 के पेआउट के साथ मेरा पूरा $299 शुल्क वापस मिला। कोई छिपा हुआ शुल्क नहीं, सोने पर बहुत कम स्प्रेड।',
      'मैंने 9 दिनों में $100K चैलेंज पास कर लिया। कोई न्यूनतम दिन आवश्यक न होने से धैर्यपूर्वक ट्रेडिंग करने में मदद मिली।',
      'Instant Hero ने मेरे कई हफ्ते बचाए। तुरंत फंडेड खाता और शानदार लाभ विभाजन के साथ सीधे पेआउट।',
      'बिना ट्रेलिंग जाल के 8% स्थिर ड्रॉडाउन वाले $200K 2-Step खाते ने मुझे स्विंग ट्रेडिंग में पूरी सुरक्षा दी।',
    ],
  },
  ko: {
    title: '해당 챌린지 패키지를 당당히 통과한 실전 트레이더',
    subtitle: '초기 지불한 응시료는 소멸되지 않습니다. 첫 번째 수익 출금 집행 시 100% 전액이 계좌로 즉시 환급됩니다.',
    viewProof: '인증서 확인',
    timeToPass: ['6일 만에 합격', '9일 만에 합격', '4일 만에 합격', '11일 만에 합격'],
    reviews: [
      '$18,400 수익 출금 승인과 동시에 $299 응시료가 100% 전액 환급되었습니다. 숨겨진 수수료가 전혀 없고 골드 스프레드가 환상적입니다.',
      '9일 만에 $100,000 챌린지에 합격했습니다. 최소 거래일 의무가 없어서 조급함 없이 원칙대로 매매할 수 있었습니다.',
      'Instant Hero 덕분에 몇 주간의 시험 스트레스를 아꼈습니다. 즉시 펀딩되어 정당한 수익금을 지연 없이 정산받았습니다.',
      '트레일링 함정 없이 8% 원금 고정 드로우다운을 제공하는 $200K 2-Step 패키지 덕분에 장기 스윙 포지션을 마음 편히 유지할 수 있었습니다.',
    ],
  },
  ru: {
    title: 'Трейдеры, успешно прошедшие эти программы',
    subtitle: 'Вступительный взнос не сгорает. Вы получаете 100% возврат средств вместе со своей первой выплатой прибыли.',
    viewProof: 'Смотреть сертификат',
    timeToPass: ['Сдал за 6 дней', 'Сдал за 9 дней', 'Сдал за 4 дня', 'Сдал за 11 дней'],
    reviews: [
      'Получил полный возврат взноса $299 вместе с выплатой $18 400. Никаких скрытых комиссий, отличные спреды по золоту.',
      'Прошел челлендж на $100K за 9 дней. Отсутствие обязательных торговых дней позволило спокойно дожидаться лучших сетапов.',
      'Instant Hero сэкономил мне недели. Моментальный доступ к капиталу и прямые выплаты с отличным распределением прибыли.',
      'Модель $200K 2-Step со статическим drawdown 8% без ловушек трейлинга дала мне полную уверенность в сделках.',
    ],
  },
  ar: {
    title: 'متداولون اجتازوا هذه الباقات بنجاح',
    subtitle: 'رسوم الاشتراك ليست خسارة. ستسترد 100% من رسوم التقييم كاملة مع أول سحب لأرباحك.',
    viewProof: 'عرض الشهادة',
    timeToPass: ['اجتاز خلال 6 أيام', 'اجتاز خلال 9 أيام', 'اجتاز خلال 4 أيام', 'اجتاز خلال 11 يوماً'],
    reviews: [
      'استرددت رسوم الاشتراك 299$ بالكامل مع أول سحب بقيمة 18,400$. لا توجد رسوم خفية، وسبريد الذهب فائق الضيق.',
      'اجتزت تحدي 100K خلال 9 أيام. عدم وجود حد أدنى لأيام التداول منحني هدوءاً وانضباطاً كاملاً في التداول.',
      'وفر علي حساب Instant Hero أسابيع من الاختبارات. حساب ممول فوري وسحوبات مباشرة مع نسبة أرباح عادلة.',
      'باقة 2-Step بقيمة 200K مع تراجع ثابت 8% بدون فخ التراجع المتحرك منحتني أماناً كبيراً في الصفقات المتأرجحة.',
    ],
  },
  nl: {
    title: 'Handelaren Die Deze Pakketten Hebben Behaald',
    subtitle: 'Inschrijfkosten gaan niet verloren. U ontvangt 100% van het inschrijfgeld terug bij uw eerste winstuitbetaling.',
    viewProof: 'Bekijk Certificaat',
    timeToPass: ['Geslaagd in 6 dagen', 'Geslaagd in 9 dagen', 'Geslaagd in 4 dagen', 'Geslaagd in 11 dagen'],
    reviews: [
      'Ik ontving mijn volledige $299 inschrijfgeld terug samen met mijn $18.400 uitbetaling. Geen verborgen kosten, uitstekende spreads.',
      'Geslaagd voor de $100K challenge in 9 dagen. Geen verplichte minimumdagen, waardoor ik met totale rust kon handelen.',
      'Instant Hero heeft me weken gescheeld. Direct een gefinancierd account en directe uitbetalingen met een eerlijke winstverdeling.',
      'Het $200K 2-Step programma met 8% statische drawdown zonder trailing gaf mij maximale zekerheid tijdens swing trades.',
    ],
  },
};

let code = fs.readFileSync('components/eracex/PricingTraderReviews.tsx', 'utf8').replace(/\r\n/g, '\n');

// Replace headerTitle ternary
const titleTernary = `{currentLang === 'vi' 
              ? 'Trader Đã Vượt Qua Các Gói Vốn Này' 
              : currentLang === 'zh' 
              ? '成功通关并获得资助的优秀交易员' 
              : currentLang === 'ja' 
              ? '各プランの合格トレーダー実績' 
              : 'Traders Who Passed These Tiers'}`;

// Replace subtitle ternary
const subTernary = `{currentLang === 'vi'
              ? 'Chi phí đăng ký gói thi không phải là khoản chi mất đi. Bạn sẽ nhận lại 100% lệ phí thi ngay khi có khoản rút lợi nhuận đầu tiên.'
              : currentLang === 'zh'
              ? '查看真实通关交易员官方认证凭单、100% 报名费退还凭据以及实盘利润出金凭证。'
              : currentLang === 'ja'
              ? 'ERACEX で合格したトレーダーの公式認定証と、初回出金時の100%受験料返還の実績です。'
              : 'Your evaluation fee is 100% reimbursed alongside your very first withdrawal. See real proofs from funded traders below.'}`;

// Replace viewProof ternary
const viewProofTernary = `{currentLang === 'vi' ? 'Xem Chứng Chỉ' : currentLang === 'zh' ? '查看通关凭证' : currentLang === 'ja' ? '認定証を見る' : 'View Proof'}`;

// Create dictionary constant
const dictStr = `const PRICING_REVIEWS_DICT: Record<string, {
  title: string;
  subtitle: string;
  viewProof: string;
  timeToPass: string[];
  reviews: string[];
}> = ${JSON.stringify(reviewsLangs, null, 2)};\n\n`;

// Insert dictionary before export const PricingTraderReviews
code = code.replace('export const PricingTraderReviews: React.FC', dictStr + 'export const PricingTraderReviews: React.FC');

// Inside component, get localized reviews
code = code.replace('const { currentLang } = useLanguage();', `const { currentLang } = useLanguage();
  const dReviews = PRICING_REVIEWS_DICT[currentLang] || null;`);

code = code.replace(titleTernary, '{dReviews ? dReviews.title : (currentLang === "vi" ? "Trader Đã Vượt Qua Các Gói Vốn Này" : currentLang === "zh" ? "成功通关并获得资助的优秀交易员" : currentLang === "ja" ? "各プランの合格トレーダー実績" : "Traders Who Passed These Tiers")}');

code = code.replace(subTernary, '{dReviews ? dReviews.subtitle : (currentLang === "vi" ? "Chi phí đăng ký gói thi không phải là khoản chi mất đi. Bạn sẽ nhận lại 100% lệ phí thi ngay khi có khoản rút lợi nhuận đầu tiên." : currentLang === "zh" ? "查看真实通关交易员官方认证凭单、100% 报名费退还凭据以及实盘利润出金凭证。" : currentLang === "ja" ? "ERACEX で合格したトレーダーの公式認定証と、初回出金時の100%受験料返還の実績です。" : "Your evaluation fee is 100% reimbursed alongside your very first withdrawal. See real proofs from funded traders below.")}');

code = code.replace(viewProofTernary, '{dReviews ? dReviews.viewProof : (currentLang === "vi" ? "Xem Chứng Chỉ" : currentLang === "zh" ? "查看通关凭证" : currentLang === "ja" ? "認定証を見る" : "View Proof")}');

// Update item.timeToPass & item.review to pick from dReviews if available
code = code.replace('{item.timeToPass}', '{dReviews ? dReviews.timeToPass[idx] : item.timeToPass}');
code = code.replace('&ldquo;{item.review}&rdquo;', '&ldquo;{dReviews ? dReviews.reviews[idx] : item.review}&rdquo;');

fs.writeFileSync('components/eracex/PricingTraderReviews.tsx', code, 'utf8');
console.log('Successfully updated PricingTraderReviews.tsx with 19 languages');
