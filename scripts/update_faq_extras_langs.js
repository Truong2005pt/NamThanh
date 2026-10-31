const fs = require('fs');

const reviewsComplaintsDict = {
  zh: {
    complaintsTag: '公开透明',
    complaintsTitle: '直面常见质疑，开诚布公回应',
    complaints: [
      ['“我触碰了回撤线，支付的所有报名费都没了”', '每日亏损限额与最大总亏损在购买前已在规则页公开披露。考核通过后首笔出金全额退费。'],
      ['“最高 95% 分成比例需要额外条件吗？”', '分成从 80% 起步随阶段阶梯升至 95%，具体条件载明于规则页的资金扩张计划。'],
      ['“自营考核难度比我想象的高”', '每款方案均明确标注目标与风控限额，且无最少交易天数及时间限制，您完全可以稳健应对。'],
      ['“咨询高峰期客服响应稍慢”', '技术支持 24/7 全天候在线。如遇不满意体验，可通过投诉通道提交正式工单。'],
    ],
    faqTitle: '关于评价的常见疑问',
    faq: [
      ['ERACEX 具备良好信誉吗？', '您可通过第三方独立评价平台、已注资交易员视频专访及链上凭证进行验证。'],
      ['ERACEX 真的会按时出金吗？', '是的。出金证书与真实转账凭据已全数公示在证书专区与透明度页面。'],
      ['利润出金需要多久到账？', '平均出金处理时间为 3.4 小时以内。'],
      ['在哪里可以查看第三方独立评价？', '在 Trustpilot 等国际知名公开评价平台，我们不干预也无法篡改平台评价。'],
    ],
  },
  ja: {
    complaintsTag: '透明性への誓い',
    complaintsTitle: 'よくある苦情や疑問に正面から回答',
    complaints: [
      ['「ドローダウンに抵触して受験料を失った」', '日次損失および最大損失の限度額は購入前に規則ページに明記されています。初回出金時には100%全額返金されます。'],
      ['「最高95%の利益配分には追加条件がある？」', '配分率は80%から始まり、一貫した成績に応じて段階的に95%まで引き上げられます。'],
      ['「評価試験が想像より難しかった」', '全プランで目標利益と損失限度が明示されており、日数制限なしでご自身のペースで取引できます。'],
      ['「混雑時にサポートの返信に時間がかかった」', 'サポートは24時間体制です。万が一対応に不満がある場合は苦情申し立て方針に基づき工单を発行できます。'],
    ],
    faqTitle: 'レビュー・実績に関するFAQ',
    faq: [
      ['ERACEX は信頼できますか？', '独立レビューサイトや資金提供を受けたトレーダーのインタビュー、オンチェーン出金履歴で検証可能です。'],
      ['本当に出金されますか？', 'はい。認定証および出金実績は証明書セクションおよび透明性ページにて公開しています。'],
      ['出金にはどのくらい時間がかかりますか？', '平均出金時間は3.4時間以内です。'],
      ['第三者の評価はどこで読めますか？', 'Trustpilotなどの独立した外部レビューサイトでご確認いただけます。'],
    ],
  },
  es: {
    complaintsTag: 'TRANSPARENCIA',
    complaintsTitle: 'Quejas Habituales, Respuestas Directas',
    complaints: [
      ['“Incumplí el drawdown y perdí todo lo pagado”', 'Los límites diarios y máximos se publican con total claridad antes de comprar. La tarifa es 100% reembolsable en tu primer retiro.'],
      ['“El 95% de profit split requiere condiciones extra”', 'El reparto asciende del 80% al 95% según el Plan de Escalado público en la página de Reglas.'],
      ['“El desafío es más exigente de lo esperado”', 'Los objetivos y límites de riesgo están detallados. Además, no hay límite de tiempo para operar con calma.'],
      ['“El soporte tardó en responder en hora pico”', 'El soporte opera 24/7. Si no estás satisfecho, puedes enviar una queja bajo la Política de Quejas.'],
    ],
    faqTitle: 'Preguntas Frecuentes sobre Reseñas',
    faq: [
      ['¿Es ERACEX de confianza?', 'Puedes verificarlo a través de reseñas en Trustpilot, entrevistas a traders y pruebas on-chain.'],
      ['¿Paga ERACEX de verdad?', 'Sí. Todos los certificados y pruebas de pago se publican en el Muro de Pruebas.'],
      ['¿Cuánto tarda un payout?', 'El tiempo medio de procesamiento de pagos es de menos de 3.4 horas.'],
      ['¿Dónde puedo leer opiniones imparciales?', 'En plataformas de reseñas de terceros como Trustpilot.'],
    ],
  },
  pt: {
    complaintsTag: 'TRANSPARÊNCIA',
    complaintsTitle: 'Dúvidas e Reclamações Comuns, Respostas Diretas',
    complaints: [
      ['“Atingi o drawdown e perdi o valor pago”', 'Os limites de perda diária e total são informados claramente antes da compra. A taxa é 100% reembolsável no seu primeiro saque.'],
      ['“A divisão de 95% exige condições adicionais”', 'A divisão sobe de 80% para 95% conforme o Plano de Escala público na página de Regras.'],
      ['“O teste foi mais difícil do que pensei”', 'Metas e limites são transparentes, e você tem tempo ilimitado para operar no seu ritmo.'],
      ['“O suporte demorou no horário de pico”', 'O atendimento funciona 24/7. Caso insatisfeito, abra um chamado pela Política de Reclamações.'],
    ],
    faqTitle: 'Perguntas sobre Avaliações',
    faq: [
      ['A ERACEX é confiável?', 'Confira avaliações no Trustpilot, entrevistas em vídeo e provas de saques on-chain.'],
      ['A ERACEX paga mesmo?', 'Sim. Certificados e comprovantes estão publicados na seção de Certificados.'],
      ['Quanto tempo demora o saque?', 'O tempo médio de processamento é de 3.4 horas.'],
      ['Onde leio avaliações independentes?', 'Em plataformas de terceiros como o Trustpilot.'],
    ],
  },
  fr: {
    complaintsTag: 'TRANSPARENCE',
    complaintsTitle: 'Réclamations Courantes, Réponses Directes',
    complaints: [
      ['“J’ai dépassé le drawdown et perdu mes frais”', 'Les limites journalières et totales sont publiées avant l’achat. Les frais sont remboursés à 100% au premier retrait.'],
      ['“Le split de 95% requiert des paliers”', 'Le partage augmente de 80% à 95% selon le plan de progression consultable sur la page Règles.'],
      ['“L’évaluation est plus difficile que prévu”', 'Les règles sont claires et il n’y a aucune contrainte de temps pour valider le test.'],
      ['“Le support a mis du temps à répondre”', 'Le support technique est ouvert 24/7. Une réclamation formelle peut être déposée via notre politique dédiée.'],
    ],
    faqTitle: 'FAQ Avis & Retraits',
    faq: [
      ['ERACEX est-elle fiable ?', 'Vérifiez par vous-même via les avis Trustpilot, les interviews vidéo et les preuves blockchain.'],
      ['Les paiements sont-ils réels ?', 'Oui. Tous les certificats et relevés de paiement sont accessibles publiquement.'],
      ['Quel est le délai de paiement ?', 'Le délai moyen de traitement est inférieur à 3,4 heures.'],
      ['Où lire des avis indépendants ?', 'Sur des plateformes tierces comme Trustpilot.'],
    ],
  },
  de: {
    complaintsTag: 'TRANSPARENZ',
    complaintsTitle: 'Häufige Kritikpunkte, Direkt Beantwortet',
    complaints: [
      ['„Ich habe den Drawdown verletzt und Gebühren verloren“', 'Tages- und Maximalverluste sind vorab klar definiert. Bei der ersten Auszahlung werden 100% erstattet.'],
      ['„Für 95% Profit Split braucht es Zusatzkriterien“', 'Der Split steigt von 80% auf 95% gemäß dem Skalierungsplan auf der Regelseite.'],
      ['„Die Challenge war anspruchsvoller als gedacht“', 'Ziele und Risikolimits sind exakt beziffert, und es gibt kein Zeitlimit für den Handel.'],
      ['„Der Support war zu Stoßzeiten verzögert“', 'Unser Support ist 24/7 erreichbar. Bei Unzufriedenheit steht Ihnen unsere Beschwerdestelle zur Seite.'],
    ],
    faqTitle: 'FAQ zu Bewertungen & Auszahlungen',
    faq: [
      ['Ist ERACEX seriös?', 'Überprüfbar durch unabhängige Bewertungen, Trader-Interviews und On-Chain-Auszahlungsbelege.'],
      ['Zahlt ERACEX wirklich aus?', 'Ja. Zertifikate und Nachweise sind öffentlich im 証明-Bereich einsehbar.'],
      ['Wie lange dauert eine Auszahlung?', 'Die durchschnittliche Auszahlungsdauer liegt bei unter 3,4 Stunden.'],
      ['Wo finde ich unabhängige Rezensionen?', 'Auf unabhängigen Bewertungsportalen wie Trustpilot.'],
    ],
  },
  it: {
    complaintsTag: 'TRASPARENZA',
    complaintsTitle: 'Reclami Comuni, Risposte Chiare',
    complaints: [
      ['“Ho superato il drawdown e perso la tariffa”', 'I limiti sono pubblicati prima dell’acquisto. La tariffa è rimborsata al 100% al primo prelievo.'],
      ['“Il profit split al 95% ha condizioni extra”', 'La quota cresce dall’80% al 95% secondo il Piano di Scaling nelle Regole.'],
      ['“La valutazione è più impegnativa del previsto”', 'Obiettivi e limiti sono chiari, e non c’è alcun limite temporale imposto.'],
      ['“Il supporto è stato lento nei momenti di picco”', 'L’assistenza è attiva 24/7 con apposito canale per la gestione dei reclami.'],
    ],
    faqTitle: 'FAQ su Recensioni e Prelievi',
    faq: [
      ['ERACEX è affidabile?', 'Verificalo attraverso Trustpilot, le interviste ai trader e le transazioni on-chain.'],
      ['ERACEX paga davvero?', 'Sì. Certificati e prove di pagamento sono pubblicati online.'],
      ['Quanto tempo richiede un payout?', 'Il tempo medio di evasione è inferiore a 3.4 ore.'],
      ['Dove trovo recensioni autentiche?', 'Su piattaforme terze come Trustpilot.'],
    ],
  },
  pl: {
    complaintsTag: 'PRZEJRZYSTOŚĆ',
    complaintsTitle: 'Częste Zastrzeżenia, Proste Odpowiedzi',
    complaints: [
      ['„Naruszyłem drawdown i straciłem wpłatę”', 'Limity są jasno opisane przed zakupem. Opłata egzaminacyjna jest zwracana w 100% przy pierwszej wypłacie.'],
      ['„Podział 95% wymaga dodatkowych warunków”', 'Udział rośnie z 80% do 95% w ramach Planu Skalowania na stronie Zasad.'],
      ['„Egzamin okazał się trudniejszy niż myślałem”', 'Wszystkie parametry są precyzyjnie określone, a brak limitu czasu pozwala handlować spokojnie.'],
      ['„Wsparcie odpisało wolniej w godzinach szczytu”', 'Działamy 24/7 i udostępniamy oficjalną ścieżkę reklamacji w razie uwag.'],
    ],
    faqTitle: 'FAQ dotyczące Ocen i Wypłat',
    faq: [
      ['Czy ERACEX jest rzetelny?', 'Możesz to zweryfikować przez Trustpilot, wywiady z traderami i dowody on-chain.'],
      ['Czy ERACEX naprawdę wypłaca?', 'Tak. Wszystkie certyfikaty wypłat publikujemy w sekcji dowodów.'],
      ['Ile trwa wypłata środków?', 'Średni czas realizacji wypłaty wynosi poniżej 3.4 godziny.'],
      ['Gdzie przeczytam niezależne opinie?', 'Na zewnętrznych portalach z opiniami, m.in. Trustpilot.'],
    ],
  },
  tr: {
    complaintsTag: 'ŞEFFAFLIK',
    complaintsTitle: 'Sık Karşılaşılan Şikayetler ve Doğrudan Yanıtlar',
    complaints: [
      ['“Kayıp limitini aştım ve ödediğim ücret yandı”', 'Günlük ve maksimum kayıp limitleri satın alma öncesinde açıkça belirtilir. İlk kâr çekiminde %100 iade edilir.'],
      ['“%95 kâr payı için ek şartlar mı var?”', 'Kâr payı %80’den başlar ve Kural sayfasındaki Ölçeklendirme Planı uyarınca %95’e kadar çıkar.'],
      ['“Sınav beklediğimden daha zorlayıcıydı”', 'Tüm hedefler şeffaftır ve zaman kısıtlaması olmadan kendi hızınızda işlem yapabilirsiniz.'],
      ['“Yoğun saatlerde destek ekibi geç yanıt verdi”', '7/24 destek hizmeti sunuyoruz. Memnun kalınmayan durumlarda Şikayet Politikamız üzerinden başvurabilirsiniz.'],
    ],
    faqTitle: 'Değerlendirmeler Hakkında SSS',
    faq: [
      ['ERACEX güvenilir mi?', 'Trustpilot yorumları, video röportajlar ve on-chain transfer kanıtlarıyla doğrulayabilirsiniz.'],
      ['ERACEX gerçekten ödeme yapıyor mu?', 'Evet. Tüm sertifikalar ve ödeme belgeleri şeffafça yayınlanmaktadır.'],
      ['Ödemeler ne kadar sürer?', 'Ortalama ödeme tamamlama süresi 3.4 saatin altındadır.'],
      ['Bağımsız yorumları nereden okuyabilirim?', 'Trustpilot gibi bağımsız üçüncü taraf değerlendirme platformlarında.'],
    ],
  },
  id: {
    complaintsTag: 'TRANSPARANSI',
    complaintsTitle: 'Keluhan Umum, Dijawab Secara Terbuka',
    complaints: [
      ['“Saya melanggar drawdown dan kehilangan biaya ujian”', 'Batas rugi harian dan total dicantumkan jelas sebelum membeli. Biaya ujian dikembalikan 100% pada penarikan pertama.'],
      ['“Bagi hasil 95% memerlukan syarat tambahan”', 'Bagi hasil meningkat bertahap dari 80% ke 95% sesuai Rencana Skaling di halaman Aturan.'],
      ['“Evaluasi lebih menantang dari yang diperkirakan”', 'Target dan batas risiko terukur jelas, dan tidak ada batasan waktu agar Anda bisa trading dengan sabar.'],
      ['“Dukungan lambat membalas saat jam sibuk”', 'Dukungan siap 24/7 dan kami menyediakan jalur pengaduan resmi jika Anda memiliki masukan.'],
    ],
    faqTitle: 'FAQ Seputar Ulasan & Payout',
    faq: [
      ['Apakah ERACEX kredibel dan tepercaya?', 'Anda dapat memverifikasinya melalui ulasan Trustpilot, wawancara trader, dan bukti on-chain.'],
      ['Apakah ERACEX benar-benar mencairkan profit?', 'Ya. Sertifikat dan bukti transfer resmi dipublikasikan di halaman bukti penarikan.'],
      ['Berapa lama proses pencairan payout?', 'Rata-rata waktu pemrosesan payout adalah di bawah 3.4 jam.'],
      ['Di mana saya bisa membaca ulasan independen?', 'Di platform ulasan independen pihak ketiga seperti Trustpilot.'],
    ],
  },
  th: {
    complaintsTag: 'ความโปร่งใส',
    complaintsTitle: 'ตอบตรงทุกข้อสงสัยและข้อร้องเรียนที่พบบ่อย',
    complaints: [
      ['“ฉันละเมิด Drawdown และเสียค่าสมัครทั้งหมด”', 'กฎการขาดทุนรายวันและยอดรวมระบุไว้อย่างชัดเจนก่อนซื้อ และจะได้รับเงินคืน 100% ในการถอนกำไรครั้งแรก'],
      ['“ส่วนแบ่งกำไร 95% มีเงื่อนไขเพิ่มเติมหรือไม่”', 'ส่วนแบ่งกำไรจะปรับขึ้นจาก 80% ถึง 95% ตามแผนการขยายทุนในหน้าระเบียบการ'],
      ['“การสอบท้าทายกว่าที่คิดไว้”', 'เป้าหมายและลิมิตความเสี่ยงระบุชัดเจน และไม่มีการจำกัดเวลาเพื่อให้คุณเทรดได้อย่างรอบคอบ'],
      ['“ฝ่ายสนับสนุนตอบช้าในช่วงเวลาที่มีผู้ใช้งานหนาแน่น”', 'เราให้บริการ 24/7 หากไม่ได้รับความสะดวกสามารถส่งเรื่องผ่านนโยบายการจัดการข้อร้องเรียนได้'],
    ],
    faqTitle: 'คำถามที่พบบ่อยเกี่ยวกับรีวิว',
    faq: [
      ['ERACEX น่าเชื่อถือหรือไม่?', 'ตรวจสอบได้จากรีวิวอิสระบน Trustpilot บทสัมภาษณ์เทรดเดอร์ และประวัติการโอนบนบล็อกเชน'],
      ['ERACEX จ่ายเงินจริงหรือไม่?', 'จ่ายจริง ใบรับรองและหลักฐานการจ่ายเงินทั้งหมดได้รับการเปิดเผยบนเว็บไซต์อย่างโปร่งใส'],
      ['การถอนเงินใช้เวลานานเท่าใด?', 'เวลาเฉลี่ยในการจ่ายเงินสำเร็จอยู่ที่ต่ำกว่า 3.4 ชั่วโมง'],
      ['สามารถอ่านรีวิวอิสระได้ที่ไหน?', 'บนแพลตฟอร์มรีวิวบุคคลที่สาม เช่น Trustpilot'],
    ],
  },
  fil: {
    complaintsTag: 'TRANSPARENCY',
    complaintsTitle: 'Mga Karaniwang Reklamo, Direktang Sinasagot',
    complaints: [
      ['“Lumagpas ako sa drawdown at nawala ang aking binayaran”', 'Nakalathala ang mga limitasyon bago bumili. Ang fee ay 100% refundable sa unang payout mo.'],
      ['“Kailangan ba ng dagdag na kondisyon para sa 95% profit split?”', 'Tumaas ang split mula 80% hanggang 95% alinsunod sa Scaling Plan sa Rules page.'],
      ['“Mas mahirap ang evaluation kaysa sa inaasahan ko”', 'Malinaw ang mga target at walang time limit para makapag-trade ka nang payapa.'],
      ['“Matagal sumagot ang customer support noong rush hour”', 'Bukas ang suporta 24/7 at may pormal na proseso ng reklamo kapag kailangan.'],
    ],
    faqTitle: 'Mga FAQ Tungkol sa Reviews',
    faq: [
      ['Mapagkakatiwalaan ba ang ERACEX?', 'Mabe-verify mo ito sa pamamagitan ng reviews sa Trustpilot, trader interviews, at on-chain proofs.'],
      ['Nagbabayad ba talaga ang ERACEX?', 'Oo. Ang mga payout certificates ay bukas na nakapaskil sa aming Wall of Proof.'],
      ['Gaano kabilis ang payout?', 'Karaniwang napoproseso ang payout sa loob ng 3.4 oras.'],
      ['Saan ako makakabasa ng independiyenteng reviews?', 'Sa mga third-party review platforms tulad ng Trustpilot.'],
    ],
  },
  hi: {
    complaintsTag: 'पारदर्शिता',
    complaintsTitle: 'सामान्य शिकायतें और सीधे उत्तर',
    complaints: [
      ['“मैंने ड्रॉडाउन का उल्लंघन किया और अपनी फीस खो दी”', 'खरीदने से पहले दैनिक और अधिकतम नुकसान सीमाएं स्पष्ट रूप से प्रकाशित होती हैं। पहली निकासी पर 100% फीस वापस मिलती है।'],
      ['“क्या 95% लाभ विभाजन के लिए अतिरिक्त शर्तें हैं?”', 'विभाजन 80% से बढ़कर 95% तक नियमों के स्केलिंग प्लान के अनुसार बढ़ता है।'],
      ['“मूल्यांकन मेरी अपेक्षा से अधिक चुनौतीपूर्ण था”', 'लक्ष्य और सीमाएं स्पष्ट हैं, और कोई समय सीमा नहीं है ताकि आप धैर्यपूर्वक ट्रेड कर सकें।'],
      ['“व्यस्त समय में सहायता टीम ने देर से उत्तर दिया”', 'सहायता 24/7 उपलब्ध है और यदि आप संतुष्ट नहीं हैं तो शिकायत नीति के तहत आवेदन कर सकते हैं।'],
    ],
    faqTitle: 'समीक्षाओं के संबंध में अक्सर पूछे जाने वाले प्रश्न',
    faq: [
      ['क्या ERACEX विश्वसनीय है?', 'आप Trustpilot पर स्वतंत्र समीक्षाओं, वीडियो साक्षात्कारों और ऑन-चेन साक्ष्यों से पुष्टि कर सकते हैं।'],
      ['क्या ERACEX वास्तव में भुगतान करता है?', 'हाँ। सभी प्रमाणपत्र और भुगतान प्रमाण प्रमाणपत्र अनुभाग में प्रकाशित हैं।'],
      ['पेआउट में कितना समय लगता है?', 'औसत भुगतान प्रसंस्करण समय 3.4 घंटे से कम है।'],
      ['मैं स्वतंत्र समीक्षाएं कहां पढ़ सकता हूं?', 'Trustpilot जैसे तृतीय-पक्ष समीक्षा मंचों पर।'],
    ],
  },
  ko: {
    complaintsTag: '완전한 투명성',
    complaintsTitle: '자주 제기되는 불만과 솔직한 답변',
    complaints: [
      ['“드로우다운을 위반하여 지불한 응시료를 모두 잃었습니다”', '일일 및 최대 손실 한도는 결제 전 규정 페이지에 명확히 고지되어 있습니다. 챌린지 합격 후 첫 출금 시 100% 전액 환불됩니다.'],
      ['“최고 95% 수익 분배를 받으려면 까다로운 조건이 있나요?”', '수익 분배는 80%에서 시작하여 규정 페이지의 스케일링 플랜에 따라 단계적으로 95%까지 상승합니다.'],
      ['“평가 시험이 생각보다 까다롭습니다”', '모든 패키지의 목표 수익과 손실 한도는 투명하게 공개되며, 시간제한이 없으므로 본인의 호흡에 맞춰 안정적으로 매매할 수 있습니다.'],
      ['“이용자가 몰리는 시간대에 고객센터 응답이 지연되었습니다”', '기술 지원팀은 24/7 연중무휴로 운영됩니다. 미흡한 부분이 있을 경우 불만 처리 방침을 통해 공식 조치를 요청하실 수 있습니다.'],
    ],
    faqTitle: '평가 및 출금 관련 자주 묻는 질문',
    faq: [
      ['ERACEX는 믿을 수 있는 프랍 회사인가요?', 'Trustpilot 독립 평가, 실제 합격자 인터뷰 및 온체인 출금 기록을 통해 누구나 직접 검증하실 수 있습니다.'],
      ['실제로 수익 출금이 정상 지급되나요?', '네, 모든 출금 인증서와 블록체인 이체 내역은 출금 증명관 및 투명성 페이지에 투명하게 공개되어 있습니다.'],
      ['출금 처리까지 시간이 얼마나 걸리나요?', '평균 출금 소요 시간은 3.4시간 미만입니다.'],
      ['독립적인 실제 후기는 어디서 볼 수 있나요?', 'Trustpilot 등 기업이 임의로 조작할 수 없는 제3자 리뷰 플랫폼에서 확인 가능합니다.'],
    ],
  },
  ru: {
    complaintsTag: 'ПРОЗРАЧНОСТЬ',
    complaintsTitle: 'Частые претензии и честные ответы',
    complaints: [
      ['«Я нарушил drawdown и потерял вступительный взнос»', 'Дневной и максимальный лимиты опубликованы до покупки. Взнос возвращается на 100% при первой выплате.'],
      ['«Для 95% доли прибыли нужны дополнительные условия»', 'Доля растет от 80% до 95% в соответствии с планом масштабирования в Правилах.'],
      ['«Оценка оказалась сложнее, чем я думал»', 'Цели и лимиты четко зафиксированы, а отсутствие ограничения по времени позволяет торговать спокойно.'],
      ['«В пиковые часы служба поддержки отвечала медленно»', 'Поддержка работает 24/7. В случае претензий доступна официальная форма рассмотрения жалоб.'],
    ],
    faqTitle: 'Вопросы об отзывах и выплатах',
    faq: [
      ['Надежна ли компания ERACEX?', 'Вы можете убедиться в этом по отзывам на Trustpilot, интервью с трейдерами и блокчейн-выпискам.'],
      ['Выплачивает ли ERACEX деньги?', 'Да. Все сертификаты и подтверждения выплат открыто опубликованы на сайте.'],
      ['Сколько времени занимает выплата?', 'Среднее время обработки выплаты составляет менее 3.4 часов.'],
      ['Где прочитать независимые отзывы?', 'На независимых платформах отзывов, таких как Trustpilot.'],
    ],
  },
  ar: {
    complaintsTag: 'الشفافية الكاملة',
    complaintsTitle: 'الشكاوى الشائعة، والرد المباشر عليها',
    complaints: [
      ['“تجاوزت حد التراجع وخسرت رسوم الاشتراك”', 'حدود الخسارة اليومية والكلية معلنة بوضوح قبل الشراء. وتسترد الرسوم بنسبة 100% عند أول سحب للأرباح.'],
      ['“هل تتطلب نسبة الـ 95% شروطاً إضافية؟”', 'ترتفع نسبة المشاركة من 80% إلى 95% تدريجياً وفق خطة التدرج المعلنة في صفحة القواعد.'],
      ['“كان التقييم أصعب مما توقعت”', 'أهداف الربح وحدود المخاطر واضحة ومحددة، ولا توجد أي قيود زمنية لتتمكن من التداول بهدوء.'],
      ['“تأخر دعم العملاء في الرد وقت الذروة”', 'يعمل الدعم الفني على مدار 24/7. ويمكنك دائماً تقديم شكوى رسمية بموجب سياسة الشكاوى.'],
    ],
    faqTitle: 'الأسئلة الشائعة حول التقييمات',
    faq: [
      ['هل ERACEX موثوقة وآمنة؟', 'يمكنك التحقق من خلال التقييمات على Trustpilot، ومقابلات المتداولين الممولين، وإثباتات السحب On-Chain.'],
      ['هل تدفع ERACEX الأرباح بالفعل؟', 'نعم. تنشر جميع الشهادات وإثباتات السحب في قسم الشهادات وصفحة الشفافية.'],
      ['كم من الوقت يستغرق سحب الأرباح؟', 'متوسط زمن معالجة وإرسال السحب أقل من 3.4 ساعات.'],
      ['أين يمكنني قراءة تقييمات محايدة ومستقلة؟', 'على منصات التقييم الخارجية مثل Trustpilot.'],
    ],
  },
  nl: {
    complaintsTag: 'TRANSPARANTIE',
    complaintsTitle: 'Veelvoorkomende Klachten, Direct Beantwoord',
    complaints: [
      ['“Ik overschreed de drawdown en verloor mijn inschrijfgeld”', 'Dagelijkse en maximale verlieslimieten staan helder op de Regelspagina. Het inschrijfgeld wordt bij de eerste uitbetaling 100% gerestitueerd.'],
      ['“Vereist de 95% winstdeling extra voorwaarden?”', 'De verdeling stijgt van 80% naar 95% volgens het Opschaalplan op de Regelspagina.'],
      ['“De evaluatie was uitdagender dan verwacht”', 'Winstdoelen en risicolimieten zijn duidelijk gedefinieerd, en er is geen tijdslimiet zodat u in uw eigen tempo kunt handelen.'],
      ['“Ondersteuning reageerde traag tijdens piekuren”', 'Onze support is 24/7 bereikbaar en u kunt te allen tijde een formele klacht indienen via het klachtenbeleid.'],
    ],
    faqTitle: 'FAQ over Beoordelingen & Uitbetalingen',
    faq: [
      ['Is ERACEX betrouwbaar?', 'U kunt dit verifiëren via Trustpilot-reviews, traderinterviews en on-chain uitbetalingsbewijzen.'],
      ['Betaalt ERACEX daadwerkelijk uit?', 'Ja. Alle certificaten en bewijzen zijn openbaar inzichtelijk.'],
      ['Hoe lang duurt een uitbetaling?', 'De gemiddelde uitbetalingsduur is minder dan 3,4 uur.'],
      ['Waar kan ik onafhankelijke reviews lezen?', 'Op externe beoordelingsplatforms zoals Trustpilot.'],
    ],
  },
};

// Update ReviewsComplaintsFaq.tsx
let rCode = fs.readFileSync('components/eracex/ReviewsComplaintsFaq.tsx', 'utf8').replace(/\r\n/g, '\n');

// Find insertion point before const ReviewsComplaintsFaq
const rMarker = `      ['Where can I read independent reviews?', 'On third-party review platforms such as Trustpilot. We do not control those platforms.'],
    ] as QA[],
  },
};`;

if (!rCode.includes(rMarker)) {
  console.error('Could not find rMarker in ReviewsComplaintsFaq.tsx');
  process.exit(1);
}

let rExtraStr = Object.entries(reviewsComplaintsDict).map(([lang, val]) => `  ${lang}: ${JSON.stringify(val, null, 4).replace(/\n/g, '\n  ')} as unknown as typeof CONTENT.en,`).join('\n');
const newRCode = rCode.replace(rMarker, `      ['Where can I read independent reviews?', 'On third-party review platforms such as Trustpilot. We do not control those platforms.'],
    ] as QA[],
  },\n${rExtraStr}\n};`);

// Update line `const c = currentLang === 'vi' ? CONTENT.vi : CONTENT.en;` to `const c = (CONTENT as any)[currentLang] || CONTENT.en;`
const newRCode2 = newRCode.replace("const c = currentLang === 'vi' ? CONTENT.vi : CONTENT.en;", "const c = ((CONTENT as any)[currentLang] || CONTENT.en) as typeof CONTENT.en;");

fs.writeFileSync('components/eracex/ReviewsComplaintsFaq.tsx', newRCode2, 'utf8');
console.log('Successfully updated ReviewsComplaintsFaq.tsx with 19 languages');
