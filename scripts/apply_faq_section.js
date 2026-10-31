const fs = require('fs');

const dict = JSON.parse(fs.readFileSync('scratch/faq_section_dict.json', 'utf8'));

const newFaqSectionCode = `'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import faqData from '@/content/faq/faq.json';

type Block = { t: 'p'; x: string } | { t: 'table'; rows: string[][] };
interface Item { q: string; a: Block[] }
interface Category { category: string; items: Item[] }
interface Product { title: string; subtitle: string; categories: Category[] }

export interface FaqSectionText {
  tabs: {
    two: string;
    one: string;
    instant: string;
  };
  meta: {
    two: { title: string; subtitle: string };
    one: { title: string; subtitle: string };
    instant: { title: string; subtitle: string };
  };
}

const FAQ_DICT: Record<string, FaqSectionText> = ${JSON.stringify(dict, null, 2)};

export const FaqSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const t = FAQ_DICT[currentLang] || FAQ_DICT['en'];

  const [tab, setTab] = useState<'two' | 'one' | 'instant'>('two');
  const [open, setOpen] = useState<string | null>(null);
  const data = (faqData as unknown as Record<string, Product>)[tab];

  const products: { id: 'two' | 'one' | 'instant'; label: string }[] = [
    { id: 'two', label: t.tabs.two },
    { id: 'one', label: t.tabs.one },
    { id: 'instant', label: t.tabs.instant },
  ];

  const tabMeta = t.meta[tab] || { title: data.title, subtitle: data.subtitle };

  return (
    <section className="py-16 sm:py-24 app-bg" id="faq">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div role="tablist" className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {products.map((p) => (
            <button
              key={p.id}
              type="button"
              role="tab"
              aria-selected={tab === p.id}
              onClick={() => {
                setTab(p.id);
                setOpen(null);
              }}
              className={\`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold border whitespace-nowrap transition-all \${
                tab === p.id ? 'bg-[#f6bf4a] text-black border-[#f6bf4a] shadow-md' : 'app-subtle app-border app-text-secondary hover:app-text'
              }\`}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <h2 className="app-text">{tabMeta.title}</h2>
          <p className="mt-3 text-sm app-text-secondary">{tabMeta.subtitle}</p>
        </div>

        <div className="space-y-10">
          {data.categories.map((cat) => (
            <div key={cat.category}>
              <h3 className="text-lg sm:text-xl font-black app-text mb-4">{cat.category}</h3>
              <div className="space-y-3">
                {cat.items.map((item) => {
                  const id = \`\${tab}:\${item.q}\`;
                  const isOpen = open === id;
                  return (
                    <div key={id} className="rounded-2xl card-surface overflow-hidden">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold app-text cursor-pointer"
                      >
                        <span>{item.q}</span>
                        <ChevronDown className={\`w-4 h-4 shrink-0 transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
                      </button>
                      {isOpen && (
                        <div className="px-5 pb-5 space-y-3 text-sm leading-relaxed app-text-secondary">
                          {item.a.map((b, i) =>
                            b.t === 'p' ? (
                              <p key={i}>{b.x}</p>
                            ) : (
                              <div key={i} className="overflow-x-auto rounded-xl border app-border">
                                <table className="w-full text-left text-xs sm:text-sm">
                                  <thead>
                                    <tr className="bg-[#f6bf4a]/10">
                                      {b.rows[0].map((h, hi) => (
                                        <th key={hi} className="p-3 font-bold app-text">{h}</th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {b.rows.slice(1).map((r, ri) => (
                                      <tr key={ri} className="border-t app-border">
                                        {r.map((cell, ci) => (
                                          <td key={ci} className="p-3">{cell}</td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
`;

fs.writeFileSync('components/eracex/FaqSection.tsx', newFaqSectionCode, 'utf8');
console.log('Updated FaqSection.tsx with all 19 languages');
