'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { Lock, ShieldCheck } from 'lucide-react';

interface PrivacyDictionary {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  readPolicy: string;
  termsLink: string;
  gdprFeature: string;
  sslFeature: string;
  securityTag: string;
  securityVal: string;
  standardTag: string;
  standardVal: string;
  docTitle: string;
  docSubtitle: string;
  s1Title: string;
  s1Desc: string;
  s2Title: string;
  s2Desc: string;
  s3Title: string;
  s3Desc: string;
  s4Title: string;
  s4Desc: string;
}

const DICTIONARY: Record<string, PrivacyDictionary> = {
  vi: {
    badge: 'BẢO VỆ DỮ LIỆU & CHUẨN GDPR QUỐC TẾ',
    titlePrefix: 'Chính Sách Bảo Mật & ',
    titleHighlight: 'Dữ Liệu Cá Nhân',
    subtitle: 'Cam kết bảo mật thông tin tài khoản và dữ liệu giao dịch của trader theo tiêu chuẩn quốc tế GDPR và mã hoá 256-bit cao nhất.',
    readPolicy: 'Đọc Chi Tiết Chính Sách',
    termsLink: 'Điều Khoản Dịch Vụ',
    gdprFeature: 'Chuẩn GDPR Quốc Tế',
    sslFeature: 'Mã Hoá 256-Bit SSL',
    securityTag: 'BẢO MẬT',
    securityVal: '256-Bit SSL',
    standardTag: 'TIÊU CHUẨN',
    standardVal: 'GDPR Quốc Tế',
    docTitle: 'Chính Sách Bảo Mật (Privacy Policy)',
    docSubtitle: 'Tuân thủ tiêu chuẩn bảo vệ dữ liệu cá nhân quốc tế GDPR',
    s1Title: '1. DỮ LIỆU ĐƯỢC THU THẬP',
    s1Desc: 'Chúng tôi thu thập các thông tin bao gồm: họ tên, địa chỉ email, số điện thoại, quốc gia cư trú và thông tin xác minh danh tính (KYC) khi bạn bước vào giai đoạn nhận cấp vốn. Ngoài ra, mã giới thiệu (Affiliate Referral) được lưu trữ qua Cookie nhằm bảo đảm quyền lợi hoa hồng cho đối tác.',
    s2Title: '2. BẢO MẬT & MÃ HÓA THÔNG TIN',
    s2Desc: 'Toàn bộ dữ liệu truyền tải giữa máy tính người dùng và máy chủ ERACEX đều được mã hóa bằng giao thức SSL/TLS 256-bit an toàn cao cấp nhất. Mật khẩu và thông tin nhạy cảm được hash một chiều bằng thuật toán hiện đại.',
    s3Title: '3. KHÔNG CHIA SẺ VỚI BÊN THỨ BA',
    s3Desc: 'ERACEX cam kết không bán, không cho thuê hoặc chuyển nhượng thông tin cá nhân của bạn cho bất kỳ đơn vị quảng cáo nào. Dữ liệu chỉ được cung cấp cho các đối tác công nghệ thanh toán để thực hiện việc chuyển tiền lợi nhuận.',
    s4Title: '4. QUYỀN HẠN CỦA BẠN',
    s4Desc: 'Bạn có toàn quyền yêu cầu xem, chỉnh sửa hoặc xóa vĩnh viễn dữ liệu tài khoản của mình bất kỳ lúc nào bằng cách gửi yêu cầu tới bộ phận phụ trách bảo mật: support@eracex.com.',
  },
  zh: {
    badge: '数据安全与 GDPR 国际隐私合规',
    titlePrefix: '隐私政策与',
    titleHighlight: '个人数据保护',
    subtitle: '依据国际GDPR安全标准，致力于保护您的个人身份、付款记录和模拟交易数据。',
    readPolicy: '查看政策细则',
    termsLink: '服务条款',
    gdprFeature: '国际 GDPR 严苛认证',
    sslFeature: '256-Bit 金融级 SSL 加密',
    securityTag: '安全等级',
    securityVal: '256-Bit SSL',
    standardTag: '合规规范',
    standardVal: 'GDPR 严格验证',
    docTitle: '隐私政策 (Privacy Policy)',
    docSubtitle: '遵循国际通用 GDPR 数据安全与个人隐私保护规范',
    s1Title: '1. 个人数据收集范围',
    s1Desc: '我们收集的信息包括：姓名、电子邮件、联系电话、居住国家/地区以及在进入实盘出金阶段所需的实名身份验证 (KYC) 材料。此外，推荐邀请码 (Affiliate Referral) 通过安全 Cookie 保存以保障合作伙伴的佣金权益。',
    s2Title: '2. 安全性与 256 位金融加密',
    s2Desc: '用户端与 ERACEX 云端服务器之间传输的所有数据均通过金融级 SSL/TLS 256 位高强度加密协议进行加密。密码与敏感认证凭证均通过现代单向哈希算法进行加密存储。',
    s3Title: '3. 严禁向第三方披露或出售',
    s3Desc: 'ERACEX 郑重承诺绝不出售、出租或泄露用户的任何个人信息给任何第三方营销机构。相关数据仅在与受监管的持牌支付机构结算利润分成时进行必要安全交互。',
    s4Title: '4. 您的个人数据权利',
    s4Desc: '您有权随时查阅、更正或申请永久删除您的账户个人档案。如需行使此权利，请通过电子邮件联系我们的隐私合规团队：support@eracex.com。',
  },
  ja: {
    badge: 'データプライバシー & GDPR国際基準準拠',
    titlePrefix: 'プライバシーポリシーおよび',
    titleHighlight: '個人データ保護',
    subtitle: 'GDPRの国際的なセキュリティ基準に基づき、お客様の個人情報、決済記録、シミュレーション取引データの保護に努めています。',
    readPolicy: 'ポリシー詳細を読む',
    termsLink: '利用規約',
    gdprFeature: '国際GDPR基準準拠',
    sslFeature: '256ビットSSL暗号化',
    securityTag: 'セキュリティ',
    securityVal: '256-Bit SSL',
    standardTag: '認証基準',
    standardVal: 'GDPR 認証済',
    docTitle: 'プライバシーポリシー (Privacy Policy)',
    docSubtitle: '国際的なGDPR個人データ保護基準に完全に準拠しています',
    s1Title: '1. 収集する個人情報',
    s1Desc: '収集される情報には、氏名、メールアドレス、電話番号、居住国、および資金提供契約段階で必要となる本人確認（KYC）情報が含まれます。また、パートナーのコミッション権利を保護するため紹介コード（Cookie）が保存されます。',
    s2Title: '2. セキュリティおよび256ビット暗号化',
    s2Desc: 'ユーザーデバイスとERACEXサーバー間のすべての通信は、最高水準の256ビットSSL/TLS暗号化プロトコルにより保護されます。パスワードや機密情報は最新のハッシュアルゴリズムで安全に保護されています。',
    s3Title: '3. 第三者への開示制限',
    s3Desc: 'ERACEXはお客様の個人情報をいかなる広告事業者に対しても販売、貸与、譲渡することはありません。利益出金を円滑に処理するためにのみ、認可された決済パートナーと安全に連携されます。',
    s4Title: '4. お客様の権利',
    s4Desc: 'お客様はいつでもご自身のアカウント情報の確認、修正、または完全な削除を要求する権利を有します。ご希望の場合はサポート窓口（support@eracex.com）までご連絡ください。',
  },
  en: {
    badge: 'DATA PRIVACY & GDPR COMPLIANCE',
    titlePrefix: 'Privacy Policy & ',
    titleHighlight: 'Data Protection',
    subtitle: 'Committed to safeguarding your personal identity, payment records, and simulated trading data under international GDPR security standards.',
    readPolicy: 'Read Policy Details',
    termsLink: 'Terms of Service',
    gdprFeature: 'GDPR Compliant',
    sslFeature: '256-Bit SSL Encryption',
    securityTag: 'SECURITY',
    securityVal: '256-Bit SSL',
    standardTag: 'STANDARD',
    standardVal: 'GDPR Verified',
    docTitle: 'Privacy Policy',
    docSubtitle: 'Compliant with international GDPR data privacy standards',
    s1Title: '1. INFORMATION WE COLLECT',
    s1Desc: 'We collect relevant identity details including name, email address, country of residence, and KYC verification documents when proceeding to funded contracts. Referral cookies ensure proper attribution for affiliate partners.',
    s2Title: '2. SECURITY & 256-BIT ENCRYPTION',
    s2Desc: 'All traffic between your client device and ERACEX infrastructure is encrypted using SSL/TLS 256-bit certificates. Passwords and sensitive identifiers are hashed securely with modern algorithms.',
    s3Title: '3. THIRD-PARTY DISCLOSURE',
    s3Desc: 'ERACEX does not sell, rent, or lease personal user data. Information is only securely exchanged with institutional payment processing partners to execute profit payouts.',
    s4Title: '4. USER DATA RIGHTS',
    s4Desc: 'You retain the full right to inspect, correct, or request permanent deletion of your data at any time by contacting support@eracex.com.',
  },
  es: {
      "badge": "PROTECCIÓN DE DATOS Y CUMPLIMIENTO GDPR",
      "titlePrefix": "Política de Privacidad y ",
      "titleHighlight": "Protección de Datos",
      "subtitle": "Comprometidos a proteger tu identidad personal, registros de pago y datos de trading simulado bajo los estándares internacionales GDPR.",
      "readPolicy": "Leer Detalles de la Política",
      "termsLink": "Términos de Servicio",
      "gdprFeature": "Cumplimiento GDPR",
      "sslFeature": "Cifrado SSL de 256 Bits",
      "securityTag": "SEGURIDAD",
      "securityVal": "SSL 256-Bit",
      "standardTag": "ESTÁNDAR",
      "standardVal": "GDPR Verificado",
      "docTitle": "Política de Privacidad",
      "docSubtitle": "Cumplimiento con los estándares internacionales de privacidad GDPR",
      "s1Title": "1. INFORMACIÓN QUE RECOPILAMOS",
      "s1Desc": "Recopilamos datos de identidad pertinentes como nombre, correo electrónico, país de residencia y documentos KYC para contratos financiados. Las cookies aseguran la correcta atribución a socios afiliados.",
      "s2Title": "2. SEGURIDAD Y CIFRADO DE 256 BITS",
      "s2Desc": "Todo el tráfico entre tu dispositivo y los servidores de ERACEX se cifra mediante certificados SSL/TLS de 256 bits. Las contraseñas se almacenan mediante hash seguro unidireccional.",
      "s3Title": "3. DIVULGACIÓN A TERCEROS",
      "s3Desc": "ERACEX no vende, alquila ni cede datos personales. La información sólo se comparte de forma segura con procesadores de pago para liquidar pagos de beneficios.",
      "s4Title": "4. DERECHOS DEL USUARIO",
      "s4Desc": "Tienes pleno derecho a revisar, rectificar o solicitar la eliminación definitiva de tus datos en cualquier momento escribiendo a support@eracex.com."
  },
  pt: {
      "badge": "PRIVACIDADE DE DADOS E CONFORMIDADE GDPR",
      "titlePrefix": "Política de Privacidade e ",
      "titleHighlight": "Proteção de Dados",
      "subtitle": "Compromisso com a proteção de sua identidade pessoal, dados de pagamento e histórico de trading conforme padrões internacionais GDPR.",
      "readPolicy": "Ler Detalhes da Política",
      "termsLink": "Termos de Serviço",
      "gdprFeature": "Conformidade GDPR",
      "sslFeature": "Criptografia SSL de 256 Bits",
      "securityTag": "SEGURANÇA",
      "securityVal": "SSL 256-Bit",
      "standardTag": "PADRÃO",
      "standardVal": "GDPR Verificado",
      "docTitle": "Política de Privacidade",
      "docSubtitle": "Em total conformidade com as diretrizes internacionais de privacidade GDPR",
      "s1Title": "1. DADOS COLETADOS",
      "s1Desc": "Coletamos nome completo, e-mail, país de residência e documentação KYC necessária para a etapa de financiamento. Cookies de referência garantem a correta atribuição aos afiliados.",
      "s2Title": "2. SEGURANÇA E CRIPTOGRAFIA DE 256 BITS",
      "s2Desc": "Todo o tráfego entre seu dispositivo e os servidores da ERACEX é protegido por criptografia SSL/TLS de 256 bits. Senhas são armazenadas com hash unidirecional seguro.",
      "s3Title": "3. COMPARTILHAMENTO COM TERCEIROS",
      "s3Desc": "A ERACEX não comercializa seus dados pessoais. As informações só são compartilhadas de forma segura com provedores de pagamento para liberação de payouts.",
      "s4Title": "4. SEUS DIREITOS DE PRIVACIDADE",
      "s4Desc": "Você pode solicitar acesso, alteração ou exclusão definitiva de seus dados a qualquer momento pelo e-mail support@eracex.com."
  },
  fr: {
      "badge": "CONFIDENTIALITÉ DES DONNÉES & CONFORMITÉ RGPD",
      "titlePrefix": "Politique de Confidentialité & ",
      "titleHighlight": "Protection des Données",
      "subtitle": "Engagement rigoureux envers la protection de votre identité, de vos transactions et de vos données selon les normes européennes RGPD.",
      "readPolicy": "Lire la Politique Complète",
      "termsLink": "Conditions d’Utilisation",
      "gdprFeature": "Conforme au RGPD",
      "sslFeature": "Chiffrement SSL 256-Bit",
      "securityTag": "SÉCURITÉ",
      "securityVal": "SSL 256-Bit",
      "standardTag": "NORME",
      "standardVal": "Certifié RGPD",
      "docTitle": "Politique de Confidentialité",
      "docSubtitle": "Conforme aux normes internationales de protection des données personnelles RGPD",
      "s1Title": "1. INFORMATIONS RECUEILLIES",
      "s1Desc": "Nous collectons les données d’identité indispensables (nom, e-mail, pays et documents KYC pour le compte financé). Les cookies garantissent la traçabilité des partenaires affiliés.",
      "s2Title": "2. SÉCURITÉ ET CHIFFREMENT 256 BITS",
      "s2Desc": "L’ensemble des échanges avec notre infrastructure est chiffré via le protocole SSL/TLS 256 bits. Les mots de passe sont hachés de manière irréversible.",
      "s3Title": "3. COMMUNICATION À DES TIERS",
      "s3Desc": "ERACEX s’engage à ne jamais vendre ou louer vos données personnelles. Elles ne sont partagées qu’avec nos partenaires de paiement pour l’exécution des virements.",
      "s4Title": "4. VOS DROITS",
      "s4Desc": "Vous disposez d’un droit permanent d’accès, de rectification et d’effacement de vos données personnelles via support@eracex.com."
  },
  de: {
      "badge": "DATENSCHUTZ & DSGVO-KONFORMITÄT",
      "titlePrefix": "Datenschutzrichtlinie & ",
      "titleHighlight": "Datensicherheit",
      "subtitle": "Umfassender Schutz Ihrer persönlichen Identität, Transaktionsdaten und simulierten Handelsaufzeichnungen gemäß DSGVO-Standards.",
      "readPolicy": "Richtlinie Lesen",
      "termsLink": "Nutzungsbedingungen",
      "gdprFeature": "DSGVO-Konform",
      "sslFeature": "256-Bit-SSL-Verschlüsselung",
      "securityTag": "SICHERHEIT",
      "securityVal": "256-Bit SSL",
      "standardTag": "STANDARD",
      "standardVal": "DSGVO Geprüft",
      "docTitle": "Datenschutzerklärung",
      "docSubtitle": "Entspricht den strengen europäischen Datenschutzrichtlinien (DSGVO)",
      "s1Title": "1. ERHOBENE DATEN",
      "s1Desc": "Wir erheben Name, E-Mail-Adresse, Wohnsitzland und KYC-Dokumente für die Aktivierung des geförderten Kontos. Cookies dienen der korrekten Zuordnung von Empfehlungen.",
      "s2Title": "2. SICHERHEIT & 256-BIT-VERSCHLÜSSELUNG",
      "s2Desc": "Jegliche Kommunikation mit ERACEX-Servern wird mittels SSL/TLS 256-Bit verschlüsselt. Kennwörter werden sicher nach neuesten Verfahren gehasht.",
      "s3Title": "3. WEITERGABE AN DRITTE",
      "s3Desc": "ERACEX verkauft oder vermietet Ihre Daten zu keinem Zeitpunkt. Eine Weitergabe erfolgt ausschließlich an lizensierte Zahlungsdienstleister zur Abwicklung von Gewinnauszahlungen.",
      "s4Title": "4. IHRE RECHTE",
      "s4Desc": "Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder vollständige Löschung Ihrer Daten per E-Mail an support@eracex.com."
  },
  it: {
      "badge": "PRIVACY DEI DATI E CONFORMITÀ GDPR",
      "titlePrefix": "Informativa sulla Privacy & ",
      "titleHighlight": "Protezione dei Dati",
      "subtitle": "Impegno totale per salvaguardare identità, pagamenti e dati di trading simulato in conformità con gli standard internazionali GDPR.",
      "readPolicy": "Leggi l’Informativa",
      "termsLink": "Termini di Servizio",
      "gdprFeature": "Conforme al GDPR",
      "sslFeature": "Crittografia SSL 256-Bit",
      "securityTag": "SICUREZZA",
      "securityVal": "SSL 256-Bit",
      "standardTag": "STANDARD",
      "standardVal": "Verificato GDPR",
      "docTitle": "Informativa sulla Privacy",
      "docSubtitle": "Conforme agli standard internazionali di protezione dei dati personali GDPR",
      "s1Title": "1. INFORMAZIONI RACCOLTE",
      "s1Desc": "Raccogliamo nome, e-mail, paese di residenza e documentazione KYC per i contratti dei conti finanziati. I cookie garantiscono la corretta attribuzione dei partner affiliati.",
      "s2Title": "2. SICUREZZA E CRITTOGRAFIA A 256 BIT",
      "s2Desc": "Tutte le comunicazioni con i server ERACEX sono protette da certificati SSL/TLS a 256 bit. Le password sono memorizzate tramite hash crittografico sicuro.",
      "s3Title": "3. DIVULGAZIONE A TERZI",
      "s3Desc": "ERACEX non vende né cede a terzi i tuoi dati personali. Le informazioni sono condivise solo con processori di pagamento per erogare i profitti maturati.",
      "s4Title": "4. I TUOI DIRITTI",
      "s4Desc": "Hai il pieno diritto di accedere, rettificare o richiedere la cancellazione definitiva dei tuoi dati scrivendo a support@eracex.com."
  },
  pl: {
      "badge": "OCHRONA DANYCH ORAZ ZGODNOŚĆ Z RODO",
      "titlePrefix": "Polityka Prywatności i ",
      "titleHighlight": "Ochrona Danych",
      "subtitle": "Pełne zaangażowanie w ochronę tożsamości, danych płatności oraz wyników symulowanego tradingu zgodnie ze standardami RODO.",
      "readPolicy": "Czytaj Politykę",
      "termsLink": "Regulamin Serwisu",
      "gdprFeature": "Zgodność z RODO",
      "sslFeature": "Szyfrowanie 256-Bit SSL",
      "securityTag": "BEZPIECZEŃSTWO",
      "securityVal": "256-Bit SSL",
      "standardTag": "STANDARD",
      "standardVal": "Zgodność z RODO",
      "docTitle": "Polityka Prywatności",
      "docSubtitle": "Zgodna z europejskimi standardami ochrony danych osobowych RODO",
      "s1Title": "1. GROMADZONE DANE",
      "s1Desc": "Zbieramy imię i nazwisko, adres e-mail, kraj zamieszkania oraz dokumenty weryfikacji tożsamości KYC do umów o konto ufundowane. Pliki cookie gwarantują naliczenie prowizji partnerom.",
      "s2Title": "2. BEZPIECZEŃSTWO I SZYFROWANIE 256-BITOWE",
      "s2Desc": "Cały ruch sieciowy z infrastrukturą ERACEX zabezpieczony jest 256-bitowymi certyfikatami SSL/TLS. Hasła są bezpiecznie hashowane.",
      "s3Title": "3. UDOSTĘPNIANIE DANYCH STRONOM TRZECIM",
      "s3Desc": "ERACEX nie odsprzedaje danych osobowych. Dane przekazywane są wyłącznie licencjonowanym operatorom płatniczym w celu realizacji wypłat zysków.",
      "s4Title": "4. PRAWA UŻYTKOWNIKA",
      "s4Desc": "W każdej chwili przysługuje Ci prawo do wglądu, modyfikacji lub żądania usunięcia swoich danych poprzez kontakt: support@eracex.com."
  },
  tr: {
      "badge": "VERİ GİZLİLİĞİ VE GDPR UYUMLULUĞU",
      "titlePrefix": "Gizlilik Politikası ve ",
      "titleHighlight": "Kişisel Verilerin Korunması",
      "subtitle": "Kimlik bilgileriniz, ödeme kayıtlarınız ve simüle edilmiş işlem verileriniz uluslararası GDPR güvenlik standartları altında tam koruma altındadır.",
      "readPolicy": "Politikayı İnceleyin",
      "termsLink": "Hizmet Şartları",
      "gdprFeature": "GDPR Uyumlu",
      "sslFeature": "256-Bit SSL Şifreleme",
      "securityTag": "GÜVENLİK",
      "securityVal": "256-Bit SSL",
      "standardTag": "STANDART",
      "standardVal": "GDPR Onaylı",
      "docTitle": "Gizlilik Politikası",
      "docSubtitle": "Uluslararası GDPR kişisel veri koruma standartlarına tam uyumluluk",
      "s1Title": "1. TOPLANAN BİLGİLER",
      "s1Desc": "Ad, e-posta, ikamet ülkesi ve fonlanan hesaba geçişte gerekli KYC doğrulama belgelerini topluyoruz. Çerezler ortaklık yönlendirmelerinin doğrulanması için kullanılır.",
      "s2Title": "2. GÜVENLİK VE 256-BİT ŞİFRELEME",
      "s2Desc": "Cihazınız ile ERACEX altyapısı arasındaki tüm veri akışı 256-bit SSL/TLS protokolüyle şifrelenir. Şifreler tek yönlü modern algoritmalarla korunur.",
      "s3Title": "3. ÜÇÜNCÜ TARAFLARLA PAYLAŞIM",
      "s3Desc": "ERACEX kullanıcı verilerini satmaz veya kiralamaz. Bilgiler yalnızca kâr çekimlerinin tamamlanabilmesi için ödeme ortaklarıyla güvenle paylaşılır.",
      "s4Title": "4. KULLANICI HAKLARI",
      "s4Desc": "Verilerinizi inceleme, güncelleme veya kalıcı olarak silinmesini talep etme hakkınız saklıdır: support@eracex.com."
  },
  id: {
      "badge": "PRIVASI DATA & KEPATUHAN GDPR",
      "titlePrefix": "Kebijakan Privasi & ",
      "titleHighlight": "Perlindungan Data Pribadi",
      "subtitle": "Berkomitmen menjaga keamanan identitas pribadi, riwayat pembayaran, dan data trading simulasi Anda sesuai standar GDPR internasional.",
      "readPolicy": "Baca Detail Kebijakan",
      "termsLink": "Syarat & Ketentuan",
      "gdprFeature": "Sesuai Standar GDPR",
      "sslFeature": "Enkripsi SSL 256-Bit",
      "securityTag": "KEAMANAN",
      "securityVal": "256-Bit SSL",
      "standardTag": "STANDAR",
      "standardVal": "Terverifikasi GDPR",
      "docTitle": "Kebijakan Privasi",
      "docSubtitle": "Kepatuhan penuh terhadap standar privasi data internasional GDPR",
      "s1Title": "1. DATA YANG KAMI KUMPULKAN",
      "s1Desc": "Kami mengumpulkan nama, email, negara domisili, dan dokumen KYC untuk penerbitan akun terdanai. Cookie digunakan untuk atribusi rujukan mitra afiliasi.",
      "s2Title": "2. KEAMANAN & ENKRIPSI 256-BIT",
      "s2Desc": "Seluruh lalu lintas data antara perangkat Anda dan server ERACEX diamankan dengan enkripsi SSL/TLS 256-bit. Kata sandi di-hash dengan algoritma modern.",
      "s3Title": "3. PENGUNGKAPAN KEPADA PIHAK KETIGA",
      "s3Desc": "ERACEX tidak pernah menjual atau menyewakan data pribadi Anda. Data hanya diteruskan ke mitra pemroses pembayaran untuk memproses penarikan keuntungan.",
      "s4Title": "4. HAK PENGGUNA",
      "s4Desc": "Anda berhak melihat, memperbaiki, atau meminta penghapusan permanen data Anda kapan saja melalui support@eracex.com."
  },
  th: {
      "badge": "ความเป็นส่วนตัวของข้อมูลและมาตรฐาน GDPR",
      "titlePrefix": "นโยบายความเป็นส่วนตัวและ ",
      "titleHighlight": "การคุ้มครองข้อมูลส่วนบุคคล",
      "subtitle": "มุ่งมั่นปกป้องข้อมูลประจำตัว บันทึกการชำระเงิน และข้อมูลการเทรดจำลองของคุณภายใต้มาตรฐานความปลอดภัยระดับสากล GDPR",
      "readPolicy": "อ่านรายละเอียดนโยบาย",
      "termsLink": "ข้อกำหนดการให้บริการ",
      "gdprFeature": "สอดคล้องตามมาตรฐาน GDPR",
      "sslFeature": "การเข้ารหัส SSL 256-Bit",
      "securityTag": "ความปลอดภัย",
      "securityVal": "SSL 256-Bit",
      "standardTag": "มาตรฐานสากล",
      "standardVal": "ได้รับการรับรอง GDPR",
      "docTitle": "นโยบายความเป็นส่วนตัว",
      "docSubtitle": "ปฏิบัติตามมาตรฐานการปกป้องข้อมูลส่วนบุคคลระดับสากล GDPR",
      "s1Title": "1. ข้อมูลที่เราจัดเก็บ",
      "s1Desc": "เราเก็บรวบรวมชื่อ-นามสกุล อีเมล ประเทศที่พำนัก และเอกสารยืนยันตัวตน KYC เมื่อผ่านเข้าสู่สัญญาพอร์ตทุน คุกกี้ใช้เพื่อยืนยันสิทธิ์ค่าคอมมิชชันของพันธมิตร",
      "s2Title": "2. ความปลอดภัยและการเข้ารหัส 256 บิต",
      "s2Desc": "การส่งข้อมูลทั้งหมดระหว่างอุปกรณ์ของคุณและเซิร์ฟเวอร์ ERACEX ได้รับการเข้ารหัสผ่าน SSL/TLS 256 บิต รหัสผ่านถูกแฮชอย่างปลอดภัย",
      "s3Title": "3. การไม่เปิดเผยข้อมูลแก่บุคคลภายนอก",
      "s3Desc": "ERACEX ไม่มีนโยบายขายหรือให้เช่าข้อมูลส่วนตัว ข้อมูลจะถูกส่งต่อให้ผู้ประมวลผลการชำระเงินเพื่อดำเนินการโอนเงินกำไรเท่านั้น",
      "s4Title": "4. สิทธิ์ของคุณในฐานะผู้ใช้",
      "s4Desc": "คุณมีสิทธิ์ขอตรวจสอบ แก้ไข หรือร้องขอให้ลบข้อมูลส่วนตัวของคุณอย่างถาวรได้ตลอดเวลาผ่าน support@eracex.com"
  },
  fil: {
      "badge": "DATA PRIVACY AT PAGSUNOD SA GDPR",
      "titlePrefix": "Patakaran sa Privacy at ",
      "titleHighlight": "Proteksyon ng Datos",
      "subtitle": "Nangangakong poprotektahan ang iyong personal na pagkakakilanlan, mga rekord sa pagbabayad, at data sa trading alinsunod sa GDPR.",
      "readPolicy": "Basahin ang Detalye",
      "termsLink": "Mga Tuntunin ng Serbisyo",
      "gdprFeature": "Sumusunod sa GDPR",
      "sslFeature": "256-Bit SSL Encryption",
      "securityTag": "SEGURIDAD",
      "securityVal": "256-Bit SSL",
      "standardTag": "ESTANDARDE",
      "standardVal": "GDPR Verified",
      "docTitle": "Patakaran sa Privacy",
      "docSubtitle": "Alinsunod sa mga internasyonal na pamantayan ng GDPR",
      "s1Title": "1. MGA IMPORMASYONG KINOKOLEKTA",
      "s1Desc": "Kinokolekta namin ang pangalan, email, bansa, at mga dokumento ng KYC verification para sa funded accounts. Ang cookies ay para sa attribution ng referral.",
      "s2Title": "2. SEGURIDAD AT 256-BIT ENCRYPTION",
      "s2Desc": "Lahat ng trapiko sa pagitan ng iyong device at ERACEX ay naka-encrypt gamit ang SSL/TLS 256-bit certificates. Ang mga password ay ligtas na naka-hash.",
      "s3Title": "3. PAGLALAHAD SA THIRD-PARTY",
      "s3Desc": "Hindi nagbebenta o nagpapaupa ang ERACEX ng personal na data. Ibinabahagi lamang ito sa mga payment gateway partners upang maipadala ang payouts.",
      "s4Title": "4. MGA KARAPATAN MO",
      "s4Desc": "May karapatan kang humiling na suriin, itama, o burahin ang iyong data anumang oras sa pamamagitan ng support@eracex.com."
  },
  hi: {
      "badge": "डेटा गोपनीयता और GDPR अनुपालन",
      "titlePrefix": "गोपनीयता नीति और ",
      "titleHighlight": "डेटा सुरक्षा",
      "subtitle": "अंतरराष्ट्रीय GDPR सुरक्षा मानकों के तहत आपकी पहचान, भुगतान रिकॉर्ड और ट्रेडिंग डेटा की सुरक्षा के लिए प्रतिबद्ध।",
      "readPolicy": "नीति विवरण पढ़ें",
      "termsLink": "सेवा की शर्तें",
      "gdprFeature": "GDPR अनुपालित",
      "sslFeature": "256-बिट SSL एन्क्रिप्शन",
      "securityTag": "सुरक्षा",
      "securityVal": "256-बिट SSL",
      "standardTag": "मानक",
      "standardVal": "GDPR सत्यापित",
      "docTitle": "गोपनीयता नीति",
      "docSubtitle": "अंतरराष्ट्रीय डेटा गोपनीयता मानकों (GDPR) के अनुसार अनुपालन",
      "s1Title": "1. हमारे द्वारा एकत्रित जानकारी",
      "s1Desc": "हम नाम, ईमेल, निवास का देश और फंडेड अनुबंधों के लिए आवश्यक KYC दस्तावेज़ एकत्र करते हैं। कुकीज़ का उपयोग रेफरल कमीशन सुनिश्चित करने के लिए किया जाता है।",
      "s2Title": "2. सुरक्षा और 256-बिट एन्क्रिप्शन",
      "s2Desc": "आपके डिवाइस और ERACEX सर्वर के बीच सारा डेटा 256-बिट SSL/TLS प्रोटोकॉल के साथ सुरक्षित होता है। पासवर्ड आधुनिक एल्गोरिदम से हैश किए जाते हैं।",
      "s3Title": "3. तृतीय-पक्ष प्रकटीकरण",
      "s3Desc": "ERACEX कभी भी उपयोगकर्ता डेटा बेचता या किराए पर नहीं देता है। डेटा केवल लाभ पेआउट संसाधित करने के लिए भुगतान भागीदारों के साथ साझा किया जाता है।",
      "s4Title": "4. उपयोगकर्ता अधिकार",
      "s4Desc": "आपको support@eracex.com पर संपर्क करके कभी भी अपने व्यक्तिगत डेटा को देखने, सही करने या हटाने का पूरा अधिकार है।"
  },
  ko: {
      "badge": "개인정보 보호 및 유럽 GDPR 준수",
      "titlePrefix": "개인정보처리방침 및 ",
      "titleHighlight": "데이터 보호 규정",
      "subtitle": "국제 표준 GDPR 및 256비트 암호화 프로토콜에 따라 트레이더의 신원 정보, 결제 기록 및 매매 데이터를 철저히 보호합니다.",
      "readPolicy": "전문 확인하기",
      "termsLink": "이용약관",
      "gdprFeature": "글로벌 GDPR 준수",
      "sslFeature": "256비트 SSL 강력 암호화",
      "securityTag": "보안 등급",
      "securityVal": "256-Bit SSL",
      "standardTag": "준수 표준",
      "standardVal": "GDPR 인증",
      "docTitle": "개인정보처리방침 (Privacy Policy)",
      "docSubtitle": "유럽 연합 일반 데이터 보호 규칙(GDPR) 가이드라인 완벽 준수",
      "s1Title": "1. 수집하는 개인정보 항목",
      "s1Desc": "회원가입 및 펀딩 계약 진행 시 성명, 이메일 주소, 거주 국가 및 KYC 본인 인증 서류를 수집합니다. 추천인 쿠키는 파트너 커미션 정산을 위해 활용됩니다.",
      "s2Title": "2. 정보 보안 및 256비트 암호화",
      "s2Desc": "사용자 기기와 ERACEX 서버 간 모든 통신은 최고 등급 SSL/TLS 256비트로 암호화됩니다. 비밀번호는 단방향 해시 알고리즘으로 안전하게 저장됩니다.",
      "s3Title": "3. 제3자 제공 금지 원칙",
      "s3Desc": "ERACEX는 회원의 동의 없이 개인정보를 외부에 판매하거나 임대하지 않습니다. 오직 수익금 지급 목적에 한해 공인 결제 대행사에만 안전하게 제공됩니다.",
      "s4Title": "4. 정보주체의 권리 행사",
      "s4Desc": "회원은 언제든지 본인의 개인정보 열람, 정정 또는 영구 삭제를 요청할 수 있으며 support@eracex.com으로 문의하시면 즉시 조치됩니다."
  },
  ru: {
      "badge": "КОНФИДЕНЦИАЛЬНОСТЬ ДАННЫХ И GDPR",
      "titlePrefix": "Политика конфиденциальности и ",
      "titleHighlight": "Защита данных",
      "subtitle": "Надежная защита вашей персональной информации, платежных записей и торговых данных в соответствии с регламентом GDPR.",
      "readPolicy": "Читать политику",
      "termsLink": "Условия обслуживания",
      "gdprFeature": "Соответствие GDPR",
      "sslFeature": "256-битное SSL-шифрование",
      "securityTag": "БЕЗОПАСНОСТЬ",
      "securityVal": "256-Bit SSL",
      "standardTag": "СТАНДАРТ",
      "standardVal": "GDPR Verified",
      "docTitle": "Политика конфиденциальности",
      "docSubtitle": "Соответствует международным стандартам защиты персональных данных GDPR",
      "s1Title": "1. СОБИРАЕМАЯ ИНФОРМАЦИЯ",
      "s1Desc": "Мы собираем имя, адрес электронной почты, страну проживания и документы KYC для финансируемых аккаунтов. Файлы cookie используются для реферальной атрибуции.",
      "s2Title": "2. БЕЗОПАСНОСТЬ И 256-БИТНОЕ ШИФРОВАНИЕ",
      "s2Desc": "Весь трафик между вашим устройством и ERACEX защищен сертификатами SSL/TLS 256 бит. Пароли надежно хешируются современными методами.",
      "s3Title": "3. ПЕРЕДАЧА ДАННЫХ ТРЕТЬИМ ЛИЦАМ",
      "s3Desc": "ERACEX не продает и не сдает в аренду личные данные. Данные передаются платежным провайдерам исключительно для проведения выплат прибыли.",
      "s4Title": "4. ВАШИ ПРАВА",
      "s4Desc": "Вы имеете полное право запросить просмотр, изменение или удаление своих данных в любое время через support@eracex.com."
  },
  ar: {
      "badge": "خصوصية البيانات والامتثال لـ GDPR",
      "titlePrefix": "سياسة الخصوصية و ",
      "titleHighlight": "حماية البيانات الشخصية",
      "subtitle": "التزام كامل بحماية هويتك الشخصية، سجلات الدفع، وبيانات التداول التجريبية وفقاً لمعايير GDPR الدولية.",
      "readPolicy": "قراءة تفاصيل السياسة",
      "termsLink": "شروط الخدمة",
      "gdprFeature": "متوافق مع GDPR",
      "sslFeature": "تشفير 256-بت SSL",
      "securityTag": "الأمان",
      "securityVal": "SSL 256-Bit",
      "standardTag": "المعيار",
      "standardVal": "معتمد GDPR",
      "docTitle": "سياسة الخصوصية",
      "docSubtitle": "متوافقة مع معايير حماية البيانات الشخصية الدولية GDPR",
      "s1Title": "1. المعلومات التي نجمعها",
      "s1Desc": "نجمع الاسم، البريد الإلكتروني، بلد الإقامة، ووثائق التحقق من الهوية (KYC) للحسابات الممولة. ملفات تعريف الارتباط تحفظ حقوق الإحالة.",
      "s2Title": "2. الأمان والتشفير المتقدم 256-بت",
      "s2Desc": "يتم تشفير كافة البيانات المتبادلة مع خوادم ERACEX عبر بروتوكولات SSL/TLS 256-بت. كلمات المرور مشفرة بخوارزميات حديثة آمنة.",
      "s3Title": "3. عدم مشاركة البيانات مع أطراف ثالثة",
      "s3Desc": "تتعهد ERACEX بعدم بيع أو تأجير بيانات المستخدمين. تتم مشاركة البيانات فقط مع بوابات الدفع المعتمدة لتنفيذ سحب الأرباح.",
      "s4Title": "4. حقوق المستخدم",
      "s4Desc": "يحق لك طلب مراجعة بياناتك أو تعديلها أو حذفها نهائياً في أي وقت عبر التواصل مع support@eracex.com."
  },
  nl: {
      "badge": "GEGEVENSBESCHERMING & AVG/GDPR NALEVING",
      "titlePrefix": "Privacybeleid & ",
      "titleHighlight": "Gegevensbescherming",
      "subtitle": "Volledige toewijding aan de bescherming van uw identiteit, betalingsgegevens en handelsdata volgens internationale AVG/GDPR-normen.",
      "readPolicy": "Lees Privacybeleid",
      "termsLink": "Algemene Voorwaarden",
      "gdprFeature": "AVG/GDPR Conform",
      "sslFeature": "256-Bit SSL-Encryptie",
      "securityTag": "BEVEILIGING",
      "securityVal": "256-Bit SSL",
      "standardTag": "STANDAARD",
      "standardVal": "AVG Gecertificeerd",
      "docTitle": "Privacybeleid",
      "docSubtitle": "In overeenstemming met de Europese Algemene Verordening Gegevensbescherming (AVG/GDPR)",
      "s1Title": "1. GEGEVENS DIE WIJ VERZAMELEN",
      "s1Desc": "Wij verzamelen naam, e-mail, woonland en KYC-verificatiedocumenten voor gefinancierde rekeningen. Cookies garanderen juiste partnerattributie.",
      "s2Title": "2. BEVEILIGING & 256-BIT ENCRYPTIE",
      "s2Desc": "Al het dataverkeer tussen uw apparaat en ERACEX is versleuteld met 256-bit SSL/TLS-certificaten. Wachtwoorden worden veilig gehasht.",
      "s3Title": "3. DELEN MET DERDEN",
      "s3Desc": "ERACEX verkoopt of verhuurt uw gegevens nooit. Gegevens worden alleen gedeeld met betalingsverwerkers voor het overmaken van winst.",
      "s4Title": "4. UW RECHTEN",
      "s4Desc": "U heeft het recht uw gegevens in te zien, te wijzigen of permanent te laten verwijderen via support@eracex.com."
  },
};

export default function PrivacyPage() {
  const { t, currentLang } = useLanguage();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  return (
    <div className="pb-20 app-bg app-text w-full">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER WITH 3D ILLUSTRATION */}
      <PageHeroBanner
        badgeText={d.badge}
        badgeIcon={<Lock className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={
          <>
            {d.titlePrefix}<span className="text-[#c68a00] dark:text-[#ffc501]">{d.titleHighlight}</span>
          </>
        }
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.footer.privacy },
        ]}
        primaryCta={{
          label: d.readPolicy,
          href: '#privacy-content',
          icon: <Lock className="w-5 h-5 text-[#f6bf4a]" />,
        }}
        secondaryCta={{
          label: d.termsLink,
          href: '/terms',
        }}
        features={[
          { icon: <ShieldCheck className="w-4 h-4" />, text: d.gdprFeature },
          { icon: <Lock className="w-4 h-4" />, text: d.sslFeature },
        ]}
        imageSrc="/images/banner-legal-3d.jpg"
        imageAlt="ERACEX Data Privacy, Security & Compliance"
        floatingBadge1={{
          tag: d.securityTag,
          value: d.securityVal,
          icon: <Lock className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.standardTag,
          value: d.standardVal,
          icon: <ShieldCheck className="w-5 h-5" />,
        }}
      />

      {/* 2. DOCUMENT BODY */}
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8" id="privacy-content">
        <div className="max-w-5xl mx-auto p-8 sm:p-14 rounded-3xl border app-border-gold app-surface shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold app-text">
                {d.docTitle}
              </h2>
              <p className="text-xs font-mono app-text-muted mt-1">
                {d.docSubtitle}
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
          </div>
        </div>
      </div>
    </div>
  );
}
