const fs = require('fs');

const filePath = 'components/eracex/BlogSection.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const BLOG_CONTENT_DICT = `
const BLOG_SECTION_DICT: Record<string, {
  post1ReadTime: string;
  post1Content: string[];
  post2ReadTime: string;
  post2Content: string[];
  post3ReadTime: string;
  post3Content: string[];
}> = {
  vi: {
    post1ReadTime: '6 phút đọc',
    post1Content: [
      'Một trong những sai lầm phổ biến nhất của các nhà giao dịch khi tham gia thi tuyển quỹ là tâm lý muốn vượt qua mục tiêu lợi nhuận trong thời gian quá ngắn.',
      'Tại ERACEX, chúng tôi thiết kế mức sụt giảm tối đa trong ngày là 5% nhằm mục đích rèn luyện tính kỷ luật. Lời khuyên vàng từ các trader cấp vốn thành công: Mỗi lệnh giao dịch chỉ nên mạo hiểm từ 0.5% đến tối đa 1% tài khoản.',
      'Khi bạn giữ mức rủi ro 0.5%/lệnh, bạn cần thua liên tiếp 10 lệnh mới chạm ngưỡng sụt giảm ngày. Điều này mang lại sự tự tin, giúp bạn bình tĩnh chờ đợi các cơ hội vào lệnh có tỷ lệ R:R cao (Risk to Reward từ 1:2 trở lên).'
    ],
    post2ReadTime: '4 phút đọc',
    post2Content: [
      'Nhiều quỹ truyền thống yêu cầu nhà giao dịch phải vào lệnh tối thiểu 5 hoặc 10 ngày. Điều này vô tình tạo ra tâm lý "giao dịch cho đủ số ngày", dẫn đến các lệnh cẩu thả với khối lượng nhỏ.',
      'ERACEX tin rằng trader giỏi là người biết kiên nhẫn chờ thời cơ. Nếu bạn đạt mục tiêu 8% chỉ sau 1 lệnh Swing Trading chất lượng, bạn xứng đáng được cấp vốn ngay lập tức!',
      'Ngược lại, nếu thị trường sideway không rõ xu hướng, bạn hoàn toàn có thể đứng ngoài quan sát cả tuần mà không sợ bị hủy tài khoản vì không đủ ngày giao dịch.'
    ],
    post3ReadTime: '5 phút đọc',
    post3Content: [
      'Chương trình Scaling Plan tại ERACEX được xây dựng nhằm tìm kiếm và đồng hành lâu dài cùng các nhà giao dịch có phong độ ổn định.',
      'Mỗi chu kỳ 4 tháng, chỉ cần bạn tạo ra tối thiểu 10% lợi nhuận lũy kế và thực hiện ít nhất 2 lần rút tiền, quy mô tài khoản của bạn sẽ tự động được cấp thêm 25% vốn bổ sung.',
      'Tỷ lệ chia lợi nhuận cũng được tăng dần từ 80% lên mức tối đa 90%, đưa bạn từ một trader cá nhân trở thành nhà quản lý quỹ thực thụ.'
    ]
  },
  en: {
    post1ReadTime: '6 min read',
    post1Content: [
      'One of the most frequent pitfalls among prop challenge participants is the urge to reach profit targets aggressively in record time.',
      'At ERACEX, the 5% daily drawdown rule is engineered specifically to instill disciplined capital management. Proven funded traders follow one golden rule: never risk more than 0.5% to 1% of total equity per individual trade.',
      'With a 0.5% risk profile per trade, a trader would need 10 consecutive catastrophic losses to violate the daily drawdown threshold. This cushion fosters psychological clarity, allowing you to patiently wait for high-probability setups with favorable Risk-to-Reward profiles.'
    ],
    post2ReadTime: '4 min read',
    post2Content: [
      'Legacy prop firms commonly mandate 5 to 10 minimum trading days. This constraint often triggers counterproductive micro-trades placed purely to tick artificial boxes.',
      'ERACEX believes true edge lies in selective execution. If you achieve an 8% profit target on a single high-conviction swing position, you deserve instantaneous qualification!',
      'Conversely, if market conditions are range-bound and choppy, you are free to sit on your hands for days or weeks without fear of challenge expiration.'
    ],
    post3ReadTime: '5 min read',
    post3Content: [
      'The ERACEX Capital Scaling Plan is structured to foster long-term partnerships with consistently profitable market operators.',
      'Every 4-month cycle, achieving a cumulative 10% net gain alongside at least two processed withdrawals triggers an automatic +25% capital allocation boost.',
      'Profit share simultaneously steps up to our maximum 90% bracket, transforming talented retail traders into bona fide simulated fund managers.'
    ]
  },
  zh: {
    post1ReadTime: '6 分钟阅读',
    post1Content: [
      '自营考核参与者最常见的致命误区之一，是急于求成、试图以激进重仓在极短时间内冲关达标。',
      '在 ERACEX，5% 单日最大回撤规则旨在培养严谨的资金管理素养。顶级签约交易员的黄金法则：单笔交易风险严格控制在 0.5% 至 1% 以内。',
      '在 0.5% 的单笔风控下，连续遭遇 10 次亏损才会触及单日警戒线。这为交易员提供了从容的心态，耐性捕捉盈亏比 1:2 以上的高胜率波段机会。'
    ],
    post2ReadTime: '4 分钟阅读',
    post2Content: [
      '传统自营公司往往强制定下 5 到 10 个最少交易日限制，导致交易员为了凑天数而频繁进行毫无逻辑的无意义超轻仓刷单。',
      'ERACEX 坚信真正的交易优势源于耐心等待与精准狙击。如果您通过一笔高质量的波段交易迅速达成 8% 目标，您完全理应立即通关晋级！',
      '反之，当市场处于混沌震荡周期时，您可以空仓观望数天乃至数周，绝无因交易日不足而违规作废的后顾之忧。'
    ],
    post3ReadTime: '5 分钟阅读',
    post3Content: [
      'ERACEX 规模化资金扩充计划（Scaling Plan）专为寻找并长期扶持具备稳健复利能力的职业交易员而设计。',
      '每满 4 个月周期，只要累计实现 10% 净利润并成功完成至少 2 次出金，账户资金规模将自动追加 +25% 额度。',
      '利润分成比例同步提升至行业顶尖的 90%，助力零售交易员无缝蜕变为掌管数百万美元的真正职业操盘手。'
    ]
  },
  ja: {
    post1ReadTime: '読了目安 6分',
    post1Content: [
      'プロップファームのチャレンジ参加者が陥りがちな最大の過ちは、短期間で急いで利益目標を達成しようとする焦りです。',
      'ERACEXの5%日次ドローダウン規則は、厳格な資金管理の規律を身につけるために設計されています。合格トレーダーの鉄則：1トレードのリスクは資金の0.5%〜最大1%に抑えることです。',
      '1トレードあたりのリスクを0.5%に管理すれば、10回連続で損切りにならない限り日次制限には達しません。この心理的余裕が、リスクリワード1:2以上の好機を冷静に待つ力を育みます。'
    ],
    post2ReadTime: '読了目安 4分',
    post2Content: [
      '従来のファームでは5〜10日間の最低取引日数が課され、日数を満たすためだけの杜撰なポジポジ病が誘発されていました。',
      'ERACEXは、真のエッジは好機を待つ選別力にあると考えます。1回のスイングトレードで8%の目標を達成した場合、即座に合格・資金提供を受ける権利があります。',
      '逆に相場が方向感を欠くレンジ相場であれば、失効を恐れることなく数日間完全にノーポジで静観することが可能です。'
    ],
    post3ReadTime: '読了目安 5分',
    post3Content: [
      'ERACEXのスケーリングプランは、安定したパフォーマンスを発揮するトレーダーと長期的なパートナーシップを築くために設計されています。',
      '4ヶ月のサイクルで累計10%以上の利益を達成し、2回以上の出金を完了するごとに、運用残高が自動的に+25%増額されます。',
      '利益配分率も最大90%まで引き上げられ、個人トレーダーから機関投資家レベルのファンドマネージャーへと成長できます。'
    ]
  },
  ko: {
    post1ReadTime: '6분 읽기',
    post1Content: [
      '프랍 챌린지 참가자들의 가장 흔한 실수는 너무 짧은 시간 안에 무리하게 목표 수익률을 달성하려는 조급함입니다.',
      'ERACEX의 5% 일일 최대 손실 규칙은 철저한 자금 관리 원칙을 훈련하도록 설계되었습니다. 합격 트레이더들의 황금률: 거래당 계정의 0.5%~1% 이하로 리스크를 엄격히 제한하십시오.',
      '거래당 0.5% 리스크를 유지하면 10번 연속 패배해야 일일 한도에 도달합니다. 이 심리적 완충 장치는 손익비 1:2 이상의 고확률 자리를 차분히 기다릴 수 있게 해줍니다.'
    ],
    post2ReadTime: '4분 읽기',
    post2Content: [
      '기존 프랍펌들은 흔히 5일에서 10일의 최소 거래일수를 강제하여 날짜를 채우기 위한 무의미한 억지 매매를 유발했습니다.',
      'ERACEX는 진정한 트레이더의 실력이 인내심에 있다고 믿습니다. 한 번의 훌륭한 스윙 트레이딩으로 8% 목표를 달성했다면 즉시 합격 자격이 주어집니다!',
      '반대로 시장이 횡보 장세일 때는 거래일수 부족으로 탈락할 걱정 없이 며칠 동안 포지션 없이 관망할 수 있습니다.'
    ],
    post3ReadTime: '5분 읽기',
    post3Content: [
      'ERACEX의 자본 스케일링 플랜은 꾸준히 안정적인 수익을 창출하는 트레이더들과 장기적으로 동행하기 위해 설계되었습니다.',
      '4개월 주기 동안 누적 10%의 수익과 최소 2회 출금을 완료하면 계정 규모가 +25%씩 자동으로 추가 배정됩니다.',
      '수익 분배율 또한 최대 90%까지 상향되어 개인 트레이더에서 진정한 기관급 모의 펀드 매니저로 성장할 수 있습니다.'
    ]
  },
  es: {
    post1ReadTime: '6 min de lectura',
    post1Content: [
      'Uno de los errores más comunes al intentar superar un desafío de prop trading es la urgencia por alcanzar el objetivo en tiempo récord.',
      'En ERACEX, la regla del 5% de drawdown diario fomenta una estricta disciplina. Regla de oro de los traders financiados: no arriesgar más del 0.5% al 1% del capital por operación.',
      'Con un riesgo del 0.5% por operación, necesitarías 10 pérdidas consecutivas para rozar el límite diario, lo que te otorga calma para esperar configuraciones de alta probabilidad con ratio 1:2 o superior.'
    ],
    post2ReadTime: '4 min de lectura',
    post2Content: [
      'Las firmas tradicionales exigen entre 5 y 10 días mínimos de trading, obligando a abrir operaciones forzadas solo para cumplir con un requisito artificial.',
      'En ERACEX creemos que la ventaja real reside en la paciencia. Si alcanzas el objetivo del 8% con una operación swing impecable, ¡mereces tu cuenta financiada de inmediato!',
      'Si el mercado está lateral y confuso, puedes permanecer fuera durante días sin temor a perder tu cuenta por inactividad.'
    ],
    post3ReadTime: '5 min de lectura',
    post3Content: [
      'El Plan de Escalado de Capital de ERACEX está diseñado para recompensar a los traders consistentes a largo plazo.',
      'Cada ciclo de 4 meses con un 10% de beneficio acumulado y 2 retiros procesados, el tamaño de tu cuenta aumenta automáticamente un +25%.',
      'El reparto de beneficios se incrementa hasta el 90%, impulsando tu salto de operador minorista a gestor institucional.'
    ]
  },
  pt: {
    post1ReadTime: '6 min de leitura',
    post1Content: [
      'Um dos erros mais comuns dos participantes em avaliações de prop trading é tentar bater a meta em tempo recorde arriscando demais.',
      'Na ERACEX, a regra de 5% de drawdown diário foi projetada para ensinar disciplina de gestão de capital. Regra de ouro dos traders financiados: nunca arrisque mais de 0.5% a 1% por operação.',
      'Com 0.5% de risco por trade, seriam necessárias 10 perdas consecutivas para atingir o limite diário, garantindo tranquilidade mental para esperar setups com boa relação Risco/Retorno.'
    ],
    post2ReadTime: '4 min de leitura',
    post2Content: [
      'Muitas mesas proprietárias exigem de 5 a 10 dias mínimos de operação, incentivando trades descuidados apenas para bater a meta de dias.',
      'A ERACEX acredita na qualidade das entradas. Se você atinge a meta de 8% com uma única operação swing perfeita, você merece passar imediatamente!',
      'Se o mercado estiver travado, você pode ficar de fora a semana inteira sem risco de reprovação por falta de dias operados.'
    ],
    post3ReadTime: '5 min de leitura',
    post3Content: [
      'O Plano de Escalabilidade da ERACEX visa firmar parcerias duradouras com operadores consistentes.',
      'A cada ciclo de 4 meses com 10% de lucro acumulado e 2 saques realizados, seu saldo é ampliado automaticamente em +25%.',
      'A divisão de lucros sobe gradativamente até 90%, transformando o trader individual em um verdadeiro gestor de capital simulado.'
    ]
  },
  fr: {
    post1ReadTime: '6 min de lecture',
    post1Content: [
      'L\\'une des erreurs les plus fréquentes lors des challenges prop firm est de vouloir atteindre l\\'objectif de profit en un temps record.',
      'Chez ERACEX, la règle du drawdown journalier de 5% est conçue pour forger une discipline de fer. Règle d\\'or : ne jamais risquer plus de 0.5% à 1% par position.',
      'Avec un risque de 0.5% par trade, il faudrait 10 pertes d\\'affilée pour toucher le seuil journalier, garantissant le calme nécessaire pour attendre des configurations à fort ratio gain/risque.'
    ],
    post2ReadTime: '4 min de lecture',
    post2Content: [
      'Les firmes traditionnelles imposent souvent 5 à 10 jours de trading minimum, provoquant des micro-trades inutiles juste pour cocher une case.',
      'ERACEX valorise la patience et la précision. Si vous atteignez les 8% d\\'objectif sur un seul swing trade maîtrisé, vous êtes qualifié sur-le-champ !',
      'Si le marché stagne sans tendance nette, vous pouvez rester observateur toute la semaine sans crainte de pénalité.'
    ],
    post3ReadTime: '5 min de lecture',
    post3Content: [
      'Le plan de scaling de capital ERACEX a été pensé pour accompagner les traders réguliers dans la durée.',
      'Tous les 4 mois, réalisez au moins 10% de gains cumulés avec 2 retraits pour voir votre capital augmenter automatiquement de +25%.',
      'Le partage des profits passe en parallèle à 90%, propulsant votre carrière de trader indépendant vers le niveau institutionnel.'
    ]
  },
  de: {
    post1ReadTime: '6 Min. Lesezeit',
    post1Content: [
      'Einer der häufigsten Fehler bei Prop-Trading-Challenges ist der Versuch, das Gewinnziel in Rekordzeit mit überhöhtem Risiko zu erzwingen.',
      'Bei ERACEX schult der maximale Tagesverlust von 5% das disziplinierte Risikomanagement. Die goldene Regel: Riskieren Sie nie mehr als 0.5% bis 1% pro Trade.',
      'Mit 0.5% Risiko pro Trade bräuchten Sie 10 Fehltrades in Folge, um das Tageslimit zu erreichen. Dies schenkt mentale Gelassenheit für Setups mit CRV von 1:2 und mehr.'
    ],
    post2ReadTime: '4 Min. Lesezeit',
    post2Content: [
      'Alteingesessene Prop-Firmen verlangen 5 bis 10 Mindesthandelstage, was zu hastigen Alibi-Trades verleitet.',
      'ERACEX belohnt echte Handelsqualität. Erreichen Sie das 8%-Ziel mit einem sauberen Swing-Trade, qualifizieren Sie sich sofort!',
      'In richtungslosen Marktphasen können Sie tagelang ohne Strafen an der Seitenlinie verharren.'
    ],
    post3ReadTime: '5 Min. Lesezeit',
    post3Content: [
      'Der ERACEX-Skalierungsplan belohnt langfristig profitable Händler mit sukzessiver Kapitalaufstockung.',
      'Erreichen Sie in 4 Monaten 10% kumulativen Ertrag bei 2 getätigten Auszahlungen, erhöht sich Ihr Konto automatisch um +25%.',
      'Ihre Gewinnbeteiligung steigt auf 90% – der direkte Schritt zum professionellen Fondsmanager.'
    ]
  },
  ru: {
    post1ReadTime: '6 мин чтения',
    post1Content: [
      'Главная ошибка участников проп-челленджей — спешка и завышение рисков ради быстрого закрытия цели по прибыли.',
      'В ERACEX дневной лимит просадки 5% учит дисциплине. Золотое правило: рисковать не более 0.5–1% от депозита на сделку.',
      'При риске 0.5% на позицию потребуется 10 убытков подряд для нарушения лимита, что дает уверенность выжидать идеальные сетапы с R:R от 1:2.'
    ],
    post2ReadTime: '4 мин чтения',
    post2Content: [
      'Традиционные проп-фирмы навязывают 5–10 минимальных торговых дней, провоцируя бессмысленные микро-сделки.',
      'ERACEX ценит качество, а не формальности. Если вы сделали 8% на одной идеальной сделке, вы получаете финансирование сразу!',
      'Если на рынке нет тренда, вы можете спокойно выжидать целую неделю без риска дисквалификации.'
    ],
    post3ReadTime: '5 мин чтения',
    post3Content: [
      'План масштабирования капитала ERACEX ориентирован на долгосрочное партнерство со стабильными трейдерами.',
      'Каждые 4 месяца при доходности 10% и 2 выводах средств ваш баланс автоматически увеличивается на +25%.',
      'Доля прибыли возрастает до 90%, превращая частного трейдера в управляющего крупным капиталом.'
    ]
  },
  it: {
    post1ReadTime: '6 min di lettura',
    post1Content: [
      'Uno degli errori più diffusi nelle sfide prop firm è la fretta di raggiungere il profit target in tempi record a rischio elevato.',
      'In ERACEX, la perdita massima giornaliera del 5% serve a forgiare una solida disciplina. La regola d\\'oro: rischiare al massimo dallo 0.5% all\\'1% per trade.',
      'Con un rischio dello 0.5% per trade, servirebbero 10 stop loss consecutivi per violare il limite, garantendo lucidità mentale per attendere setup ad alto rendimento.'
    ],
    post2ReadTime: '4 min di lettura',
    post2Content: [
      'Molte prop firm impongono 5-10 giorni minimi di trading, inducendo operazioni forzate solo per soddisfare il requisito formale.',
      'ERACEX premia la selettività. Se raggiungi l\\'8% di target con un\\'unica brillante operazione swing, hai diritto al finanziamento immediato!',
      'In fasi di mercato laterale, puoi rimanere a guardare per giorni senza temere la scadenza del conto.'
    ],
    post3ReadTime: '5 min di lettura',
    post3Content: [
      'Il Piano di Scaling ERACEX è concepito per valorizzare i trader costanti e affidabili nel tempo.',
      'Ogni ciclo di 4 mesi con un 10% netto cumulato e 2 prelievi effettuati, il capitale del conto viene incrementato automaticamente del +25%.',
      'La quota di profitto sale al 90%, consentendo al trader privato di gestire patrimoni istituzionali.'
    ]
  },
  ar: {
    post1ReadTime: '6 دقائق قراءة',
    post1Content: [
      'من أكثر الأخطاء شيوعاً بين متداولي تحديات التمويل هو التسرع والرغبة في تحقيق الهدف الربحي في وقت قياسي بمخاطرة مفرطة.',
      'في ERACEX صُممت قاعدة التراجع اليومي 5% لغرس الانضباط في إدارة رأس المال. النصيحة الذهبية: لا تخاطر بأكثر من 0.5% إلى 1% في الصفقة الواحدة.',
      'المخاطرة بنسبة 0.5% تتطلب 10 خسائر متتالية لبلوغ حد التراجع اليومي، مما يمنحك هدوءاً نفسياً لانتظار الفرص القوية بنسبة عائد إلى مخاطرة تتجاوز 1:2.'
    ],
    post2ReadTime: '4 دقائق قراءة',
    post2Content: [
      'تفرض شركات التمويل التقليدية حداً أدنى للتداول يتراوح بين 5 إلى 10 أيام، مما يدفع لفتح صفقات عشوائية لمجرد استيفاء الأيام.',
      'تؤمن ERACEX بأن المهارة الحقيقية تكمن في الصبر. إذا حققت هدف 8% من صفقة سوينغ واحدة متقنة، فأنت تستحق التأهل الفوري!',
      'إذا كانت حركة السوق عرضية وغير واضحة، يمكنك البقاء خارج السوق طوال الأسبوع دون خوف من إلغاء حسابك.'
    ],
    post3ReadTime: '5 دقائق قراءة',
    post3Content: [
      'صُممت خطة ترقية رأس المال في ERACEX لبناء شراكة طويلة الأمد مع المتداولين ذوي الأداء المستقر.',
      'في كل دورة مدتها 4 أشهر، عند تحقيق 10% أرباحاً تراكمية وسحبين للأرباح، تتم زيادة رصيد حسابك تلقائياً بنسبة +25%.',
      'ترتفع نسبة مشاركة الأرباح إلى 90%، مما يحولك من متداول فردي إلى مدير محافظ محترف.'
    ]
  },
  tr: {
    post1ReadTime: '6 dk okuma',
    post1Content: [
      'Fonlu hesap sınavlarına katılan yatırımcıların en sık yaptığı hata, hedef kâra çok kısa sürede aşırı risk alarak ulaşmaya çalışmaktır.',
      'ERACEX\\'te uygulanan %5 günlük maksimum zarar kuralı sıkı bir sermaye disiplini kazandırmayı amaçlar. Altın kural: İşlem başına asla %0.5 - %1\\'den fazla risk almayın.',
      'İşlem başına %0.5 risk aldığınızda, günlük limite ulaşmak için üst üste 10 kez stop olmanız gerekir. Bu psikolojik rahatlık, yüksek risk/kazanç oranına sahip fırsatları beklemenizi sağlar.'
    ],
    post2ReadTime: '4 dk okuma',
    post2Content: [
      'Geleneksel prop firmaları genellikle 5 ila 10 gün minimum işlem günü şartı koşarak yatırımcıları sırf gün doldurmak için gereksiz işlemler açmaya zorlar.',
      'ERACEX sabırlı yatırımcıların yanındadır. Tek bir kaliteli swing işlemle %8 hedefine ulaşırsanız, hemen anında fonlu hesaba geçmeyi hak edersiniz!',
      'Piyasa yatay ve belirsiz seyrettiğinde, gün doldurma baskısı olmadan günlerce işlem açmadan kenarda bekleyebilirsiniz.'
    ],
    post3ReadTime: '5 dk okuma',
    post3Content: [
      'ERACEX Sermaye Ölçeklendirme Planı, istikrarlı getiri sağlayan yatırımcılarla uzun vadeli iş birliği yapmak için kurgulanmıştır.',
      'Her 4 aylık dönemde kümülatif %10 kâr ve en az 2 çekim gerçekleştirmeniz durumunda hesap bakiyeniz otomatik olarak +%25 artırılır.',
      'Kâr paylaşım oranınız da %90\\'a yükselerek sizi bireysel bir yatırımcıdan profesyonel bir fon yöneticisine dönüştürür.'
    ]
  },
  th: {
    post1ReadTime: 'เวลาอ่าน 6 นาที',
    post1Content: [
      'ข้อผิดพลาดที่พบบ่อยที่สุดของเทรดเดอร์ในการสอบกองทุนคือความใจร้อนต้องการทำกำไรให้ผ่านในเวลาสั้นเกินไป',
      'ที่ ERACEX กฎ Drawdown รายวัน 5% ถูกออกแบบมาเพื่อสร้างวินัยในการบริหารเงิน คำแนะนำทองคำ: ควรเสี่ยงเพียง 0.5% ถึงไม่เกิน 1% ต่อออเดอร์',
      'เมื่อคุณคุมความเสี่ยงที่ 0.5% ต่อไม้ คุณต้องแพ้ติดต่อกันถึง 10 ไม้จึงจะชนลิมิตวัน ทำให้คุณมีสติและรอคอยจังหวะที่มี Risk:Reward คุ้มค่าตั้งแต่ 1:2 ขึ้นไป'
    ],
    post2ReadTime: 'เวลาอ่าน 4 นาที',
    post2Content: [
      'กองทุนทั่วไปมักบังคับเทรดขั้นต่ำ 5 ถึง 10 วัน ทำให้เกิดการเทรดแบบไร้เหตุผลเพื่อสะสมวันเทรดให้ครบ',
      'ERACEX เชื่อว่าเทรดเดอร์ที่ดีคือผู้ที่รู้จักรอคอยจังหวะ หากคุณทำกำไรถึงเป้า 8% ได้จาก Swing Trade คุณภาพเพียงครั้งเดียว คุณคู่ควรที่จะได้รับพอร์ตทุนทันที!',
      'หากตลาดไซด์เวย์ไร้ทิศทาง คุณสามารถอยู่เฉยๆ ได้ทั้งสัปดาห์โดยไม่ต้องกลัวโดนตัดสิทธิ์'
    ],
    post3ReadTime: 'เวลาอ่าน 5 นาที',
    post3Content: [
      'แผนการขยายทุน (Scaling Plan) ของ ERACEX สร้างขึ้นเพื่อร่วมงานระยะยาวกับเทรดเดอร์ที่ทำกำไรได้อย่างสม่ำเสมอ',
      'ทุกๆ 4 เดือน เพียงคุณทำกำไรสะสม 10% และถอนเงินอย่างน้อย 2 ครั้ง พอร์ตของคุณจะได้รับการเพิ่มทุน +25% อัตโนมัติ',
      'ส่วนแบ่งกำไรจะเพิ่มขึ้นเป็น 90% ช่วยยกระดับจากเทรดเดอร์รายย่อยสู่ผู้จัดการกองทุนมืออาชีพ'
    ]
  },
  id: {
    post1ReadTime: '6 mnt baca',
    post1Content: [
      'Salah satu kesalahan paling umum trader saat mengikuti ujian prop firm adalah terburu-buru mengejar target profit dalam waktu singkat.',
      'Di ERACEX, batas drawdown harian 5% dirancang untuk melatih disiplin manajemen modal. Aturan emas: Jangan pernah mengambil risiko lebih dari 0.5% hingga 1% per posisi.',
      'Dengan risiko 0.5% per trade, Anda butuh 10 kekalahan beruntun untuk menyentuh batas harian. Ruang aman ini memberi ketenangan menunggu setup berkualitas dengan Risk to Reward 1:2 ke atas.'
    ],
    post2ReadTime: '4 mnt baca',
    post2Content: [
      'Prop firm lawas seringkali mewajibkan batas minimal 5-10 hari trading, memicu open posisi asal-asalan demi mengejar kuota hari.',
      'ERACEX percaya bahwa keunggulan sejati terletak pada kesabaran eksekusi. Jika Anda mencapai target 8% dari satu posisi swing berkualitas, Anda berhak lulus seketika!',
      'Jika pasar sedang sideway tanpa arah, Anda bebas untuk tidak trading berhari-hari tanpa takut akun hangus.'
    ],
    post3ReadTime: '5 mnt baca',
    post3Content: [
      'Program Scaling Plan di ERACEX dirancang untuk bermitra jangka panjang dengan trader yang berkinerja konsisten.',
      'Setiap siklus 4 bulan dengan akumulasi profit 10% dan 2 kali penarikan, ukuran modal akun Anda akan otomatis ditambah +25%.',
      'Bagi hasil keuntungan juga ditingkatkan hingga 90%, mengantar Anda menjadi pengelola dana simulasi profesional.'
    ]
  },
  hi: {
    post1ReadTime: '6 मिनट पढ़ने का समय',
    post1Content: [
      'प्रॉप फर्म मूल्यांकन में भाग लेने वाले ट्रेडर्स की सबसे आम गलती बहुत कम समय में अत्यधिक जोखिम लेकर लाभ लक्ष्य पूरा करने की हड़बड़ी है।',
      'ERACEX में 5% दैनिक ड्रॉडाउन नियम अनुशासित पूंजी प्रबंधन सिखाने के लिए बनाया गया है। स्वर्ण नियम: प्रति ट्रेड कभी भी कुल इक्विटी के 0.5% से 1% से अधिक का जोखिम न लें।',
      'प्रति ट्रेड 0.5% जोखिम के साथ, दैनिक सीमा तक पहुँचने के लिए लगातार 10 बार स्टॉप लॉस हिट होना पड़ेगा। यह आपको 1:2 या बेहतर रिस्क-टू-रिवॉर्ड वाले ट्रेड का धैर्यपूर्वक इंतजार करने का आत्मविश्वास देता है।'
    ],
    post2ReadTime: '4 मिनट पढ़ने का समय',
    post2Content: [
      'पारंपरिक प्रॉप फर्म 5 से 10 न्यूनतम ट्रेडिंग दिनों की अनिवार्यता रखती हैं, जिससे केवल दिन पूरे करने के लिए बेतरतीब छोटे ट्रेड लेने की मजबूरी होती है।',
      'ERACEX मानता है कि असली महारत सही अवसर की प्रतीक्षा में है। यदि आप एक बेहतरीन स्विंग ट्रेड से 8% लक्ष्य प्राप्त कर लेते हैं, तो आप तुरंत फंडेड खाता पाने के हकदार हैं!',
      'यदि बाजार अनिश्चित है, तो आप बिना किसी दंड के कई दिनों तक बाहर बैठकर सुरक्षित रह सकते हैं।'
    ],
    post3ReadTime: '5 मिनट पढ़ने का समय',
    post3Content: [
      'ERACEX की पूंजी स्केलिंग योजना निरंतर लाभदायक ट्रेडर्स के साथ दीर्घकालिक साझेदारी बनाने के लिए बनाई गई है।',
      'प्रत्येक 4 महीने के चक्र में, 10% संचयी लाभ और कम से कम 2 सफल निकासी के साथ, आपकी खाता पूंजी स्वतः +25% बढ़ा दी जाती है।',
      'लाभ विभाजन भी बढ़कर 90% हो जाता है, जिससे आप एक व्यक्तिगत ट्रेडर से पेशेवर फंड मैनेजर के स्तर तक पहुँचते हैं।'
    ]
  },
  pl: {
    post1ReadTime: '6 min czytania',
    post1Content: [
      'Jednym z najczęstszych błędów uczestników wyzwań prop tradingowych jest pośpiech i chęć zrealizowania celu zysku w rekordowym czasie przy zbyt dużym ryzyku.',
      'W ERACEX dzienny limit drawdownu 5% służy wyrobieniu żelaznej dyscypliny. Złota zasada traderów funded: nigdy nie ryzykuj więcej niż 0.5% do 1% kapitału na transakcję.',
      'Przy ryzyku 0.5% na pozycję potrzeba aż 10 strat z rzędu, aby naruszyć limit dnia, co daje psychiczny spokój do czekania na okazje o Risk to Reward 1:2 i wyższym.'
    ],
    post2ReadTime: '4 min czytania',
    post2Content: [
      'Tradycyjne firmy prop narzucają 5–10 minimalnych dni handlowych, zmuszając do otwierania bezsensownych mikrolotów tylko po to, by zaliczyć dni.',
      'ERACEX wierzy w jakość, a nie sztuczne wymogi. Jeśli osiągniesz cel 8% dzięki jednej świetnej pozycji swingowej, natychmiast otrzymujesz konto funded!',
      'W okresie konsolidacji rynku możesz spokojnie pozostać poza rynkiem przez całe dnie bez obawy o utratę konta.'
    ],
    post3ReadTime: '5 min czytania',
    post3Content: [
      'Plan Skalowania Kapitału ERACEX został stworzony, aby budować trwałe relacje z systematycznymi traderami.',
      'W każdym 4-miesięcznym cyklu przy wypracowaniu 10% skumulowanego zysku i 2 wypłatach, kapitał konta rośnie automatycznie o +25%.',
      'Udział w zyskach wzrasta do 90%, umożliwiając przejście z poziomu tradera detalicznego na profesjonalnego zarządzającego.'
    ]
  },
  nl: {
    post1ReadTime: '6 min leestijd',
    post1Content: [
      'Een van de meest gemaakte fouten bij prop trading challenges is overhaasting en het nemen van te veel risico om snel de winstdoelen te halen.',
      'Bij ERACEX is de dagelijkse drawdown-limiet van 5% ingesteld om strak kapitaalbeheer aan te leren. De gouden regel: riskeer nooit meer dan 0.5% tot 1% per transactie.',
      'Bij een risico van 0.5% per trade zijn 10 opeenvolgende verliezen nodig om de daglimiet te bereiken. Dit biedt de rust om te wachten op kansen met een Risk/Reward van 1:2 of beter.'
    ],
    post2ReadTime: '4 min leestijd',
    post2Content: [
      'Traditionele prop firms eisen vaak 5 tot 10 minimale handelsdagen, wat leidt tot onzinnige verplichte micro-transacties.',
      'ERACEX waardeert geduldige precisie. Haalt u de 8% winstdoelstelling met één doordachte swing trade, dan bent u per direct gekwalificeerd!',
      'Tijdens richtingloze marktcondities kunt u rustig dagen aan de zijlijn blijven zonder risico op accountverval.'
    ],
    post3ReadTime: '5 min leestijd',
    post3Content: [
      'Het ERACEX Kapitaalschalingsplan is opgezet om een langdurig partnerschap op te bouwen met consistente handelaren.',
      'Elke cyclus van 4 maanden met 10% cumulatieve nettowinst en minimaal 2 uitbetalingen resulteert in een automatische kapitaalverhoging van +25%.',
      'De winstverdeling loopt tegelijkertijd op naar 90%, waarmee u doorgroeit van particuliere handelaar naar gesimuleerde fondsbeheerder.'
    ]
  },
  fil: {
    post1ReadTime: '6 min basahin',
    post1Content: [
      'Isa sa mga pinakakaraniwang pagkakamali ng mga kalahok sa prop challenge ay ang pagmamadali at pagkuha ng sobrang laking peligro para lang makapasa agad.',
      'Sa ERACEX, ang 5% daily drawdown rule ay dinisenyo para ituro ang disiplina sa pera. Gintong tuntunin: huwag mag-risk ng higit sa 0.5% hanggang 1% bawat trade.',
      'Sa 0.5% na risk kada trade, kailangan mo ng 10 sunod-sunod na talo para maabot ang limit ng araw, na nagbibigay ng kapanatagan para maghintay ng mga de-kalidad na setup na may 1:2 Risk to Reward.'
    ],
    post2ReadTime: '4 min basahin',
    post2Content: [
      'Maraming lumang prop firm ang nag-aatas ng 5 hanggang 10 minimum na araw ng pag-trade, na nagiging sanhi ng mga padalos-dalos na trade para lang mapunan ang araw.',
      'Naniniwala ang ERACEX sa kalidad ng pasensya. Kung naabot mo ang 8% na target sa isang mahusay na swing trade, karapat-dapat kang makapasa agad!',
      'Kung magulo ang merkado, malaya kang maghintay ng ilang araw o linggo nang walang takot na mabawi ang iyong account dahil kulang sa araw ng pag-trade.'
    ],
    post3ReadTime: '5 min basahin',
    post3Content: [
      'Ang Scaling Plan sa ERACEX ay nilikha para maging katuwang ng mga trader na may tuloy-tuloy at matatag na kita.',
      'Sa bawat 4 na buwang cycle, kapag nakakuha ka ng 10% na kabuuang kita at 2 payout, awtomatikong madaragdagan ng +25% ang iyong puhunan.',
      'Ang hatian sa kita ay umaangat din sa 90%, na magdadala sa iyo mula sa isang retail trader tungo sa isang ganap na propesyonal na tagapamahala ng pondo.'
    ]
  }
};
`;

// Insert BLOG_SECTION_DICT before export const BlogSection
content = content.replace(
  'export const BlogSection: React.FC = () => {',
  BLOG_CONTENT_DICT + '\nexport const BlogSection: React.FC = () => {'
);

// Inject const bDict
content = content.replace(
  'const { t, currentLang } = useLanguage();',
  `const { t, currentLang } = useLanguage();
  const bDict = BLOG_SECTION_DICT[currentLang] || BLOG_SECTION_DICT['en'];`
);

// Replace post 1 readTime and content
content = content.replace(
  "readTime: currentLang === 'vi' ? '6 phút đọc' : '6 min read',",
  'readTime: bDict.post1ReadTime,'
);

const post1ContentOld = `content: currentLang === 'vi' ? [
        'Một trong những sai lầm phổ biến nhất của các nhà giao dịch khi tham gia thi tuyển quỹ là tâm lý muốn vượt qua mục tiêu lợi nhuận trong thời gian quá ngắn.',
        'Tại ERACEX, chúng tôi thiết kế mức sụt giảm tối đa trong ngày là 5% nhằm mục đích rèn luyện tính kỷ luật. Lời khuyên vàng từ các trader cấp vốn thành công: Mỗi lệnh giao dịch chỉ nên mạo hiểm từ 0.5% đến tối đa 1% tài khoản.',
        'Khi bạn giữ mức rủi ro 0.5%/lệnh, bạn cần thua liên tiếp 10 lệnh mới chạm ngưỡng sụt giảm ngày. Điều này mang lại sự tự tin, giúp bạn bình tĩnh chờ đợi các cơ hội vào lệnh có tỷ lệ R:R cao (Risk to Reward từ 1:2 trở lên).'
      ] : [
        'One of the most frequent pitfalls among prop challenge participants is the urge to reach profit targets aggressively in record time.',
        'At ERACEX, the 5% daily drawdown rule is engineered specifically to instill disciplined capital management. Proven funded traders follow one golden rule: never risk more than 0.5% to 1% of total equity per individual trade.',
        'With a 0.5% risk profile per trade, a trader would need 10 consecutive catastrophic losses to violate the daily drawdown threshold. This cushion fosters psychological clarity, allowing you to patiently wait for high-probability setups with favorable Risk-to-Reward profiles.'
      ]`;

content = content.replace(post1ContentOld, 'content: bDict.post1Content');

// Replace post 2 readTime and content
content = content.replace(
  "readTime: currentLang === 'vi' ? '4 phút đọc' : '4 min read',",
  'readTime: bDict.post2ReadTime,'
);

const post2ContentOld = `content: currentLang === 'vi' ? [
        'Nhiều quỹ truyền thống yêu cầu nhà giao dịch phải vào lệnh tối thiểu 5 hoặc 10 ngày. Điều này vô tình tạo ra tâm lý "giao dịch cho đủ số ngày", dẫn đến các lệnh cẩu thả với khối lượng nhỏ.',
        'ERACEX tin rằng trader giỏi là người biết kiên nhẫn chờ thời cơ. Nếu bạn đạt mục tiêu 8% chỉ sau 1 lệnh Swing Trading chất lượng, bạn xứng đáng được cấp vốn ngay lập tức!',
        'Ngược lại, nếu thị trường sideway không rõ xu hướng, bạn hoàn toàn có thể đứng ngoài quan sát cả tuần mà không sợ bị hủy tài khoản vì không đủ ngày giao dịch.'
      ] : [
        'Legacy prop firms commonly mandate 5 to 10 minimum trading days. This constraint often triggers counterproductive micro-trades placed purely to tick artificial boxes.',
        'ERACEX believes true edge lies in selective execution. If you achieve an 8% profit target on a single high-conviction swing position, you deserve instantaneous qualification!',
        'Conversely, if market conditions are range-bound and choppy, you are free to sit on your hands for days or weeks without fear of challenge expiration.'
      ]`;

content = content.replace(post2ContentOld, 'content: bDict.post2Content');

// Replace post 3 readTime and content
content = content.replace(
  "readTime: currentLang === 'vi' ? '5 phút đọc' : '5 min read',",
  'readTime: bDict.post3ReadTime,'
);

const post3ContentOld = `content: currentLang === 'vi' ? [
        'Chương trình Scaling Plan tại ERACEX được xây dựng nhằm tìm kiếm và đồng hành lâu dài cùng các nhà giao dịch có phong độ ổn định.',
        'Mỗi chu kỳ 4 tháng, chỉ cần bạn tạo ra tối thiểu 10% lợi nhuận lũy kế và thực hiện ít nhất 2 lần rút tiền, quy mô tài khoản của bạn sẽ tự động được cấp thêm 25% vốn bổ sung.',
        'Tỷ lệ chia lợi nhuận cũng được tăng dần từ 80% lên mức tối đa 90%, đưa bạn từ một trader cá nhân trở thành nhà quản lý quỹ thực thụ.'
      ] : [
        'The ERACEX Capital Scaling Plan is structured to foster long-term partnerships with consistently profitable market operators.',
        'Every 4-month cycle, achieving a cumulative 10% net gain alongside at least two processed withdrawals triggers an automatic +25% capital allocation boost.',
        'Profit share simultaneously steps up to our maximum 90% bracket, transforming talented retail traders into bona fide simulated fund managers.'
      ]`;

content = content.replace(post3ContentOld, 'content: bDict.post3Content');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated BlogSection.tsx with all 19 languages');
