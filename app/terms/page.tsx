'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { FileText, Shield, CheckCircle2 } from 'lucide-react';

interface TermsDictionary {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  readDoc: string;
  privacyLink: string;
  verText: string;
  bindingText: string;
  statusTag: string;
  statusVal: string;
  complianceTag: string;
  complianceVal: string;
  docTitle: string;
  lastUpdated: string;
  s1Title: string;
  s1Desc: string;
  s2Title: string;
  s2Desc: string;
  s3Title: string;
  s3Desc: string;
  s4Title: string;
  s4Desc: string;
  s5Title: string;
  s5Desc: string;
}

const DICTIONARY: Record<string, TermsDictionary> = {
  vi: {
    badge: 'KHUNG PHÁP LÝ & QUY ĐỊNH',
    titlePrefix: 'Điều Khoản Dịch Vụ & ',
    titleHighlight: 'Khung Pháp Lý',
    subtitle: 'Văn bản pháp lý quy định quyền lợi và nghĩa vụ của trader và ERACEX trong quá trình đánh giá, cấp vốn mô phỏng và phân chia lợi nhuận.',
    readDoc: 'Đọc Văn Bản Chi Tiết',
    privacyLink: 'Chính Sách Bảo Mật',
    verText: 'Phiên Bản 2.4 (2026)',
    bindingText: 'Quy Tắc Rõ Ràng',
    statusTag: 'HIỆU LỰC',
    statusVal: 'Đang Áp Dụng · Ver 2.4',
    complianceTag: 'BẢO VỆ',
    complianceVal: 'Bảo Mật Dữ Liệu',
    docTitle: 'Điều Khoản Dịch Vụ (Terms of Service)',
    lastUpdated: 'Cập nhật lần cuối: Ngày 27 tháng 10 năm 2026 · Phiên bản 2.4',
    s1Title: '1. ĐỐI TƯỢNG VÀ PHẠM VI ÁP DỤNG',
    s1Desc: 'Chào mừng bạn đến với ERACEX. Bằng việc truy cập trang web, đăng ký tài khoản hoặc mua bất kỳ gói thử thách nào của ERACEX, bạn xác nhận rằng bạn đã đọc, hiểu và đồng ý chịu sự ràng buộc của các Điều khoản này.',
    s2Title: '2. BẢN CHẤT DỊCH VỤ ĐÁNH GIÁ KỸ NĂNG MÔ PHỎNG',
    s2Desc: 'Tất cả các tài khoản do ERACEX cung cấp đều hoạt động trong môi trường giả lập (simulated environment). ERACEX không phải là công ty môi giới chứng khoán hoặc ngân hàng, không nhận tiền gửi đầu tư của khách hàng.',
    s3Title: '3. QUY ĐỊNH THI TUYỂN VÀ SỤT GIẢM VỐN (DRAWDOWN)',
    s3Desc: 'Người tham gia có nghĩa vụ tuân thủ các thông số của chương trình, bao gồm mức lỗ tối đa trong ngày và mức lỗ tối đa tổng dựa trên equity (Two-Step: 5% và 10%; One-Step: 3% và 6%; Instant: 3% và 5% trailing). Việc vi phạm bất kỳ quy tắc nào sẽ dẫn đến việc tài khoản bị ngưng hoạt động mà không được hoàn phí.',
    s4Title: '4. PHÍ CHƯƠNG TRÌNH VÀ CHIA SẺ LỢI NHUẬN',
    s4Desc: 'Phí chương trình không được hoàn lại sau khi quyền truy cập tài khoản đã được cấp. Tỷ lệ chia sẻ lợi nhuận tiêu chuẩn trên tài khoản funded là 80/20; tùy chọn trả phí có thể nâng tỷ lệ lên tối đa 90%.',
    s5Title: '5. CÁC HÀNH VI BỊ CẤM TUYỆT ĐỐI',
    s5Desc: 'Nghiêm cấm mọi hành vi gian lận độ trễ máy chủ (latency arbitrage), khai thác lỗi phần mềm, giao dịch đối ứng tài khoản trái phép hoặc thuê bên thứ ba thi hộ. Tài khoản vi phạm sẽ bị khóa vĩnh viễn và bị từ chối mọi khoản chia lợi nhuận.',
  },
  zh: {
    badge: '法律与合规框架',
    titlePrefix: '服务条款与',
    titleHighlight: '法律规范体系',
    subtitle: '规定交易者与ERACEX之间权利、运营边界和双方约定的正式法律框架。',
    readDoc: '查看条款细则',
    privacyLink: '隐私安全政策',
    verText: '版本 2.4 (2026)',
    bindingText: '规则清晰',
    statusTag: '条款状态',
    statusVal: '现行有效 · Ver 2.4',
    complianceTag: '合规保障',
    complianceVal: '数据保护',
    docTitle: '服务条款 (Terms of Service)',
    lastUpdated: '最后更新时间：2026 年 10 月 27 日 · 版本 2.4',
    s1Title: '1. 适用对象与法律范围',
    s1Desc: '欢迎访问 ERACEX。通过访问本网站、注册账户或购买 ERACEX 的任何考核包，即表示您已阅读、完全理解并同意受本条款的法律约束。',
    s2Title: '2. 模拟技能评估服务性质',
    s2Desc: 'ERACEX运营的所有账户均为模拟环境。ERACEX不是经纪商、托管机构或金融存款机构，不接受客户的投资存款。',
    s3Title: '3. 考核规则与回撤限制 (DRAWDOWN)',
    s3Desc: '参与者同意遵守计划参数，包括均基于净值的每日亏损限额和最大亏损限额（Two-Step：5%和10%；One-Step：3%和6%；Instant：3%和5%追踪式）。触及这些风险阈值将导致账户被终止且不予退款。',
    s4Title: '4. 计划费用与利润分成',
    s4Desc: '账户访问权限开通后，计划费用不予退还。资金账户的标准利润分成为80/20；付费附加选项最高可将分成提高到90%。',
    s5Title: '5. 严禁违规行为与反作弊机制',
    s5Desc: '延迟套利、利用服务器漏洞、账户间反向交叉对冲以及第三方代过关服务均被严格禁止，并将导致账户立即终止。',
  },
  ja: {
    badge: '法的・規制フレームワーク',
    titlePrefix: '利用規約および',
    titleHighlight: '法的フレームワーク',
    subtitle: 'トレーダーとERACEXとの間の権利、運用上の範囲、相互の合意事項を定めた正式な法的枠組みです。',
    readDoc: '詳細規約を読む',
    privacyLink: 'プライバシーポリシー',
    verText: 'バージョン 2.4 (2026)',
    bindingText: '明確なルール',
    statusTag: 'ステータス',
    statusVal: '現在有効 · Ver 2.4',
    complianceTag: 'コンプライアンス',
    complianceVal: 'データ保護',
    docTitle: '利用規約 (Terms of Service)',
    lastUpdated: '最終更新日：2026年10月27日 · バージョン 2.4',
    s1Title: '1. 適用対象および法的範囲',
    s1Desc: 'ERACEXへようこそ。当ウェブサイトへのアクセス、アカウント登録、または評価チャレンジの購入を行うことで、お客様は本利用規約を読み、理解し、法的拘束力に同意したものとみなされます。',
    s2Title: '2. シミュレーション評価サービスの性質',
    s2Desc: 'ERACEXが運用するすべてのアカウントはシミュレーション環境です。ERACEXはブローカー、カストディアン、または金融預金機関ではなく、顧客からの投資預金を受け付けません。',
    s3Title: '3. 評価基準およびドローダウン（資産減少）制限',
    s3Desc: '参加者は、いずれもエクイティ基準である日次損失上限と最大損失上限を含むプログラムのパラメータを遵守することに同意します（Two-Step：5%と10%、One-Step：3%と6%、Instant：3%と5%のトレーリング）。これらのリスク基準に違反した場合、返金なしでアカウントが終了されます。',
    s4Title: '4. プログラム料金と利益分配',
    s4Desc: 'アカウントへのアクセスが付与された後は、プログラム料金は返金されません。ファンデッドアカウントの標準的な利益分配は80/20で、有料アドオンにより最大90%まで引き上げることができます。',
    s5Title: '5. 厳格に禁止されている不正行為',
    s5Desc: 'レイテンシー・アービトラージ、サーバーの脆弱性の悪用、アカウント間の逆クロスヘッジ、第三者による合格代行サービスは固く禁じられており、即時のアカウント終了につながります。',
  },
  en: {
    badge: 'LEGAL & REGULATORY FRAMEWORK',
    titlePrefix: 'Terms of Service & ',
    titleHighlight: 'Legal Framework',
    subtitle: 'Official legal framework outlining the rights, operational boundaries, and mutual agreements between traders and ERACEX.',
    readDoc: 'Read Document',
    privacyLink: 'Privacy Policy',
    verText: 'Version 2.4 (2026)',
    bindingText: 'Clear Rules',
    statusTag: 'STATUS',
    statusVal: 'Active · Ver 2.4',
    complianceTag: 'COMPLIANCE',
    complianceVal: 'Data Protection',
    docTitle: 'Terms of Service',
    lastUpdated: 'Last Updated: October 27, 2026 · Version 2.4',
    s1Title: '1. SCOPE AND ELIGIBILITY',
    s1Desc: 'Welcome to ERACEX. By accessing our platform, creating an account, or purchasing any evaluation package, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms.',
    s2Title: '2. SIMULATED EVALUATION ENVIRONMENT',
    s2Desc: 'All accounts operated by ERACEX are simulated environments. ERACEX is not a broker, custodian, or financial depository institution and does not accept client investment deposits.',
    s3Title: '3. EVALUATION RULES & DRAWDOWN LIMITS',
    s3Desc: 'Participants agree to adhere to program parameters including the daily loss limit and the max loss limit, both equity-based (Two-Step: 5% and 10%; One-Step: 3% and 6%; Instant: 3% and 5% trailing). Breaching these risk thresholds triggers account termination without refund.',
    s4Title: '4. PROGRAM FEES & PROFIT SPLITS',
    s4Desc: 'Program fees are non-refundable once account access has been granted. The standard profit split on funded accounts is 80/20; a paid add-on can raise the split up to 90%.',
    s5Title: '5. PROHIBITED CONDUCT',
    s5Desc: 'Latency arbitrage, server exploit execution, reverse cross-hedging between accounts, and third-party passing services are strictly banned and result in immediate account termination.',
  },
  es: {
      "badge": "MARCO LEGAL Y REGULATORIO",
      "titlePrefix": "Términos de Servicio y ",
      "titleHighlight": "Marco Legal",
      "subtitle": "Marco legal oficial que define los derechos, los límites operativos y los acuerdos mutuos entre los traders y ERACEX.",
      "readDoc": "Leer Documento",
      "privacyLink": "Política de Privacidad",
      "verText": "Versión 2.4 (2026)",
      "bindingText": "Reglas Claras",
      "statusTag": "ESTADO",
      "statusVal": "Vigente · Ver 2.4",
      "complianceTag": "CONFORMIDAD",
      "complianceVal": "Protección de Datos",
      "docTitle": "Términos de Servicio",
      "lastUpdated": "Última actualización: 27 de octubre de 2026 · Versión 2.4",
      "s1Title": "1. ALCANCE Y ELEGIBILIDAD",
      "s1Desc": "Bienvenido a ERACEX. Al acceder a nuestra plataforma, crear una cuenta o adquirir cualquier paquete de evaluación, aceptas quedar legalmente vinculado por estos Términos.",
      "s2Title": "2. ENTORNO DE EVALUACIÓN SIMULADO",
      "s2Desc": "Todas las cuentas operadas por ERACEX son entornos simulados. ERACEX no es un broker, custodio ni institución depositaria financiera, y no acepta depósitos de inversión de clientes.",
      "s3Title": "3. REGLAS DE EVALUACIÓN Y LÍMITES DE DRAWDOWN",
      "s3Desc": "Los participantes aceptan cumplir los parámetros del programa, incluidos el límite de pérdida diaria y el límite de pérdida máxima, ambos basados en equity (Two-Step: 5% y 10%; One-Step: 3% y 6%; Instant: 3% y 5% trailing). Superar estos umbrales de riesgo conlleva la cancelación de la cuenta sin reembolso.",
      "s4Title": "4. TARIFAS DE LOS PROGRAMAS Y REPARTO DE BENEFICIOS",
      "s4Desc": "Las tarifas de los programas no son reembolsables una vez concedido el acceso a la cuenta. El reparto de beneficios estándar en cuentas funded es 80/20; un complemento de pago puede elevar el reparto hasta el 90%.",
      "s5Title": "5. CONDUCTAS PROHIBIDAS",
      "s5Desc": "El arbitraje de latencia, la explotación de errores del servidor, el hedging inverso cruzado entre cuentas y los servicios de aprobación por terceros están estrictamente prohibidos y conllevan la cancelación inmediata de la cuenta."
  },
  pt: {
      "badge": "ESTRUTURA JURÍDICA E REGULATÓRIA",
      "titlePrefix": "Termos de Serviço e ",
      "titleHighlight": "Estrutura Legal",
      "subtitle": "Marco legal oficial que define os direitos, os limites operacionais e os acordos mútuos entre os traders e a ERACEX.",
      "readDoc": "Ler Documento",
      "privacyLink": "Política de Privacidade",
      "verText": "Versão 2.4 (2026)",
      "bindingText": "Regras Claras",
      "statusTag": "STATUS",
      "statusVal": "Vigente · Ver 2.4",
      "complianceTag": "CONFORMIDADE",
      "complianceVal": "Proteção de Dados",
      "docTitle": "Termos de Serviço",
      "lastUpdated": "Última atualização: 27 de outubro de 2026 · Versão 2.4",
      "s1Title": "1. ESCOPO E ELEGIBILIDADE",
      "s1Desc": "Bem-vindo à ERACEX. Ao acessar nosso site, criar um login ou adquirir qualquer plano de avaliação, você concorda expressamente com os presentes Termos de Serviço.",
      "s2Title": "2. AMBIENTE DE AVALIAÇÃO SIMULADO",
      "s2Desc": "Todas as contas operadas pela ERACEX são ambientes simulados. A ERACEX não é uma corretora, custodiante nem instituição depositária financeira e não aceita depósitos de investimento de clientes.",
      "s3Title": "3. REGRAS DE AVALIAÇÃO E LIMITES DE DRAWDOWN",
      "s3Desc": "Os participantes concordam em respeitar os parâmetros do programa, incluindo o limite de perda diária e o limite de perda máxima, ambos baseados em equity (Two-Step: 5% e 10%; One-Step: 3% e 6%; Instant: 3% e 5% trailing). Violar esses limites de risco resulta no encerramento da conta sem reembolso.",
      "s4Title": "4. TAXAS DOS PROGRAMAS E DIVISÃO DE LUCROS",
      "s4Desc": "As taxas dos programas não são reembolsáveis depois que o acesso à conta é concedido. A divisão de lucros padrão em contas funded é 80/20; um complemento pago pode elevar a divisão em até 90%.",
      "s5Title": "5. PRÁTICAS EXPRESSAMENTE PROIBIDAS",
      "s5Desc": "A arbitragem de latência, a exploração de falhas do servidor, o hedge reverso cruzado entre contas e os serviços de aprovação por terceiros são estritamente proibidos e resultam no encerramento imediato da conta."
  },
  fr: {
      "badge": "CADRE JURIDIQUE & RÉGLEMENTAIRE",
      "titlePrefix": "Conditions d’Utilisation & ",
      "titleHighlight": "Cadre Légal",
      "subtitle": "Cadre juridique officiel exposant les droits, les limites opérationnelles et les accords mutuels entre les traders et ERACEX.",
      "readDoc": "Consulter le Document",
      "privacyLink": "Politique de Confidentialité",
      "verText": "Version 2.4 (2026)",
      "bindingText": "Règles claires",
      "statusTag": "STATUT",
      "statusVal": "Actif · Ver 2.4",
      "complianceTag": "CONFORMITÉ",
      "complianceVal": "Protection des données",
      "docTitle": "Conditions d’Utilisation",
      "lastUpdated": "Dernière mise à jour : 27 octobre 2026 · Version 2.4",
      "s1Title": "1. CHAMP D’APPLICATION ET ADMISSIBILITÉ",
      "s1Desc": "Bienvenue chez ERACEX. En accédant à nos services ou en achetant un challenge, vous confirmez avoir lu et accepté sans réserve les présentes conditions.",
      "s2Title": "2. NATURE DU SERVICE D’ÉVALUATION SIMULÉE",
      "s2Desc": "Tous les comptes exploités par ERACEX sont des environnements simulés. ERACEX n'est ni un courtier, ni un dépositaire, ni un établissement de dépôt financier, et n'accepte aucun dépôt d'investissement de clients.",
      "s3Title": "3. RÈGLES D’ÉVALUATION ET DRAWDOWN",
      "s3Desc": "Les participants s'engagent à respecter les paramètres du programme, notamment la limite de perte quotidienne et la limite de perte maximale, toutes deux basées sur l'equity (Two-Step : 5 % et 10 % ; One-Step : 3 % et 6 % ; Instant : 3 % et 5 % trailing). Le dépassement de ces seuils de risque entraîne la clôture du compte sans remboursement.",
      "s4Title": "4. FRAIS DES PROGRAMMES ET PARTAGE DES PROFITS",
      "s4Desc": "Les frais des programmes ne sont pas remboursables une fois l'accès au compte accordé. Le partage standard des profits sur les comptes funded est de 80/20 ; une option payante peut le porter jusqu'à 90 %.",
      "s5Title": "5. PRATIQUES STRICTEMENT PROHIBÉES",
      "s5Desc": "L'arbitrage de latence, l'exploitation de failles du serveur, la couverture inverse croisée entre comptes et les services de passage par des tiers sont strictement interdits et entraînent la clôture immédiate du compte."
  },
  de: {
      "badge": "RECHTS- & REGULIERUNGSRAHMEN",
      "titlePrefix": "Allgemeine Geschäftsbedingungen & ",
      "titleHighlight": "Rechtliche Grundlagen",
      "subtitle": "Offizieller rechtlicher Rahmen, der die Rechte, betrieblichen Grenzen und gegenseitigen Vereinbarungen zwischen Tradern und ERACEX festlegt.",
      "readDoc": "Dokument Lesen",
      "privacyLink": "Datenschutzrichtlinie",
      "verText": "Version 2.4 (2026)",
      "bindingText": "Klare Regeln",
      "statusTag": "STATUS",
      "statusVal": "Gültig · Ver 2.4",
      "complianceTag": "SICHERHEIT",
      "complianceVal": "Datenschutz",
      "docTitle": "Allgemeine Geschäftsbedingungen (AGB)",
      "lastUpdated": "Zuletzt aktualisiert: 27. Oktober 2026 · Version 2.4",
      "s1Title": "1. GELTUNGSBEREICH UND ZULASSUNG",
      "s1Desc": "Willkommen bei ERACEX. Durch den Zugriff auf unsere Plattform oder den Erwerb einer Challenge erklären Sie sich mit der rechtlichen Verbindlichkeit dieser AGB einverstanden.",
      "s2Title": "2. SIMULIERTE EVALUIERUNGSUMGEBUNG",
      "s2Desc": "Alle von ERACEX betriebenen Konten sind simulierte Umgebungen. ERACEX ist weder Broker noch Verwahrer oder Finanzinstitut für Einlagen und nimmt keine Anlagegelder von Kunden an.",
      "s3Title": "3. EVALUIERUNGSREGELN UND VERLUSTGRENZEN",
      "s3Desc": "Teilnehmer verpflichten sich, die Programmparameter einzuhalten, darunter das Tagesverlustlimit und das Maximalverlustlimit, beide Equity-basiert (Two-Step: 5 % und 10 %; One-Step: 3 % und 6 %; Instant: 3 % und 5 % Trailing). Eine Verletzung dieser Risikoschwellen führt zur Kontobeendigung ohne Rückerstattung.",
      "s4Title": "4. PROGRAMMGEBÜHREN & GEWINNAUFTEILUNG",
      "s4Desc": "Programmgebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig. Die Standard-Gewinnaufteilung auf Funded-Konten beträgt 80/20; ein kostenpflichtiges Add-on kann sie auf bis zu 90 % erhöhen.",
      "s5Title": "5. UNTERSAGTE HANDLUNGEN",
      "s5Desc": "Latenz-Arbitrage, das Ausnutzen von Serverschwachstellen, gegenläufiges Cross-Hedging zwischen Konten und Pass-Dienste Dritter sind streng verboten und führen zur sofortigen Kontobeendigung."
  },
  it: {
      "badge": "QUADRO LEGALE E NORMATIVO",
      "titlePrefix": "Termini di Servizio & ",
      "titleHighlight": "Quadro Legale",
      "subtitle": "Quadro legale ufficiale che definisce i diritti, i limiti operativi e gli accordi reciproci tra i trader e ERACEX.",
      "readDoc": "Leggi il Documento",
      "privacyLink": "Informativa sulla Privacy",
      "verText": "Versione 2.4 (2026)",
      "bindingText": "Regole chiare",
      "statusTag": "STATO",
      "statusVal": "Attivo · Ver 2.4",
      "complianceTag": "CONFORMITÀ",
      "complianceVal": "Protezione dei dati",
      "docTitle": "Termini di Servizio",
      "lastUpdated": "Ultimo aggiornamento: 27 ottobre 2026 · Versione 2.4",
      "s1Title": "1. AMBITO DI APPLICAZIONE",
      "s1Desc": "Benvenuto in ERACEX. Accedendo alla nostra piattaforma o acquistando un pacchetto di valutazione, accetti integralmente i presenti Termini di Servizio.",
      "s2Title": "2. NATURA DELL’AMBIENTE SIMULATO",
      "s2Desc": "Tutti i conti gestiti da ERACEX sono ambienti simulati. ERACEX non è un broker, un custode né un istituto di deposito finanziario e non accetta depositi di investimento dai clienti.",
      "s3Title": "3. REGOLE DI VALUTAZIONE E LIMITI DI DRAWDOWN",
      "s3Desc": "I partecipanti accettano di rispettare i parametri del programma, inclusi il limite di perdita giornaliera e il limite di perdita massima, entrambi basati sull'equity (Two-Step: 5% e 10%; One-Step: 3% e 6%; Instant: 3% e 5% trailing). Il superamento di queste soglie di rischio comporta la chiusura del conto senza rimborso.",
      "s4Title": "4. COMMISSIONI DEI PROGRAMMI E RIPARTIZIONE DEGLI UTILI",
      "s4Desc": "Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso al conto. La ripartizione standard degli utili sui conti funded è 80/20; un add-on a pagamento può portarla fino al 90%.",
      "s5Title": "5. CONDOTTE VIETATE",
      "s5Desc": "L'arbitraggio di latenza, lo sfruttamento di falle del server, l'hedging inverso incrociato tra conti e i servizi di superamento da parte di terzi sono rigorosamente vietati e comportano la chiusura immediata del conto."
  },
  pl: {
      "badge": "RAMY PRAWNE I REGULACYJNE",
      "titlePrefix": "Regulamin Świadczenia Usług & ",
      "titleHighlight": "Ramy Prawne",
      "subtitle": "Oficjalne ramy prawne określające prawa, granice operacyjne i wzajemne ustalenia między traderami a ERACEX.",
      "readDoc": "Czytaj Dokument",
      "privacyLink": "Polityka Prywatności",
      "verText": "Wersja 2.4 (2026)",
      "bindingText": "Jasne zasady",
      "statusTag": "STATUS",
      "statusVal": "Obowiązujący · Ver 2.4",
      "complianceTag": "ZGODNOŚĆ",
      "complianceVal": "Ochrona danych",
      "docTitle": "Regulamin Świadczenia Usług (Terms of Service)",
      "lastUpdated": "Ostatnia aktualizacja: 27 października 2026 r. · Wersja 2.4",
      "s1Title": "1. ZAKRES I KWALIFIKOWALNOŚĆ",
      "s1Desc": "Witamy w ERACEX. Korzystając z serwisu lub kupując dowolny egzamin wyzwania, potwierdzasz, że akceptujesz niniejszy Regulamin i zobowiązujesz się do jego przestrzegania.",
      "s2Title": "2. SYMULOWANE ŚRODOWISKO EWALUACJI",
      "s2Desc": "Wszystkie konta prowadzone przez ERACEX to środowiska symulowane. ERACEX nie jest brokerem, depozytariuszem ani instytucją depozytową i nie przyjmuje od klientów depozytów inwestycyjnych.",
      "s3Title": "3. ZASADY EWALUACJI I LIMITU OBSUNIĘCIA",
      "s3Desc": "Uczestnicy zobowiązują się przestrzegać parametrów programu, w tym limitu dziennej straty i limitu maksymalnej straty, obu liczonych od equity (Two-Step: 5% i 10%; One-Step: 3% i 6%; Instant: 3% i 5% trailing). Przekroczenie tych progów ryzyka skutkuje zamknięciem konta bez zwrotu.",
      "s4Title": "4. OPŁATY ZA PROGRAMY I PODZIAŁ ZYSKÓW",
      "s4Desc": "Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu do konta. Standardowy podział zysków na kontach funded wynosi 80/20; płatny dodatek może zwiększyć go do 90%.",
      "s5Title": "5. ZABRONIONE PRAKTYKI TRADINGOWE",
      "s5Desc": "Arbitraż opóźnień, wykorzystywanie luk serwera, odwrotny hedging krzyżowy między kontami oraz usługi przechodzenia oceny przez osoby trzecie są surowo zabronione i skutkują natychmiastowym zamknięciem konta."
  },
  tr: {
      "badge": "YASAL VE MEVZUAT ÇERÇEVESİ",
      "titlePrefix": "Hizmet Şartları ve ",
      "titleHighlight": "Yasal Hükümler",
      "subtitle": "Traderlar ile ERACEX arasındaki hakları, operasyonel sınırları ve karşılıklı anlaşmaları belirleyen resmi hukuki çerçeve.",
      "readDoc": "Sözleşmeyi Oku",
      "privacyLink": "Gizlilik Politikası",
      "verText": "Sürüm 2.4 (2026)",
      "bindingText": "Net Kurallar",
      "statusTag": "DURUM",
      "statusVal": "Yürürlükte · Ver 2.4",
      "complianceTag": "UYUMLULUK",
      "complianceVal": "Veri Koruma",
      "docTitle": "Hizmet Kullanım Şartları (Terms of Service)",
      "lastUpdated": "Son Güncelleme: 27 Ekim 2026 · Sürüm 2.4",
      "s1Title": "1. KAPSAM VE UYGULAMA ALANI",
      "s1Desc": "ERACEX’e hoş geldiniz. Platforma erişerek veya bir challenge paketi satın alarak bu Şartları okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan edersiniz.",
      "s2Title": "2. SİMÜLE EDİLMİŞ DEĞERLENDİRME ORTAMI",
      "s2Desc": "ERACEX tarafından işletilen tüm hesaplar simüle ortamlardır. ERACEX bir aracı kurum, saklama kuruluşu veya mevduat kabul eden finans kurumu değildir ve müşterilerden yatırım mevduatı kabul etmez.",
      "s3Title": "3. DEĞERLENDİRME VE DRAWDOWN KURALLARI",
      "s3Desc": "Katılımcılar, her ikisi de equity bazlı olan günlük kayıp limiti ve maksimum kayıp limiti dahil program parametrelerine uymayı kabul eder (Two-Step: %5 ve %10; One-Step: %3 ve %6; Instant: %3 ve %5 trailing). Bu risk eşiklerinin aşılması, iade yapılmaksızın hesabın sonlandırılmasına yol açar.",
      "s4Title": "4. PROGRAM ÜCRETLERİ VE KÂR PAYLAŞIMI",
      "s4Desc": "Hesap erişimi verildikten sonra program ücretleri iade edilmez. Funded hesaplarda standart kâr paylaşımı 80/20'dir; ücretli bir eklenti bu oranı %90'a kadar çıkarabilir.",
      "s5Title": "5. KESİNLİKLE YASAKLANMIŞ EYLEMLER",
      "s5Desc": "Gecikme arbitrajı, sunucu açıklarının istismarı, hesaplar arası ters çapraz hedge ve üçüncü taraf geçiş hizmetleri kesinlikle yasaktır ve hesabın derhal sonlandırılmasına yol açar."
  },
  id: {
      "badge": "KERANGKA HUKUM & REGULASI",
      "titlePrefix": "Syarat Ketentuan Layanan & ",
      "titleHighlight": "Kerangka Legal",
      "subtitle": "Kerangka hukum resmi yang menguraikan hak, batasan operasional, dan kesepakatan bersama antara trader dan ERACEX.",
      "readDoc": "Baca Dokumen",
      "privacyLink": "Kebijakan Privasi",
      "verText": "Versi 2.4 (2026)",
      "bindingText": "Aturan yang Jelas",
      "statusTag": "STATUS",
      "statusVal": "Berlaku · Ver 2.4",
      "complianceTag": "KEPATUHAN",
      "complianceVal": "Perlindungan Data",
      "docTitle": "Syarat & Ketentuan Layanan",
      "lastUpdated": "Terakhir Diperbarui: 27 Oktober 2026 · Versi 2.4",
      "s1Title": "1. RUANG LINGKUP DAN KELAYAKAN",
      "s1Desc": "Selamat datang di ERACEX. Dengan mengakses layanan atau membeli paket challenge, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat ini secara hukum.",
      "s2Title": "2. LINGKUNGAN EVALUASI SIMULASI",
      "s2Desc": "Semua akun yang dioperasikan ERACEX adalah lingkungan simulasi. ERACEX bukan broker, kustodian, atau lembaga penyimpan dana keuangan, dan tidak menerima setoran investasi klien.",
      "s3Title": "3. ATURAN EVALUASI DAN DRAWDOWN",
      "s3Desc": "Peserta setuju mematuhi parameter program, termasuk batas kerugian harian dan batas kerugian maksimum, keduanya berbasis equity (Two-Step: 5% dan 10%; One-Step: 3% dan 6%; Instant: 3% dan 5% trailing). Melanggar ambang risiko ini mengakibatkan penghentian akun tanpa pengembalian dana.",
      "s4Title": "4. BIAYA PROGRAM & PEMBAGIAN PROFIT",
      "s4Desc": "Biaya program tidak dapat dikembalikan setelah akses akun diberikan. Pembagian profit standar pada akun funded adalah 80/20; add-on berbayar dapat menaikkan pembagian hingga 90%.",
      "s5Title": "5. PRAKTIK YANG DILARANG KERAS",
      "s5Desc": "Arbitrase latensi, eksploitasi celah server, hedging silang terbalik antar akun, dan layanan joki pihak ketiga dilarang keras dan mengakibatkan penghentian akun segera."
  },
  th: {
      "badge": "กรอบทางกฎหมายและข้อบังคับ",
      "titlePrefix": "ข้อกำหนดการให้บริการและ ",
      "titleHighlight": "ข้อตกลงทางกฎหมาย",
      "subtitle": "กรอบกฎหมายอย่างเป็นทางการที่กำหนดสิทธิ ขอบเขตการดำเนินงาน และข้อตกลงร่วมกันระหว่างเทรดเดอร์กับ ERACEX",
      "readDoc": "อ่านเอกสารฉบับเต็ม",
      "privacyLink": "นโยบายความเป็นส่วนตัว",
      "verText": "เวอร์ชัน 2.4 (2026)",
      "bindingText": "กฎที่ชัดเจน",
      "statusTag": "สถานะ",
      "statusVal": "มีผลบังคับใช้ · Ver 2.4",
      "complianceTag": "การปฏิบัติตามกฎ",
      "complianceVal": "การคุ้มครองข้อมูล",
      "docTitle": "ข้อกำหนดการให้บริการ (Terms of Service)",
      "lastUpdated": "อัปเดตล่าสุด: วันที่ 27 ตุลาคม 2026 · เวอร์ชัน 2.4",
      "s1Title": "1. ขอบเขตและคุณสมบัติของผู้ใช้งาน",
      "s1Desc": "ยินดีต้อนรับสู่ ERACEX การเข้าถึงเว็บไซต์ สร้างบัญชี หรือซื้อแพ็กเกจ Challenge ถือว่าคุณยอมรับข้อกำหนดเหล่านี้โดยสมบูรณ์",
      "s2Title": "2. สภาพแวดล้อมการประเมินผลแบบจำลอง",
      "s2Desc": "บัญชีทั้งหมดที่ ERACEX ดำเนินการเป็นสภาพแวดล้อมจำลอง ERACEX ไม่ใช่โบรกเกอร์ ผู้รับฝากทรัพย์สิน หรือสถาบันรับฝากเงินทางการเงิน และไม่รับเงินฝากเพื่อการลงทุนจากลูกค้า",
      "s3Title": "3. กฎเกณฑ์การประเมินและขีดจำกัด DRAWDOWN",
      "s3Desc": "ผู้เข้าร่วมตกลงปฏิบัติตามพารามิเตอร์ของโปรแกรม รวมถึงขีดจำกัดการขาดทุนรายวันและขีดจำกัดการขาดทุนสูงสุด ซึ่งคิดจาก equity ทั้งคู่ (Two-Step: 5% และ 10%; One-Step: 3% และ 6%; Instant: 3% และ 5% แบบ trailing) การละเมิดเกณฑ์ความเสี่ยงเหล่านี้จะส่งผลให้บัญชีถูกยุติโดยไม่มีการคืนเงิน",
      "s4Title": "4. ค่าธรรมเนียมโปรแกรมและการแบ่งกำไร",
      "s4Desc": "ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว สัดส่วนแบ่งกำไรมาตรฐานของบัญชี funded คือ 80/20 และส่วนเสริมแบบชำระเงินสามารถเพิ่มสัดส่วนได้สูงสุด 90%",
      "s5Title": "5. พฤติกรรมที่ห้ามโดยเด็ดขาด",
      "s5Desc": "การทำ latency arbitrage การใช้ช่องโหว่ของเซิร์ฟเวอร์ การเฮดจ์สวนทางข้ามบัญชี และบริการรับทำผ่านโดยบุคคลที่สามเป็นสิ่งต้องห้ามโดยเด็ดขาดและส่งผลให้บัญชีถูกยุติทันที"
  },
  fil: {
      "badge": "LEGAL AT REGULATORYONG BALANGKAS",
      "titlePrefix": "Mga Tuntunin ng Serbisyo at ",
      "titleHighlight": "Legal na Balangkas",
      "subtitle": "Opisyal na legal na balangkas na naglalatag ng mga karapatan, hangganan ng operasyon, at magkasanib na kasunduan ng mga trader at ng ERACEX.",
      "readDoc": "Basahin ang Dokumento",
      "privacyLink": "Patakaran sa Privacy",
      "verText": "Bersyon 2.4 (2026)",
      "bindingText": "Malinaw na mga Patakaran",
      "statusTag": "STATUS",
      "statusVal": "Aktibo · Ver 2.4",
      "complianceTag": "PAGSUNOD",
      "complianceVal": "Proteksyon ng Datos",
      "docTitle": "Mga Tuntunin ng Serbisyo",
      "lastUpdated": "Huling Na-update: Oktubre 27, 2026 · Bersyon 2.4",
      "s1Title": "1. SAKLAW AT PAGIGING KARAPAT-DAPAT",
      "s1Desc": "Maligayang pagdating sa ERACEX. Sa pag-access sa aming platform o pagbili ng challenge, sumasang-ayon ka sa mga Tuntuning ito.",
      "s2Title": "2. SIMULATED EVALUATION ENVIRONMENT",
      "s2Desc": "Ang lahat ng account na pinapatakbo ng ERACEX ay mga simulated na kapaligiran. Hindi broker, custodian, o institusyong tagapag-ingat ng pinansyal na deposito ang ERACEX at hindi ito tumatanggap ng investment deposit mula sa mga kliyente.",
      "s3Title": "3. MGA PATAKARAN SA EVALUATION AT DRAWDOWN",
      "s3Desc": "Sumasang-ayon ang mga kalahok na sundin ang mga parameter ng programa, kabilang ang daily loss limit at max loss limit, na parehong batay sa equity (Two-Step: 5% at 10%; One-Step: 3% at 6%; Instant: 3% at 5% trailing). Ang paglabag sa mga risk threshold na ito ay magreresulta sa pagtatapos ng account nang walang refund.",
      "s4Title": "4. BAYAD SA PROGRAMA AT HATIAN NG KITA",
      "s4Desc": "Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access sa account. Ang karaniwang hatian ng kita sa mga funded account ay 80/20; ang bayad na add-on ay maaaring magtaas nito hanggang 90%.",
      "s5Title": "5. IPINAGBABAWAL NA GAWAIN",
      "s5Desc": "Mahigpit na ipinagbabawal ang latency arbitrage, pagsasamantala sa server, cross reverse hedging sa pagitan ng mga account, at mga third-party na pass service, at magreresulta ito sa agarang pagtatapos ng account."
  },
  hi: {
      "badge": "कानूनी और विनियामक ढांचा",
      "titlePrefix": "सेवा की शर्तें और ",
      "titleHighlight": "कानूनी ढांचा",
      "subtitle": "ट्रेडरों और ERACEX के बीच अधिकारों, परिचालन सीमाओं और आपसी समझौतों को निर्धारित करने वाला आधिकारिक कानूनी ढाँचा।",
      "readDoc": "दस्तावेज़ पढ़ें",
      "privacyLink": "गोपनीयता नीति",
      "verText": "संस्करण 2.4 (2026)",
      "bindingText": "स्पष्ट नियम",
      "statusTag": "स्थिति",
      "statusVal": "लागू · Ver 2.4",
      "complianceTag": "अनुपालन",
      "complianceVal": "डेटा सुरक्षा",
      "docTitle": "सेवा की शर्तें (Terms of Service)",
      "lastUpdated": "अंतिम अद्यतन: 27 अक्टूबर, 2026 · संस्करण 2.4",
      "s1Title": "1. दायरा और पात्रता",
      "s1Desc": "ERACEX में आपका स्वागत है। हमारी वेबसाइट का उपयोग करके या कोई मूल्यांकन पैकेज खरीदकर, आप इन शर्तों से कानूनी रूप से बाध्य होने की पुष्टि करते हैं।",
      "s2Title": "2. सिम्युलेटेड मूल्यांकन वातावरण",
      "s2Desc": "ERACEX द्वारा संचालित सभी खाते सिम्युलेटेड वातावरण हैं। ERACEX कोई ब्रोकर, कस्टोडियन या वित्तीय जमा संस्था नहीं है और ग्राहकों से निवेश जमा स्वीकार नहीं करती।",
      "s3Title": "3. मूल्यांकन नियम और ड्रॉडाउन सीमाएं",
      "s3Desc": "प्रतिभागी प्रोग्राम के मानकों का पालन करने के लिए सहमत हैं, जिनमें दैनिक हानि सीमा और अधिकतम हानि सीमा शामिल हैं, दोनों equity आधारित (Two-Step: 5% और 10%; One-Step: 3% और 6%; Instant: 3% और 5% trailing)। इन जोखिम सीमाओं का उल्लंघन करने पर खाता बिना वापसी के समाप्त कर दिया जाता है।",
      "s4Title": "4. प्रोग्राम शुल्क और लाभ विभाजन",
      "s4Desc": "खाते का एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता। funded खातों पर मानक लाभ विभाजन 80/20 है; एक सशुल्क ऐड-ऑन विभाजन को 90% तक बढ़ा सकता है।",
      "s5Title": "5. कड़ाई से निषिद्ध आचरण",
      "s5Desc": "Latency arbitrage, सर्वर की खामियों का दुरुपयोग, खातों के बीच क्रॉस रिवर्स हेजिंग और तीसरे पक्ष की पासिंग सेवाएँ सख्ती से प्रतिबंधित हैं और इनसे खाता तुरंत समाप्त कर दिया जाता है।"
  },
  ko: {
      "badge": "법적 규정 및 서비스 이용약관",
      "titlePrefix": "공식 서비스 이용약관 & ",
      "titleHighlight": "법적 준수 프레임워크",
      "subtitle": "트레이더와 ERACEX 간의 권리와 의무, 운영 가이드라인 및 상호 합의 사항을 규정한 공식 법적 문서입니다.",
      "readDoc": "약관 전문 확인",
      "privacyLink": "개인정보처리방침",
      "verText": "버전 2.4 (2026년 개정)",
      "bindingText": "100% 투명하고 법적 구속력 보유",
      "statusTag": "시행 상태",
      "statusVal": "현재 적용 중 · Ver 2.4",
      "complianceTag": "보안 준수",
      "complianceVal": "100% 안전 보장",
      "docTitle": "서비스 이용약관 (Terms of Service)",
      "lastUpdated": "최종 개정일: 2026년 10월 27일 · 개정 버전 2.4",
      "s1Title": "1. 적용 대상 및 자격 요건",
      "s1Desc": "ERACEX에 오신 것을 환영합니다. 본 플랫폼에 접속하거나 챌린지 패키지를 구매함으로써 귀하는 본 약관의 법적 구속력을 인지하고 동의하게 됩니다.",
      "s2Title": "2. 가상 모의 평가 환경의 본질",
      "s2Desc": "모든 평가는 기관용 실시간 시세를 반영한 시뮬레이션 환경에서 진행됩니다. ERACEX는 증권 중개사(브로커)가 아니며 고객의 투자 원금을 수탁하지 않습니다.",
      "s3Title": "3. 평가 규정 및 최대 손실 한도(Drawdown)",
      "s3Desc": "참가자는 일일 최대 손실(4%) 및 원금 고정 최대 손실(8%)을 엄격히 준수해야 합니다. 손실 한도를 단 1회라도 초과할 경우 응시 자격이 상실됩니다.",
      "s4Title": "4. 응시료 전액 환불 및 수익금 분배",
      "s4Desc": "평가 단계를 통과하고 정식 펀딩 계정에서 최초 수익 출금을 집행할 때, 납부했던 응시료 100% 전액이 최대 95%의 수익 분배금과 함께 환급됩니다.",
      "s5Title": "5. 절대적 부정 행위 및 제재",
      "s5Desc": "레이턴시 아비트라지, 시세 오류 악용, 다중 계정 간 반대 매매(Hedging) 및 제3자 대리 시험 통과 행위는 즉시 영구 자격 박탈 사유가 됩니다."
  },
  ru: {
      "badge": "ПРАВОВАЯ И НОРМАТИВНАЯ БАЗА",
      "titlePrefix": "Условия обслуживания и ",
      "titleHighlight": "Правовая база",
      "subtitle": "Официальный регламент, определяющий права, обязанности и соглашения между трейдерами и компанией ERACEX.",
      "readDoc": "Читать документ",
      "privacyLink": "Политика конфиденциальности",
      "verText": "Версия 2.4 (2026)",
      "bindingText": "100% Прозрачно и юридически обязательно",
      "statusTag": "СТАТУС",
      "statusVal": "Действует · Версия 2.4",
      "complianceTag": "БЕЗОПАСНОСТЬ",
      "complianceVal": "100% Защита",
      "docTitle": "Условия обслуживания (Terms of Service)",
      "lastUpdated": "Последнее обновление: 27 октября 2026 г. · Версия 2.4",
      "s1Title": "1. ОБЛАСТЬ ПРИМЕНЕНИЯ",
      "s1Desc": "Добро пожаловать в ERACEX. Получая доступ к платформе или приобретая оценку, вы соглашаетесь с юридической силой настоящих Условий.",
      "s2Title": "2. СИМУЛИРОВАННАЯ ТОРГОВАЯ СРЕДА",
      "s2Desc": "Все челленджи проходят в смоделированной среде с реальными котировками. ERACEX не является брокером и не принимает депозиты клиентов.",
      "s3Title": "3. ПРАВИЛА ОЦЕНКИ И ПРОСАДКИ",
      "s3Desc": "Участники обязаны соблюдать дневной лимит потерь (4%) и максимальный статический drawdown (8%). Нарушение ведет к закрытию счета.",
      "s4Title": "4. ВОЗВРАТ ВЗНОСА И ВЫПЛАТЫ",
      "s4Desc": "После успешной сдачи теста и при первой выплате на счете с капиталом 100% взноса возвращается вместе с долей прибыли до 95%.",
      "s5Title": "5. ЗАПРЕЩЕННЫЕ ПРАКТИКИ",
      "s5Desc": "Арбитраж задержек, использование программных ошибок, встречный хеджинг между счетами и передача счетов третьим лицам строго запрещены."
  },
  ar: {
      "badge": "الإطار القانوني والتنظيمي",
      "titlePrefix": "شروط الخدمة و ",
      "titleHighlight": "الإطار القانوني",
      "subtitle": "الوثيقة القانونية الرسمية التي تحدد الحقوق والحدود التشغيلية والاتفاقيات المتبادلة بين المتداولين وشركة ERACEX.",
      "readDoc": "قراءة الوثيقة",
      "privacyLink": "سياسة الخصوصية",
      "verText": "الإصدار 2.4 (2026)",
      "bindingText": "واضحة وملزمة قانوناً 100%",
      "statusTag": "الحالة",
      "statusVal": "سارية المفعول · Ver 2.4",
      "complianceTag": "الامتثال",
      "complianceVal": "آمنة 100%",
      "docTitle": "شروط الخدمة (Terms of Service)",
      "lastUpdated": "آخر تحديث: 27 أكتوبر 2026 · الإصدار 2.4",
      "s1Title": "1. النطاق والأهلية",
      "s1Desc": "مرحباً بك في ERACEX. من خلال الوصول إلى منصتنا أو شراء أي باقة تقييم، فإنك تقر بأنك قرأت ووافقت على الالتزام بهذه الشروط.",
      "s2Title": "2. طبيعة بيئة التقييم المحاكية",
      "s2Desc": "تعمل جميع حسابات التحدي في بيئة محاكاة تستند إلى أسعار حقيقية. شركة ERACEX ليست وسيطاً مالياً ولا تقبل الودائع الاستثمارية.",
      "s3Title": "3. قواعد التقييم وحدود التراجع",
      "s3Desc": "يلتزم المتداول بالحد اليومي للخسارة (4%) وأقصى تراجع ثابت (8%). يؤدي تجاوز هذه النسب إلى إنهاء الحساب دون استرداد الرسوم.",
      "s4Title": "4. استرداد الرسوم ومشاركة الأرباح",
      "s4Desc": "عند اجتياز التحدي وإجراء أول سحب من الحساب الممول، يتم رد 100% من رسوم الاشتراك الأصلية بالكامل مع حصتك من الأرباح (حتى 95%).",
      "s5Title": "5. السلوكيات المحظورة تماماً",
      "s5Desc": "يحظر تماماً مراجحة زمن الاستجابة، استغلال أخطاء السيرفرات، التحوط العكسي المنسق بين الحسابات واستخدام خدمات اجتياز التحديات الخارجية."
  },
  nl: {
      "badge": "JURIDISCH & REGELGEVEND KADER",
      "titlePrefix": "Algemene Voorwaarden & ",
      "titleHighlight": "Wettelijk Kader",
      "subtitle": "Officieel wettelijk kader dat de rechten, operationele grenzen en wederzijdse afspraken tussen handelaren en ERACEX vastlegt.",
      "readDoc": "Lees Document",
      "privacyLink": "Privacybeleid",
      "verText": "Versie 2.4 (2026)",
      "bindingText": "100% Duidelijk & Bindend",
      "statusTag": "STATUS",
      "statusVal": "Actief · Ver 2.4",
      "complianceTag": "NALEVING",
      "complianceVal": "100% Beveiligd",
      "docTitle": "Algemene Voorwaarden (Terms of Service)",
      "lastUpdated": "Laatst bijgewerkt: 27 oktober 2026 · Versie 2.4",
      "s1Title": "1. TOEPASSELIJKHEID EN TOEGANKELIJKHEID",
      "s1Desc": "Welkom bij ERACEX. Door toegang te nemen tot ons platform of een evaluatiepakket aan te schaffen, verklaart u gebonden te zijn aan deze voorwaarden.",
      "s2Title": "2. GESIMULEERDE EVALUATIE-OMGEVING",
      "s2Desc": "Alle challenges draaien in een gesimuleerde handelsomgeving gevoed door realtime marktkoersen. ERACEX is geen broker en beheert geen spaargelden.",
      "s3Title": "3. EVALUATIEREGELS EN DRAWDOWN-LIMIETEN",
      "s3Desc": "Handelaren dienen zich te houden aan het maximale dagverlies (4%) en de statische maximale drawdown (8%). Schending leidt tot sluiting van het account.",
      "s4Title": "4. RESTITUTIE EN WINSTDELING",
      "s4Desc": "Bij succesvolle afronding en de eerste uitbetaling van het gefinancierde account wordt het inschrijfgeld 100% teruggestort samen met de winst (tot 95%).",
      "s5Title": "5. VERBODEN PRAKTIJKEN",
      "s5Desc": "Latency arbitrage, misbruik van softwarefouten, tegengestelde hedging over meerdere accounts en pass-services van derden zijn ten strengste verboden."
  },
};

export default function TermsPage() {
  const { t, currentLang } = useLanguage();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  return (
    <div className="pb-20 app-bg app-text w-full">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER WITH 3D ILLUSTRATION */}
      <PageHeroBanner
        badgeText={d.badge}
        badgeIcon={<Shield className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={
          <>
            {d.titlePrefix}<span className="text-[#c68a00] dark:text-[#ffc501]">{d.titleHighlight}</span>
          </>
        }
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.footer.terms },
        ]}
        primaryCta={{
          label: d.readDoc,
          href: '#document-content',
          icon: <FileText className="w-5 h-5 fill-black text-[#f6bf4a]" />,
        }}
        secondaryCta={{
          label: d.privacyLink,
          href: '/privacy',
        }}
        features={[
          { icon: <Shield className="w-4 h-4" />, text: d.verText },
          { icon: <CheckCircle2 className="w-4 h-4" />, text: d.bindingText },
        ]}
        imageSrc="/images/banner-legal-3d.jpg"
        imageAlt="ERACEX Regulatory Compliance, Security & Institutional Trust"
        floatingBadge1={{
          tag: d.statusTag,
          value: d.statusVal,
          icon: <FileText className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.complianceTag,
          value: d.complianceVal,
          icon: <Shield className="w-5 h-5" />,
        }}
      />

      {/* 2. DOCUMENT BODY */}
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8" id="document-content">
        <div className="max-w-5xl mx-auto p-8 sm:p-14 rounded-3xl border app-border-gold app-surface shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501]">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold app-text">
                {d.docTitle}
              </h2>
              <p className="text-xs font-mono app-text-muted mt-1">
                {d.lastUpdated}
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm leading-relaxed app-text-secondary">
            <section className="space-y-2">
              <h2 className="text-lg font-bold app-text">
                {d.s1Title}
              </h2>
              <p>{d.s1Desc}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold app-text">
                {d.s2Title}
              </h2>
              <p>{d.s2Desc}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold app-text">
                {d.s3Title}
              </h2>
              <p>{d.s3Desc}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold app-text">
                {d.s4Title}
              </h2>
              <p>{d.s4Desc}</p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold app-text">
                {d.s5Title}
              </h2>
              <p>{d.s5Desc}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
