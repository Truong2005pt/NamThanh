'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Lock, CreditCard, Check, ShieldAlert } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { getStoredRefCode } from '@/lib/referral';
import { PlanProduct, formatUsd } from '@/config/plans';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: PlanProduct;
  sizeIndex: number;
}

export interface CheckoutTextItem {
  title: string;
  subtitle: string;
  program: string;
  size: string;
  fee: string;
  split: string;
  nameLabel: string;
  emailLabel: string;
  promoLabel: string;
  paymentLabel: string;
  card: string;
  paypal: string;
  submit: string;
  consentPart1: string;
  termsLink: string;
  consentPart2: string;
  fundedTermsLink: string;
  consentPart3: string;
  privacyLink: string;
  consentPart4: string;
  error: string;
  successTitle: string;
  successDesc: string;
  orderId: string;
  close: string;
}

const TEXT: Record<string, CheckoutTextItem> = {
  "vi": {
    "title": "Hoàn Tất Đăng Ký",
    "subtitle": "Kiểm tra gói đã chọn, sau đó xác nhận các điều khoản để tiếp tục.",
    "program": "Chương trình",
    "size": "Quy mô tài khoản",
    "fee": "Phí tham gia",
    "split": "Chia lợi nhuận",
    "nameLabel": "Họ và tên *",
    "emailLabel": "Địa chỉ email *",
    "promoLabel": "Mã giới thiệu / khuyến mãi (không bắt buộc)",
    "paymentLabel": "Phương thức thanh toán",
    "card": "Thẻ thanh toán (Visa / MC)",
    "paypal": "PayPal",
    "submit": "Thanh toán",
    "consentPart1": "Tôi đã đọc, hiểu rõ và đồng ý với ",
    "termsLink": "Điều Khoản & Điều Kiện",
    "consentPart2": ", ",
    "fundedTermsLink": "Quy Định Tài Khoản Cấp Vốn",
    "consentPart3": ", và ",
    "privacyLink": "Chính Sách Quyền Riêng Tư",
    "consentPart4": ". Tôi xác nhận rằng mọi dịch vụ giao dịch là mô phỏng giả lập và phí tham gia tuyệt đối không hoàn lại khi thông tin đăng nhập đã được cấp.",
    "error": "Vui lòng tích vào ô xác nhận đồng ý các điều khoản trước khi thanh toán.",
    "successTitle": "Đã nhận đơn hàng thành công",
    "successDesc": "Chúng tôi đã ghi nhận đơn đăng ký của bạn. Thông tin truy cập tài khoản giao dịch sẽ được gửi qua email ngay khi thanh toán được xác nhận.",
    "orderId": "Mã đơn hàng",
    "close": "Đóng"
  },
  "en": {
    "title": "Complete Registration",
    "subtitle": "Review your package, then confirm the terms to continue.",
    "program": "Program",
    "size": "Account size",
    "fee": "Fee",
    "split": "Profit split",
    "nameLabel": "Full name *",
    "emailLabel": "Email address *",
    "promoLabel": "Referral / promo code (optional)",
    "paymentLabel": "Payment method",
    "card": "Card",
    "paypal": "PayPal",
    "submit": "Pay",
    "consentPart1": "I have read, understood, and agree to the ",
    "termsLink": "Terms & Conditions",
    "consentPart2": ", ",
    "fundedTermsLink": "Funded Account Terms",
    "consentPart3": ", and ",
    "privacyLink": "Privacy Policy",
    "consentPart4": ". I acknowledge that all trading services are simulated and fees are strictly non-refundable once account access is granted.",
    "error": "Please tick the box to confirm that you agree to the terms before paying.",
    "successTitle": "Order received",
    "successDesc": "We have received your order. Account access details are sent to your email once payment is confirmed.",
    "orderId": "Order ID",
    "close": "Close"
  },
  "zh": {
    "title": "完成考核报名",
    "subtitle": "核对您所选的考核方案与资金规模，确认条款后即可进入安全结算。",
    "program": "考核方案",
    "size": "账户资金规模",
    "fee": "报名费用",
    "split": "利润分成",
    "nameLabel": "真实姓名 *",
    "emailLabel": "电子邮箱地址 *",
    "promoLabel": "推荐码 / 优惠码（选填）",
    "paymentLabel": "支付方式",
    "card": "信用卡 / 借记卡",
    "paypal": "PayPal",
    "submit": "立即支付",
    "consentPart1": "我已完整阅读、理解并同意遵守 ",
    "termsLink": "服务条款与规则",
    "consentPart2": "、",
    "fundedTermsLink": "注资实盘账户条款",
    "consentPart3": " 以及 ",
    "privacyLink": "隐私政策",
    "consentPart4": "。我知悉所有交易均为模拟环境，一旦账户凭证发放，相关费用概不退还。",
    "error": "请在付款前勾选复选框，确认您同意上述条款与协议。",
    "successTitle": "已成功接收订单",
    "successDesc": "我们已收到您的报名申请。支付确认完成后，交易账户登录信息将立即发送至您的注册邮箱。",
    "orderId": "订单编号",
    "close": "关闭窗口"
  },
  "ja": {
    "title": "登録手続きの完了",
    "subtitle": "選択したプラン内容をご確認の上、利用規約に同意して決済に進んでください。",
    "program": "選択プログラム",
    "size": "口座残高規模",
    "fee": "参加手数料",
    "split": "利益分配率",
    "nameLabel": "氏名（フルネーム）*",
    "emailLabel": "メールアドレス *",
    "promoLabel": "紹介コード / プロモコード（任意）",
    "paymentLabel": "お支払い方法",
    "card": "クレジットカード / デビットカード",
    "paypal": "PayPal",
    "submit": "支払いを完了する",
    "consentPart1": "私は ",
    "termsLink": "利用規約",
    "consentPart2": "、",
    "fundedTermsLink": "資金提供口座規約",
    "consentPart3": "、および ",
    "privacyLink": "プライバシーポリシー",
    "consentPart4": " を熟読し、理解した上で同意します。すべての取引はシミュレーション環境で行われ、口座情報発行後の返金は一切不可であることを承諾します。",
    "error": "お支払い前に規約への同意チェックボックスにチェックを入れてください。",
    "successTitle": "ご注文を受け付けました",
    "successDesc": "注文を受け付けました。決済完了後、口座アクセス情報が登録メールアドレス宛に自動送信されます。",
    "orderId": "注文ID",
    "close": "閉じる"
  },
  "es": {
    "title": "Completar Registro",
    "subtitle": "Revise su paquete y confirme los términos para continuar.",
    "program": "Programa",
    "size": "Tamaño de cuenta",
    "fee": "Tarifa",
    "split": "División de ganancias",
    "nameLabel": "Nombre completo *",
    "emailLabel": "Correo electrónico *",
    "promoLabel": "Código de referido / promocional (opcional)",
    "paymentLabel": "Método de pago",
    "card": "Tarjeta",
    "paypal": "PayPal",
    "submit": "Pagar",
    "consentPart1": "He leído, comprendido y acepto los ",
    "termsLink": "Términos y Condiciones",
    "consentPart2": ", los ",
    "fundedTermsLink": "Términos de Cuentas Fondeadas",
    "consentPart3": " y la ",
    "privacyLink": "Política de Privacidad",
    "consentPart4": ". Reconozco que todos los servicios de trading son simulados y las tarifas no son reembolsables una vez otorgado el acceso.",
    "error": "Por favor marque la casilla para confirmar que acepta los términos antes de pagar.",
    "successTitle": "Pedido recibido",
    "successDesc": "Hemos recibido su pedido. Los datos de acceso se enviarán a su correo una vez confirmado el pago.",
    "orderId": "ID del Pedido",
    "close": "Cerrar"
  },
  "pt": {
    "title": "Concluir Cadastro",
    "subtitle": "Revise o pacote selecionado e confirme os termos para continuar.",
    "program": "Programa",
    "size": "Tamanho da conta",
    "fee": "Taxa",
    "split": "Divisão de lucros",
    "nameLabel": "Nome completo *",
    "emailLabel": "Endereço de e-mail *",
    "promoLabel": "Código de indicação / cupom (opcional)",
    "paymentLabel": "Método de pagamento",
    "card": "Cartão",
    "paypal": "PayPal",
    "submit": "Pagar",
    "consentPart1": "Li, compreendi e concordo com os ",
    "termsLink": "Termos e Condições",
    "consentPart2": ", os ",
    "fundedTermsLink": "Termos de Contas Financiadas",
    "consentPart3": " e a ",
    "privacyLink": "Política de Privacidade",
    "consentPart4": ". Reconheço que todos os serviços são simulados e as taxas não são reembolsáveis após a liberação do acesso à conta.",
    "error": "Por favor, marque a caixa confirmando que concorda com os termos antes de pagar.",
    "successTitle": "Pedido recebido",
    "successDesc": "Recebemos seu pedido. Os dados de acesso serão enviados para seu e-mail assim que o pagamento for confirmado.",
    "orderId": "ID do Pedido",
    "close": "Fechar"
  },
  "fr": {
    "title": "Finaliser l'Inscription",
    "subtitle": "Vérifiez votre forfait, puis confirmez les conditions pour continuer.",
    "program": "Programme",
    "size": "Taille du compte",
    "fee": "Frais",
    "split": "Partage des profits",
    "nameLabel": "Nom complet *",
    "emailLabel": "Adresse e-mail *",
    "promoLabel": "Code de parrainage / promo (facultatif)",
    "paymentLabel": "Moyen de paiement",
    "card": "Carte bancaire",
    "paypal": "PayPal",
    "submit": "Payer",
    "consentPart1": "J'ai lu, compris et accepte les ",
    "termsLink": "Conditions Générales",
    "consentPart2": ", les ",
    "fundedTermsLink": "Conditions du Compte Financé",
    "consentPart3": " et la ",
    "privacyLink": "Politique de Confidentialité",
    "consentPart4": ". Je reconnais que tous les services sont simulés et que les frais ne sont pas remboursables dès l'attribution des accès.",
    "error": "Veuillez cocher la case confirmant votre acceptation des conditions avant de payer.",
    "successTitle": "Commande reçue",
    "successDesc": "Nous avons bien reçu votre commande. Vos identifiants de compte vous seront envoyés par e-mail dès confirmation du paiement.",
    "orderId": "N° de commande",
    "close": "Fermer"
  },
  "de": {
    "title": "Registrierung Abschließen",
    "subtitle": "Überprüfen Sie Ihr Paket und bestätigen Sie die Bedingungen, um fortzufahren.",
    "program": "Programm",
    "size": "Kontogröße",
    "fee": "Gebühr",
    "split": "Gewinnbeteiligung",
    "nameLabel": "Vollständiger Name *",
    "emailLabel": "E-Mail-Adresse *",
    "promoLabel": "Empfehlungs- / Gutscheincode (optional)",
    "paymentLabel": "Zahlungsmethode",
    "card": "Kreditkarte",
    "paypal": "PayPal",
    "submit": "Bezahlen",
    "consentPart1": "Ich habe die ",
    "termsLink": "Allgemeinen Geschäftsbedingungen",
    "consentPart2": ", die ",
    "fundedTermsLink": "Bedingungen für finanzierte Konten",
    "consentPart3": " und die ",
    "privacyLink": "Datenschutzrichtlinie",
    "consentPart4": " gelesen, verstanden und akzeptiert. Ich erkenne an, dass alle Handelsaktivitäten simuliert sind und Gebühren nach Bereitstellung der Zugangsdaten nicht erstattungsfähig sind.",
    "error": "Bitte aktivieren Sie das Kontrollkästchen, um den Bedingungen zuzustimmen, bevor Sie bezahlen.",
    "successTitle": "Bestellung eingegangen",
    "successDesc": "Wir haben Ihre Bestellung erhalten. Die Zugangsdaten werden nach Zahlungsbestätigung an Ihre E-Mail-Adresse gesendet.",
    "orderId": "Bestell-ID",
    "close": "Schließen"
  },
  "it": {
    "title": "Completa la Registrazione",
    "subtitle": "Controlla il tuo pacchetto e conferma i termini per continuare.",
    "program": "Programma",
    "size": "Dimensione conto",
    "fee": "Tariffa",
    "split": "Ripartizione dei profitti",
    "nameLabel": "Nome completo *",
    "emailLabel": "Indirizzo e-mail *",
    "promoLabel": "Codice referral / promozionale (opzionale)",
    "paymentLabel": "Metodo di pagamento",
    "card": "Carta di credito",
    "paypal": "PayPal",
    "submit": "Paga ora",
    "consentPart1": "Ho letto, compreso e accetto i ",
    "termsLink": "Termini e Condizioni",
    "consentPart2": ", i ",
    "fundedTermsLink": "Termini del Conto Finanziato",
    "consentPart3": " e l'",
    "privacyLink": "Informativa sulla Privacy",
    "consentPart4": ". Riconosco che tutte le attività di trading sono simulate e che le quote non sono rimborsabili una volta fornite le credenziali di accesso.",
    "error": "Seleziona la casella per confermare l'accettazione dei termini prima di procedere al pagamento.",
    "successTitle": "Ordine ricevuto",
    "successDesc": "Abbiamo ricevuto il tuo ordine. I dettagli di accesso all'account verranno inviati alla tua e-mail dopo la conferma del pagamento.",
    "orderId": "ID Ordine",
    "close": "Chiudi"
  },
  "pl": {
    "title": "Dokończ Rejestrację",
    "subtitle": "Sprawdź wybrany pakiet i potwierdź warunki, aby kontynuować.",
    "program": "Program",
    "size": "Rozmiar konta",
    "fee": "Opłata",
    "split": "Podział zysków",
    "nameLabel": "Imię i nazwisko *",
    "emailLabel": "Adres e-mail *",
    "promoLabel": "Kod polecający / promocyjny (opcjonalnie)",
    "paymentLabel": "Metoda płatności",
    "card": "Karta płatnicza",
    "paypal": "PayPal",
    "submit": "Zapłać",
    "consentPart1": "Przeczytałem(-am), rozumiem i akceptuję ",
    "termsLink": "Regulamin",
    "consentPart2": ", ",
    "fundedTermsLink": "Warunki Konta Ufundowanego",
    "consentPart3": " oraz ",
    "privacyLink": "Politykę Prywatności",
    "consentPart4": ". Potwierdzam, że wszystkie usługi handlowe są symulowane, a opłaty nie podlegają zwrotowi po przekazaniu danych logowania do konta.",
    "error": "Zaznacz pole wyboru, aby potwierdzić zgodę na warunki przed dokonaniem płatności.",
    "successTitle": "Zamówienie przyjęte",
    "successDesc": "Otrzymaliśmy Twoje zamówienie. Dane dostępowe do konta zostaną wysłane na Twój adres e-mail po potwierdzeniu płatności.",
    "orderId": "ID Zamówienia",
    "close": "Zamknij"
  },
  "tr": {
    "title": "Kaydı Tamamla",
    "subtitle": "Paketinizi gözden geçirin, ardından devam etmek için şartları onaylayın.",
    "program": "Program",
    "size": "Hesap büyüklüğü",
    "fee": "Ücret",
    "split": "Kâr paylaşımı",
    "nameLabel": "Ad Soyad *",
    "emailLabel": "E-posta adresi *",
    "promoLabel": "Referans / Promosyon kodu (isteğe bağlı)",
    "paymentLabel": "Ödeme yöntemi",
    "card": "Kredi / Banka Kartı",
    "paypal": "PayPal",
    "submit": "Ödeme Yap",
    "consentPart1": "",
    "termsLink": "Şartlar ve Koşullar",
    "consentPart2": ", ",
    "fundedTermsLink": "Fonlanan Hesap Şartları",
    "consentPart3": " ve ",
    "privacyLink": "Gizlilik Politikası",
    "consentPart4": "'nı okudum, anladım ve kabul ediyorum. Tüm işlem hizmetlerinin simüle olduğunu ve hesap bilgileri iletildikten sonra ücretlerin kesinlikle iade edilmediğini onaylıyorum.",
    "error": "Lütfen ödeme yapmadan önce şartları kabul ettiğinizi onaylayan kutucuğu işaretleyin.",
    "successTitle": "Sipariş alındı",
    "successDesc": "Siparişinizi aldık. Ödemeniz onaylandıktan sonra hesap erişim bilgileri e-posta adresinize gönderilecektir.",
    "orderId": "Sipariş Numarası",
    "close": "Kapat"
  },
  "id": {
    "title": "Selesaikan Pendaftaran",
    "subtitle": "Tinjau paket Anda, lalu konfirmasikan ketentuan untuk melanjutkan.",
    "program": "Program",
    "size": "Ukuran akun",
    "fee": "Biaya",
    "split": "Bagi hasil profit",
    "nameLabel": "Nama lengkap *",
    "emailLabel": "Alamat email *",
    "promoLabel": "Kode referral / promo (opsional)",
    "paymentLabel": "Metode pembayaran",
    "card": "Kartu Kredit / Debit",
    "paypal": "PayPal",
    "submit": "Bayar Sekarang",
    "consentPart1": "Saya telah membaca, memahami, dan menyetujui ",
    "termsLink": "Syarat & Ketentuan",
    "consentPart2": ", ",
    "fundedTermsLink": "Ketentuan Akun Didanai",
    "consentPart3": ", dan ",
    "privacyLink": "Kebijakan Privasi",
    "consentPart4": ". Saya mengetahui bahwa semua layanan perdagangan bersifat simulasi dan biaya pendaftaran tidak dapat dikembalikan setelah akses akun diberikan.",
    "error": "Harap centang kotak persetujuan syarat dan ketentuan sebelum melanjutkan pembayaran.",
    "successTitle": "Pesanan Diterima",
    "successDesc": "Kami telah menerima pesanan Anda. Detail login akun akan dikirimkan ke email Anda setelah pembayaran terkonfirmasi.",
    "orderId": "ID Pesanan",
    "close": "Tutup"
  },
  "th": {
    "title": "ดำเนินการลงทะเบียนให้เสร็จสมบูรณ์",
    "subtitle": "ตรวจสอบแพ็กเกจที่คุณเลือก จากนั้นกดยืนยันข้อตกลงเพื่อดำเนินการต่อ",
    "program": "โปรแกรม",
    "size": "ขนาดบัญชี",
    "fee": "ค่าธรรมเนียม",
    "split": "ส่วนแบ่งกำไร",
    "nameLabel": "ชื่อ-นามสกุล *",
    "emailLabel": "ที่อยู่อีเมล *",
    "promoLabel": "รหัสผู้แนะนำ / โค้ดส่วนลด (ไม่บังคับ)",
    "paymentLabel": "ช่องทางการชำระเงิน",
    "card": "บัตรเครดิต / เดบิต",
    "paypal": "PayPal",
    "submit": "ชำระเงิน",
    "consentPart1": "ข้าพเจ้าได้อ่าน ทำความเข้าใจ และยอมรับ ",
    "termsLink": "ข้อกำหนดและเงื่อนไข",
    "consentPart2": ", ",
    "fundedTermsLink": "ข้อตกลงบัญชีทุนจริง",
    "consentPart3": " และ ",
    "privacyLink": "นโยบายความเป็นส่วนตัว",
    "consentPart4": " ทั้งนี้ ข้าพเจ้ารับทราบว่าบริการการเทรดทั้งหมดเป็นการจำลองในระบบเสมือน และค่าธรรมเนียมไม่สามารถขอคืนได้เมื่อได้รับข้อมูลการเข้าถึงบัญชีแล้ว",
    "error": "โปรดทำเครื่องหมายในช่องยินยอมเพื่อยอมรับเงื่อนไขก่อนดำเนินการชำระเงิน",
    "successTitle": "ได้รับคำสั่งซื้อเรียบร้อยแล้ว",
    "successDesc": "เราได้รับคำสั่งซื้อของคุณแล้ว ข้อมูลเข้าใช้งานบัญชีเทรดจะถูกส่งไปยังอีเมลของคุณทันทีที่การชำระเงินได้รับการยืนยัน",
    "orderId": "หมายเลขคำสั่งซื้อ",
    "close": "ปิด"
  },
  "fil": {
    "title": "Kumpletuhin ang Pagpaparehistro",
    "subtitle": "Suriin ang iyong napiling package, at kumpirmahin ang mga tuntunin para magpatuloy.",
    "program": "Programa",
    "size": "Laki ng account",
    "fee": "Bayad",
    "split": "Hatian sa tubo",
    "nameLabel": "Buong pangalan *",
    "emailLabel": "Email address *",
    "promoLabel": "Referral / Promo code (opsyonal)",
    "paymentLabel": "Paraan ng pagbabayad",
    "card": "Credit / Debit Card",
    "paypal": "PayPal",
    "submit": "Magbayad",
    "consentPart1": "Nabasa ko, naintindihan, at sumasang-ayon ako sa ",
    "termsLink": "Mga Tuntunin at Kundisyon",
    "consentPart2": ", ",
    "fundedTermsLink": "Mga Tuntunin sa Funded Account",
    "consentPart3": ", at ",
    "privacyLink": "Patakaran sa Privacy",
    "consentPart4": ". Kinikilala ko na ang lahat ng serbisyo sa trading ay simulation at ang mga bayad ay hindi na maibabalik kapag naibigay na ang access sa account.",
    "error": "Mangyaring lagyan ng tsek ang kahon upang kumpirmahin ang iyong pagsang-ayon sa mga tuntunin bago magbayad.",
    "successTitle": "Natanggap ang Order",
    "successDesc": "Natanggap namin ang iyong order. Ang mga detalye sa pag-access ng account ay ipapadala sa iyong email kapag nakumpirma na ang pagbabayad.",
    "orderId": "Order ID",
    "close": "Isara"
  },
  "hi": {
    "title": "पंजीकरण पूरा करें",
    "subtitle": "अपने पैकेज की समीक्षा करें, फिर जारी रखने के लिए नियमों की पुष्टि करें।",
    "program": "कार्यक्रम",
    "size": "खाता आकार",
    "fee": "शुल्क",
    "split": "लाभ का बँटवारा",
    "nameLabel": "पूरा नाम *",
    "emailLabel": "ईमेल पता *",
    "promoLabel": "रेफरल / प्रोमो कोड (वैकल्पिक)",
    "paymentLabel": "भुगतान का तरीका",
    "card": "कार्ड (क्रेडिट/डेबिट)",
    "paypal": "PayPal",
    "submit": "भुगतान करें",
    "consentPart1": "मैंने ",
    "termsLink": "नियम और शर्तें",
    "consentPart2": ", ",
    "fundedTermsLink": "फंडेड खाता शर्तें",
    "consentPart3": ", और ",
    "privacyLink": "गोपनीयता नीति",
    "consentPart4": " पढ़ ली हैं, समझ ली हैं और उनसे सहमत हूँ। मैं स्वीकार करता हूँ कि सभी ट्रेडिंग सेवाएँ सिमुलेटेड हैं और खाता एक्सेस प्रदान किए जाने के बाद शुल्क वापस नहीं किया जाएगा।",
    "error": "कृपया भुगतान करने से पहले पुष्टि करने के लिए बॉक्स पर टिक करें कि आप शर्तों से सहमत हैं।",
    "successTitle": "ऑर्डर प्राप्त हुआ",
    "successDesc": "हमें आपका ऑर्डर मिल गया है। भुगतान की पुष्टि होते ही खाता एक्सेस विवरण आपके ईमेल पर भेज दिया जाएगा।",
    "orderId": "ऑर्डर आईडी",
    "close": "बंद करें"
  },
  "ko": {
    "title": "참가 등록 완료",
    "subtitle": "선택하신 패키지 정보를 확인하신 후, 약관에 동의하여 결제를 진행해주세요.",
    "program": "프로그램",
    "size": "계정 잔고 규모",
    "fee": "참가 비용",
    "split": "수익 배분율",
    "nameLabel": "성명 (실명) *",
    "emailLabel": "이메일 주소 *",
    "promoLabel": "추천인 / 프로모션 코드 (선택 사항)",
    "paymentLabel": "결제 수단 선택",
    "card": "신용카드 / 체크카드",
    "paypal": "PayPal",
    "submit": "결제 진행하기",
    "consentPart1": "본인은 ",
    "termsLink": "서비스 이용약관",
    "consentPart2": ", ",
    "fundedTermsLink": "펀딩 계정 규정",
    "consentPart3": " 및 ",
    "privacyLink": "개인정보 처리방침",
    "consentPart4": "을 충분히 읽고 이해하였으며 이에 동의합니다. 모든 거래 서비스는 시뮬레이션 환경으로 제공되며, 계정 로그인 정보 발급 후 참가비는 어떠한 경우에도 환불되지 않음을 확인합니다.",
    "error": "결제를 진행하시려면 약관 동의 체크박스를 확인하여 체크해주세요.",
    "successTitle": "주문이 정상 접수되었습니다",
    "successDesc": "등록 신청이 접수되었습니다. 결제 확인 즉시 입력하신 이메일로 트레이딩 계정 접속 정보가 발송됩니다.",
    "orderId": "주문 번호",
    "close": "닫기"
  },
  "ru": {
    "title": "Завершение Регистрации",
    "subtitle": "Проверьте выбранный пакет и подтвердите условия для продолжения.",
    "program": "Программа",
    "size": "Размер счета",
    "fee": "Стоимость",
    "split": "Разделение прибыли",
    "nameLabel": "ФИО (полное имя) *",
    "emailLabel": "Адрес эл. почты *",
    "promoLabel": "Реферальный / промокод (необязательно)",
    "paymentLabel": "Способ оплаты",
    "card": "Банковская карта",
    "paypal": "PayPal",
    "submit": "Оплатить",
    "consentPart1": "Я прочитал(а), понимаю и принимаю ",
    "termsLink": "Условия и положения",
    "consentPart2": ", ",
    "fundedTermsLink": "Условия финансируемого счета",
    "consentPart3": " и ",
    "privacyLink": "Политику конфиденциальности",
    "consentPart4": ". Я подтверждаю, что все торговые услуги являются симулированными, а оплата не подлежит возврату после предоставления доступа к счету.",
    "error": "Пожалуйста, отметьте галочкой согласие с условиями перед оплатой.",
    "successTitle": "Заказ успешно принят",
    "successDesc": "Мы получили ваш заказ. Данные для доступа к торговому счету будут отправлены на ваш e-mail после подтверждения оплаты.",
    "orderId": "Номер заказа",
    "close": "Закрыть"
  },
  "ar": {
    "title": "إتمام التسجيل والدفع",
    "subtitle": "راجع تفاصيل باقتك المختارة، ثم وافق على الشروط والأحكام للمتابعة.",
    "program": "البرنامج",
    "size": "حجم الحساب",
    "fee": "رسوم الاشتراك",
    "split": "نسبة الأرباح",
    "nameLabel": "الاسم الكامل *",
    "emailLabel": "البريد الإلكتروني *",
    "promoLabel": "كود الإحالة / الخصم (اختياري)",
    "paymentLabel": "طريقة الدفع",
    "card": "البطاقة الائتمانية",
    "paypal": "PayPal",
    "submit": "إتمام الدفع",
    "consentPart1": "لقد قرأت وفهمت ووافقت على ",
    "termsLink": "الشروط والأحكام",
    "consentPart2": "، و",
    "fundedTermsLink": "شروط الحساب الممول",
    "consentPart3": "، و",
    "privacyLink": "سياسة الخصوصية",
    "consentPart4": ". وأقر بأن جميع خدمات التداول تتم في بيئة محاكاة تجريبية، وأن الرسوم غير قابلة للاسترداد نهائياً بمجرد إرسال بيانات الدخول للحساب.",
    "error": "يرجى وضع علامة في المربع لتأكيد موافقتك على الشروط قبل إتمام عملية الدفع.",
    "successTitle": "تم استلام طلبك بنجاح",
    "successDesc": "لقد تلقينا طلبك بنجاح. سيتم إرسال بيانات تسجيل الدخول إلى حساب التداول عبر بريدك الإلكتروني فور تأكيد الدفع.",
    "orderId": "رقم الطلب",
    "close": "إغلاق"
  },
  "nl": {
    "title": "Registratie Voltooien",
    "subtitle": "Controleer uw pakket en bevestig de voorwaarden om door te gaan.",
    "program": "Programma",
    "size": "Accountgrootte",
    "fee": "Kosten",
    "split": "Winstverdeling",
    "nameLabel": "Volledige naam *",
    "emailLabel": "E-mailadres *",
    "promoLabel": "Referral- / promotiecode (optioneel)",
    "paymentLabel": "Betaalmethode",
    "card": "Betaalkaart (Credit/Debit)",
    "paypal": "PayPal",
    "submit": "Betalen",
    "consentPart1": "Ik heb de ",
    "termsLink": "Algemene Voorwaarden",
    "consentPart2": ", de ",
    "fundedTermsLink": "Voorwaarden voor Gefinancierde Accounts",
    "consentPart3": " en het ",
    "privacyLink": "Privacybeleid",
    "consentPart4": " gelezen, begrepen en ga hiermee akkoord. Ik erken dat alle handelsdiensten gesimuleerd zijn en dat kosten strikt niet-restitueerbaar zijn zodra accounttoegang is verleend.",
    "error": "Vink het vakje aan om te bevestigen dat u akkoord gaat met de voorwaarden voordat u betaalt.",
    "successTitle": "Bestelling ontvangen",
    "successDesc": "We hebben uw bestelling ontvangen. De inloggegevens worden naar uw e-mailadres verzonden zodra de betaling is bevestigd.",
    "orderId": "Bestel-ID",
    "close": "Sluiten"
  }
};

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, product, sizeIndex }) => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT['en'];

  const [payment, setPayment] = useState<'card' | 'paypal'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState('');
  const [agreed, setAgreed] = useState(false); 
  const [showError, setShowError] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    const ref = getStoredRefCode();
    if (ref) setPromo(ref);
  }, []);

  if (!isOpen) return null;

  const size = product.sizes[sizeIndex];
  const fee = product.fees[sizeIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      setShowError(true);
      return;
    }
    setOrderId('EX-' + Math.floor(100000 + Math.random() * 900000));
  };

  const input =
    'w-full px-4 py-3 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/40 text-sm focus:outline-none focus:border-[#f6bf4a]';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl border border-neutral-200 dark:border-white/15 bg-white dark:bg-[#10121a] text-neutral-900 dark:text-white shadow-2xl p-6 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label={c.close}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {orderId ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#f6bf4a]/20 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black">{c.successTitle}</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">{c.successDesc}</p>
            <p className="font-mono text-sm">
              {c.orderId}: <span className="font-black">{orderId}</span>
            </p>
            <button type="button" onClick={onClose} className="px-6 py-3 rounded-xl btn-gold text-black font-black text-sm">
              {c.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black">{c.title}</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{c.subtitle}</p>
            </div>

            <dl className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/10 text-sm font-mono">
              <div>
                <dt className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">{c.program}</dt>
                <dd className="font-black">{product.name}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">{c.size}</dt>
                <dd className="font-black text-[#c68a00] dark:text-[#ffc501]">{formatUsd(size)}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">{c.split}</dt>
                <dd className="font-black">{product.profitSplit}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase text-neutral-500 dark:text-neutral-400">{c.fee}</dt>
                <dd className="font-black">{formatUsd(fee)}</dd>
              </div>
            </dl>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-bold mb-1.5" htmlFor="co-name">{c.nameLabel}</label>
                <input id="co-name" className={input} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </div>
              <div>
                <label className="block font-bold mb-1.5" htmlFor="co-email">{c.emailLabel}</label>
                <input id="co-email" type="email" className={input} value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
              </div>
              <div>
                <label className="block font-bold mb-1.5" htmlFor="co-promo">{c.promoLabel}</label>
                <input id="co-promo" className={input} value={promo} onChange={(e) => setPromo(e.target.value)} />
              </div>
              <div>
                <div className="font-bold mb-1.5">{c.paymentLabel}</div>
                <div className="grid grid-cols-2 gap-2">
                  {([['card', c.card], ['paypal', c.paypal]] as const).map(([id, label]) => (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setPayment(id)}
                      className={`flex items-center justify-center gap-2 py-3 rounded-xl border font-bold transition-all ${
                        payment === id
                          ? 'border-[#f6bf4a] bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#ffc501]'
                          : 'border-neutral-200 dark:border-white/10'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {}
            <div className={`rounded-xl border p-4 ${showError && !agreed ? 'border-red-500 bg-red-500/5' : 'border-neutral-200 dark:border-white/10'}`}>
              <label className="flex items-start gap-3 cursor-pointer text-xs leading-relaxed">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (e.target.checked) setShowError(false);
                  }}
                  aria-required="true"
                  aria-invalid={showError && !agreed}
                  className="mt-0.5 w-4 h-4 shrink-0 accent-[#f6bf4a]"
                />
                <span>
                  {c.consentPart1}
                  <Link href="/terms-and-conditions" target="_blank" className="underline font-bold text-[#c68a00] dark:text-[#ffc501]">{c.termsLink}</Link>
                  {c.consentPart2}
                  <Link href="/funded-terms" target="_blank" className="underline font-bold text-[#c68a00] dark:text-[#ffc501]">{c.fundedTermsLink}</Link>
                  {c.consentPart3}
                  <Link href="/privacy-policy" target="_blank" className="underline font-bold text-[#c68a00] dark:text-[#ffc501]">{c.privacyLink}</Link>
                  {c.consentPart4}
                </span>
              </label>
              {showError && !agreed && (
                <p role="alert" className="mt-3 flex items-start gap-2 text-xs font-bold text-red-500">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {c.error}
                </p>
              )}
            </div>

            <button
              type="submit"
              aria-disabled={!agreed}
              className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm transition-all ${
                agreed ? 'btn-gold text-black shadow-xl' : 'bg-neutral-200 dark:bg-white/10 text-neutral-500 cursor-not-allowed'
              }`}
            >
              <Lock className="w-4 h-4" />
              {c.submit} {formatUsd(fee)}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
