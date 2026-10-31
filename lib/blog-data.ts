// lib/blog-data.ts

export interface BlogContentSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  coverGradient: string;
  content: BlogContentSection[];
  translations?: Record<string, {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    authorRole: string;
    content: BlogContentSection[];
  }>;
}

export const BLOG_POSTS: BlogPostData[] = [
  {
    "slug": "risk-management-prop-firm",
    "title": "Kỷ Luật Quản Trị Rủi Ro Trong Chương Trình Đánh Giá Mô Phỏng",
    "excerpt": "Quản lý khối lượng lệnh và tuân thủ giới hạn lỗ theo ngày là nền tảng khi giao dịch trong một chương trình đánh giá mô phỏng...",
    "author": "ERACEX Team",
    "authorRole": "Đội ngũ ERACEX",
    "date": "27/10/2026",
    "readTime": "5 phút đọc",
    "category": "Chiến Lược Quản Vốn",
    "coverGradient": "from-[#f6bf4a]/20 via-[#f6bf4a]/10 to-transparent",
    "content": [
      {
        "heading": "1. Tâm Lý Kỳ Vọng Sai Lầm Khi Bắt Đầu Đánh Giá",
        "paragraphs": [
          "Một sai lầm thường gặp là coi chương trình đánh giá như một canh bạc tất tay. Khi nhìn thấy quy mô tài khoản lớn, nhiều trader nhồi lệnh với kỳ vọng đạt mục tiêu lợi nhuận quá nhanh.",
          "Giới hạn lỗ theo ngày và lỗ tối đa tồn tại để rèn luyện kỷ luật quản trị rủi ro. Với Two-Step, lỗ ngày là 5% và lỗ tối đa là 10% dựa trên equity; One-Step và Instant có giới hạn chặt hơn. Hãy đọc kỹ quy tắc của chương trình bạn chọn trước khi thanh toán."
        ]
      },
      {
        "heading": "2. Rủi Ro Nhỏ Trên Mỗi Lệnh",
        "paragraphs": [
          "Một nguyên tắc phổ biến là chỉ rủi ro một phần nhỏ của tài khoản trên mỗi lệnh, ví dụ 0.5% đến 1%. Với tài khoản $100,000, mức rủi ro 0.5% tương ứng $500 cho mỗi vị thế.",
          "Khi rủi ro mỗi lệnh nhỏ, một chuỗi lệnh thua sẽ khó chạm giới hạn lỗ theo ngày, giúp bạn kiên nhẫn chờ các cơ hội có tỷ lệ Risk/Reward hợp lý. Đây là nội dung giáo dục chung, không phải lời khuyên đầu tư."
        ]
      },
      {
        "heading": "3. Theo Dõi Giới Hạn Của Chương Trình",
        "paragraphs": [
          "Mỗi chương trình có số ngày giao dịch tối thiểu, đòn bẩy và giới hạn lỗ riêng. Hãy theo dõi chúng trên bảng điều khiển và nhớ rằng không được giữ lệnh qua cuối tuần."
        ]
      }
    ],
    "translations": {
      "en": {
        "title": "Risk Management Discipline in a Simulated Evaluation Program",
        "excerpt": "Managing position size and respecting the daily loss limit are the foundation of trading in a simulated evaluation program...",
        "category": "Risk Management",
        "readTime": "5 min read",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. The High-Expectation Pitfall When Starting an Evaluation",
            "paragraphs": [
              "A common mistake is treating an evaluation program like a high-stakes gamble. Seeing a large account size tempts many traders to over-leverage in hopes of reaching the profit target too quickly.",
              "Daily loss and max loss limits exist to cultivate disciplined risk habits. On Two-Step the daily loss is 5% and the max loss is 10%, equity-based; One-Step and Instant have tighter limits. Read the rules of the program you choose before you pay."
            ]
          },
          {
            "heading": "2. Small Risk Per Trade",
            "paragraphs": [
              "A common principle is to risk only a small share of the account per trade, for example 0.5% to 1%. On a $100,000 account, 0.5% risk equals $500 per position.",
              "With small risk per trade, a losing streak is unlikely to reach the daily loss limit, which lets you wait patiently for setups with a sensible Risk/Reward. This is general educational content, not investment advice."
            ]
          },
          {
            "heading": "3. Track Your Program Limits",
            "paragraphs": [
              "Each program has its own minimum trading days, leverage and loss limits. Track them in your dashboard and remember that weekend holding is not allowed."
            ]
          }
        ]
      },
      "zh": {
        "title": "模拟评估计划中的风险管理纪律",
        "excerpt": "管理仓位大小并遵守每日亏损限额，是在模拟评估计划中交易的基础...",
        "category": "风险管理",
        "readTime": "阅读约5分钟",
        "authorRole": "ERACEX团队",
        "content": [
          {
            "heading": "1. 开始评估时的高期望陷阱",
            "paragraphs": [
              "常见的错误是把评估计划当作高风险赌博。看到较大的账户规模，许多交易者会过度使用杠杆，希望过快达到盈利目标。",
              "每日亏损限额和最大亏损限额的存在，是为了培养有纪律的风险习惯。Two-Step的每日亏损为5%、最大亏损为10%，均基于净值；One-Step和Instant的限额更严格。付款前请阅读所选计划的规则。"
            ]
          },
          {
            "heading": "2. 每笔交易的小额风险",
            "paragraphs": [
              "一个常见原则是每笔交易只承担账户的一小部分风险，例如0.5%至1%。在$100,000的账户上，0.5%的风险相当于每个仓位$500。",
              "每笔交易风险较小时，连续亏损不太可能触及每日亏损限额，让你可以耐心等待风险回报合理的交易机会。本文为一般教育内容，不构成投资建议。"
            ]
          },
          {
            "heading": "3. 留意计划的各项限制",
            "paragraphs": [
              "每个计划都有各自的最少交易天数、杠杆和亏损限额。请在仪表板中跟踪这些限制，并记住不允许周末持仓。"
            ]
          }
        ]
      },
      "ja": {
        "title": "シミュレーション評価プログラムにおけるリスク管理の規律",
        "excerpt": "ポジションサイズの管理と日次損失上限の遵守は、シミュレーション評価プログラムで取引する際の土台です...",
        "category": "リスク管理",
        "readTime": "5分で読めます",
        "authorRole": "ERACEXチーム",
        "content": [
          {
            "heading": "1. 評価開始時に陥りがちな「高すぎる期待」の落とし穴",
            "paragraphs": [
              "よくある間違いは、評価プログラムを一発勝負のギャンブルのように扱うことです。大きなアカウントサイズを見ると、多くのトレーダーが利益目標に早く到達しようとして過大なレバレッジをかけたくなります。",
              "日次損失上限と最大損失上限は、規律あるリスク管理の習慣を育てるために存在します。Two-Stepでは、日次損失は5%、最大損失は10%（いずれもエクイティ基準）で、One-StepとInstantはさらに厳しい上限です。支払い前に、選択したプログラムのルールをお読みください。"
            ]
          },
          {
            "heading": "2. 1回の取引あたりのリスクを小さく",
            "paragraphs": [
              "一般的な原則は、1回の取引で口座の一部だけをリスクにさらすことで、たとえば0.5%から1%です。$100,000のアカウントでは、0.5%のリスクは1ポジションあたり$500に相当します。",
              "1回あたりのリスクが小さければ、連敗しても日次損失上限に達しにくく、妥当なリスクリワードのセットアップを辛抱強く待つことができます。これは一般的な教育コンテンツであり、投資助言ではありません。"
            ]
          },
          {
            "heading": "3. プログラムの制限を把握する",
            "paragraphs": [
              "各プログラムには、独自の最低取引日数、レバレッジ、損失上限があります。ダッシュボードで確認し、週末のポジション保有は認められていないことを覚えておきましょう。"
            ]
          }
        ]
      },
      "es": {
        "title": "Disciplina de Gestión de Riesgo en un Programa de Evaluación Simulado",
        "excerpt": "Gestionar el tamaño de las posiciones y respetar el límite de pérdida diaria son la base de operar en un programa de evaluación simulado...",
        "category": "Gestión de Riesgo",
        "readTime": "5 min de lectura",
        "authorRole": "Equipo ERACEX",
        "content": [
          {
            "heading": "1. La Trampa de las Altas Expectativas al Iniciar una Evaluación",
            "paragraphs": [
              "Un error común es tratar un programa de evaluación como una apuesta de alto riesgo. Ver un tamaño de cuenta grande tienta a muchos traders a sobreapalancarse con la esperanza de alcanzar el objetivo de beneficio demasiado rápido.",
              "Los límites de pérdida diaria y de pérdida máxima existen para cultivar hábitos de riesgo disciplinados. En Two-Step la pérdida diaria es del 5% y la pérdida máxima del 10%, basadas en equity; One-Step e Instant tienen límites más estrictos. Lee las reglas del programa que elijas antes de pagar."
            ]
          },
          {
            "heading": "2. Riesgo Pequeño por Operación",
            "paragraphs": [
              "Un principio habitual es arriesgar solo una pequeña parte de la cuenta por operación, por ejemplo entre el 0.5% y el 1%. En una cuenta de $100,000, un riesgo del 0.5% equivale a $500 por posición.",
              "Con un riesgo pequeño por operación, es poco probable que una racha perdedora alcance el límite de pérdida diaria, lo que te permite esperar con paciencia setups con un Risk/Reward razonable. Este es contenido educativo general, no asesoramiento de inversión."
            ]
          },
          {
            "heading": "3. Controla los Límites de tu Programa",
            "paragraphs": [
              "Cada programa tiene sus propios días mínimos de trading, apalancamiento y límites de pérdida. Contrólalos en tu panel y recuerda que no se permite mantener posiciones durante el fin de semana."
            ]
          }
        ]
      },
      "pt": {
        "title": "Disciplina de Gestão de Risco em um Programa de Avaliação Simulado",
        "excerpt": "Gerenciar o tamanho das posições e respeitar o limite de perda diária são a base de operar em um programa de avaliação simulado...",
        "category": "Gestão de Risco",
        "readTime": "5 min de leitura",
        "authorRole": "Equipe ERACEX",
        "content": [
          {
            "heading": "1. A Armadilha das Altas Expectativas ao Iniciar uma Avaliação",
            "paragraphs": [
              "Um erro comum é tratar um programa de avaliação como uma aposta de alto risco. Ver um tamanho de conta grande tenta muitos traders a se alavancar demais na esperança de atingir a meta de lucro rápido demais.",
              "Os limites de perda diária e de perda máxima existem para cultivar hábitos de risco disciplinados. No Two-Step a perda diária é de 5% e a perda máxima é de 10%, baseadas em equity; One-Step e Instant têm limites mais rígidos. Leia as regras do programa que você escolher antes de pagar."
            ]
          },
          {
            "heading": "2. Risco Pequeno por Operação",
            "paragraphs": [
              "Um princípio comum é arriscar apenas uma pequena parte da conta por operação, por exemplo de 0.5% a 1%. Em uma conta de $100,000, um risco de 0.5% equivale a $500 por posição.",
              "Com um risco pequeno por operação, é improvável que uma sequência de perdas alcance o limite de perda diária, o que permite esperar com paciência por setups com um Risk/Reward razoável. Este é conteúdo educacional geral, não aconselhamento de investimento."
            ]
          },
          {
            "heading": "3. Acompanhe os Limites do seu Programa",
            "paragraphs": [
              "Cada programa tem seus próprios dias mínimos de trading, alavancagem e limites de perda. Acompanhe-os no seu painel e lembre-se de que não é permitido manter posições durante o fim de semana."
            ]
          }
        ]
      },
      "fr": {
        "title": "La discipline de gestion du risque dans un programme d'évaluation simulé",
        "excerpt": "Gérer la taille des positions et respecter la limite de perte quotidienne sont le fondement du trading dans un programme d'évaluation simulé...",
        "category": "Gestion du risque",
        "readTime": "5 min de lecture",
        "authorRole": "Équipe ERACEX",
        "content": [
          {
            "heading": "1. Le piège des attentes trop élevées au début d'une évaluation",
            "paragraphs": [
              "Une erreur courante consiste à traiter un programme d'évaluation comme un pari à gros enjeux. Voir une grande taille de compte pousse de nombreux traders à sur-utiliser l'effet de levier dans l'espoir d'atteindre trop vite l'objectif de profit.",
              "Les limites de perte quotidienne et de perte maximale existent pour cultiver de bonnes habitudes de gestion du risque. Sur Two-Step, la perte quotidienne est de 5 % et la perte maximale de 10 %, basées sur l'equity ; One-Step et Instant ont des limites plus strictes. Lisez les règles du programme choisi avant de payer."
            ]
          },
          {
            "heading": "2. Un petit risque par trade",
            "paragraphs": [
              "Un principe courant est de ne risquer qu'une petite part du compte par trade, par exemple de 0.5 % à 1 %. Sur un compte de 100 000 $, un risque de 0.5 % équivaut à 500 $ par position.",
              "Avec un petit risque par trade, une série de pertes atteint rarement la limite de perte quotidienne, ce qui vous permet d'attendre patiemment des setups avec un Risk/Reward raisonnable. Ce contenu est éducatif et général, il ne constitue pas un conseil en investissement."
            ]
          },
          {
            "heading": "3. Suivez les limites de votre programme",
            "paragraphs": [
              "Chaque programme a ses propres jours de trading minimum, son effet de levier et ses limites de perte. Suivez-les dans votre tableau de bord et rappelez-vous que la détention de positions pendant le week-end n'est pas autorisée."
            ]
          }
        ]
      },
      "de": {
        "title": "Risikomanagement-Disziplin in einem simulierten Evaluierungsprogramm",
        "excerpt": "Die Steuerung der Positionsgröße und die Einhaltung des Tagesverlustlimits sind die Grundlage des Handels in einem simulierten Evaluierungsprogramm...",
        "category": "Risikomanagement",
        "readTime": "5 Min. Lesezeit",
        "authorRole": "ERACEX-Team",
        "content": [
          {
            "heading": "1. Die Falle hoher Erwartungen zu Beginn einer Evaluierung",
            "paragraphs": [
              "Ein häufiger Fehler ist, ein Evaluierungsprogramm wie ein Glücksspiel mit hohem Einsatz zu behandeln. Eine große Kontogröße verleitet viele Trader dazu, übermäßig zu hebeln, in der Hoffnung, das Gewinnziel zu schnell zu erreichen.",
              "Tagesverlust- und Maximalverlustlimits sollen disziplinierte Risikogewohnheiten fördern. Bei Two-Step beträgt der Tagesverlust 5 % und der Maximalverlust 10 %, Equity-basiert; One-Step und Instant haben engere Limits. Lesen Sie die Regeln des gewählten Programms, bevor Sie zahlen."
            ]
          },
          {
            "heading": "2. Geringes Risiko pro Trade",
            "paragraphs": [
              "Ein gängiger Grundsatz ist, pro Trade nur einen kleinen Teil des Kontos zu riskieren, zum Beispiel 0.5 % bis 1 %. Bei einem Konto von $100,000 entsprechen 0.5 % Risiko $500 pro Position.",
              "Bei geringem Risiko pro Trade erreicht eine Verlustserie das Tagesverlustlimit nur selten, sodass Sie geduldig auf Setups mit sinnvollem Risk/Reward warten können. Dies sind allgemeine Bildungsinhalte, keine Anlageberatung."
            ]
          },
          {
            "heading": "3. Behalten Sie Ihre Programmlimits im Blick",
            "paragraphs": [
              "Jedes Programm hat eigene Mindesthandelstage, einen eigenen Hebel und eigene Verlustlimits. Verfolgen Sie diese in Ihrem Dashboard und denken Sie daran, dass das Halten von Positionen über das Wochenende nicht erlaubt ist."
            ]
          }
        ]
      },
      "it": {
        "title": "La disciplina di gestione del rischio in un programma di valutazione simulato",
        "excerpt": "Gestire la dimensione delle posizioni e rispettare il limite di perdita giornaliera sono le basi del trading in un programma di valutazione simulato...",
        "category": "Gestione del rischio",
        "readTime": "5 min di lettura",
        "authorRole": "Team ERACEX",
        "content": [
          {
            "heading": "1. La trappola delle alte aspettative all'inizio di una valutazione",
            "paragraphs": [
              "Un errore comune è trattare un programma di valutazione come una scommessa ad alto rischio. Vedere un conto di grandi dimensioni spinge molti trader a usare troppa leva nella speranza di raggiungere troppo in fretta l'obiettivo di profitto.",
              "I limiti di perdita giornaliera e di perdita massima esistono per coltivare abitudini di rischio disciplinate. Su Two-Step la perdita giornaliera è del 5% e la perdita massima del 10%, basate sull'equity; One-Step e Instant hanno limiti più stretti. Leggi le regole del programma scelto prima di pagare."
            ]
          },
          {
            "heading": "2. Piccolo rischio per operazione",
            "paragraphs": [
              "Un principio comune è rischiare solo una piccola parte del conto per operazione, ad esempio dallo 0.5% all'1%. Su un conto da $100,000, un rischio dello 0.5% equivale a $500 per posizione.",
              "Con un piccolo rischio per operazione, una serie di perdite difficilmente raggiunge il limite di perdita giornaliera, il che ti permette di attendere con pazienza setup con un Risk/Reward sensato. Questo è contenuto educativo generale, non consulenza di investimento."
            ]
          },
          {
            "heading": "3. Tieni sotto controllo i limiti del tuo programma",
            "paragraphs": [
              "Ogni programma ha i propri giorni minimi di trading, la propria leva e i propri limiti di perdita. Monitorali nella tua dashboard e ricorda che non è consentito mantenere posizioni nel fine settimana."
            ]
          }
        ]
      },
      "pl": {
        "title": "Dyscyplina zarządzania ryzykiem w symulowanym programie oceny",
        "excerpt": "Zarządzanie wielkością pozycji i przestrzeganie dziennego limitu strat to fundament tradingu w symulowanym programie oceny...",
        "category": "Zarządzanie ryzykiem",
        "readTime": "5 min czytania",
        "authorRole": "Zespół ERACEX",
        "content": [
          {
            "heading": "1. Pułapka wysokich oczekiwań na początku oceny",
            "paragraphs": [
              "Częstym błędem jest traktowanie programu oceny jak hazardu o wysokiej stawce. Widok dużego konta kusi wielu traderów, by nadmiernie używać dźwigni w nadziei na zbyt szybkie osiągnięcie celu zysku.",
              "Limity dziennej i maksymalnej straty istnieją, by kształtować zdyscyplinowane nawyki w zarządzaniu ryzykiem. W Two-Step dzienna strata wynosi 5%, a maksymalna 10%, liczone od equity; One-Step i Instant mają ostrzejsze limity. Przeczytaj zasady wybranego programu przed zapłatą."
            ]
          },
          {
            "heading": "2. Małe ryzyko na transakcję",
            "paragraphs": [
              "Powszechna zasada to ryzykowanie tylko niewielkiej części konta na transakcję, na przykład od 0.5% do 1%. Na koncie $100,000 ryzyko 0.5% to $500 na pozycję.",
              "Przy małym ryzyku na transakcję seria strat raczej nie osiągnie dziennego limitu strat, co pozwala cierpliwie czekać na setupy z rozsądnym Risk/Reward. To ogólne treści edukacyjne, a nie porada inwestycyjna."
            ]
          },
          {
            "heading": "3. Śledź limity swojego programu",
            "paragraphs": [
              "Każdy program ma własną minimalną liczbę dni handlowych, dźwignię i limity strat. Śledź je w panelu i pamiętaj, że trzymanie pozycji przez weekend jest niedozwolone."
            ]
          }
        ]
      },
      "tr": {
        "title": "Simüle Bir Değerlendirme Programında Risk Yönetimi Disiplini",
        "excerpt": "Pozisyon büyüklüğünü yönetmek ve günlük kayıp limitine uymak, simüle bir değerlendirme programında işlem yapmanın temelidir...",
        "category": "Risk Yönetimi",
        "readTime": "5 dk okuma",
        "authorRole": "ERACEX Ekibi",
        "content": [
          {
            "heading": "1. Değerlendirmeye Başlarken Yüksek Beklenti Tuzağı",
            "paragraphs": [
              "Yaygın bir hata, değerlendirme programına yüksek riskli bir kumar gibi yaklaşmaktır. Büyük bir hesap boyutu görmek, birçok trader'ı kâr hedefine çok hızlı ulaşma umuduyla aşırı kaldıraç kullanmaya iter.",
              "Günlük kayıp ve maksimum kayıp limitleri, disiplinli risk alışkanlıkları kazandırmak için vardır. Two-Step'te günlük kayıp %5, maksimum kayıp %10'dur ve equity bazlıdır; One-Step ve Instant daha sıkı limitlere sahiptir. Ödeme yapmadan önce seçtiğiniz programın kurallarını okuyun."
            ]
          },
          {
            "heading": "2. İşlem Başına Küçük Risk",
            "paragraphs": [
              "Yaygın bir ilke, işlem başına hesabın yalnızca küçük bir bölümünü riske atmaktır; örneğin %0.5 ile %1 arası. $100,000'lık bir hesapta %0.5 risk, pozisyon başına $500'a denk gelir.",
              "İşlem başına küçük riskle, art arda gelen kayıpların günlük kayıp limitine ulaşması olası değildir; bu da makul bir Risk/Reward sunan kurulumları sabırla beklemenizi sağlar. Bu genel eğitim içeriğidir, yatırım tavsiyesi değildir."
            ]
          },
          {
            "heading": "3. Program Limitlerinizi Takip Edin",
            "paragraphs": [
              "Her programın kendi minimum işlem günleri, kaldıracı ve kayıp limitleri vardır. Bunları panonuzdan takip edin ve hafta sonu pozisyon tutmanın yasak olduğunu unutmayın."
            ]
          }
        ]
      },
      "id": {
        "title": "Disiplin Manajemen Risiko dalam Program Evaluasi Simulasi",
        "excerpt": "Mengelola ukuran posisi dan menghormati batas kerugian harian adalah fondasi trading dalam program evaluasi simulasi...",
        "category": "Manajemen Risiko",
        "readTime": "5 menit baca",
        "authorRole": "Tim ERACEX",
        "content": [
          {
            "heading": "1. Jebakan Ekspektasi Tinggi saat Memulai Evaluasi",
            "paragraphs": [
              "Kesalahan umum adalah memperlakukan program evaluasi seperti taruhan berisiko tinggi. Melihat ukuran akun yang besar menggoda banyak trader untuk menggunakan leverage berlebihan demi mencapai target profit terlalu cepat.",
              "Batas kerugian harian dan kerugian maksimum ada untuk menumbuhkan kebiasaan risiko yang disiplin. Pada Two-Step kerugian harian adalah 5% dan kerugian maksimum 10%, berbasis equity; One-Step dan Instant memiliki batas yang lebih ketat. Baca aturan program yang Anda pilih sebelum membayar."
            ]
          },
          {
            "heading": "2. Risiko Kecil per Transaksi",
            "paragraphs": [
              "Prinsip yang umum adalah hanya mempertaruhkan sebagian kecil akun per transaksi, misalnya 0.5% hingga 1%. Pada akun $100,000, risiko 0.5% setara dengan $500 per posisi.",
              "Dengan risiko kecil per transaksi, rentetan kekalahan kecil kemungkinan mencapai batas kerugian harian, sehingga Anda dapat menunggu setup dengan Risk/Reward yang masuk akal dengan sabar. Ini adalah konten edukasi umum, bukan saran investasi."
            ]
          },
          {
            "heading": "3. Pantau Batas Program Anda",
            "paragraphs": [
              "Setiap program memiliki hari trading minimum, leverage, dan batas kerugian sendiri. Pantau di dashboard Anda dan ingat bahwa menahan posisi saat akhir pekan tidak diperbolehkan."
            ]
          }
        ]
      },
      "th": {
        "title": "วินัยการบริหารความเสี่ยงในโปรแกรมประเมินจำลอง",
        "excerpt": "การจัดการขนาดสถานะและการเคารพขีดจำกัดการขาดทุนรายวันคือรากฐานของการเทรดในโปรแกรมประเมินจำลอง...",
        "category": "การบริหารความเสี่ยง",
        "readTime": "อ่าน 5 นาที",
        "authorRole": "ทีม ERACEX",
        "content": [
          {
            "heading": "1. กับดักความคาดหวังสูงเมื่อเริ่มการประเมิน",
            "paragraphs": [
              "ข้อผิดพลาดที่พบบ่อยคือการมองโปรแกรมประเมินเป็นการเดิมพันที่เสี่ยงสูง เมื่อเห็นขนาดบัญชีใหญ่ เทรดเดอร์หลายคนจึงใช้เลเวอเรจเกินตัวด้วยหวังว่าจะถึงเป้าหมายกำไรเร็วเกินไป",
              "ขีดจำกัดการขาดทุนรายวันและขาดทุนสูงสุดมีไว้เพื่อสร้างนิสัยการบริหารความเสี่ยงอย่างมีวินัย ใน Two-Step ขาดทุนรายวันคือ 5% และขาดทุนสูงสุดคือ 10% คิดจาก equity ส่วน One-Step และ Instant มีขีดจำกัดที่เข้มงวดกว่า โปรดอ่านกฎของโปรแกรมที่เลือกก่อนชำระเงิน"
            ]
          },
          {
            "heading": "2. ความเสี่ยงน้อยต่อการเทรดแต่ละครั้ง",
            "paragraphs": [
              "หลักการทั่วไปคือเสี่ยงเพียงส่วนเล็ก ๆ ของบัญชีต่อการเทรดแต่ละครั้ง เช่น 0.5% ถึง 1% ในบัญชี $100,000 ความเสี่ยง 0.5% เท่ากับ $500 ต่อหนึ่งสถานะ",
              "เมื่อเสี่ยงน้อยต่อการเทรด ช่วงขาดทุนต่อเนื่องจึงไม่น่าจะแตะขีดจำกัดการขาดทุนรายวัน ทำให้คุณรอเซ็ตอัปที่มี Risk/Reward เหมาะสมได้อย่างอดทน นี่เป็นเนื้อหาเพื่อการศึกษาทั่วไป ไม่ใช่คำแนะนำการลงทุน"
            ]
          },
          {
            "heading": "3. ติดตามขีดจำกัดของโปรแกรมของคุณ",
            "paragraphs": [
              "แต่ละโปรแกรมมีจำนวนวันเทรดขั้นต่ำ เลเวอเรจ และขีดจำกัดการขาดทุนเป็นของตัวเอง ติดตามได้ในแดชบอร์ดของคุณ และอย่าลืมว่าไม่อนุญาตให้ถือสถานะข้ามสุดสัปดาห์"
            ]
          }
        ]
      },
      "fil": {
        "title": "Disiplina sa Pamamahala ng Panganib sa isang Simulated Evaluation Program",
        "excerpt": "Ang pamamahala sa laki ng posisyon at ang paggalang sa daily loss limit ang pundasyon ng trading sa isang simulated evaluation program...",
        "category": "Pamamahala ng Panganib",
        "readTime": "5 min na basahin",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. Ang Patibong ng Mataas na Inaasahan sa Pagsisimula ng Evaluation",
            "paragraphs": [
              "Karaniwang pagkakamali ang pagtrato sa evaluation program na parang mataas na pustahan. Dahil sa laki ng account, natutukso ang maraming trader na mag-over-leverage sa pag-asang maabot agad ang profit target.",
              "Ang daily loss at max loss limit ay nariyan para linangin ang disiplinadong gawi sa panganib. Sa Two-Step, ang daily loss ay 5% at ang max loss ay 10%, batay sa equity; mas mahigpit ang limitasyon ng One-Step at Instant. Basahin ang mga patakaran ng programang pipiliin mo bago magbayad."
            ]
          },
          {
            "heading": "2. Maliit na Panganib sa Bawat Trade",
            "paragraphs": [
              "Karaniwang prinsipyo ang isapanganib lamang ang maliit na bahagi ng account sa bawat trade, halimbawa 0.5% hanggang 1%. Sa $100,000 na account, ang 0.5% na panganib ay katumbas ng $500 bawat posisyon.",
              "Sa maliit na panganib sa bawat trade, malabong umabot sa daily loss limit ang sunod-sunod na talo, kaya makakapaghintay ka nang matiyaga sa mga setup na may makatwirang Risk/Reward. Pangkalahatang edukasyonal na nilalaman ito, hindi payo sa pamumuhunan."
            ]
          },
          {
            "heading": "3. Subaybayan ang mga Limitasyon ng Iyong Programa",
            "paragraphs": [
              "May sariling minimum na araw ng trading, leverage, at loss limit ang bawat programa. Subaybayan ang mga ito sa iyong dashboard at tandaang hindi pinapayagan ang paghawak ng posisyon tuwing weekend."
            ]
          }
        ]
      },
      "hi": {
        "title": "सिम्युलेटेड मूल्यांकन प्रोग्राम में जोखिम प्रबंधन का अनुशासन",
        "excerpt": "पोज़िशन साइज़ का प्रबंधन और दैनिक हानि सीमा का सम्मान सिम्युलेटेड मूल्यांकन प्रोग्राम में ट्रेडिंग की नींव है...",
        "category": "जोखिम प्रबंधन",
        "readTime": "5 मिनट पढ़ें",
        "authorRole": "ERACEX टीम",
        "content": [
          {
            "heading": "1. मूल्यांकन शुरू करते समय ऊँची अपेक्षाओं का जाल",
            "paragraphs": [
              "एक आम गलती मूल्यांकन प्रोग्राम को ऊँचे दाँव वाले जुए की तरह लेना है। बड़ा खाता आकार देखकर कई ट्रेडर लाभ लक्ष्य जल्दी पाने की उम्मीद में ज़रूरत से ज़्यादा लीवरेज ले लेते हैं।",
              "दैनिक हानि और अधिकतम हानि सीमाएँ अनुशासित जोखिम आदतें विकसित करने के लिए हैं। Two-Step में दैनिक हानि 5% और अधिकतम हानि 10% है, equity आधारित; One-Step और Instant में सीमाएँ अधिक सख्त हैं। भुगतान से पहले अपने चुने हुए प्रोग्राम के नियम पढ़ें।"
            ]
          },
          {
            "heading": "2. प्रति ट्रेड छोटा जोखिम",
            "paragraphs": [
              "एक आम सिद्धांत है कि प्रति ट्रेड खाते का केवल छोटा हिस्सा जोखिम में डालें, जैसे 0.5% से 1%। $100,000 के खाते पर 0.5% जोखिम प्रति पोज़िशन $500 के बराबर है।",
              "प्रति ट्रेड छोटे जोखिम के साथ, लगातार घाटे की श्रृंखला के दैनिक हानि सीमा तक पहुँचने की संभावना कम रहती है, जिससे आप उचित Risk/Reward वाले सेटअप का धैर्य से इंतज़ार कर सकते हैं। यह सामान्य शैक्षिक सामग्री है, निवेश सलाह नहीं।"
            ]
          },
          {
            "heading": "3. अपने प्रोग्राम की सीमाओं पर नज़र रखें",
            "paragraphs": [
              "हर प्रोग्राम के अपने न्यूनतम ट्रेडिंग दिन, लीवरेज और हानि सीमाएँ होती हैं। उन्हें अपने डैशबोर्ड में देखें और याद रखें कि सप्ताहांत में पोज़िशन होल्ड करना अनुमत नहीं है।"
            ]
          }
        ]
      },
      "ko": {
        "title": "프랍펌 챌린지 합격 마스터: 리스크 관리 규율과 4% 일일 드로다운 준수법",
        "excerpt": "프랍펌 평가에서 탈락하는 트레이더의 90% 이상은 기술적 지식이 부족해서가 아니라, 과도한 포지션 진입과 빠른 부를 바라는 조급한 심리 때문입니다...",
        "category": "리스크 관리",
        "readTime": "6분 소요",
        "authorRole": "리스크 관리 총괄 책임자, ERACEX",
        "content": [
          {
            "heading": "1. 챌린지 시작 시 빠지기 쉬운 치명적 심리적 함정",
            "paragraphs": [
              "신규 프랍 트레이더들이 저지르는 가장 치명적인 실수 중 하나는 평가 챌린지를 카지노 도박처럼 대하는 것입니다. $100,000 또는 $200,000의 대규모 계정 규모를 마주하면 1~2일 만에 8% 목표를 달성하려는 욕심으로 과도한 레버리지를 일으키게 됩니다.",
              "ERACEX의 4% 일일 손실 한도는 전문 펀드 매니저로서의 규율을 훈련하기 위해 정밀하게 설계되었습니다. 시장에는 기회가 항상 존재하며, 손실 사이클을 침착하게 넘기는 자만이 장기적 승자가 됩니다."
            ]
          },
          {
            "heading": "2. 주문당 0.5% ~ 1.0% 리스크 제한의 황금률",
            "paragraphs": [
              "성공한 고액 펀딩 트레이더들의 핵심 조언: 단일 포지션에 시작 잔고의 0.5%~1.0% 이상을 절대 베팅하지 마십시오. $100,000 계정 기준 최대 스톱로스 허용치는 $500~$1,000 사이여야 합니다.",
              "포지션당 0.5% 리스크를 유지하면 하루에 8회 연속 손절매가 발생해야 비로소 일일 손실 한도(4%)에 도달합니다. 이 수학적 완충 장치는 심리적 패닉을 원천 차단하여 최소 1:2 이상의 손익비 기회를 여유롭게 기다릴 수 있게 해줍니다."
            ]
          },
          {
            "heading": "3. 최소 거래일수 제한 없음의 장점 활용",
            "paragraphs": [
              "ERACEX는 최소 또는 최대 거래 일수를 강제하지 않으므로, 시장 구조가 불분명하거나 횡보할 때는 무리하게 진입하지 말고 관망하십시오. 자신의 거래 일정과 원칙을 온전히 스스로 통제할 수 있습니다."
            ]
          }
        ]
      },
      "ru": {
        "title": "Мастерство в Челленджах Проп-Фин: Дисциплина Управления Рисками и 4% Дневной Просадки",
        "excerpt": "Более 90% трейдеров проваливают отбор в проп-компании не из-за отсутствия индикаторов, а из-за неверного размера позиций и желания быстро обогатиться...",
        "category": "Управление Рисками",
        "readTime": "6 мин чтения",
        "authorRole": "Руководитель Оценки Рисков, ERACEX",
        "content": [
          {
            "heading": "1. Роковая Психологическая Ловушка на Старте Челленджа",
            "paragraphs": [
              "Одна из самых распространенных ошибок начинающих проп-трейдеров — относиться к испытанию как к игре в рулетку. Увидев счет на $100 000 или $200 000, многие открывают завышенные объемы в попытке заработать 8% за 1-2 дня.",
              "В ERACEX дневной лимит просадки 4% создан специально для того, чтобы привить трейдеру дисциплину профессионального управляющего активами. Рынок полон возможностей; выживание в неблагоприятные периоды — ключ к стабильной прибыли."
            ]
          },
          {
            "heading": "2. Золотое Правило Риска 0.5% - 1.0% на Сделку",
            "paragraphs": [
              "Главный совет трейдеров с крупными финансируемыми счетами: никогда не рискуйте более чем 0.5%–1.0% от начального баланса в одной сделке. Для счета $100 000 стоп-лосс не должен превышать $500–$1 000.",
              "При риске 0.5% вам потребуется получить 8 убыточных сделок подряд в один день, чтобы коснуться 4% дневного лимита. Эта математическая защита исключает эмоциональные срывы и позволяет терпеливо дожидаться сетапов с соотношением риск/прибыль от 1:2."
            ]
          },
          {
            "heading": "3. Преимущество Отсутствия Минимальных Дней Торговли",
            "paragraphs": [
              "Поскольку ERACEX не устанавливает минимальных или максимальных ограничений по времени, вы можете оставаться вне рынка при отсутствии четких торговых условий. Вы полностью управляете своим рабочим графиком."
            ]
          }
        ]
      },
      "ar": {
        "title": "احتراف اجتياز تحديات شركات التمويل: انضباط إدارة المخاطر وتراجع يومي 4%",
        "excerpt": "أكثر من 90% من المتداولين يفشلون في تقييمات شركات التمويل ليس لنقص المعرفة الفنية، بل لسوء إدارة أحجام العقود والرغبة في الثراء السريع...",
        "category": "إدارة المخاطر",
        "readTime": "6 دقائق للقراءة",
        "authorRole": "رئيس قسم تقييم المخاطر، ERACEX",
        "content": [
          {
            "heading": "1. الفخ النفسي القاتل عند بدء التحدي",
            "paragraphs": [
              "من أخطر الأخطاء الشائعة التعامل مع حساب التحدي وكأنه رهان قمار. عند رؤية رأس مال قدره 100,000$ أو 200,000$، يفرط المتداولون في الرافعة المالية آملين في تحقيق 8% في غضون يوم أو يومين.",
              "في ERACEX، تم وضع حد التراجع اليومي بنسبة 4% لغرس الانضباط الصارم لمديري الصناديق المحترفين. الفرص في السوق لا تنتهي أبداً؛ والقدرة على حماية رأس المال أثناء فترات التراجع هي الفارق بين المتداول الرابح والخاسر."
            ]
          },
          {
            "heading": "2. القاعدة الذهبية: مخاطرة 0.5% إلى 1.0% لكل صفقة",
            "paragraphs": [
              "النصيحة الأهم من المتداولين الممولين الناجحين: لا تخاطر أبداً بأكثر من 0.5% إلى 1.0% من رصيدك الأولي في الصفقة الواحدة. في حساب 100,000$، يجب أن يتراوح وقف الخسارة بين 500$ و1,000$.",
              "مع نسبة مخاطرة 0.5%، ستحتاج إلى 8 صفقات خاسرة متتالية في يوم واحد لملامسة حد التراجع اليومي 4%. يوفر هذا الدرع الحسابي راحة نفسية ويمنحك الصبر لانتظار صفقات بنسبة عائد إلى مخاطرة 1:2 أو أكثر."
            ]
          },
          {
            "heading": "3. الاستفادة من عدم اشتراط حد أدنى لأيام التداول",
            "paragraphs": [
              "نظراً لأن ERACEX لا تفرض حداً أدنى أو أقصى لأيام التداول، يمكنك الامتناع عن دخول السوق عندما تكون الحركة غير واضحة. أنت المتحكم الكامل في جدولك الزمني واستراتيجيتك الخاصة."
            ]
          }
        ]
      },
      "nl": {
        "title": "Prop Firm Challenge Succes: Risicobeheersing en 4% Dagelijkse Drawdown",
        "excerpt": "Meer dan 90% van de traders slaagt niet voor evaluaties, niet door gebrek aan technische kennis, maar door verkeerde positiegroottes en de drang om snel rijk te worden...",
        "category": "Risicobeheer",
        "readTime": "6 min leestijd",
        "authorRole": "Hoofd Risicobeoordeling, ERACEX",
        "content": [
          {
            "heading": "1. De Fatale Psychologische Val bij de Start",
            "paragraphs": [
              "Een van de grootste fouten van beginnende prop traders is de evaluatie zien als een casinospel. Met een koopkracht van $100.000 of $200.000 nemen velen te veel risico in de hoop het winstdoel van 8% in 1-2 dagen te halen.",
              "Bij ERACEX is de dagelijkse drawdown-limiet van 4% ontworpen om de discipline van een professionele vermogensbeheerder bij te brengen. Kansen zijn er altijd; het beheersen van verliesperiodes maakt een winstgevende trader."
            ]
          },
          {
            "heading": "2. De Gouden Regel: 0,5% tot 1,0% Risico per Trade",
            "paragraphs": [
              "Het advies van succesvolle gefinancierde traders: riskeer nooit meer dan 0,5% tot 1,0% van het startkapitaal per trade. Op een $100.000 account ligt de maximale stop-loss tussen $500 en $1.000.",
              "Met 0,5% risico moet u 8 opeenvolgende verliezen op één dag lijden om de 4% limiet te raken. Deze buffer voorkomt paniek en stelt u in staat te wachten op kansen met een Risk/Reward van minimaal 1:2."
            ]
          },
          {
            "heading": "3. Profiteer van het Ontbreken van Minimale Handelsdagen",
            "paragraphs": [
              "Omdat ERACEX geen minimale of maximale handelsdagen verplicht stelt, kunt u wachten wanneer de markt zijwaarts of onvoorspelbaar is. U behoudt de volledige regie over uw eigen agenda."
            ]
          }
        ]
      }
    }
  },
  {
    "slug": "minimum-trading-days",
    "title": "Hiểu Về Số Ngày Giao Dịch Tối Thiểu Trong Từng Chương Trình",
    "excerpt": "Số ngày giao dịch tối thiểu khác nhau giữa các chương trình. Hãy xem quy tắc trước khi thanh toán...",
    "author": "ERACEX Team",
    "authorRole": "Đội ngũ ERACEX",
    "date": "25/10/2026",
    "readTime": "4 phút đọc",
    "category": "Quy Tắc Chương Trình",
    "coverGradient": "from-[#f6bf4a]/20 via-[#f6bf4a]/10 to-transparent",
    "content": [
      {
        "heading": "1. Số Ngày Tối Thiểu Là Gì?",
        "paragraphs": [
          "Số ngày giao dịch tối thiểu là số ngày bạn cần có hoạt động giao dịch trước khi một giai đoạn được tính là hoàn thành. Với Two-Step, mỗi bước yêu cầu tối thiểu 5 ngày; tài khoản funded không yêu cầu số ngày tối thiểu.",
          "Với One-Step, giai đoạn đánh giá yêu cầu 5 ngày. Instant Funding cũng yêu cầu 5 ngày và có thời gian chờ rút lần đầu là 14 ngày."
        ]
      },
      {
        "heading": "2. Lập Kế Hoạch Giao Dịch Theo Quy Tắc",
        "paragraphs": [
          "Biết trước số ngày tối thiểu giúp bạn lập kế hoạch giao dịch phù hợp thay vì vội vàng. Hãy kết hợp điều này với giới hạn lỗ theo ngày và lỗ tối đa của chương trình.",
          "Một số tùy chọn trả phí cho phép giảm số ngày giao dịch tối thiểu. Chi tiết được hiển thị trên trang bảng giá trước khi bạn thanh toán."
        ]
      }
    ],
    "translations": {
      "en": {
        "title": "Understanding Minimum Trading Days in Each Program",
        "excerpt": "Minimum trading days differ between programs. Review the rules before you pay...",
        "category": "Program Rules",
        "readTime": "4 min read",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. What Are Minimum Trading Days?",
            "paragraphs": [
              "Minimum trading days are the number of days with trading activity required before a phase counts as complete. On Two-Step each step requires a minimum of 5 days; funded accounts have no minimum.",
              "On One-Step the evaluation phase requires 5 days. Instant Funding also requires 5 days and has a 14 day wait before the first withdrawal."
            ]
          },
          {
            "heading": "2. Plan Your Trading Around the Rules",
            "paragraphs": [
              "Knowing the minimum days in advance helps you plan your trading instead of rushing. Combine it with the daily loss and max loss limits of your program.",
              "Some paid add-ons reduce the minimum trading days. Details are shown on the pricing page before you pay."
            ]
          }
        ]
      },
      "zh": {
        "title": "了解各计划的最少交易天数",
        "excerpt": "最少交易天数因计划而异。付款前请先查看规则...",
        "category": "计划规则",
        "readTime": "阅读约4分钟",
        "authorRole": "ERACEX团队",
        "content": [
          {
            "heading": "1. 什么是最少交易天数？",
            "paragraphs": [
              "最少交易天数是指某个阶段被视为完成之前，需要有交易活动的天数。在Two-Step中，每个步骤至少需要5天；资金账户没有最低天数要求。",
              "在One-Step中，评估阶段需要5天。Instant Funding同样需要5天，并且首次提现前有14天的等待期。"
            ]
          },
          {
            "heading": "2. 按规则规划你的交易",
            "paragraphs": [
              "提前了解最少天数，有助于你规划交易而不是匆忙行事。请结合所选计划的每日亏损限额和最大亏损限额一起考虑。",
              "部分付费附加选项可以减少最少交易天数。详情会在付款前显示在价格页面上。"
            ]
          }
        ]
      },
      "ja": {
        "title": "各プログラムの最低取引日数を理解する",
        "excerpt": "最低取引日数はプログラムによって異なります。お支払い前にルールをご確認ください...",
        "category": "プログラムルール",
        "readTime": "4分で読めます",
        "authorRole": "ERACEXチーム",
        "content": [
          {
            "heading": "1. 最低取引日数とは？",
            "paragraphs": [
              "最低取引日数とは、フェーズが完了と見なされるまでに必要な、取引活動のある日数です。Two-Stepでは各ステップで最低5日が必要で、ファンデッドアカウントには最低日数はありません。",
              "One-Stepでは評価フェーズに5日が必要です。Instant Fundingも5日が必要で、初回出金までに14日間の待機期間があります。"
            ]
          },
          {
            "heading": "2. ルールに沿って取引を計画する",
            "paragraphs": [
              "最低日数を事前に把握しておけば、焦らずに取引を計画できます。プログラムの日次損失上限と最大損失上限もあわせて確認しましょう。",
              "一部の有料アドオンでは最低取引日数を短縮できます。詳細はお支払い前に料金ページに表示されます。"
            ]
          }
        ]
      },
      "es": {
        "title": "Entender los Días Mínimos de Trading en Cada Programa",
        "excerpt": "Los días mínimos de trading varían entre programas. Revisa las reglas antes de pagar...",
        "category": "Reglas del Programa",
        "readTime": "4 min de lectura",
        "authorRole": "Equipo ERACEX",
        "content": [
          {
            "heading": "1. ¿Qué Son los Días Mínimos de Trading?",
            "paragraphs": [
              "Los días mínimos de trading son el número de días con actividad de trading que se requieren para que una fase se considere completada. En Two-Step cada paso exige un mínimo de 5 días; las cuentas funded no tienen mínimo.",
              "En One-Step la fase de evaluación requiere 5 días. Instant Funding también requiere 5 días y tiene una espera de 14 días antes del primer retiro."
            ]
          },
          {
            "heading": "2. Planifica tu Trading Según las Reglas",
            "paragraphs": [
              "Conocer los días mínimos con antelación te ayuda a planificar tu trading en lugar de precipitarte. Combínalo con los límites de pérdida diaria y de pérdida máxima de tu programa.",
              "Algunos complementos de pago reducen los días mínimos de trading. Los detalles se muestran en la página de precios antes de pagar."
            ]
          }
        ]
      },
      "pt": {
        "title": "Entendendo os Dias Mínimos de Trading em Cada Programa",
        "excerpt": "Os dias mínimos de trading variam entre os programas. Revise as regras antes de pagar...",
        "category": "Regras do Programa",
        "readTime": "4 min de leitura",
        "authorRole": "Equipe ERACEX",
        "content": [
          {
            "heading": "1. O Que São os Dias Mínimos de Trading?",
            "paragraphs": [
              "Os dias mínimos de trading são o número de dias com atividade de trading exigidos para que uma fase seja considerada concluída. No Two-Step cada etapa exige no mínimo 5 dias; contas funded não têm mínimo.",
              "No One-Step a fase de avaliação exige 5 dias. O Instant Funding também exige 5 dias e tem uma espera de 14 dias antes do primeiro saque."
            ]
          },
          {
            "heading": "2. Planeje seu Trading Conforme as Regras",
            "paragraphs": [
              "Saber os dias mínimos com antecedência ajuda a planejar seu trading em vez de se apressar. Combine isso com os limites de perda diária e de perda máxima do seu programa.",
              "Alguns complementos pagos reduzem os dias mínimos de trading. Os detalhes são exibidos na página de preços antes de você pagar."
            ]
          }
        ]
      },
      "fr": {
        "title": "Comprendre les jours de trading minimum de chaque programme",
        "excerpt": "Les jours de trading minimum diffèrent selon les programmes. Consultez les règles avant de payer...",
        "category": "Règles du programme",
        "readTime": "4 min de lecture",
        "authorRole": "Équipe ERACEX",
        "content": [
          {
            "heading": "1. Que sont les jours de trading minimum ?",
            "paragraphs": [
              "Les jours de trading minimum correspondent au nombre de jours avec activité de trading requis avant qu'une phase soit considérée comme terminée. Sur Two-Step, chaque étape exige au minimum 5 jours ; les comptes funded n'ont pas de minimum.",
              "Sur One-Step, la phase d'évaluation exige 5 jours. Instant Funding exige aussi 5 jours et impose une attente de 14 jours avant le premier retrait."
            ]
          },
          {
            "heading": "2. Planifiez votre trading selon les règles",
            "paragraphs": [
              "Connaître à l'avance les jours minimum vous aide à planifier votre trading plutôt qu'à vous précipiter. Combinez-les avec les limites de perte quotidienne et de perte maximale de votre programme.",
              "Certaines options payantes réduisent les jours de trading minimum. Les détails sont affichés sur la page des tarifs avant le paiement."
            ]
          }
        ]
      },
      "de": {
        "title": "Mindesthandelstage in jedem Programm verstehen",
        "excerpt": "Die Mindesthandelstage unterscheiden sich je nach Programm. Prüfen Sie die Regeln, bevor Sie zahlen...",
        "category": "Programmregeln",
        "readTime": "4 Min. Lesezeit",
        "authorRole": "ERACEX-Team",
        "content": [
          {
            "heading": "1. Was sind Mindesthandelstage?",
            "paragraphs": [
              "Mindesthandelstage sind die Anzahl der Tage mit Handelsaktivität, die erforderlich sind, bevor eine Phase als abgeschlossen gilt. Bei Two-Step verlangt jeder Schritt mindestens 5 Tage; Funded-Konten haben kein Minimum.",
              "Bei One-Step verlangt die Evaluierungsphase 5 Tage. Auch Instant Funding verlangt 5 Tage und hat eine Wartezeit von 14 Tagen bis zur ersten Auszahlung."
            ]
          },
          {
            "heading": "2. Planen Sie Ihr Trading nach den Regeln",
            "paragraphs": [
              "Wenn Sie die Mindesttage im Voraus kennen, können Sie Ihr Trading planen, statt zu hetzen. Kombinieren Sie dies mit den Limits für Tagesverlust und Maximalverlust Ihres Programms.",
              "Einige kostenpflichtige Add-ons verringern die Mindesthandelstage. Details werden vor der Zahlung auf der Preisseite angezeigt."
            ]
          }
        ]
      },
      "it": {
        "title": "Capire i giorni minimi di trading in ogni programma",
        "excerpt": "I giorni minimi di trading variano da un programma all'altro. Leggi le regole prima di pagare...",
        "category": "Regole del programma",
        "readTime": "4 min di lettura",
        "authorRole": "Team ERACEX",
        "content": [
          {
            "heading": "1. Cosa sono i giorni minimi di trading?",
            "paragraphs": [
              "I giorni minimi di trading sono il numero di giorni con attività di trading richiesti prima che una fase sia considerata completata. Su Two-Step ogni step richiede un minimo di 5 giorni; i conti funded non hanno un minimo.",
              "Su One-Step la fase di valutazione richiede 5 giorni. Anche Instant Funding richiede 5 giorni e prevede un'attesa di 14 giorni prima del primo prelievo."
            ]
          },
          {
            "heading": "2. Pianifica il tuo trading in base alle regole",
            "paragraphs": [
              "Conoscere in anticipo i giorni minimi ti aiuta a pianificare il trading invece di avere fretta. Abbinali ai limiti di perdita giornaliera e di perdita massima del tuo programma.",
              "Alcuni add-on a pagamento riducono i giorni minimi di trading. I dettagli sono mostrati nella pagina dei prezzi prima del pagamento."
            ]
          }
        ]
      },
      "pl": {
        "title": "Zrozumieć minimalną liczbę dni handlowych w każdym programie",
        "excerpt": "Minimalna liczba dni handlowych różni się między programami. Zapoznaj się z zasadami przed zapłatą...",
        "category": "Zasady programu",
        "readTime": "4 min czytania",
        "authorRole": "Zespół ERACEX",
        "content": [
          {
            "heading": "1. Czym są minimalne dni handlowe?",
            "paragraphs": [
              "Minimalne dni handlowe to liczba dni z aktywnością handlową wymagana, aby etap został uznany za ukończony. W Two-Step każdy krok wymaga minimum 5 dni; konta funded nie mają minimum.",
              "W One-Step faza oceny wymaga 5 dni. Instant Funding również wymaga 5 dni i ma 14-dniowy okres oczekiwania przed pierwszą wypłatą."
            ]
          },
          {
            "heading": "2. Zaplanuj trading zgodnie z zasadami",
            "paragraphs": [
              "Znajomość minimalnej liczby dni z góry pomaga planować trading zamiast się spieszyć. Połącz to z limitami dziennej i maksymalnej straty w Twoim programie.",
              "Niektóre płatne dodatki skracają minimalną liczbę dni handlowych. Szczegóły są pokazane na stronie cennika przed zapłatą."
            ]
          }
        ]
      },
      "tr": {
        "title": "Her Programdaki Minimum İşlem Günlerini Anlamak",
        "excerpt": "Minimum işlem günleri programlara göre farklılık gösterir. Ödeme yapmadan önce kuralları inceleyin...",
        "category": "Program Kuralları",
        "readTime": "4 dk okuma",
        "authorRole": "ERACEX Ekibi",
        "content": [
          {
            "heading": "1. Minimum İşlem Günleri Nedir?",
            "paragraphs": [
              "Minimum işlem günleri, bir aşamanın tamamlanmış sayılması için gereken işlem faaliyeti bulunan gün sayısıdır. Two-Step'te her adım en az 5 gün gerektirir; funded hesaplarda minimum yoktur.",
              "One-Step'te değerlendirme aşaması 5 gün gerektirir. Instant Funding de 5 gün gerektirir ve ilk çekimden önce 14 günlük bir bekleme süresi vardır."
            ]
          },
          {
            "heading": "2. İşlemlerinizi Kurallara Göre Planlayın",
            "paragraphs": [
              "Minimum günleri önceden bilmek, acele etmek yerine işlemlerinizi planlamanıza yardımcı olur. Bunu programınızın günlük kayıp ve maksimum kayıp limitleriyle birlikte değerlendirin.",
              "Bazı ücretli eklentiler minimum işlem günlerini azaltır. Ayrıntılar, ödeme yapmadan önce fiyatlandırma sayfasında gösterilir."
            ]
          }
        ]
      },
      "id": {
        "title": "Memahami Hari Trading Minimum di Setiap Program",
        "excerpt": "Hari trading minimum berbeda antar program. Tinjau aturannya sebelum Anda membayar...",
        "category": "Aturan Program",
        "readTime": "4 menit baca",
        "authorRole": "Tim ERACEX",
        "content": [
          {
            "heading": "1. Apa Itu Hari Trading Minimum?",
            "paragraphs": [
              "Hari trading minimum adalah jumlah hari dengan aktivitas trading yang diperlukan sebelum suatu fase dianggap selesai. Pada Two-Step setiap tahap membutuhkan minimum 5 hari; akun funded tidak memiliki minimum.",
              "Pada One-Step fase evaluasi membutuhkan 5 hari. Instant Funding juga membutuhkan 5 hari dan memiliki masa tunggu 14 hari sebelum penarikan pertama."
            ]
          },
          {
            "heading": "2. Rencanakan Trading Anda Sesuai Aturan",
            "paragraphs": [
              "Mengetahui hari minimum sejak awal membantu Anda merencanakan trading alih-alih terburu-buru. Gabungkan dengan batas kerugian harian dan kerugian maksimum program Anda.",
              "Beberapa add-on berbayar mengurangi hari trading minimum. Detailnya ditampilkan di halaman harga sebelum Anda membayar."
            ]
          }
        ]
      },
      "th": {
        "title": "ทำความเข้าใจวันเทรดขั้นต่ำในแต่ละโปรแกรม",
        "excerpt": "วันเทรดขั้นต่ำแตกต่างกันในแต่ละโปรแกรม โปรดตรวจสอบกฎก่อนชำระเงิน...",
        "category": "กฎของโปรแกรม",
        "readTime": "อ่าน 4 นาที",
        "authorRole": "ทีม ERACEX",
        "content": [
          {
            "heading": "1. วันเทรดขั้นต่ำคืออะไร",
            "paragraphs": [
              "วันเทรดขั้นต่ำคือจำนวนวันที่ต้องมีกิจกรรมการเทรดก่อนที่ขั้นตอนหนึ่งจะนับว่าเสร็จสมบูรณ์ ใน Two-Step แต่ละขั้นตอนต้องมีอย่างน้อย 5 วัน ส่วนบัญชี funded ไม่มีขั้นต่ำ",
              "ใน One-Step ขั้นตอนการประเมินต้องใช้ 5 วัน Instant Funding ก็ต้องใช้ 5 วันเช่นกัน และต้องรอ 14 วันก่อนการถอนครั้งแรก"
            ]
          },
          {
            "heading": "2. วางแผนการเทรดตามกฎ",
            "paragraphs": [
              "การรู้จำนวนวันขั้นต่ำล่วงหน้าช่วยให้คุณวางแผนการเทรดแทนที่จะเร่งรีบ ควรพิจารณาร่วมกับขีดจำกัดการขาดทุนรายวันและขาดทุนสูงสุดของโปรแกรมคุณ",
              "ส่วนเสริมแบบชำระเงินบางรายการช่วยลดวันเทรดขั้นต่ำ รายละเอียดจะแสดงในหน้าราคาก่อนชำระเงิน"
            ]
          }
        ]
      },
      "fil": {
        "title": "Pag-unawa sa Minimum na Araw ng Trading sa Bawat Programa",
        "excerpt": "Magkakaiba ang minimum na araw ng trading sa bawat programa. Suriin ang mga patakaran bago magbayad...",
        "category": "Mga Patakaran ng Programa",
        "readTime": "4 min na basahin",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. Ano ang Minimum na Araw ng Trading?",
            "paragraphs": [
              "Ang minimum na araw ng trading ay ang bilang ng mga araw na may trading activity na kailangan bago ituring na kumpleto ang isang yugto. Sa Two-Step, bawat hakbang ay nangangailangan ng hindi bababa sa 5 araw; walang minimum ang mga funded account.",
              "Sa One-Step, ang evaluation phase ay nangangailangan ng 5 araw. Ang Instant Funding ay nangangailangan din ng 5 araw at may paghihintay na 14 na araw bago ang unang withdrawal."
            ]
          },
          {
            "heading": "2. Planuhin ang Iyong Trading Ayon sa mga Patakaran",
            "paragraphs": [
              "Ang pagkaalam ng minimum na araw nang maaga ay tumutulong sa iyong magplano ng trading sa halip na magmadali. Isama ito sa daily loss at max loss limit ng iyong programa.",
              "Binabawasan ng ilang bayad na add-on ang minimum na araw ng trading. Ipinapakita ang mga detalye sa pricing page bago ka magbayad."
            ]
          }
        ]
      },
      "hi": {
        "title": "हर प्रोग्राम में न्यूनतम ट्रेडिंग दिनों को समझें",
        "excerpt": "न्यूनतम ट्रेडिंग दिन प्रोग्राम के अनुसार अलग-अलग होते हैं। भुगतान से पहले नियम देखें...",
        "category": "प्रोग्राम नियम",
        "readTime": "4 मिनट पढ़ें",
        "authorRole": "ERACEX टीम",
        "content": [
          {
            "heading": "1. न्यूनतम ट्रेडिंग दिन क्या हैं?",
            "paragraphs": [
              "न्यूनतम ट्रेडिंग दिन वे दिन हैं जिनमें किसी चरण को पूरा माने जाने से पहले ट्रेडिंग गतिविधि ज़रूरी होती है। Two-Step में हर चरण के लिए कम से कम 5 दिन चाहिए; funded खातों के लिए कोई न्यूनतम नहीं है।",
              "One-Step में मूल्यांकन चरण के लिए 5 दिन चाहिए। Instant Funding में भी 5 दिन चाहिए और पहली निकासी से पहले 14 दिन की प्रतीक्षा होती है।"
            ]
          },
          {
            "heading": "2. नियमों के अनुसार अपनी ट्रेडिंग की योजना बनाएँ",
            "paragraphs": [
              "न्यूनतम दिन पहले से जानने से आप जल्दबाज़ी करने के बजाय ट्रेडिंग की योजना बना पाते हैं। इसे अपने प्रोग्राम की दैनिक हानि और अधिकतम हानि सीमाओं के साथ जोड़कर देखें।",
              "कुछ सशुल्क ऐड-ऑन न्यूनतम ट्रेडिंग दिनों को घटाते हैं। विवरण भुगतान से पहले मूल्य निर्धारण पृष्ठ पर दिखाए जाते हैं।"
            ]
          }
        ]
      },
      "ko": {
        "title": "ERACEX가 펀딩 트레이더에게 최소 거래일수를 요구하지 않는 이유",
        "excerpt": "기존의 전통 프랍펌들은 무리한 뇌동매매를 유도하는 인위적 기한을 부여해왔습니다. 무제한 거래 기간과 0일 최소 거래 규정이 트레이더의 자본을 지키는 이유를 확인하세요...",
        "category": "거래 규정",
        "readTime": "5분 소요",
        "authorRole": "최고운영책임자(COO), ERACEX",
        "content": [
          {
            "heading": "1. 인위적 기한 제한이 초래하는 숨은 위험",
            "paragraphs": [
              "수년간 기존 프랍 업체들은 트레이더에게 30일 이내에 단계를 완료하도록 강요하거나, 시장에 명확한 진입 신호가 없음에도 최소 5~10일 동안 억지로 거래하도록 규정했습니다. 이는 임의의 수치를 맞추기 위해 불리한 자리에 진입하게 만드는 독소 조항이었습니다.",
              "ERACEX는 이러한 인위적 시간 압박을 전면 폐지했습니다. 우리는 매수나 매도 버튼을 얼마나 자주 누르는지가 아니라 철저한 리스크 관리, 드로다운 원칙 준수, 그리고 순수한 수익성을 기준으로 트레이더의 역량을 평가합니다."
            ]
          },
          {
            "heading": "2. 우위가 있을 때만 진입하고, 없을 때는 100% 현금 보유",
            "paragraphs": [
              "시장의 흐름은 고변동성과 횡보를 주기적으로 오갑니다. 불확실한 거시경제 지표 발표 시기에 어떠한 페널티도 없이 100% 현금을 보유하며 안전하게 대기할 수 있는 자유야말로 전문 트레이더의 가장 강력한 무기입니다."
            ]
          }
        ]
      },
      "ru": {
        "title": "Почему ERACEX Не Требует Минимального Количества Торговых Дней",
        "excerpt": "Традиционные проп-компании навязывают искусственные временные рамки, провоцирующие эмоциональный трейдинг. Узнайте, почему бессрочный период и 0 мин. дней защищают ваш капитал...",
        "category": "Правила Торговли",
        "readTime": "5 мин чтения",
        "authorRole": "Операционный Директор (COO), ERACEX",
        "content": [
          {
            "heading": "1. Скрытая Ловушка Искусственных Временных Ограничений",
            "paragraphs": [
              "Многие годы проп-фирмы заставляли трейдеров проходить челленджи за 30 дней или совершать не менее 5-10 сделок, даже когда рынок не давал качественных сигналов. Это приводило к неоправданному риску ради выполнения формальных требований.",
              "ERACEX полностью отменил давление времени. Мы оцениваем ваш профессионализм исключительно по контролю рисков, соблюдению просадки и прибыльности, а не по частоте нажатия кнопок покупки или продажи."
            ]
          },
          {
            "heading": "2. Торгуйте при Наличии Сигнала, Оставайтесь в Кэше при Его Отсутствии",
            "paragraphs": [
              "Рыночные условия меняются от высокой волатильности до затяжного флэта. Свобода оставаться на 100% в деньгах во время неопределенности без риска штрафов — главное преимущество трейдера."
            ]
          }
        ]
      },
      "ar": {
        "title": "لماذا تطبق ERACEX سياسة عدم اشتراط حد أدنى لأيام التداول للمتداولين الممولين",
        "excerpt": "تفرض شركات التمويل التقليدية قيوداً زمنية مصطنعة تدفع المتداول إلى الانتقام من السوق. اكتشف كيف تحمي المدة المفتوحة وعدم اشتراط أيام تداول رأس مالك...",
        "category": "قواعد التداول",
        "readTime": "5 دقائق للقراءة",
        "authorRole": "المدير التنفيذي للعمليات (COO)، ERACEX",
        "content": [
          {
            "heading": "1. الفخ الخفي للقيود الزمنية المصطنعة",
            "paragraphs": [
              "لسنوات طويلة، أجبرت شركات التمويل القديمة المتداولين على اجتياز المراحل خلال 30 يوماً أو فتح ما لا يقل عن 5 إلى 10 صفقات حتى لو لم تكن هناك أي فرصة واضحة. هذا الضغط كان يدفع المتداولين للمخاطرة في صفقات سيئة لمجرد استيفاء الشروط.",
              "ألغت ERACEX ضغط الوقت تماماً. نحن نقيّم أداءك بناءً على التحكم في المخاطر والالتزام بحدود التراجع والربحية، وليس بعدد المرات التي تضغط فيها على أمر شراء أو بيع."
            ]
          },
          {
            "heading": "2. تداول عند وجود الفرصة، وابقَ في السيولة عندما تغيب",
            "paragraphs": [
              "تتقلب ظروف السوق بين السيولة العالية والتحركات العرضية الضيقة. إن التمتع بالحرية الكاملة للبقاء في السيولة النقدية بنسبة 100% دون التعرض لأي عقوبة هو أعظم ميزة تنافسية للمتداول."
            ]
          }
        ]
      },
      "nl": {
        "title": "Waarom ERACEX Geen Minimale Handelsdagen Vereist voor Gefinancierde Traders",
        "excerpt": "Traditionele prop firms hanteren kunstmatige termijnen die aanzetten tot overtrading. Ontdek waarom een onbeperkte looptijd en 0 minimale dagen uw kapitaal beschermen...",
        "category": "Handelsregels",
        "readTime": "5 min leestijd",
        "authorRole": "Chief Operating Officer (COO), ERACEX",
        "content": [
          {
            "heading": "1. De Verborgen Valstrik van Tijdsdruk",
            "paragraphs": [
              "Jarenlang verplichtten traditionele partijen traders om fases binnen 30 dagen te voltooien of minstens 5-10 trades te plaatsen, zelfs als er geen goede setups waren. Dit leidde tot geforceerde posities enkel om aan regels te voldoen.",
              "ERACEX heeft deze kunstmatige tijdsdruk afgeschaft. Wij beoordelen prestaties puur op risicobeheersing, naleving van drawdown en winstgevendheid — niet op hoe vaak u op de koop- of verkoopknop klikt."
            ]
          },
          {
            "heading": "2. Handelen bij een Kans, Afwachten in Cash bij Onzekerheid",
            "paragraphs": [
              "Markten wisselen af tussen hoge volatiliteit en consolidatie. De vrijheid hebben om zonder sancties 100% in cash te blijven tijdens onzekere economische gebeurtenissen is het grootste voordeel van een trader."
            ]
          }
        ]
      }
    }
  },
  {
    "slug": "funded-account-payout-rules",
    "title": "Quy Tắc Rút Tiền Và Chi Trả Thưởng Trên Tài Khoản Funded",
    "excerpt": "Tìm hiểu thời gian chờ rút lần đầu, mức rút tối thiểu, tỷ lệ chia sẻ lợi nhuận cao và giới hạn 5 lần chi trả thưởng...",
    "author": "ERACEX Team",
    "authorRole": "Đội ngũ ERACEX",
    "date": "22/10/2026",
    "readTime": "5 phút đọc",
    "category": "Quy Tắc Chương Trình",
    "coverGradient": "from-[#f6bf4a]/20 via-[#f6bf4a]/10 to-transparent",
    "content": [
      {
        "heading": "1. Điều Kiện Rút Tiền",
        "paragraphs": [
          "Thời gian chờ rút lần đầu là 5 ngày với Two-Step và One-Step, và 14 ngày với Instant Funding. Mức rút tối thiểu là 1% lợi nhuận.",
          "Tỷ lệ chia sẻ lợi nhuận cao theo điều khoản của chương trình. Tùy chọn trả phí có thể nâng tỷ lệ chia sẻ, xem bảng phí."
        ]
      },
      {
        "heading": "2. Giới Hạn Chi Trả Và Vốn Cấp",
        "paragraphs": [
          "Mỗi tài khoản funded có tối đa 5 lần chi trả thưởng, sau đó tài khoản sẽ đóng. Tổng vốn cấp tối đa cho mỗi người dùng là $400,000, với tài khoản lớn nhất là $100,000.",
          "Phí chương trình không được hoàn lại sau khi quyền truy cập tài khoản đã được cấp."
        ]
      }
    ],
    "translations": {
      "en": {
        "title": "Withdrawal and Reward Payout Rules on Funded Accounts",
        "excerpt": "Learn about the first withdrawal wait, the minimum withdrawal, the high profit share and the limit of 5 reward payouts...",
        "category": "Program Rules",
        "readTime": "5 min read",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. Withdrawal Conditions",
            "paragraphs": [
              "The first withdrawal wait is 5 days for Two-Step and One-Step and 14 days for Instant Funding. The minimum withdrawal is 1% of profit.",
              "The profit share is high under the terms of each program. A paid add-on can raise the share, see the fee table."
            ]
          },
          {
            "heading": "2. Payout Limits and Funded Capital",
            "paragraphs": [
              "Each funded account has up to 5 reward payouts, after which the account closes. The maximum combined funded capital per user is $400,000, with the largest account at $100,000.",
              "Program fees are non-refundable once account access has been granted."
            ]
          }
        ]
      },
      "zh": {
        "title": "资金账户的提现与奖励支付规则",
        "excerpt": "了解首次提现等待期、最低提现额、高比例分成以及5次奖励支付的上限...",
        "category": "计划规则",
        "readTime": "阅读约5分钟",
        "authorRole": "ERACEX团队",
        "content": [
          {
            "heading": "1. 提现条件",
            "paragraphs": [
              "首次提现等待期：Two-Step和One-Step为5天，Instant Funding为14天。最低提现为利润的1%。",
              "利润分成比例较高,按各计划的条款执行。付费附加选项可提高分成比例,具体见费用表。"
            ]
          },
          {
            "heading": "2. 支付上限与资金账户资本",
            "paragraphs": [
              "每个资金账户最多可获得5次奖励支付，之后账户关闭。每位用户的最大合计资金账户资本为$400,000，最大单个账户为$100,000。",
              "账户访问权限开通后，计划费用不予退还。"
            ]
          }
        ]
      },
      "ja": {
        "title": "ファンデッドアカウントの出金とリワード支払いのルール",
        "excerpt": "初回出金までの待機期間、最低出金額、高い分配率、そして5回のリワード支払い上限について解説します...",
        "category": "プログラムルール",
        "readTime": "5分で読めます",
        "authorRole": "ERACEXチーム",
        "content": [
          {
            "heading": "1. 出金条件",
            "paragraphs": [
              "初回出金までの待機期間は、Two-StepとOne-Stepが5日、Instant Fundingが14日です。最低出金額は利益の1%です。",
              "利益分配率は高く設定されています。有料アドオンにより分配率を引き上げることができます。"
            ]
          },
          {
            "heading": "2. 支払い上限とファンデッド資金",
            "paragraphs": [
              "各ファンデッドアカウントでは最大5回のリワード支払いがあり、その後アカウントは終了します。ユーザーあたりの最大合計ファンデッド資金は$400,000で、最大のアカウントは$100,000です。",
              "アカウントへのアクセスが付与された後は、プログラム料金は返金されません。"
            ]
          }
        ]
      },
      "es": {
        "title": "Reglas de Retiro y Pago de Recompensas en Cuentas Funded",
        "excerpt": "Conoce la espera para el primer retiro, el retiro mínimo, el reparto alto y el límite de 5 pagos de recompensa...",
        "category": "Reglas del Programa",
        "readTime": "5 min de lectura",
        "authorRole": "Equipo ERACEX",
        "content": [
          {
            "heading": "1. Condiciones de Retiro",
            "paragraphs": [
              "La espera para el primer retiro es de 5 días en Two-Step y One-Step y de 14 días en Instant Funding. El retiro mínimo es del 1% del beneficio.",
              "El reparto de beneficios es alto según las condiciones de cada programa. Un complemento de pago puede aumentarlo, consulta la tabla de tarifas."
            ]
          },
          {
            "heading": "2. Límites de Pago y Capital Funded",
            "paragraphs": [
              "Cada cuenta funded tiene hasta 5 pagos de recompensa, después de los cuales la cuenta se cierra. El capital funded combinado máximo por usuario es de $400,000, con la cuenta más grande de $100,000.",
              "Las tarifas de los programas no son reembolsables una vez concedido el acceso a la cuenta."
            ]
          }
        ]
      },
      "pt": {
        "title": "Regras de Saque e Pagamento de Recompensas em Contas Funded",
        "excerpt": "Saiba mais sobre a espera para o primeiro saque, o saque mínimo, a divisão alta e o limite de 5 pagamentos de recompensa...",
        "category": "Regras do Programa",
        "readTime": "5 min de leitura",
        "authorRole": "Equipe ERACEX",
        "content": [
          {
            "heading": "1. Condições de Saque",
            "paragraphs": [
              "A espera para o primeiro saque é de 5 dias no Two-Step e One-Step e de 14 dias no Instant Funding. O saque mínimo é de 1% do lucro.",
              "A divisão de lucros é alta conforme os termos de cada programa. Um complemento pago pode aumentá-la, veja a tabela de taxas."
            ]
          },
          {
            "heading": "2. Limites de Pagamento e Capital Funded",
            "paragraphs": [
              "Cada conta funded tem até 5 pagamentos de recompensa, após os quais a conta é encerrada. O capital funded combinado máximo por usuário é de $400,000, com a maior conta de $100,000.",
              "As taxas dos programas não são reembolsáveis depois que o acesso à conta é concedido."
            ]
          }
        ]
      },
      "fr": {
        "title": "Règles de retrait et de versement des récompenses sur les comptes funded",
        "excerpt": "Découvrez le délai avant le premier retrait, le retrait minimum, le partage élevé et la limite de 5 versements de récompense...",
        "category": "Règles du programme",
        "readTime": "5 min de lecture",
        "authorRole": "Équipe ERACEX",
        "content": [
          {
            "heading": "1. Conditions de retrait",
            "paragraphs": [
              "Le délai avant le premier retrait est de 5 jours pour Two-Step et One-Step, et de 14 jours pour Instant Funding. Le retrait minimum est de 1 % du profit.",
              "Le partage des profits est élevé selon les conditions de chaque programme. Une option payante peut l'augmenter, voir le tableau des frais."
            ]
          },
          {
            "heading": "2. Limites de versement et capital funded",
            "paragraphs": [
              "Chaque compte funded bénéficie d'un maximum de 5 versements de récompense, après quoi le compte est clôturé. Le capital funded cumulé maximal par utilisateur est de 400 000 $, le plus grand compte étant de 100 000 $.",
              "Les frais des programmes ne sont pas remboursables une fois l'accès au compte accordé."
            ]
          }
        ]
      },
      "de": {
        "title": "Auszahlungs- und Belohnungsregeln für Funded-Konten",
        "excerpt": "Erfahren Sie mehr über die Wartezeit bis zur ersten Auszahlung, die Mindestauszahlung, die hohe Aufteilung und das Limit von 5 Belohnungsauszahlungen...",
        "category": "Programmregeln",
        "readTime": "5 Min. Lesezeit",
        "authorRole": "ERACEX-Team",
        "content": [
          {
            "heading": "1. Auszahlungsbedingungen",
            "paragraphs": [
              "Die Wartezeit bis zur ersten Auszahlung beträgt 5 Tage bei Two-Step und One-Step und 14 Tage bei Instant Funding. Die Mindestauszahlung beträgt 1 % des Gewinns.",
              "Die Gewinnaufteilung ist hoch und richtet sich nach den Bedingungen des jeweiligen Programms. Ein kostenpflichtiges Add-on kann sie erhöhen, siehe Gebührentabelle."
            ]
          },
          {
            "heading": "2. Auszahlungslimits und Funded-Kapital",
            "paragraphs": [
              "Jedes Funded-Konto hat bis zu 5 Belohnungsauszahlungen, danach wird das Konto geschlossen. Das maximale kombinierte Funded-Kapital pro Nutzer beträgt $400,000, wobei das größte Konto $100,000 umfasst.",
              "Programmgebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig."
            ]
          }
        ]
      },
      "it": {
        "title": "Regole di prelievo e pagamento delle ricompense sui conti funded",
        "excerpt": "Scopri l'attesa per il primo prelievo, il prelievo minimo, la ripartizione alta e il limite di 5 pagamenti di ricompensa...",
        "category": "Regole del programma",
        "readTime": "5 min di lettura",
        "authorRole": "Team ERACEX",
        "content": [
          {
            "heading": "1. Condizioni di prelievo",
            "paragraphs": [
              "L'attesa per il primo prelievo è di 5 giorni per Two-Step e One-Step e di 14 giorni per Instant Funding. Il prelievo minimo è dell'1% dell'utile.",
              "La ripartizione degli utili è alta secondo i termini di ciascun programma. Un add-on a pagamento può aumentarla, consulta la tabella delle commissioni."
            ]
          },
          {
            "heading": "2. Limiti di pagamento e capitale funded",
            "paragraphs": [
              "Ogni conto funded ha fino a 5 pagamenti di ricompensa, dopo i quali il conto viene chiuso. Il capitale funded complessivo massimo per utente è di $400,000, con il conto più grande da $100,000.",
              "Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso al conto."
            ]
          }
        ]
      },
      "pl": {
        "title": "Zasady wypłat i nagród na kontach funded",
        "excerpt": "Dowiedz się o okresie oczekiwania na pierwszą wypłatę, minimalnej wypłacie, wysokim podziale i limicie 5 wypłat nagród...",
        "category": "Zasady programu",
        "readTime": "5 min czytania",
        "authorRole": "Zespół ERACEX",
        "content": [
          {
            "heading": "1. Warunki wypłat",
            "paragraphs": [
              "Okres oczekiwania na pierwszą wypłatę wynosi 5 dni dla Two-Step i One-Step oraz 14 dni dla Instant Funding. Minimalna wypłata to 1% zysku.",
              "Podział zysków jest wysoki zgodnie z warunkami każdego programu. Płatny dodatek może go zwiększyć, zobacz tabelę opłat."
            ]
          },
          {
            "heading": "2. Limity wypłat i kapitał funded",
            "paragraphs": [
              "Każde konto funded ma do 5 wypłat nagród, po których konto zostaje zamknięte. Maksymalny łączny kapitał funded na użytkownika to $400,000, przy największym koncie $100,000.",
              "Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu do konta."
            ]
          }
        ]
      },
      "tr": {
        "title": "Funded Hesaplarda Çekim ve Ödül Ödemesi Kuralları",
        "excerpt": "İlk çekim bekleme süresini, minimum çekimi, yüksek paylaşımı ve 5 ödül ödemesi sınırını öğrenin...",
        "category": "Program Kuralları",
        "readTime": "5 dk okuma",
        "authorRole": "ERACEX Ekibi",
        "content": [
          {
            "heading": "1. Çekim Koşulları",
            "paragraphs": [
              "İlk çekim bekleme süresi Two-Step ve One-Step için 5 gün, Instant Funding için 14 gündür. Minimum çekim kârın %1'idir.",
              "Kâr paylaşımı yüksektir. Ücretli bir eklenti paylaşımı artırabilir, ücret tablosuna bakın."
            ]
          },
          {
            "heading": "2. Ödeme Sınırları ve Funded Sermaye",
            "paragraphs": [
              "Her funded hesap en fazla 5 ödül ödemesi alır; ardından hesap kapanır. Kullanıcı başına en yüksek toplam funded sermaye $400,000'dır ve en büyük hesap $100,000'dır.",
              "Hesap erişimi verildikten sonra program ücretleri iade edilmez."
            ]
          }
        ]
      },
      "id": {
        "title": "Aturan Penarikan dan Pembayaran Reward pada Akun Funded",
        "excerpt": "Pelajari masa tunggu penarikan pertama, penarikan minimum, pembagian tinggi, dan batas 5 pembayaran reward...",
        "category": "Aturan Program",
        "readTime": "5 menit baca",
        "authorRole": "Tim ERACEX",
        "content": [
          {
            "heading": "1. Ketentuan Penarikan",
            "paragraphs": [
              "Masa tunggu penarikan pertama adalah 5 hari untuk Two-Step dan One-Step, serta 14 hari untuk Instant Funding. Penarikan minimum adalah 1% dari profit.",
              "Pembagian profit tinggi sesuai ketentuan setiap program. Add-on berbayar dapat menaikkannya, lihat tabel biaya."
            ]
          },
          {
            "heading": "2. Batas Pembayaran dan Modal Funded",
            "paragraphs": [
              "Setiap akun funded memiliki hingga 5 pembayaran reward, setelah itu akun ditutup. Modal funded gabungan maksimum per pengguna adalah $400,000, dengan akun terbesar $100,000.",
              "Biaya program tidak dapat dikembalikan setelah akses akun diberikan."
            ]
          }
        ]
      },
      "th": {
        "title": "กฎการถอนเงินและการจ่ายรางวัลในบัญชี Funded",
        "excerpt": "เรียนรู้เกี่ยวกับระยะเวลารอถอนครั้งแรก ถอนขั้นต่ำ การแบ่งกำไรสูง และขีดจำกัด 5 ครั้งของการจ่ายรางวัล...",
        "category": "กฎของโปรแกรม",
        "readTime": "อ่าน 5 นาที",
        "authorRole": "ทีม ERACEX",
        "content": [
          {
            "heading": "1. เงื่อนไขการถอนเงิน",
            "paragraphs": [
              "ระยะเวลารอถอนครั้งแรกคือ 5 วันสำหรับ Two-Step และ One-Step และ 14 วันสำหรับ Instant Funding ถอนขั้นต่ำคือ 1% ของกำไร",
              "สัดส่วนแบ่งกำไรอยู่ในระดับสูง ส่วนเสริมแบบชำระเงินสามารถเพิ่มสัดส่วนได้ ดูตารางค่าธรรมเนียม"
            ]
          },
          {
            "heading": "2. ขีดจำกัดการจ่ายเงินและเงินทุน Funded",
            "paragraphs": [
              "บัญชี funded แต่ละบัญชีมีการจ่ายรางวัลได้สูงสุด 5 ครั้ง หลังจากนั้นบัญชีจะถูกปิด เงินทุน funded รวมสูงสุดต่อผู้ใช้คือ $400,000 โดยบัญชีที่ใหญ่ที่สุดคือ $100,000",
              "ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว"
            ]
          }
        ]
      },
      "fil": {
        "title": "Mga Patakaran sa Withdrawal at Reward Payout sa mga Funded Account",
        "excerpt": "Alamin ang tungkol sa paghihintay sa unang withdrawal, minimum na withdrawal, mataas na hatian, at limitasyon ng 5 reward payout...",
        "category": "Mga Patakaran ng Programa",
        "readTime": "5 min na basahin",
        "authorRole": "ERACEX Team",
        "content": [
          {
            "heading": "1. Mga Kondisyon sa Withdrawal",
            "paragraphs": [
              "Ang paghihintay sa unang withdrawal ay 5 araw para sa Two-Step at One-Step at 14 na araw para sa Instant Funding. Ang minimum na withdrawal ay 1% ng kita.",
              "Mataas ang hatian ng kita. Maaaring itaas ng bayad na add-on ang hatian, tingnan ang talaan ng bayarin."
            ]
          },
          {
            "heading": "2. Mga Limitasyon sa Payout at Funded Capital",
            "paragraphs": [
              "Ang bawat funded account ay may hanggang 5 reward payout, pagkatapos nito ay magsasara ang account. Ang maximum na pinagsamang funded capital kada user ay $400,000, at ang pinakamalaking account ay $100,000.",
              "Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access sa account."
            ]
          }
        ]
      },
      "hi": {
        "title": "Funded खातों पर निकासी और रिवॉर्ड भुगतान के नियम",
        "excerpt": "पहली निकासी की प्रतीक्षा, न्यूनतम निकासी, उच्च विभाजन और 5 रिवॉर्ड भुगतानों की सीमा के बारे में जानें...",
        "category": "प्रोग्राम नियम",
        "readTime": "5 मिनट पढ़ें",
        "authorRole": "ERACEX टीम",
        "content": [
          {
            "heading": "1. निकासी की शर्तें",
            "paragraphs": [
              "पहली निकासी की प्रतीक्षा अवधि Two-Step और One-Step में 5 दिन और Instant Funding में 14 दिन है। न्यूनतम निकासी लाभ का 1% है।",
              "लाभ विभाजन उच्च है। एक सशुल्क ऐड-ऑन विभाजन को बढ़ा सकता है, शुल्क तालिका देखें।"
            ]
          },
          {
            "heading": "2. भुगतान सीमाएँ और Funded पूंजी",
            "paragraphs": [
              "प्रत्येक funded खाते पर अधिकतम 5 रिवॉर्ड भुगतान मिलते हैं, जिसके बाद खाता बंद हो जाता है। प्रति उपयोगकर्ता अधिकतम संयुक्त funded पूंजी $400,000 है, जिसमें सबसे बड़ा खाता $100,000 का है।",
              "खाते का एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता।"
            ]
          }
        ]
      },
      "ko": {
        "title": "$2,000,000+ 스케일링 플랜 로드맵: 단계별 펀딩 자본 확장 가이드",
        "excerpt": "꾸준한 수익을 내는 트레이더가 초기 $100,000 계정에서 90% 수익 분배율과 격주 출금 혜택을 받으며 기관급 자본으로 성장하는 방법...",
        "category": "자본 스케일링",
        "readTime": "7분 소요",
        "authorRole": "수석 포트폴리오 매니저, ERACEX",
        "content": [
          {
            "heading": "1. 10% 누적 수익 달성 시 25% 자본 증액 프로토콜",
            "paragraphs": [
              "ERACEX는 트레이더의 일관성을 적극적으로 보상합니다. 리스크 매개변수를 엄격히 준수하며 3개월 동안 누적 10%의 수익을 창출할 때마다, 초기 계정 자본 기준 25%의 자금이 영구 증액됩니다.",
              "$100,000 펀딩 계정으로 시작하여 $125,000, $150,000으로 단계적 상향되며 최종 $2,000,000 이상까지 확장 가능합니다. 동시에 수익 분배율도 기본 80%에서 90%로 자동 업그레이드됩니다."
            ]
          },
          {
            "heading": "2. 운용 자본이 증가할수록 더 철저한 리스크 보존",
            "paragraphs": [
              "$1,000,000 계정을 운용할 때 필요한 원칙은 $10,000를 운용할 때와 완전히 동일합니다. 리스크를 엄격한 고정 퍼센티지로 유지함으로써 심리적 부담 없이 수익 규모만을 극대화할 수 있습니다."
            ]
          }
        ]
      },
      "ru": {
        "title": "План Масштабирования до $2,000,000+: Пошаговое Расширение Торгового Капитала",
        "excerpt": "Как стабильные трейдеры вырастают со счета $100k до институциональных объемов с разделением прибыли 90% и регулярными выплатами...",
        "category": "Масштабирование Капитала",
        "readTime": "7 мин чтения",
        "authorRole": "Старший Портфельный Менеджер, ERACEX",
        "content": [
          {
            "heading": "1. Протокол Масштабирования за Каждые 10% Прибыли",
            "paragraphs": [
              "Стабильность в ERACEX вознаграждается по экспоненте. Каждый раз, когда трейдер зарабатывает совокупные 10% прибыли за 3 месяца с соблюдением риск-параметров, баланс счета увеличивается на 25% от первоначального депозита.",
              "Начиная со счета $100 000, ваш депозит растет до $125 000, $150 000 и может масштабироваться свыше $2 000 000+, а доля прибыли повышается с 80% до 90%."
            ]
          },
          {
            "heading": "2. Сохранение Капитала при Росте Баланса",
            "paragraphs": [
              "Управление счетом на $1 000 000 требует абсолютно той же математической дисциплины, что и на $10 000. Фиксируя риск в процентах от депозита, трейдеры масштабируют прибыль без психологического перегруза."
            ]
          }
        ]
      },
      "ar": {
        "title": "خارطة طريق خطة مضاعفة الحساب حتى 2,000,000$+: التوسع التدريجي في رأس المال",
        "excerpt": "كيف يتدرج المتداولون الناجحون من حساب أولي بقيمة 100 ألف دولار إلى مستويات رؤوس أموال مؤسسية مع نسبة أرباح 90% وسحوبات منتظمة...",
        "category": "تنمية رأس المال",
        "readTime": "7 دقائق للقراءة",
        "authorRole": "مدير المحافظ الاستثمارية، ERACEX",
        "content": [
          {
            "heading": "1. بروتوكول الترقية عند تحقيق 10% أرباح تراكمية",
            "paragraphs": [
              "يتم مكافأة الانضباط في ERACEX بشكل تصاعدي. في كل مرة يحقق فيها المتداول أرباحاً تراكمية بنسبة 10% خلال فترة 3 أشهر مع الالتزام بقواعد المخاطر، تتم زيادة رصيد الحساب بنسبة 25% من رأس المال الأصلي.",
              "بدءاً من حساب ممول بقيمة 100,000$، ترتفع مخصصاتك إلى 125,000$ ثم 150,000$ لتصل إلى أكثر من 2,000,000$، مع رفع نسبة مشاركة الأرباح من 80% إلى 90%."
            ]
          },
          {
            "heading": "2. الحفاظ على رأس المال مع نمو الحساب",
            "paragraphs": [
              "إدارة مليون دولار تتطلب نفس الانضباط الرياضي الدقيق لإدارة 10,000 دولار. ومن خلال تثبيت نسبة المخاطرة المئوية وتجنب التداول العاطفي، يضاعف المتداولون أرباحهم دون زيادة الضغوط النفسية."
            ]
          }
        ]
      },
      "nl": {
        "title": "Schaalplan Roadmap naar $2.000.000+: Stapsgewijze Kapitaaluitbreiding",
        "excerpt": "Hoe consistente traders doorgroeien van een initiële $100k account naar institutionele niveaus met 90% winstdeling en tweewekelijkse uitbetalingen...",
        "category": "Kapitaalschaling",
        "readTime": "7 min leestijd",
        "authorRole": "Senior Portfolio Manager, ERACEX",
        "content": [
          {
            "heading": "1. Het 10% Winstdoel Schaalprotocol",
            "paragraphs": [
              "Consistentie wordt exponentieel beloond bij ERACEX. Telkens wanneer een trader over een periode van 3 maanden een cumulatieve winst van 10% behaalt binnen de risicoparameters, stijgt het accountkapitaal met 25% van het startbedrag.",
              "Startend met een gefinancierde account van $100.000 groeit uw kapitaal naar $125.000, $150.000 en schaalt het op tot meer dan $2.000.000+, terwijl uw winstdeling stijgt van 80% naar 90%."
            ]
          },
          {
            "heading": "2. Kapitaalbehoud bij Toenemende Allocatie",
            "paragraphs": [
              "Het beheren van $1.000.000 vereist exact dezelfde wiskundige discipline als het beheren van $10.000. Door risico strikt te koppelen aan vaste percentages verhogen traders hun inkomsten zonder extra psychologische stress."
            ]
          }
        ]
      }
    }
  }
];

export function getLocalizedPost(post: BlogPostData, lang: string): BlogPostData {
  if (lang === 'vi') return post;
  const trans = post.translations?.[lang] || post.translations?.en;
  if (!trans) return post;
  return {
    ...post,
    title: trans.title,
    excerpt: trans.excerpt,
    category: trans.category,
    readTime: trans.readTime,
    authorRole: trans.authorRole,
    content: trans.content,
  };
}
