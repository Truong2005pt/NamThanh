// components/eracex/ui-strings.ts
// Small UI strings (tooltips, aria labels, footer blocks) that are not part of the large dictionaries.
// 'vi' and 'en' are the source languages; the other 13 are translations. Footer 'extra' blocks exist for the 13 translated languages only
// (vi/en blocks live in FooterDisclaimers.tsx).
export interface UiStr {
  changeLanguage: string; toggleTheme: string; themeAria: string; toDark: string; toLight: string; toggleMenu: string;
  legal: string; payment: string; brand: string; preview: string; programInfo: string;
  extra?: { t: string; x: string }[];
}

export const UI_STR: Record<string, UiStr> = {
  "es": {
    "changeLanguage": "Cambiar idioma",
    "toggleTheme": "Alternar tema",
    "themeAria": "Alternar tema claro/oscuro",
    "toDark": "Cambiar a modo oscuro",
    "toLight": "Cambiar a modo claro",
    "toggleMenu": "Alternar menú de navegación",
    "legal": "Avisos legales",
    "payment": "Métodos de pago",
    "brand": "ERACEX, firma de trading propietario",
    "preview": "ERACEX / VISTA PREVIA",
    "programInfo": "Información del programa",
    "extra": [
      {
        "t": "h4",
        "x": "Información empresarial y alcance del servicio"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E desarrolla la marca ERACEX y presenta sus programas de evaluación de trading. Dirección registrada: C1 Building, Ajman Free Zone, Ajman, Emiratos Árabes Unidos · B.C. 1309328. Los programas se ofrecen y gestionan junto con socios tecnológicos conforme a los términos aplicables. La elegibilidad depende del país, el territorio y la verificación."
      },
      {
        "t": "h4",
        "x": "Jurisdicciones restringidas"
      },
      {
        "t": "p",
        "x": "El servicio no está disponible para ciudadanos o residentes de: Afganistán, Bielorrusia, Cuba, la Franja de Gaza, Irán, Libia, Myanmar, Rusia, Sudán del Sur, Corea del Norte, Siria, Venezuela, y las regiones de Crimea, Donetsk, Lugansk, Jersón, Zaporiyia y Sebastopol. Está estrictamente prohibido usar deliberadamente una VPN o herramientas de anonimización para eludir las restricciones regionales."
      }
    ]
  },
  "pt": {
    "changeLanguage": "Alterar idioma",
    "toggleTheme": "Alternar tema",
    "themeAria": "Alternar tema claro/escuro",
    "toDark": "Mudar para o modo escuro",
    "toLight": "Mudar para o modo claro",
    "toggleMenu": "Alternar menu de navegação",
    "legal": "Avisos legais",
    "payment": "Formas de pagamento",
    "brand": "ERACEX, empresa de trading proprietário",
    "preview": "ERACEX / PRÉVIA",
    "programInfo": "Informações do programa",
    "extra": [
      {
        "t": "h4",
        "x": "Informações empresariais e escopo do serviço"
      },
      {
        "t": "p",
        "x": "A ERACEX F.Z.E desenvolve a marca ERACEX e apresenta seus programas de avaliação de trading. Endereço registrado: C1 Building, Ajman Free Zone, Ajman, Emirados Árabes Unidos · B.C. 1309328. Os programas são oferecidos e operados em conjunto com parceiros de tecnologia, conforme os termos aplicáveis. A elegibilidade depende do país, do território e da verificação."
      },
      {
        "t": "h4",
        "x": "Jurisdições restritas"
      },
      {
        "t": "p",
        "x": "O serviço não está disponível para cidadãos ou residentes de: Afeganistão, Bielorrússia, Cuba, Faixa de Gaza, Irã, Líbia, Mianmar, Rússia, Sudão do Sul, Coreia do Norte, Síria, Venezuela, e das regiões da Crimeia, Donetsk, Luhansk, Kherson, Zaporíjia e Sebastopol. É estritamente proibido usar deliberadamente uma VPN ou ferramentas de anonimização para contornar as restrições regionais."
      }
    ]
  },
  "hi": {
    "changeLanguage": "भाषा बदलें",
    "toggleTheme": "थीम बदलें",
    "themeAria": "लाइट/डार्क थीम बदलें",
    "toDark": "डार्क मोड पर जाएँ",
    "toLight": "लाइट मोड पर जाएँ",
    "toggleMenu": "नेविगेशन मेनू खोलें/बंद करें",
    "legal": "कानूनी अस्वीकरण",
    "payment": "भुगतान के तरीके",
    "brand": "ERACEX प्रोप्राइटरी ट्रेडिंग फ़र्म",
    "preview": "ERACEX / पूर्वावलोकन",
    "programInfo": "प्रोग्राम की जानकारी",
    "extra": [
      {
        "t": "h4",
        "x": "व्यवसाय की जानकारी और सेवा का दायरा"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E ERACEX ब्रांड विकसित करता है और अपने ट्रेडिंग मूल्यांकन प्रोग्राम प्रस्तुत करता है। रिकॉर्ड में दर्ज पता: C1 Building, Ajman Free Zone, Ajman, संयुक्त अरब अमीरात · B.C. 1309328। प्रोग्राम लागू शर्तों के अनुसार टेक्नोलॉजी पार्टनर्स के साथ मिलकर प्रदान और संचालित किए जाते हैं। पात्रता देश, क्षेत्र और सत्यापन पर निर्भर करती है।"
      },
      {
        "t": "h4",
        "x": "प्रतिबंधित क्षेत्राधिकार"
      },
      {
        "t": "p",
        "x": "यह सेवा इन देशों के नागरिकों या निवासियों के लिए उपलब्ध नहीं है: अफ़गानिस्तान, बेलारूस, क्यूबा, गाज़ा पट्टी, ईरान, लीबिया, म्यांमार, रूस, दक्षिण सूडान, उत्तर कोरिया, सीरिया, वेनेज़ुएला, तथा क्रीमिया, दोनेत्स्क, लुहांस्क, खेरसॉन, ज़ापोरिज़्ज़िया और सेवस्तोपोल के क्षेत्र। क्षेत्रीय प्रतिबंधों को दरकिनार करने के लिए जानबूझकर VPN या गुमनाम बनाने वाले टूल्स का उपयोग करना सख़्त मना है।"
      }
    ]
  },
  "id": {
    "changeLanguage": "Ganti Bahasa",
    "toggleTheme": "Beralih tema",
    "themeAria": "Beralih tema terang/gelap",
    "toDark": "Beralih ke Mode Gelap",
    "toLight": "Beralih ke Mode Terang",
    "toggleMenu": "Buka/tutup menu navigasi",
    "legal": "Disclaimer hukum",
    "payment": "Metode pembayaran",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / PRATINJAU",
    "programInfo": "Informasi Program",
    "extra": [
      {
        "t": "h4",
        "x": "Informasi bisnis dan cakupan layanan"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E mengembangkan merek ERACEX dan menyajikan program evaluasi tradingnya. Alamat terdaftar: C1 Building, Ajman Free Zone, Ajman, Uni Emirat Arab · B.C. 1309328. Program disediakan dan dioperasikan bersama mitra teknologi sesuai ketentuan yang berlaku. Kelayakan bergantung pada negara, wilayah, dan verifikasi."
      },
      {
        "t": "h4",
        "x": "Yurisdiksi Terbatas"
      },
      {
        "t": "p",
        "x": "Layanan ini tidak tersedia bagi warga negara atau penduduk: Afganistan, Belarus, Kuba, Jalur Gaza, Iran, Libya, Myanmar, Rusia, Sudan Selatan, Korea Utara, Suriah, Venezuela, serta wilayah Krimea, Donetsk, Luhansk, Kherson, Zaporizhzhia dan Sevastopol. Menggunakan VPN atau alat anonimisasi dengan sengaja untuk menghindari pembatasan wilayah sangat dilarang."
      }
    ]
  },
  "fr": {
    "changeLanguage": "Changer de langue",
    "toggleTheme": "Changer de thème",
    "themeAria": "Basculer entre thème clair et sombre",
    "toDark": "Passer en mode sombre",
    "toLight": "Passer en mode clair",
    "toggleMenu": "Afficher/masquer le menu de navigation",
    "legal": "Mentions légales",
    "payment": "Moyens de paiement",
    "brand": "ERACEX, société de trading pour compte propre",
    "preview": "ERACEX / APERÇU",
    "programInfo": "Informations sur le programme",
    "extra": [
      {
        "t": "h4",
        "x": "Informations sur l'entreprise et périmètre du service"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E développe la marque ERACEX et présente ses programmes d'évaluation de trading. Adresse enregistrée : C1 Building, Ajman Free Zone, Ajman, Émirats arabes unis · B.C. 1309328. Les programmes sont fournis et exploités avec des partenaires technologiques selon les conditions applicables. L'éligibilité dépend du pays, du territoire et de la vérification."
      },
      {
        "t": "h4",
        "x": "Juridictions restreintes"
      },
      {
        "t": "p",
        "x": "Le service n'est pas disponible pour les citoyens ou résidents de : Afghanistan, Biélorussie, Cuba, bande de Gaza, Iran, Libye, Myanmar, Russie, Soudan du Sud, Corée du Nord, Syrie, Venezuela, ainsi que des régions de Crimée, Donetsk, Louhansk, Kherson, Zaporijjia et Sébastopol. L'utilisation délibérée d'un VPN ou d'outils d'anonymisation pour contourner les restrictions régionales est strictement interdite."
      }
    ]
  },
  "de": {
    "changeLanguage": "Sprache ändern",
    "toggleTheme": "Design umschalten",
    "themeAria": "Helles/dunkles Design umschalten",
    "toDark": "Zum dunklen Modus wechseln",
    "toLight": "Zum hellen Modus wechseln",
    "toggleMenu": "Navigationsmenü umschalten",
    "legal": "Rechtliche Hinweise",
    "payment": "Zahlungsmethoden",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / VORSCHAU",
    "programInfo": "Programminformationen",
    "extra": [
      {
        "t": "h4",
        "x": "Geschäftsinformationen und Leistungsumfang"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E entwickelt die Marke ERACEX und stellt ihre Trading-Evaluierungsprogramme vor. Hinterlegte Adresse: C1 Building, Ajman Free Zone, Ajman, Vereinigte Arabische Emirate · B.C. 1309328. Die Programme werden gemeinsam mit Technologiepartnern gemäß den geltenden Bedingungen bereitgestellt und betrieben. Die Teilnahmeberechtigung hängt von Land, Gebiet und Verifizierung ab."
      },
      {
        "t": "h4",
        "x": "Eingeschränkte Rechtsordnungen"
      },
      {
        "t": "p",
        "x": "Der Service ist für Staatsbürger oder Einwohner folgender Länder nicht verfügbar: Afghanistan, Belarus, Kuba, Gazastreifen, Iran, Libyen, Myanmar, Russland, Südsudan, Nordkorea, Syrien, Venezuela sowie der Regionen Krim, Donezk, Luhansk, Cherson, Saporischschja und Sewastopol. Die vorsätzliche Nutzung von VPN oder Anonymisierungstools zur Umgehung regionaler Beschränkungen ist strengstens untersagt."
      }
    ]
  },
  "it": {
    "changeLanguage": "Cambia lingua",
    "toggleTheme": "Cambia tema",
    "themeAria": "Passa al tema chiaro/scuro",
    "toDark": "Passa alla modalità scura",
    "toLight": "Passa alla modalità chiara",
    "toggleMenu": "Apri/chiudi il menu di navigazione",
    "legal": "Note legali",
    "payment": "Metodi di pagamento",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / ANTEPRIMA",
    "programInfo": "Informazioni sul programma",
    "extra": [
      {
        "t": "h4",
        "x": "Informazioni aziendali e ambito del servizio"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E sviluppa il marchio ERACEX e presenta i suoi programmi di valutazione del trading. Indirizzo agli atti: C1 Building, Ajman Free Zone, Ajman, Emirati Arabi Uniti · B.C. 1309328. I programmi sono forniti e gestiti insieme a partner tecnologici in base ai termini applicabili. L'idoneità dipende da paese, territorio e verifica."
      },
      {
        "t": "h4",
        "x": "Giurisdizioni soggette a restrizioni"
      },
      {
        "t": "p",
        "x": "Il servizio non è disponibile per cittadini o residenti di: Afghanistan, Bielorussia, Cuba, Striscia di Gaza, Iran, Libia, Myanmar, Russia, Sudan del Sud, Corea del Nord, Siria, Venezuela e delle regioni di Crimea, Donetsk, Luhansk, Kherson, Zaporizhzhia e Sebastopoli. L'uso deliberato di VPN o strumenti di anonimizzazione per aggirare le restrizioni regionali è severamente vietato."
      }
    ]
  },
  "pl": {
    "changeLanguage": "Zmień język",
    "toggleTheme": "Przełącz motyw",
    "themeAria": "Przełącz motyw jasny/ciemny",
    "toDark": "Przełącz na tryb ciemny",
    "toLight": "Przełącz na tryb jasny",
    "toggleMenu": "Przełącz menu nawigacji",
    "legal": "Informacje prawne",
    "payment": "Metody płatności",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / PODGLĄD",
    "programInfo": "Informacje o programie",
    "extra": [
      {
        "t": "h4",
        "x": "Informacje o firmie i zakres usług"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E rozwija markę ERACEX i prezentuje swoje programy oceny tradingu. Adres w rejestrze: C1 Building, Ajman Free Zone, Ajman, Zjednoczone Emiraty Arabskie · B.C. 1309328. Programy są udostępniane i prowadzone wspólnie z partnerami technologicznymi zgodnie z obowiązującymi warunkami. Kwalifikowalność zależy od kraju, terytorium i weryfikacji."
      },
      {
        "t": "h4",
        "x": "Jurysdykcje objęte ograniczeniami"
      },
      {
        "t": "p",
        "x": "Usługa nie jest dostępna dla obywateli ani rezydentów: Afganistanu, Białorusi, Kuby, Strefy Gazy, Iranu, Libii, Mjanmy, Rosji, Sudanu Południowego, Korei Północnej, Syrii, Wenezueli oraz regionów Krymu, Doniecka, Ługańska, Chersonia, Zaporoża i Sewastopola. Celowe używanie VPN lub narzędzi anonimizujących w celu obejścia ograniczeń regionalnych jest surowo zabronione."
      }
    ]
  },
  "tr": {
    "changeLanguage": "Dili Değiştir",
    "toggleTheme": "Temayı değiştir",
    "themeAria": "Açık/koyu temayı değiştir",
    "toDark": "Koyu Moda Geç",
    "toLight": "Açık Moda Geç",
    "toggleMenu": "Gezinme menüsünü aç/kapat",
    "legal": "Yasal uyarılar",
    "payment": "Ödeme yöntemleri",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / ÖNİZLEME",
    "programInfo": "Program Bilgileri",
    "extra": [
      {
        "t": "h4",
        "x": "İş bilgileri ve hizmet kapsamı"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E, ERACEX markasını geliştirir ve trading değerlendirme programlarını sunar. Kayıtlı adres: C1 Building, Ajman Free Zone, Ajman, Birleşik Arap Emirlikleri · B.C. 1309328. Programlar, geçerli koşullar çerçevesinde teknoloji ortaklarıyla birlikte sağlanır ve işletilir. Uygunluk; ülkeye, bölgeye ve doğrulamaya bağlıdır."
      },
      {
        "t": "h4",
        "x": "Kısıtlı Yargı Bölgeleri"
      },
      {
        "t": "p",
        "x": "Hizmet şu ülkelerin vatandaşlarına veya mukimlerine sunulmamaktadır: Afganistan, Belarus, Küba, Gazze Şeridi, İran, Libya, Myanmar, Rusya, Güney Sudan, Kuzey Kore, Suriye, Venezuela ile Kırım, Donetsk, Luhansk, Herson, Zaporijya ve Sivastopol bölgeleri. Bölgesel kısıtlamaları aşmak için kasıtlı olarak VPN veya anonimleştirme araçları kullanmak kesinlikle yasaktır."
      }
    ]
  },
  "th": {
    "changeLanguage": "เปลี่ยนภาษา",
    "toggleTheme": "สลับธีม",
    "themeAria": "สลับธีมสว่าง/มืด",
    "toDark": "เปลี่ยนเป็นโหมดมืด",
    "toLight": "เปลี่ยนเป็นโหมดสว่าง",
    "toggleMenu": "สลับเมนูนำทาง",
    "legal": "ข้อจำกัดความรับผิดทางกฎหมาย",
    "payment": "วิธีการชำระเงิน",
    "brand": "ERACEX บริษัทเทรดด้วยเงินทุนของบริษัท",
    "preview": "ERACEX / ตัวอย่าง",
    "programInfo": "ข้อมูลโปรแกรม",
    "extra": [
      {
        "t": "h4",
        "x": "ข้อมูลธุรกิจและขอบเขตการให้บริการ"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E พัฒนาแบรนด์ ERACEX และนำเสนอโปรแกรมประเมินการเทรด ที่อยู่ตามบันทึก: C1 Building, Ajman Free Zone, Ajman, สหรัฐอาหรับเอมิเรตส์ · B.C. 1309328 โปรแกรมให้บริการและดำเนินการร่วมกับพันธมิตรด้านเทคโนโลยีภายใต้ข้อกำหนดที่เกี่ยวข้อง คุณสมบัติในการเข้าร่วมขึ้นอยู่กับประเทศ ดินแดน และการยืนยันตัวตน"
      },
      {
        "t": "h4",
        "x": "เขตอำนาจที่ถูกจำกัด"
      },
      {
        "t": "p",
        "x": "ไม่ให้บริการแก่พลเมืองหรือผู้พำนักใน: อัฟกานิสถาน เบลารุส คิวบา ฉนวนกาซา อิหร่าน ลิเบีย เมียนมา รัสเซีย ซูดานใต้ เกาหลีเหนือ ซีเรีย เวเนซุเอลา และภูมิภาคไครเมีย โดเนตสก์ ลูฮันสก์ เคอร์ซอน ซาปอริซเซีย และเซวาสโทโพล ห้ามใช้ VPN หรือเครื่องมืออำพรางตัวตนโดยเจตนาเพื่อหลีกเลี่ยงข้อจำกัดตามภูมิภาคโดยเด็ดขาด"
      }
    ]
  },
  "fil": {
    "changeLanguage": "Palitan ang Wika",
    "toggleTheme": "I-toggle ang tema",
    "themeAria": "I-toggle ang light/dark na tema",
    "toDark": "Lumipat sa Dark Mode",
    "toLight": "Lumipat sa Light Mode",
    "toggleMenu": "I-toggle ang navigation menu",
    "legal": "Mga legal na paunawa",
    "payment": "Mga paraan ng pagbabayad",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / PREVIEW",
    "programInfo": "Impormasyon ng Programa",
    "extra": [
      {
        "t": "h4",
        "x": "Impormasyon ng negosyo at saklaw ng serbisyo"
      },
      {
        "t": "p",
        "x": "Ang ERACEX F.Z.E ang bumubuo ng brand na ERACEX at nagpapakita ng mga trading evaluation program nito. Nakatalang address: C1 Building, Ajman Free Zone, Ajman, Nagkakaisang Arab Emirates · B.C. 1309328. Ang mga programa ay ibinibigay at pinapatakbo kasama ng mga kasosyo sa teknolohiya alinsunod sa mga naaangkop na tuntunin. Ang pagiging kwalipikado ay nakadepende sa bansa, teritoryo at beripikasyon."
      },
      {
        "t": "h4",
        "x": "Mga Pinaghihigpitang Hurisdiksyon"
      },
      {
        "t": "p",
        "x": "Hindi available ang serbisyo sa mga mamamayan o residente ng: Afghanistan, Belarus, Cuba, Gaza Strip, Iran, Libya, Myanmar, Russia, Timog Sudan, Hilagang Korea, Syria, Venezuela, at ng mga rehiyon ng Crimea, Donetsk, Luhansk, Kherson, Zaporizhzhia at Sevastopol. Mahigpit na ipinagbabawal ang sadyang paggamit ng VPN o mga anonymizing tool upang lusutan ang mga paghihigpit sa rehiyon."
      }
    ]
  },
  "ja": {
    "changeLanguage": "言語を変更",
    "toggleTheme": "テーマを切り替え",
    "themeAria": "ライト/ダークテーマを切り替え",
    "toDark": "ダークモードに切り替え",
    "toLight": "ライトモードに切り替え",
    "toggleMenu": "ナビゲーションメニューを切り替え",
    "legal": "免責事項",
    "payment": "お支払い方法",
    "brand": "ERACEX プロップトレーディング会社",
    "preview": "ERACEX / プレビュー",
    "programInfo": "プログラム情報",
    "extra": [
      {
        "t": "h4",
        "x": "事業情報とサービスの範囲"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.Eは、ERACEXブランドを開発し、トレーディング評価プログラムを提供しています。登録住所:C1 Building, Ajman Free Zone, Ajman, アラブ首長国連邦 · B.C. 1309328。プログラムは、適用される規約に基づき、テクノロジーパートナーとともに提供・運営されています。ご利用資格は、国・地域および本人確認の状況によって異なります。"
      },
      {
        "t": "h4",
        "x": "制限対象の国・地域"
      },
      {
        "t": "p",
        "x": "本サービスは、以下の国・地域の国民または居住者の方はご利用いただけません:アフガニスタン、ベラルーシ、キューバ、ガザ地区、イラン、リビア、ミャンマー、ロシア、南スーダン、北朝鮮、シリア、ベネズエラ、ならびにクリミア、ドネツク、ルハンスク、ヘルソン、ザポリージャ、セヴァストポリの各地域。地域制限を回避する目的でVPNや匿名化ツールを意図的に使用することは固く禁じられています。"
      }
    ]
  },
  "zh": {
    "changeLanguage": "切换语言",
    "toggleTheme": "切换主题",
    "themeAria": "切换浅色/深色主题",
    "toDark": "切换到深色模式",
    "toLight": "切换到浅色模式",
    "toggleMenu": "切换导航菜单",
    "legal": "法律声明",
    "payment": "支付方式",
    "brand": "ERACEX 自营交易公司",
    "preview": "ERACEX / 预览",
    "programInfo": "项目信息",
    "extra": [
      {
        "t": "h4",
        "x": "业务信息与服务范围"
      },
      {
        "t": "p",
        "x": "ERACEX F.Z.E 开发 ERACEX 品牌并展示其交易评估项目。登记地址:C1 Building, Ajman Free Zone, Ajman, 阿拉伯联合酋长国 · B.C. 1309328。各项目依据适用条款,与技术合作伙伴共同提供和运营。参与资格取决于国家、地区及验证情况。"
      },
      {
        "t": "h4",
        "x": "受限制的司法管辖区"
      },
      {
        "t": "p",
        "x": "本服务不向以下国家或地区的公民或居民提供:阿富汗、白俄罗斯、古巴、加沙地带、伊朗、利比亚、缅甸、俄罗斯、南苏丹、朝鲜、叙利亚、委内瑞拉,以及克里米亚、顿涅茨克、卢甘斯克、赫尔松、扎波罗热和塞瓦斯托波尔地区。严禁故意使用 VPN 或匿名化工具绕过地区限制。"
      }
    ]
  },
  "vi": {
    "changeLanguage": "Đổi ngôn ngữ",
    "toggleTheme": "Chuyển đổi giao diện",
    "themeAria": "Chuyển đổi giao diện sáng tối",
    "toDark": "Chuyển sang Chế độ Tối",
    "toLight": "Chuyển sang Chế độ Sáng",
    "toggleMenu": "Mở hoặc đóng menu điều hướng",
    "legal": "Tuyên bố miễn trừ pháp lý",
    "payment": "Phương thức thanh toán",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / BẢN XEM TRƯỚC",
    "programInfo": "Thông Tin Chương Trình"
  },
  "en": {
    "changeLanguage": "Change Language",
    "toggleTheme": "Toggle theme",
    "themeAria": "Toggle light/dark theme",
    "toDark": "Switch to Dark Mode",
    "toLight": "Switch to Light Mode",
    "toggleMenu": "Toggle navigation menu",
    "legal": "Legal disclaimers",
    "payment": "Payment methods",
    "brand": "ERACEX Proprietary Trading Firm",
    "preview": "ERACEX / PREVIEW",
    "programInfo": "Program Information"
  }
};

export function getUiStr(lang: string): UiStr {
  return UI_STR[lang] || UI_STR.en;
}
