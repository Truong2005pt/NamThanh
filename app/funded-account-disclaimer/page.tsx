import { Metadata } from 'next';
import { PolicyPage, PolicyContent } from '@/components/eracex/PolicyPage';

export const metadata: Metadata = {
  title: 'Funded Account Disclaimer — Tuyên Bố Về Tài Khoản Cấp Vốn | ERACEX',
  description: 'Tuyên bố miễn trừ về tài khoản cấp vốn mô phỏng, hiệu suất giả định và rủi ro giao dịch tại ERACEX.',
};

const DISCLAIMER_DICT: Record<string, PolicyContent> = {
  vi: {
    title: 'Tuyên Bố Về Tài Khoản Cấp Vốn',
    subtitle: 'Vui lòng đọc kỹ trước khi mua thử thách hoặc nhận tài khoản cấp vốn.',
    sections: [
      { heading: 'Tài khoản mô phỏng', body: ['Mọi tài khoản thử thách và tài khoản cấp vốn của ERACEX là tài khoản mô phỏng (demo). Vốn hiển thị là vốn mô phỏng, không phải tiền gửi của khách hàng.'] },
      { heading: 'Bản chất của phí mua', body: ['Phí mua chỉ dùng để tham gia đánh giá, học tập và truy cập nền tảng giao dịch mô phỏng. Phí này không phải tiền ký quỹ, không phải vốn đầu tư và không đảm bảo bạn nhận được tài khoản hay thu nhập.'] },
      { heading: 'Hiệu suất giả định', body: ['Kết quả trên tài khoản mô phỏng có những hạn chế vốn có và không phản ánh giao dịch thực. Kết quả trong quá khứ không bảo đảm kết quả tương lai.'] },
      { heading: 'Không phải tư vấn đầu tư', body: ['ERACEX không phải nhà môi giới, cố vấn tài chính hay đại diện tài chính, không nhận tiền gửi của khách hàng và không đưa ra khuyến nghị đầu tư. Mọi quyết định giao dịch do bạn tự chịu trách nhiệm.'] },
      { heading: 'Giới hạn khu vực', body: ['Dịch vụ không dành cho cá nhân tại các khu vực mà việc sử dụng vi phạm pháp luật hiện hành. Bạn có trách nhiệm tuân thủ luật pháp nơi cư trú.'] },
    ],
  },
  en: {
    title: 'Funded Account Disclaimer',
    subtitle: 'Please read carefully before buying a challenge or receiving a funded account.',
    sections: [
      { heading: 'Simulated accounts', body: ['All ERACEX challenge and funded accounts are simulated (demo) accounts. The capital shown is simulated and is not a customer deposit.'] },
      { heading: 'Nature of purchase fees', body: ['Purchase fees are strictly for participation in evaluations, education and access to the simulated trading platform. They are not a trading deposit or investment capital and do not guarantee an account or any income.'] },
      { heading: 'Hypothetical performance', body: ['Results on simulated accounts have inherent limitations and do not reflect actual trading. Past performance does not guarantee future results.'] },
      { heading: 'Not investment advice', body: ['ERACEX is not a broker, financial advisor or financial representative, does not accept client deposits and gives no investment recommendations. All trading decisions are your own responsibility.'] },
      { heading: 'Jurisdiction limits', body: ['Services are not intended for individuals in jurisdictions where their use would violate applicable law. You are responsible for complying with the laws where you live.'] },
    ],
  },
  zh: {
    title: '资助实盘账户免责声明',
    subtitle: '在购买考核挑战或接收资助账户前，请务必仔细阅读本声明。',
    sections: [
      { heading: '完全模拟性质', body: ['ERACEX 提供的所有考核账户及资助账户均为模拟（Demo）环境。显示的资金规模仅为模拟权益，非客户实际充值存款。'] },
      { heading: '报名费用的法律属性', body: ['报名费用仅用于参与专业技能评测、获取教育资源及使用低延迟模拟撮合系统，绝非保证金或投资理财，亦不保证必获收益。'] },
      { heading: '假设性业绩限制', body: ['模拟环境下的交易表现存在固有局限性，并不等同于实盘真实撮合。历史表现绝不构成未来盈亏的保证。'] },
      { heading: '非金融投资建议', body: ['ERACEX 并非持牌经纪商、投顾或金融中介，不吸纳公众存款，亦不提供任何建仓建议。所有交易决策均由用户自行负责。'] },
      { heading: '司法管辖区合规', body: ['若当地法律法规禁止此类自营模拟交易服务，则本平台服务对该地区人员无效。用户须自行恪守属地法律。'] },
    ],
  },
  ja: {
    title: '資金提供口座に関する免責事項',
    subtitle: 'チャレンジの購入または資金口座の受領前に、必ず本書を熟読してください。',
    sections: [
      { heading: 'シミュレーション口座の性質', body: ['ERACEX が提供するすべての評価口座および資金提供口座はシミュレーション（デモ）環境です。表示される残高は仮想資本であり、預託金ではありません。'] },
      { heading: '参加料の性質', body: ['参加料はトレーダー評価、教材アクセス、シミュレーション基盤の利用料であり、投資資本や証拠金ではなく、収益を保証するものではありません。'] },
      { heading: '仮説的取引実績の限界', body: ['デモ環境でのパフォーマンスには固有の限界があり、実際の市場執行を完全に反映するものではありません。過去の実績は将来を保証しません。'] },
      { heading: '金融助言の非該当性', body: ['ERACEX はブローカーや投資顧問会社ではなく、預託金の受領や投資推奨は行いません。取引判断はすべて自己責任となります。'] },
      { heading: '管轄区域の制限', body: ['適用される法令に違反する法域の居住者に対するサービス提供を意図していません。居住国の法令遵守は利用者の責任です。'] },
    ],
  },
  ko: {
    title: '펀딩 계정 고지 및 면책 조항',
    subtitle: '챌린지를 구매하거나 펀딩 계정을 수령하기 전에 본 면책 조항을 주의 깊게 읽어주십시오.',
    sections: [
      { heading: '모의 환경의 본질', body: ['ERACEX에서 제공하는 모든 챌린지 및 펀딩 계정은 모의(데모) 계정입니다. 표시되는 자본금은 모의 잔고이며 고객 예치금이 아닙니다.'] },
      { heading: '응시료의 법적 성격', body: ['결제된 응시료는 평가 참여, 교육 콘텐츠 및 모의 거래 시스템 이용 대가이며, 투자 예치금이 아니며 특정 수익을 보장하지 않습니다.'] },
      { heading: '가상 성과의 한계', body: ['모의 계정에서의 거래 결과는 태생적인 한계가 있으며 실제 시장 거래와 동일하지 않습니다. 과거의 성과가 미래를 보장하지 않습니다.'] },
      { heading: '투자 자문 부인', body: ['ERACEX는 중개사, 금융 자문사 또는 대리인이 아니며, 고객 예탁금을 수취하지 않고 투자 추천을 제공하지 않습니다. 모든 매매 책임은 본인에게 있습니다.'] },
      { heading: '관할권 제한', body: ['현지 관련 법령에 위배되는 지역의 거주자에게는 서비스가 제공되지 않으며, 거주국의 법률 준수 책임은 이용자에게 있습니다.'] },
    ],
  },
  es: {
    title: 'Aviso Legal sobre Cuentas Financiadas',
    subtitle: 'Lea atentamente antes de adquirir un desafío o recibir una cuenta financiada.',
    sections: [
      { heading: 'Cuentas simuladas', body: ['Todas las cuentas de evaluación y financiadas de ERACEX son cuentas simuladas (demo). El capital mostrado es simulado y no constituye un depósito de clientes.'] },
      { heading: 'Naturaleza de las tarifas', body: ['Las tarifas de inscripción son exclusivamente para la evaluación, educación y acceso a la plataforma. No son depósitos de trading ni garantizan ganancias.'] },
      { heading: 'Rendimiento hipotético', body: ['Los resultados en cuentas simuladas tienen limitaciones inherentes y no reflejan operaciones reales. Rentabilidades pasadas no garantizan resultados futuros.'] },
      { heading: 'No es asesoramiento de inversión', body: ['ERACEX no es un bróker ni asesor financiero, no capta fondos del público ni recomienda operaciones. Toda decisión operativa es de su entera responsabilidad.'] },
      { heading: 'Límites jurisdiccionales', body: ['Los servicios no están destinados a personas en jurisdicciones donde su uso infrinja la legislación aplicable. Es responsabilidad del usuario cumplir sus leyes locales.'] },
    ],
  },
  pt: {
    title: 'Isenção de Responsabilidade sobre Contas Financiadas',
    subtitle: 'Leia atentamente antes de adquirir um desafio ou ativar uma conta financiada.',
    sections: [
      { heading: 'Contas simuladas', body: ['Todas as contas da ERACEX são estritamente simuladas (demo). O saldo exibido é virtual e não representa depósitos bancários de clientes.'] },
      { heading: 'Natureza das taxas de inscrição', body: ['Os valores pagos destinam-se à avaliação de habilidades, educação e acesso à plataforma de simulação, não constituindo depósito nem garantia de lucros.'] },
      { heading: 'Desempenho hipotético', body: ['Resultados em ambiente simulado possuem limitações intrínsecas e não refletem o mercado real. Resultados passados não garantem retornos futuros.'] },
      { heading: 'Ausência de consultoria financeira', body: ['A ERACEX não é corretora nem consultora de investimentos, não custodia recursos de terceiros e não fornece recomendações de compra/venda.'] },
      { heading: 'Restrições jurisdicionais', body: ['Nossos serviços não se destinam a residentes em locais onde sua utilização viole leis locais vigentes. O cumprimento legal é de sua responsabilidade.'] },
    ],
  },
  fr: {
    title: 'Avertissement sur les Comptes Financés',
    subtitle: 'Veuillez lire attentivement avant d\'acheter un challenge ou de recevoir un compte.',
    sections: [
      { heading: 'Comptes simulés', body: ['Tous les comptes challenges et financés ERACEX sont des comptes de démonstration simulés. Le capital affiché est virtuel et ne constitue pas un dépôt.'] },
      { heading: 'Nature des frais', body: ['Les frais couvrent exclusivement l\'évaluation des compétences, la formation et l\'accès aux outils simulés, sans garantie de gains ni de compte réel.'] },
      { heading: 'Performances hypothétiques', body: ['Les performances simulées comportent des limites inhérentes et ne sauraient garantir les résultats futurs.'] },
      { heading: 'Absence de conseil en investissement', body: ['ERACEX n\'est ni un courtier ni un conseiller financier, ne collecte aucun dépôt public et ne formule aucun conseil d\'achat/vente.'] },
      { heading: 'Restrictions géographiques', body: ['Les services ne s\'adressent pas aux personnes résidant dans des juridictions où leur usage est proscrit. Le respect des lois locales vous incombe.'] },
    ],
  },
  de: {
    title: 'Haftungsausschluss für Funded Accounts',
    subtitle: 'Bitte vor dem Erwerb einer Challenge oder Annahme eines Kontos sorgfältig lesen.',
    sections: [
      { heading: 'Simulierte Handelskonten', body: ['Alle ERACEX-Konten sind rein simulierte Demokonten. Das angezeigte Kapital ist simuliert und stellt keine Kundeneinlage dar.'] },
      { heading: 'Charakter der Teilnahmegebühr', body: ['Gebühren dienen ausschließlich der Leistungsüberprüfung, Ausbildung und Plattformnutzung. Sie sind kein Handelskapital und garantieren kein Einkommen.'] },
      { heading: 'Hypothetische Wertentwicklung', body: ['Ergebnisse auf Demokonten spiegeln nicht zwingend den realen Handel wider. Vergangene Resultate sind keine Garantie für künftige Gewinne.'] },
      { heading: 'Keine Anlageberatung', body: ['ERACEX ist kein Broker und keine Bank, nimmt keine Kundeneinlagen an und gibt keine Handelsempfehlungen. Alle Trades erfolgen auf eigenes Risiko.'] },
      { heading: 'Rechtliche Einschränkungen', body: ['Dienste richten sich nicht an Personen in Ländern, in denen diese Nutzung unzulässig ist. Die Einhaltung lokaler Gesetze obliegt dem Nutzer.'] },
    ],
  },
  ru: {
    title: 'Уведомление о Рисках Финансируемых Счетов',
    subtitle: 'Пожалуйста, внимательно ознакомьтесь перед покупкой челленджа или активацией счета.',
    sections: [
      { heading: 'Симулированный характер счетов', body: ['Все счета ERACEX являются учебными симуляциями (демо). Отображаемый баланс виртуален и не является клиентским депозитом.'] },
      { heading: 'Правовая природа оплаты', body: ['Вступительный взнос оплачивает доступ к тестированию, образовательным материалам и программному комплексу, не гарантируя доход.'] },
      { heading: 'Гипотетическая доходность', body: ['Результаты на демо-счетах имеют естественные ограничения. Прошлые результаты не гарантируют аналогичных показателей в будущем.'] },
      { heading: 'Не является финансовой рекомендацией', body: ['ERACEX не выступает брокером, не привлекает вклады и не дает инвестиционных советов. Торговые решения вы принимаете самостоятельно.'] },
      { heading: 'Территориальные ограничения', body: ['Сервис не предназначен для лиц в юрисдикциях, где подобная деятельность запрещена законом. Ответственность лежит на пользователе.'] },
    ],
  },
  it: {
    title: 'Disclaimer sui Conti Finanziati',
    subtitle: 'Leggere attentamente prima di acquistare una challenge o attivare un conto.',
    sections: [
      { heading: 'Natura simulata dei conti', body: ['Tutti i conti ERACEX sono rigorosamente simulati (demo). I fondi visualizzati sono virtuali e non costituiscono depositi bancari dei clienti.'] },
      { heading: 'Natura delle quote di acquisto', body: ['Le tariffe coprono unicamente la valutazione, la formazione e l\'accesso ai server di simulazione, senza garantire alcun guadagno futuro.'] },
      { heading: 'Performance ipotetiche', body: ['I risultati su conti simulati presentano limiti intrinseci e non replicano il mercato reale. I rendimenti passati non garantiscono risultati futuri.'] },
      { heading: 'Nessuna consulenza finanziaria', body: ['ERACEX non è un broker né un consulente autorizzato, non raccoglie risparmio e non fornisce consigli operativi. Operi sotto la tua responsabilità.'] },
      { heading: 'Limiti di giurisdizione', body: ['I servizi non sono destinati a giurisdizioni in cui il loro impiego violi le norme vigenti. L\'utente deve rispettare le leggi locali.'] },
    ],
  },
  ar: {
    title: 'إخلاء المسؤولية عن الحسابات الممولة',
    subtitle: 'يرجى القراءة بعناية فائقة قبل شراء أي تحدٍ أو استلام حساب ممول.',
    sections: [
      { heading: 'طبيعة الحسابات المحاكاة', body: ['جميع حسابات التحدي والتمويل لدى ERACEX هي حسابات محاكاة (تجريبية). رأس المال المعروض افتراضي ولا يمثل ودائع عملاء حقيقية.'] },
      { heading: 'طبيعة رسوم الاشتراك', body: ['رسوم التقييم مخصصة للمشاركة التعليمية واختبار الكفاءة والوصول إلى برمجيات التداول المحاكى، ولا تضمن الحصول على أي دخل مالي.'] },
      { heading: 'الأداء الافتراضي والنتائج السابقة', body: ['للأداء في بيئة المحاكاة قيود متأصلة ولا يعكس التداول الحقيقي المباشر. النتائج السابقة لا تضمن تحقيق أرباح مستقبلية.'] },
      { heading: 'ليست استشارات استثمارية', body: ['ERACEX ليست وسيطاً مالياً أو مستشاراً معتمداً، ولا تقبل إيداعات نقدية ولا تقدم توصيات تداول. تقع مسؤولية القرارات عليك بالكامل.'] },
      { heading: 'القيود الجغرافية والقانونية', body: ['الخدمات غير موجهة لأفراد يقيمون في دول تحظر قوانينها مثل هذا النشاط. يتحمل المستخدم مسؤولية الالتزام بقوانين بلده.'] },
    ],
  },
  tr: {
    title: 'Fonlu Hesap Yasal Uyarı Metni',
    subtitle: 'Bir sınava kaydolmadan veya fonlu hesap almadan önce lütfen dikkatlice okuyunuz.',
    sections: [
      { heading: 'Simüle Hesap Niteliği', body: ['Tüm ERACEX sınav ve fonlu hesapları simülasyon (demo) ortamındadır. Görüntülenen bakiye sanal olup müşteri mevduatı değildir.'] },
      { heading: 'Katılım Ücretinin Niteliği', body: ['Kayıt ücretleri yalnızca yetenek değerlendirmesi, eğitim ve yazılım erişimi içindir; yatırım sermayesi veya kâr garantisi değildir.'] },
      { heading: 'Varsayımsal Performans', body: ['Demo hesaplardaki başarılar gerçek piyasa koşullarını birebir yansıtmayabilir. Geçmiş performans gelecekteki sonuçların teminatı olamaz.'] },
      { heading: 'Yatırım Tavsiyesi Değildir', body: ['ERACEX aracı kurum veya yatırım danışmanı değildir; mevduat toplamaz ve işlem tavsiyesi vermez. Tüm sorumluluk yatırımcıya aittir.'] },
      { heading: 'Yasal Yetki Alanı Sınırları', body: ['Hizmetlerimiz, yerel mevzuatın bu tür işlemleri yasakladığı bölgelerde geçerli değildir. Yerel yasalara uyum kullanıcının sorumluluğundadır.'] },
    ],
  },
  th: {
    title: 'ข้อจำกัดความรับผิดชอบเกี่ยวกับพอร์ตทุน',
    subtitle: 'โปรดอ่านอย่างละเอียดก่อนซื้อแพ็กเกจการสอบหรือรับพอร์ตทุน',
    sections: [
      { heading: 'ลักษณะพอร์ตจำลอง', body: ['บัญชีทดสอบและบัญชีรับทุนทั้งหมดของ ERACEX เป็นบัญชีจำลอง (เดโม) ทุนที่แสดงเป็นเงินจำลอง ไม่ใช่เงินฝากของลูกค้า'] },
      { heading: 'ลักษณะของค่าธรรมเนียม', body: ['ค่าธรรมเนียมมีไว้สำหรับการทดสอบประเมินผล การเรียนรู้ และการเข้าถึงแพลตฟอร์ม ไม่ใช่เงินลงทุนและไม่ได้รับประกันรายได้'] },
      { heading: 'ผลการดำเนินงานสมมติ', body: ['ผลการเทรดในบัญชีจำลองมีข้อจำกัดและไม่ได้สะท้อนการเทรดในตลาดจริง ผลงานในอดีตไม่สามารถการันตีผลลัพธ์ในอนาคตได้'] },
      { heading: 'ไม่ใช่คำแนะนำการลงทุน', body: ['ERACEX ไม่ใช่โบรกเกอร์หรือที่ปรึกษาทางการเงิน ไม่รับฝากเงิน และไม่ให้คำแนะนำในการเทรด การตัดสินใจทั้งหมดเป็นความรับผิดชอบของคุณ'] },
      { heading: 'ข้อจำกัดทางกฎหมายในแต่ละประเทศ', body: ['บริการนี้ไม่ได้มีไว้สำหรับบุคคลในพื้นที่ที่กฎหมายท้องถิ่นไม่อนุญาต ผู้ใช้งานมีหน้าที่ต้องปฏิบัติตามกฎหมายในประเทศที่พำนัก'] },
    ],
  },
  id: {
    title: 'Pernyataan Penyangkalan Akun Funded',
    subtitle: 'Harap baca dengan saksama sebelum membeli evaluasi atau menerima akun funded.',
    sections: [
      { heading: 'Sifat Akun Simulasi', body: ['Semua akun evaluasi dan akun funded ERACEX adalah akun simulasi (demo). Modal yang ditampilkan bersifat virtual dan bukan simpanan nasabah.'] },
      { heading: 'Sifat Biaya Pendaftaran', body: ['Biaya yang dibayarkan murni untuk evaluasi keahlian, materi edukasi, dan akses platform simulasi, bukan modal investasi atau jaminan keuntungan.'] },
      { heading: 'Kinerja Hipotesis', body: ['Hasil pada akun simulasi memiliki keterbatasan bawaan dan tidak mencerminkan eksekusi riil. Kinerja masa lalu bukan jaminan masa depan.'] },
      { heading: 'Bukan Nasihat Keuangan', body: ['ERACEX bukan broker atau penasihat investasi, tidak menghimpun dana pihak ketiga, dan tidak memberi rekomendasi beli/jual posisi.'] },
      { heading: 'Batasan Yurisdiksi', body: ['Layanan kami tidak ditujukan bagi individu di wilayah hukum yang melarang kegiatan ini. Pengguna wajib mematuhi hukum setempat.'] },
    ],
  },
  hi: {
    title: 'फंडेड खाता अस्वीकरण और जोखिम प्रकटीकरण',
    subtitle: 'मूल्यांकन खरीदने या फंडेड खाता प्राप्त करने से पहले कृपया ध्यानपूर्वक पढ़ें।',
    sections: [
      { heading: 'सिमुलेटेड खातों की प्रकृति', body: ['ERACEX के सभी चैलेंज और फंडेड खाते सिमुलेटेड (डेमो) खाते हैं। प्रदर्शित पूंजी आभासी है और ग्राहक जमा नहीं है।'] },
      { heading: 'पंजीकरण शुल्क की प्रकृति', body: ['शुल्क केवल कौशल मूल्यांकन, शैक्षिक संसाधनों और सिमुलेशन प्लेटफॉर्म तक पहुंच के लिए है, यह कोई निवेश या आय की गारंटी नहीं है।'] },
      { heading: 'काल्पनिक प्रदर्शन सीमाएं', body: ['डेमो खातों पर प्रदर्शन की अपनी सीमाएं होती हैं। पिछला प्रदर्शन भविष्य के परिणामों की गारंटी नहीं देता है।'] },
      { heading: 'कोई वित्तीय सलाह नहीं', body: ['ERACEX कोई ब्रोकर या वित्तीय सलाहकार नहीं है, यह सार्वजनिक जमा स्वीकार नहीं करता है और कोई ट्रेडिंग सिफारिश नहीं देता है।'] },
      { heading: 'क्षेत्राधिकार सीमाएं', body: ['सेवाएं उन देशों के व्यक्तियों के लिए अभिप्रेत नहीं हैं जहां यह कानून का उल्लंघन करती हैं। स्थानीय कानून का अनुपालन उपयोगकर्ता का दायित्व है।'] },
    ],
  },
  pl: {
    title: 'Zastrzeżenie Prawne Dotyczące Kont Funded',
    subtitle: 'Prosimy o uważne zapoznanie się przed zakupem wyzwania lub odbiorem konta.',
    sections: [
      { heading: 'Symulacyjny charakter kont', body: ['Wszystkie konta ERACEX są kontami demonstracyjnymi (demo). Wyświetlane saldo jest wirtualne i nie stanowi depozytu klienta.'] },
      { heading: 'Charakter opłaty wstępnej', body: ['Opłata pokrywa koszty weryfikacji umiejętności, materiały szkoleniowe i dostęp do infrastruktury, nie stanowiąc kapitału inwestycyjnego ani gwarancji zysków.'] },
      { heading: 'Hipotetyczne wyniki', body: ['Wyniki na kontach demonstracyjnych posiadają ograniczenia i nie odzwierciedlają w pełni realnego rynku. Wyniki historyczne nie gwarantują przyszłych.'] },
      { heading: 'Brak doradztwa inwestycyjnego', body: ['ERACEX nie jest brokerem ani doradcą finansowym, nie przyjmuje depozytów i nie wydaje rekomendacji giełdowych. Działasz na własne ryzyko.'] },
      { heading: 'Ograniczenia jurysdykcyjne', body: ['Usługi nie są przeznaczone dla osób w jurysdykcjach zakazujących tego rodzaju działalności. Użytkownik odpowiada za zgodność z lokalnym prawem.'] },
    ],
  },
  nl: {
    title: 'Disclaimer Gefinancierde Handelsrekeningen',
    subtitle: 'Lees dit zorgvuldig door alvorens een challenge aan te schaffen of een account te accepteren.',
    sections: [
      { heading: 'Aard van gesimuleerde rekeningen', body: ['Alle ERACEX-rekeningen zijn strikt gesimuleerde (demo) rekeningen. Het getoonde kapitaal is virtueel en geen klantdeposito.'] },
      { heading: 'Karakter van de deelnamekosten', body: ['De kosten dekken uitsluitend de vaardigheidstest, educatie en platformtoegang. Dit is geen beleggingskapitaal en biedt geen inkomensgarantie.'] },
      { heading: 'Hypothetische resultaten', body: ['Simulatieresultaten kennen beperkingen en weerspiegelen niet direct echte marktorders. Resultaten uit het verleden bieden geen garantie.'] },
      { heading: 'Geen beleggingsadvies', body: ['ERACEX is geen broker of financieel adviseur, accepteert geen deposito\'s en verstrekt geen koop- of verkoopadviezen. U handelt zelfstandig.'] },
      { heading: 'Jurisdictiebeperkingen', body: ['Diensten zijn niet bedoeld voor inwoners van landen waar dergelijke diensten wettelijk verboden zijn. Naleving van lokale wetgeving is uw verantwoordelijkheid.'] },
    ],
  },
  fil: {
    title: 'Pagtanggi sa Pananagutan para sa Funded Account',
    subtitle: 'Mangyaring basahin nang mabuti bago bumili ng hamon o tumanggap ng funded account.',
    sections: [
      { heading: 'Simulated na katangian ng account', body: ['Lahat ng account sa ERACEX ay mga simulated (demo) account. Ang ipinapakitang kapital ay virtual at hindi deposito ng kostumer.'] },
      { heading: 'Katangian ng bayad sa pagsusulit', body: ['Ang binabayarang halaga ay para lamang sa pagsusuri ng galing, edukasyon, at paggamit ng platform, hindi puhunan o garantiya ng kita.'] },
      { heading: 'Hipotetikal na pagganap', body: ['Ang mga resulta sa demo account ay may mga limitasyon at hindi sumasalamin sa totoong merkado. Ang nakaraang resulta ay hindi garantiya ng hinaharap.'] },
      { heading: 'Hindi payo sa pamumuhunan', body: ['Ang ERACEX ay hindi broker o financial advisor, hindi tumatanggap ng deposito, at hindi nagbibigay ng rekomendasyon sa pag-trade.'] },
      { heading: 'Mga limitasyon sa hurisdiksyon', body: ['Ang serbisyo ay hindi para sa mga taong nasa lugar kung saan ipinagbabawal ito ng batas. Responsibilidad mo ang pagsunod sa iyong lokal na batas.'] },
    ],
  },
};

export default function FundedAccountDisclaimerPage() {
  return <PolicyPage dict={DISCLAIMER_DICT} />;
}
