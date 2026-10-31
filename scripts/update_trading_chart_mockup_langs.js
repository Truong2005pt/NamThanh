const fs = require('fs');

const filePath = 'components/eracex/TradingChartMockup.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const CHART_DICT = `
const CHART_MOCKUP_DICT: Record<string, {
  orderMatched: (type: string, lots: number, asset: string, price: string) => string;
  orderClosed: string;
  openOrder: string;
  closeTitle: string;
  closeBtn: string;
  executionBadge: string;
  executionTooltip: string;
}> = {
  vi: {
    orderMatched: (t, l, a, p) => \`✓ Lệnh \${t} \${l} Lots \${a} khớp tức thời tại \${p} (Latency 0.2ms)\`,
    orderClosed: '✓ Đã chốt lệnh thành công. Lợi nhuận đã cộng vào Balance.',
    openOrder: 'Lệnh đang mở:',
    closeTitle: 'Chốt lệnh ngay',
    closeBtn: 'Chốt',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Thử click Buy/Sell để trải nghiệm tốc độ khớp lệnh.'
  },
  en: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} Lots \${a} executed instantaneously at \${p} (Latency 0.2ms)\`,
    orderClosed: '✓ Position closed successfully. Simulated profit credited to Balance.',
    openOrder: 'Open Position:',
    closeTitle: 'Close position now',
    closeBtn: 'Close',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Click Buy/Sell to test simulated ultra-low latency execution speed.'
  },
  zh: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} 手 \${a} 极速撮合成交于 \${p} (延迟 0.2ms)\`,
    orderClosed: '✓ 平仓成功。模拟利润已结算至账户余额。',
    openOrder: '当前持仓:',
    closeTitle: '立即平仓',
    closeBtn: '平仓',
    executionBadge: '1-Click MT5 毫秒撮合:',
    executionTooltip: '点击 Buy/Sell 体验机构级零滑点低延迟撮合。'
  },
  ja: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} ロット \${a} が \${p} で瞬時に約定 (レイテンシー 0.2ms)\`,
    orderClosed: '✓ 決済が完了しました。利益が口座残高に反映されました。',
    openOrder: '保有ポジション:',
    closeTitle: '今すぐ決済する',
    closeBtn: '決済',
    executionBadge: '1-Click MT5 超高速約定:',
    executionTooltip: 'Buy/Sell をクリックして極狭スプレッドと超高速約定を体感してください。'
  },
  ko: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} 랏 \${a} 체결가 \${p} 즉시 체결 (지연율 0.2ms)\`,
    orderClosed: '✓ 포지션 청산 완료. 모의 수익이 잔고에 정산되었습니다.',
    openOrder: '보유 포지션:',
    closeTitle: '지금 포지션 청산',
    closeBtn: '청산',
    executionBadge: '1-Click MT5 즉각 체결:',
    executionTooltip: 'Buy/Sell을 클릭하여 초저지연 기관급 주문 체결을 직접 체험해 보세요.'
  },
  es: {
    orderMatched: (t, l, a, p) => \`✓ Orden \${t} \${l} Lotes \${a} ejecutada al instante en \${p} (Latencia 0.2ms)\`,
    orderClosed: '✓ Posición cerrada con éxito. Beneficio acreditado al saldo.',
    openOrder: 'Posición abierta:',
    closeTitle: 'Cerrar posición ahora',
    closeBtn: 'Cerrar',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Haz clic en Buy/Sell para experimentar la velocidad de ejecución ultrarrápida.'
  },
  pt: {
    orderMatched: (t, l, a, p) => \`✓ Ordem \${t} \${l} Lotes \${a} executada instantaneamente em \${p} (Latência 0.2ms)\`,
    orderClosed: '✓ Posição encerrada com sucesso. Lucro creditado ao saldo.',
    openOrder: 'Posição aberta:',
    closeTitle: 'Fechar posição agora',
    closeBtn: 'Fechar',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Clique em Buy/Sell para testar a velocidade de execução com latência ultrabaixa.'
  },
  fr: {
    orderMatched: (t, l, a, p) => \`✓ Ordre \${t} \${l} Lots \${a} exécuté instantanément à \${p} (Latence 0.2ms)\`,
    orderClosed: '✓ Position clôturée avec succès. Profit simulé crédité au solde.',
    openOrder: 'Position ouverte:',
    closeTitle: 'Clôturer la position',
    closeBtn: 'Fermer',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Cliquez sur Buy/Sell pour tester la vitesse d\\'exécution ultra-rapide.'
  },
  de: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} Lots \${a} sofort ausgeführt bei \${p} (Latenz 0.2ms)\`,
    orderClosed: '✓ Position erfolgreich geschlossen. Gewinn dem Saldo gutgeschrieben.',
    openOrder: 'Offene Position:',
    closeTitle: 'Position jetzt schließen',
    closeBtn: 'Schließen',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Klicken Sie auf Buy/Sell, um die extrem niedrige Latenz zu testen.'
  },
  ru: {
    orderMatched: (t, l, a, p) => \`✓ Ордер \${t} \${l} Лотов \${a} мгновенно исполнен по \${p} (Задержка 0.2мс)\`,
    orderClosed: '✓ Сделка успешно закрыта. Прибыль зачислена на баланс.',
    openOrder: 'Открытая позиция:',
    closeTitle: 'Закрыть позицию',
    closeBtn: 'Закрыть',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Нажмите Buy/Sell, чтобы протестировать мгновенную скорость исполнения.'
  },
  it: {
    orderMatched: (t, l, a, p) => \`✓ Ordine \${t} \${l} Lotti \${a} eseguito all\\'istante a \${p} (Latenza 0.2ms)\`,
    orderClosed: '✓ Posizione chiusa con successo. Profitto accreditato sul saldo.',
    openOrder: 'Posizione aperta:',
    closeTitle: 'Chiudi posizione ora',
    closeBtn: 'Chiudi',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Fai clic su Buy/Sell per provare la velocità di esecuzione a bassissima latenza.'
  },
  ar: {
    orderMatched: (t, l, a, p) => \`✓ أمر \${t} بقيمة \${l} لوت \${a} تم تنفيذه فورياً عند \${p} (زمن استجابة 0.2 مللي ثانية)\`,
    orderClosed: '✓ تم إغلاق الصفقة بنجاح. تمت إضافة الأرباح المحاكاة إلى الرصيد.',
    openOrder: 'الصفقة المفتوحة:',
    closeTitle: 'إغلاق الصفقة فوراً',
    closeBtn: 'إغلاق',
    executionBadge: 'تنفيذ MT5 بنقرة واحدة:',
    executionTooltip: 'انقر على Buy/Sell لتجربة سرعة التنفيذ الفائقة بزمن استجابة منعدم.'
  },
  tr: {
    orderMatched: (t, l, a, p) => \`✓ \${t} \${l} Lot \${a} emri \${p} seviyesinde anında gerçekleşti (Gecikme 0.2ms)\`,
    orderClosed: '✓ Pozisyon başarıyla kapatıldı. Kâr bakiyenize eklendi.',
    openOrder: 'Açık Pozisyon:',
    closeTitle: 'Pozisyonu şimdi kapat',
    closeBtn: 'Kapat',
    executionBadge: '1-Click MT5 İletimi:',
    executionTooltip: 'Işık hızında emir iletim hızını test etmek için Buy/Sell butonlarına tıklayın.'
  },
  th: {
    orderMatched: (t, l, a, p) => \`✓ คำสั่ง \${t} \${l} Lots \${a} ส่งคำสั่งสำเร็จทันทีที่ \${p} (ดีเลย์ 0.2ms)\`,
    orderClosed: '✓ ปิดออเดอร์สำเร็จ กำไรถูกเพิ่มเข้าไปในยอดเงินคงเหลือแล้ว',
    openOrder: 'ออเดอร์ที่เปิดอยู่:',
    closeTitle: 'ปิดออเดอร์ทันที',
    closeBtn: 'ปิด',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'ลองคลิก Buy/Sell เพื่อสัมผัสความเร็วในการจับคู่คำสั่งที่ไร้ความหน่วง'
  },
  id: {
    orderMatched: (t, l, a, p) => \`✓ Order \${t} \${l} Lots \${a} tereksekusi instan di \${p} (Latensi 0.2ms)\`,
    orderClosed: '✓ Posisi berhasil ditutup. Profit telah ditambahkan ke Saldo.',
    openOrder: 'Posisi Terbuka:',
    closeTitle: 'Tutup posisi sekarang',
    closeBtn: 'Tutup',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Klik Buy/Sell untuk menguji kecepatan eksekusi super kilat.'
  },
  hi: {
    orderMatched: (t, l, a, p) => \`✓ ऑर्डर \${t} \${l} लॉट्स \${a} तुरंत \${p} पर निष्पादित हुआ (विलंबता 0.2ms)\`,
    orderClosed: '✓ पोजीशन सफलतापूर्वक बंद हुई। लाभ शेष राशि में जमा हो गया।',
    openOrder: 'सक्रिय ऑर्डर:',
    closeTitle: 'अभी पोजीशन बंद करें',
    closeBtn: 'बंद करें',
    executionBadge: '1-Click MT5 निष्पादन:',
    executionTooltip: 'अल्ट्रा-फास्ट निष्पादन गति का अनुभव करने के लिए Buy/Sell पर क्लिक करें।'
  },
  pl: {
    orderMatched: (t, l, a, p) => \`✓ Zlecenie \${t} \${l} Lotów \${a} zrealizowane natychmiast po \${p} (Opóźnienie 0.2ms)\`,
    orderClosed: '✓ Pozycja zamknięta pomyślnie. Zysk dodany do salda konta.',
    openOrder: 'Otwarta pozycja:',
    closeTitle: 'Zamknij pozycję teraz',
    closeBtn: 'Zamknij',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Kliknij Buy/Sell, aby przetestować błyskawiczną egzekucję zleceń.'
  },
  nl: {
    orderMatched: (t, l, a, p) => \`✓ Order \${t} \${l} Lots \${a} direct uitgevoerd op \${p} (Vertraging 0.2ms)\`,
    orderClosed: '✓ Positie succesvol gesloten. Gesimuleerde winst bijgeschreven op saldo.',
    openOrder: 'Openstaande Positie:',
    closeTitle: 'Sluit positie nu',
    closeBtn: 'Sluiten',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Klik op Buy/Sell om de ultrasnelle orderuitvoering te testen.'
  },
  fil: {
    orderMatched: (t, l, a, p) => \`✓ Order \${t} \${l} Lots \${a} ay agarang naipatupad sa \${p} (Latency 0.2ms)\`,
    orderClosed: '✓ Matagumpay na naisara ang posisyon. Ang kita ay naidagdag na sa Balanse.',
    openOrder: 'Bukas na Posisyon:',
    closeTitle: 'Isara ang posisyon ngayon',
    closeBtn: 'Isara',
    executionBadge: '1-Click MT5 Execution:',
    executionTooltip: 'Subukang mag-click ng Buy/Sell para maranasan ang napakabilis na bilis ng execution.'
  }
};
`;

// Insert CHART_DICT before export const TradingChartMockup
content = content.replace(
  'export const TradingChartMockup: React.FC = () => {',
  CHART_DICT + '\nexport const TradingChartMockup: React.FC = () => {'
);

// Update useLanguage destructure
content = content.replace(
  'const { t } = useLanguage();',
  `const { t, currentLang } = useLanguage();
  const cDict = CHART_MOCKUP_DICT[currentLang] || CHART_MOCKUP_DICT['en'];`
);

// Replace notification 1
content = content.replace(
  "`✓ Lệnh ${type} ${selectedLots} Lots ${activeAsset} khớp tức thời tại ${execPrice.toLocaleString('en-US', { minimumFractionDigits: config.decimals })} (Latency 0.2ms)`",
  "cDict.orderMatched(type, selectedLots, activeAsset, execPrice.toLocaleString('en-US', { minimumFractionDigits: config.decimals }))"
);

// Replace notification 2
content = content.replace(
  "`✓ Đã chốt lệnh thành công. Lợi nhuận đã cộng vào Balance.`",
  "cDict.orderClosed"
);

// Replace open order string
content = content.replace(
  'Lệnh đang mở: <b className="text-white">{activeTrade.type} {activeTrade.lots}L</b>',
  '{cDict.openOrder} <b className="text-white">{activeTrade.type} {activeTrade.lots}L</b>'
);

// Replace close button title and label
content = content.replace(
  'title="Chốt lệnh ngay"',
  'title={cDict.closeTitle}'
);

content = content.replace(
  '<span>Chốt</span>',
  '<span>{cDict.closeBtn}</span>'
);

// Replace bottom tooltip
content = content.replace(
  '<span className="text-[#ffc501] font-bold">1-Click MT5 Execution:</span> Thử click Buy/Sell để trải nghiệm tốc độ khớp lệnh.',
  '<span className="text-[#ffc501] font-bold">{cDict.executionBadge}</span> {cDict.executionTooltip}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated TradingChartMockup.tsx with all 19 languages');
