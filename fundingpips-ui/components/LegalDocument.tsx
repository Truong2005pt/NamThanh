import React from 'react';

export type LegalBlock =
  | { t: 'p'; x: string; center?: boolean }
  | { t: 'li'; x: string; label: string; lvl: number }
  | { t: 'table'; rows: string[][] };

const INDENT = ['pl-0', 'pl-6 sm:pl-8', 'pl-12 sm:pl-16', 'pl-[4.5rem] sm:pl-24', 'pl-24 sm:pl-32'];

export function Table({ rows }: { rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4 rounded-xl border border-line bg-card">
      <table className="w-full text-left text-xs sm:text-sm">
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} className={`border-b border-line last:border-0 align-top ${ri === 0 ? 'bg-card2 font-bold' : ''}`}>
              {r.map((c, ci) => <td key={ci} className={`p-3 ${ci === 0 ? 'font-bold' : ''}`}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Tài liệu pháp lý giữ nguyên từ file Word: đánh số, in đậm, bảng. */
export function LegalDocument({ blocks, banner = '/images/banners/legal.webp' }: { blocks: LegalBlock[]; banner?: string }) {
  const [first, ...rest] = blocks;
  return (
    <>
    {banner && <div className="wrap pt-8"><div className="overflow-hidden rounded-3xl border border-line" style={{ aspectRatio: '21/6' }}>{/* eslint-disable-next-line @next/next/no-img-element */}<img src={banner} alt="" className="w-full h-full object-cover" /></div></div>}
    <article className="max-w-4xl mx-auto px-5 py-12 sm:py-16 text-sm sm:text-[0.9375rem] leading-relaxed text-muted">
      {first && first.t === 'p' && (
        <h1 className="text-2xl sm:text-4xl font-extrabold text-ink mb-8 text-center" dangerouslySetInnerHTML={{ __html: first.x.replace(/<\/?b>/g, '') }} />
      )}
      <div className="space-y-3">
        {rest.map((b, i) => {
          if (b.t === 'table') return <Table key={i} rows={b.rows} />;
          if (b.t === 'li') {
            const heading = b.lvl === 0 && /^<b>.*<\/b>$/.test(b.x);
            return (
              <div key={i} className={`flex gap-3 ${INDENT[Math.min(b.lvl, INDENT.length - 1)]} ${heading ? 'pt-6' : ''}`}>
                <span className={`shrink-0 tabular-nums ${heading ? 'font-extrabold text-ink' : ''}`}>{b.label}</span>
                <span className={heading ? 'text-base sm:text-lg text-ink' : ''} dangerouslySetInnerHTML={{ __html: b.x }} />
              </div>
            );
          }
          return <p key={i} className={b.center ? 'text-center' : ''} dangerouslySetInnerHTML={{ __html: b.x }} />;
        })}
      </div>
    </article>
    </>
  );
}
