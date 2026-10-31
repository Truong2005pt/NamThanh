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

let content = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');

for (const [lang, trans] of Object.entries(OVERLAY_TRANSLATIONS)) {
  // Find language section
  const langMatch = content.match(new RegExp(`(\\n\\s*${lang}:\\s*\\{[\\s\\S]*?)(rulesScaling["']?\\s*:\\s*\\{[\\s\\S]*?\\n\\s*\\})`));
  if (!langMatch) {
    console.log(`Could not find lang section for ${lang}`);
    continue;
  }
  const fullMatch = langMatch[0];
  const rsPart = langMatch[2];
  
  if (rsPart.includes('instAlloc')) {
    console.log(`Already has instAlloc for ${lang}`);
    continue;
  }

  // Inside rsPart, add instAlloc and capCeiling before the closing brace
  const lastLineMatch = rsPart.match(/([^\n]+)(\n\s*\})/);
  if (!lastLineMatch) {
    console.log(`Could not match closing of rsPart for ${lang}`);
    continue;
  }

  const trailingComma = lastLineMatch[1].trim().endsWith(',') ? '' : ',';
  const indentMatch = rsPart.match(/\n(\s*)["']?zeroDays/);
  const indent = indentMatch ? indentMatch[1] : '      ';
  const quote = rsPart.includes('"zeroDays"') ? '"' : '';

  const newProps = `${trailingComma}\n${indent}${quote}instAlloc${quote}: '${trans.instAlloc.replace(/'/g, "\\'")}',\n${indent}${quote}capCeiling${quote}: '${trans.capCeiling.replace(/'/g, "\\'")}'`;
  const updatedRsPart = rsPart.replace(lastLineMatch[0], `${lastLineMatch[1]}${newProps}${lastLineMatch[2]}`);
  
  content = content.replace(rsPart, updatedRsPart);
  console.log(`Successfully added instAlloc and capCeiling for ${lang}`);
}

fs.writeFileSync('components/eracex/subpage-translations.ts', content, 'utf8');
console.log('Saved subpage-translations.ts');
