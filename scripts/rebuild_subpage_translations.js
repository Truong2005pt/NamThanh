const fs = require('fs');
const path = require('path');

const mod1 = require('./subpage_lang_es_pt_fr'); // es, pt, fr
const mod2 = require('./subpage_lang_de_it_pl'); // de, it, pl
const mod3 = require('./subpage_lang_tr_id_th'); // tr, id, th
const mod4 = require('./subpage_lang_fil_hi_ko'); // fil, hi, ko
const mod5 = require('./subpage_lang_ru_ar_nl'); // ru, ar, nl

const OVERLAYS = {
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
  ko: { instAlloc: '기관 투자자 자본 배정', capCeiling: '$2,000,000 모의 운용 자본 상한' },
  ru: { instAlloc: 'ИНСТИТУЦИОНАЛЬНОЕ РАСПРЕДЕЛЕНИЕ', capCeiling: 'Лимит симулированного капитала $2 000 000' },
  ar: { instAlloc: 'تخصيص مؤسسي', capCeiling: 'سقف رأس المال المحاكى 2,000,000 دولار' },
  nl: { instAlloc: 'INSTITUTIONELE TOEWIJZING', capCeiling: '$2.000.000 Gesimuleerd Kapitaallimiet' },
};

const targetPath = path.join(__dirname, '../components/eracex/subpage-translations.ts');
const targetContent = fs.readFileSync(targetPath, 'utf8');

const esIdx = targetContent.indexOf('\n  es: {');
if (esIdx === -1) {
  console.error('Could not find es in subpage-translations');
  process.exit(1);
}

const beforeEs = targetContent.slice(0, esIdx);

const allNewLangs = {
  ...mod1,
  ...mod2,
  ...mod3,
  ...mod4,
  ...mod5
};

for (const [lang, dict] of Object.entries(allNewLangs)) {
  if (OVERLAYS[lang] && dict.rulesScaling) {
    dict.rulesScaling.instAlloc = OVERLAYS[lang].instAlloc;
    dict.rulesScaling.capCeiling = OVERLAYS[lang].capCeiling;
  }
}

let injected = '';
for (const [lang, dict] of Object.entries(allNewLangs)) {
  injected += `\n  ${lang}: ${JSON.stringify(dict, null, 2).replace(/\n/g, '\n  ')},`;
}

const suffix = `\n};\n\nexport function getSubpageTranslations(lang: string): SubpageTranslations {\n  return SUBPAGE_TRANSLATIONS[lang] || SUBPAGE_TRANSLATIONS['en'];\n}\n`;

const finalContent = beforeEs + injected + suffix;
fs.writeFileSync(targetPath, finalContent, 'utf8');
console.log('Successfully rebuilt components/eracex/subpage-translations.ts cleanly!');
