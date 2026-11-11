'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { useTheme } from '@/components/eracex/ThemeContext';
import { AuthShell, AuthField, AuthGoogle, authInputCls, authPrimaryCls, useAuthCopy } from '@/components/eracex/AuthShell';
import { Eye, EyeOff, ArrowLeft, CheckCircle2 } from 'lucide-react';

interface SignUpDictionary {
  createAccount: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  agreeTermsPrefix: string;
  termsAndConditions: string;
  marketingConsent: string;
  signUpBtn: string;
  submittingText: string;
  alreadyHaveAccount: string;
  signIn: string;
  backToHome: string;
  successTitle: string;
  successDesc: string;
  verified: string;
  privacy: string;
  help: string;
}

const DICTIONARY: Record<string, SignUpDictionary> = {
  vi: {
    createAccount: 'TẠO TÀI KHOẢN',
    firstName: 'Tên',
    lastName: 'Họ',
    email: 'Email',
    password: 'Mật khẩu',
    agreeTermsPrefix: 'Tôi đồng ý với',
    termsAndConditions: 'Điều khoản & Điều kiện',
    marketingConsent: 'Tôi đồng ý nhận tin tức, cập nhật, khuyến mãi và thông báo từ ERACEX.',
    signUpBtn: 'Đăng Ký Ngay',
    submittingText: 'Đang tạo tài khoản...',
    alreadyHaveAccount: 'Đã có tài khoản?',
    signIn: 'Đăng nhập ngay',
    backToHome: 'Quay lại Trang Chủ',
    successTitle: 'Đăng Ký Thành Công!',
    successDesc: 'Tài khoản của bạn đã sẵn sàng. Đang chuyển hướng tới cổng lựa chọn gói vốn...',
    verified: 'Thành công!',
    privacy: 'Bảo mật',
    help: 'Trợ giúp',
  },
  zh: {
    createAccount: '创建交易账户',
    firstName: '名字',
    lastName: '姓氏',
    email: '电子邮箱',
    password: '登录密码',
    agreeTermsPrefix: '我已阅读并同意',
    termsAndConditions: '服务条款与细则',
    marketingConsent: '我同意接收来自 ERACEX 的最新资讯、促销活动及交易通知。',
    signUpBtn: '立即完成注册',
    submittingText: '正在创建考核账户...',
    alreadyHaveAccount: '已有交易账户？',
    signIn: '前往登录',
    backToHome: '返回官方首页',
    successTitle: '账户注册成功！',
    successDesc: '正在为您跳转至考核方案挑选专区...',
    verified: '验证成功！',
    privacy: '隐私政策',
    help: '帮助中心',
  },
  ja: {
    createAccount: '新規アカウント作成',
    firstName: '名（First Name）',
    lastName: '姓（Last Name）',
    email: 'メールアドレス',
    password: 'パスワード',
    agreeTermsPrefix: '私は次項に同意します:',
    termsAndConditions: '利用規約',
    marketingConsent: 'ERACEX からの最新ニュース、アップデート、プロモーション情報などの受信に同意します。',
    signUpBtn: '今すぐアカウント登録',
    submittingText: 'アカウントを作成中...',
    alreadyHaveAccount: '既にアカウントをお持ちですか？',
    signIn: 'ログイン',
    backToHome: 'ホームに戻る',
    successTitle: 'アカウント作成が完了しました！',
    successDesc: 'チャレンジプラン選択ページへ移動しています...',
    verified: '認証成功！',
    privacy: 'プライバシー',
    help: 'ヘルプ',
  },
  en: {
    createAccount: 'CREATE ACCOUNT',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    password: 'Password',
    agreeTermsPrefix: 'I agree to the',
    termsAndConditions: 'Terms & Conditions',
    marketingConsent: 'I agree to receive news, updates, promotions, surveys, and other communications from ERACEX.',
    signUpBtn: 'Sign up today',
    submittingText: 'Creating account...',
    alreadyHaveAccount: 'Already have an account?',
    signIn: 'Sign in',
    backToHome: 'Back to Home',
    successTitle: 'Registration Successful!',
    successDesc: 'Your account is ready. Redirecting to challenge selection...',
    verified: 'Success!',
    privacy: 'Privacy',
    help: 'Help',
  },
  es: {
      "createAccount": "CREAR CUENTA",
      "firstName": "Nombre",
      "lastName": "Apellido",
      "email": "Correo Electrónico",
      "password": "Contraseña",
      "agreeTermsPrefix": "Acepto los",
      "termsAndConditions": "Términos y Condiciones",
      "marketingConsent": "Acepto recibir noticias, actualizaciones, promociones y notificaciones de ERACEX.",
      "signUpBtn": "Registrarse Ahora",
      "submittingText": "Creando cuenta...",
      "alreadyHaveAccount": "¿Ya tienes una cuenta?",
      "signIn": "Iniciar sesión",
      "backToHome": "Volver al Inicio",
      "successTitle": "¡Registro Exitoso!",
      "successDesc": "Tu cuenta está lista. Redirigiendo a la selección de desafío...",
      "verified": "¡Verificado!",
      "privacy": "Privacidad",
      "help": "Ayuda"
  },
  pt: {
      "createAccount": "CRIAR CONTA",
      "firstName": "Nome",
      "lastName": "Sobrenome",
      "email": "E-mail",
      "password": "Senha",
      "agreeTermsPrefix": "Eu concordo com os",
      "termsAndConditions": "Termos e Condições",
      "marketingConsent": "Concordo em receber novidades, atualizações, promoções e comunicados da ERACEX.",
      "signUpBtn": "Cadastre-se Agora",
      "submittingText": "Criando conta...",
      "alreadyHaveAccount": "Já tem uma conta?",
      "signIn": "Entrar agora",
      "backToHome": "Voltar ao Início",
      "successTitle": "Cadastro Concluído com Sucesso!",
      "successDesc": "Sua conta está pronta. Redirecionando para a escolha do desafio...",
      "verified": "Sucesso!",
      "privacy": "Privacidade",
      "help": "Ajuda"
  },
  fr: {
      "createAccount": "CRÉER UN COMPTE",
      "firstName": "Prénom",
      "lastName": "Nom",
      "email": "Adresse E-mail",
      "password": "Mot de passe",
      "agreeTermsPrefix": "J'accepte les",
      "termsAndConditions": "Conditions Générales",
      "marketingConsent": "J’accepte de recevoir des nouvelles, des mises à jour et des offres promotionnelles de ERACEX.",
      "signUpBtn": "S'inscrire Aujourd'hui",
      "submittingText": "Création du compte...",
      "alreadyHaveAccount": "Vous avez déjà un compte ?",
      "signIn": "Se connecter",
      "backToHome": "Retour à l'accueil",
      "successTitle": "Inscription Réussie !",
      "successDesc": "Votre compte est prêt. Redirection vers le choix du challenge...",
      "verified": "Vérifié !",
      "privacy": "Confidentialité",
      "help": "Aide"
  },
  de: {
      "createAccount": "KONTO ERSTELLEN",
      "firstName": "Vorname",
      "lastName": "Nachname",
      "email": "E-Mail-Adresse",
      "password": "Passwort",
      "agreeTermsPrefix": "Ich stimme den",
      "termsAndConditions": "Allgemeinen Geschäftsbedingungen",
      "marketingConsent": "Ich stimme zu, Neuigkeiten, Updates, Sonderangebote und Mitteilungen von ERACEX zu erhalten.",
      "signUpBtn": "Jetzt Registrieren",
      "submittingText": "Konto wird erstellt...",
      "alreadyHaveAccount": "Bereits ein Konto vorhanden?",
      "signIn": "Hier anmelden",
      "backToHome": "Zurück zur Startseite",
      "successTitle": "Registrierung Erfolgreich!",
      "successDesc": "Ihr Konto ist bereit. Weiterleitung zur Challenge-Auswahl...",
      "verified": "Erfolgreich!",
      "privacy": "Datenschutz",
      "help": "Hilfe"
  },
  it: {
      "createAccount": "CREA UN ACCOUNT",
      "firstName": "Nome",
      "lastName": "Cognome",
      "email": "Indirizzo E-mail",
      "password": "Password",
      "agreeTermsPrefix": "Accetto i",
      "termsAndConditions": "Termini e Condizioni",
      "marketingConsent": "Accetto di ricevere notizie, aggiornamenti, promozioni e comunicazioni da ERACEX.",
      "signUpBtn": "Registrati Ora",
      "submittingText": "Creazione account in corso...",
      "alreadyHaveAccount": "Hai già un account?",
      "signIn": "Accedi subito",
      "backToHome": "Torna alla Home",
      "successTitle": "Registrazione Riuscita!",
      "successDesc": "Il tuo account è pronto. Reindirizzamento alla selezione del challenge...",
      "verified": "Verificato!",
      "privacy": "Privacy",
      "help": "Aiuto"
  },
  pl: {
      "createAccount": "ZAŁÓŻ KONTO",
      "firstName": "Imię",
      "lastName": "Nazwisko",
      "email": "Adres E-mail",
      "password": "Hasło",
      "agreeTermsPrefix": "Akceptuję",
      "termsAndConditions": "Regulamin i Warunki",
      "marketingConsent": "Wyrażam zgodę na otrzymywanie aktualności, ofert i komunikatów od ERACEX.",
      "signUpBtn": "Zarejestruj Się",
      "submittingText": "Tworzenie konta...",
      "alreadyHaveAccount": "Masz już konto?",
      "signIn": "Zaloguj się",
      "backToHome": "Powrót do Strony Głównej",
      "successTitle": "Rejestracja Udana!",
      "successDesc": "Twoje konto jest gotowe. Przekierowanie do wyboru challenge...",
      "verified": "Zweryfikowano!",
      "privacy": "Prywatność",
      "help": "Pomoc"
  },
  tr: {
      "createAccount": "HESAP OLUŞTUR",
      "firstName": "Adınız",
      "lastName": "Soyadınız",
      "email": "E-posta Adresi",
      "password": "Şifre",
      "agreeTermsPrefix": "Kabul ediyorum:",
      "termsAndConditions": "Şartlar ve Koşullar",
      "marketingConsent": "ERACEX bültenleri, güncellemeler ve özel promosyon teklifleri almayı onaylıyorum.",
      "signUpBtn": "Hemen Kayıt Ol",
      "submittingText": "Hesap oluşturuluyor...",
      "alreadyHaveAccount": "Zaten bir hesabınız var mı?",
      "signIn": "Giriş yapın",
      "backToHome": "Ana Sayfaya Dön",
      "successTitle": "Kayıt Başarılı!",
      "successDesc": "Hesabınız hazırlandı. Challenge seçimine yönlendiriliyorsunuz...",
      "verified": "Başarılı!",
      "privacy": "Gizlilik",
      "help": "Yardım"
  },
  id: {
      "createAccount": "BUAT AKUN BARU",
      "firstName": "Nama Depan",
      "lastName": "Nama Belakang",
      "email": "Alamat Email",
      "password": "Kata Sandi",
      "agreeTermsPrefix": "Saya menyetujui",
      "termsAndConditions": "Syarat & Ketentuan",
      "marketingConsent": "Saya setuju menerima berita, pembaruan, promosi, dan pemberitahuan dari ERACEX.",
      "signUpBtn": "Daftar Sekarang",
      "submittingText": "Membuat akun...",
      "alreadyHaveAccount": "Sudah memiliki akun?",
      "signIn": "Masuk di sini",
      "backToHome": "Kembali ke Beranda",
      "successTitle": "Pendaftaran Berhasil!",
      "successDesc": "Akun Anda sudah siap. Mengarahkan ke pemilihan paket challenge...",
      "verified": "Berhasil!",
      "privacy": "Privasi",
      "help": "Bantuan"
  },
  th: {
      "createAccount": "สร้างบัญชีผู้ใช้ใหม่",
      "firstName": "ชื่อ",
      "lastName": "นามสกุล",
      "email": "อีเมล",
      "password": "รหัสผ่าน",
      "agreeTermsPrefix": "ฉันยอมรับ",
      "termsAndConditions": "ข้อกำหนดและเงื่อนไข",
      "marketingConsent": "ฉันยินยอมรับข่าวสาร อัปเดต และโปรโมชันจาก ERACEX",
      "signUpBtn": "สมัครสมาชิกทันที",
      "submittingText": "กำลังสร้างบัญชี...",
      "alreadyHaveAccount": "มีบัญชีอยู่แล้วใช่หรือไม่?",
      "signIn": "เข้าสู่ระบบที่นี่",
      "backToHome": "กลับสู่หน้าหลัก",
      "successTitle": "ลงทะเบียนสำเร็จเรียบร้อย!",
      "successDesc": "บัญชีของคุณพร้อมใช้งานแล้ว กำลังนำคุณไปยังหน้าเลือกแพ็กเกจ Challenge...",
      "verified": "สำเร็จ!",
      "privacy": "ความเป็นส่วนตัว",
      "help": "ช่วยเหลือ"
  },
  fil: {
      "createAccount": "GUMAWA NG ACCOUNT",
      "firstName": "Pangalan",
      "lastName": "Apelyido",
      "email": "Email",
      "password": "Password",
      "agreeTermsPrefix": "Sumasang-ayon ako sa",
      "termsAndConditions": "Mga Tuntunin at Kundisyon",
      "marketingConsent": "Sumasang-ayon akong makatanggap ng balita, update, at promo mula sa ERACEX.",
      "signUpBtn": "Mag-sign Up Ngayon",
      "submittingText": "Ginagawa ang account...",
      "alreadyHaveAccount": "May account ka na ba?",
      "signIn": "Mag-sign in",
      "backToHome": "Bumalik sa Home",
      "successTitle": "Matagumpay ang Rehistrasyon!",
      "successDesc": "Handa na ang iyong account. Dinarala ka sa pagpili ng challenge...",
      "verified": "Tagumpay!",
      "privacy": "Privacy",
      "help": "Tulong"
  },
  hi: {
      "createAccount": "खाता बनाएं",
      "firstName": "पहला नाम",
      "lastName": "अंतिम नाम",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "agreeTermsPrefix": "मैं सहमत हूँ",
      "termsAndConditions": "नियम और शर्तें",
      "marketingConsent": "मैं ERACEX से समाचार, अपडेट और विशेष ऑफ़र प्राप्त करने के लिए सहमत हूँ।",
      "signUpBtn": "आज ही साइन अप करें",
      "submittingText": "खाता बनाया जा रहा है...",
      "alreadyHaveAccount": "क्या आपके पास पहले से खाता है?",
      "signIn": "साइन इन करें",
      "backToHome": "होम पेज पर वापस जाएं",
      "successTitle": "पंजीकरण सफल रहा!",
      "successDesc": "आपका खाता तैयार है। चैलेंज चयन पर रीडायरेक्ट किया जा रहा है...",
      "verified": "सफल!",
      "privacy": "गोपनीयता",
      "help": "सहायता"
  },
  ko: {
      "createAccount": "새 계정 만들기",
      "firstName": "이름",
      "lastName": "성",
      "email": "이메일 주소",
      "password": "비밀번호",
      "agreeTermsPrefix": "본인은 다음에 동의합니다:",
      "termsAndConditions": "이용 약관",
      "marketingConsent": "ERACEX에서 발송하는 뉴스, 업데이트, 프로모션 혜택 수신에 동의합니다.",
      "signUpBtn": "지금 계정 등록하기",
      "submittingText": "계정 생성 중...",
      "alreadyHaveAccount": "이미 계정이 있으신가요?",
      "signIn": "로그인하기",
      "backToHome": "홈으로 돌아가기",
      "successTitle": "회원가입이 완료되었습니다!",
      "successDesc": "계정이 준비되었습니다. 챌린지 선택 화면으로 이동합니다...",
      "verified": "인증 성공!",
      "privacy": "개인정보처리방침",
      "help": "고객센터"
  },
  ru: {
      "createAccount": "СОЗДАТЬ АККАУНТ",
      "firstName": "Имя",
      "lastName": "Фамилия",
      "email": "Электронная почта",
      "password": "Пароль",
      "agreeTermsPrefix": "Я согласен с",
      "termsAndConditions": "Условиями и положениями",
      "marketingConsent": "Я согласен получать новости, обновления и специальные предложения от ERACEX.",
      "signUpBtn": "Зарегистрироваться",
      "submittingText": "Создание аккаунта...",
      "alreadyHaveAccount": "Уже зарегистрированы?",
      "signIn": "Войти",
      "backToHome": "Вернуться на главную",
      "successTitle": "Регистрация Успешна!",
      "successDesc": "Ваш аккаунт готов. Перенаправление к выбору челленджа...",
      "verified": "Успешно!",
      "privacy": "Конфиденциальность",
      "help": "Помощь"
  },
  ar: {
      "createAccount": "إنشاء حساب جديد",
      "firstName": "الاسم الأول",
      "lastName": "اسم العائلة",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "agreeTermsPrefix": "أوافق على",
      "termsAndConditions": "الشروط والأحكام",
      "marketingConsent": "أوافق على استلام التحديثات والعروض الترويجية من ERACEX.",
      "signUpBtn": "سجل الآن",
      "submittingText": "جارٍ إنشاء الحساب...",
      "alreadyHaveAccount": "هل لديك حساب بالفعل؟",
      "signIn": "سجل الدخول",
      "backToHome": "العودة إلى الصفحة الرئيسية",
      "successTitle": "تم التسجيل بنجاح!",
      "successDesc": "حسابك جاهز الآن. جارٍ التحويل لاختيار التحدي المناسب...",
      "verified": "تم بنجاح!",
      "privacy": "الخصوصية",
      "help": "المساعدة"
  },
  nl: {
      "createAccount": "ACCOUNT AANMAKEN",
      "firstName": "Voornaam",
      "lastName": "Achternaam",
      "email": "E-mailadres",
      "password": "Wachtwoord",
      "agreeTermsPrefix": "Ik ga akkoord met de",
      "termsAndConditions": "Algemene Voorwaarden",
      "marketingConsent": "Ik ga akkoord met het ontvangen van updates, promoties en nieuws van ERACEX.",
      "signUpBtn": "Nu Registreren",
      "submittingText": "Account wordt aangemaakt...",
      "alreadyHaveAccount": "Heeft u al een account?",
      "signIn": "Hier inloggen",
      "backToHome": "Terug naar Home",
      "successTitle": "Registratie Succesvol!",
      "successDesc": "Uw account is klaar. U wordt doorgestuurd naar de challenge-selectie...",
      "verified": "Succes!",
      "privacy": "Privacy",
      "help": "Hulp"
  },
};

const COUNTRY_CODES = 'AE AR AT AU BD BE BG BR CA CH CL CN CO CY CZ DE DK DZ EC EE EG ES FI FR GB GE GH GR HK HR HU ID IE IL IN IQ IT JO JP KE KR KW KZ LB LK LT LU LV MA MX MY NG NL NO NP NZ OM PE PH PK PL PT QA RO RS RU SA SE SG SI SK TH TN TR TW TZ UA UG US UY UZ VN ZA ZM ZW'.split(' ');

export default function SignUpPage() {
  const router = useRouter();
  const { currentLang } = useLanguage();
  const { theme } = useTheme();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;
  const a = useAuthCopy();
  const [countries, setCountries] = useState<[string, string][]>([]);
  React.useEffect(() => {
    const loc = currentLang === 'fil' ? 'tl' : currentLang;
    let names: Intl.DisplayNames | null = null;
    try { names = new Intl.DisplayNames([loc], { type: 'region' }); } catch { names = null; }
    setCountries(COUNTRY_CODES.map((c) => [c, names?.of(c) || c] as [string, string]).sort((x, y) => x[1].localeCompare(y[1], loc)));
  }, [currentLang]);
  const [honorific, setHonorific] = useState('');
  const [dob, setDob] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [confirm, setConfirm] = useState('');
  const [referral, setReferral] = useState('');
  const [agreeName, setAgreeName] = useState(false);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const confirmRef = useRef<HTMLInputElement>(null);
  useEffect(() => { confirmRef.current?.setCustomValidity(confirm && confirm !== password ? a.mismatch : ''); }, [confirm, password, a.mismatch]);
  const timers = useRef<number[]>([]);
  useEffect(() => () => { timers.current.forEach(window.clearTimeout); }, []);

  const handleSubmit = (e: React.FormEvent, viaGoogle = false) => {
    e.preventDefault();
    if (submitting) return;
    if (!viaGoogle && (!firstName || !lastName || !email || !password || password !== confirm || !country || !dob || !agreeTerms || !agreeName)) return;

    setSubmitting(true);
    timers.current.push(window.setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      timers.current.push(window.setTimeout(() => {
        router.push('/pricing');
      }, 1500));
    }, 900));
  };

  return (
    <AuthShell title={a.createTitle}>
      {success ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full border-2 border-neutral-900 dark:border-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-bold">{d.successTitle}</h2>
          <p className="text-xs text-neutral-600 dark:text-neutral-400">{d.successDesc}</p>
        </div>
      ) : (
        <>
          <AuthGoogle onClick={() => handleSubmit({ preventDefault() {} } as React.FormEvent, true)} />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <AuthField label={d.firstName} required>
                <input required type="text" autoComplete="given-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} className={authInputCls} />
              </AuthField>
              <AuthField label={d.lastName} required>
                <input required type="text" autoComplete="family-name" value={lastName} onChange={(e) => setLastName(e.target.value)} className={authInputCls} />
              </AuthField>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <AuthField label={a.title}>
                <select value={honorific} onChange={(e) => setHonorific(e.target.value)} className={authInputCls}>
                  <option value="">{a.selectTitle}</option>
                  <option value="mr">{a.mr}</option>
                  <option value="ms">{a.ms}</option>
                </select>
              </AuthField>
              <AuthField label={a.dob} required>
                <input required type="date" value={dob} max={new Date().toISOString().slice(0, 10)} onChange={(e) => setDob(e.target.value)} className={authInputCls} />
              </AuthField>
            </div>

            <AuthField label={a.country} required>
              <select required value={country} onChange={(e) => setCountry(e.target.value)} className={authInputCls}>
                <option value="">{a.selectCountry}</option>
                {countries.map(([code, name]) => <option key={code} value={code}>{name}</option>)}
              </select>
            </AuthField>

            <AuthField label={a.emailAddress} required>
              <input required type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={authInputCls} />
            </AuthField>

            <AuthField label={a.phone}>
              <input type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+__ ___ ___ ____" className={authInputCls} />
            </AuthField>

            <div className="grid grid-cols-2 gap-3">
              <AuthField label={d.password} required>
                <div className="relative">
                  <input required minLength={8} type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} className={authInputCls + ' pr-10'} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white p-1 cursor-pointer" aria-label={d.password}>
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </AuthField>
              <AuthField label={a.confirmPassword} required>
                <input ref={confirmRef} required type={showPassword ? 'text' : 'password'} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={authInputCls} />
              </AuthField>
            </div>
            {confirm && confirm !== password && <p role="alert" className="-mt-2 text-xs font-semibold text-red-500">{a.mismatch}</p>}

            <AuthField label={a.referral} optional={a.optional}>
              <input type="text" value={referral} onChange={(e) => setReferral(e.target.value)} className={authInputCls} />
            </AuthField>

            <div className="space-y-2.5 pt-1 text-xs leading-snug text-neutral-700 dark:text-neutral-300 select-none">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input required type="checkbox" checked={agreeTerms} onChange={(e) => setAgreeTerms(e.target.checked)} className="w-4 h-4 mt-0.5 rounded accent-[#ffc501] cursor-pointer" />
                <span>{a.cert18} <Link href="/terms" className="font-bold text-neutral-900 dark:text-white hover:underline">{d.termsAndConditions}</Link></span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input required type="checkbox" checked={agreeName} onChange={(e) => setAgreeName(e.target.checked)} className="w-4 h-4 mt-0.5 rounded accent-[#ffc501] cursor-pointer" />
                <span>{a.certName}</span>
              </label>
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input type="checkbox" checked={agreeMarketing} onChange={(e) => setAgreeMarketing(e.target.checked)} className="w-4 h-4 mt-0.5 rounded accent-[#ffc501] cursor-pointer" />
                <span>{a.marketing}</span>
              </label>
            </div>

            <button type="submit" disabled={submitting} className={authPrimaryCls}>
              {submitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>{d.submittingText}</span>
                </>
              ) : (
                <span>{d.signUpBtn}</span>
              )}
            </button>

            <p className="pt-1 text-center text-xs text-neutral-600 dark:text-neutral-300">
              {d.alreadyHaveAccount}{' '}
              <Link href="/login" className="font-bold text-neutral-900 dark:text-white hover:underline">{d.signIn}</Link>
            </p>
          </form>
        </>
      )}
    </AuthShell>
  );
}
