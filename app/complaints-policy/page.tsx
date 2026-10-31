import { Metadata } from 'next';
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
      { heading: 'Champ d\'application', body: ['Cette politique concerne les réclamations liées aux évaluations, comptes financés, paiements, retraits ou services ERACEX.'] },
      { heading: 'Soumettre une réclamation', body: ['Contactez support@eracex.com ou via la page Contact avec votre e-mail de compte, identifiant, description détaillée et justificatifs.'] },
      { heading: 'Délais de traitement', body: ['Accusé de réception sous 2 jours ouvrés et résolution sous 14 jours ouvrés. Les dossiers complexes feront l\'objet d\'un avis de prolongation.'] },
      { heading: 'Recours hiérarchique', body: ['En cas d\'insatisfaction, demandez un réexamen auprès de la direction générale. La décision finale sera communiquée par écrit.'] },
      { heading: 'Confidentialité', body: ['Les informations transmises sont strictement protégées conformément à la Politique de Confidentialité d\'ERACEX.'] },
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
      { heading: 'Riservatezza', body: ['Tutte le informazioni sono trattate con la massima riservatezza secondo l\'Informativa sulla Privacy ERACEX.'] },
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
