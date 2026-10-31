'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { useTheme } from '@/components/eracex/ThemeContext';
import { BrandLogo } from '@/components/eracex/BrandLogo';
import { Eye, EyeOff, ArrowLeft, CheckCircle2, Lock, X } from 'lucide-react';

interface LoginDictionary {
  welcome: string;
  email: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  loginBtn: string;
  authenticating: string;
  dontHaveAccount: string;
  createOne: string;
  backToHome: string;
  successTitle: string;
  successDesc: string;
  resetTitle: string;
  resetDesc: string;
  sendReset: string;
  resetSuccess: string;
  verified: string;
  privacy: string;
  help: string;
}

const DICTIONARY: Record<string, LoginDictionary> = {
  vi: {
    welcome: 'CHÀO MỪNG TRỞ LẠI',
    email: 'Email',
    password: 'Mật khẩu',
    rememberMe: 'Ghi nhớ đăng nhập',
    forgotPassword: 'Quên mật khẩu?',
    loginBtn: 'Đăng Nhập',
    authenticating: 'Đang xác thực...',
    dontHaveAccount: 'Chưa có tài khoản?',
    createOne: 'Tạo tài khoản mới',
    backToHome: 'Quay lại Trang Chủ',
    successTitle: 'Đăng Nhập Thành Công!',
    successDesc: 'Đang chuyển hướng đến cổng khách hàng giao dịch...',
    resetTitle: 'Khôi Phục Mật Khẩu',
    resetDesc: 'Nhập email đã đăng ký của bạn để nhận hướng dẫn đặt lại mật khẩu.',
    sendReset: 'Gửi Hướng Dẫn',
    resetSuccess: 'Đã gửi hướng dẫn khôi phục mật khẩu vào hòm thư của bạn!',
    verified: 'Thành công!',
    privacy: 'Bảo mật',
    help: 'Trợ giúp',
  },
  zh: {
    welcome: '欢迎',
    email: '电子邮箱',
    password: '登录密码',
    rememberMe: '记住登录状态',
    forgotPassword: '忘记密码？',
    loginBtn: '立即登录',
    authenticating: '正在验证身份...',
    dontHaveAccount: '还没有交易账户？',
    createOne: '立即注册新账户',
    backToHome: '返回官方首页',
    successTitle: '登录成功！',
    successDesc: '正在进入交易员控制中心...',
    resetTitle: '重置登录密码',
    resetDesc: '输入您的注册邮箱以获取密码重置说明。',
    sendReset: '发送重置邮件',
    resetSuccess: '重置说明已发送至您的邮箱！',
    verified: '验证成功！',
    privacy: '隐私政策',
    help: '帮助中心',
  },
  ja: {
    welcome: 'ようこそ',
    email: 'メールアドレス',
    password: 'パスワード',
    rememberMe: 'ログイン状態を保持',
    forgotPassword: 'パスワードをお忘れですか？',
    loginBtn: 'ログイン',
    authenticating: '認証中...',
    dontHaveAccount: 'アカウントをお持ちでないですか？',
    createOne: '新規アカウント作成',
    backToHome: 'ホームに戻る',
    successTitle: 'ログインに成功しました！',
    successDesc: 'トレーダーダッシュボードへ移動しています...',
    resetTitle: 'パスワードの再設定',
    resetDesc: '登録されたメールアドレスを入力してください。',
    sendReset: '再設定メールを送信',
    resetSuccess: 'パスワード再設定手順を送信しました！',
    verified: '認証成功！',
    privacy: 'プライバシー',
    help: 'ヘルプ',
  },
  en: {
    welcome: 'WELCOME',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginBtn: 'Login',
    authenticating: 'Authenticating...',
    dontHaveAccount: "Don't have an account?",
    createOne: 'Create one',
    backToHome: 'Back to Home',
    successTitle: 'Login Successful!',
    successDesc: 'Redirecting to Trader Client Portal...',
    resetTitle: 'Reset Password',
    resetDesc: 'Enter your registered email address to receive reset instructions.',
    sendReset: 'Send Instructions',
    resetSuccess: 'Password reset link sent to your email inbox!',
    verified: 'Success!',
    privacy: 'Privacy',
    help: 'Help',
  },
  es: {
      "welcome": "BIENVENIDO",
      "email": "Correo Electrónico",
      "password": "Contraseña",
      "rememberMe": "Recordarme",
      "forgotPassword": "¿Olvidaste tu contraseña?",
      "loginBtn": "Iniciar Sesión",
      "authenticating": "Autenticando...",
      "dontHaveAccount": "¿No tienes una cuenta?",
      "createOne": "Crear una cuenta",
      "backToHome": "Volver al Inicio",
      "successTitle": "¡Inicio de Sesión Exitoso!",
      "successDesc": "Redirigiendo al portal de traders...",
      "resetTitle": "Restablecer Contraseña",
      "resetDesc": "Ingresa tu correo electrónico registrado para recibir instrucciones.",
      "sendReset": "Enviar Instrucciones",
      "resetSuccess": "¡Enlace de recuperación enviado a tu bandeja de entrada!",
      "verified": "¡Verificado!",
      "privacy": "Privacidad",
      "help": "Ayuda"
  },
  pt: {
      "welcome": "BEM-VINDO",
      "email": "E-mail",
      "password": "Senha",
      "rememberMe": "Lembrar de mim",
      "forgotPassword": "Esqueceu a senha?",
      "loginBtn": "Entrar",
      "authenticating": "Autenticando...",
      "dontHaveAccount": "Não tem uma conta?",
      "createOne": "Criar uma conta",
      "backToHome": "Voltar ao Início",
      "successTitle": "Login Realizado com Sucesso!",
      "successDesc": "Redirecionando para o portal do trader...",
      "resetTitle": "Redefinir Senha",
      "resetDesc": "Insira seu e-mail cadastrado para receber instruções de recuperação.",
      "sendReset": "Enviar Instruções",
      "resetSuccess": "Link de redefinição de senha enviado para seu e-mail!",
      "verified": "Sucesso!",
      "privacy": "Privacidade",
      "help": "Ajuda"
  },
  fr: {
      "welcome": "BIENVENUE",
      "email": "Adresse E-mail",
      "password": "Mot de passe",
      "rememberMe": "Se souvenir de moi",
      "forgotPassword": "Mot de passe oublié ?",
      "loginBtn": "Se Connecter",
      "authenticating": "Authentification en cours...",
      "dontHaveAccount": "Vous n'avez pas de compte ?",
      "createOne": "Créer un compte",
      "backToHome": "Retour à l'accueil",
      "successTitle": "Connexion Réussie !",
      "successDesc": "Redirection vers le portail trader...",
      "resetTitle": "Réinitialiser le Mot de passe",
      "resetDesc": "Entrez votre e-mail enregistré pour recevoir les instructions.",
      "sendReset": "Envoyer les Instructions",
      "resetSuccess": "Lien de réinitialisation envoyé dans votre boîte de réception !",
      "verified": "Vérifié !",
      "privacy": "Confidentialité",
      "help": "Aide"
  },
  de: {
      "welcome": "WILLKOMMEN",
      "email": "E-Mail-Adresse",
      "password": "Passwort",
      "rememberMe": "Angemeldet bleiben",
      "forgotPassword": "Passwort vergessen?",
      "loginBtn": "Anmelden",
      "authenticating": "Authentifizierung läuft...",
      "dontHaveAccount": "Noch kein Konto?",
      "createOne": "Konto erstellen",
      "backToHome": "Zurück zur Startseite",
      "successTitle": "Anmeldung Erfolgreich!",
      "successDesc": "Weiterleitung zum Trader-Portal...",
      "resetTitle": "Passwort Zurücksetzen",
      "resetDesc": "Geben Sie Ihre registrierte E-Mail-Adresse ein, um Anweisungen zu erhalten.",
      "sendReset": "Anweisungen Senden",
      "resetSuccess": "Link zum Zurücksetzen an Ihre E-Mail gesendet!",
      "verified": "Erfolgreich!",
      "privacy": "Datenschutz",
      "help": "Hilfe"
  },
  it: {
      "welcome": "BENVENUTO",
      "email": "Indirizzo E-mail",
      "password": "Password",
      "rememberMe": "Ricordami",
      "forgotPassword": "Password dimenticata?",
      "loginBtn": "Accedi",
      "authenticating": "Autenticazione in corso...",
      "dontHaveAccount": "Non hai un account?",
      "createOne": "Creane uno nuovo",
      "backToHome": "Torna alla Home",
      "successTitle": "Accesso Riuscito!",
      "successDesc": "Reindirizzamento al portale trader...",
      "resetTitle": "Reimposta Password",
      "resetDesc": "Inserisci la tua e-mail registrata per ricevere le istruzioni.",
      "sendReset": "Invia Istruzioni",
      "resetSuccess": "Link di reimpostazione inviato alla tua casella e-mail!",
      "verified": "Verificato!",
      "privacy": "Privacy",
      "help": "Aiuto"
  },
  pl: {
      "welcome": "WITAMY",
      "email": "Adres E-mail",
      "password": "Hasło",
      "rememberMe": "Zapamiętaj mnie",
      "forgotPassword": "Nie pamiętasz hasła?",
      "loginBtn": "Zaloguj Się",
      "authenticating": "Uwierzytelnianie...",
      "dontHaveAccount": "Nie masz jeszcze konta?",
      "createOne": "Załóż nowe konto",
      "backToHome": "Powrót do Strony Głównej",
      "successTitle": "Logowanie Zakończone Sukcesem!",
      "successDesc": "Przekierowywanie do portalu tradera...",
      "resetTitle": "Zresetuj Hasło",
      "resetDesc": "Wprowadź zarejestrowany adres e-mail, aby otrzymać instrukcje.",
      "sendReset": "Wyślij Instrukcje",
      "resetSuccess": "Link do resetu hasła został wysłany na Twój e-mail!",
      "verified": "Zweryfikowano!",
      "privacy": "Prywatność",
      "help": "Pomoc"
  },
  tr: {
      "welcome": "HOŞ GELDİNİZ",
      "email": "E-posta Adresi",
      "password": "Şifre",
      "rememberMe": "Beni hatırla",
      "forgotPassword": "Şifrenizi mi unuttunuz?",
      "loginBtn": "Giriş Yap",
      "authenticating": "Kimlik doğrulanıyor...",
      "dontHaveAccount": "Hesabınız yok mu?",
      "createOne": "Yeni hesap oluştur",
      "backToHome": "Ana Sayfaya Dön",
      "successTitle": "Giriş Başarılı!",
      "successDesc": "Yatırımcı paneline yönlendiriliyorsunuz...",
      "resetTitle": "Şifreyi Sıfırla",
      "resetDesc": "Sıfırlama talimatlarını almak için kayıtlı e-posta adresinizi girin.",
      "sendReset": "Talimatları Gönder",
      "resetSuccess": "Şifre sıfırlama bağlantısı e-posta adresinize gönderildi!",
      "verified": "Başarılı!",
      "privacy": "Gizlilik",
      "help": "Yardım"
  },
  id: {
      "welcome": "SELAMAT DATANG",
      "email": "Alamat Email",
      "password": "Kata Sandi",
      "rememberMe": "Ingat saya",
      "forgotPassword": "Lupa kata sandi?",
      "loginBtn": "Masuk Sekarang",
      "authenticating": "Mengautentikasi...",
      "dontHaveAccount": "Belum memiliki akun?",
      "createOne": "Buat akun baru",
      "backToHome": "Kembali ke Beranda",
      "successTitle": "Login Berhasil!",
      "successDesc": "Mengarahkan ke portal trader klien...",
      "resetTitle": "Atur Ulang Kata Sandi",
      "resetDesc": "Masukkan email terdaftar Anda untuk menerima instruksi reset.",
      "sendReset": "Kirim Instruksi",
      "resetSuccess": "Tautan reset kata sandi telah dikirim ke kotak masuk email Anda!",
      "verified": "Berhasil!",
      "privacy": "Privasi",
      "help": "Bantuan"
  },
  th: {
      "welcome": "ยินดีต้อนรับ",
      "email": "อีเมล",
      "password": "รหัสผ่าน",
      "rememberMe": "จดจำการเข้าสู่ระบบ",
      "forgotPassword": "ลืมรหัสผ่าน?",
      "loginBtn": "เข้าสู่ระบบ",
      "authenticating": "กำลังยืนยันตัวตน...",
      "dontHaveAccount": "ยังไม่มีบัญชีใช่หรือไม่?",
      "createOne": "สร้างบัญชีใหม่",
      "backToHome": "กลับสู่หน้าหลัก",
      "successTitle": "เข้าสู่ระบบสำเร็จ!",
      "successDesc": "กำลังนำคุณไปยังพอร์ทัลเทรดเดอร์...",
      "resetTitle": "รีเซ็ตรหัสผ่าน",
      "resetDesc": "กรอกอีเมลที่ลงทะเบียนของคุณเพื่อรับคำแนะนำในการรีเซ็ตรหัสผ่าน",
      "sendReset": "ส่งคำแนะนำ",
      "resetSuccess": "ส่งลิงก์รีเซ็ตรหัสผ่านไปยังกล่องจดหมายอีเมลของคุณแล้ว!",
      "verified": "สำเร็จ!",
      "privacy": "ความเป็นส่วนตัว",
      "help": "ช่วยเหลือ"
  },
  fil: {
      "welcome": "MALIGAYANG PAGDATING",
      "email": "Email",
      "password": "Password",
      "rememberMe": "Tandaan ako",
      "forgotPassword": "Nakalimutan ang password?",
      "loginBtn": "Mag-login",
      "authenticating": "Pinapatunayan...",
      "dontHaveAccount": "Wala ka pang account?",
      "createOne": "Gumawa ng bago",
      "backToHome": "Bumalik sa Home",
      "successTitle": "Tagumpay ang Pag-login!",
      "successDesc": "Dinarala ka sa Trader Portal...",
      "resetTitle": "I-reset ang Password",
      "resetDesc": "Ilagay ang iyong rehistradong email upang makatanggap ng tagubilin.",
      "sendReset": "Ipadala ang Tagubilin",
      "resetSuccess": "Naipadala ang password reset link sa iyong email!",
      "verified": "Tagumpay!",
      "privacy": "Privacy",
      "help": "Tulong"
  },
  hi: {
      "welcome": "स्वागत है",
      "email": "ईमेल",
      "password": "पासवर्ड",
      "rememberMe": "मुझे याद रखें",
      "forgotPassword": "पासवर्ड भूल गए?",
      "loginBtn": "लॉग इन करें",
      "authenticating": "सत्यापन जारी है...",
      "dontHaveAccount": "खाता नहीं है?",
      "createOne": "नया खाता बनाएं",
      "backToHome": "होम पेज पर वापस जाएं",
      "successTitle": "लॉगिन सफल रहा!",
      "successDesc": "ट्रेडर पोर्टल पर रीडायरेक्ट किया जा रहा है...",
      "resetTitle": "पासवर्ड रीसेट करें",
      "resetDesc": "रीसेट निर्देश प्राप्त करने के लिए अपना पंजीकृत ईमेल दर्ज करें।",
      "sendReset": "निर्देश भेजें",
      "resetSuccess": "पासवर्ड रीसेट लिंक आपके ईमेल पर भेज दिया गया है!",
      "verified": "सफल!",
      "privacy": "गोपनीयता",
      "help": "सहायता"
  },
  ko: {
      "welcome": "로그인을 환영합니다",
      "email": "이메일 주소",
      "password": "비밀번호",
      "rememberMe": "로그인 상태 유지",
      "forgotPassword": "비밀번호를 잊으셨나요?",
      "loginBtn": "로그인",
      "authenticating": "인증 진행 중...",
      "dontHaveAccount": "계정이 없으신가요?",
      "createOne": "새 계정 만들기",
      "backToHome": "홈으로 돌아가기",
      "successTitle": "로그인 성공!",
      "successDesc": "트레이더 포털로 이동 중입니다...",
      "resetTitle": "비밀번호 재설정",
      "resetDesc": "등록된 이메일 주소를 입력하시면 재설정 링크를 보내드립니다.",
      "sendReset": "재설정 메일 발송",
      "resetSuccess": "비밀번호 재설정 메일이 전송되었습니다!",
      "verified": "인증 성공!",
      "privacy": "개인정보처리방침",
      "help": "고객센터"
  },
  ru: {
      "welcome": "С ВОЗВРАЩЕНИЕМ",
      "email": "Электронная почта",
      "password": "Пароль",
      "rememberMe": "Запомнить меня",
      "forgotPassword": "Забыли пароль?",
      "loginBtn": "Войти",
      "authenticating": "Аутентификация...",
      "dontHaveAccount": "Еще нет аккаунта?",
      "createOne": "Создать аккаунт",
      "backToHome": "Вернуться на главную",
      "successTitle": "Вход выполнен успешно!",
      "successDesc": "Перенаправление в личный кабинет трейдера...",
      "resetTitle": "Сброс пароля",
      "resetDesc": "Введите ваш зарегистрированный e-mail для получения инструкций.",
      "sendReset": "Отправить инструкцию",
      "resetSuccess": "Ссылка для сброса пароля отправлена на ваш e-mail!",
      "verified": "Успешно!",
      "privacy": "Конфиденциальность",
      "help": "Помощь"
  },
  ar: {
      "welcome": "مرحباً بعودتك",
      "email": "البريد الإلكتروني",
      "password": "كلمة المرور",
      "rememberMe": "تذكرني",
      "forgotPassword": "هل نسيت كلمة المرور؟",
      "loginBtn": "تسجيل الدخول",
      "authenticating": "جارٍ التحقق...",
      "dontHaveAccount": "ليس لديك حساب؟",
      "createOne": "إنشاء حساب جديد",
      "backToHome": "العودة إلى الصفحة الرئيسية",
      "successTitle": "تم تسجيل الدخول بنجاح!",
      "successDesc": "جارٍ التحويل إلى بوابة المتداول...",
      "resetTitle": "إعادة تعيين كلمة المرور",
      "resetDesc": "أدخل بريدك الإلكتروني المسجل لتلقي تعليمات إعادة التعيين.",
      "sendReset": "إرسال التعليمات",
      "resetSuccess": "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك!",
      "verified": "تم بنجاح!",
      "privacy": "الخصوصية",
      "help": "المساعدة"
  },
  nl: {
      "welcome": "WELKOM TERUG",
      "email": "E-mailadres",
      "password": "Wachtwoord",
      "rememberMe": "Onthoud mij",
      "forgotPassword": "Wachtwoord vergeten?",
      "loginBtn": "Inloggen",
      "authenticating": "Authenticeren...",
      "dontHaveAccount": "Nog geen account?",
      "createOne": "Maak een account aan",
      "backToHome": "Terug naar Home",
      "successTitle": "Succesvol Ingelogd!",
      "successDesc": "U wordt doorgestuurd naar het Trader Portal...",
      "resetTitle": "Wachtwoord Resetten",
      "resetDesc": "Voer uw geregistreerde e-mailadres in om herstelinstructies te ontvangen.",
      "sendReset": "Verstuur Instructies",
      "resetSuccess": "Resetlink is naar uw e-mail verzonden!",
      "verified": "Succes!",
      "privacy": "Privacy",
      "help": "Hulp"
  },
};

export default function LoginPage() {
  const router = useRouter();
  const { currentLang } = useLanguage();
  const { theme } = useTheme();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [cloudflareVerified, setCloudflareVerified] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setLoginSuccess(true);
      setTimeout(() => {
        router.push('/pricing');
      }, 1500);
    }, 800);
  };


  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-between items-center p-4 relative font-sans transition-colors duration-200 selection:bg-[#ffc501] selection:text-black">
      {/* TOP HEADER: ONLY THE BACK BUTTON AS REQUESTED */}
      <header className="w-full max-w-5xl mx-auto py-4 flex items-center justify-start z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 text-xs font-mono font-bold text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all shadow-xs"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-[#c68a00] dark:text-[#f6bf4a]" />
          <span>{d.backToHome}</span>
        </Link>
      </header>

      {/* CENTER LOGIN CARD - LOGIN CARD */}
      <main className="w-full flex items-center justify-center my-auto py-6 z-10">
        <div className="w-full max-w-[420px] rounded-[28px] bg-white dark:bg-[#0c0d12] border border-neutral-200 dark:border-white/[0.08] p-7 sm:p-9 shadow-xl dark:shadow-2xl relative transition-colors duration-200">
          
          {/* LOGO: OFFICIAL ERACEX PROP TRADING */}
          <div className="flex flex-col items-center justify-center mb-2">
            <Link href="/" className="transition-transform hover:scale-105 duration-200">
              <BrandLogo size="lg" showText={true} forceWhiteText={false} />
            </Link>

            {/* BOLD UPPERCASE TITLE */}
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-neutral-900 dark:text-white text-center mt-6 mb-6 font-sans">
              {d.welcome}
            </h1>
          </div>

          {loginSuccess ? (
            <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-14 h-14 rounded-full bg-[#f6bf4a]/20 border-2 border-[#f6bf4a] text-[#f6bf4a] dark:text-[#f6bf4a] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
                {d.successTitle}
              </h2>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">
                {d.successDesc}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* EMAIL INPUT WITH IN-FIELD RED ASTERISK */}
              <div className="relative">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-white/5 focus:border-[#c68a00] dark:focus:border-[#f6bf4a]/60 text-neutral-900 dark:text-white text-sm outline-none transition-all focus:bg-white dark:focus:bg-[#1a1a1a]"
                />
                {!email && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm text-neutral-400 dark:text-neutral-400 select-none">
                    {d.email} <span className="text-[#f6bf4a] font-bold">*</span>
                  </div>
                )}
              </div>

              {/* PASSWORD INPUT WITH IN-FIELD RED ASTERISK & EYE TOGGLE */}
              <div className="relative">
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-11 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-white/5 focus:border-[#c68a00] dark:focus:border-[#f6bf4a]/60 text-neutral-900 dark:text-white text-sm outline-none transition-all focus:bg-white dark:focus:bg-[#1a1a1a]"
                />
                {!password && (
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-sm text-neutral-400 dark:text-neutral-400 select-none">
                    {d.password} <span className="text-[#f6bf4a] font-bold">*</span>
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* REMEMBER ME & FORGOT PASSWORD */}
              <div className="flex items-center justify-between text-xs pt-1 select-none">
                <label className="flex items-center gap-2 cursor-pointer text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded bg-neutral-100 dark:bg-[#171717] border-neutral-300 dark:border-white/20 text-[#c68a00] dark:text-[#f6bf4a] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[#ffc501]"
                  />
                  <span>{d.rememberMe}</span>
                </label>

                <Link
                  href="/reset-password"
                  className="text-[#c68a00] dark:text-[#f6bf4a] hover:underline font-semibold transition-colors"
                >
                  {d.forgotPassword}
                </Link>
              </div>

              {/* BRAND GOLD LOGIN BUTTON */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 rounded-xl text-sm font-extrabold tracking-wide text-black bg-[#ffc501] hover:bg-[#e6b200] active:scale-[0.99] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 mt-4"
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>{d.authenticating}</span>
                  </>
                ) : (
                  <span>{d.loginBtn}</span>
                )}
              </button>

              {/* FOOTER LINK: DON'T HAVE AN ACCOUNT? CREATE ONE */}
              <div className="pt-3 text-center text-xs font-medium text-neutral-600 dark:text-white">
                <span>{d.dontHaveAccount} </span>
                <Link
                  href="/sign-up"
                  className="text-[#c68a00] dark:text-[#f6bf4a] hover:underline font-bold transition-colors ml-1"
                >
                  {d.createOne}
                </Link>
              </div>

            </form>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <footer className="w-full text-center py-3 text-[11px] font-mono text-neutral-500 dark:text-neutral-500 z-10">
        <span>© 2026 ERACEX Institutional Proprietary Trading · Client Portal</span>
      </footer>
    </div>
  );
}
