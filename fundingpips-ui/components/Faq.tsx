'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import data from '@/content/faq/faq.json';
import { Table } from './LegalDocument';

type Block = { t: 'p'; x: string } | { t: 'table'; rows: string[][] } | { t: string; [k: string]: any };
type Item = { q: string; a: Block[] };
type Cat = { category: string; items: Item[] };
type Group = { title: string; subtitle: string; categories: Cat[] };

const GROUPS = data as unknown as Record<'two' | 'one' | 'instant', Group>;
const TABS: { key: 'two' | 'one' | 'instant'; label: string }[] = [{ key: 'two', label: 'Two-Step' }, { key: 'one', label: 'One-Step' }, { key: 'instant', label: 'Instant Funding' }];

function Answer({ a }: { a: Block[] }) {
  return (
    <div className="grid gap-3 text-sm text-muted leading-relaxed">
      {a.map((b, i) => (b.t === 'table' ? <Table key={i} rows={(b as any).rows} /> : <p key={i} dangerouslySetInnerHTML={{ __html: (b as any).x }} />))}
    </div>
  );
}

export function Faq({ program, limit }: { program?: 'two' | 'one' | 'instant'; limit?: number }) {
  const [tab, setTab] = useState<'two' | 'one' | 'instant'>(program || 'two');
  const [open, setOpen] = useState<string | null>(null);
  const g = GROUPS[tab];
  const flat = g.categories.flatMap((c) => c.items.map((it) => ({ cat: c.category, it })));
  const shown = limit ? flat.slice(0, limit) : null;
  const cats = shown ? [{ category: '', items: shown.map((s) => s.it) }] : g.categories;

  return (
    <div>
      {!program && (
        <div className="inline-flex flex-wrap gap-1 p-1.5 rounded-2xl bg-card2 border border-line">
          {TABS.map((t) => <button key={t.key} onClick={() => { setTab(t.key); setOpen(null); }} className={`h-10 px-5 rounded-xl font-bold text-sm ${tab === t.key ? 'bg-accent text-white' : 'text-muted hover:text-ink'}`}>{t.label}</button>)}
        </div>
      )}
      <div className="grid gap-10 mt-8">
        {cats.map((c, ci) => (
          <div key={ci}>
            {c.category && <h3 className="eyebrow mb-4">{c.category}</h3>}
            <div className="grid gap-3">
              {c.items.map((it) => {
                const id = tab + it.q;
                const o = open === id;
                return (
                  <div key={id} className="card !rounded-2xl">
                    <button className="w-full flex items-center justify-between gap-4 text-left p-5 font-bold" onClick={() => setOpen(o ? null : id)} aria-expanded={o}>
                      {it.q}<ChevronDown className={`w-5 h-5 shrink-0 text-muted transition ${o ? 'rotate-180' : ''}`} />
                    </button>
                    {o && <div className="px-5 pb-5"><Answer a={it.a} /></div>}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
