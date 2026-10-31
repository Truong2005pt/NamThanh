const fs = require('fs');

const dict = JSON.parse(fs.readFileSync('scratch/checkout_modal_dict.json', 'utf8'));

const newCheckoutModalCode = `'use client';

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

const TEXT: Record<string, CheckoutTextItem> = ${JSON.stringify(dict, null, 2)};

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, product, sizeIndex }) => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT['en'];

  const [payment, setPayment] = useState<'card' | 'paypal'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [promo, setPromo] = useState('');
  const [agreed, setAgreed] = useState(false); // never pre-ticked
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
                      className={\`flex items-center justify-center gap-2 py-3 rounded-xl border font-bold transition-all \${
                        payment === id
                          ? 'border-[#f6bf4a] bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#ffc501]'
                          : 'border-neutral-200 dark:border-white/10'
                      }\`}
                    >
                      <CreditCard className="w-4 h-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* LEGAL CONSENT: required, unticked by default */}
            <div className={\`rounded-xl border p-4 \${showError && !agreed ? 'border-red-500 bg-red-500/5' : 'border-neutral-200 dark:border-white/10'}\`}>
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
              className={\`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm transition-all \${
                agreed ? 'btn-gold text-black shadow-xl' : 'bg-neutral-200 dark:bg-white/10 text-neutral-500 cursor-not-allowed'
              }\`}
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
`;

fs.writeFileSync('components/eracex/CheckoutModal.tsx', newCheckoutModalCode, 'utf8');
console.log('Successfully wrote typed CheckoutModal.tsx with all 19 languages');
