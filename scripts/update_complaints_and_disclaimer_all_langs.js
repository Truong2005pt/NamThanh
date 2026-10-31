const fs = require('fs');

const complaintsPath = 'app/complaints-policy/page.tsx';
const disclaimerPath = 'app/funded-account-disclaimer/page.tsx';

// 1. Update complaints-policy/page.tsx
const complaintsCode = `import { Metadata } from 'next';
import { PolicyPage, PolicyContent } from '@/components/eracex/PolicyPage';

export const metadata: Metadata = {
  title: 'Complaints Policy — Chính Sách Khiếu Nại | ERACEX',
  description: 'Quy trình tiếp nhận, xử lý và phản hồi khiếu nại của trader tại ERACEX.',
};

const COMPLAINTS_DICT: Record<string, PolicyContent> = {
  vi: {
    title: 'Chính Sách Khiếu Nại',
    subtitle: 'ERACEX cam kết tiếp nhận và xử lý mọi khiếu nại một cách công bằng, minh bạch và kịp thời.',
    sections: [
      { heading: 'Phạm vi áp dụng', body: ['Chính sách này áp dụng cho mọi khiếu nại liên quan đến thử thách, tài khoản cấp vốn, thanh toán, chi trả lợi nhuận hoặc chất lượng dịch vụ của ERACEX.'] },
      { heading: 'Cách gửi khiếu nại', body: ['Gửi email tới support@eracex.com hoặc dùng trang Liên hệ. Vui lòng nêu rõ email đăng ký, mã tài khoản, mô tả sự việc và các bằng chứng liên quan (ảnh chụp, mã giao dịch).'] },
      { heading: 'Thời gian xử lý', body: ['ERACEX xác nhận đã nhận khiếu nại trong vòng 2 ngày làm việc và phản hồi kết quả trong vòng 14 ngày làm việc. Với trường hợp phức tạp, chúng tôi sẽ thông báo gia hạn kèm lý do.'] },
      { heading: 'Cấp xử lý cao hơn', body: ['Nếu chưa hài lòng với phản hồi đầu tiên, bạn có thể yêu cầu chuyển khiếu nại lên bộ phận quản lý để xem xét lại. Kết quả xem xét lại sẽ được gửi bằng văn bản.'] },
      { heading: 'Bảo mật thông tin', body: ['Thông tin trong khiếu nại chỉ được dùng để xử lý khiếu nại và tuân theo Chính sách Bảo mật của ERACEX.'] },
    ],
  },
  en: {
    title: 'Complaints Policy',
    subtitle: 'ERACEX handles every complaint fairly, transparently and promptly.',
    sections: [
      { heading: 'Scope', body: ['This policy covers any complaint about challenges, funded accounts, payments, reward payouts or the quality of ERACEX services.'] },
      { heading: 'How to submit a complaint', body: ['Email support@eracex.com or use the Contact page. Include your registered email, account ID, a description of the issue and supporting evidence (screenshots, transaction IDs).'] },
      { heading: 'Response times', body: ['We acknowledge your complaint within 2 business days and send a resolution within 14 business days. For complex cases we will notify you of any extension and the reason.'] },
      { heading: 'Escalation', body: ['If you are not satisfied with the first response, you may ask for escalation to management for review. The outcome of the review is sent to you in writing.'] },
      { heading: 'Confidentiality', body: ['Complaint information is used only to resolve the complaint and is handled under the ERACEX Privacy Policy.'] },
    ],
  },
  zh: {
    title: '投诉与纠纷处理政策',
    subtitle: 'ERACEX 承诺以公平、透明与及时的原则处理每一位交易员的合理诉求。',
    sections: [
      { heading: '适用范围', body: ['本政策涵盖与考核挑战、资助实盘账户、订单支付、利润结算出金或平台技术服务相关的各项争议。'] },
      { heading: '如何提交投诉', body: ['发送邮件至 support@eracex.com 或使用联系客服页面。请注明注册邮箱、账户ID、详细问题描述及相关凭据（交易截图、订单编号等）。'] },
      { heading: '响应与处理时效', body: ['我们在2个工作日内确认受理，并在14个工作日内出具正式解决方案。复杂案件将另行通知延期原因。'] },
      { heading: '申诉与管理层复核', body: ['若对初步处理结论有异议，您可申请提交至高级管理层复核，复核结论将以正式书面形式送达。'] },
      { heading: '信息隐私保护', body: ['投诉过程中涉及的所有个人与交易信息均受 ERACEX 隐私政策严格保护，仅用于解决纠纷。'] },
    ],
  },
  ja: {
    title: '苦情対応ポリシー',
    subtitle: 'ERACEX は、すべてのトレーダーからの申し立てに対して公正、透明かつ迅速に対応します。',
    sections: [
      { heading: '適用範囲', body: ['チャレンジ評価、資金提供口座、決済手続き、利益出金、およびサービス品質に関するすべての苦情に適用されます。'] },
      { heading: '苦情の申し立て方法', body: ['support@eracex.com へのメール送信、または「お問い合わせ」ページをご利用ください。登録メール、口座ID、詳細、証拠（スクリーンショット等）を明記してください。'] },
      { heading: '対応期間', body: ['2営業日以内に受領確認を行い、14営業日以内に解決策をご案内します。複雑な事案の場合は理由と延長期間を通知します。'] },
      { heading: 'エスカレーション（再審理）', body: ['最初の回答に同意できない場合、管理部門への再審査申し立てが可能です。再審査結果は書面にて送付されます。'] },
      { heading: '機密保持', body: ['申し立てに含まれる個人情報は問題解決の目的にのみ使用され、プライバシーポリシーに従って保護されます。'] },
    ],
  },
  ko: {
    title: '고객 불만 처리 및 분쟁 정책',
    subtitle: 'ERACEX는 모든 트레이더의 고충을 공정하고 투명하며 신속하게 처리할 것을 약속드립니다.',
    sections: [
      { heading: '적용 범위', body: ['평가 챌린지, 펀딩 계정, 결제, 수익금 출금 및 서비스 품질과 관련된 모든 불만 및 이의 제기에 적용됩니다.'] },
      { heading: '불만 접수 방법', body: ['support@eracex.com 이메일 또는 고객지원 페이지를 통해 접수하십시오. 등록 이메일, 계정 번호, 상세 내용 및 증빙 자료(스크린샷 등)를 첨부해 주십시오.'] },
      { heading: '처리 소요 기간', body: ['영업일 기준 2일 이내에 접수 확인을 완료하고 14일 이내에 최종 조치 결과를 전달합니다. 복잡한 사안의 경우 사전 안내를 드립니다.'] },
      { heading: '상위 부서 재심 청구', body: ['초기 답변에 만족하지 못하실 경우 경영 관리팀에 재심사를 요청하실 수 있으며 서면으로 결과가 통보됩니다.'] },
      { heading: '개인정보 보호', body: ['접수된 모든 정보는 분쟁 해결을 위한 목적으로만 사용되며 개인정보 처리방침에 따라 엄격히 보호됩니다.'] },
    ],
  },
  es: {
    title: 'Política de Reclamaciones',
    subtitle: 'ERACEX gestiona cada queja de manera justa, transparente y oportuna.',
    sections: [
      { heading: 'Ámbito de aplicación', body: ['Esta política cubre cualquier reclamación sobre desafíos, cuentas financiadas, pagos, retiros o la calidad del servicio de ERACEX.'] },
      { heading: 'Cómo presentar una queja', body: ['Envía un correo a support@eracex.com o usa la página de Contacto con tu correo registrado, ID de cuenta, descripción y pruebas (capturas, IDs).'] },
      { heading: 'Plazos de respuesta', body: ['Acusamos recibo en 2 días hábiles y emitimos una resolución en 14 días hábiles. En casos complejos, notificaremos la prórroga y su motivo.'] },
      { heading: 'Escalamiento', body: ['Si no estás conforme con la primera respuesta, puedes solicitar elevar el caso a la dirección para su revisión formal por escrito.'] },
      { heading: 'Confidencialidad', body: ['La información facilitada se tratará con estricta confidencialidad bajo la Política de Privacidad de ERACEX.'] },
    ],
  },
  pt: {
    title: 'Política de Reclamações',
    subtitle: 'A ERACEX trata cada manifestação com imparcialidade, clareza e agilidade.',
    sections: [
      { heading: 'Abrangência', body: ['Esta política aplica-se a reclamações sobre desafios, contas financiadas, pagamentos, saques ou qualidade dos serviços da ERACEX.'] },
      { heading: 'Como enviar uma reclamação', body: ['Envie um e-mail para support@eracex.com ou use a página de Contato, informando e-mail de cadastro, ID da conta, relato e comprovantes.'] },
      { heading: 'Prazos de atendimento', body: ['Confirmamos o recebimento em até 2 dias úteis e apresentamos uma solução em até 14 dias úteis. Casos complexos terão prorrogação informada.'] },
      { heading: 'Recurso à gestão', body: ['Caso a resposta inicial não seja satisfatória, é possível solicitar revisão à diretoria, com resposta formal por escrito.'] },
      { heading: 'Sigilo de dados', body: ['Todas as informações fornecidas serão resguardadas nos termos da Política de Privacidade da ERACEX.'] },
    ],
  },
  fr: {
    title: 'Politique de Traitement des Réclamations',
    subtitle: 'ERACEX traite chaque réclamation avec équité, transparence et diligence.',
    sections: [
      { heading: 'Champ d\\'application', body: ['Cette politique concerne les réclamations liées aux évaluations, comptes financés, paiements, retraits ou services ERACEX.'] },
      { heading: 'Soumettre une réclamation', body: ['Contactez support@eracex.com ou via la page Contact avec votre e-mail de compte, identifiant, description détaillée et justificatifs.'] },
      { heading: 'Délais de traitement', body: ['Accusé de réception sous 2 jours ouvrés et résolution sous 14 jours ouvrés. Les dossiers complexes feront l\\'objet d\\'un avis de prolongation.'] },
      { heading: 'Recours hiérarchique', body: ['En cas d\\'insatisfaction, demandez un réexamen auprès de la direction générale. La décision finale sera communiquée par écrit.'] },
      { heading: 'Confidentialité', body: ['Les informations transmises sont strictement protégées conformément à la Politique de Confidentialité d\\'ERACEX.'] },
    ],
  },
  de: {
    title: 'Beschwerderichtlinie',
    subtitle: 'ERACEX bearbeitet jede Beschwerde fair, transparent und unverzüglich.',
    sections: [
      { heading: 'Geltungsbereich', body: ['Gilt für alle Anliegen bezüglich Challenges, Funded-Konten, Zahlungen, Gewinnauszahlungen oder Servicequalität von ERACEX.'] },
      { heading: 'Einreichung einer Beschwerde', body: ['Senden Sie eine E-Mail an support@eracex.com oder nutzen Sie das Kontaktformular mit Ihrer registrierten E-Mail, Konto-ID und Nachweisen.'] },
      { heading: 'Bearbeitungsfristen', body: ['Eingangsbestätigung innerhalb von 2 Werktagen, schriftliche Lösung innerhalb von 14 Werktagen. Bei komplexen Fällen erfolgt Zwischennachricht.'] },
      { heading: 'Eskalation an das Management', body: ['Bei Unzufriedenheit mit der Erstentscheidung können Sie eine Überprüfung durch die Geschäftsleitung anfordern.'] },
      { heading: 'Vertraulichkeit', body: ['Alle Daten werden streng vertraulich gemäß den ERACEX-Datenschutzrichtlinien behandelt.'] },
    ],
  },
  ru: {
    title: 'Политика Рассмотрения Претензий',
    subtitle: 'ERACEX обязуется оперативно, справедливо и открыто разрешать любые обращения пользователей.',
    sections: [
      { heading: 'Область применения', body: ['Политика распространяется на споры по оценке, финансируемым счетам, платежам, выводу средств и качеству работы сервиса.'] },
      { heading: 'Подача претензии', body: ['Направьте письмо на support@eracex.com или через страницу контактов, указав email, ID счета, подробное описание и подтверждающие скриншоты.'] },
      { heading: 'Сроки рассмотрения', body: ['Подтверждение приема в течение 2 рабочих дней, мотивированное решение — в течение 14 рабочих дней.'] },
      { heading: 'Эскалация руководству', body: ['Если ответ службы поддержки вас не удовлетворил, вы можете запросить повторное рассмотрение руководством компании.'] },
      { heading: 'Конфиденциальность', body: ['Все предоставленные сведения строго защищены в соответствии с Политикой конфиденциальности ERACEX.'] },
    ],
  },
  it: {
    title: 'Politica di Gestione dei Reclami',
    subtitle: 'ERACEX gestisce ogni reclamo in modo equo, trasparente e tempestivo.',
    sections: [
      { heading: 'Ambito di applicazione', body: ['Si applica a contestazioni relative a valutazioni, conti finanziati, pagamenti, prelievi o qualità dei servizi ERACEX.'] },
      { heading: 'Come inoltrare un reclamo', body: ['Scrivi a support@eracex.com o usa la pagina Contatti indicando email di registrazione, ID conto, descrizione e prove a supporto.'] },
      { heading: 'Tempi di risposta', body: ['Conferma di ricezione entro 2 giorni lavorativi e soluzione entro 14 giorni lavorativi.'] },
      { heading: 'Revisione superiore', body: ['Se insoddisfatto della risposta, puoi richiedere la revisione al management per un riesame formale scritto.'] },
      { heading: 'Riservatezza', body: ['Tutte le informazioni sono trattate con la massima riservatezza secondo l\\'Informativa sulla Privacy ERACEX.'] },
    ],
  },
  ar: {
    title: 'سياسة معالجة الشكاوى والنزاعات',
    subtitle: 'تلتزم ERACEX بالتعامل مع جميع الشكاوى بنزاهة وشفافية وسرعة كاملة.',
    sections: [
      { heading: 'نطاق السياسة', body: ['تغطي هذه السياسة أي نزاع متعلق بالتحديات، الحسابات الممولة، المدفوعات، سحب الأرباح أو جودة خدمات المنصة.'] },
      { heading: 'كيفية تقديم الشكوى', body: ['أرسل بريداً إلكترونياً إلى support@eracex.com أو استخدم صفحة الاتصال موضحاً البريد المسجل ورقم الحساب والأدلة الداعمة.'] },
      { heading: 'المدد الزمنية للرد', body: ['نؤكد استلام الشكوى خلال يومي عمل، ونقدم حلاً نهائياً خلال 14 يوم عمل.'] },
      { heading: 'التصعيد للإدارة العليا', body: ['في حال عدم الرضا عن الرد الأولي، يمكنك طلب تصعيد الشكوى لمراجعتها من قبل الإدارة التنفيذية.'] },
      { heading: 'السرية والخصوصية', body: ['تُعامل جميع البيانات بسرية تامة وتخضع لسياسة الخصوصية الرسمية لـ ERACEX.'] },
    ],
  },
  tr: {
    title: 'Şikayet ve Uyuşmazlık Çözüm Politikası',
    subtitle: 'ERACEX, tüm şikayetleri adil, şeffaf ve hızlı bir şekilde çözüme kavuşturmayı taahhüt eder.',
    sections: [
      { heading: 'Kapsam', body: ['Değerlendirme sınavları, fonlu hesaplar, ödemeler, kâr çekimleri ve hizmet kalitesiyle ilgili tüm başvuruları kapsar.'] },
      { heading: 'Şikayet Başvurusu', body: ['support@eracex.com adresine e-posta gönderin veya İletişim sayfasını kullanın. Kayıtlı e-posta, hesap no ve kanıtları ekleyin.'] },
      { heading: 'Yanıt Süreleri', body: ['Başvurunuz 2 iş günü içinde teyit edilir ve 14 iş günü içinde resmi çözüme bağlanır.'] },
      { heading: 'Üst Yönetime İtiraz', body: ['İlk yanıttan memnun kalmazsanız, dosyanızın üst yönetim tarafından yeniden incelenmesini talep edebilirsiniz.'] },
      { heading: 'Gizlilik', body: ['Verilen tüm bilgiler ERACEX Gizlilik Politikası uyarınca tam gizlilik içinde işlenir.'] },
    ],
  },
  th: {
    title: 'นโยบายการจัดการข้อร้องเรียน',
    subtitle: 'ERACEX มุ่งมั่นที่จะรับฟังและแก้ไขทุกข้อร้องเรียนอย่างเป็นธรรม โปร่งใส และรวดเร็ว',
    sections: [
      { heading: 'ขอบเขตการบังคับใช้', body: ['ครอบคลุมข้อร้องเรียนเกี่ยวกับการสอบพอร์ต, บัญชีที่ได้รับทุน, การชำระเงิน, การถอนกำไร และคุณภาพการบริการ'] },
      { heading: 'วิธียื่นเรื่องร้องเรียน', body: ['ส่งอีเมลมาที่ support@eracex.com หรือใช้หน้าติดต่อเรา ระบุอีเมลบัญชี, รหัสบัญชี, รายละเอียด และหลักฐานแนบ'] },
      { heading: 'ระยะเวลาดำเนินการ', body: ['เราจะยืนยันการรับเรื่องภายใน 2 วันทำการ และแจ้งผลการแก้ปัญหาอย่างเป็นทางการภายใน 14 วันทำการ'] },
      { heading: 'การอุทธรณ์ต่อฝ่ายบริหาร', body: ['หากไม่พอใจคำตอบแรก คุณสามารถขอยื่นเรื่องต่อฝ่ายบริหารเพื่อพิจารณาทบทวนใหม่เป็นลายลักษณ์อักษร'] },
      { heading: 'การรักษาความลับ', body: ['ข้อมูลทั้งหมดจะถูกเก็บเป็นความลับอย่างเคร่งครัดตามนโยบายความเป็นส่วนตัวของ ERACEX'] },
    ],
  },
  id: {
    title: 'Kebijakan Penanganan Keluhan',
    subtitle: 'ERACEX berkomitmen menangani setiap keluhan secara adil, transparan, dan cepat.',
    sections: [
      { heading: 'Ruang Lingkup', body: ['Mencakup keluhan seputar tantangan evaluasi, akun funded, pembayaran, penarikan bagi hasil, atau layanan ERACEX.'] },
      { heading: 'Cara Mengajukan Keluhan', body: ['Kirim email ke support@eracex.com atau gunakan halaman Kontak. Sertakan email terdaftar, nomor akun, kronologi, dan bukti pendukung.'] },
      { heading: 'Waktu Penyelesaian', body: ['Kami mengonfirmasi penerimaan dalam 2 hari kerja dan memberikan solusi tertulis dalam 14 hari kerja.'] },
      { heading: 'Eskalasi ke Manajemen', body: ['Jika belum puas dengan tanggapan awal, Anda dapat mengajukan permohonan peninjauan ulang ke tingkat manajemen.'] },
      { heading: 'Kerahasiaan Data', body: ['Informasi pengaduan diperlakukan secara rahasia dan tunduk pada Kebijakan Privasi ERACEX.'] },
    ],
  },
  hi: {
    title: 'शिकायत निवारण नीति',
    subtitle: 'ERACEX हर शिकायत का निष्पक्ष, पारदर्शी और त्वरित समाधान करने के लिए प्रतिबद्ध है।',
    sections: [
      { heading: 'लागू होने का दायरा', body: ['यह नीति मूल्यांकन चुनौतियों, फंडेड खातों, भुगतानों, लाभ निकासी या सेवा गुणवत्ता से संबंधित सभी मामलों पर लागू होती है।'] },
      { heading: 'शिकायत कैसे दर्ज करें', body: ['support@eracex.com पर ईमेल भेजें या संपर्क पृष्ठ का उपयोग करें। अपना पंजीकृत ईमेल, खाता आईडी और साक्ष्य संलग्न करें।'] },
      { heading: 'समाधान समय सीमा', body: ['हम 2 कार्य दिवसों में पावती भेजते हैं और 14 कार्य दिवसों में औपचारिक समाधान प्रदान करते हैं।'] },
      { heading: 'प्रबंधन को अपील', body: ['यदि आप प्रथम समाधान से संतुष्ट नहीं हैं, तो उच्च प्रबंधन समीक्षा का अनुरोध कर सकते हैं।'] },
      { heading: 'गोपनीयता', body: ['शिकायत संबंधी सभी जानकारी ERACEX गोपनीयता नीति के तहत सुरक्षित रखी जाती है।'] },
    ],
  },
  pl: {
    title: 'Polityka Rozpatrywania Reklamacji',
    subtitle: 'ERACEX rozpatruje każdą reklamację w sposób sprawiedliwy, przejrzysty i terminowy.',
    sections: [
      { heading: 'Zakres stosowania', body: ['Obejmuje zastrzeżenia dotyczące wyzwań, kont funded, płatności, wypłat zysków oraz jakości usług ERACEX.'] },
      { heading: 'Jak złożyć reklamację', body: ['Napisz na support@eracex.com lub skorzystaj ze strony Kontakt, podając e-mail, ID konta, opis sprawy oraz załączniki dowodowe.'] },
      { heading: 'Termin rozpatrzenia', body: ['Potwierdzenie przyjęcia w ciągu 2 dni roboczych, ostateczna decyzja w ciągu 14 dni roboczych.'] },
      { heading: 'Eskalacja do zarządu', body: ['W przypadku braku satysfakcji z pierwszej odpowiedzi można złożyć wniosek o ponowne rozpatrzenie przez zarząd.'] },
      { heading: 'Poufność', body: ['Wszelkie dane podlegają ścisłej ochronie zgodnie z Polityką Prywatności ERACEX.'] },
    ],
  },
  nl: {
    title: 'Klachtenprocedure en Beleid',
    subtitle: 'ERACEX behandelt elke klacht op eerlijke, transparante en daadkrachtige wijze.',
    sections: [
      { heading: 'Reikwijdte', body: ['Van toepassing op geschillen over evaluaties, funded accounts, betalingen, winstuitkeringen en ERACEX-dienstverlening.'] },
      { heading: 'Indienen van een klacht', body: ['Mail naar support@eracex.com of gebruik het contactformulier met uw geregistreerde e-mailadres, account-ID en bewijsstukken.'] },
      { heading: 'Afhandelingstermijnen', body: ['Bevestiging binnen 2 werkdagen, formele schriftelijke uitspraak binnen 14 werkdagen.'] },
      { heading: 'Beroep bij het management', body: ['Indien u niet tevreden bent met de uitkomst, kunt u een herbeoordeling door het hogere management aanvragen.'] },
      { heading: 'Vertrouwelijkheid', body: ['Alle gegevens worden strikt vertrouwelijk behandeld onder het ERACEX Privacybeleid.'] },
    ],
  },
  fil: {
    title: 'Patakaran sa mga Reklamo',
    subtitle: 'Ipinapangako ng ERACEX na haharapin ang bawat reklamo nang patas, malinaw, at mabilis.',
    sections: [
      { heading: 'Saklaw', body: ['Sinasaklaw ang mga hinaing tungkol sa mga hamon, funded account, pagbabayad, payout ng kita, at kalidad ng serbisyo ng ERACEX.'] },
      { heading: 'Paano magsumite ng reklamo', body: ['Mag-email sa support@eracex.com o gamitin ang pahina ng Contact. Isama ang nakarehistrong email, account ID, at mga patunay.'] },
      { heading: 'Oras ng pagtugon', body: ['Kukumpirmahin namin ang pagtanggap sa loob ng 2 araw ng negosyo at magbibigay ng resolusyon sa loob ng 14 araw ng negosyo.'] },
      { heading: 'Pag-akyat sa pamunuan', body: ['Kung hindi ka nasisiyahan sa unang tugon, maaari kang humiling ng muling pagsusuri sa pamunuan.'] },
      { heading: 'Pagiging lihim', body: ['Ang impormasyon ay gagamitin lamang para lutasin ang reklamo at protektado sa ilalim ng ERACEX Privacy Policy.'] },
    ],
  },
};

export default function ComplaintsPolicyPage() {
  return <PolicyPage dict={COMPLAINTS_DICT} />;
}
`;

fs.writeFileSync(complaintsPath, complaintsCode, 'utf8');

// 2. Update funded-account-disclaimer/page.tsx
const disclaimerCode = `import { Metadata } from 'next';
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
    subtitle: 'Veuillez lire attentivement avant d\\'acheter un challenge ou de recevoir un compte.',
    sections: [
      { heading: 'Comptes simulés', body: ['Tous les comptes challenges et financés ERACEX sont des comptes de démonstration simulés. Le capital affiché est virtuel et ne constitue pas un dépôt.'] },
      { heading: 'Nature des frais', body: ['Les frais couvrent exclusivement l\\'évaluation des compétences, la formation et l\\'accès aux outils simulés, sans garantie de gains ni de compte réel.'] },
      { heading: 'Performances hypothétiques', body: ['Les performances simulées comportent des limites inhérentes et ne sauraient garantir les résultats futurs.'] },
      { heading: 'Absence de conseil en investissement', body: ['ERACEX n\\'est ni un courtier ni un conseiller financier, ne collecte aucun dépôt public et ne formule aucun conseil d\\'achat/vente.'] },
      { heading: 'Restrictions géographiques', body: ['Les services ne s\\'adressent pas aux personnes résidant dans des juridictions où leur usage est proscrit. Le respect des lois locales vous incombe.'] },
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
      { heading: 'Natura delle quote di acquisto', body: ['Le tariffe coprono unicamente la valutazione, la formazione e l\\'accesso ai server di simulazione, senza garantire alcun guadagno futuro.'] },
      { heading: 'Performance ipotetiche', body: ['I risultati su conti simulati presentano limiti intrinseci e non replicano il mercato reale. I rendimenti passati non garantiscono risultati futuri.'] },
      { heading: 'Nessuna consulenza finanziaria', body: ['ERACEX non è un broker né un consulente autorizzato, non raccoglie risparmio e non fornisce consigli operativi. Operi sotto la tua responsabilità.'] },
      { heading: 'Limiti di giurisdizione', body: ['I servizi non sono destinati a giurisdizioni in cui il loro impiego violi le norme vigenti. L\\'utente deve rispettare le leggi locali.'] },
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
      { heading: 'Geen beleggingsadvies', body: ['ERACEX is geen broker of financieel adviseur, accepteert geen deposito\\'s en verstrekt geen koop- of verkoopadviezen. U handelt zelfstandig.'] },
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
`;

fs.writeFileSync(disclaimerPath, disclaimerCode, 'utf8');

console.log('Successfully updated complaints-policy and funded-account-disclaimer with all 19 languages');
