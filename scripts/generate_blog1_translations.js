const fs = require('fs');

const post1Translations = {
  es: {
    title: 'Dominio del Desafío Prop Firm: Disciplina de Gestión de Riesgo y Drawdown Diario del 4%',
    excerpt: 'Más del 90% de los traders fracasan en las evaluaciones de empresas de fondeo no por falta de indicadores técnicos, sino por un tamaño de posición erróneo y la prisa por hacerse ricos...',
    category: 'Gestión de Riesgo',
    readTime: '6 min de lectura',
    authorRole: 'Jefe de Evaluación de Riesgos, ERACEX',
    content: [
      {
        heading: '1. La Trampa Psicológica Fatal al Iniciar el Desafío',
        paragraphs: [
          'Uno de los errores más graves de los traders nuevos es tratar la evaluación como un juego de casino. Al ver un poder adquisitivo de $100,000 o $200,000, muchos sobreapalancan buscando alcanzar el 8% de objetivo en apenas 1 o 2 días.',
          'En ERACEX, nuestro límite de drawdown diario del 4% está diseñado deliberadamente para forjar la disciplina de un gestor de fondos profesional. En el mercado nunca faltan oportunidades; sobrevivir a las rachas de pérdidas es lo que define a un trader rentable.'
        ]
      },
      {
        heading: '2. La Regla de Oro del 0.5% - 1.0% de Riesgo por Operación',
        paragraphs: [
          'Consejo fundamental de traders fondeados exitosos: nunca arriesgues más del 0.5% al 1.0% del saldo inicial en una sola posición. En una cuenta de $100,000, tu stop-loss máximo por posición debe estar entre $500 y $1,000.',
          'Con un riesgo del 0.5%, necesitarías perder 8 operaciones consecutivas en un mismo día para tocar el límite diario del 4%. Este colchón matemático elimina el pánico y te permite buscar con paciencia configuraciones con ratio Riesgo/Beneficio de 1:2 o superior.'
        ]
      },
      {
        heading: '3. Aprovechar la Ausencia de Días Mínimos de Trading',
        paragraphs: [
          'Dado que ERACEX no impone límites de días mínimos ni máximos de trading, mantente al margen cuando el mercado esté errático o carezca de estructura clara. Mantienes el control total de tu calendario.'
        ]
      }
    ]
  },
  pt: {
    title: 'Domínio do Desafio Prop Firm: Disciplina de Gestão de Risco e Drawdown Diário de 4%',
    excerpt: 'Mais de 90% dos traders falham em testes de mesa proprietária não por falta de indicadores, mas por dimensionamento incorreto de lote e ânsia de enriquecimento rápido...',
    category: 'Gestão de Risco',
    readTime: '6 min de leitura',
    authorRole: 'Chefe de Avaliação de Risco, ERACEX',
    content: [
      {
        heading: '1. A Armadilha Psicológica ao Iniciar o Desafio',
        paragraphs: [
          'Um dos maiores erros de traders iniciantes em mesas proprietárias é tratar o teste como aposta de cassino. Diante de um saldo de $100.000 ou $200.000, muitos aumentam a alavancagem buscando bater a meta de 8% em 1 ou 2 dias.',
          'Na ERACEX, nosso limite de perda diária de 4% foi projetado deliberadamente para desenvolver a disciplina de um gestor institucional. O mercado sempre oferece novas chances; quem sobrevive aos ciclos de perda é quem vence.'
        ]
      },
      {
        heading: '2. A Regra de Ouro de 0.5% a 1.0% de Risco por Operação',
        paragraphs: [
          'Conselho dos melhores traders financiados: arrisque no máximo de 0.5% a 1.0% do saldo inicial por operação. Em uma conta de $100.000, seu stop-loss máximo deve ficar entre $500 e $1.000.',
          'Com risco de 0.5%, você precisaria de 8 perdas consecutivas no mesmo dia para violar o limite diário de 4%. Essa margem matemática elimina o estresse psicológico e permite aguardar operações com risco/retorno de 1:2 ou mais.'
        ]
      },
      {
        heading: '3. Aproveite a Ausência de Dias Mínimos de Operação',
        paragraphs: [
          'Como a ERACEX não exige número mínimo ou máximo de dias de trading, fique de fora quando o mercado estiver sem direção clara. Você tem total autonomia sobre seu tempo e estilo de operar.'
        ]
      }
    ]
  },
  fr: {
    title: 'Maîtriser les Défis Prop Firm : Discipline de Gestion des Risques et Drawdown Quotidien de 4%',
    excerpt: 'Plus de 90% des traders échouent aux évaluations non par manque de technique, mais à cause d\'une mauvaise taille de position et d\'une volonté d\'enrichissement rapide...',
    category: 'Gestion des Risques',
    readTime: '6 min de lecture',
    authorRole: 'Responsable de l\'Évaluation des Risques, ERACEX',
    content: [
      {
        heading: '1. Le Piège Psychologique Fatal au Début d\'un Défi',
        paragraphs: [
          'L\'une des erreurs les plus courantes est de traiter l\'évaluation comme un jeu de hasard. Avec un capital de 100 000 $ ou 200 000 $, certains traders surdimensionnent leurs positions pour atteindre les 8% de cible en seulement 1 ou 2 jours.',
          'Chez ERACEX, notre règle de drawdown quotidien de 4% est conçue pour forger la rigueur d\'un gestionnaire de portefeuille professionnel. Le marché offrira toujours des opportunités ; c\'est la gestion des pertes qui fait la rentabilité durable.'
        ]
      },
      {
        heading: '2. La Règle d\'Or : 0,5% à 1,0% de Risque par Position',
        paragraphs: [
          'Le conseil unanime des traders financés : ne risquez jamais plus de 0,5% à 1,0% du capital initial par trade. Sur un compte de 100 000 $, la perte maximale acceptée sur votre stop-loss doit être comprise entre 500 $ et 1 000 $.',
          'Avec 0,5% de risque par trade, il vous faudrait 8 pertes consécutives dans la même journée pour toucher le seuil journalier de 4%. Cette marge mathématique supprime le stress et vous permet d\'attendre les setups à ratio Risque/Rendement de 1:2 ou plus.'
        ]
      },
      {
        heading: '3. Profiter de l\'Absence de Jours de Trading Minimums',
        paragraphs: [
          'Puisqu\'ERACEX n\'impose aucune contrainte de durée minimale ou maximale, restez à l\'écart lorsque le marché est instable ou sans tendance claire. Vous maîtrisez pleinement votre calendrier.'
        ]
      }
    ]
  },
  de: {
    title: 'Prop Firm Challenges Meistern: Risikomanagement-Disziplin & 4% Täglicher Drawdown',
    excerpt: 'Über 90% der Trader scheitern bei Prop-Firm-Evaluierungen nicht an fehlender technischer Analyse, sondern an falscher Positionsgröße und dem Wunsch nach schnellem Reichtum...',
    category: 'Risikomanagement',
    readTime: '6 Min. Lesezeit',
    authorRole: 'Leiter Risikobewertung, ERACEX',
    content: [
      {
        heading: '1. Die Fatale Psychologische Falle zu Beginn der Challenge',
        paragraphs: [
          'Einer der verhängnisvollsten Fehler besteht darin, die Evaluierung wie ein Casinospiel zu betrachten. Bei einer Kontogröße von 100.000 $ oder 200.000 $ neigen viele Trader dazu, übermäßig hohe Positionen zu eröffnen, um das Gewinnziel von 8% in nur 1-2 Tagen zu erreichen.',
          'Bei ERACEX ist unser tägliches Drawdown-Limit von 4% gezielt darauf ausgelegt, die Disziplin eines professionellen Fondsmanagers zu schulen. Marktchancen gibt es immer; das Überleben von Verlustphasen macht erfolgreiche Trader aus.'
        ]
      },
      {
        heading: '2. Die Goldene Regel: 0,5% bis 1,0% Risiko pro Trade',
        paragraphs: [
          'Der fundamentale Rat erfolgreicher geförderter Trader: Riskieren Sie pro Trade nie mehr als 0,5% bis 1,0% des Startguthabens. Bei einem 100.000 $-Konto entspricht das einem Stop-Loss-Risiko von 500 $ bis 1.000 $.',
          'Mit einem Risiko von 0,5% müssten Sie 8 Trades in Folge an einem einzigen Tag verlieren, um das tägliche Limit von 4% zu erreichen. Dieser mathematische Puffer eliminiert Panik und ermöglicht es Ihnen, geduldig auf Einstiege mit einem Chance-Risiko-Verhältnis von mindestens 1:2 zu warten.'
        ]
      },
      {
        heading: '3. Nutzen Sie den Verzicht auf Mindesthandelstage',
        paragraphs: [
          'Da ERACEX weder Mindest- noch Höchsthandelstage vorschreibt, können Sie bei unklaren Marktphasen pausieren. Sie behalten die volle Kontrolle über Ihren Handelszeitplan.'
        ]
      }
    ]
  },
  it: {
    title: 'Superare le Sfide Prop Firm: Disciplina nella Gestione del Rischio e Drawdown Giornaliero del 4%',
    excerpt: 'Oltre il 90% dei trader fallisce le prove prop firm non per mancanza di competenze tecniche, ma a causa di una cattiva gestione delle posizioni e della fretta di guadagnare...',
    category: 'Gestione del Rischio',
    readTime: '6 min di lettura',
    authorRole: 'Responsabile Valutazione Rischi, ERACEX',
    content: [
      {
        heading: '1. La Trappola Psicologica Iniziale',
        paragraphs: [
          'Uno degli errori più gravi è trattare la sfida come una scommessa al casinò. Di fronte a un potere d\'acquisto di 100.000 $ o 200.000 $, molti aumentano la leva nella speranza di raggiungere l\'8% di profitto in soli 1-2 giorni.',
          'In ERACEX, il limite di perdita giornaliera del 4% è studiato per formare la disciplina di un gestore professionista. Sul mercato le opportunità non mancano mai; è la capacità di gestire i drawdown che decreta il successo a lungo termine.'
        ]
      },
      {
        heading: '2. La Regola d\'Oro dello 0.5% - 1.0% di Rischio per Operazione',
        paragraphs: [
          'Il consiglio essenziale dei trader finanziati: non rischiare mai più dello 0.5% - 1.0% del saldo iniziale per singola posizione. Su un conto da 100.000 $, il rischio massimo su ogni stop-loss deve rimanere tra 500 $ e 1.000 $.',
          'Con un rischio dello 0.5%, occorrerebbero 8 perdite consecutive nello stesso giorno per violare il drawdown giornaliero del 4%. Questo margine matematico elimina l\'ansia psicologica e consente di attendere setup con rapporto Rischio/Rendimento di almeno 1:2.'
        ]
      },
      {
        heading: '3. Sfrutta l\'Assenza di Giorni Minimi di Trading',
        paragraphs: [
          'Poiché ERACEX non impone vincoli sul numero di giorni di trading, puoi scegliere di rimanere liquido quando il mercato è privo di una direzione definita. Mantieni la piena libertà sul tuo piano operativo.'
        ]
      }
    ]
  },
  pl: {
    title: 'Mistrzostwo w Wyzwaniach Prop Firm: Dyscyplina Zarządzania Ryzykiem i 4% Dziennego Drawdownu',
    excerpt: 'Ponad 90% traderów odpada z ewaluacji prop firm nie przez brak wiedzy technicznej, ale z powodu niewłaściwego doboru wolumenu i chęci szybkiego wzbogacenia się...',
    category: 'Zarządzanie Ryzykiem',
    readTime: '6 min czytania',
    authorRole: 'Szef Oceny Ryzyka, ERACEX',
    content: [
      {
        heading: '1. Pułapka Psychologiczna na Starcie Wyzwania',
        paragraphs: [
          'Jednym z kardynalnych błędów początkujących traderów jest traktowanie wyzwania jak ruletki. Widząc saldo 100 000 $ lub 200 000 $, wielu otwiera zbyt duże pozycje, by osiągnąć cel 8% w 1-2 dni.',
          'W ERACEX dzienny limit obsunięcia kapitału 4% został wprowadzony specjalnie po to, aby wykształcić dyscyplinę profesjonalnego zarządzającego funduszem. Na rynku nigdy nie brakuje okazji; przetrwanie gorszych serii decyduje o długoterminowym zysku.'
        ]
      },
      {
        heading: '2. Złota Zasada 0.5% - 1.0% Ryzyka na Transakcję',
        paragraphs: [
          'Podstawowa zasada doświadczonych traderów z kontami ufundowanymi: nigdy nie ryzykuj więcej niż 0.5% do 1.0% początkowego kapitału na jedną pozycję. Przy koncie 100 000 $ oznacza to maksymalny stop-loss rzędu 500 $ do 1 000 $.',
          'Przy ryzyku 0.5% potrzeba aż 8 stratnych transakcji z rzędu w ciągu jednego dnia, aby naruszyć 4% limitu dziennego. Taka poduszka matematyczna eliminuje presję psychiczną i pozwala spokojnie czekać na setupy o stosunku Zysku do Ryzyka 2:1 lub lepszym.'
        ]
      },
      {
        heading: '3. Korzystaj z Braku Minimalnej Liczby Dni Handlowych',
        paragraphs: [
          'Ponieważ ERACEX nie narzuca minimalnej ani maksymalnej liczby dni tradingowych, powstrzymaj się od handlu, gdy rynek nie wykazuje wyraźnego trendu. Masz pełną swobodę w zarządzaniu własnym czasem.'
        ]
      }
    ]
  },
  tr: {
    title: 'Prop Firm Meydan Okumalarında Uzmanlaşma: Risk Yönetimi Disiplini ve %4 Günlük Drawdown',
    excerpt: 'Prop firm değerlendirmelerinde başarısız olan trader\'ların %90\'dan fazlası teknik bilgi eksikliğinden değil, aşırı pozisyon büyüklüğü ve aceleci kazanç beklentisinden kaybeder...',
    category: 'Risk Yönetimi',
    readTime: '6 dk okuma',
    authorRole: 'Risk Değerlendirme Başkanı, ERACEX',
    content: [
      {
        heading: '1. Değerlendirmeye Başlarken Düşülen Psikolojik Tuzak',
        paragraphs: [
          'Yeni başlayan trader\'ların en büyük hatası, değerlendirme sürecini bir kumar oyunu gibi görmektir. 100.000$ veya 200.000$\'lık hesap bakiyesini gören birçok kişi, %8\'lik kâr hedefine 1-2 günde ulaşmak için aşırı kaldıraç kullanır.',
          'ERACEX\'te %4\'lük günlük maksimum kayıp kuralı, profesyonel bir fon yöneticisinin disiplinini kazandırmak için özel olarak belirlenmiştir. Piyasada fırsatlar asla bitmez; kayıp dönemlerini yönetebilenler kalıcı başarıya ulaşır.'
        ]
      },
      {
        heading: '2. İşlem Başına %0.5 - %1.0 Altın Risk Kuralı',
        paragraphs: [
          'Fonlanan başarılı trader\'ların temel tavsiyesi: Tek bir işlemde asla başlangıç bakiyenizin %0.5 ila %1.0\'inden fazlasını riske atmayın. 100.000$\'lık bir hesapta, stop-loss zararınız 500$ ile 1.000$ arasında kalmalıdır.',
          '%0.5\'lik risk oranıyla, %4\'lük günlük kayıp sınırına ulaşmak için aynı gün içinde art arda 8 işlem kaybetmeniz gerekir. Bu matematiksel koruma panik yapmanızı engeller ve en az 1:2 Risk/Ödül oranına sahip fırsatları sabırla beklemenizi sağlar.'
        ]
      },
      {
        heading: '3. Minimum İşlem Günü Şartının Olmamasını Avantaja Çevirin',
        paragraphs: [
          'ERACEX herhangi bir minimum veya maksimum işlem günü zorunluluğu getirmediği için piyasanın belirsiz olduğu günlerde işlem yapmaktan kaçınabilirsiniz. Zamanınızın ve stratejinizin tek hâkimi sizsiniz.'
        ]
      }
    ]
  },
  id: {
    title: 'Kiat Lolos Tantangan Prop Firm: Disiplin Manajemen Risiko dan Batas Drawdown Harian 4%',
    excerpt: 'Lebih dari 90% trader gagal dalam evaluasi prop firm bukan karena kurang indikator teknis, melainkan akibat ukuran lot berlebihan dan mental ingin cepat kaya...',
    category: 'Manajemen Risiko',
    readTime: '6 menit baca',
    authorRole: 'Kepala Manajemen Risiko, ERACEX',
    content: [
      {
        heading: '1. Jebakan Psikologis Saat Memulai Evaluasi',
        paragraphs: [
          'Salah satu kesalahan paling fatal dari trader baru adalah memperlakukan evaluasi akun prop firm layaknya judi kasino. Begitu melihat saldo $100.000 atau $200.000, banyak trader membuka posisi terlalu besar demi mengejar target profit 8% hanya dalam 1-2 hari.',
          'Di ERACEX, aturan drawdown harian 4% dirancang khusus untuk membangun disiplin seorang manajer portofolio profesional. Peluang di pasar tidak akan pernah habis; mereka yang mampu bertahan di tengah fluktuasi adalah yang keluar sebagai pemenang.'
        ]
      },
      {
        heading: '2. Aturan Emas Risiko 0.5% - 1.0% Per Transaksi',
        paragraphs: [
          'Saran utama dari trader berpengalaman: Jangan pernah merisikokan lebih dari 0.5% hingga 1.0% dari saldo awal pada satu posisi. Untuk akun $100.000, batas toleransi stop-loss maksimum adalah $500 hingga $1.000 per transaksi.',
          'Dengan risiko 0.5% per transaksi, Anda perlu mengalami 8 kali kerugian beruntun dalam satu hari untuk menyentuh batas drawdown harian 4%. Toleransi ini memberikan ketenangan psikologis dan keleluasaan menunggu setup dengan Risk/Reward minimal 1:2.'
        ]
      },
      {
        heading: '3. Manfaatkan Bebas Syarat Hari Trading Minimum',
        paragraphs: [
          'Karena ERACEX tidak membatasi jumlah hari trading minimum maupun maksimum, Anda bebas memilih untuk tidak masuk pasar saat kondisi sideways atau tidak menentu. Kendali penuh ada di tangan Anda.'
        ]
      }
    ]
  },
  th: {
    title: 'เคล็ดลับการสอบผ่านพอร์ตทุน Prop Firm: วินัยการบริหารความเสี่ยงและ Drawdown รายวัน 4%',
    excerpt: 'มากกว่า 90% ของเทรดเดอร์ที่สอบไม่ผ่าน ไม่ใช่เพราะขาดความรู้ด้านเทคนิค แต่เป็นเพราะการคำนวณขนาดล็อตที่ผิดพลาดและความอยากรวยทางลัด...',
    category: 'การบริหารความเสี่ยง',
    readTime: '6 นาทีในการอ่าน',
    authorRole: 'หัวหน้าฝ่ายประเมินความเสี่ยง, ERACEX',
    content: [
      {
        heading: '1. กับดักทางอารมณ์เมื่อเริ่มต้นการสอบพอร์ต',
        paragraphs: [
          'ข้อผิดพลาดที่ร้ายแรงที่สุดประการหนึ่งคือการมองการสอบพอร์ตเหมือนการเล่นการพนัน เมื่อเห็นพอร์ตขนาด $100,000 หรือ $200,000 เทรดเดอร์จำนวนมากมักเปิดล็อตใหญ่เกินตัวเพื่อหวังทำกำไรให้ถึง 8% ในเวลาเพียง 1-2 วัน',
          'ที่ ERACEX เราออกแบบกฎการขาดทุนรายวันสูงสุด 4% เพื่อปลูกฝังวินัยของนักบริหารกองทุนมืออาชีพ ตลาดมีโอกาสให้ทำกำไรอยู่เสมอ ผู้ที่สามารถเอาตัวรอดจากการขาดทุนได้เท่านั้นจึงจะเป็นผู้ชนะในระยะยาว'
        ]
      },
      {
        heading: '2. กฎเหล็กความเสี่ยง 0.5% - 1.0% ต่อหนึ่งออเดอร์',
        paragraphs: [
          'คำแนะนำสำคัญจากเทรดเดอร์ที่ถือพอร์ตจริงสำเร็จ: ไม่ควรเสี่ยงเกิน 0.5% ถึง 1.0% ของยอดเงินเริ่มต้นต่อหนึ่งคำสั่งซื้อขาย สำหรับพอร์ต $100,000 จุดตัดขาดทุน (Stop Loss) สูงสุดควรอยู่ระหว่าง $500 ถึง $1,000 เท่านั้น',
          'เมื่อจำกัดความเสี่ยงไว้ที่ 0.5% ต่อไม้ คุณจะต้องแพ้ติดต่อกันถึง 8 ไม้ในวันเดียวจึงจะแตะเพดานขาดทุนรายวัน 4% การมีเกราะป้องกันทางคณิตศาสตร์นี้จะช่วยลดความกดดันและเปิดโอกาสให้คุณรอคอยจังหวะเทรดที่มีอัตราส่วน Risk/Reward ตั้งแต่ 1:2 ขึ้นไป'
        ]
      },
      {
        heading: '3. ใช้ประโยชน์จากการไม่มีกำหนดวันเทรดขั้นต่ำ',
        paragraphs: [
          'เนื่องจาก ERACEX ไม่มีการบังคับจำนวนวันเทรดขั้นต่ำหรือวันเทรดสูงสุด คุณสามารถเลือกที่จะอยู่เฉยๆ เมื่อตลาดผันผวนหรือไม่ชัดเจน คุณมีอิสระในการวางแผนการเทรดของตนเองอย่างสมบูรณ์'
        ]
      }
    ]
  },
  fil: {
    title: 'Pag-master sa Prop Firm Challenge: Disiplina sa Risk Management at 4% Daily Drawdown',
    excerpt: 'Higit sa 90% ng mga trader ang bumabagsak sa evaluation hindi dahil sa kakulangan sa technical indicators, kundi dahil sa maling position sizing at pagnanais na yumaman agad...',
    category: 'Risk Management',
    readTime: '6 na minutong pagbasa',
    authorRole: 'Pinuno ng Risk Assessment, ERACEX',
    content: [
      {
        heading: '1. Ang Mapanganib na Mindset Trap sa Simula ng Challenge',
        paragraphs: [
          'Isa sa pinakamalaking pagkakamali ng mga bagong prop trader ay ang ituring ang evaluation na parang sugal sa casino. Sa laki ng $100,000 o $200,000 na account, marami ang nag-ooverleverage upang maabot ang 8% target sa loob lamang ng 1-2 araw.',
          'Sa ERACEX, ang aming 4% daily drawdown rule ay sadyang idinisenyo upang mahasa ang disiplina ng isang propesyonal na fund manager. Hindi nauubos ang oportunidad sa merkado; ang mga nakakaraos sa drawdown cycles ang siyang nagtatagumpay.'
        ]
      },
      {
        heading: '2. Ang Ginintuang Panuntunan: 0.5% - 1.0% Risk Bawat Trade',
        paragraphs: [
          'Pangunahing payo mula sa mga matagumpay na funded trader: Huwag kailanman mag-risk ng higit sa 0.5% hanggang 1.0% ng starting balance sa isang trade. Sa $100,000 account, ang maximum stop-loss exposure ay dapat nasa pagitan lamang ng $500 at $1,000.',
          'Sa 0.5% risk profile, kakailanganin mong matalo ng 8 sunod-sunod na trades sa isang araw bago maabot ang 4% daily limit. Ang agwat na ito ay nag-aalis ng panic at nagbibigay ng pasensya na maghintay ng mga setup na may Risk/Reward ratio na 1:2 pataas.'
        ]
      },
      {
        heading: '3. Samantalahin ang Zero Minimum Trading Days',
        paragraphs: [
          'Dahil walang minimum o maximum trading days sa ERACEX, malaya kang umiwas sa merkado kapag magulo o walang malinaw na direksyon ang presyo. Hawak mo ang sarili mong oras.'
        ]
      }
    ]
  },
  hi: {
    title: 'प्रॉप फर्म चैलेंज में महारत: जोखिम प्रबंधन का अनुशासन और 4% दैनिक ड्रॉडाउन',
    excerpt: '90% से अधिक ट्रेडर प्रॉप फर्म मूल्यांकन में तकनीकी ज्ञान की कमी के कारण नहीं, बल्कि गलत लॉट साइज़िंग और जल्दबाज़ी की मानसिकता के कारण असफल होते हैं...',
    category: 'जोखिम प्रबंधन',
    readTime: '6 मिनट पढ़ने में',
    authorRole: 'प्रमुख जोखिम मूल्यांकन, ERACEX',
    content: [
      {
        heading: '1. मूल्यांकन शुरू करते समय घातक मानसिक जाल',
        paragraphs: [
          'नए ट्रेडर्स की सबसे आम गलती चैलेंज को कैसीनो की तरह समझना है। $100,000 या $200,000 की पूंजी देखकर कई लोग 1-2 दिनों में 8% का लक्ष्य पाने के लिए बहुत बड़ा रिस्क लेते हैं।',
          'ERACEX में 4% दैनिक सीमा पेशेवर फंड मैनेजर का अनुशासन सिखाने के लिए तय की गई है। बाज़ार में अवसरों की कभी कमी नहीं होती; जो गिरावट के दौर में टिके रहते हैं, वही सफल होते हैं।'
        ]
      },
      {
        heading: '2. प्रति ट्रेड 0.5% - 1.0% रिस्क का स्वर्णिम नियम',
        paragraphs: [
          'सफल फंडेड ट्रेडर्स की मुख्य सलाह: किसी एक ट्रेड पर अपनी प्रारंभिक पूंजी के 0.5% से 1.0% से अधिक का जोखिम कभी न लें। $100,000 के खाते पर स्टॉप-लॉस $500 से $1,000 के बीच होना चाहिए।',
          '0.5% रिस्क के साथ, दैनिक 4% सीमा तक पहुँचने के लिए एक ही दिन में लगातार 8 ट्रेड हारने होंगे। यह गणितीय सुरक्षा घबराहट को दूर करती है और 1:2 या उससे बेहतर रिस्क/रिवॉर्ड सेटअप का इंतज़ार करने की सुविधा देती है।'
        ]
      },
      {
        heading: '3. शून्य न्यूनतम ट्रेडिंग दिनों का लाभ उठाएं',
        paragraphs: [
          'चूंकि ERACEX में न्यूनतम या अधिकतम ट्रेडिंग दिनों की कोई बाध्यता नहीं है, इसलिए जब बाज़ार में स्पष्ट अवसर न हों तो बाहर बैठें। आपके पास अपने समय और ट्रेडिंग का पूर्ण नियंत्रण है।'
        ]
      }
    ]
  },
  ko: {
    title: '프랍펌 챌린지 합격 마스터: 리스크 관리 규율과 4% 일일 드로다운 준수법',
    excerpt: '프랍펌 평가에서 탈락하는 트레이더의 90% 이상은 기술적 지식이 부족해서가 아니라, 과도한 포지션 진입과 빠른 부를 바라는 조급한 심리 때문입니다...',
    category: '리스크 관리',
    readTime: '6분 소요',
    authorRole: '리스크 관리 총괄 책임자, ERACEX',
    content: [
      {
        heading: '1. 챌린지 시작 시 빠지기 쉬운 치명적 심리적 함정',
        paragraphs: [
          '신규 프랍 트레이더들이 저지르는 가장 치명적인 실수 중 하나는 평가 챌린지를 카지노 도박처럼 대하는 것입니다. $100,000 또는 $200,000의 대규모 계정 규모를 마주하면 1~2일 만에 8% 목표를 달성하려는 욕심으로 과도한 레버리지를 일으키게 됩니다.',
          'ERACEX의 4% 일일 손실 한도는 전문 펀드 매니저로서의 규율을 훈련하기 위해 정밀하게 설계되었습니다. 시장에는 기회가 항상 존재하며, 손실 사이클을 침착하게 넘기는 자만이 장기적 승자가 됩니다.'
        ]
      },
      {
        heading: '2. 주문당 0.5% ~ 1.0% 리스크 제한의 황금률',
        paragraphs: [
          '성공한 고액 펀딩 트레이더들의 핵심 조언: 단일 포지션에 시작 잔고의 0.5%~1.0% 이상을 절대 베팅하지 마십시오. $100,000 계정 기준 최대 스톱로스 허용치는 $500~$1,000 사이여야 합니다.',
          '포지션당 0.5% 리스크를 유지하면 하루에 8회 연속 손절매가 발생해야 비로소 일일 손실 한도(4%)에 도달합니다. 이 수학적 완충 장치는 심리적 패닉을 원천 차단하여 최소 1:2 이상의 손익비 기회를 여유롭게 기다릴 수 있게 해줍니다.'
        ]
      },
      {
        heading: '3. 최소 거래일수 제한 없음의 장점 활용',
        paragraphs: [
          'ERACEX는 최소 또는 최대 거래 일수를 강제하지 않으므로, 시장 구조가 불분명하거나 횡보할 때는 무리하게 진입하지 말고 관망하십시오. 자신의 거래 일정과 원칙을 온전히 스스로 통제할 수 있습니다.'
        ]
      }
    ]
  },
  ru: {
    title: 'Мастерство в Челленджах Проп-Фин: Дисциплина Управления Рисками и 4% Дневной Просадки',
    excerpt: 'Более 90% трейдеров проваливают отбор в проп-компании не из-за отсутствия индикаторов, а из-за неверного размера позиций и желания быстро обогатиться...',
    category: 'Управление Рисками',
    readTime: '6 мин чтения',
    authorRole: 'Руководитель Оценки Рисков, ERACEX',
    content: [
      {
        heading: '1. Роковая Психологическая Ловушка на Старте Челленджа',
        paragraphs: [
          'Одна из самых распространенных ошибок начинающих проп-трейдеров — относиться к испытанию как к игре в рулетку. Увидев счет на $100 000 или $200 000, многие открывают завышенные объемы в попытке заработать 8% за 1-2 дня.',
          'В ERACEX дневной лимит просадки 4% создан специально для того, чтобы привить трейдеру дисциплину профессионального управляющего активами. Рынок полон возможностей; выживание в неблагоприятные периоды — ключ к стабильной прибыли.'
        ]
      },
      {
        heading: '2. Золотое Правило Риска 0.5% - 1.0% на Сделку',
        paragraphs: [
          'Главный совет трейдеров с крупными финансируемыми счетами: никогда не рискуйте более чем 0.5%–1.0% от начального баланса в одной сделке. Для счета $100 000 стоп-лосс не должен превышать $500–$1 000.',
          'При риске 0.5% вам потребуется получить 8 убыточных сделок подряд в один день, чтобы коснуться 4% дневного лимита. Эта математическая защита исключает эмоциональные срывы и позволяет терпеливо дожидаться сетапов с соотношением риск/прибыль от 1:2.'
        ]
      },
      {
        heading: '3. Преимущество Отсутствия Минимальных Дней Торговли',
        paragraphs: [
          'Поскольку ERACEX не устанавливает минимальных или максимальных ограничений по времени, вы можете оставаться вне рынка при отсутствии четких торговых условий. Вы полностью управляете своим рабочим графиком.'
        ]
      }
    ]
  },
  ar: {
    title: 'احتراف اجتياز تحديات شركات التمويل: انضباط إدارة المخاطر وتراجع يومي 4%',
    excerpt: 'أكثر من 90% من المتداولين يفشلون في تقييمات شركات التمويل ليس لنقص المعرفة الفنية، بل لسوء إدارة أحجام العقود والرغبة في الثراء السريع...',
    category: 'إدارة المخاطر',
    readTime: '6 دقائق للقراءة',
    authorRole: 'رئيس قسم تقييم المخاطر، ERACEX',
    content: [
      {
        heading: '1. الفخ النفسي القاتل عند بدء التحدي',
        paragraphs: [
          'من أخطر الأخطاء الشائعة التعامل مع حساب التحدي وكأنه رهان قمار. عند رؤية رأس مال قدره 100,000$ أو 200,000$، يفرط المتداولون في الرافعة المالية آملين في تحقيق 8% في غضون يوم أو يومين.',
          'في ERACEX، تم وضع حد التراجع اليومي بنسبة 4% لغرس الانضباط الصارم لمديري الصناديق المحترفين. الفرص في السوق لا تنتهي أبداً؛ والقدرة على حماية رأس المال أثناء فترات التراجع هي الفارق بين المتداول الرابح والخاسر.'
        ]
      },
      {
        heading: '2. القاعدة الذهبية: مخاطرة 0.5% إلى 1.0% لكل صفقة',
        paragraphs: [
          'النصيحة الأهم من المتداولين الممولين الناجحين: لا تخاطر أبداً بأكثر من 0.5% إلى 1.0% من رصيدك الأولي في الصفقة الواحدة. في حساب 100,000$، يجب أن يتراوح وقف الخسارة بين 500$ و1,000$.',
          'مع نسبة مخاطرة 0.5%، ستحتاج إلى 8 صفقات خاسرة متتالية في يوم واحد لملامسة حد التراجع اليومي 4%. يوفر هذا الدرع الحسابي راحة نفسية ويمنحك الصبر لانتظار صفقات بنسبة عائد إلى مخاطرة 1:2 أو أكثر.'
        ]
      },
      {
        heading: '3. الاستفادة من عدم اشتراط حد أدنى لأيام التداول',
        paragraphs: [
          'نظراً لأن ERACEX لا تفرض حداً أدنى أو أقصى لأيام التداول، يمكنك الامتناع عن دخول السوق عندما تكون الحركة غير واضحة. أنت المتحكم الكامل في جدولك الزمني واستراتيجيتك الخاصة.'
        ]
      }
    ]
  },
  nl: {
    title: 'Prop Firm Challenge Succes: Risicobeheersing en 4% Dagelijkse Drawdown',
    excerpt: 'Meer dan 90% van de traders slaagt niet voor evaluaties, niet door gebrek aan technische kennis, maar door verkeerde positiegroottes en de drang om snel rijk te worden...',
    category: 'Risicobeheer',
    readTime: '6 min leestijd',
    authorRole: 'Hoofd Risicobeoordeling, ERACEX',
    content: [
      {
        heading: '1. De Fatale Psychologische Val bij de Start',
        paragraphs: [
          'Een van de grootste fouten van beginnende prop traders is de evaluatie zien als een casinospel. Met een koopkracht van $100.000 of $200.000 nemen velen te veel risico in de hoop het winstdoel van 8% in 1-2 dagen te halen.',
          'Bij ERACEX is de dagelijkse drawdown-limiet van 4% ontworpen om de discipline van een professionele vermogensbeheerder bij te brengen. Kansen zijn er altijd; het beheersen van verliesperiodes maakt een winstgevende trader.'
        ]
      },
      {
        heading: '2. De Gouden Regel: 0,5% tot 1,0% Risico per Trade',
        paragraphs: [
          'Het advies van succesvolle gefinancierde traders: riskeer nooit meer dan 0,5% tot 1,0% van het startkapitaal per trade. Op een $100.000 account ligt de maximale stop-loss tussen $500 en $1.000.',
          'Met 0,5% risico moet u 8 opeenvolgende verliezen op één dag lijden om de 4% limiet te raken. Deze buffer voorkomt paniek en stelt u in staat te wachten op kansen met een Risk/Reward van minimaal 1:2.'
        ]
      },
      {
        heading: '3. Profiteer van het Ontbreken van Minimale Handelsdagen',
        paragraphs: [
          'Omdat ERACEX geen minimale of maximale handelsdagen verplicht stelt, kunt u wachten wanneer de markt zijwaarts of onvoorspelbaar is. U behoudt de volledige regie over uw eigen agenda.'
        ]
      }
    ]
  }
};

fs.writeFileSync('scratch/blog_post1_translations.json', JSON.stringify(post1Translations, null, 2), 'utf8');
console.log('Saved post 1 translations');
