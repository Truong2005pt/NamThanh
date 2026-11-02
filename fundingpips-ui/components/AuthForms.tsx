'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { AuthError, confirmReset, login, register, requestReset, verifyOtp } from '@/lib/auth';

const T = {
  en: {
    loginTitle: 'Welcome back', loginDesc: 'Log in to your account to continue.', email: 'Email address', password: 'Password', remember: 'Remember me', forgot: 'Forgot password?', login: 'Log in',
    noAccount: "Don't have an account?", signup: 'Sign up', signupTitle: 'Create your account', signupDesc: 'It only takes a minute.', name: 'Full name', confirm: 'Confirm password', agree: 'I agree to the', terms: 'Terms & Conditions', and: 'and', privacy: 'Privacy Policy', haveAccount: 'Already have an account?',
    resetTitle: 'Reset password', resetDesc: 'Enter your registered email address. We will send a one-time code to it.', send: 'Send code', otpTitle: 'Enter the code', otpDesc: 'We sent a 6-digit code to', otp: 'One-time code', verify: 'Verify', resend: 'Resend code', resendIn: 'Resend in', other: 'Use another email',
    newTitle: 'New password', newDesc: 'Choose a new password, then enter it again to confirm.', save: 'Save new password', doneTitle: 'Password changed', doneDesc: 'You can now log in with your new password.', toLogin: 'Go to login', back: 'Back to login',
    eEmail: 'Please enter a valid email address.', ePass: 'Please enter your password.', eName: 'Please enter your full name.', eShort: 'Password must be at least 8 characters.', eMatch: 'The two passwords do not match.', eAgree: 'Please accept the terms to continue.', eOtp: 'Please enter the 6-digit code.',
    eRejected: 'The details are not valid. Please try again.', eNetwork: 'Could not reach the server. Please try again later.', eNot: 'The account system is not connected yet.',
  },
  vi: {
    loginTitle: 'Chào mừng trở lại', loginDesc: 'Đăng nhập vào tài khoản để tiếp tục.', email: 'Địa chỉ email', password: 'Mật khẩu', remember: 'Ghi nhớ đăng nhập', forgot: 'Quên mật khẩu?', login: 'Đăng nhập',
    noAccount: 'Chưa có tài khoản?', signup: 'Đăng ký', signupTitle: 'Tạo tài khoản', signupDesc: 'Chỉ mất một phút.', name: 'Họ và tên', confirm: 'Nhập lại mật khẩu', agree: 'Tôi đồng ý với', terms: 'Điều khoản sử dụng', and: 'và', privacy: 'Chính sách bảo mật', haveAccount: 'Đã có tài khoản?',
    resetTitle: 'Đặt lại mật khẩu', resetDesc: 'Nhập địa chỉ email đã đăng ký. Chúng tôi sẽ gửi mã xác nhận một lần tới email này.', send: 'Gửi mã', otpTitle: 'Nhập mã xác nhận', otpDesc: 'Mã gồm 6 chữ số đã được gửi tới', otp: 'Mã xác nhận', verify: 'Xác nhận', resend: 'Gửi lại mã', resendIn: 'Gửi lại sau', other: 'Dùng email khác',
    newTitle: 'Mật khẩu mới', newDesc: 'Nhập mật khẩu mới, sau đó nhập lại để xác nhận.', save: 'Lưu mật khẩu mới', doneTitle: 'Đã đổi mật khẩu', doneDesc: 'Bạn có thể đăng nhập bằng mật khẩu mới.', toLogin: 'Đến trang đăng nhập', back: 'Quay lại đăng nhập',
    eEmail: 'Vui lòng nhập địa chỉ email hợp lệ.', ePass: 'Vui lòng nhập mật khẩu.', eName: 'Vui lòng nhập họ và tên.', eShort: 'Mật khẩu phải có ít nhất 8 ký tự.', eMatch: 'Hai mật khẩu không khớp.', eAgree: 'Vui lòng đồng ý điều khoản để tiếp tục.', eOtp: 'Vui lòng nhập mã 6 chữ số.',
    eRejected: 'Thông tin không hợp lệ. Vui lòng thử lại.', eNetwork: 'Không kết nối được máy chủ. Vui lòng thử lại sau.', eNot: 'Hệ thống tài khoản chưa được kết nối.',
  },
};

function useT() {
  const { lang } = useLang();
  return lang === 'vi' ? T.vi : T.en;
}

const field = 'w-full h-12 px-4 rounded-xl bg-card2 border border-line text-sm outline-none focus:border-accent-2';
const btn = 'btn btn-primary w-full !h-12 !rounded-xl disabled:opacity-60';
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function useFail() {
  const c = useT();
  const [error, setError] = useState('');
  const fail = (e: unknown) => setError(e instanceof AuthError ? (e.code === 'not-configured' ? c.eNot : e.code === 'network' ? c.eNetwork : c.eRejected) : c.eNetwork);
  return { error, setError, fail };
}

function Password({ value, onChange, label, show, setShow, auto }: { value: string; onChange: (v: string) => void; label: string; show: boolean; setShow: (b: boolean) => void; auto: string }) {
  return (
    <div className="relative">
      <input type={show ? 'text' : 'password'} autoComplete={auto} value={value} onChange={(e) => onChange(e.target.value)} placeholder={label} aria-label={label} className={`${field} pr-12`} />
      <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-ink" aria-label="toggle password visibility">{show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
    </div>
  );
}

const Heading = ({ title, desc }: { title: string; desc: string }) => (
  <div className="mb-7"><h1 className="text-3xl font-extrabold tracking-tight">{title}</h1><p className="text-muted mt-2 text-[0.9375rem]">{desc}</p></div>
);
const Err = ({ msg }: { msg: string }) => (msg ? <p role="alert" className="text-sm font-semibold text-red-500">{msg}</p> : null);

export function LoginForm() {
  const c = useT();
  const [email, setEmail] = useState(''); const [pw, setPw] = useState(''); const [show, setShow] = useState(false); const [busy, setBusy] = useState(false);
  const { error, setError, fail } = useFail();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (!isEmail(email)) return setError(c.eEmail);
    if (!pw) return setError(c.ePass);
    setBusy(true);
    try { const r = await login(email.trim(), pw); if (r.redirect) location.href = r.redirect; } catch (x) { fail(x); } finally { setBusy(false); }
  };
  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <Heading title={c.loginTitle} desc={c.loginDesc} />
      <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.email} aria-label={c.email} className={field} />
      <Password value={pw} onChange={setPw} label={c.password} show={show} setShow={setShow} auto="current-password" />
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted cursor-pointer"><input type="checkbox" className="w-4 h-4 accent-[var(--accent)]" />{c.remember}</label>
        <Link href="/reset-password" className="font-semibold text-accent2 hover:underline">{c.forgot}</Link>
      </div>
      <Err msg={error} />
      <button type="submit" disabled={busy} className={btn}>{c.login}</button>
      <p className="text-sm text-muted text-center">{c.noAccount} <Link href="/sign-up" className="font-bold text-accent2 hover:underline">{c.signup}</Link></p>
    </form>
  );
}

export function SignUpForm() {
  const c = useT();
  const [name, setName] = useState(''); const [email, setEmail] = useState(''); const [pw, setPw] = useState(''); const [pw2, setPw2] = useState('');
  const [show, setShow] = useState(false); const [agree, setAgree] = useState(false); const [busy, setBusy] = useState(false);
  const { error, setError, fail } = useFail();
  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    if (!name.trim()) return setError(c.eName);
    if (!isEmail(email)) return setError(c.eEmail);
    if (pw.length < 8) return setError(c.eShort);
    if (pw !== pw2) return setError(c.eMatch);
    if (!agree) return setError(c.eAgree);
    setBusy(true);
    try { const r = await register(name.trim(), email.trim(), pw); if (r.redirect) location.href = r.redirect; } catch (x) { fail(x); } finally { setBusy(false); }
  };
  return (
    <form onSubmit={submit} noValidate className="grid gap-4">
      <Heading title={c.signupTitle} desc={c.signupDesc} />
      <input autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={c.name} aria-label={c.name} className={field} />
      <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.email} aria-label={c.email} className={field} />
      <Password value={pw} onChange={setPw} label={c.password} show={show} setShow={setShow} auto="new-password" />
      <input type={show ? 'text' : 'password'} autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} placeholder={c.confirm} aria-label={c.confirm} className={field} />
      <label className="flex items-start gap-2.5 text-sm text-muted cursor-pointer">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="w-4 h-4 mt-0.5 accent-[var(--accent)]" />
        <span>{c.agree} <Link href="/terms-and-conditions" className="font-semibold text-accent2 hover:underline">{c.terms}</Link> {c.and} <Link href="/privacy-policy" className="font-semibold text-accent2 hover:underline">{c.privacy}</Link></span>
      </label>
      <Err msg={error} />
      <button type="submit" disabled={busy} className={btn}>{c.signup}</button>
      <p className="text-sm text-muted text-center">{c.haveAccount} <Link href="/login" className="font-bold text-accent2 hover:underline">{c.login}</Link></p>
    </form>
  );
}

export function ResetFlow() {
  const c = useT();
  type Step = 'email' | 'otp' | 'password' | 'done';
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState(''); const [otp, setOtp] = useState(''); const [token, setToken] = useState('');
  const [pw, setPw] = useState(''); const [pw2, setPw2] = useState(''); const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false); const [cool, setCool] = useState(0);
  const { error, setError, fail } = useFail();
  useEffect(() => { if (cool <= 0) return; const id = setTimeout(() => setCool((n) => n - 1), 1000); return () => clearTimeout(id); }, [cool]);

  const run = async (fn: () => Promise<void>) => { setBusy(true); try { await fn(); } catch (x) { fail(x); } finally { setBusy(false); } };
  const sendCode = (e?: React.FormEvent) => { e?.preventDefault(); setError(''); if (!isEmail(email)) return setError(c.eEmail); run(async () => { await requestReset(email.trim()); setStep('otp'); setOtp(''); setCool(60); }); };
  const verify = (e: React.FormEvent) => { e.preventDefault(); setError(''); if (!/^\d{6}$/.test(otp)) return setError(c.eOtp); run(async () => { const r = await verifyOtp(email.trim(), otp); setToken(r.resetToken || ''); setStep('password'); }); };
  const save = (e: React.FormEvent) => { e.preventDefault(); setError(''); if (pw.length < 8) return setError(c.eShort); if (pw !== pw2) return setError(c.eMatch); run(async () => { await confirmReset(token, pw); setStep('done'); }); };

  return (
    <div className="grid gap-4">
      {step === 'email' && (
        <form onSubmit={sendCode} noValidate className="grid gap-4">
          <Heading title={c.resetTitle} desc={c.resetDesc} />
          <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.email} aria-label={c.email} className={field} />
          <Err msg={error} />
          <button type="submit" disabled={busy} className={btn}>{c.send}</button>
        </form>
      )}
      {step === 'otp' && (
        <form onSubmit={verify} noValidate className="grid gap-4">
          <Heading title={c.otpTitle} desc={`${c.otpDesc} ${email}`} />
          <input inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={otp} onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))} placeholder="000000" aria-label={c.otp} className={`${field} text-center text-xl font-mono tracking-[0.5em]`} />
          <Err msg={error} />
          <button type="submit" disabled={busy} className={btn}>{c.verify}</button>
          <div className="flex items-center justify-between text-sm">
            <button type="button" onClick={() => { setStep('email'); setError(''); }} className="text-muted hover:underline">{c.other}</button>
            <button type="button" disabled={cool > 0 || busy} onClick={() => sendCode()} className="font-semibold text-accent2 hover:underline disabled:opacity-50 disabled:no-underline">{cool > 0 ? `${c.resendIn} ${cool}s` : c.resend}</button>
          </div>
        </form>
      )}
      {step === 'password' && (
        <form onSubmit={save} noValidate className="grid gap-4">
          <Heading title={c.newTitle} desc={c.newDesc} />
          <Password value={pw} onChange={setPw} label={c.password} show={show} setShow={setShow} auto="new-password" />
          <input type={show ? 'text' : 'password'} autoComplete="new-password" value={pw2} onChange={(e) => setPw2(e.target.value)} placeholder={c.confirm} aria-label={c.confirm} className={field} />
          <Err msg={error} />
          <button type="submit" disabled={busy} className={btn}>{c.save}</button>
        </form>
      )}
      {step === 'done' && (
        <div className="grid gap-5 text-center">
          <Heading title={c.doneTitle} desc={c.doneDesc} />
          <Link href="/login" className="btn btn-primary !h-12 !rounded-xl">{c.toLogin}</Link>
        </div>
      )}
      {step !== 'done' && <Link href="/login" className="flex items-center justify-center gap-1.5 text-sm text-muted hover:underline mt-2"><ArrowLeft className="w-4 h-4" />{c.back}</Link>}
    </div>
  );
}
