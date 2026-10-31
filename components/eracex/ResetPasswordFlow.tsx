'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { BrandLogo } from './BrandLogo';
import { AuthApiError, confirmPasswordReset, requestPasswordReset, verifyResetOtp } from '@/lib/auth-api';

const TEXT = {
  en: {
    back: 'Back to login',
    titleEmail: 'Reset Password',
    descEmail: 'Enter your registered email address. We will send a one-time code to it.',
    email: 'Email address',
    sendCode: 'Send code',
    titleOtp: 'Enter the code',
    descOtp: 'We sent a 6-digit code to',
    otp: 'One-time code',
    verify: 'Verify',
    resend: 'Resend code',
    resendIn: 'Resend in',
    changeEmail: 'Use another email',
    titleNew: 'New password',
    descNew: 'Choose a new password, then enter it again to confirm.',
    password: 'New password',
    confirm: 'Confirm new password',
    save: 'Save new password',
    titleDone: 'Password changed',
    descDone: 'You can now log in with your new password.',
    toLogin: 'Go to login',
    errEmail: 'Please enter a valid email address.',
    errOtp: 'Please enter the 6-digit code.',
    errShort: 'Password must be at least 8 characters.',
    errMatch: 'The two passwords do not match.',
    errRejected: 'The code is not valid or has expired. Please try again.',
    errNetwork: 'Could not reach the server. Please try again later.',
    errNotConfigured: 'Password reset is not connected to the account system yet.',
  },
  vi: {
    back: 'Quay lại đăng nhập',
    titleEmail: 'Đặt Lại Mật Khẩu',
    descEmail: 'Nhập địa chỉ email đã đăng ký. Chúng tôi sẽ gửi mã xác nhận một lần tới email này.',
    email: 'Địa chỉ email',
    sendCode: 'Gửi mã',
    titleOtp: 'Nhập mã xác nhận',
    descOtp: 'Mã gồm 6 chữ số đã được gửi tới',
    otp: 'Mã xác nhận',
    verify: 'Xác nhận',
    resend: 'Gửi lại mã',
    resendIn: 'Gửi lại sau',
    changeEmail: 'Dùng email khác',
    titleNew: 'Mật khẩu mới',
    descNew: 'Nhập mật khẩu mới, sau đó nhập lại để xác nhận.',
    password: 'Mật khẩu mới',
    confirm: 'Nhập lại mật khẩu mới',
    save: 'Lưu mật khẩu mới',
    titleDone: 'Đã đổi mật khẩu',
    descDone: 'Bạn có thể đăng nhập bằng mật khẩu mới.',
    toLogin: 'Đến trang đăng nhập',
    errEmail: 'Vui lòng nhập địa chỉ email hợp lệ.',
    errOtp: 'Vui lòng nhập mã 6 chữ số.',
    errShort: 'Mật khẩu phải có ít nhất 8 ký tự.',
    errMatch: 'Hai mật khẩu không khớp.',
    errRejected: 'Mã không đúng hoặc đã hết hạn. Vui lòng thử lại.',
    errNetwork: 'Không kết nối được máy chủ. Vui lòng thử lại sau.',
    errNotConfigured: 'Chức năng đặt lại mật khẩu chưa được kết nối với hệ thống tài khoản.',
  },
} as const;

type Step = 'email' | 'otp' | 'password' | 'done';

const field =
  'w-full h-11 px-4 rounded-xl bg-neutral-50 dark:bg-[#171717] border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white text-sm outline-none focus:border-[#c68a00] dark:focus:border-[#f6bf4a]';
const primary = 'w-full h-11 rounded-xl text-sm font-extrabold bg-[#ffc501] hover:bg-[#e6b200] text-black transition-colors disabled:opacity-60';

export const ResetPasswordFlow: React.FC = () => {
  const { currentLang } = useLanguage();
  const c = currentLang === 'vi' ? TEXT.vi : TEXT.en;

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
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 app-bg">
      <div className="w-full max-w-md rounded-3xl border app-border app-surface p-7 sm:p-9 shadow-xl">
        <div className="flex justify-center mb-6">
          <BrandLogo size="sm" />
        </div>
        <h1 className="text-2xl font-black app-text text-center">{title}</h1>

        {step === 'email' && (
          <form onSubmit={sendCode} noValidate className="mt-5 space-y-4">
            <p className="text-sm app-text-secondary text-center">{c.descEmail}</p>
            <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.email} aria-label={c.email} className={field} />
            <button type="submit" disabled={busy} className={primary}>{c.sendCode}</button>
          </form>
        )}

        {step === 'otp' && (
          <form onSubmit={verify} noValidate className="mt-5 space-y-4">
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
          <form onSubmit={save} noValidate className="mt-5 space-y-4">
            <p className="text-sm app-text-secondary text-center">{c.descNew}</p>
            <div className="relative">
              <input type={showPw ? 'text' : 'password'} autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder={c.password} aria-label={c.password} className={`${field} pr-11`} />
              <button type="button" onClick={() => setShowPw((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 app-text-muted" aria-label="toggle password visibility">
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <input type={showPw ? 'text' : 'password'} autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder={c.confirm} aria-label={c.confirm} className={field} />
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
    </div>
  );
};
