'use client';

import { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import { PARTNER } from '@/lib/config';

/** Ô tạo thử đường dẫn giới thiệu: gắn ?ref=MÃ vào địa chỉ website. */
export function ReferralBox() {
  const [code, setCode] = useState('');
  const [done, setDone] = useState(false);
  const [base, setBase] = useState('https://your-domain');
  useEffect(() => setBase(location.origin), []);
  const link = `${base}/?${PARTNER.refParams[0]}=${code || 'YOURCODE'}`;
  return (
    <div className="card p-6 max-w-2xl mx-auto">
      <label className="text-sm font-bold" htmlFor="refcode">Your referral link</label>
      <div className="flex flex-col sm:flex-row gap-3 mt-3">
        <input id="refcode" value={code} onChange={(e) => setCode(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))} placeholder="YOURCODE" className="h-12 px-4 rounded-xl border border-line bg-card2 outline-none focus:border-accent sm:w-48" />
        <div className="flex-1 flex items-center h-12 px-4 rounded-xl bg-card2 border border-line text-sm overflow-hidden"><span className="truncate font-mono">{link}</span></div>
        <button onClick={() => { navigator.clipboard?.writeText(link); setDone(true); setTimeout(() => setDone(false), 1500); }} className="btn btn-ghost h-12"><Copy className="w-4 h-4" />{done ? 'Copied' : 'Copy'}</button>
      </div>
    </div>
  );
}
