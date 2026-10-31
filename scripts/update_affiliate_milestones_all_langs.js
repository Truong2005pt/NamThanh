const fs = require('fs');

const filePath = 'components/eracex/AffiliateMilestonesFaq.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const MILESTONES_DICT = `
const MILESTONES_DATA = [
  {
    target: 7000,
    value: 150,
    names: {
      vi: ['Ghế gaming cao cấp', 'Ghế Gaming'],
      en: ['Premium Gaming Chair', 'Gaming Chair'],
      zh: ['顶级电竞工学椅', '专业电竞椅'],
      ja: ['高級ゲーミングチェア', 'ゲーミングチェア'],
      ko: ['프리미엄 게이밍 체어', '게이밍 체어'],
      es: ['Silla Gaming Premium', 'Silla Gaming'],
      pt: ['Cadeira Gamer Premium', 'Cadeira Gamer'],
      fr: ['Fauteuil Gaming Haut de Gamme', 'Fauteuil Gaming'],
      de: ['Premium Gaming-Stuhl', 'Gaming-Stuhl'],
      ru: ['Премиальное геймерское кресло', 'Геймерское кресло'],
      it: ['Sedia Gaming Premium', 'Sedia Gaming'],
      ar: ['كرسي ألعاب احترافي فاخر', 'كرسي ألعاب'],
      tr: ['Premium Oyuncu Koltuğu', 'Oyuncu Koltuğu'],
      th: ['เก้าอี้เกมมิ่งระดับพรีเมียม', 'เก้าอี้เกมมิ่ง'],
      id: ['Kursi Gaming Premium', 'Kursi Gaming'],
      hi: ['प्रीमियम गेमिंग चेयर', 'गेमिंग चेयर'],
      pl: ['Fotel Gamingowy Premium', 'Fotel Gamingowy'],
      nl: ['Premium Gaming Stoel', 'Gaming Stoel'],
      fil: ['Premium Gaming Chair', 'Gaming Chair']
    }
  },
  {
    target: 15000,
    value: 300,
    names: {
      vi: ['AirPods Pro 2 hoặc màn hình UltraWide 34"', 'Bộ nâng cấp công nghệ'],
      en: ['AirPods Pro 2 or 34" UltraWide Monitor', 'Tech Upgrade Kit'],
      zh: ['AirPods Pro 2 或 34寸带鱼屏显示器', '数码极客装备套件'],
      ja: ['AirPods Pro 2 または 34インチ ウルトラワイドモニター', 'テックアップグレードキット'],
      ko: ['AirPods Pro 2 또는 34인치 울트라와이드 모니터', '테크 업그레이드 키트'],
      es: ['AirPods Pro 2 o Monitor UltraWide de 34"', 'Kit de Actualización Tecnológica'],
      pt: ['AirPods Pro 2 ou Monitor UltraWide de 34"', 'Kit de Upgrade Tecnológico'],
      fr: ['AirPods Pro 2 ou Écran UltraWide 34"', 'Kit d\\'Upgrade Tech'],
      de: ['AirPods Pro 2 oder 34" UltraWide Monitor', 'Tech-Upgrade-Paket'],
      ru: ['AirPods Pro 2 или 34" UltraWide монитор', 'Технический апгрейд-кит'],
      it: ['AirPods Pro 2 o Monitor UltraWide da 34"', 'Kit di Aggiornamento Tech'],
      ar: ['سماعات AirPods Pro 2 أو شاشة UltraWide مقاس 34 بوصة', 'باقة الترقية التقنية'],
      tr: ['AirPods Pro 2 veya 34" UltraWide Monitör', 'Teknoloji Yükseltme Kiti'],
      th: ['AirPods Pro 2 หรือ จอภาพ UltraWide 34 นิ้ว', 'ชุดอัปเกรดเทคโนโลยี'],
      id: ['AirPods Pro 2 atau Monitor UltraWide 34"', 'Paket Upgrade Teknologi'],
      hi: ['AirPods Pro 2 या 34" अल्ट्रावाइड मॉनिटर', 'टेक अपग्रेड किट'],
      pl: ['AirPods Pro 2 lub Monitor UltraWide 34"', 'Zestaw Modernizacji Technologicznej'],
      nl: ['AirPods Pro 2 of 34" UltraWide Monitor', 'Tech Upgrade Kit'],
      fil: ['AirPods Pro 2 o 34" UltraWide Monitor', 'Tech Upgrade Kit']
    }
  },
  {
    target: 75000,
    value: 2500,
    names: {
      vi: ['MacBook Pro M-Series mới nhất', 'Máy trạm mạnh mẽ'],
      en: ['MacBook Pro M-Series Workstation', 'Power Workstation'],
      zh: ['最新款 MacBook Pro 旗舰工作站', '强劲旗舰工作站'],
      ja: ['最新 MacBook Pro Mシリーズ', 'ハイパワーワークステーション'],
      ko: ['최신 MacBook Pro M시리즈 워크스테이션', '파워 워크스테이션'],
      es: ['MacBook Pro M-Series de Última Generación', 'Estación de Trabajo Potente'],
      pt: ['MacBook Pro M-Series Mais Recente', 'Workstation de Alta Potência'],
      fr: ['MacBook Pro M-Series Dernière Génération', 'Station de Travail Haute Performance'],
      de: ['Neuestes MacBook Pro M-Series', 'Leistungsstarke Workstation'],
      ru: ['Новейший MacBook Pro серии M', 'Мощная рабочая станция'],
      it: ['Nuovissimo MacBook Pro Serie M', 'Workstation ad Alte Prestazioni'],
      ar: ['أحدث أجهزة MacBook Pro بمعالجات M', 'محطة عمل فائقة القوة'],
      tr: ['En Son Model MacBook Pro M-Serisi', 'Güçlü İş İstasyonu'],
      th: ['MacBook Pro ซีรีส์ M รุ่นล่าสุด', 'เวิร์กสเตชันประสิทธิภาพสูง'],
      id: ['MacBook Pro M-Series Terbaru', 'Workstation Bertenaga Tinggi'],
      hi: ['नवीनतम MacBook Pro M-श्रृंखला', 'शक्तिशाली वर्कस्टेशन'],
      pl: ['Najnowszy MacBook Pro Serii M', 'Wydajna Stacja Robocza'],
      nl: ['Nieuwste MacBook Pro M-Serie', 'Krachtig Werkstation'],
      fil: ['Pinakabagong MacBook Pro M-Series', 'Power Workstation']
    }
  },
  {
    target: 250000,
    value: 18000,
    names: {
      vi: ['Đồng hồ Rolex Submariner Date', 'Đồng hồ danh giá'],
      en: ['Rolex Submariner Date Luxury Watch', 'Prestige Watch'],
      zh: ['劳力士潜航者日历型腕表（黑水鬼）', '至尊荣誉名表'],
      ja: ['ロレックス サブマリーナー デイト 高級時計', '最高峰プレステージウォッチ'],
      ko: ['롤렉스 서브마리너 데이트 명품 시계', '최고의 프레스티지 워치'],
      es: ['Reloj de Lujo Rolex Submariner Date', 'Reloj de Prestigio'],
      pt: ['Relógio de Luxo Rolex Submariner Date', 'Relógio de Prestígio'],
      fr: ['Montre de Luxe Rolex Submariner Date', 'Montre de Prestige'],
      de: ['Rolex Submariner Date Luxusuhr', 'Prestige-Armbanduhr'],
      ru: ['Роскошные часы Rolex Submariner Date', 'Престижные часы'],
      it: ['Orologio di Lusso Rolex Submariner Date', 'Orologio di Prestigio'],
      ar: ['ساعة رولكس صبمارينر ديت الفاخرة', 'ساعة النخبة والمكانة'],
      tr: ['Rolex Submariner Date Lüks Saat', 'Prestij Saati'],
      th: ['นาฬิกาหรู Rolex Submariner Date', 'นาฬิกาแห่งเกียรติยศ'],
      id: ['Jam Tangan Mewah Rolex Submariner Date', 'Jam Tangan Prestisius'],
      hi: ['रोलेक्स सबमरीन डेट लक्जरी घड़ी', 'प्रतिष्ठित घड़ी'],
      pl: ['Luksusowy Zegarek Rolex Submariner Date', 'Zegarek Prestiżowy'],
      nl: ['Rolex Submariner Date Luxe Horloge', 'Prestige Horloge'],
      fil: ['Rolex Submariner Date Luxury Watch', 'Prestige Watch']
    }
  }
];

const FAQ_ALL_LANGS: Record<string, [string, string][]> = {
  vi: [
    ['Cơ cấu hoa hồng hoạt động thế nào?', 'Bạn nhận hoa hồng dựa trên hoạt động của khách được giới thiệu. Tỷ lệ tăng khi đạt các mốc giới thiệu, kèm thưởng cột mốc và đặc quyền đối tác ở các bậc cao.'],
    ['Làm sao để tăng tỷ lệ hoa hồng?', 'Tỷ lệ tự động tăng khi bạn đạt số lượt giới thiệu của từng bậc. Càng giới thiệu nhiều, thu nhập tiềm năng càng cao.'],
    ['Ngoài hoa hồng còn có thưởng không?', 'Có. Thưởng cột mốc được trả thêm ngoài hoa hồng thông thường khi bạn đạt doanh thu mục tiêu.'],
    ['Ngưỡng rút tối thiểu là bao nhiêu?', 'Số tiền tối thiểu để yêu cầu chi trả hoa hồng là $100.'],
    ['Có giới hạn thu nhập không?', 'Không giới hạn. Thu nhập phụ thuộc vào số khách hoạt động bạn giới thiệu và bậc hoa hồng của bạn.']
  ],
  en: [
    ['How does the compensation structure work?', 'You earn commission on referred client activity. Rates rise as you hit referral milestones, with milestone bonuses and partner perks at higher tiers.'],
    ['How do I increase my commission rate?', 'Your rate rises automatically as you reach each tier\\'s referral count. The more clients you refer, the higher your earning potential.'],
    ['Are there bonuses in addition to commissions?', 'Yes. Milestone bonuses are paid on top of regular commissions once you reach the revenue targets.'],
    ['Is there a minimum payout threshold?', 'Yes. The minimum amount to request an affiliate payout is $100.'],
    ['Is there a limit to how much I can earn?', 'No cap. Income depends on the number of active clients you refer and your commission tier.']
  ],
  zh: [
    ['返佣结算体系是如何运作的？', '您可以从推荐客户的每一笔评估费中获得丰厚返佣。达到对应门槛后费率自动提升，并在更高层级解锁丰厚里程碑大奖及独家VIP合伙人特权。'],
    ['如何提高我的返佣比例？', '当您的有效推荐人数或销售额达标时，佣金比例将全自动上调。推荐越多，佣金收入越可观。'],
    ['除常规返佣外是否有额外里程碑奖励？', '是的。一旦您达成本计划设定的阶段目标，除了原有高额返佣外，还将额外获得实物大奖或等值现金奖励。'],
    ['返佣出金的最低门槛是多少？', '返佣申请最低提现门槛仅为 $100。'],
    ['合伙人收益有上限吗？', '完全没有上限。您的收入完全取决于您推广的活跃交易员数量及您所处的佣金层级。']
  ],
  ja: [
    ['報酬体系はどのように機能しますか？', 'ご紹介いただいたトレーダーのアクティビティに基づいてコミッションを獲得できます。紹介件数が増えるにつれて料率が自動で引き上げられ、高ランクでは特別ボーナスやVIP特典が付与されます。'],
    ['コミッション率を引き上げるにはどうすればよいですか？', '各ランクの紹介条件を達成すると、報酬率は自動的にアップグレードされます。ご紹介数が増えるほど高収益が期待できます。'],
    ['コミッション以外の追加ボーナスはありますか？', 'はい。売上目標マイルストーンに到達すると、通常の報酬に加えて豪華マイルストーンボーナスが上乗せ支給されます。'],
    ['報酬出金の最低引き出し額はいくらですか？', 'アフィリエイト報酬の最低出金申請額は $100 です。'],
    ['獲得報酬に上限はありますか？', '上限はありません。獲得額はご紹介いただいたアクティブなトレーダー数とランク料率に応じて無制限です。']
  ],
  ko: [
    ['수수료 보상 체계는 어떻게 운영되나요?', '추천한 트레이더의 결제 활동에 따라 커미션을 지급받습니다. 추천 실적이 쌓일수록 수수료율이 자동 상향되며, 상위 티어에서는 마일스톤 보너스와 VIP 특권이 제공됩니다.'],
    ['커미션 요율을 올리려면 어떻게 해야 하나요?', '각 등급별 추천 요건을 충족하면 수수료율이 자동으로 인상됩니다. 더 많은 고객을 유치할수록 잠재 수익이 커집니다.'],
    ['기본 수수료 외에 추가 보너스가 있나요?', '네. 목표 누적 매출에 도달할 때마다 일반 커미션 외에 추가로 푸짐한 마일스톤 현물 및 현금 보너스가 지급됩니다.'],
    ['파트너 커미션의 최소 출금 기준은 얼마인가요?', '제휴 파트너 커미션의 최소 출금 신청 금액은 $100입니다.'],
    ['파트너 수익에 한도가 있나요?', '한도는 전혀 없습니다. 수익은 유치한 활성 트레이더 수와 달성한 커미션 등급에 따라 무제한으로 증가합니다.']
  ],
  es: [
    ['¿Cómo funciona la estructura de compensación?', 'Ganas comisiones por la actividad de los clientes que refieras. Las tasas aumentan a medida que alcanzas hitos, con bonos por hitos y ventajas exclusivas en niveles superiores.'],
    ['¿Cómo aumento mi porcentaje de comisión?', 'Tu tasa aumenta automáticamente a medida que alcanzas el número de referidos de cada nivel. Cuantos más clientes refieras, mayor será tu potencial de ingresos.'],
    ['¿Hay bonificaciones además de las comisiones?', 'Sí. Los bonos por hitos se pagan por encima de las comisiones habituales una vez que alcanzas los objetivos de volumen de ventas.'],
    ['¿Existe un umbral mínimo de retiro para afiliados?', 'Sí. El importe mínimo para solicitar un pago de comisiones de afiliado es de $100.'],
    ['¿Hay límite en lo que puedo ganar?', 'Sin límite. Tus ingresos dependen del número de operadores activos que refieras y de tu nivel de comisiones.']
  ],
  pt: [
    ['Como funciona a estrutura de comissões?', 'Você recebe comissões sobre a atividade dos clientes indicados. As porcentagens aumentam ao atingir metas, com bônus de marco e vantagens exclusivas nos níveis mais altos.'],
    ['Como aumentar minha taxa de comissão?', 'Sua taxa sobe automaticamente ao atingir o volume de indicações de cada nível. Quanto mais você indicar, maior será seu potencial de ganhos.'],
    ['Existem bônus além das comissões regulares?', 'Sim. Os bônus de marco são pagos cumulativamente além das comissões regulares quando você atinge as metas de receita estipuladas.'],
    ['Qual é o valor mínimo para solicitar saque?', 'O valor mínimo para solicitar um saque de comissão de afiliado é de $100.'],
    ['Existe limite de ganhos?', 'Não há teto. Seus ganhos dependem exclusivamente do número de traders ativos indicados e do seu nível de parceria.']
  ],
  fr: [
    ['Comment fonctionne la structure de commissionnement ?', 'Vous touchez une commission sur l\\'activité des clients recommandés. Les pourcentages augmentent avec vos paliers de parrainage, assortis de primes d\\'étape et d\\'avantages VIP.'],
    ['Comment augmenter mon taux de commission ?', 'Votre taux progresse automatiquement dès que vous atteignez le seuil de chaque niveau. Plus vous parrainez, plus vos gains potentiels sont élevés.'],
    ['Y a-t-il des primes en plus des commissions ?', 'Oui. Des primes d\\'étape sont versées en supplément des commissions habituelles dès que vous atteignez les objectifs de chiffre d\\'affaires.'],
    ['Quel est le seuil minimum de retrait affilié ?', 'Le montant minimum pour demander un paiement de commissions est de $100.'],
    ['Y a-t-il un plafond à mes gains ?', 'Aucun plafond. Vos revenus dépendent du nombre de clients actifs que vous référez et de votre palier de rémunération.']
  ],
  de: [
    ['Wie funktioniert das Vergütungssystem?', 'Sie verdienen Provisionen auf die Anmeldungen der von Ihnen geworbenen Kunden. Die Provisionssätze steigen mit Erreichen neuer Stufen, inklusive Meilenstein-Boni und VIP-Vorteilen.'],
    ['Wie kann ich meinen Provisionssatz steigern?', 'Ihr Satz erhöht sich automatisch, sobald Sie die jeweilige Empfehlungsanzahl erreichen. Je mehr Trader Sie werben, desto höher Ihr Verdienstpotenzial.'],
    ['Gibt es zusätzliche Boni neben den Provisionen?', 'Ja. Meilenstein-Boni werden zusätzlich zu den regulären Provisionen ausgezahlt, sobald Sie die entsprechenden Umsatzziele erreichen.'],
    ['Gibt es einen Mindestauszahlungsbetrag?', 'Ja. Der Mindestbetrag für eine Auszahlungsanfrage beträgt $100.'],
    ['Gibt es ein Einkommenslimit?', 'Keine Obergrenze. Ihre Einnahmen hängen allein von der Anzahl aktiver Kunden und Ihrer erreichten Partnerstufe ab.']
  ],
  ru: [
    ['Как устроена партнерская программа выплат?', 'Вы получаете комиссионные с каждой оплаты привлеченных клиентов. Процент автоматически повышается при достижении пороговых значений с бонусами за вехи.'],
    ['Как повысить ставку вознаграждения?', 'Ставка растет автоматически по мере увеличения числа ваших рефералов. Чем больше трейдеров вы привлекаете, тем выше доход.'],
    ['Есть ли бонусы помимо стандартных комиссионных?', 'Да. Премии за вехи выплачиваются поверх регулярных комиссий при достижении установленных плановых объемов.'],
    ['Каков минимальный порог для вывода комиссии?', 'Минимальная сумма для подачи заявки на партнерскую выплату составляет $100.'],
    ['Есть ли лимит на заработок?', 'Лимита нет. Ваш доход зависит исключительно от активности привлеченных пользователей и вашего партнерского уровня.']
  ],
  it: [
    ['Come funziona la struttura delle commissioni?', 'Guadagni commissioni sulle quote dei clienti da te presentati. Le percentuali crescono al raggiungimento degli scaglioni, con bonus traguardo e vantaggi esclusivi.'],
    ['Come posso aumentare la mia percentuale?', 'La tua percentuale sale automaticamente non appena raggiungi la soglia di ciascun livello. Più clienti porti, maggiore sarà il guadagno.'],
    ['Ci sono bonus aggiuntivi oltre alle commissioni?', 'Sì. I bonus traguardo vengono erogati in aggiunta alle normali commissioni al raggiungimento degli obiettivi di fatturato.'],
    ['Qual è la soglia minima di prelievo affiliato?', 'La soglia minima per richiedere il pagamento delle commissioni affiliate è di $100.'],
    ['C\\'è un limite massimo ai guadagni?', 'Nessun limite. I guadagni dipendono dal numero di trader attivi referenziati e dal livello di partnership raggiunto.']
  ],
  ar: [
    ['كيف يعمل نظام العمولات والمكافآت؟', 'تكسب عمولة على نشاط واشتراكات العملاء الذين تحيلهم. ترتفع النسب تلقائياً مع وصولك لمراحل الإحالة، مصحوبة بمكافآت كبرى ومزايا حصرية للشركاء.'],
    ['كيف يمكنني زيادة نسبة عمولتي؟', 'ترتفع نسبتك تلقائياً بمجرد وصولك لعدد الإحالات المطلوب لكل مستوى. كلما أحلت عملاء أكثر، تضاعفت أرباحك.'],
    ['هل توجد مكافآت إضافية إلى جانب العمولات؟', 'نعم. تُصرف مكافآت المراحل القياسية بالإضافة إلى عمولاتك الأساسية بمجرد تحقيق أهداف المبيعات المحددة.'],
    ['ما هو الحد الأدنى لسحب أرباح الشركاء؟', 'الحد الأدنى لطلب سحب عمولات برنامج الشركاء هو $100 فقط.'],
    ['هل هناك حد أقصى لما يمكنني كسبه؟', 'لا يوجد سقف للأرباح. يعتمد دخلك كلياً على عدد المتداولين النشطين المحالين ومستواك في البرنامج.']
  ],
  tr: [
    ['Ortaklık komisyon yapısı nasıl çalışır?', 'Yönlendirdiğiniz müşterilerin challenge alımlarından komisyon kazanırsınız. Kademe hedeflerine ulaştıkça oranınız artar, kilometre taşı ödülleri ve VIP ayrıcalıklar açılır.'],
    ['Komisyon oranımı nasıl artırabilirim?', 'Her kademenin gerektirdiği yönlendirme sayısına ulaştığınızda oranınız otomatik yükselir. Daha çok müşteri yönlendirdikçe kazanç potansiyeliniz büyür.'],
    ['Komisyonlara ek olarak ekstra bonus var mı?', 'Evet. Belirlenen gelir hedeflerini aştığınızda, standart komisyonlarınıza ilaveten kilometre taşı bonusları nakit veya ödül olarak verilir.'],
    ['Minimum çekim eşiği ne kadardır?', 'Ortaklık komisyonu çekim talebi için minimum tutar $100\\'dır.'],
    ['Kazanabileceğim tutarda bir sınır var mı?', 'Kesinlikle sınır yok. Kazancınız yönlendirdiğiniz aktif yatırımcı sayısına ve komisyon kademenize bağlı olarak sınırsızdır.']
  ],
  th: [
    ['โครงสร้างค่าคอมมิชชันทำงานอย่างไร?', 'คุณจะได้รับค่าคอมมิชชันจากค่าสมัครของลูกค้าที่คุณแนะนำ อัตราส่วนจะเพิ่มขึ้นอัตโนมัติตามระดับ พร้อมโบนัสพิเศษและสิทธิประโยชน์ VIP'],
    ['ฉันจะเพิ่มเปอร์เซ็นต์ค่าคอมมิชชันได้อย่างไร?', 'อัตราค่าคอมมิชชันของคุณจะเพิ่มขึ้นโดยอัตโนมัติเมื่อยอดแนะนำถึงเกณฑ์ ยิ่งแนะนำมาก รายได้ยิ่งเติบโต'],
    ['มีโบนัสเพิ่มเติมจากค่าคอมมิชชันหรือไม่?', 'มี โบนัสเป้าหมาย (Milestone Bonus) จะจ่ายเพิ่มเติมจากค่าคอมมิชชันปกติเมื่อคุณทำยอดขายถึงเป้าหมายที่กำหนด'],
    ['ยอดถอนขั้นต่ำสำหรับพาร์ทเนอร์คือเท่าไร?', 'ยอดถอนขั้นต่ำในการขอรับเงินคอมมิชชันคือ $100'],
    ['มีการจำกัดรายได้สูงสุดหรือไม่?', 'ไม่จำกัด รายได้ขึ้นอยู่กับจำนวนเทรดเดอร์ที่คุณแนะนำและระดับค่าคอมมิชชันของคุณโดยไม่มีเพดาน']
  ],
  id: [
    ['Bagaimana cara kerja struktur komisi afiliasi?', 'Anda memperoleh komisi dari aktivitas pendaftaran klien yang Anda referensikan. Persentase meningkat seiring pencapaian target, disertai bonus pencapaian dan fasilitas VIP.'],
    ['Bagaimana cara menaikkan persentase komisi saya?', 'Persentase Anda naik otomatis saat mencapai kuota referensi di setiap tingkatan. Semakin banyak klien, semakin besar potensi penghasilan Anda.'],
    ['Apakah ada bonus tambahan selain komisi reguler?', 'Ya. Bonus pencapaian diberikan di atas komisi reguler saat Anda mencapai target pendapatan yang telah ditetapkan.'],
    ['Berapa batas minimum penarikan komisi?', 'Jumlah minimum untuk mengajukan penarikan komisi afiliasi adalah $100.'],
    ['Apakah ada batasan pendapatan?', 'Tidak ada batasan. Penghasilan Anda sepenuhnya bergantung pada jumlah trader aktif yang Anda referensikan dan tingkatan komisi Anda.']
  ],
  hi: [
    ['कमीशन संरचना कैसे काम करती है?', 'आप अपने रेफर किए गए ग्राहकों की गतिविधियों पर कमीशन कमाते हैं। जैसे-जैसे आप लक्ष्यों को पूरा करते हैं, कमीशन दरें बढ़ती हैं, साथ ही उच्च स्तरों पर माइलस्टोन बोनस मिलते हैं।'],
    ['मैं अपनी कमीशन दर कैसे बढ़ा सकता हूँ?', 'जैसे ही आप प्रत्येक स्तर की रेफरल संख्या तक पहुँचते हैं, आपकी दर स्वतः बढ़ जाती है। जितने अधिक ग्राहक आप लाएंगे, उतनी ही अधिक कमाई होगी।'],
    ['क्या कमीशन के अतिरिक्त बोनस भी हैं?', 'हाँ। जब आप राजस्व लक्ष्यों तक पहुँचते हैं, तो नियमित कमीशन के अलावा माइलस्टोन बोनस भी प्रदान किए जाते हैं।'],
    ['न्यूनतम निकासी सीमा कितनी है?', 'एफिलिएट कमीशन निकासी का अनुरोध करने के लिए न्यूनतम राशि $100 है।'],
    ['क्या मेरी कमाई की कोई सीमा है?', 'कोई सीमा नहीं है। आपकी आय पूरी तरह से आपके द्वारा संदर्भित सक्रिय ट्रेडर्स की संख्या और आपके स्तर पर निर्भर करती है।']
  ],
  pl: [
    ['Jak działa struktura prowizyjna programu partnerskiego?', 'Zarabiasz prowizję od aktywności poleconych klientów. Stawki rosną wraz ze zdobywaniem kolejnych poziomów, z bonusami kamieni milowych i przywilejami VIP.'],
    ['Jak mogę zwiększyć swoją stawkę prowizji?', 'Twoja stawka rośnie automatycznie po osiągnięciu progu poleceń dla danego poziomu. Im więcej klientów polecasz, tym wyższy potencjał zarobkowy.'],
    ['Czy oprócz prowizji przysługują dodatkowe bonusy?', 'Tak. Bonusy za kamienie milowe są wypłacane dodatkowo oprócz standardowych prowizji po osiągnięciu celów przychodowych.'],
    ['Jaki jest minimalny próg wypłaty prowizji?', 'Minimalna kwota do złożenia wniosku o wypłatę prowizji wynosi $100.'],
    ['Czy istnieje limit zarobków?', 'Brak limitu. Twoje dochody zależą wyłącznie od liczby aktywnych traderów i Twojego poziomu prowizyjnego.']
  ],
  nl: [
    ['Hoe werkt de commissiestructuur?', 'U verdient commissie over de bestedingen van door u aangebrachte klanten. De percentages stijgen naarmate u hogere niveaus bereikt, inclusief mijlpaalbonussen en VIP-voordelen.'],
    ['Hoe kan ik mijn commissiepercentage verhogen?', 'Uw percentage stijgt automatisch wanneer u het vereiste aantal doorverwijzingen bereikt. Hoe meer klanten u aanbrengt, hoe hoger uw verdienpotentieel.'],
    ['Zijn er bonussen naast de reguliere commissies?', 'Ja. Mijlpaalbonussen worden bovenop de reguliere commissies uitgekeerd zodra u de vastgestelde omzetdoelen behaalt.'],
    ['Wat is de minimale uitbetalingsdrempel?', 'Het minimale bedrag om een uitbetaling van partnercommissie aan te vragen is $100.'],
    ['Is er een limiet aan wat ik kan verdienen?', 'Geen enkel limiet. Uw inkomsten zijn onbeperkt en afhankelijk van het aantal actieve traders dat u aanbrengt en uw commissieniveau.']
  ],
  fil: [
    ['Paano gumagana ang compensation structure?', 'Kumikita ka ng komisyon mula sa aktibidad ng mga na-refer mong kliyente. Tumataas ang porsyento habang naabot ang mga milestone, may kasamang bonus at VIP perks.'],
    ['Paano ko maitataas ang aking commission rate?', 'Kusang tumataas ang iyong rate kapag naabot mo ang referral count ng bawat antas. Mas marami kang i-refer, mas mataas ang iyong kita.'],
    ['May mga bonus ba bukod sa komisyon?', 'Oo. Ang mga milestone bonus ay ibinibigay bilang karagdagan sa regular na komisyon kapag naabot mo ang target na volume.'],
    ['Magkano ang minimum payout threshold?', 'Ang minimum na halaga para mag-request ng affiliate payout ay $100.'],
    ['May limitasyon ba ang pwede kong kitain?', 'Walang limitasyon. Nakadepende ang iyong kita sa dami ng aktibong kliyente na maipapasok mo at sa iyong antas ng komisyon.']
  ]
};
`;

// Replace MILESTONES and FAQ definitions
const targetStart = 'const MILESTONES = [';
const targetEnd = 'const UI_DICT: Record<string, typeof uiDict.en> = {';

const originalSection = content.substring(content.indexOf(targetStart), content.indexOf(targetEnd));
content = content.replace(originalSection, MILESTONES_DICT + '\n');

// Update inside AffiliateMilestonesFaq component
content = content.replace(
  'const { currentLang } = useLanguage();\n  const vi = currentLang === \'vi\';\n  const [open, setOpen] = useState<number | null>(0);\n  const faq = vi ? FAQ.vi : FAQ.en;\n  const ui = UI_DICT[currentLang] || UI_DICT[\'en\'];',
  `const { currentLang } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);
  const faq = FAQ_ALL_LANGS[currentLang] || FAQ_ALL_LANGS['en'];
  const ui = UI_DICT[currentLang] || UI_DICT['en'];`
);

content = content.replace(
  'const [reward, name] = vi ? m.vi : m.en;',
  `const localizedNames = m.names[currentLang as keyof typeof m.names] || m.names['en'];
              const [reward, name] = localizedNames;`
);

content = content.replace(
  '{MILESTONES.map((m, i) => {',
  '{MILESTONES_DATA.map((m, i) => {'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated AffiliateMilestonesFaq.tsx with all 19 languages');
