const fs = require('fs');

const OVERLAY_TRANSLATIONS = {
  en: { instAlloc: 'INSTITUTIONAL ALLOCATION', capCeiling: '$2,000,000 Simulated Capital Ceiling' },
  vi: { instAlloc: 'HẠN MỨC TỔ CHỨC', capCeiling: 'Kịch Trần Vốn Mô Phỏng $2,000,000' },
  zh: { instAlloc: '机构级别分配', capCeiling: '$2,000,000 模拟资金上限' },
  ja: { instAlloc: '機関投資家向け資金配分', capCeiling: '$2,000,000 シミュレーション資金上限' },
  ko: { instAlloc: '기관 투자자 자본 배정', capCeiling: '$2,000,000 모의 운용 자본 상한' },
  es: { instAlloc: 'ASIGNACIÓN INSTITUCIONAL', capCeiling: 'Límite de Capital Simulado de $2.000.000' },
  pt: { instAlloc: 'ALOCAÇÃO INSTITUCIONAL', capCeiling: 'Teto de Capital Simulado de $2.000.000' },
  fr: { instAlloc: 'ALLOCATION INSTITUTIONNELLE', capCeiling: 'Plafond de Capital Simulé de 2 000 000 $' },
  de: { instAlloc: 'INSTITUTIONELLE ALLOKATION', capCeiling: '$2.000.000 Simuliertes Kapital-Limit' },
  it: { instAlloc: 'ALLOCAZIONE ISTITUZIONALE', capCeiling: 'Tetto di Capitale Simulato di $2.000.000' },
  pl: { instAlloc: 'ALOKACJA INSTYTUCJONALNA', capCeiling: 'Limit Kapitału Symulowanego $2 000 000' },
  tr: { instAlloc: 'KURUMSAL TAHSİSAT', capCeiling: '$2.000.000 Simüle Sermaye Tavanı' },
  id: { instAlloc: 'ALOKASI INSTITUSIONAL', capCeiling: 'Batas Maksimal Modal Simulasi $2.000.000' },
  th: { instAlloc: 'การจัดสรรระดับสถาบัน', capCeiling: 'เพดานทุนจำลองสูงสุด $2,000,000' },
  fil: { instAlloc: 'INSTITUSYONAL NA ALOKASYON', capCeiling: '$2,000,000 Limit sa Simulated Capital' },
  hi: { instAlloc: 'संस्थागत आवंटन', capCeiling: '$2,000,000 सिमुलेटेड पूंजी सीमा' },
  ru: { instAlloc: 'ИНСТИТУЦИОНАЛЬНОЕ РАСПРЕДЕЛЕНИЕ', capCeiling: 'Лимит симулированного капитала $2 000 000' },
  ar: { instAlloc: 'تخصيص مؤسسي', capCeiling: 'سقف رأس المال المحاكى 2,000,000 دولار' },
  nl: { instAlloc: 'INSTITUTIONELE TOEWIJZING', capCeiling: '$2.000.000 Gesimuleerd Kapitaallimiet' },
};

// 1. Update SubpageTranslations interface in subpage-translations.ts
let subFile = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');

// Update interface
if (!subFile.includes('instAlloc?: string;')) {
  subFile = subFile.replace(
    'instantDaysText?: string;',
    'instantDaysText?: string;\n    instAlloc?: string;\n    capCeiling?: string;'
  );
}

// Update each language block
for (const [lang, trans] of Object.entries(OVERLAY_TRANSLATIONS)) {
  const langRegex = new RegExp(`(${lang}:\\s*\\{[\\s\\S]*?rulesScaling:\\s*\\{[\\s\\S]*?)(instantDaysText:[^\\n]+,)`);
  if (langRegex.test(subFile)) {
    subFile = subFile.replace(langRegex, (match, p1, p2) => {
      if (p1.includes('instAlloc:')) return match;
      return `${p1}${p2}\n      instAlloc: '${trans.instAlloc.replace(/'/g, "\\'")}',\n      capCeiling: '${trans.capCeiling.replace(/'/g, "\\'")}',`;
    });
  }
}

fs.writeFileSync('components/eracex/subpage-translations.ts', subFile, 'utf8');
console.log('Updated subpage-translations.ts with overlay translations');

// 2. Update RulesScalingSection.tsx to use rs.instAlloc and rs.capCeiling
let rsSection = fs.readFileSync('components/eracex/RulesScalingSection.tsx', 'utf8');

const targetBlock = `<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ffc501] block">INSTITUTIONAL ALLOCATION</span>
                    <span className="text-lg font-black text-white">$2,000,000 Simulated Capital Ceiling</span>
                  </div>
                </div>`;

const replacementBlock = `<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#ffc501] block">{rs.instAlloc || 'INSTITUTIONAL ALLOCATION'}</span>
                    <span className="text-lg font-black text-white">{rs.capCeiling || '$2,000,000 Simulated Capital Ceiling'}</span>
                  </div>
                </div>`;

if (rsSection.includes(targetBlock)) {
  rsSection = rsSection.replace(targetBlock, replacementBlock);
  fs.writeFileSync('components/eracex/RulesScalingSection.tsx', rsSection, 'utf8');
  console.log('Updated RulesScalingSection.tsx overlay to use dynamic translations');
} else {
  console.log('Target block not found verbatim in RulesScalingSection.tsx, checking normalized...');
  // Normalized replace
  rsSection = rsSection.replace(
    /<span className="text-xs font-mono font-bold text-\[#ffc501\] block">INSTITUTIONAL ALLOCATION<\/span>\s*<span className="text-lg font-black text-white">\$2,000,000 Simulated Capital Ceiling<\/span>/,
    `<span className="text-xs font-mono font-bold text-[#ffc501] block">{rs.instAlloc || 'INSTITUTIONAL ALLOCATION'}</span>\n                    <span className="text-lg font-black text-white">{rs.capCeiling || '$2,000,000 Simulated Capital Ceiling'}</span>`
  );
  fs.writeFileSync('components/eracex/RulesScalingSection.tsx', rsSection, 'utf8');
  console.log('Updated RulesScalingSection.tsx with regex replacement');
}
