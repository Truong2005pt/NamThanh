const fs = require('fs');

const filePath = 'lib/blog-data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// We have 3 posts. Let's inspect where translations end for post 1, 2, 3.
console.log('Reading lib/blog-data.ts...');

// Let's create an injector for post 1, post 2, post 3 translations
const POST1_EXTRA_TRANSLATIONS = `
      ko: {
        title: '프랍펌 챌린지 합격 비결: 철저한 리스크 관리 원칙과 4% 일일 드로다운 준수',
        excerpt: '90% 이상의 트레이더가 프랍 챌린지에서 탈락하는 이유는 기술적 분석 부족이 아니라 과도한 포지션 사이징과 조급함 때문입니다...',
        category: '리스크 관리 전략',
        readTime: '6분 읽기',
        authorRole: 'ERACEX 수석 리스크 평가위원',
        content: [
          {
            heading: '1. 평가 시작 시 조급한 기대감의 함정',
            paragraphs: [
              '초보 트레이더들이 저지르는 가장 치명적인 실수는 평가를 도박처럼 대하는 것입니다. $100,000의 자금을 보고 1-2일 만에 8% 목표를 달성하려 무리한 레버리지를 사용합니다.',
              'ERACEX의 4% 일일 손실 한도는 전문 펀드 매니저의 규율을 양성하기 위해 설계되었습니다. 변동성 장세에서 생존하는 자만이 진정한 승자가 됩니다.'
            ]
          },
          {
            heading: '2. 거래당 0.5% - 1.0% 리스크의 황금률',
            paragraphs: [
              '성공한 펀딩 트레이더들의 핵심 조언: 매 거래마다 총 자본의 0.5%~1% 이하로 손실 위험을 철저히 제한하십시오.',
              '0.5% 리스크를 유지하면 하루에 8번 연속 손절되어야 일일 한도에 도달합니다. 이는 1:2 이상의 손익비 기회를 차분히 기다릴 수 있는 심리적 여유를 제공합니다.'
            ]
          },
          {
            heading: '3. 최소 거래일수 0일 규칙의 극대화',
            paragraphs: [
              'ERACEX는 최소/최대 거래일수를 강제하지 않으므로 시장 구조가 불분명할 때는 언제든 관망할 수 있습니다. 자신만의 페이스로 거래를 운용하십시오.'
            ]
          }
        ]
      },
      es: {
        title: 'Dominio del Desafío Prop Firm: Disciplina de Gestión de Riesgo y Drawdown Diario del 4%',
        excerpt: 'Más del 90% de los traders suspenden las evaluaciones no por falta de análisis técnico, sino por un dimensionamiento erróneo y la urgencia de ganancias rápidas...',
        category: 'Gestión de Riesgo',
        readTime: '6 min de lectura',
        authorRole: 'Jefe de Evaluación de Riesgos, ERACEX',
        content: [
          {
            heading: '1. La trampa de las altas expectativas al iniciar',
            paragraphs: [
              'Uno de los errores más letales es tratar la prueba como una apuesta. Al ver $100,000 en pantalla, muchos aumentan el apalancamiento para alcanzar el 8% en un par de días.',
              'En ERACEX establecemos un drawdown diario del 4% para formar una disciplina institucional. El mercado siempre ofrece oportunidades; sobrevivir es ganar.'
            ]
          },
          {
            heading: '2. La regla de oro del 0.5% - 1.0% por operación',
            paragraphs: [
              'Consejo de traders financiados: no arriesgar más del 0.5% al 1% del balance total por operación.',
              'Arriesgando el 0.5% por trade, necesitarías 8 pérdidas seguidas en un día para rozar el límite. Esta calma psicológica te permite esperar configuraciones de alta probabilidad.'
            ]
          },
          {
            heading: '3. Aprovecha la ventaja de 0 días mínimos',
            paragraphs: [
              'Al no tener exigencia de días mínimos ni máximos, si el mercado está errático puedes permanecer al margen con total libertad y control de tus tiempos.'
            ]
          }
        ]
      },
      pt: {
        title: 'Domínio do Desafio em Mesas Proprietárias: Disciplina de Gestão de Risco e Drawdown Diário de 4%',
        excerpt: 'Mais de 90% dos traders são reprovados não por falta de técnica, mas por lote excessivo e imediatismo...',
        category: 'Gestão de Risco',
        readTime: '6 min de leitura',
        authorRole: 'Líder de Avaliação de Risco, ERACEX',
        content: [
          {
            heading: '1. A armadilha do imediatismo na avaliação',
            paragraphs: [
              'Um dos maiores erros é encarar a avaliação como loteria. Diante de $100.000, muitos sobrealavancam tentando bater 8% em 2 dias.',
              'Na ERACEX, o drawdown diário de 4% desenvolve disciplina de nível institucional. Sobreviver aos ciclos do mercado é o caminho da consistência.'
            ]
          },
          {
            heading: '2. Regra de ouro: 0.5% a 1.0% de risco por trade',
            paragraphs: [
              'Operadores de sucesso arriscam no máximo 0.5% a 1% do saldo em cada stop loss.',
              'Com 0.5% de risco, seriam necessários 8 stops seguidos em um único dia para atingir a perda máxima, permitindo tranquilidade para esperar boas relações Risco/Retorno.'
            ]
          },
          {
            heading: '3. Benefício de 0 dias mínimos de operação',
            paragraphs: [
              'Como não há exigência de dias mínimos ou máximos, você pode ficar de fora quando o mercado estiver sem direção clara.'
            ]
          }
        ]
      },
      fr: {
        title: 'Maîtriser les Défis Prop Firm : Rigueur de Gestion du Risque et Drawdown Journalier de 4%',
        excerpt: 'Plus de 90% des échecs en évaluation ne viennent pas d\\'une faille technique, mais d\\'un mauvais dimensionnement et de la précipitation...',
        category: 'Gestion du Risque',
        readTime: '6 min de lecture',
        authorRole: 'Directeur de l\\'Évaluation des Risques, ERACEX',
        content: [
          {
            heading: '1. Le piège des attentes irréalistes',
            paragraphs: [
              'Considérer l\\'évaluation comme un coup de poker est l\\'erreur classique. Avec un solde de $100,000, la tentation de sur-lever pour boucler 8% en 48 heures est forte.',
              'Chez ERACEX, la limite journalière de 4% forge une rigueur de gestionnaire de fonds. Ceux qui durent sont ceux qui triomphent.'
            ]
          },
          {
            heading: '2. Règle d\\'or : 0.5% à 1.0% par position',
            paragraphs: [
              'Les traders financés appliquent tous la même règle : risquer au maximum 0.5% à 1% de l\\'équité par trade.',
              'À 0.5% par trade, il vous faudrait 8 pertes consécutives en une journée pour atteindre la limite, garantissant la lucidité pour attendre des setups favorables.'
            ]
          },
          {
            heading: '3. Aucun jour minimum obligatoire',
            paragraphs: [
              'Sans contrainte de durée minimale ou maximale, restez à l\\'écart lorsque le marché manque de clarté en toute sérénité.'
            ]
          }
        ]
      },
      de: {
        title: 'Erfolgreich durch die Prop-Challenge: Risikomanagement und 4% täglicher Drawdown',
        excerpt: 'Über 90% scheitern nicht an technischer Analyse, sondern an unüberlegter Positionsgröße und überhöhten Gewinnerwartungen...',
        category: 'Risikomanagement',
        readTime: '6 Min. Lesezeit',
        authorRole: 'Leiter Risikobewertung, ERACEX',
        content: [
          {
            heading: '1. Die Erwartungsfalle zu Beginn der Evaluation',
            paragraphs: [
              'Ein fataler Fehler ist es, die Challenge als Glücksspiel zu betrachten. Bei $100.000 Guthaben überhebeln viele, um 8% in wenigen Tagen zu erzwingen.',
              'Die 4% Tagesverlustgrenze bei ERACEX schult institutionelle Disziplin. Die Überlebenden volatiler Phasen sind die wahren Gewinner.'
            ]
          },
          {
            heading: '2. Die goldene Regel: 0.5% bis 1.0% Risiko pro Trade',
            paragraphs: [
              'Erfolgreiche Trader riskieren maximal 0.5% bis 1% ihres Gesamtguthabens je Trade.',
              'Bei 0.5% Risiko sind 8 Fehltrades in Serie an einem Tag nötig, um das Limit zu erreichen. Das sichert mentale Gelassenheit für starke Setups.'
            ]
          },
          {
            heading: '3. Keine Mindesthandelstage als Vorteil nutzen',
            paragraphs: [
              'Ohne Mindesthandelszeit können Sie bei unklaren Marktbedingungen entspannt an der Seitenlinie verweilen.'
            ]
          }
        ]
      },
      ru: {
        title: 'Секреты прохождения проп-челленджа: Жесткий риск-менеджмент и дневной лимит 4%',
        excerpt: 'Более 90% трейдеров проваливают отбор не из-за слабой аналитики, а из-за завышения рисков и желания обогатиться за пару дней...',
        category: 'Управление рисками',
        readTime: '6 мин чтения',
        authorRole: 'Руководитель отдела оценки рисков, ERACEX',
        content: [
          {
            heading: '1. Ловушка завышенных ожиданий на старте',
            paragraphs: [
              'Опаснейшая ошибка — относиться к испытанию как к казино. Видя баланс в $100,000, новички открывают гигантские лоты в надежде сделать 8% за день-два.',
              'В ERACEX дневная просадка 4% заставляет соблюдать дисциплину институционального уровня. Выживание в бурю — залог победы.'
            ]
          },
          {
            heading: '2. Золотое правило 0.5% - 1.0% на сделку',
            paragraphs: [
              'Главный совет профессионалов: рисковать не более 0.5–1% от баланса на одну позицию.',
              'При риске 0.5% на сделку нужно получить 8 стоп-лоссов подряд за день, чтобы нарушить правило. Это гарантирует спокойствие для ожидания хорошего соотношения R:R.'
            ]
          },
          {
            heading: '3. Преимущество отсутствия минимальных дней',
            paragraphs: [
              'Без жестких требований по срокам вы можете спокойно наблюдать за рынком со стороны в периоды неопределенности.'
            ]
          }
        ]
      },
      it: {
        title: 'Superare le Sfide Prop Firm: Disciplina di Gestione del Rischio e Drawdown Giornaliero del 4%',
        excerpt: 'Oltre il 90% dei trader fallisce le sfide per errata gestione delle dimensioni di posizione e fretta di fare profitto...',
        category: 'Gestione del Rischio',
        readTime: '6 min di lettura',
        authorRole: 'Responsabile Risk Management, ERACEX',
        content: [
          {
            heading: '1. La trappola delle aspettative iniziali',
            paragraphs: [
              'Trattare la valutazione come una scommessa è l\\'errore più comune. Con $100.000 sul conto, molti aprono lotti enormi per raggiungere l\\'8% in due giorni.',
              'Il limite del 4% giornaliero in ERACEX allena la disciplina di veri gestori patrimoniali. Chi sa aspettare vince.'
            ]
          },
          {
            heading: '2. La regola aurea dello 0.5% - 1.0% a trade',
            paragraphs: [
              'I trader finanziati rischiano esclusivamente tra lo 0.5% e l\\'1% dell\\'equity totale per singola operazione.',
              'Con lo 0.5% a trade servirebbero 8 perdite consecutive in una giornata per violare la regola, consentendo di attendere setup con R:R favorevole.'
            ]
          },
          {
            heading: '3. Zero vincoli sui giorni minimi',
            paragraphs: [
              'Nessun obbligo di giorni minimi o massimi: quando il mercato è incerto, puoi rimanere a guardare in totale libertà.'
            ]
          }
        ]
      },
      ar: {
        title: 'أسرار اجتياز تحديات شركات التمويل: انضباط إدارة المخاطر وتراجع يومي 4%',
        excerpt: 'يفشل أكثر من 90% من المتداولين في التقييمات ليس لنقص التحليل الفني، بل بسبب التسرع والمخاطرة المفرطة بحجم العقود...',
        category: 'إدارة المخاطر',
        readTime: '6 دقائق قراءة',
        authorRole: 'رئيس لجنة تقييم المخاطر، ERACEX',
        content: [
          {
            heading: '1. فخ التوقعات المفرطة عند بدء التحدي',
            paragraphs: [
              'الخطأ القاتل هو التعامل مع التحدي كمقامرة سريعة. رؤية رصيد $100,000 تدفع البعض للمبالغة في العقود لتحقيق 8% في يومين.',
              'في ERACEX، وُضع حد التراجع اليومي 4% لترسيخ عادات إدارة المحافظ المؤسسية. البقاء في السوق هو أول أسباب النجاح.'
            ]
          },
          {
            heading: '2. القاعدة الذهبية: مخاطرة 0.5% إلى 1.0% لكل صفقة',
            paragraphs: [
              'القاعدة الأهم للمتداولين المحترفين: لا تخاطر بأكثر من 0.5% إلى 1% من الرصيد في أي صفقة.',
              'بمخاطرة 0.5% تحتاج إلى 8 صفقات خاسرة متتالية في يوم واحد لبلوغ الحد، مما يمنحك راحة نفسية تامة لانتظار أفضل الفرص.'
            ]
          },
          {
            heading: '3. استغلال ميزة صفر أيام تداول دنيا',
            paragraphs: [
              'لأن ERACEX لا تفرض أيام تداول إجبارية، يمكنك البقاء خارج السوق بهدوء عندما تكون حركته غير واضحة.'
            ]
          }
        ]
      },
      tr: {
        title: 'Prop Firm Sınavlarını Başarıyla Geçme Rehberi: Risk Yönetimi Disiplini ve %4 Günlük Drawdown',
        excerpt: 'Yatırımcıların %90\\'ından fazlası teknik analiz eksikliğinden değil, hatalı lot büyüklüğü ve acelecilik yüzünden elenir...',
        category: 'Risk Yönetimi',
        readTime: '6 dk okuma',
        authorRole: 'Risk Değerlendirme Direktörü, ERACEX',
        content: [
          {
            heading: '1. Sınava Başlarken Yüksek Beklenti Tuzağı',
            paragraphs: [
              'Yapılan en büyük hata sınavı kumara dönüştürmektir. $100.000 bakiyeyi görenler 1-2 günde %8\\'i vurmak için aşırı kaldıraç kullanır.',
              'ERACEX\\'te uygulanan %4 günlük kayıp limiti kurumsal fon disiplini kazandırmak içindir. Sabırla piyasada kalanlar kazanır.'
            ]
          },
          {
            heading: '2. İşlem Başına %0.5 - %1.0 Altın Kuralı',
            paragraphs: [
              'Başarılı fonlu yatırımcıların değişmez kuralı: İşlem başına toplam sermayenin en fazla %0.5 ile %1\\'i riske atılmalıdır.',
              'İşlem başına %0.5 risk ile günlük limite ulaşmak için üst üste 8 kez stop olmanız gerekir. Bu rahatlık iyi fırsatları beklemenizi sağlar.'
            ]
          },
          {
            heading: '3. Minimum İşlem Günü Zorunluluğu Olmamasının Avantajı',
            paragraphs: [
              'ERACEX minimum ya da maksimum gün şartı koşmadığı için piyasa belirsiz olduğunda rahatça işlem yapmadan bekleyebilirsiniz.'
            ]
          }
        ]
      },
      th: {
        title: 'เคล็ดลับสอบผ่านพอร์ตทุน Prop Firm: วินัยบริหารความเสี่ยงและ Drawdown รายวัน 4%',
        excerpt: 'กว่า 90% ของเทรดเดอร์ที่สอบตก ไม่ใช่เพราะวิเคราะห์กราฟไม่เป็น แต่เกิดจากการโอเวอร์เทรดและใจร้อน...',
        category: 'การบริหารความเสี่ยง',
        readTime: 'เวลาอ่าน 6 นาที',
        authorRole: 'หัวหน้าฝ่ายประเมินความเสี่ยง, ERACEX',
        content: [
          {
            heading: '1. กับดักความคาดหวังเมื่อเริ่มต้นสอบ',
            paragraphs: [
              'ข้อผิดพลาดร้ายแรงคือการมองการสอบเหมือนการเล่นการพนัน เห็นพอร์ต $100,000 แล้วเปิดหลอดใหญ่หวังผ่านใน 1-2 วัน',
              'ที่ ERACEX ขีดจำกัดขาดทุนรายวัน 4% มีไว้เพื่อฝึกฝนวินัยในการบริหารเงินระดับสถาบัน ผู้ที่อยู่รอดในตลาดคือผู้ชนะ'
            ]
          },
          {
            heading: '2. กฎทอง 0.5% - 1.0% ความเสี่ยงต่อไม้',
            paragraphs: [
              'คำแนะนำสำคัญจากเทรดเดอร์พอร์ตทุน: ควรเสี่ยงเพียง 0.5% ถึงไม่เกิน 1% ของพอร์ตในแต่ละการเปิดออเดอร์',
              'เมื่อคุมความเสี่ยงที่ 0.5% คุณต้องแพ้ติดกันถึง 8 ไม้ในวันเดียวจึงจะผิดกฎ ทำให้คุณมีสติรอคอยจุดเข้าที่มี R:R สูง'
            ]
          },
          {
            heading: '3. ใช้ประโยชน์จากเกณฑ์ไม่จำกัดวันเทรดขั้นต่ำ',
            paragraphs: [
              'เนื่องจากไม่มีข้อบังคับวันเทรดขั้นต่ำหรือวันสิ้นสุด คุณสามารถรอคอยอยู่นอกตลาดได้อย่างสบายใจเมื่อกราฟไม่ชัดเจน'
            ]
          }
        ]
      },
      id: {
        title: 'Kunci Lulus Ujian Prop Firm: Disiplin Manajemen Risiko & Drawdown Harian 4%',
        excerpt: 'Lebih dari 90% trader gagal bukan karena kurang ilmu analisa, melainkan karena ukuran lot yang serampangan dan ingin cepat kaya...',
        category: 'Manajemen Risiko',
        readTime: '6 mnt baca',
        authorRole: 'Kepala Penilai Risiko, ERACEX',
        content: [
          {
            heading: '1. Jebakan Ekspektasi Berlebihan Saat Memulai',
            paragraphs: [
              'Kesalahan fatal pemula adalah menganggap evaluasi seperti judi. Melihat modal $100.000, banyak yang open lot jumbo demi target 8% dalam 2 hari.',
              'Di ERACEX, batas rugi harian 4% dirancang untuk membentuk disiplin pengelola dana profesional. Bertahan adalah kunci kemenangan.'
            ]
          },
          {
            heading: '2. Aturan Emas 0.5% - 1.0% Risiko Per Posisi',
            paragraphs: [
              'Saran inti dari trader funded sukses: Batasi risiko maksimal 0.5% hingga 1% dari total modal di setiap posisi.',
              'Dengan risiko 0.5% per trade, Anda harus mengalami 8 stop loss beruntun dalam sehari untuk melanggar batas, memberi ketenangan menunggu setup terbaik.'
            ]
          },
          {
            heading: '3. Manfaatkan Aturan 0 Hari Minimum Trading',
            paragraphs: [
              'ERACEX tidak memaksa batas hari minimum, sehingga Anda bebas menunggu di luar pasar saat pergerakan harga tidak bersahabat.'
            ]
          }
        ]
      },
      hi: {
        title: 'प्रॉप फर्म मूल्यांकन में महारत: जोखिम प्रबंधन अनुशासन और 4% दैनिक ड्रॉडाउन',
        excerpt: '90% से अधिक ट्रेडर्स तकनीकी विश्लेषण की कमी से नहीं, बल्कि खराब स्थिति आकार और जल्दबाजी के कारण असफल होते हैं...',
        category: 'जोखिम प्रबंधन',
        readTime: '6 मिनट पढ़ने का समय',
        authorRole: 'जोखिम मूल्यांकन प्रमुख, ERACEX',
        content: [
          {
            heading: '1. मूल्यांकन शुरू करते समय अत्यधिक अपेक्षा का जाल',
            paragraphs: [
              'शुरुआती ट्रेडर्स की सबसे घातक गलती मूल्यांकन को जुआ समझना है। $100,000 देखकर कई ट्रेडर्स 1-2 दिनों में 8% का लक्ष्य पाने के लिए ओवर-लीवरेज करते हैं।',
              'ERACEX में 4% दैनिक हानि सीमा अनुशासित संस्थागत आदतें विकसित करने के लिए बनाई गई है। जो अस्थिरता में टिके रहते हैं, वही सफल होते हैं।'
            ]
          },
          {
            heading: '2. प्रति ट्रेड 0.5% - 1.0% जोखिम का स्वर्णिम नियम',
            paragraphs: [
              'सफल फंडेड ट्रेडर्स की मुख्य सलाह: प्रति ट्रेड कुल इक्विटी के 0.5% से अधिकतम 1% से अधिक का जोखिम न लें।',
              '0.5% जोखिम के साथ दैनिक सीमा तोड़ने के लिए लगातार 8 नुकसान उठाने होंगे, जो अनुकूल अवसरों की धैर्यपूर्वक प्रतीक्षा करने का संबल देता है।'
            ]
          },
          {
            heading: '3. शून्य न्यूनतम ट्रेडिंग दिनों का लाभ उठाएं',
            paragraphs: [
              'ERACEX न्यूनतम या अधिकतम दिन अनिवार्य नहीं करता है, जिससे अनिश्चित बाजार स्थितियों में आप बिना किसी दबाव के बाहर रह सकते हैं।'
            ]
          }
        ]
      },
      pl: {
        title: 'Mistrzostwo w Wyzwaniach Prop Firm: Dyscyplina Zarządzania Ryzykiem i Drawdown Dzienny 4%',
        excerpt: 'Ponad 90% traderów odpada nie z braku wiedzy technicznej, lecz przez błędny dobór wielkości pozycji i pośpiech...',
        category: 'Zarządzanie Ryzykiem',
        readTime: '6 min czytania',
        authorRole: 'Dyrektor ds. Oceny Ryzyka, ERACEX',
        content: [
          {
            heading: '1. Pułapka wygórowanych oczekiwań na starcie',
            paragraphs: [
              'Traktowanie wyzwania jak ruletki to błąd kardynalny. Widząc $100.000, wielu próbuje zrealizować 8% w 2 dni przy skrajnym lewarze.',
              'Limit 4% straty dziennej w ERACEX kształtuje dyscyplinę zarządzającego kapitałem. Przetrwanie wahań rynkowych to klucz do sukcesu.'
            ]
          },
          {
            heading: '2. Złota zasada 0.5% - 1.0% ryzyka na pozycję',
            paragraphs: [
              'Doświadczeni traderzy funded ryzykują maksymalnie od 0.5% do 1% kapitału konta na pojedyncze zlecenie.',
              'Ryzykując 0.5% na pozycję, potrzeba aż 8 strat z rzędu w jeden dzień, by naruszyć regułę, co daje komfort wyczekiwania na silne setupy.'
            ]
          },
          {
            heading: '3. Przewaga braku minimalnej liczby dni',
            paragraphs: [
              'ERACEX nie narzuca limitów czasowych ani minimalnych dni, dzięki czemu możesz bez presji przeczekać niepewne momenty na rynku.'
            ]
          }
        ]
      },
      nl: {
        title: 'Succesvol in Prop Firm Challenges: Risicobeheer en 4% Dagelijkse Drawdown',
        excerpt: 'Meer dan 90% van de deelnemers faalt niet door gebrek aan analyse, maar door te grote posities en ongeduld...',
        category: 'Risicomanagement',
        readTime: '6 min leestijd',
        authorRole: 'Hoofd Risicobeoordeling, ERACEX',
        content: [
          {
            heading: '1. De valkuil van te hoge verwachtingen',
            paragraphs: [
              'Het evaluatietraject behandelen als gokspel is een veelgemaakte fout. Met $100.000 op het scherm proberen velen binnen 2 dagen 8% te forceren.',
              'De daglimiet van 4% bij ERACEX traint institutionele discipline. Degenen die kalm blijven tijdens volatiliteit behalen succes.'
            ]
          },
          {
            heading: '2. Gouden regel: 0.5% tot 1.0% risico per transactie',
            paragraphs: [
              'Kernadvies van gefinancierde handelaren: riskeer nooit meer dan 0.5% tot 1% van het totale saldo per positie.',
              'Bij 0.5% risico zijn 8 opeenvolgende verliezen op één dag nodig om de limiet te bereiken, wat rust biedt om te wachten op goede kansen.'
            ]
          },
          {
            heading: '3. Profiteer van nul minimale handelsdagen',
            paragraphs: [
              'Omdat ERACEX geen minimum- of maximumtermijn oplegt, kunt u gerust afwachten wanneer de markt geen duidelijke structuur toont.'
            ]
          }
        ]
      },
      fil: {
        title: 'Tagumpay sa Prop Firm Challenge: Disiplina sa Risk Management at 4% Daily Drawdown',
        excerpt: 'Higit sa 90% ng mga trader ang bumabagsak hindi dahil kulang sa kaalaman sa chart, kundi dahil sa maling sukat ng posisyon at pagmamadali...',
        category: 'Pamamahala ng Panganib',
        readTime: '6 min basahin',
        authorRole: 'Pinuno ng Pagsusuri ng Panganib, ERACEX',
        content: [
          {
            heading: '1. Ang bitag ng sobrang taas na inaasahan sa simula',
            paragraphs: [
              'Ang malaking pagkakamali ng mga baguhan ay ituring na sugal ang challenge. Pagkakita sa $100,000 na pondo, nagbubukas ng malalaking lote para abutin ang 8% sa loob ng 2 araw.',
              'Sa ERACEX, ang 4% daily drawdown limit ay ginawa para sanayin ang propesyonal na disiplina. Ang nakatagal sa merkado ang tunay na nagwawagi.'
            ]
          },
          {
            heading: '2. Gintong tuntunin na 0.5% - 1.0% panganib bawat trade',
            paragraphs: [
              'Pangunahing payo ng matagumpay na funded traders: huwag mag-risk ng higit sa 0.5% hanggang 1% ng kabuuang balanse sa bawat posisyon.',
              'Sa 0.5% na peligro, kailangan mo ng 8 sunod-sunod na talo sa isang araw bago maabot ang limitasyon, na nagbibigay ng kapanatagan sa paghihintay ng tamang setup.'
            ]
          },
          {
            heading: '3. Sulitin ang walang minimum na araw ng pag-trade',
            paragraphs: [
              'Dahil walang sapilitang bilang ng araw sa ERACEX, malaya kang maghintay sa gilid kapag magulo ang takbo ng merkado.'
            ]
          }
        ]
      },
`;

// Insert POST1_EXTRA_TRANSLATIONS after ja in post 1
const post1JaMarker = "quote: 'プロのトレーダーにとって、法的な保護とファームの透明性は不可欠です。すべての出金に正式な契約書と電子請求書が発行され、税務申告も極めてスムーズです。',";

// Let's find post 1 translations block
const p1EndMarker = '        readTime: \'読了目安 6分\',\n        authorRole: \'ERACEX リスク評価ディレクター\',\n        content: [\n          {\n            heading: \'1. 評価開始時における過度な期待の罠\',\n            paragraphs: [\n              \'新規参加者が陥る最も致命的な過ちは、チャレンジを一攫千金のギャンブルのように扱うことです。100,000ドルや200,000ドルの資金残高を見て、1〜2日で8%の利益目標を達成しようと過剰なポジションを建ててしまいます。\',\n              \'ERACEXでは、プロのファンドマネージャーとしての規律を身につけることを目的として、1日の最大ドローダウンを4%に設定しています。相場にチャンスはいくらでもあります。ボラティリティの波を生き残る者こそが勝者となります。\'\n            ]\n          },\n          {\n            heading: \'2. 1トレードあたり0.5%〜1.0%リスクの鉄則\',\n            paragraphs: [\n              \'合格トレーダーからの最も重要なアドバイス：各エントリーのリスクは口座残高の0.5%から最大1%以内に抑えることです。100,000ドルの口座であれば、ストップロス1回あたりの最大リスクは500ドルから1,000ドルです。\',\n              \'1トレードあたりのリスクを0.5%に維持すれば、1日に8回連続で損切りにならない限り日次制限（4%）に達することはありません。この精神的な余裕が、リスクリワード1:2以上の有利なエントリーチャンスを冷静に待つ力となります。\'\n            ]\n          },\n          {\n            heading: \'3. 最低取引日数ゼロの利点を最大活用する\',\n            paragraphs: [\n              \'ERACEXでは最低・最大取引日数の縛りが一切ないため、明確な相場構造が見られないときはノーポジで静観してください。自身のペースと取引スタイルを完全にコントロールできます。\'\n            ]\n          }\n        ]\n      }\n    }';

if (content.includes(p1EndMarker)) {
  content = content.replace(p1EndMarker, p1EndMarker.replace('\n    }', ',\n' + POST1_EXTRA_TRANSLATIONS + '    }'));
  console.log('Successfully inserted post 1 extra translations');
} else {
  console.log('p1EndMarker not matched');
}

fs.writeFileSync(filePath, content, 'utf8');
