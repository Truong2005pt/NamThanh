'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { AuthShell, AuthField, authInputCls, authPrimaryCls } from './AuthShell';
import { AuthApiError, confirmPasswordReset, requestPasswordReset, verifyResetOtp } from '@/lib/auth-api';

const TEXT: Record<string, Record<string, string>> = {
  "en": {
    "back": "Back to login",
    "titleEmail": "Reset Password",
    "descEmail": "Enter your registered email address. We will send a one-time code to it.",
    "email": "Email address",
    "sendCode": "Send code",
    "titleOtp": "Enter the code",
    "descOtp": "We sent a 6-digit code to",
    "otp": "One-time code",
    "verify": "Verify",
    "resend": "Resend code",
    "resendIn": "Resend in",
    "changeEmail": "Use another email",
    "titleNew": "New password",
    "descNew": "Choose a new password, then enter it again to confirm.",
    "password": "New password",
    "confirm": "Confirm new password",
    "save": "Save new password",
    "titleDone": "Password changed",
    "descDone": "You can now log in with your new password.",
    "toLogin": "Go to login",
    "errEmail": "Please enter a valid email address.",
    "errOtp": "Please enter the 6-digit code.",
    "errShort": "Password must be at least 8 characters.",
    "errMatch": "The two passwords do not match.",
    "errRejected": "The code is not valid or has expired. Please try again.",
    "errNetwork": "Could not reach the server. Please try again later.",
    "errNotConfigured": "Password reset is not connected to the account system yet."
  },
  "vi": {
    "back": "Quay lại đăng nhập",
    "titleEmail": "Đặt Lại Mật Khẩu",
    "descEmail": "Nhập địa chỉ email đã đăng ký. Chúng tôi sẽ gửi mã xác nhận một lần tới email này.",
    "email": "Địa chỉ email",
    "sendCode": "Gửi mã",
    "titleOtp": "Nhập mã xác nhận",
    "descOtp": "Mã gồm 6 chữ số đã được gửi tới",
    "otp": "Mã xác nhận",
    "verify": "Xác nhận",
    "resend": "Gửi lại mã",
    "resendIn": "Gửi lại sau",
    "changeEmail": "Dùng email khác",
    "titleNew": "Mật khẩu mới",
    "descNew": "Nhập mật khẩu mới, sau đó nhập lại để xác nhận.",
    "password": "Mật khẩu mới",
    "confirm": "Nhập lại mật khẩu mới",
    "save": "Lưu mật khẩu mới",
    "titleDone": "Đã đổi mật khẩu",
    "descDone": "Bạn có thể đăng nhập bằng mật khẩu mới.",
    "toLogin": "Đến trang đăng nhập",
    "errEmail": "Vui lòng nhập địa chỉ email hợp lệ.",
    "errOtp": "Vui lòng nhập mã 6 chữ số.",
    "errShort": "Mật khẩu phải có ít nhất 8 ký tự.",
    "errMatch": "Hai mật khẩu không khớp.",
    "errRejected": "Mã không đúng hoặc đã hết hạn. Vui lòng thử lại.",
    "errNetwork": "Không kết nối được máy chủ. Vui lòng thử lại sau.",
    "errNotConfigured": "Chức năng đặt lại mật khẩu chưa được kết nối với hệ thống tài khoản."
  },
  "zh": {
    "back": "返回登录",
    "titleEmail": "重置密码",
    "descEmail": "请输入您的注册邮箱地址。我们将向该邮箱发送一次性验证码。",
    "email": "电子邮箱地址",
    "sendCode": "发送验证码",
    "titleOtp": "输入验证码",
    "descOtp": "我们已向以下邮箱发送了6位数字验证码：",
    "otp": "一次性验证码",
    "verify": "验证",
    "resend": "重新发送验证码",
    "resendIn": "重新发送倒计时",
    "changeEmail": "更换其他邮箱",
    "titleNew": "设置新密码",
    "descNew": "请输入新密码，并再次输入以进行确认。",
    "password": "新密码",
    "confirm": "确认新密码",
    "save": "保存新密码",
    "titleDone": "密码已成功重置",
    "descDone": "您现在可以使用新密码登录账户。",
    "toLogin": "前往登录页面",
    "errEmail": "请输入有效的电子邮箱地址。",
    "errOtp": "请输入完整的6位验证码。",
    "errShort": "密码长度至少需要8个字符。",
    "errMatch": "两次输入的密码不一致。",
    "errRejected": "验证码无效或已过期，请重试。",
    "errNetwork": "无法连接至服务器，请稍后重试。",
    "errNotConfigured": "重置密码系统暂未连接至账户服务。"
  },
  "ja": {
    "back": "ログインに戻る",
    "titleEmail": "パスワードのリセット",
    "descEmail": "ご登録のメールアドレスを入力してください。ワンタイム確認コードを送信します。",
    "email": "メールアドレス",
    "sendCode": "コードを送信",
    "titleOtp": "コードを入力",
    "descOtp": "次のアドレスに6桁の確認コードを送信しました：",
    "otp": "ワンタイムコード",
    "verify": "確認",
    "resend": "コードを再送信",
    "resendIn": "再送信可能まで",
    "changeEmail": "別のメールアドレスを使用",
    "titleNew": "新しいパスワード",
    "descNew": "新しいパスワードを入力し、確認のため再入力してください。",
    "password": "新しいパスワード",
    "confirm": "新しいパスワード（確認）",
    "save": "新しいパスワードを保存",
    "titleDone": "パスワードが変更されました",
    "descDone": "新しいパスワードでログインできるようになりました。",
    "toLogin": "ログイン画面へ",
    "errEmail": "有効なメールアドレスを入力してください。",
    "errOtp": "6桁のコードを入力してください。",
    "errShort": "パスワードは8文字以上である必要があります。",
    "errMatch": "パスワードが一致しません。",
    "errRejected": "コードが無効か、有効期限が切れています。もう一度お試しください。",
    "errNetwork": "サーバーに接続できませんでした。後でもう一度お試しください。",
    "errNotConfigured": "パスワードリセット機能はまだアカウントシステムに接続されていません。"
  },
  "ko": {
    "back": "로그인으로 돌아가기",
    "titleEmail": "비밀번호 재설정",
    "descEmail": "가입 시 등록한 이메일 주소를 입력해 주세요. 일회용 인증 코드가 발송됩니다.",
    "email": "이메일 주소",
    "sendCode": "인증 코드 발송",
    "titleOtp": "인증 코드 입력",
    "descOtp": "다음 이메일로 6자리 인증 코드가 전송되었습니다:",
    "otp": "일회용 인증 코드",
    "verify": "인증 확인",
    "resend": "코드 재전송",
    "resendIn": "재전송 가능까지",
    "changeEmail": "다른 이메일 사용",
    "titleNew": "새 비밀번호 설정",
    "descNew": "새 비밀번호를 입력하고 확인을 위해 한 번 더 입력해 주세요.",
    "password": "새 비밀번호",
    "confirm": "새 비밀번호 확인",
    "save": "새 비밀번호 저장",
    "titleDone": "비밀번호 변경 완료",
    "descDone": "이제 새 비밀번호로 로그인하실 수 있습니다.",
    "toLogin": "로그인 페이지로 이동",
    "errEmail": "유효한 이메일 주소를 입력해 주세요.",
    "errOtp": "6자리 인증 코드를 정확히 입력해 주세요.",
    "errShort": "비밀번호는 최소 8자 이상이어야 합니다.",
    "errMatch": "두 비밀번호가 일치하지 않습니다.",
    "errRejected": "인증 코드가 유효하지 않거나 만료되었습니다. 다시 시도해 주세요.",
    "errNetwork": "서버에 연결할 수 없습니다. 잠시 후 다시 시도해 주세요.",
    "errNotConfigured": "비밀번호 재설정 기능이 아직 계정 시스템에 연동되지 않았습니다."
  },
  "es": {
    "back": "Volver a iniciar sesión",
    "titleEmail": "Restablecer Contraseña",
    "descEmail": "Ingresa tu dirección de correo electrónico registrada. Te enviaremos un código de un solo uso.",
    "email": "Correo electrónico",
    "sendCode": "Enviar código",
    "titleOtp": "Introduce el código",
    "descOtp": "Hemos enviado un código de 6 dígitos a",
    "otp": "Código de un solo uso",
    "verify": "Verificar",
    "resend": "Reenviar código",
    "resendIn": "Reenviar en",
    "changeEmail": "Usar otro correo",
    "titleNew": "Nueva contraseña",
    "descNew": "Elige una nueva contraseña y escríbela de nuevo para confirmar.",
    "password": "Nueva contraseña",
    "confirm": "Confirmar nueva contraseña",
    "save": "Guardar nueva contraseña",
    "titleDone": "Contraseña cambiada",
    "descDone": "Ahora puedes iniciar sesión con tu nueva contraseña.",
    "toLogin": "Ir a iniciar sesión",
    "errEmail": "Por favor, introduce un correo electrónico válido.",
    "errOtp": "Por favor, introduce el código de 6 dígitos.",
    "errShort": "La contraseña debe tener al menos 8 caracteres.",
    "errMatch": "Las contraseñas no coinciden.",
    "errRejected": "El código no es válido o ha caducado. Inténtalo de nuevo.",
    "errNetwork": "No se pudo conectar con el servidor. Inténtalo de nuevo más tarde.",
    "errNotConfigured": "El restablecimiento de contraseña aún no está conectado al sistema de cuentas."
  },
  "pt": {
    "back": "Voltar para o login",
    "titleEmail": "Redefinir Senha",
    "descEmail": "Digite seu endereço de e-mail cadastrado. Enviaremos um código de verificação único.",
    "email": "Endereço de e-mail",
    "sendCode": "Enviar código",
    "titleOtp": "Digite o código",
    "descOtp": "Enviamos um código de 6 dígitos para",
    "otp": "Código único",
    "verify": "Verificar",
    "resend": "Reenviar código",
    "resendIn": "Reenviar em",
    "changeEmail": "Usar outro e-mail",
    "titleNew": "Nova senha",
    "descNew": "Escolha uma nova senha e digite-a novamente para confirmar.",
    "password": "Nova senha",
    "confirm": "Confirmar nova senha",
    "save": "Salvar nova senha",
    "titleDone": "Senha alterada",
    "descDone": "Agora você pode entrar com sua nova senha.",
    "toLogin": "Ir para o login",
    "errEmail": "Por favor, insira um endereço de e-mail válido.",
    "errOtp": "Por favor, digite o código de 6 dígitos.",
    "errShort": "A senha deve ter pelo menos 8 caracteres.",
    "errMatch": "As senhas não coincidem.",
    "errRejected": "O código é inválido ou expirou. Tente novamente.",
    "errNetwork": "Não foi possível conectar ao servidor. Tente novamente mais tarde.",
    "errNotConfigured": "A redefinição de senha ainda não está conectada ao sistema de contas."
  },
  "fr": {
    "back": "Retour à la connexion",
    "titleEmail": "Réinitialiser le Mot de Passe",
    "descEmail": "Entrez votre adresse e-mail enregistrée. Nous vous enverrons un code à usage unique.",
    "email": "Adresse e-mail",
    "sendCode": "Envoyer le code",
    "titleOtp": "Entrez le code",
    "descOtp": "Nous avons envoyé un code à 6 chiffres à",
    "otp": "Code à usage unique",
    "verify": "Vérifier",
    "resend": "Renvoyer le code",
    "resendIn": "Renvoyer dans",
    "changeEmail": "Utiliser un autre e-mail",
    "titleNew": "Nouveau mot de passe",
    "descNew": "Choisissez un nouveau mot de passe, puis saisissez-le à nouveau pour confirmer.",
    "password": "Nouveau mot de passe",
    "confirm": "Confirmer le nouveau mot de passe",
    "save": "Enregistrer le mot de passe",
    "titleDone": "Mot de passe modifié",
    "descDone": "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.",
    "toLogin": "Aller à la connexion",
    "errEmail": "Veuillez entrer une adresse e-mail valide.",
    "errOtp": "Veuillez entrer le code à 6 chiffres.",
    "errShort": "Le mot de passe doit comporter au moins 8 caractères.",
    "errMatch": "Les deux mots de passe ne correspondent pas.",
    "errRejected": "Le code est invalide ou a expiré. Veuillez réessayer.",
    "errNetwork": "Impossible de joindre le serveur. Veuillez réessayer plus tard.",
    "errNotConfigured": "La réinitialisation du mot de passe n'est pas encore connectée au système de compte."
  },
  "de": {
    "back": "Zurück zur Anmeldung",
    "titleEmail": "Passwort zurücksetzen",
    "descEmail": "Geben Sie Ihre registrierte E-Mail-Adresse ein. Wir senden Ihnen einen Einmalcode.",
    "email": "E-Mail-Adresse",
    "sendCode": "Code senden",
    "titleOtp": "Code eingeben",
    "descOtp": "Wir haben einen 6-stelligen Code gesendet an",
    "otp": "Einmalcode",
    "verify": "Bestätigen",
    "resend": "Code erneut senden",
    "resendIn": "Erneut senden in",
    "changeEmail": "Andere E-Mail verwenden",
    "titleNew": "Neues Passwort",
    "descNew": "Wählen Sie ein neues Passwort und geben Sie es zur Bestätigung erneut ein.",
    "password": "Neues Passwort",
    "confirm": "Neues Passwort bestätigen",
    "save": "Neues Passwort speichern",
    "titleDone": "Passwort geändert",
    "descDone": "Sie können sich jetzt mit Ihrem neuen Passwort anmelden.",
    "toLogin": "Zur Anmeldung",
    "errEmail": "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    "errOtp": "Bitte geben Sie den 6-stelligen Code ein.",
    "errShort": "Das Passwort muss mindestens 8 Zeichen lang sein.",
    "errMatch": "Die beiden Passwörter stimmen nicht überein.",
    "errRejected": "Der Code ist ungültig oder abgelaufen. Bitte versuchen Sie es erneut.",
    "errNetwork": "Server konnte nicht erreicht werden. Bitte versuchen Sie es später erneut.",
    "errNotConfigured": "Das Zurücksetzen des Passworts ist noch nicht mit dem Kontosystem verbunden."
  },
  "it": {
    "back": "Torna al login",
    "titleEmail": "Reimposta Password",
    "descEmail": "Inserisci il tuo indirizzo email registrato. Ti invieremo un codice monouso.",
    "email": "Indirizzo email",
    "sendCode": "Invia codice",
    "titleOtp": "Inserisci il codice",
    "descOtp": "Abbiamo inviato un codice a 6 cifre a",
    "otp": "Codice monouso",
    "verify": "Verifica",
    "resend": "Reinvia codice",
    "resendIn": "Reinvia tra",
    "changeEmail": "Usa un'altra email",
    "titleNew": "Nuova password",
    "descNew": "Scegli una nuova password, quindi inseriscila di nuovo per confermare.",
    "password": "Nuova password",
    "confirm": "Conferma nuova password",
    "save": "Salva nuova password",
    "titleDone": "Password modificata",
    "descDone": "Ora puoi accedere con la tua nuova password.",
    "toLogin": "Vai al login",
    "errEmail": "Inserisci un indirizzo email valido.",
    "errOtp": "Inserisci il codice a 6 cifre.",
    "errShort": "La password deve contenere almeno 8 caratteri.",
    "errMatch": "Le due password non corrispondono.",
    "errRejected": "Il codice non è valido o è scaduto. Riprova.",
    "errNetwork": "Impossibile raggiungere il server. Riprova più tardi.",
    "errNotConfigured": "Il ripristino della password non è ancora collegato al sistema degli account."
  },
  "pl": {
    "back": "Wróć do logowania",
    "titleEmail": "Zresetuj Hasło",
    "descEmail": "Wprowadź zarejestrowany adres e-mail. Wyślemy na niego jednorazowy kod.",
    "email": "Adres e-mail",
    "sendCode": "Wyślij kod",
    "titleOtp": "Wprowadź kod",
    "descOtp": "Wysłaliśmy 6-cyfrowy kod na adres",
    "otp": "Kod jednorazowy",
    "verify": "Weryfikuj",
    "resend": "Wyślij kod ponownie",
    "resendIn": "Wyślij ponownie za",
    "changeEmail": "Użyj innego adresu e-mail",
    "titleNew": "Nowe hasło",
    "descNew": "Wybierz nowe hasło, a następnie wprowadź je ponownie, aby potwierdzić.",
    "password": "Nowe hasło",
    "confirm": "Potwierdź nowe hasło",
    "save": "Zapisz nowe hasło",
    "titleDone": "Hasło zmienione",
    "descDone": "Możesz się teraz zalogować przy użyciu nowego hasła.",
    "toLogin": "Przejdź do logowania",
    "errEmail": "Wprowadź prawidłowy adres e-mail.",
    "errOtp": "Wprowadź 6-cyfrowy kod.",
    "errShort": "Hasło musi mieć co najmniej 8 znaków.",
    "errMatch": "Hasła nie są identyczne.",
    "errRejected": "Kod jest nieprawidłowy lub wygasł. Spróbuj ponownie.",
    "errNetwork": "Nie można połączyć się z serwerem. Spróbuj ponownie później.",
    "errNotConfigured": "Resetowanie hasła nie jest jeszcze połączone z systemem kont."
  },
  "tr": {
    "back": "Giriş yap sayfasına dön",
    "titleEmail": "Şifreyi Sıfırla",
    "descEmail": "Kayıtlı e-posta adresinizi girin. Size tek kullanımlık bir doğrulama kodu göndereceğiz.",
    "email": "E-posta adresi",
    "sendCode": "Kod gönder",
    "titleOtp": "Kodu girin",
    "descOtp": "6 haneli doğrulama kodunu şu adrese gönderdik:",
    "otp": "Tek kullanımlık kod",
    "verify": "Doğrula",
    "resend": "Kodu tekrar gönder",
    "resendIn": "Tekrar gönderim:",
    "changeEmail": "Başka bir e-posta kullan",
    "titleNew": "Yeni şifre",
    "descNew": "Yeni bir şifre seçin ve onaylamak için tekrar girin.",
    "password": "Yeni şifre",
    "confirm": "Yeni şifreyi onayla",
    "save": "Yeni şifreyi kaydet",
    "titleDone": "Şifre değiştirildi",
    "descDone": "Artık yeni şifrenizle giriş yapabilirsiniz.",
    "toLogin": "Girişe git",
    "errEmail": "Lütfen geçerli bir e-posta adresi girin.",
    "errOtp": "Lütfen 6 haneli kodu girin.",
    "errShort": "Şifre en az 8 karakter uzunluğunda olmalıdır.",
    "errMatch": "İki şifre birbiriyle eşleşmiyor.",
    "errRejected": "Kod geçersiz veya süresi dolmuş. Lütfen tekrar deneyin.",
    "errNetwork": "Sunucuya ulaşılamadı. Lütfen daha sonra tekrar deneyin.",
    "errNotConfigured": "Şifre sıfırlama sistemi henüz hesap sistemine bağlanmadı."
  },
  "id": {
    "back": "Kembali ke login",
    "titleEmail": "Reset Kata Sandi",
    "descEmail": "Masukkan alamat email Anda yang terdaftar. Kami akan mengirimkan kode sekali pakai ke email tersebut.",
    "email": "Alamat email",
    "sendCode": "Kirim kode",
    "titleOtp": "Masukkan kode",
    "descOtp": "Kami telah mengirimkan 6 digit kode ke",
    "otp": "Kode sekali pakai",
    "verify": "Verifikasi",
    "resend": "Kirim ulang kode",
    "resendIn": "Kirim ulang dalam",
    "changeEmail": "Gunakan email lain",
    "titleNew": "Kata sandi baru",
    "descNew": "Pilih kata sandi baru, lalu masukkan kembali untuk konfirmasi.",
    "password": "Kata sandi baru",
    "confirm": "Konfirmasi kata sandi baru",
    "save": "Simpan kata sandi baru",
    "titleDone": "Kata sandi berhasil diubah",
    "descDone": "Sekarang Anda dapat login dengan kata sandi baru Anda.",
    "toLogin": "Menuju halaman login",
    "errEmail": "Silakan masukkan alamat email yang valid.",
    "errOtp": "Silakan masukkan 6 digit kode.",
    "errShort": "Kata sandi minimal harus 8 karakter.",
    "errMatch": "Kedua kata sandi tidak cocok.",
    "errRejected": "Kode tidak valid atau telah kedaluwarsa. Silakan coba lagi.",
    "errNetwork": "Tidak dapat terhubung ke server. Silakan coba lagi nanti.",
    "errNotConfigured": "Fitur reset kata sandi belum terhubung ke sistem akun."
  },
  "th": {
    "back": "กลับสู่หน้าเข้าสู่ระบบ",
    "titleEmail": "รีเซ็ตรหัสผ่าน",
    "descEmail": "กรอกที่อยู่อีเมลที่คุณลงทะเบียนไว้ เราจะส่งรหัสแบบใช้ครั้งเดียวไปให้",
    "email": "ที่อยู่อีเมล",
    "sendCode": "ส่งรหัส",
    "titleOtp": "กรอกรหัสยืนยัน",
    "descOtp": "เราได้ส่งรหัส 6 หลักไปที่",
    "otp": "รหัสใช้ครั้งเดียว",
    "verify": "ยืนยัน",
    "resend": "ส่งรหัสอีกครั้ง",
    "resendIn": "ส่งอีกครั้งใน",
    "changeEmail": "ใช้อีเมลอื่น",
    "titleNew": "รหัสผ่านใหม่",
    "descNew": "เลือกรหัสผ่านใหม่ แล้วกรอกอีกครั้งเพื่อยืนยัน",
    "password": "รหัสผ่านใหม่",
    "confirm": "ยืนยันรหัสผ่านใหม่",
    "save": "บันทึกรหัสผ่านใหม่",
    "titleDone": "เปลี่ยนรหัสผ่านสำเร็จแล้ว",
    "descDone": "คุณสามารถเข้าสู่ระบบด้วยรหัสผ่านใหม่ได้ทันที",
    "toLogin": "ไปที่หน้าเข้าสู่ระบบ",
    "errEmail": "โปรดกรอกที่อยู่อีเมลที่ถูกต้อง",
    "errOtp": "โปรดกรอกรหัส 6 หลัก",
    "errShort": "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร",
    "errMatch": "รหัสผ่านทั้งสองช่องไม่ตรงกัน",
    "errRejected": "รหัสไม่ถูกต้องหรือหมดอายุแล้ว โปรดลองอีกครั้ง",
    "errNetwork": "ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ โปรดลองอีกครั้งในภายหลัง",
    "errNotConfigured": "ระบบรีเซ็ตรหัสผ่านยังไม่ได้เชื่อมต่อกับระบบบัญชี"
  },
  "fil": {
    "back": "Bumalik sa login",
    "titleEmail": "I-reset ang Password",
    "descEmail": "Ilagay ang iyong nakarehistrong email address. Magpapadala kami ng one-time code dito.",
    "email": "Email address",
    "sendCode": "Ipadala ang code",
    "titleOtp": "Ilagay ang code",
    "descOtp": "Nagpadala kami ng 6-digit na code sa",
    "otp": "One-time code",
    "verify": "I-verify",
    "resend": "Ipadala muli ang code",
    "resendIn": "Muling ipadala sa",
    "changeEmail": "Gumamit ng ibang email",
    "titleNew": "Bagong password",
    "descNew": "Pumili ng bagong password, pagkatapos ay ilagay ito muli upang kumpirmahin.",
    "password": "Bagong password",
    "confirm": "Kumpirmahin ang bagong password",
    "save": "I-save ang bagong password",
    "titleDone": "Nabago na ang password",
    "descDone": "Maaari ka nang mag-log in gamit ang iyong bagong password.",
    "toLogin": "Pumunta sa login",
    "errEmail": "Mangyaring maglagay ng wastong email address.",
    "errOtp": "Mangyaring ilagay ang 6-digit na code.",
    "errShort": "Ang password ay dapat may hindi bababa sa 8 character.",
    "errMatch": "Hindi magkatugma ang dalawang password.",
    "errRejected": "Ang code ay hindi wasto o nag-expire na. Pakisubukan muli.",
    "errNetwork": "Hindi maabot ang server. Pakisubukan muli mamaya.",
    "errNotConfigured": "Ang password reset ay hindi pa nakakonekta sa account system."
  },
  "hi": {
    "back": "लॉगिन पर वापस जाएं",
    "titleEmail": "पासवर्ड रीसेट करें",
    "descEmail": "अपना पंजीकृत ईमेल पता दर्ज करें। हम उस पर एक बार का कोड भेजेंगे।",
    "email": "ईमेल पता",
    "sendCode": "कोड भेजें",
    "titleOtp": "कोड दर्ज करें",
    "descOtp": "हमने 6-अंकीय कोड भेजा है:",
    "otp": "वन-टाइम कोड",
    "verify": "सत्यापित करें",
    "resend": "कोड पुनः भेजें",
    "resendIn": "पुनः भेजें:",
    "changeEmail": "दूसरा ईमेल उपयोग करें",
    "titleNew": "नया पासवर्ड",
    "descNew": "एक नया पासवर्ड चुनें, फिर पुष्टि करने के लिए इसे दोबारा दर्ज करें।",
    "password": "नया पासवर्ड",
    "confirm": "नए पासवर्ड की पुष्टि करें",
    "save": "नया पासवर्ड सहेजें",
    "titleDone": "पासवर्ड बदल दिया गया है",
    "descDone": "अब आप अपने नए पासवर्ड से लॉगिन कर सकते हैं।",
    "toLogin": "लॉगिन पर जाएं",
    "errEmail": "कृपया एक मान्य ईमेल पता दर्ज करें।",
    "errOtp": "कृपया 6-अंकीय कोड दर्ज करें।",
    "errShort": "पासवर्ड कम से कम 8 वर्णों का होना चाहिए।",
    "errMatch": "दोनों पासवर्ड मेल नहीं खाते।",
    "errRejected": "कोड अमान्य है या समाप्त हो गया है। कृपया पुन: प्रयास करें।",
    "errNetwork": "सर्वर से कनेक्ट नहीं हो सका। कृपया बाद में पुन: प्रयास करें।",
    "errNotConfigured": "पासवर्ड रीसेट अभी खाता प्रणाली से जुड़ा नहीं है।"
  },
  "ru": {
    "back": "Назад ко входу",
    "titleEmail": "Сброс Пароля",
    "descEmail": "Введите ваш зарегистрированный адрес электронной почты. Мы отправим на него одноразовый код.",
    "email": "Адрес эл. почты",
    "sendCode": "Отправить код",
    "titleOtp": "Введите код",
    "descOtp": "Мы отправили 6-значный код на",
    "otp": "Одноразовый код",
    "verify": "Подтвердить",
    "resend": "Отправить код повторно",
    "resendIn": "Повторная отправка через",
    "changeEmail": "Использовать другую почту",
    "titleNew": "Новый пароль",
    "descNew": "Придумайте новый пароль и введите его еще раз для подтверждения.",
    "password": "Новый пароль",
    "confirm": "Подтвердите новый пароль",
    "save": "Сохранить новый пароль",
    "titleDone": "Пароль успешно изменен",
    "descDone": "Теперь вы можете войти в систему с новым паролем.",
    "toLogin": "Перейти ко входу",
    "errEmail": "Пожалуйста, введите корректный адрес эл. почты.",
    "errOtp": "Пожалуйста, введите 6-значный код.",
    "errShort": "Пароль должен содержать не менее 8 символов.",
    "errMatch": "Пароли не совпадают.",
    "errRejected": "Код недействителен или срок его действия истек. Попробуйте еще раз.",
    "errNetwork": "Не удалось связаться с сервером. Повторите попытку позже.",
    "errNotConfigured": "Сброс пароля пока не подключен к системе учетных записей."
  },
  "ar": {
    "back": "العودة لتسجيل الدخول",
    "titleEmail": "إعادة تعيين كلمة المرور",
    "descEmail": "أدخل عنوان بريدك الإلكتروني المسجل. سنرسل إليه رمز تحقق لمرة واحدة.",
    "email": "البريد الإلكتروني",
    "sendCode": "إرسال الرمز",
    "titleOtp": "أدخل الرمز",
    "descOtp": "أرسلنا رمزًا مكونًا من 6 أرقام إلى",
    "otp": "رمز التحقق",
    "verify": "تأكيد",
    "resend": "إعادة إرسال الرمز",
    "resendIn": "إعادة الإرسال خلال",
    "changeEmail": "استخدام بريد إلكتروني آخر",
    "titleNew": "كلمة المرور الجديدة",
    "descNew": "اختر كلمة مرور جديدة، ثم أعد إدخالها للتأكيد.",
    "password": "كلمة المرور الجديدة",
    "confirm": "تأكيد كلمة المرور الجديدة",
    "save": "حفظ كلمة المرور الجديدة",
    "titleDone": "تم تغيير كلمة المرور بنجاح",
    "descDone": "يمكنك الآن تسجيل الدخول باستخدام كلمة المرور الجديدة.",
    "toLogin": "الانتقال إلى تسجيل الدخول",
    "errEmail": "يرجى إدخال عنوان بريد إلكتروني صالح.",
    "errOtp": "يرجى إدخال الرمز المكون من 6 أرقام.",
    "errShort": "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    "errMatch": "كلمتا المرور غير متطابقتين.",
    "errRejected": "الرمز غير صالح أو انتهت صلاحيته. يرجى المحاولة مرة أخرى.",
    "errNetwork": "تعذر الاتصال بالخادم. يرجى المحاولة مرة أخرى لاحقًا.",
    "errNotConfigured": "خدمة استعادة كلمة المرور غير متصلة بنظام الحسابات حاليًا."
  },
  "nl": {
    "back": "Terug naar inloggen",
    "titleEmail": "Wachtwoord Resetten",
    "descEmail": "Voer uw geregistreerde e-mailadres in. We sturen een eenmalige verificatiecode.",
    "email": "E-mailadres",
    "sendCode": "Code versturen",
    "titleOtp": "Voer de code in",
    "descOtp": "We hebben een 6-cijferige code verzonden naar",
    "otp": "Eenmalige code",
    "verify": "Verifiëren",
    "resend": "Code opnieuw verzenden",
    "resendIn": "Opnieuw verzenden over",
    "changeEmail": "Gebruik een ander e-mailadres",
    "titleNew": "Nieuw wachtwoord",
    "descNew": "Kies een nieuw wachtwoord en voer het nogmaals in ter bevestiging.",
    "password": "Nieuw wachtwoord",
    "confirm": "Bevestig nieuw wachtwoord",
    "save": "Nieuw wachtwoord opslaan",
    "titleDone": "Wachtwoord gewijzigd",
    "descDone": "U kunt nu inloggen met uw nieuwe wachtwoord.",
    "toLogin": "Ga naar inloggen",
    "errEmail": "Voer een geldig e-mailadres in.",
    "errOtp": "Voer de 6-cijferige code in.",
    "errShort": "Wachtwoord moet minimaal 8 tekens lang zijn.",
    "errMatch": "De twee wachtwoorden komen niet overeen.",
    "errRejected": "De code is ongeldig of verlopen. Probeer het opnieuw.",
    "errNetwork": "Kon geen verbinding maken met de server. Probeer het later opnieuw.",
    "errNotConfigured": "Wachtwoord reset is nog niet gekoppeld aan het accountsysteem."
  }
};

type Step = 'email' | 'otp' | 'password' | 'done';

const field = authInputCls;
const primary = authPrimaryCls;

export const ResetPasswordFlow: React.FC = () => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT.en;

  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown <= 0) return;
    const t = window.setTimeout(() => setCooldown((n) => n - 1), 1000);
    return () => window.clearTimeout(t);
  }, [cooldown]);

  const fail = (e: unknown) => {
    if (e instanceof AuthApiError) {
      setError(e.code === 'not-configured' ? c.errNotConfigured : e.code === 'network' ? c.errNetwork : c.errRejected);
    } else {
      setError(c.errNetwork);
    }
  };

  const sendCode = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setError('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError(c.errEmail);
    setBusy(true);
    try {
      await requestPasswordReset(email.trim());
      setStep('otp');
      setOtp('');
      setCooldown(60);
    } catch (err) {
      fail(err);
    } finally {
      setBusy(false);
    }
  };

  const verify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^\d{6}$/.test(otp)) return setError(c.errOtp);
    setBusy(true);
    try {
      const res = await verifyResetOtp(email.trim(), otp);
      setResetToken(res.resetToken || '');
      setStep('password');
    } catch (err) {
      fail(err);
    } finally {
      setBusy(false);
    }
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password.length < 8) return setError(c.errShort);
    if (password !== confirm) return setError(c.errMatch);
    setBusy(true);
    try {
      await confirmPasswordReset(resetToken, password);
      setStep('done');
    } catch (err) {
      fail(err);
    } finally {
      setBusy(false);
    }
  };

  const title = { email: c.titleEmail, otp: c.titleOtp, password: c.titleNew, done: c.titleDone }[step];

  return (
    <AuthShell title={title}>
      <div className="w-full">

        {step === 'email' && (
          <form onSubmit={sendCode} noValidate className="space-y-4">
            <p className="text-sm app-text-secondary text-center">{c.descEmail}</p>
            <AuthField label={c.email}><input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label={c.email} className={field} /></AuthField>
            <button type="submit" disabled={busy} className={primary}>{c.sendCode}</button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={verify} noValidate className="space-y-4">
            <p className="text-sm app-text-secondary text-center">
              {c.descOtp} <span className="font-bold app-text">{email}</span>
            </p>
            <input
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              placeholder="000000"
              aria-label={c.otp}
              className={`${field} text-center text-xl font-mono tracking-[0.5em]`}
            />
            <button type="submit" disabled={busy} className={primary}>{c.verify}</button>
            <div className="flex items-center justify-between text-xs">
              <button type="button" onClick={() => { setStep('email'); setError(''); }} className="app-text-secondary hover:underline">{c.changeEmail}</button>
              <button type="button" disabled={cooldown > 0 || busy} onClick={() => sendCode()} className="font-semibold text-[#c68a00] dark:text-[#f6bf4a] hover:underline disabled:opacity-50 disabled:no-underline">
                {cooldown > 0 ? `${c.resendIn} ${cooldown}s` : c.resend}
              </button>
            </div>
          </form>
        )}

        {step === 'password' && (
          <form onSubmit={save} noValidate className="space-y-4">
            <p className="text-sm app-text-secondary text-center">{c.descNew}</p>
            <AuthField label={c.password}><div className="relative">
              <input type={showPw ? 'text' : 'password'} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label={c.password} className={`${field} pr-11`} />
              <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 app-text-muted" aria-label="toggle password visibility">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div></AuthField>
            <AuthField label={c.confirm}><input type={showPw ? 'text' : 'password'} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} aria-label={c.confirm} className={field} /></AuthField>
            <button type="submit" disabled={busy} className={primary}>{c.save}</button>
          </form>
        )}

        {step === 'done' && (
          <div className="mt-5 space-y-5 text-center">
            <p className="text-sm app-text-secondary">{c.descDone}</p>
            <Link href="/login" className={`${primary} inline-flex items-center justify-center`}>{c.toLogin}</Link>
          </div>
        )}

        {error && (
          <p role="alert" className="mt-4 text-xs font-semibold text-red-500 text-center">{error}</p>
        )}

        {step !== 'done' && (
          <Link href="/login" className="mt-6 flex items-center justify-center gap-1.5 text-xs app-text-secondary hover:underline">
            <ArrowLeft className="w-3.5 h-3.5" />
            {c.back}
          </Link>
        )}
      </div>
    </AuthShell>
  );
};
