// scripts/update_showcase_translations.js
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../components/eracex/EracexPlatformShowcaseSection.tsx');
let content = fs.readFileSync(targetPath, 'utf8');

// We need translations for all 15 languages
const showcaseLangs = {
  es: {
    badge: 'ECOSISTEMA DE TRADING INSTITUCIONAL',
    title: 'Terminal Web y App Móvil Propietarias de ERACEX',
    subtitle: 'Infraestructura de trading de última generación con gráficos TradingView integrados, auditoría de riesgo automatizada en tiempo real y sincronización perfecta entre PC y móvil.',
    tabDesktop: 'Terminal de Escritorio (Web Terminal)',
    tabMobile: 'Aplicación Móvil (iOS y Android)',
    previewThemeDark: 'Tema Oscuro',
    previewThemeLight: 'Tema Claro',
    desktopViews: {
      trade: {
        tabName: 'Gráfico y Ejecución en Vivo',
        title: 'Estación de Trading Profesional Integrada con TradingView',
        desc: 'Ejecución ultrarrápida en menos de 15ms, ajuste visual de Stop Loss y Take Profit directamente en el gráfico, y spreads institucionales en FX, Oro, Cripto e Índices.',
        tags: ['Ejecución < 15ms', '100+ Indicadores Técnicos', 'Arrastre de SL/TP en Gráfico', 'Posiciones Multiactivo'],
      },
      prop: {
        tabName: 'Panel del Desafío de Fondeo',
        title: 'Auditoría de Riesgo y Objetivos 100% Automatizada',
        desc: 'Sin hojas de cálculo manuales. Seguimiento automático en tiempo real de pérdida diaria y drawdown máximo con verificación de aprobación inmediata.',
        tags: ['Verificación Automática de Reglas', 'Curva de Crecimiento de Balance/Equity', 'Temporizador de Límite Diario', '100% Transparente'],
      },
      explore: {
        tabName: 'Inteligencia de Mercado y Noticias',
        title: 'Calendario Macroeconómico Global y Sentimiento del Mercado',
        desc: 'Transmisión en directo de eventos macroeconómicos clave (PIB, IPC, decisiones de tipos de interés), porcentajes de sentimiento comprador/vendedor y activos con mayor volatilidad.',
        tags: ['Calendario Macroeconómico', 'Sentimiento del Mercado en Vivo', 'Mayores Subidas y Bajadas', 'Tendencias FX y Cripto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Trading Móvil con un Solo Toque',
        desc: 'Precios en tiempo real, variación % en 24h, spreads raw y estado de objetivos de tu cuenta en la parte superior.',
      },
      explore: {
        title: 'Calendario y Tendencias del Mercado',
        desc: 'Horarios de publicaciones económicas y listas de tendencias en divisas, criptomonedas, oro e índices globales.',
      },
      prop: {
        title: 'Control de Riesgo y Curva de Equidad',
        desc: 'Bandas visuales de riesgo que marcan claramente tu umbral de pérdida diaria y el límite máximo permitido.',
      },
    },
    liveLatency: 'Latencia del Servidor: 12ms · Ultrarrápido',
    activeChallenge: 'Cuenta de Evaluación: #1063830 (Activa)',
    clickToZoom: 'Haz clic para pantalla completa',
    startTradingBtn: 'Iniciar Desafío de Fondeo',
  },
  pt: {
    badge: 'ECOSSISTEMA DE TRADING INSTITUCIONAL',
    title: 'Terminal Web e App Mobile Proprietários da ERACEX',
    subtitle: 'Infraestrutura de trading de ponta com gráficos TradingView integrados, auditoria de risco automatizada em tempo real e sincronização total entre desktop e celular.',
    tabDesktop: 'Terminal para Desktop (Web Terminal)',
    tabMobile: 'Aplicativo Mobile (iOS e Android)',
    previewThemeDark: 'Tema Escuro',
    previewThemeLight: 'Tema Claro',
    desktopViews: {
      trade: {
        tabName: 'Gráfico e Execução em Tempo Real',
        title: 'Estação Profissional Integrada ao TradingView',
        desc: 'Execução ultrarrápida em menos de 15ms, ajuste visual de Stop Loss e Take Profit diretamente no gráfico e spreads raw em FX, Ouro, Cripto e Índices.',
        tags: ['Execução < 15ms', '100+ Indicadores Técnicos', 'Arraste de SL/TP no Gráfico', 'Posições Multi-Ativos'],
      },
      prop: {
        tabName: 'Painel do Desafio de Fondeio',
        title: 'Auditoria de Risco e Metas 100% Automatizada',
        desc: 'Sem necessidade de planilhas manuais. Monitoramento automático de perda diária e drawdown máximo com status de aprovação em tempo real.',
        tags: ['Verificação Automática de Regras', 'Curva de Patrimônio Líquido', 'Contagem Regressiva Diária', '100% Transparente'],
      },
      explore: {
        tabName: 'Inteligência de Mercado e Tendências',
        title: 'Calendário Macroeconômico Global e Sentimento de Mercado',
        desc: 'Acompanhamento ao vivo de eventos macroeconômicos (PIB, PCE, decisões de juros), proporção de compradores vs. vendedores e maiores variações do dia.',
        tags: ['Calendário Macroeconômico', 'Sentimento de Mercado ao Vivo', 'Maiores Altas e Baixas', 'Tendências de FX e Cripto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Operações com Apenas Um Toque',
        desc: 'Cotações em tempo real, variação 24h, spreads reduzidos e status das metas do desafio fixado no topo.',
      },
      explore: {
        title: 'Calendário e Notícias de Mercado',
        desc: 'Datas de divulgação econômica e ativos em tendência no Forex, Cripto, Ouro e Índices no seu smartphone.',
      },
      prop: {
        title: 'Gestão de Risco e Curva de Saldo',
        desc: 'Linhas visuais de risco destacando seus limites de perda diária e drawdown máximo permitido.',
      },
    },
    liveLatency: 'Latência do Servidor: 12ms · Ultrarrápido',
    activeChallenge: 'Conta de Avaliação: #1063830 (Ativa)',
    clickToZoom: 'Clique para tela cheia',
    startTradingBtn: 'Iniciar Desafio de Avaliação',
  },
  fr: {
    badge: 'ÉCOSYSTÈME DE TRADING INSTITUTIONNEL',
    title: 'Terminal Web et Application Mobile Propriétaires ERACEX',
    subtitle: 'Infrastructure de trading de nouvelle génération avec graphiques TradingView intégrés, contrôle automatisé des risques en temps réel et synchronisation parfaite multi-écrans.',
    tabDesktop: 'Terminal de Bureau (Web Terminal)',
    tabMobile: 'Application Mobile (iOS & Android)',
    previewThemeDark: 'Thème Sombre',
    previewThemeLight: 'Thème Clair',
    desktopViews: {
      trade: {
        tabName: 'Graphique et Exécution Directe',
        title: 'Station Professionnelle Intégrée avec TradingView',
        desc: 'Exécution ultra-rapide sous 15ms, déplacement direct du Stop Loss et Take Profit sur le graphique, et spreads institutionnels sur FX, Or, Crypto et Indices.',
        tags: ['Exécution < 15ms', '100+ Indicateurs Techniques', 'Glisser-Déposer SL/TP', 'Gestion Multi-Actifs'],
      },
      prop: {
        tabName: 'Tableau de Bord du Challenge',
        title: 'Audit Automatisé des Objectifs et du Risque à 100%',
        desc: 'Fini les calculs manuels. Suivi automatique en direct de la perte maximale quotidienne et globale avec validation immédiate du statut.',
        tags: ['Contrôle Automatique des Règles', 'Courbe d’Équité et de Solde', 'Compte à Rebours Journalier', '100% Transparent'],
      },
      explore: {
        tabName: 'Données de Marché et Actualités',
        title: 'Calendrier Macroéconomique Global et Sentiment des Traders',
        desc: 'Flux en direct des annonces économiques majeures (PIB, PCE, taux d’intérêt), ratios acheteurs/vendeurs et classements des plus fortes variations.',
        tags: ['Calendrier Macroéconomique', 'Sentiment de Marché en Direct', 'Top Hausses et Baisses', 'Tendances FX & Crypto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Trading Mobile en Un Clic',
        desc: 'Cotations en temps réel, variation sur 24h, spreads bruts et objectifs du compte affichés au sommet.',
      },
      explore: {
        title: 'Calendrier et Tendances Économiques',
        desc: 'Annonces majeures et listes de tendances Forex, Crypto et Métaux précieux accessibles partout.',
      },
      prop: {
        title: 'Surveillance du Risque et Équité',
        desc: 'Repères visuels clairs indiquant vos limites de perte quotidienne et maximale.',
      },
    },
    liveLatency: 'Latence Serveur : 12ms · Ultra-Rapide',
    activeChallenge: 'Compte de Challenge : #1063830 (Actif)',
    clickToZoom: 'Cliquer pour agrandir en plein écran',
    startTradingBtn: 'Lancer le Challenge de Financement',
  },
  de: {
    badge: 'INSTITUTIONELLES TRADING-ÖKOSYSTEM',
    title: 'Proprietäres ERACEX Web-Terminal & Mobile App',
    subtitle: 'Handelsinfrastruktur der nächsten Generation mit integrierten TradingView-Charts, automatisierter Echtzeit-Risikoüberwachung und nahtloser Synchronisation.',
    tabDesktop: 'Desktop-Terminal (Web Terminal)',
    tabMobile: 'Mobile App (iOS & Android)',
    previewThemeDark: 'Dunkles Design',
    previewThemeLight: 'Helles Design',
    desktopViews: {
      trade: {
        tabName: 'Live-Chart & Ausführung',
        title: 'Profi-Tradingstation mit nativer TradingView-Integration',
        desc: 'Ultraschnelle Ausführung in unter 15ms, visuelles Drag & Drop für Stop Loss & Take Profit direkt im Chart und Raw Spreads auf Devisen, Gold, Krypto & Indizes.',
        tags: ['Ausführung < 15ms', '100+ Technische Indikatoren', 'Chart-Drag SL/TP', 'Multi-Asset Positionen'],
      },
      prop: {
        tabName: 'Prop Challenge Dashboard',
        title: '100% Automatisierte Risiko- & Challenge-Prüfung',
        desc: 'Keine manuellen Tabellen nötig. Automatische Live-Überwachung von täglichem und maximalem Verlust mit sofortiger Bestehungsanzeige.',
        tags: ['Automatische Regelprüfung', 'Equity- & Balance-Wachstumskurve', 'Täglicher Reset-Timer', '100% Transparent'],
      },
      explore: {
        tabName: 'Marktdaten & Analysen',
        title: 'Globaler Makro-Wirtschaftskalender & Markt-Sentiment',
        desc: 'Live-Übertragung wichtiger Wirtschaftsdaten (BIP, PCE, Zinsentscheide), Verteilung von Käufer- vs. Verkäuferstimmung und größte Tagesgewinner.',
        tags: ['Wirtschaftskalender', 'Live-Marktstimmung', 'Größte Gewinner & Verlierer', 'FX & Krypto-Trends'],
      },
    },
    mobileCards: {
      trade: {
        title: '1-Click Mobile Trading',
        desc: 'Live-Streaming-Preise, 24h-Veränderung, Raw Spreads und Challenge-Ziele direkt oben im Blick.',
      },
      explore: {
        title: 'Kalender & Markttrends',
        desc: 'Wichtige Wirtschaftsdaten und Trendlisten für Forex, Krypto und Rohstoffe unterwegs verfolgen.',
      },
      prop: {
        title: 'Risikoschutz & Equity-Kurve',
        desc: 'Klare visuelle Schutzbänder für tägliche und maximale Verlustgrenzen zur Kapitalsicherung.',
      },
    },
    liveLatency: 'Server-Latenz: 12ms · Ultraschnell',
    activeChallenge: 'Challenge-Konto: #1063830 (Aktiv)',
    clickToZoom: 'Klicken für Vollbildansicht',
    startTradingBtn: 'Challenge Starten',
  },
  it: {
    badge: 'ECOSISTEMA DI TRADING ISTITUZIONALE',
    title: 'Terminale Web e App Mobile Proprietari ERACEX',
    subtitle: 'Infrastruttura di trading di nuova generazione con grafici TradingView integrati, monitoraggio del rischio automatizzato in tempo reale e sincronizzazione totale.',
    tabDesktop: 'Terminale Desktop (Web Terminal)',
    tabMobile: 'App Mobile (iOS e Android)',
    previewThemeDark: 'Tema Scuro',
    previewThemeLight: 'Tema Chiaro',
    desktopViews: {
      trade: {
        tabName: 'Grafico e Ordini in Tempo Reale',
        title: 'Stazione Operativa Professionale Integrata con TradingView',
        desc: 'Esecuzione fulminea in meno di 15ms, regolazione grafica visiva di Stop Loss e Take Profit e spread istituzionali su FX, Oro, Cripto e Indici.',
        tags: ['Esecuzione < 15ms', '100+ Indicatori Tecnici', 'Trascina SL/TP su Grafico', 'Gestione Multi-Asset'],
      },
      prop: {
        tabName: 'Cruscotto di Gestione Sfida',
        title: 'Audit del Rischio e degli Obiettivi Automatizzato al 100%',
        desc: 'Nessun foglio di calcolo manuale. Monitoraggio automatico istantaneo della perdita giornaliera e del drawdown massimo con notifica di approvazione.',
        tags: ['Controllo Automatico Regole', 'Curva di Equità e Saldo', 'Timer Limite Giornaliero', '100% Trasparente'],
      },
      explore: {
        tabName: 'Market Intelligence e Notizie',
        title: 'Calendario Macroeconomico Mondiale e Sentiment di Mercato',
        desc: 'Flusso in tempo reale dei dati economici chiave (PIL, PCE, decisioni sui tassi), rapporto acquirenti/venditori e classifica degli asset più volatili.',
        tags: ['Calendario Macroeconomico', 'Sentiment in Tempo Reale', 'Migliori e Peggiori del Giorno', 'Trend FX e Cripto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Trading da Mobile in un Tocco',
        desc: 'Quotazioni in diretta, variazione % 24h, spread minimi e stato degli obiettivi ben visibili in alto.',
      },
      explore: {
        title: 'Calendario e Tendenze',
        desc: 'Orari di pubblicazione delle notizie e liste dei titoli più scambiati su Forex e Cripto dallo smartphone.',
      },
      prop: {
        title: 'Controllo Rischio ed Equità',
        desc: 'Soglie visive chiare che evidenziano i limiti di perdita giornaliera e il drawdown totale.',
      },
    },
    liveLatency: 'Latenza Server: 12ms · Velocissimo',
    activeChallenge: 'Conto di Valutazione: #1063830 (Attivo)',
    clickToZoom: 'Clicca per visualizzare a schermo intero',
    startTradingBtn: 'Inizia la Sfida di Fondeo',
  },
  pl: {
    badge: 'INSTYTUCJONALNY EKOSYSTEM TRADINGU',
    title: 'Własny Terminal Webowy i Aplikacja Mobilna ERACEX',
    subtitle: 'Infrastruktura tradingowa nowej generacji z wykresami TradingView, automatyczną weryfikacją ryzyka w czasie rzeczywistym i synchronizacją desktop/mobile.',
    tabDesktop: 'Terminal Przeglądarkowy (Web Terminal)',
    tabMobile: 'Aplikacja Mobilna (iOS i Android)',
    previewThemeDark: 'Ciemny Motyw',
    previewThemeLight: 'Jasny Motyw',
    desktopViews: {
      trade: {
        tabName: 'Wykres i Egzekucja Zleceń',
        title: 'Profesjonalna Stacja Tradingowa z Wykresami TradingView',
        desc: 'Błyskawiczne zawieranie zleceń w czasie poniżej 15ms, przesuwanie poziomów SL i TP bezpośrednio na wykresie oraz spready raw na FX, Złoto, Krypto i Indeksy.',
        tags: ['Egzekucja < 15ms', '100+ Wskaźników Technicznych', 'Przeciąganie SL/TP na Wykresie', 'Pozycje Multi-Asset'],
      },
      prop: {
        tabName: 'Panel Zarządzania Wyzwaniem',
        title: '100% Zautomatyzowany Audyt Celów i Ryzyka',
        desc: 'Bez ręcznych kalkulacji w arkuszach. Automatyczne śledzenie limitu dziennego drawdownu i maksymalnej straty z natychmiastowym statusem zaliczenia.',
        tags: ['Automatyczne Sprawdzanie Zasad', 'Krzywa Wzrostu Salda i Equity', 'Odliczanie Limitu Dziennego', '100% Przejrzystości'],
      },
      explore: {
        tabName: 'Dane Rynkowe i Analizy',
        title: 'Globalny Kalendarz Makroekonomiczny i Sentyment Rynku',
        desc: 'Transmisja na żywo najważniejszych danych ekonomicznych (PKB, inflacja, stopy procentowe), sentyment kupujących i sprzedających oraz największe wahania cenowe.',
        tags: ['Kalendarz Makroekonomiczny', 'Sentyment Rynku Live', 'Największe Wzrosty i Spadki', 'Trendy FX i Krypto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Handel Jednym Dotknięciem',
        desc: 'Notowania na żywo, zmiana 24h, spready raw i aktualny stan celów wyzwania na samej górze ekranu.',
      },
      explore: {
        title: 'Kalendarz i Trendy Rynkowe',
        desc: 'Harmonogram publikacji makroekonomicznych i najgorętsze instrumenty na rynkach walut i kryptowalut.',
      },
      prop: {
        title: 'Ochrona Kapitału i Krzywa Equity',
        desc: 'Przejrzyste linie ryzyka wyznaczające dopuszczalną stratę dzienną i maksymalny poziom drawdownu.',
      },
    },
    liveLatency: 'Opóźnienie Serwera: 12ms · Ultraszybkie',
    activeChallenge: 'Konto Wyzwania: #1063830 (Aktywne)',
    clickToZoom: 'Kliknij, aby powiększyć na pełny ekran',
    startTradingBtn: 'Rozpocznij Wyzwanie',
  },
  tr: {
    badge: 'KURUMSAL İŞLEM EKOSİSTEMİ',
    title: 'ERACEX\'e Özgü Web Terminali ve Mobil Uygulama',
    subtitle: 'Entegre TradingView grafikleri, gerçek zamanlı otomatik risk denetimi ve masaüstü ile mobil arasında kusursuz senkronizasyona sahip yeni nesil işlem altyapısı.',
    tabDesktop: 'Masaüstü Terminali (Web Terminal)',
    tabMobile: 'Mobil Uygulama (iOS ve Android)',
    previewThemeDark: 'Koyu Tema',
    previewThemeLight: 'Açık Tema',
    desktopViews: {
      trade: {
        tabName: 'Canlı Grafik ve Emir İletimi',
        title: 'TradingView Entegrasyonlu Profesyonel İşlem İstasyonu',
        desc: '15ms altında ultra hızlı emir iletimi, grafik üzerinde sürükle-bırak Zarar Durdur (SL) ve Kâr Al (TP) ayarları, FX, Altın, Kripto ve Endekslerde ham spreadler.',
        tags: ['Emir İletimi < 15ms', '100+ Teknik Gösterge', 'Grafikte SL/TP Taşıma', 'Çoklu Varlık Yönetimi'],
      },
      prop: {
        tabName: 'Fonlama Değerlendirme Paneli',
        title: '%100 Otomatik Risk ve Hedef Denetimi',
        desc: 'Manuel hesaplama tablolarına son. Günlük maksimum kayıp ve toplam drawdown limitlerinin canlı takibi, anlık onay durumu ve günlük sayaç.',
        tags: ['Otomatik Kural Kontrolü', 'Varlık ve Bakiye Grafiği', 'Günlük Sıfırlama Sayacı', '%100 Şeffaf'],
      },
      explore: {
        tabName: 'Piyasa Verileri ve Analiz',
        title: 'Küresel Makro Ekonomik Takvim ve Piyasa Duyarlılığı',
        desc: 'Önemli ekonomik verilerin (GSYİH, PCE, faiz kararları) canlı akışı, alıcı/satıcı duyarlılık oranları ve en çok hareket eden varlıklar.',
        tags: ['Makroekonomik Takvim', 'Canlı Piyasa Duyarlılığı', 'Günün En Çok Artan/Azalanları', 'FX ve Kripto Trendleri'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Tek Dokunuşla Mobil İşlem',
        desc: 'Canlı fiyat akışı, 24 saatlik değişim %, ham spreadler ve ekranın üstünde yer alan hedef durumu.',
      },
      explore: {
        title: 'Ekonomik Takvim ve Trendler',
        desc: 'Ekonomik veri takvimi, döviz ve kripto para piyasalarındaki trend listeleri her an elinizin altında.',
      },
      prop: {
        title: 'Risk Koruması ve Varlık Eğrisi',
        desc: 'Günlük limitinizi ve maksimum kayıp sınırınızı gösteren net görsel risk çizgileri.',
      },
    },
    liveLatency: 'Sunucu Gecikmesi: 12ms · Ultra Hızlı',
    activeChallenge: 'Meydan Okuma Hesabı: #1063830 (Aktif)',
    clickToZoom: 'Tam ekran görüntülemek için tıklayın',
    startTradingBtn: 'Fonlama Meydan Okumasını Başlat',
  },
  id: {
    badge: 'EKOSISTEM TRADING INSTITUSIONAL',
    title: 'Web Terminal & Aplikasi Mobile Milik ERACEX',
    subtitle: 'Infrastruktur trading generasi baru dengan integrasi grafik TradingView, audit risiko otomatis real-time, dan sinkronisasi mulus di desktop maupun ponsel.',
    tabDesktop: 'Terminal Desktop (Web Terminal)',
    tabMobile: 'Aplikasi Mobile (iOS & Android)',
    previewThemeDark: 'Tema Gelap',
    previewThemeLight: 'Tema Terang',
    desktopViews: {
      trade: {
        tabName: 'Grafik & Eksekusi Langsung',
        title: 'Stasiun Trading Profesional Terintegrasi TradingView',
        desc: 'Eksekusi ultra cepat di bawah 15ms, geser Stop Loss & Take Profit langsung pada grafik, serta spread raw untuk FX, Emas, Kripto, dan Indeks.',
        tags: ['Eksekusi < 15ms', '100+ Indikator Teknikal', 'Drag SL/TP di Grafik', 'Manajemen Posisi Multi-Aset'],
      },
      prop: {
        tabName: 'Dashboard Evaluasi Akun',
        title: 'Audit Target & Risiko 100% Otomatis',
        desc: 'Tanpa perlu hitungan manual. Pelacakan otomatis batas kerugian harian dan total drawdown dengan pembaruan status kelulusan real-time.',
        tags: ['Pengecekan Aturan Otomatis', 'Kurva Pertumbuhan Ekuitas/Saldo', 'Hitung Mundur Reset Harian', '100% Transparan'],
      },
      explore: {
        tabName: 'Data Pasar & Analisis Makro',
        title: 'Kalender Ekonomi Global & Sentimen Pasar Real-Time',
        desc: 'Pembaruan langsung data ekonomi penting (PDB, inflasi, suku bunga bank sentral), persentase sentimen beli/jual, dan aset paling fluktuatif.',
        tags: ['Kalender Ekonomi Makro', 'Sentimen Pasar Langsung', 'Aset Paling Volatil', 'Tren FX & Kripto'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Trading Mobile Sekali Sentuh',
        desc: 'Harga real-time, perubahan % 24 jam, spread raw, dan status pencapaian target langsung di bagian atas.',
      },
      explore: {
        title: 'Kalender & Tren Pasar',
        desc: 'Jadwal rilis berita ekonomi dan daftar tren mata uang serta aset kripto kapan saja dan di mana saja.',
      },
      prop: {
        title: 'Pemantauan Risiko & Kurva Ekuitas',
        desc: 'Garis batas visual yang jelas menunjukkan ambang batas kerugian harian dan batas drawdown maksimal.',
      },
    },
    liveLatency: 'Latensi Server: 12ms · Sangat Cepat',
    activeChallenge: 'Akun Challenge: #1063830 (Aktif)',
    clickToZoom: 'Klik untuk perbesar layar penuh',
    startTradingBtn: 'Mulai Challenge Akun Funded',
  },
  th: {
    badge: 'ระบบนิเวศการเทรดระดับสถาบัน',
    title: 'แพลตฟอร์ม Web Terminal และแอปมือถือเฉพาะของ ERACEX',
    subtitle: 'โครงสร้างพื้นฐานการเทรดเจเนอเรชันใหม่ ผสานกราฟ TradingView ระบบตรวจจับความเสี่ยงอัตโนมัติแบบเรียลไทม์ และซิงค์ข้อมูลสมบูรณ์แบบข้ามอุปกรณ์',
    tabDesktop: 'แพลตฟอร์มคอมพิวเตอร์ (Web Terminal)',
    tabMobile: 'แอปพลิเคชันมือถือ (iOS & Android)',
    previewThemeDark: 'โหมดมืด (Dark Theme)',
    previewThemeLight: 'โหมดสว่าง (Light Theme)',
    desktopViews: {
      trade: {
        tabName: 'กราฟสดและการส่งคำสั่ง',
        title: 'สถานีเทรดระดับมือโปรที่ผสานกราฟ TradingView แท้',
        desc: 'ส่งคำสั่งเร็วเสี้ยววินาทีต่ำกว่า 15ms ลากวาง Stop Loss และ Take Profit บนกราฟได้โดยตรง พร้อมสเปรดแคบที่สุดสำหรับ FX, ทองคำ, คริปโต และดัชนี',
        tags: ['ส่งคำสั่ง < 15ms', '100+ อินดิเคเตอร์ทางเทคนิค', 'ลากปรับ SL/TP บนกราฟ', 'จัดการพอร์ตหลายสินทรัพย์'],
      },
      prop: {
        tabName: 'แดชบอร์ดตรวจสอบพอร์ตสอบ',
        title: 'ระบบตรวจสอบเป้าหมายและความเสี่ยงอัตโนมัติ 100%',
        desc: 'ไม่ต้องคำนวณเอง ระบบจะติดตามผลขาดทุนรายวันและ Drawdown สูงสุดให้อัตโนมัติ พร้อมแสดงสถานะผ่านเกณฑ์ (PASSED) แบบเรียลไทม์',
        tags: ['ตรวจสอบกฎกติกาอัตโนมัติ', 'กราฟเส้นแสดงการเติบโต Equity/Balance', 'นาฬิกานับถอยหลังรีเซ็ตรายวัน', 'โปร่งใส 100%'],
      },
      explore: {
        tabName: 'ข้อมูลเชิงลึกและข่าวสารตลาด',
        title: 'ปฏิทินเศรษฐกิจมหภาคระดับโลกและอารมณ์ตลาด',
        desc: 'อัปเดตสดเหตุการณ์เศรษฐกิจสำคัญ (GDP, ตัวเลขเงินเฟ้อ, ดอกเบี้ยนโยบาย) เปอร์เซ็นต์แรงซื้อ/แรงขาย และสินทรัพย์ที่มีการเคลื่อนไหวสูงสุด',
        tags: ['ปฏิทินเศรษฐกิจมหภาค', 'ความเชื่อมั่นตลาดแบบสด', 'สินทรัพย์เคลื่อนไหวสูงสุด', 'แนวโน้ม FX & คริปโต'],
      },
    },
    mobileCards: {
      trade: {
        title: 'เทรดบนมือถือได้ในสัมผัสเดียว',
        desc: 'ราคาเรียลไทม์ ความผันผวน 24 ชม. สเปรดแคบ และแสดงสถานะเป้าหมายการสอบไว้ที่ด้านบนสุดของจอ',
      },
      explore: {
        title: 'ปฏิทินเศรษฐกิจและเทรนด์ตลาด',
        desc: 'ตารางการประกาศข่าวและลิสต์สินทรัพย์ยอดนิยมในตลาด Forex และคริปโต ติดตามได้ทุกที่ทุกเวลา',
      },
      prop: {
        title: 'ระบบป้องกันความเสี่ยงและเส้น Equity',
        desc: 'เส้นเตือนระดับความเสี่ยงที่ชัดเจนระบุจุดจำกัดขาดทุนรายวันและจุดตัดขาดทุนสูงสุด',
      },
    },
    liveLatency: 'ความหน่วงเซิร์ฟเวอร์: 12ms · เร็วเป็นพิเศษ',
    activeChallenge: 'พอร์ตทดสอบ: #1063830 (กำลังใช้งาน)',
    clickToZoom: 'คลิกเพื่อขยายเต็มหน้าจอ',
    startTradingBtn: 'เริ่มการสอบพอร์ตเทรด',
  },
  fil: {
    badge: 'INSTITUSYONAL NA TRADING ECOSYSTEM',
    title: 'Proprietary Web Terminal & Mobile App ng ERACEX',
    subtitle: 'Makabagong imprastraktura sa trading na may TradingView charts, automated real-time risk tracking, at perpektong synchronization sa desktop at mobile.',
    tabDesktop: 'Desktop Platform (Web Terminal)',
    tabMobile: 'Mobile App (iOS & Android)',
    previewThemeDark: 'Dark Theme',
    previewThemeLight: 'Light Theme',
    desktopViews: {
      trade: {
        tabName: 'Live Chart & Execution',
        title: 'Pro-Grade Terminal na may TradingView Integration',
        desc: 'Napakabilis na execution sa ilalim ng 15ms, pag-drag ng Stop Loss at Take Profit diretso sa chart, at raw spreads para sa FX, Ginto, Crypto, at Indices.',
        tags: ['Execution < 15ms', '100+ Technical Indicators', 'Chart-Drag SL/TP', 'Multi-Asset Positions'],
      },
      prop: {
        tabName: 'Prop Challenge Dashboard',
        title: '100% Awtomatikong Risk & Objective Auditing',
        desc: 'Wala nang manu-manong kalkulasyon. Awtomatikong sinusubaybayan ang daily drawdown at max loss limits nang may real-time PASSED status.',
        tags: ['Awtomatikong Pagsusuri ng Patakaran', 'Equity & Balance Curve', 'Daily Limit Timer', '100% Transparent'],
      },
      explore: {
        tabName: 'Market Intelligence & Balita',
        title: 'Global Macro Economic Calendar & Market Sentiment',
        desc: 'Live streaming ng mahahalagang datos pang-ekonomiya (GDP, inflation, rate decisions), porsyento ng buyer/seller sentiment, at top market movers.',
        tags: ['Macroeconomic Calendar', 'Live Market Sentiment', 'Top Gainers & Losers', 'FX & Crypto Trends'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Isang Pindot na Pag-trade sa Mobile',
        desc: 'Live prices, 24h % change, raw spreads, at kasalukuyang challenge status sa itaas ng screen.',
      },
      explore: {
        title: 'Kalendaryo at mga Trending Assets',
        desc: 'Iskedyul ng mga balitang pang-ekonomiya at listahan ng trending pairs sa FX at Crypto kahit nasaan ka man.',
      },
      prop: {
        title: 'Risk Guard at Equity Curve',
        desc: 'Malinaw na visual risk bands na nagtatakda ng iyong daily threshold at maximum loss boundary.',
      },
    },
    liveLatency: 'Server Latency: 12ms · Napakabilis',
    activeChallenge: 'Challenge Account: #1063830 (Aktibo)',
    clickToZoom: 'I-click upang i-fullscreen',
    startTradingBtn: 'Simulan ang Challenge',
  },
  hi: {
    badge: 'संस्थागत ट्रेडिंग इकोसिस्टम',
    title: 'ERACEX का मालिकाना वेब टर्मिनल और मोबाइल ऐप',
    subtitle: 'अगली पीढ़ी का ट्रेडिंग इंफ्रास्ट्रक्चर जिसमें एकीकृत TradingView चार्ट, रीयल-टाइम स्वचालित जोखिम ऑडिटिंग और डेस्कटॉप-मोबाइल सिंक शामिल है।',
    tabDesktop: 'डेस्कटॉप प्लेटफ़ॉर्म (वेब टर्मिनल)',
    tabMobile: 'मोबाइल ऐप (iOS और Android)',
    previewThemeDark: 'डार्क थीम',
    previewThemeLight: 'लाइट थीम',
    desktopViews: {
      trade: {
        tabName: 'लाइव चार्ट और निष्पादन',
        title: 'TradingView के साथ एकीकृत पेशेवर ट्रेडिंग टर्मिनल',
        desc: '15ms से कम का अल्ट्रा-फास्ट निष्पादन, चार्ट पर स्टॉप लॉस और टेक प्रॉफिट खींचने की सुविधा, और फॉरेक्स, गोल्ड, क्रिप्टो और इंडेक्स पर रॉ स्प्रेड।',
        tags: ['निष्पादन < 15ms', '100+ तकनीकी संकेतक', 'चार्ट पर खींचें SL/TP', 'मल्टी-एसेट पोजीशन'],
      },
      prop: {
        tabName: 'प्रॉप चैलेंज डैशबोर्ड',
        title: '100% स्वचालित जोखिम और लक्ष्य ऑडिटिंग',
        desc: 'मैनुअल गणना की कोई आवश्यकता नहीं। रीयल-टाइम दैनिक नुकसान और अधिकतम ड्रॉडाउन की स्वचालित ट्रैकिंग के साथ तुरंत सफलता की पुष्टि।',
        tags: ['स्वचालित नियम जांच', 'इक्विटी/बैलेंस कर्व', 'दैनिक रीसेट टाइमर', '100% पारदर्शी'],
      },
      explore: {
        tabName: 'बाजार समाचार और विश्लेषण',
        title: 'वैश्विक मैक्रो आर्थिक कैलेंडर और बाजार धारणा',
        desc: 'प्रमुख आर्थिक आंकड़ों (जीडीपी, मुद्रास्फीति, ब्याज दर निर्णय) का सीधा प्रसारण, खरीदार बनाम विक्रेता धारणा प्रतिशत और शीर्ष उतार-चढ़ाव वाले परिसंपत्तियां।',
        tags: ['आर्थिक कैलेंडर', 'लाइव बाजार धारणा', 'शीर्ष मूवर्स', 'एफएक्स और क्रिप्टो रुझान'],
      },
    },
    mobileCards: {
      trade: {
        title: 'वन-टैप मोबाइल ट्रेडिंग',
        desc: 'रीयल-टाइम कीमतें, 24 घंटे का % बदलाव, रॉ स्प्रेड और स्क्रीन के शीर्ष पर लाइव चैलेंज लक्ष्य की स्थिति।',
      },
      explore: {
        title: 'कैलेंडर और बाजार रुझान',
        desc: 'आर्थिक डेटा जारी होने का समय और शीर्ष ट्रेंडिंग फॉरेक्स और क्रिप्टो संपत्तियां आपकी जेब में।',
      },
      prop: {
        title: 'जोखिम सुरक्षा और इक्विटी कर्व',
        desc: 'स्पष्ट दृश्य जोखिम सीमाएं जो आपकी दैनिक सीमा और अधिकतम नुकसान सीमा को दर्शाती हैं।',
      },
    },
    liveLatency: 'सर्वर विलंबता: 12ms · अत्यंत तीव्र',
    activeChallenge: 'मूल्यांकन खाता: #1063830 (सक्रिय)',
    clickToZoom: 'पूर्ण स्क्रीन में देखने के लिए क्लिक करें',
    startTradingBtn: 'फंडिंग चैलेंज शुरू करें',
  },
  ko: {
    badge: '기관급 전문 트레이딩 에코시스템',
    title: 'ERACEX 자체 개발 웹 터미널 및 모바일 앱',
    subtitle: 'TradingView 차트 내장, 실시간 전자동 리스크 감사 시스템, PC와 모바일 간의 완벽한 실시간 동기화를 지원하는 차세대 프랍 트레이딩 인프라.',
    tabDesktop: 'PC 웹 터미널 (Web Terminal)',
    tabMobile: '모바일 트레이딩 앱 (iOS & Android)',
    previewThemeDark: '다크 테마',
    previewThemeLight: '라이트 테마',
    desktopViews: {
      trade: {
        tabName: '실시간 차트 및 초고속 주문',
        title: 'TradingView 통합 전문가용 트레이딩 콘솔',
        desc: '15ms 미만의 초고속 체결, 차트상에서 직관적으로 드래그하는 SL/TP 설정, 외환·골드·가상자산·지수 시장 최저 수준의 스프레드 제공.',
        tags: ['체결 속도 < 15ms', '100+ 기술적 지표', '차트 드래그 SL/TP', '통합 포지션 관리'],
      },
      prop: {
        tabName: '챌린지 리스크 모니터링',
        title: '100% 전자동 목표 달성 및 리스크 감사',
        desc: '수동 계산이 필요 없습니다. 일일 최대 허용 손실 및 전체 계좌 드로다운 한도를 실시간으로 추적하여 통과 여부를 즉시 표시합니다.',
        tags: ['자동 규정 준수 검증', '실시간 순자산/잔고 성장 곡선', '일일 리셋 타이머', '100% 투명한 데이터'],
      },
      explore: {
        tabName: '글로벌 시장 분석 및 정보',
        title: '글로벌 거시 경제 캘린더 및 실시간 시장 심리',
        desc: '주요 경제 지표(GDP, Core PCE, 금리 결정) 실시간 발표 스트리밍, 매수/매도 심리 비율, 당일 최고 변동성 종목 순위 제공.',
        tags: ['거시 경제 캘린더', '실시간 시장 심리 지수', '당일 등락률 상위 종목', '외환 및 가상자산 트렌드'],
      },
    },
    mobileCards: {
      trade: {
        title: '원터치 모바일 간편 주문',
        desc: '실시간 호가 스트리밍, 24시간 변동률, 좁은 스프레드, 화면 상단의 챌린지 달성 현황.',
      },
      explore: {
        title: '경제 캘린더 및 시장 트렌드',
        desc: '주요 지표 발표 일정과 외환, 가상자산, 원자재 인기 종목을 언제 어디서나 확인.',
      },
      prop: {
        title: '리스크 가드 및 자산 곡선',
        desc: '일일 손실 한도와 최대 허용 드로다운 경계선을 시각적으로 명확하게 표시.',
      },
    },
    liveLatency: '서버 레이텐시: 12ms · 초고속',
    activeChallenge: '평가 계좌: #1063830 (운용 중)',
    clickToZoom: '클릭하여 전체 화면으로 보기',
    startTradingBtn: '펀딩 챌린지 시작하기',
  },
  ru: {
    badge: 'ИНСТИТУЦИОНАЛЬНАЯ ЭКОСИСТЕМА ТРЕЙДИНГА',
    title: 'Собственный Веб-Терминал и Мобильное Приложение ERACEX',
    subtitle: 'Торговая инфраструктура нового поколения со встроенными графиками TradingView, автоматическим контролем рисков в реальном времени и бесшовной синхронизацией.',
    tabDesktop: 'Десктопный Терминал (Web Terminal)',
    tabMobile: 'Мобильное Приложение (iOS и Android)',
    previewThemeDark: 'Темная Тема',
    previewThemeLight: 'Светлая Тема',
    desktopViews: {
      trade: {
        tabName: 'График и Исполнение Сделок',
        title: 'Профессиональная Станция с Интеграцией TradingView',
        desc: 'Исполнение сделок менее чем за 15мс, перетаскивание уровней Stop Loss и Take Profit прямо на графике, и сырые спреды на FX, Золото, Криптовалюты и Индексы.',
        tags: ['Исполнение < 15мс', '100+ Технических Индикаторов', 'Drag & Drop SL/TP', 'Мультиактивные Позиции'],
      },
      prop: {
        tabName: 'Дашборд Оценочного Челленджа',
        title: '100% Автоматизированный Контроль Рисков и Целей',
        desc: 'Никаких ручных таблиц. Автоматический расчет дневной и максимальной просадки в реальном времени с мгновенным подтверждением статуса прохождения.',
        tags: ['Автоматическая Проверка Правил', 'Кривая Роста Баланса и Эквити', 'Таймер Дневного Сброса', '100% Прозрачность'],
      },
      explore: {
        tabName: 'Аналитика и Рыночные Данные',
        title: 'Мировой Экономический Календарь и Настроения Рынков',
        desc: 'Прямая трансляция ключевых макроэкономических данных (ВВП, инфляция, процентные ставки), соотношение покупателей и продавцов, и лидеры волатильности.',
        tags: ['Экономический Календарь', 'Настроения Трейдеров Live', 'Лидеры Роста и Падения', 'Тренды Форекс и Крипто'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Мобильная Торговля в Одно Касание',
        desc: 'Котировки в реальном времени, изменение за 24ч, узкие спреды и статус целей счета прямо вверху экрана.',
      },
      explore: {
        title: 'Календарь и Тренды Рынков',
        desc: 'Расписание выхода экономических новостей и популярные активы валютного и крипторынка всегда под рукой.',
      },
      prop: {
        title: 'Контроль Рисков и Кривая Эквити',
        desc: 'Наглядные визуальные линии, четко обозначающие дневной лимит потерь и границу максимальной просадки.',
      },
    },
    liveLatency: 'Задержка Сервера: 12мс · Сверхбыстро',
    activeChallenge: 'Счет Челленджа: #1063830 (Активен)',
    clickToZoom: 'Нажмите для полноэкранного режима',
    startTradingBtn: 'Начать Челлендж Оценки',
  },
  ar: {
    badge: 'منظومة التداول المؤسسي المتطورة',
    title: 'منصة الويب وتطبيق الهاتف الحصريان من ERACEX',
    subtitle: 'بنية تحتية للتداول من الجيل الجديد تتضمن رسوم TradingView البيانية المدمجة، وتدقيق المخاطر التلقائي لحظة بلحظة، ومزامنة سلسة وشاملة.',
    tabDesktop: 'منصة الحاسوب (Web Terminal)',
    tabMobile: 'تطبيق الهاتف (iOS و Android)',
    previewThemeDark: 'المظهر الداكن',
    previewThemeLight: 'المظهر الفاتح',
    desktopViews: {
      trade: {
        tabName: 'الرسم البياني والتنفيذ الحي',
        title: 'محطة تداول احترافية مدمجة بالكامل مع TradingView',
        desc: 'تنفيذ فائق السرعة في أقل من 15ms، وسحب مستويات وقف الخسارة وجني الأرباح مباشرة على الرسم البياني، مع سبريد خام على العملات والذهب والكريبتو والمؤشرات.',
        tags: ['تنفيذ < 15ms', '100+ مؤشر فني', 'سحب وإفلات SL/TP', 'إدارة متعددة الأصول'],
      },
      prop: {
        tabName: 'لوحة متابعة تحدي التمويل',
        title: 'تدقيق آلي 100% للمخاطر وأهداف التحدي',
        desc: 'لا حاجة للحسابات اليدوية. تتبع تلقائي فوري لحدود التراجع اليومي والتراجع الكلي مع إظهار حالة الاجتياز وتوقيت إعادة الضبط.',
        tags: ['فحص آلي للقواعد', 'منحنى نمو الرصيد والسيولة', 'عداد إعادة التعيين اليومي', 'شفافية 100%'],
      },
      explore: {
        tabName: 'بيانات السوق والأخبار الاقتصادية',
        title: 'التقويم الاقتصادي العالمي ومؤشرات معنويات السوق',
        desc: 'بث حي لأهم الأحداث الاقتصادية (الناتج المحلي، التضخم، قرارات الفائدة)، ونسب المشترين مقابل البائعين، والعملات الأكثر حركة.',
        tags: ['التقويم الاقتصادي', 'معنويات السوق المباشرة', 'الأصول الأكثر تقلبًا', 'اتجاهات العملات والكريبتو'],
      },
    },
    mobileCards: {
      trade: {
        title: 'تداول الهاتف بنقرة واحدة',
        desc: 'أسعار متدفقة حية، نسبة التغير خلال 24 ساعة، سبريد خام، وحالة أهداف التحدي في أعلى الشاشة.',
      },
      explore: {
        title: 'التقويم الاقتصادي والاتجاهات',
        desc: 'مواعيد صدور البيانات الاقتصادية وقوائم الأصول الأكثر تداولاً في الفوركس والعملات الرقمية أينما كنت.',
      },
      prop: {
        title: 'حماية المخاطر ومنحنى السيولة',
        desc: 'خطوط واضحة بصريًا تحدد سقف الخسارة اليومية والحد الأقصى للتراجع المسموح به.',
      },
    },
    liveLatency: 'زمن انتقال الخادم: 12ms · سرعة فائقة',
    activeChallenge: 'حساب التحدي: #1063830 (نشط)',
    clickToZoom: 'انقر للعرض في وضع ملء الشاشة',
    startTradingBtn: 'ابدأ تحدي التمويل الآن',
  },
  nl: {
    badge: 'INSTITUTIONEEL TRADING ECOSYSTEEM',
    title: 'Eigen ERACEX Webterminal & Mobiele App',
    subtitle: 'Handelsinfrastructuur van de volgende generatie met geïntegreerde TradingView-grafieken, geautomatiseerde realtime risicocontrole en vlekkeloze synchronisatie.',
    tabDesktop: 'Desktop Platform (Web Terminal)',
    tabMobile: 'Mobiele App (iOS & Android)',
    previewThemeDark: 'Donker Thema',
    previewThemeLight: 'Licht Thema',
    desktopViews: {
      trade: {
        tabName: 'Live Grafiek & Uitvoering',
        title: 'Professioneel Handelsstation Geïntegreerd met TradingView',
        desc: 'Bliksemsnelle orderuitvoering onder 15ms, direct verslepen van Stop Loss & Take Profit op de grafiek en raw spreads op FX, Goud, Crypto & Indices.',
        tags: ['Uitvoering < 15ms', '100+ Technische Indicatoren', 'Grafiek-Drag SL/TP', 'Multi-Asset Posities'],
      },
      prop: {
        tabName: 'Challenge Risicodashboard',
        title: '100% Geautomatiseerde Doel- en Risico-audit',
        desc: 'Geen handmatige spreadsheets nodig. Realtime automatische tracking van het dagelijkse en maximale verlies met directe bevestiging van slagen.',
        tags: ['Automatische Regelcontrole', 'Groeicurve van Equity & Saldo', 'Dagelijkse Resettimer', '100% Transparant'],
      },
      explore: {
        tabName: 'Marktdata & Economisch Nieuws',
        title: 'Wereldwijde Macro-economische Kalender & Marktsentiment',
        desc: 'Livestreams van belangrijke economische gebeurtenissen (BBP, inflatie, rentebesluiten), verhouding tussen kopers en verkopers en grootste stijgers/dalers.',
        tags: ['Macro-economische Kalender', 'Live Marktsentiment', 'Grootste Stijgers & Dalers', 'FX & Crypto Trends'],
      },
    },
    mobileCards: {
      trade: {
        title: 'Mobiel Handelen met Één Tik',
        desc: 'Live streaming koersen, 24-uurs % verandering, raw spreads en de status van je challenge-doelen direct bovenaan.',
      },
      explore: {
        title: 'Kalender & Markttrends',
        desc: 'Overzicht van economische publicaties en trending valutaparen en cryptomunten binnen handbereik.',
      },
      prop: {
        title: 'Risicobescherming & Vermogenscurve',
        desc: 'Duidelijke visuele risicolijnen die je dagelijkse limiet en maximale drawdown-grens markeren.',
      },
    },
    liveLatency: 'Serverlatentie: 12ms · Ultrasnel',
    activeChallenge: 'Challenge Account: #1063830 (Actief)',
    clickToZoom: 'Klik voor volledig scherm',
    startTradingBtn: 'Start de Funding Challenge',
  },
};

// Locate where DICTIONARY ends: "  en: {\n ... \n  },\n};"
const enEnd = content.indexOf('    startTradingBtn: \'Start Challenge\',');
// Let's find "const DICTIONARY: Record<" or "const DICTIONARY = {"
const dictIdx = content.indexOf('const DICTIONARY:');
if (dictIdx === -1) {
  console.error('Could not find const DICTIONARY in file');
  process.exit(1);
}

// Find the closing of DICTIONARY
// Find "export const EracexPlatformShowcaseSection"
const exportIdx = content.indexOf('export const EracexPlatformShowcaseSection');
if (exportIdx === -1) {
  console.error('Could not find export const EracexPlatformShowcaseSection');
  process.exit(1);
}

// The closing of DICTIONARY is the last "};" before exportIdx
const dictCloseIdx = content.lastIndexOf('};', exportIdx);
const beforeDictClose = content.slice(0, dictCloseIdx);
const afterDictClose = content.slice(dictCloseIdx);

let injectedLangs = '';
for (const [lang, dict] of Object.entries(showcaseLangs)) {
  injectedLangs += `,\n  ${lang}: ${JSON.stringify(dict, null, 2).replace(/\n/g, '\n  ')}`;
}

const updatedContent = beforeDictClose + injectedLangs + '\n' + afterDictClose;
fs.writeFileSync(targetPath, updatedContent, 'utf8');
console.log('Successfully added all 15 languages to EracexPlatformShowcaseSection.tsx!');
