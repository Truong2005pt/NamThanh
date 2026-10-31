'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import faqDataEn from '@/content/faq/faq.json';
import { FAQ_LOCALES } from '@/content/faq/locales';
import { CryptoCurrencyGrid } from './CryptoCurrencyGrid';

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

const FAQ_DICT: Record<string, FaqSectionText> = {
  "vi": {
    "tabs": {
      "two": "Gói Thử Thách 2 Bước",
      "one": "Gói Thử Thách 1 Bước",
      "instant": "Cấp Vốn Trực Tiếp"
    },
    "meta": {
      "two": {
        "title": "Gói Thử Thách 2 Bước — Câu Hỏi Thường Gặp",
        "subtitle": "Quy định chính thức, mục tiêu từng vòng và lộ trình nâng hạn mức vốn cho gói 2 bước."
      },
      "one": {
        "title": "Gói Thử Thách 1 Bước — Câu Hỏi Thường Gặp",
        "subtitle": "Quy tắc một vòng thi tốc độ, mức sụt giảm ngày và điều kiện nhận tài khoản cấp vốn."
      },
      "instant": {
        "title": "Cấp Vốn Trực Tiếp — Câu Hỏi Thường Gặp",
        "subtitle": "Giao dịch ngay không qua thi tuyển, quy tắc sụt giảm trailing và chu kỳ rút lợi nhuận."
      }
    }
  },
  "en": {
    "tabs": {
      "two": "Two-Step Challenge",
      "one": "One-Step Challenge",
      "instant": "Instant Funding"
    },
    "meta": {
      "two": {
        "title": "Two-Step Challenge — FAQ",
        "subtitle": "Official rules, phase targets, and account scaling for Two-Step challenges."
      },
      "one": {
        "title": "One-Step Challenge — FAQ",
        "subtitle": "Official rules, daily loss limits, and profit targets for One-Step challenges."
      },
      "instant": {
        "title": "Instant Funding — FAQ",
        "subtitle": "Official rules, payout schedules, and drawdown limits for Instant Funding."
      }
    }
  },
  "zh": {
    "tabs": {
      "two": "两阶段进阶考核",
      "one": "单阶段极速考核",
      "instant": "即时直通注资"
    },
    "meta": {
      "two": {
        "title": "两阶段考核 — 常见问题解答",
        "subtitle": "关于两阶段考核的官方规则、各阶段盈利目标与资金扩展计划。"
      },
      "one": {
        "title": "单阶段考核 — 常见问题解答",
        "subtitle": "关于单阶段极速考核的规则、每日亏损限制与出金政策。"
      },
      "instant": {
        "title": "即时直通注资 — 常见问题解答",
        "subtitle": "无需考核直接获取资金、移动回撤计算方式与分润提现周期。"
      }
    }
  },
  "ja": {
    "tabs": {
      "two": "2ステップ評価プラン",
      "one": "1ステップ高速プラン",
      "instant": "即時資金調達"
    },
    "meta": {
      "two": {
        "title": "2ステップチャレンジ — よくある質問",
        "subtitle": "2ステップ審査の公式ルール、各フェーズの目標利益、および資金スケーリング。"
      },
      "one": {
        "title": "1ステップチャレンジ — よくある質問",
        "subtitle": "1ステップ高速審査の公式ルール、日次損失制限、目標利益率。"
      },
      "instant": {
        "title": "即時資金調達 — よくある質問",
        "subtitle": "審査不要の即時アカウント、トレイリングドローダウン、出金スケジュール。"
      }
    }
  },
  "es": {
    "tabs": {
      "two": "Desafío en 2 Fases",
      "one": "Desafío en 1 Fase",
      "instant": "Financiamiento Inmediato"
    },
    "meta": {
      "two": {
        "title": "Desafío en 2 Fases — Preguntas Frecuentes",
        "subtitle": "Reglas oficiales, objetivos de fase y escalado de cuenta para desafíos de 2 pasos."
      },
      "one": {
        "title": "Desafío en 1 Fase — Preguntas Frecuentes",
        "subtitle": "Reglas oficiales, límites de pérdida diaria y objetivos de ganancia para desafíos de 1 paso."
      },
      "instant": {
        "title": "Financiamiento Inmediato — Preguntas Frecuentes",
        "subtitle": "Reglas oficiales, calendario de pagos y límites de drawdown para cuentas Instant."
      }
    }
  },
  "pt": {
    "tabs": {
      "two": "Desafio em 2 Fases",
      "one": "Desafio em 1 Fase",
      "instant": "Financiamento Instantâneo"
    },
    "meta": {
      "two": {
        "title": "Desafio em 2 Fases — Perguntas Frequentes",
        "subtitle": "Regras oficiais, metas por fase e plano de escalonamento para desafios em 2 passos."
      },
      "one": {
        "title": "Desafio em 1 Fase — Perguntas Frecuentes",
        "subtitle": "Regras oficiais, limites de perda diária e metas de lucro para desafios em 1 passo."
      },
      "instant": {
        "title": "Financiamento Instantâneo — Perguntas Frequentes",
        "subtitle": "Regras oficiais, cronograma de saques e limites de drawdown para contas Instant."
      }
    }
  },
  "fr": {
    "tabs": {
      "two": "Défi en 2 Étapes",
      "one": "Défi en 1 Étape",
      "instant": "Financement Instantané"
    },
    "meta": {
      "two": {
        "title": "Défi en 2 Étapes — FAQ",
        "subtitle": "Règles officielles, objectifs par étape et évolution du capital pour les défis en 2 étapes."
      },
      "one": {
        "title": "Défi en 1 Étape — FAQ",
        "subtitle": "Règles officielles, limites de perte journalière et objectifs de gain pour les défis en 1 étape."
      },
      "instant": {
        "title": "Financement Instantané — FAQ",
        "subtitle": "Règles officielles, calendrier de retrait et limites de drawdown pour les comptes Instant."
      }
    }
  },
  "de": {
    "tabs": {
      "two": "Zwei-Schritte Challenge",
      "one": "Ein-Schritt Challenge",
      "instant": "Sofortige Finanzierung"
    },
    "meta": {
      "two": {
        "title": "Zwei-Schritte Challenge — FAQ",
        "subtitle": "Offizielle Regeln, Phasenziele und Kontoskalierung für Zwei-Schritte-Challenges."
      },
      "one": {
        "title": "Ein-Schritt Challenge — FAQ",
        "subtitle": "Offizielle Regeln, tägliche Verlustlimits und Gewinnziele für Ein-Schritt-Challenges."
      },
      "instant": {
        "title": "Sofortige Finanzierung — FAQ",
        "subtitle": "Offizielle Regeln, Auszahlungspläne und Drawdown-Limits für Instant Funding."
      }
    }
  },
  "it": {
    "tabs": {
      "two": "Sfida a 2 Fasi",
      "one": "Sfida a 1 Fase",
      "instant": "Finanziamento Istantaneo"
    },
    "meta": {
      "two": {
        "title": "Sfida a 2 Fasi — Domande Frequenti",
        "subtitle": "Regole ufficiali, obiettivi di fase e piano di crescita del capitale per le sfide a 2 fasi."
      },
      "one": {
        "title": "Sfida a 1 Fase — Domande Frequenti",
        "subtitle": "Regole ufficiali, limiti di perdita giornaliera e target di profitto per le sfide a 1 fase."
      },
      "instant": {
        "title": "Finanziamento Istantaneo — Domande Frequenti",
        "subtitle": "Regole ufficiali, tempistiche di prelievo e limiti di drawdown per conti Instant."
      }
    }
  },
  "pl": {
    "tabs": {
      "two": "Wyzwanie 2-Etapowe",
      "one": "Wyzwanie 1-Etapowe",
      "instant": "Błyskawiczne Finansowanie"
    },
    "meta": {
      "two": {
        "title": "Wyzwanie 2-Etapowe — FAQ",
        "subtitle": "Oficjalne zasady, cele poszczególnych etapów i skalowanie konta dla wyzwań 2-etapowych."
      },
      "one": {
        "title": "Wyzwanie 1-Etapowe — FAQ",
        "subtitle": "Oficjalne zasady, limity dziennej straty i cele zysku dla wyzwań 1-etapowych."
      },
      "instant": {
        "title": "Błyskawiczne Finansowanie — FAQ",
        "subtitle": "Oficjalne zasady, harmonogram wypłat i limity obsunięcia dla finansowania natychmiastowego."
      }
    }
  },
  "tr": {
    "tabs": {
      "two": "2 Aşamalı Değerlendirme",
      "one": "1 Aşamalı Değerlendirme",
      "instant": "Anında Fonlama"
    },
    "meta": {
      "two": {
        "title": "2 Aşamalı Değerlendirme — SSS",
        "subtitle": "2 Aşamalı meydan okumalar için resmi kurallar, aşama hedefleri ve hesap ölçeklendirme."
      },
      "one": {
        "title": "1 Aşamalı Değerlendirme — SSS",
        "subtitle": "1 Aşamalı meydan okumalar için resmi kurallar, günlük kayıp limitleri ve kâr hedefleri."
      },
      "instant": {
        "title": "Anında Fonlama — SSS",
        "subtitle": "Anında Fonlama için resmi kurallar, ödeme takvimi ve drawdown limitleri."
      }
    }
  },
  "id": {
    "tabs": {
      "two": "Tantangan 2 Langkah",
      "one": "Tantangan 1 Langkah",
      "instant": "Pendanaan Instan"
    },
    "meta": {
      "two": {
        "title": "Tantangan 2 Langkah — FAQ",
        "subtitle": "Aturan resmi, target profit tahapan, dan rencana penskalaan akun tantangan 2 langkah."
      },
      "one": {
        "title": "Tantangan 1 Langkah — FAQ",
        "subtitle": "Aturan resmi, batas kerugian harian, dan target profit untuk tantangan 1 langkah."
      },
      "instant": {
        "title": "Pendanaan Instan — FAQ",
        "subtitle": "Aturan resmi, jadwal pembayaran, dan batas drawdown untuk Pendanaan Instan."
      }
    }
  },
  "th": {
    "tabs": {
      "two": "โปรแกรม 2 ขั้นตอน",
      "one": "โปรแกรม 1 ขั้นตอน",
      "instant": "รับพอร์ตทันที"
    },
    "meta": {
      "two": {
        "title": "โปรแกรม 2 ขั้นตอน — คำถามที่พบบ่อย",
        "subtitle": "กฎเกณฑ์อย่างเป็นทางการ เป้าหมายในแต่ละเฟส และการขยายพอร์ตสำหรับแพ็กเกจ 2 ขั้นตอน"
      },
      "one": {
        "title": "โปรแกรม 1 ขั้นตอน — คำถามที่พบบ่อย",
        "subtitle": "กฎเกณฑ์อย่างเป็นทางการ ลิมิตการขาดทุนรายวัน และเป้าหมายกำไรสำหรับแพ็กเกจ 1 ขั้นตอน"
      },
      "instant": {
        "title": "รับพอร์ตทันที — คำถามที่พบบ่อย",
        "subtitle": "กฎเกณฑ์อย่างเป็นทางการ ตารางการถอนกำไร และลิมิต Drawdown สำหรับ Instant Funding"
      }
    }
  },
  "fil": {
    "tabs": {
      "two": "Two-Step Challenge",
      "one": "One-Step Challenge",
      "instant": "Instant Funding"
    },
    "meta": {
      "two": {
        "title": "Two-Step Challenge — FAQ",
        "subtitle": "Opisyal na patakaran, target sa bawat phase, at scaling para sa Two-Step challenges."
      },
      "one": {
        "title": "One-Step Challenge — FAQ",
        "subtitle": "Opisyal na patakaran, araw-araw na limit sa talo, at target na tubo para sa One-Step challenges."
      },
      "instant": {
        "title": "Instant Funding — FAQ",
        "subtitle": "Opisyal na patakaran, iskedyul ng payout, at limit sa drawdown para sa Instant Funding."
      }
    }
  },
  "hi": {
    "tabs": {
      "two": "टू-स्टेप चैलेंज",
      "one": "वन-स्टेप चैलेंज",
      "instant": "इंस्टेंट फंडिंग"
    },
    "meta": {
      "two": {
        "title": "टू-स्टेप चैलेंज — अक्सर पूछे जाने वाले प्रश्न",
        "subtitle": "टू-स्टेप चुनौतियों के लिए आधिकारिक नियम, चरण लक्ष्य और खाता स्केलिंग।"
      },
      "one": {
        "title": "वन-स्टेप चैलेंज — अक्सर पूछे जाने वाले प्रश्न",
        "subtitle": "वन-स्टेप चुनौतियों के लिए आधिकारिक नियम, दैनिक हानि सीमाएं और लाभ लक्ष्य।"
      },
      "instant": {
        "title": "इंस्टेंट फंडिंग — अक्सर पूछे जाने वाले प्रश्न",
        "subtitle": "इंस्टेंट फंडिंग के लिए आधिकारिक नियम, भुगतान अनुसूची और ड्रॉडाउन सीमाएं।"
      }
    }
  },
  "ko": {
    "tabs": {
      "two": "2단계 평가 챌린지",
      "one": "1단계 고속 챌린지",
      "instant": "즉시 펀딩"
    },
    "meta": {
      "two": {
        "title": "2단계 챌린지 — 자주 묻는 질문",
        "subtitle": "2단계 평가 챌린지의 공식 규정, 단계별 수익 목표 및 계정 스케일링 플랜."
      },
      "one": {
        "title": "1단계 챌린지 — 자주 묻는 질문",
        "subtitle": "1단계 고속 챌린지의 공식 규칙, 일일 최대 손실 한도 및 목표 수익률."
      },
      "instant": {
        "title": "즉시 펀딩 — 자주 묻는 질문",
        "subtitle": "시험 없는 즉시 펀딩 계정의 공식 규정, 출금 주기 및 트레일링 드로다운 규정."
      }
    }
  },
  "ru": {
    "tabs": {
      "two": "2-Этапный Челлендж",
      "one": "1-Этапный Челлендж",
      "instant": "Мгновенное Финансирование"
    },
    "meta": {
      "two": {
        "title": "2-Этапный Челлендж — Частые Вопросы",
        "subtitle": "Официальные правила, цели фаз и масштабирование счетов для 2-этапных челленджей."
      },
      "one": {
        "title": "1-Этапный Челлендж — Частые Вопросы",
        "subtitle": "Официальные правила, дневные лимиты убытка и цели прибыли для 1-этапных челленджей."
      },
      "instant": {
        "title": "Мгновенное Финансирование — Частые Вопросы",
        "subtitle": "Официальные правила, график выплат и лимиты просадки для мгновенного финансирования."
      }
    }
  },
  "ar": {
    "tabs": {
      "two": "تحدي المرحلتين",
      "one": "تحدي المرحلة الواحدة",
      "instant": "التمويل الفوري المباشر"
    },
    "meta": {
      "two": {
        "title": "تحدي المرحلتين — الأسئلة الشائعة",
        "subtitle": "القواعد الرسمية، وأهداف المراحل، وخطة مضاعفة الحساب لتحديات المرحلتين."
      },
      "one": {
        "title": "تحدي المرحلة الواحدة — الأسئلة الشائعة",
        "subtitle": "القواعد الرسمية، وحدود الخسارة اليومية، وأهداف الربح لتحديات المرحلة الواحدة."
      },
      "instant": {
        "title": "التمويل الفوري المباشر — الأسئلة الشائعة",
        "subtitle": "القواعد الرسمية، وجدول سحب الأرباح، وحدود التراجع لحسابات التمويل الفوري."
      }
    }
  },
  "nl": {
    "tabs": {
      "two": "Twee-Staps Challenge",
      "one": "Eén-Staps Challenge",
      "instant": "Directe Financiering"
    },
    "meta": {
      "two": {
        "title": "Twee-Staps Challenge — Veelgestelde Vragen",
        "subtitle": "Officiële regels, fasedoelen en accountopschaling voor twee-staps challenges."
      },
      "one": {
        "title": "Eén-Staps Challenge — Veelgestelde Vragen",
        "subtitle": "Officiële regels, dagelijkse verlieslimieten en winstdoelen voor één-staps challenges."
      },
      "instant": {
        "title": "Directe Financiering — Veelgestelde Vragen",
        "subtitle": "Officiële regels, uitbetalingsschema's en drawdown-limieten voor Directe Financiering."
      }
    }
  }
};

export const FaqSection: React.FC = () => {
  const { currentLang } = useLanguage();
  const t = FAQ_DICT[currentLang] || FAQ_DICT['en'];

  const [tab, setTab] = useState<'two' | 'one' | 'instant'>('two');
  const [open, setOpen] = useState<string | null>(null);
  const allData = (FAQ_LOCALES as Record<string, Record<string, Product>>)[currentLang] || (faqDataEn as unknown as Record<string, Product>);
  const data = allData[tab] || (faqDataEn as unknown as Record<string, Product>)[tab];

  const products: { id: 'two' | 'one' | 'instant'; label: string }[] = [
    { id: 'two', label: t.tabs.two },
    { id: 'one', label: t.tabs.one },
    { id: 'instant', label: t.tabs.instant },
  ];

  const tabMeta = t.meta[tab] || { title: data.title, subtitle: data.subtitle };

  return (
    <section className="py-16 sm:py-24 app-bg" id="faq">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <CryptoCurrencyGrid inline className="mb-12" />
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
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-sm font-bold border whitespace-nowrap transition-all ${
                tab === p.id ? 'bg-[#f6bf4a] text-black border-[#f6bf4a] shadow-md' : 'app-subtle app-border app-text-secondary hover:app-text'
              }`}
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
                  const id = `${tab}:${item.q}`;
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
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
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
