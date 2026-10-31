'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { SITE_CONFIG } from '@/config/site-config';

type QA = [string, string];

const CONTENT = {
  vi: {
    complaintsTag: 'MINH BẠCH',
    complaintsTitle: 'Những Phàn Nàn Thường Gặp, Trả Lời Thẳng',
    complaints: [
      ['“Tôi vi phạm drawdown và mất hết phí đã trả”', 'Giới hạn lỗ ngày và lỗ tối đa được công bố rõ trên trang Quy tắc trước khi mua. Phí chương trình không được hoàn lại sau khi cấp quyền truy cập tài khoản.'],
      ['“Tỷ lệ chia lợi nhuận cao hơn cần điều kiện thêm”', 'Tỷ lệ chia sẻ lợi nhuận cao theo điều khoản của chương trình. Tùy chọn trả phí có thể nâng tỷ lệ chia, xem bảng phí.'],
      ['“Bài đánh giá khó hơn tôi nghĩ”', 'Mục tiêu lợi nhuận, số ngày giao dịch tối thiểu và giới hạn rủi ro được ghi rõ theo từng gói trước khi bạn thanh toán.'],
      ['“Hỗ trợ trả lời chậm lúc đông khách”', 'Nếu chưa hài lòng, bạn có thể gửi khiếu nại theo Chính sách Khiếu Nại.'],
    ] as QA[],
    faqTitle: 'Câu Hỏi Về Đánh Giá',
    faq: [
      ['ERACEX có uy tín không?', 'Hãy xem kỹ quy tắc chương trình, Điều Khoản Dịch Vụ và các chính sách được công bố trên website trước khi thanh toán.'],
      ['Điều kiện rút tiền là gì?', 'Thời gian chờ rút lần đầu là 5 ngày với Two-Step và One-Step, 14 ngày với Instant. Rút tối thiểu 1%.'],
      ['Phí có được hoàn lại không?', `Phí chương trình không được hoàn lại sau khi cấp quyền truy cập tài khoản. Rút tối thiểu ${SITE_CONFIG.stats.avgPayoutHours} lợi nhuận.`],
      ['Tôi xem các chính sách ở đâu?', 'Các chính sách được công bố ở phần chân trang của website, bao gồm Điều Khoản, Cảnh Báo Rủi Ro và Chính Sách Khiếu Nại.'],
    ] as QA[],
  },
  en: {
    complaintsTag: 'TRANSPARENCY',
    complaintsTitle: 'Common Complaints, Addressed Directly',
    complaints: [
      ['“I breached a drawdown and lost everything I paid for”', 'Daily and maximum loss limits are published on the Rules page before you buy. Program fees are non-refundable once account access has been granted.'],
      ['“A higher profit split needs extra conditions”', 'The profit share is high under the terms of each program. A paid add-on can raise the share, see the fee table.'],
      ['“The evaluation is harder than I expected”', 'Profit targets, minimum trading days and risk limits are listed for every package before you pay.'],
      ['“Support took time to respond during a busy period”', 'If you are not satisfied, you can file a complaint under the Complaints Policy.'],
    ] as QA[],
    faqTitle: 'Reviews FAQ',
    faq: [
      ['Is ERACEX legit?', 'Please review the program rules, the Terms of Service and the policies published on the website before you pay.'],
      ['What are the withdrawal conditions?', 'The first withdrawal wait is 5 days for Two-Step and One-Step, 14 days for Instant. Minimum withdrawal is 1%.'],
      ['Are fees refundable?', `Program fees are non-refundable once account access has been granted. Minimum withdrawal is ${SITE_CONFIG.stats.avgPayoutHours} of profit.`],
      ['Where can I read the policies?', 'Policies are published in the website footer, including the Terms, Risk Disclosure and Complaints Policy.'],
    ] as QA[],
  },
  zh: {
      "complaintsTag": "公开透明",
      "complaintsTitle": "常见质疑，直接回应",
      "complaints": [
          [
              "“我触碰了亏损限额，支付的费用全部损失”",
              "每日亏损限额和最大亏损限额在购买前已在规则页面公布。账户访问权限开通后，计划费用不予退还。"
          ],
          [
              "“更高的利润分成需要额外条件”",
              "利润分成比例较高,按各计划的条款执行。付费附加选项可提高分成比例,请参阅费用表。"
          ],
          [
              "“评估比我预想的更难”",
              "每个套餐的盈利目标、最少交易天数和风险限额均在付款前列明。"
          ],
          [
              "“繁忙时段客服响应较慢”",
              "如果您不满意，可以依据投诉政策提交投诉。"
          ]
      ],
      "faqTitle": "评估常见问题",
      "faq": [
          [
              "ERACEX可靠吗？",
              "付款前，请仔细阅读计划规则、服务条款以及网站上公布的各项政策。"
          ],
          [
              "提现条件是什么？",
              "首次提现等待期：Two-Step和One-Step为5天，Instant为14天。最低提现为1%。"
          ],
          [
              "费用可以退还吗？",
              `账户访问权限开通后，计划费用不予退还。最低提现为利润的${SITE_CONFIG.stats.avgPayoutHours}。`
          ],
          [
              "在哪里可以阅读各项政策？",
              "各项政策公布在网站页脚，包括条款、风险披露和投诉政策。"
          ]
      ]
  } as unknown as typeof CONTENT.en,
  ja: {
      "complaintsTag": "透明性",
      "complaintsTitle": "よくある苦情に率直にお答えします",
      "complaints": [
          [
              "「損失上限に抵触し、支払った料金をすべて失った」",
              "日次および最大損失上限は、購入前にルールページで公開されています。アカウントへのアクセスが付与された後は、プログラム料金は返金されません。"
          ],
          [
              "「より高い利益分配には追加条件が必要」",
              "利益分配率は高く、各プログラムの条件に従います。有料アドオンにより分配率を引き上げられます。料金表をご覧ください。"
          ],
          [
              "「評価が思ったより難しい」",
              "利益目標、最低取引日数、リスク上限は、お支払い前に各パッケージで一覧表示されます。"
          ],
          [
              "「混雑時にサポートの返信が遅かった」",
              "ご満足いただけない場合は、苦情処理ポリシーに基づき苦情を申し立てることができます。"
          ]
      ],
      "faqTitle": "評価に関するFAQ",
      "faq": [
          [
              "ERACEXは信頼できますか？",
              "お支払い前に、プログラムのルール、利用規約、ウェブサイトで公開されているポリシーをご確認ください。"
          ],
          [
              "出金条件は何ですか？",
              "初回出金までの待機期間は、Two-StepとOne-Stepが5日、Instantが14日です。最低出金額は1%です。"
          ],
          [
              "料金は返金されますか？",
              `アカウントへのアクセスが付与された後は、プログラム料金は返金されません。最低出金額は利益の${SITE_CONFIG.stats.avgPayoutHours}です。`
          ],
          [
              "ポリシーはどこで読めますか？",
              "ポリシーはウェブサイトのフッターで公開されており、利用規約、リスク開示、苦情処理ポリシーが含まれます。"
          ]
      ]
  } as unknown as typeof CONTENT.en,
  es: {
      "complaintsTag": "TRANSPARENCIA",
      "complaintsTitle": "Quejas Habituales, Respuestas Directas",
      "complaints": [
          [
              "“Incumplí un límite de pérdida y perdí todo lo que pagué”",
              "Los límites de pérdida diaria y máxima se publican en la página de Reglas antes de comprar. Las tarifas de los programas no son reembolsables una vez concedido el acceso a la cuenta."
          ],
          [
              "“Un reparto de beneficios mayor requiere condiciones adicionales”",
              "El reparto de beneficios es alto según las condiciones de cada programa. Un complemento de pago puede aumentarlo, consulta la tabla de tarifas."
          ],
          [
              "“La evaluación es más difícil de lo que esperaba”",
              "Los objetivos de beneficio, los días mínimos de trading y los límites de riesgo se indican en cada paquete antes de pagar."
          ],
          [
              "“El soporte tardó en responder en un periodo de mucha actividad”",
              "Si no estás satisfecho, puedes presentar una queja según la Política de Quejas."
          ]
      ],
      "faqTitle": "Preguntas Frecuentes sobre el Programa",
      "faq": [
          [
              "¿Es fiable ERACEX?",
              "Revisa las reglas del programa, los Términos de Servicio y las políticas publicadas en el sitio web antes de pagar."
          ],
          [
              "¿Cuáles son las condiciones de retiro?",
              "La espera para el primer retiro es de 5 días en Two-Step y One-Step y de 14 días en Instant. El retiro mínimo es del 1%."
          ],
          [
              "¿Las tarifas son reembolsables?",
              `Las tarifas de los programas no son reembolsables una vez concedido el acceso a la cuenta. El retiro mínimo es ${SITE_CONFIG.stats.avgPayoutHours} del beneficio.`
          ],
          [
              "¿Dónde puedo leer las políticas?",
              "Las políticas se publican en el pie de página del sitio web, incluidos los Términos, la Divulgación de Riesgos y la Política de Quejas."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  pt: {
      "complaintsTag": "TRANSPARÊNCIA",
      "complaintsTitle": "Reclamações Comuns, Respondidas Diretamente",
      "complaints": [
          [
              "“Violei um limite de perda e perdi tudo o que paguei”",
              "Os limites de perda diária e máxima são publicados na página de Regras antes da compra. As taxas dos programas não são reembolsáveis depois que o acesso à conta é concedido."
          ],
          [
              "“Uma divisão de lucros maior exige condições extras”",
              "A divisão de lucros é alta conforme os termos de cada programa. Um complemento pago pode aumentá-la, veja a tabela de taxas."
          ],
          [
              "“A avaliação é mais difícil do que eu esperava”",
              "As metas de lucro, os dias mínimos de trading e os limites de risco são listados em cada pacote antes do pagamento."
          ],
          [
              "“O suporte demorou a responder em um período movimentado”",
              "Se você não estiver satisfeito, pode registrar uma reclamação conforme a Política de Reclamações."
          ]
      ],
      "faqTitle": "Perguntas Frequentes sobre o Programa",
      "faq": [
          [
              "A ERACEX é confiável?",
              "Revise as regras do programa, os Termos de Serviço e as políticas publicadas no site antes de pagar."
          ],
          [
              "Quais são as condições de saque?",
              "A espera para o primeiro saque é de 5 dias no Two-Step e One-Step e de 14 dias no Instant. O saque mínimo é de 1%."
          ],
          [
              "As taxas são reembolsáveis?",
              `As taxas dos programas não são reembolsáveis depois que o acesso à conta é concedido. O saque mínimo é ${SITE_CONFIG.stats.avgPayoutHours} do lucro.`
          ],
          [
              "Onde posso ler as políticas?",
              "As políticas são publicadas no rodapé do site, incluindo os Termos, o Aviso de Risco e a Política de Reclamações."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  fr: {
      "complaintsTag": "TRANSPARENCE",
      "complaintsTitle": "Réclamations fréquentes, réponses directes",
      "complaints": [
          [
              "« J'ai dépassé une limite de perte et j'ai tout perdu de ce que j'ai payé »",
              "Les limites de perte quotidienne et maximale sont publiées sur la page Règles avant l'achat. Les frais des programmes ne sont pas remboursables une fois l'accès au compte accordé."
          ],
          [
              "« Un partage des profits plus élevé nécessite des conditions supplémentaires »",
              "Le partage des profits est élevé selon les conditions de chaque programme. Une option payante peut l'augmenter, voir le tableau des frais."
          ],
          [
              "« L'évaluation est plus difficile que prévu »",
              "Les objectifs de profit, les jours de trading minimum et les limites de risque sont indiqués pour chaque pack avant le paiement."
          ],
          [
              "« Le support a mis du temps à répondre en période d'affluence »",
              "Si vous n'êtes pas satisfait, vous pouvez déposer une réclamation selon la Politique de réclamations."
          ]
      ],
      "faqTitle": "FAQ sur l'évaluation",
      "faq": [
          [
              "ERACEX est-elle fiable ?",
              "Veuillez consulter les règles du programme, les Conditions d'utilisation et les politiques publiées sur le site avant de payer."
          ],
          [
              "Quelles sont les conditions de retrait ?",
              "Le délai avant le premier retrait est de 5 jours pour Two-Step et One-Step, et de 14 jours pour Instant. Le retrait minimum est de 1 %."
          ],
          [
              "Les frais sont-ils remboursables ?",
              `Les frais des programmes ne sont pas remboursables une fois l'accès au compte accordé. Le retrait minimum est de ${SITE_CONFIG.stats.avgPayoutHours} du profit.`
          ],
          [
              "Où puis-je lire les politiques ?",
              "Les politiques sont publiées en pied de page du site, notamment les Conditions, l'Avertissement sur les risques et la Politique de réclamations."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  de: {
      "complaintsTag": "TRANSPARENZ",
      "complaintsTitle": "Häufige Beschwerden, direkt beantwortet",
      "complaints": [
          [
              "„Ich habe ein Verlustlimit verletzt und alles verloren, was ich bezahlt habe“",
              "Die Limits für Tages- und Maximalverlust sind vor dem Kauf auf der Regelseite veröffentlicht. Programmgebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig."
          ],
          [
              "„Eine höhere Gewinnaufteilung erfordert zusätzliche Bedingungen“",
              "Die Gewinnaufteilung ist hoch und richtet sich nach den Bedingungen des jeweiligen Programms. Ein kostenpflichtiges Add-on kann sie erhöhen, siehe Gebührentabelle."
          ],
          [
              "„Die Evaluierung ist schwieriger als erwartet“",
              "Gewinnziele, Mindesthandelstage und Risikolimits sind für jedes Paket vor der Zahlung aufgeführt."
          ],
          [
              "„Der Support brauchte in einer geschäftigen Zeit lange für eine Antwort“",
              "Wenn Sie nicht zufrieden sind, können Sie nach der Beschwerderichtlinie eine Beschwerde einreichen."
          ]
      ],
      "faqTitle": "FAQ zur Evaluierung",
      "faq": [
          [
              "Ist ERACEX seriös?",
              "Bitte prüfen Sie vor der Zahlung die Programmregeln, die Nutzungsbedingungen und die auf der Website veröffentlichten Richtlinien."
          ],
          [
              "Wie lauten die Auszahlungsbedingungen?",
              "Die Wartezeit bis zur ersten Auszahlung beträgt 5 Tage bei Two-Step und One-Step und 14 Tage bei Instant. Die Mindestauszahlung beträgt 1 %."
          ],
          [
              "Sind Gebühren erstattungsfähig?",
              `Programmgebühren sind nach Gewährung des Kontozugangs nicht erstattungsfähig. Die Mindestauszahlung beträgt ${SITE_CONFIG.stats.avgPayoutHours} des Gewinns.`
          ],
          [
              "Wo kann ich die Richtlinien lesen?",
              "Die Richtlinien sind im Footer der Website veröffentlicht, darunter die Nutzungsbedingungen, der Risikohinweis und die Beschwerderichtlinie."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  it: {
      "complaintsTag": "TRASPARENZA",
      "complaintsTitle": "Reclami Comuni, Risposte Dirette",
      "complaints": [
          [
              "“Ho superato un limite di perdita e ho perso tutto ciò che ho pagato”",
              "I limiti di perdita giornaliera e massima sono pubblicati nella pagina Regole prima dell'acquisto. Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso al conto."
          ],
          [
              "“Una ripartizione degli utili più alta richiede condizioni aggiuntive”",
              "La ripartizione dei profitti è alta secondo i termini di ciascun programma. Un add-on a pagamento può aumentarla, consulta la tabella delle commissioni."
          ],
          [
              "“La valutazione è più difficile di quanto pensassi”",
              "Obiettivi di profitto, giorni minimi di trading e limiti di rischio sono elencati per ogni pacchetto prima del pagamento."
          ],
          [
              "“L'assistenza ha impiegato tempo a rispondere in un periodo di grande affluenza”",
              "Se non sei soddisfatto, puoi presentare un reclamo secondo la Politica sui reclami."
          ]
      ],
      "faqTitle": "FAQ sulla valutazione",
      "faq": [
          [
              "ERACEX è affidabile?",
              "Prima di pagare, consulta le regole del programma, i Termini di Servizio e le politiche pubblicate sul sito."
          ],
          [
              "Quali sono le condizioni di prelievo?",
              "L'attesa per il primo prelievo è di 5 giorni per Two-Step e One-Step e di 14 giorni per Instant. Il prelievo minimo è dell'1%."
          ],
          [
              "Le commissioni sono rimborsabili?",
              `Le commissioni dei programmi non sono rimborsabili una volta concesso l'accesso al conto. Il prelievo minimo è ${SITE_CONFIG.stats.avgPayoutHours} dell'utile.`
          ],
          [
              "Dove posso leggere le politiche?",
              "Le politiche sono pubblicate nel footer del sito, inclusi i Termini, l'Avviso sui rischi e la Politica sui reclami."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  pl: {
      "complaintsTag": "PRZEJRZYSTOŚĆ",
      "complaintsTitle": "Częste skargi, bezpośrednie odpowiedzi",
      "complaints": [
          [
              "„Przekroczyłem limit strat i straciłem wszystko, co zapłaciłem”",
              "Limity dziennej i maksymalnej straty są publikowane na stronie Zasad przed zakupem. Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu do konta."
          ],
          [
              "„Wyższy podział zysków wymaga dodatkowych warunków”",
              "Podział zysków jest wysoki zgodnie z warunkami każdego programu. Płatny dodatek może go zwiększyć, zobacz tabelę opłat."
          ],
          [
              "„Ocena jest trudniejsza, niż się spodziewałem”",
              "Cele zysku, minimalna liczba dni handlowych i limity ryzyka są podane dla każdego pakietu przed zapłatą."
          ],
          [
              "„Wsparcie długo odpowiadało w okresie dużego ruchu”",
              "Jeśli nie jesteś zadowolony, możesz złożyć skargę zgodnie z Polityką skarg."
          ]
      ],
      "faqTitle": "FAQ o ocenie",
      "faq": [
          [
              "Czy ERACEX jest wiarygodny?",
              "Przed zapłatą zapoznaj się z zasadami programu, Regulaminem i politykami opublikowanymi na stronie."
          ],
          [
              "Jakie są warunki wypłat?",
              "Okres oczekiwania na pierwszą wypłatę wynosi 5 dni dla Two-Step i One-Step oraz 14 dni dla Instant. Minimalna wypłata to 1%."
          ],
          [
              "Czy opłaty podlegają zwrotowi?",
              `Opłaty za programy nie podlegają zwrotowi po przyznaniu dostępu do konta. Minimalna wypłata to ${SITE_CONFIG.stats.avgPayoutHours} zysku.`
          ],
          [
              "Gdzie mogę przeczytać polityki?",
              "Polityki są opublikowane w stopce strony, w tym Regulamin, Ostrzeżenie o ryzyku i Polityka skarg."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  tr: {
      "complaintsTag": "ŞEFFAFLIK",
      "complaintsTitle": "Sık Yapılan Şikâyetler, Doğrudan Yanıtlar",
      "complaints": [
          [
              "“Bir kayıp limitini aştım ve ödediğim her şeyi kaybettim”",
              "Günlük ve maksimum kayıp limitleri, satın almadan önce Kurallar sayfasında yayımlanır. Hesap erişimi verildikten sonra program ücretleri iade edilmez."
          ],
          [
              "“Daha yüksek kâr paylaşımı ek koşullar gerektiriyor”",
              "Kâr paylaşımı, her programın şartlarına göre yüksektir. Ücretli bir eklenti bunu artırabilir, ücret tablosuna bakın."
          ],
          [
              "“Değerlendirme beklediğimden zor”",
              "Kâr hedefleri, minimum işlem günleri ve risk limitleri, ödemeden önce her paket için listelenir."
          ],
          [
              "“Yoğun bir dönemde destek yanıt vermekte gecikti”",
              "Memnun kalmazsanız Şikâyet Politikası kapsamında şikâyette bulunabilirsiniz."
          ]
      ],
      "faqTitle": "Değerlendirme SSS",
      "faq": [
          [
              "ERACEX güvenilir mi?",
              "Ödeme yapmadan önce program kurallarını, Hizmet Şartlarını ve web sitesinde yayımlanan politikaları inceleyin."
          ],
          [
              "Çekim koşulları nelerdir?",
              "İlk çekim bekleme süresi Two-Step ve One-Step için 5 gün, Instant için 14 gündür. Minimum çekim %1'dir."
          ],
          [
              "Ücretler iade edilir mi?",
              `Hesap erişimi verildikten sonra program ücretleri iade edilmez. Minimum çekim kârın ${SITE_CONFIG.stats.avgPayoutHours} kadarıdır.`
          ],
          [
              "Politikaları nerede okuyabilirim?",
              "Politikalar, Şartlar, Risk Bildirimi ve Şikâyet Politikası dahil olmak üzere web sitesinin alt bilgisinde yayımlanır."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  id: {
      "complaintsTag": "TRANSPARANSI",
      "complaintsTitle": "Keluhan Umum, Dijawab Langsung",
      "complaints": [
          [
              "“Saya melanggar batas kerugian dan kehilangan semua yang saya bayar”",
              "Batas kerugian harian dan maksimum dipublikasikan di halaman Aturan sebelum Anda membeli. Biaya program tidak dapat dikembalikan setelah akses akun diberikan."
          ],
          [
              "“Pembagian profit yang lebih tinggi memerlukan syarat tambahan”",
              "Pembagian profit tinggi sesuai ketentuan setiap program. Add-on berbayar dapat menaikkannya, lihat tabel biaya."
          ],
          [
              "“Evaluasinya lebih sulit dari yang saya kira”",
              "Target profit, hari trading minimum, dan batas risiko dicantumkan untuk setiap paket sebelum Anda membayar."
          ],
          [
              "“Dukungan butuh waktu untuk merespons saat sedang ramai”",
              "Jika Anda tidak puas, Anda dapat mengajukan keluhan sesuai Kebijakan Keluhan."
          ]
      ],
      "faqTitle": "FAQ Seputar Evaluasi",
      "faq": [
          [
              "Apakah ERACEX terpercaya?",
              "Harap tinjau aturan program, Ketentuan Layanan, dan kebijakan yang dipublikasikan di situs web sebelum membayar."
          ],
          [
              "Apa saja ketentuan penarikan?",
              "Masa tunggu penarikan pertama adalah 5 hari untuk Two-Step dan One-Step, 14 hari untuk Instant. Penarikan minimum adalah 1%."
          ],
          [
              "Apakah biaya dapat dikembalikan?",
              `Biaya program tidak dapat dikembalikan setelah akses akun diberikan. Penarikan minimum adalah ${SITE_CONFIG.stats.avgPayoutHours} dari profit.`
          ],
          [
              "Di mana saya bisa membaca kebijakannya?",
              "Kebijakan dipublikasikan di footer situs web, termasuk Ketentuan, Pengungkapan Risiko, dan Kebijakan Keluhan."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  th: {
      "complaintsTag": "ความโปร่งใส",
      "complaintsTitle": "ข้อร้องเรียนที่พบบ่อย ตอบอย่างตรงไปตรงมา",
      "complaints": [
          [
              "“ฉันละเมิดขีดจำกัดการขาดทุนและเสียทุกอย่างที่จ่ายไป”",
              "ขีดจำกัดการขาดทุนรายวันและสูงสุดเผยแพร่ในหน้ากฎก่อนที่คุณจะซื้อ ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว"
          ],
          [
              "“สัดส่วนแบ่งกำไรที่สูงขึ้นต้องมีเงื่อนไขเพิ่มเติม”",
              "สัดส่วนแบ่งกำไรอยู่ในระดับสูงตามเงื่อนไขของแต่ละโปรแกรม ส่วนเสริมแบบชำระเงินสามารถเพิ่มได้ ดูตารางค่าธรรมเนียม"
          ],
          [
              "“การประเมินยากกว่าที่คิด”",
              "เป้าหมายกำไร จำนวนวันเทรดขั้นต่ำ และขีดจำกัดความเสี่ยงของทุกแพ็กเกจจะแสดงไว้ก่อนชำระเงิน"
          ],
          [
              "“ฝ่ายสนับสนุนใช้เวลาตอบนานในช่วงที่มีผู้ใช้งานหนาแน่น”",
              "หากไม่พอใจ คุณสามารถยื่นข้อร้องเรียนตามนโยบายการร้องเรียนได้"
          ]
      ],
      "faqTitle": "คำถามที่พบบ่อยเกี่ยวกับการประเมิน",
      "faq": [
          [
              "ERACEX น่าเชื่อถือหรือไม่",
              "โปรดอ่านกฎของโปรแกรม ข้อกำหนดการให้บริการ และนโยบายที่เผยแพร่บนเว็บไซต์ก่อนชำระเงิน"
          ],
          [
              "เงื่อนไขการถอนเงินคืออะไร",
              "ระยะเวลารอถอนครั้งแรกคือ 5 วันสำหรับ Two-Step และ One-Step และ 14 วันสำหรับ Instant ถอนขั้นต่ำ 1%"
          ],
          [
              "ค่าธรรมเนียมขอคืนได้หรือไม่",
              `ค่าธรรมเนียมโปรแกรมไม่สามารถขอคืนได้เมื่อได้รับสิทธิ์เข้าถึงบัญชีแล้ว ถอนขั้นต่ำคือ ${SITE_CONFIG.stats.avgPayoutHours} ของกำไร`
          ],
          [
              "ฉันอ่านนโยบายได้ที่ไหน",
              "นโยบายเผยแพร่ที่ส่วนท้ายของเว็บไซต์ รวมถึงข้อกำหนด คำเตือนความเสี่ยง และนโยบายการร้องเรียน"
          ]
      ]
  } as unknown as typeof CONTENT.en,
  fil: {
      "complaintsTag": "TRANSPARENCY",
      "complaintsTitle": "Karaniwang Reklamo, Tuwirang Sagot",
      "complaints": [
          [
              "“Nilabag ko ang loss limit at nawala ang lahat ng binayad ko”",
              "Inilalathala sa pahina ng Mga Patakaran ang daily at maximum na loss limit bago ka bumili. Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access sa account."
          ],
          [
              "“Ang mas mataas na hatian ng kita ay nangangailangan ng dagdag na kondisyon”",
              "Mataas ang hatian ng kita ayon sa mga tuntunin ng bawat programa. Maaari itong itaas ng bayad na add-on, tingnan ang talaan ng bayarin."
          ],
          [
              "“Mas mahirap ang evaluation kaysa inaasahan ko”",
              "Nakalista sa bawat package bago ka magbayad ang mga profit target, minimum na araw ng trading, at mga limitasyon sa panganib."
          ],
          [
              "“Natagalan ang support sa pagsagot sa abalang panahon”",
              "Kung hindi ka nasiyahan, maaari kang maghain ng reklamo sa ilalim ng Patakaran sa mga Reklamo."
          ]
      ],
      "faqTitle": "FAQ sa Evaluation",
      "faq": [
          [
              "Lehitimo ba ang ERACEX?",
              "Pakisuri ang mga patakaran ng programa, ang Mga Tuntunin ng Serbisyo, at ang mga patakarang nakalathala sa website bago magbayad."
          ],
          [
              "Ano ang mga kondisyon sa pag-withdraw?",
              "Ang paghihintay sa unang withdrawal ay 5 araw para sa Two-Step at One-Step, at 14 na araw para sa Instant. Ang minimum na withdrawal ay 1%."
          ],
          [
              "Maibabalik ba ang mga bayad?",
              `Hindi na maibabalik ang bayad sa programa kapag naibigay na ang access sa account. Ang minimum na withdrawal ay ${SITE_CONFIG.stats.avgPayoutHours} ng kita.`
          ],
          [
              "Saan ko mababasa ang mga patakaran?",
              "Nakalathala ang mga patakaran sa footer ng website, kabilang ang Mga Tuntunin, Risk Disclosure, at Patakaran sa mga Reklamo."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  hi: {
      "complaintsTag": "पारदर्शिता",
      "complaintsTitle": "आम शिकायतें, सीधे जवाब",
      "complaints": [
          [
              "“मैंने हानि सीमा तोड़ दी और भुगतान की हुई पूरी राशि खो दी”",
              "दैनिक और अधिकतम हानि सीमाएँ खरीद से पहले नियम पृष्ठ पर प्रकाशित होती हैं। खाते का एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता।"
          ],
          [
              "“अधिक लाभ विभाजन के लिए अतिरिक्त शर्तें चाहिए”",
              "विभाजन हर प्रोग्राम की शर्तों के अनुसार उच्च है। एक सशुल्क ऐड-ऑन इसे बढ़ा सकता है, शुल्क तालिका देखें।"
          ],
          [
              "“मूल्यांकन मेरी उम्मीद से कठिन है”",
              "हर पैकेज के लिए भुगतान से पहले लाभ लक्ष्य, न्यूनतम ट्रेडिंग दिन और जोखिम सीमाएँ सूचीबद्ध होती हैं।"
          ],
          [
              "“व्यस्त समय में सहायता को जवाब देने में समय लगा”",
              "यदि आप संतुष्ट नहीं हैं, तो आप शिकायत नीति के तहत शिकायत दर्ज कर सकते हैं।"
          ]
      ],
      "faqTitle": "मूल्यांकन से जुड़े अक्सर पूछे जाने वाले प्रश्न",
      "faq": [
          [
              "क्या ERACEX भरोसेमंद है?",
              "भुगतान करने से पहले प्रोग्राम के नियम, सेवा की शर्तें और वेबसाइट पर प्रकाशित नीतियाँ ध्यान से पढ़ें।"
          ],
          [
              "निकासी की शर्तें क्या हैं?",
              "पहली निकासी की प्रतीक्षा अवधि Two-Step और One-Step में 5 दिन और Instant में 14 दिन है। न्यूनतम निकासी 1% है।"
          ],
          [
              "क्या शुल्क वापस होता है?",
              `खाते का एक्सेस दिए जाने के बाद प्रोग्राम शुल्क वापस नहीं किया जाता। न्यूनतम निकासी लाभ का ${SITE_CONFIG.stats.avgPayoutHours} है।`
          ],
          [
              "मैं नीतियाँ कहाँ पढ़ सकता हूँ?",
              "नीतियाँ वेबसाइट के फ़ुटर में प्रकाशित हैं, जिनमें शर्तें, जोखिम प्रकटीकरण और शिकायत नीति शामिल हैं।"
          ]
      ]
  } as unknown as typeof CONTENT.en,
  ko: {
      "complaintsTag": "완전한 투명성",
      "complaintsTitle": "자주 제기되는 불만과 솔직한 답변",
      "complaints": [
          [
              "“드로우다운을 위반하여 지불한 응시료를 모두 잃었습니다”",
              "일일 및 최대 손실 한도는 결제 전 규정 페이지에 명확히 고지되어 있습니다. 챌린지 합격 후 첫 출금 시 100% 전액 환불됩니다."
          ],
          [
              "“최고 95% 수익 분배를 받으려면 까다로운 조건이 있나요?”",
              "수익 분배는 80%에서 시작하여 규정 페이지의 스케일링 플랜에 따라 단계적으로 95%까지 상승합니다."
          ],
          [
              "“평가 시험이 생각보다 까다롭습니다”",
              "모든 패키지의 목표 수익과 손실 한도는 투명하게 공개되며, 시간제한이 없으므로 본인의 호흡에 맞춰 안정적으로 매매할 수 있습니다."
          ],
          [
              "“이용자가 몰리는 시간대에 고객센터 응답이 지연되었습니다”",
              "기술 지원팀은 24/7 연중무휴로 운영됩니다. 미흡한 부분이 있을 경우 불만 처리 방침을 통해 공식 조치를 요청하실 수 있습니다."
          ]
      ],
      "faqTitle": "평가 및 출금 관련 자주 묻는 질문",
      "faq": [
          [
              "ERACEX는 믿을 수 있는 프랍 회사인가요?",
              "Trustpilot 독립 평가, 실제 합격자 인터뷰 및 온체인 출금 기록을 통해 누구나 직접 검증하실 수 있습니다."
          ],
          [
              "실제로 수익 출금이 정상 지급되나요?",
              "네, 모든 출금 인증서와 블록체인 이체 내역은 출금 증명관 및 투명성 페이지에 투명하게 공개되어 있습니다."
          ],
          [
              "출금 처리까지 시간이 얼마나 걸리나요?",
              "평균 출금 소요 시간은 3.4시간 미만입니다."
          ],
          [
              "독립적인 실제 후기는 어디서 볼 수 있나요?",
              "Trustpilot 등 기업이 임의로 조작할 수 없는 제3자 리뷰 플랫폼에서 확인 가능합니다."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  ru: {
      "complaintsTag": "ПРОЗРАЧНОСТЬ",
      "complaintsTitle": "Частые претензии и честные ответы",
      "complaints": [
          [
              "«Я нарушил drawdown и потерял вступительный взнос»",
              "Дневной и максимальный лимиты опубликованы до покупки. Взнос возвращается на 100% при первой выплате."
          ],
          [
              "«Для 95% доли прибыли нужны дополнительные условия»",
              "Доля растет от 80% до 95% в соответствии с планом масштабирования в Правилах."
          ],
          [
              "«Оценка оказалась сложнее, чем я думал»",
              "Цели и лимиты четко зафиксированы, а отсутствие ограничения по времени позволяет торговать спокойно."
          ],
          [
              "«В пиковые часы служба поддержки отвечала медленно»",
              "Поддержка работает 24/7. В случае претензий доступна официальная форма рассмотрения жалоб."
          ]
      ],
      "faqTitle": "Вопросы об отзывах и выплатах",
      "faq": [
          [
              "Надежна ли компания ERACEX?",
              "Вы можете убедиться в этом по отзывам на Trustpilot, интервью с трейдерами и блокчейн-выпискам."
          ],
          [
              "Выплачивает ли ERACEX деньги?",
              "Да. Все сертификаты и подтверждения выплат открыто опубликованы на сайте."
          ],
          [
              "Сколько времени занимает выплата?",
              "Среднее время обработки выплаты составляет менее 3.4 часов."
          ],
          [
              "Где прочитать независимые отзывы?",
              "На независимых платформах отзывов, таких как Trustpilot."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  ar: {
      "complaintsTag": "الشفافية الكاملة",
      "complaintsTitle": "الشكاوى الشائعة، والرد المباشر عليها",
      "complaints": [
          [
              "“تجاوزت حد التراجع وخسرت رسوم الاشتراك”",
              "حدود الخسارة اليومية والكلية معلنة بوضوح قبل الشراء. وتسترد الرسوم بنسبة 100% عند أول سحب للأرباح."
          ],
          [
              "“هل تتطلب نسبة الـ 95% شروطاً إضافية؟”",
              "ترتفع نسبة المشاركة من 80% إلى 95% تدريجياً وفق خطة التدرج المعلنة في صفحة القواعد."
          ],
          [
              "“كان التقييم أصعب مما توقعت”",
              "أهداف الربح وحدود المخاطر واضحة ومحددة، ولا توجد أي قيود زمنية لتتمكن من التداول بهدوء."
          ],
          [
              "“تأخر دعم العملاء في الرد وقت الذروة”",
              "يعمل الدعم الفني على مدار 24/7. ويمكنك دائماً تقديم شكوى رسمية بموجب سياسة الشكاوى."
          ]
      ],
      "faqTitle": "الأسئلة الشائعة حول التقييمات",
      "faq": [
          [
              "هل ERACEX موثوقة وآمنة؟",
              "يمكنك التحقق من خلال التقييمات على Trustpilot، ومقابلات المتداولين الممولين، وإثباتات السحب On-Chain."
          ],
          [
              "هل تدفع ERACEX الأرباح بالفعل؟",
              "نعم. تنشر جميع الشهادات وإثباتات السحب في قسم الشهادات وصفحة الشفافية."
          ],
          [
              "كم من الوقت يستغرق سحب الأرباح؟",
              "متوسط زمن معالجة وإرسال السحب أقل من 3.4 ساعات."
          ],
          [
              "أين يمكنني قراءة تقييمات محايدة ومستقلة؟",
              "على منصات التقييم الخارجية مثل Trustpilot."
          ]
      ]
  } as unknown as typeof CONTENT.en,
  nl: {
      "complaintsTag": "TRANSPARANTIE",
      "complaintsTitle": "Veelvoorkomende Klachten, Direct Beantwoord",
      "complaints": [
          [
              "“Ik overschreed de drawdown en verloor mijn inschrijfgeld”",
              "Dagelijkse en maximale verlieslimieten staan helder op de Regelspagina. Het inschrijfgeld wordt bij de eerste uitbetaling 100% gerestitueerd."
          ],
          [
              "“Vereist de 95% winstdeling extra voorwaarden?”",
              "De verdeling stijgt van 80% naar 95% volgens het Opschaalplan op de Regelspagina."
          ],
          [
              "“De evaluatie was uitdagender dan verwacht”",
              "Winstdoelen en risicolimieten zijn duidelijk gedefinieerd, en er is geen tijdslimiet zodat u in uw eigen tempo kunt handelen."
          ],
          [
              "“Ondersteuning reageerde traag tijdens piekuren”",
              "Onze support is 24/7 bereikbaar en u kunt te allen tijde een formele klacht indienen via het klachtenbeleid."
          ]
      ],
      "faqTitle": "FAQ over Beoordelingen & Uitbetalingen",
      "faq": [
          [
              "Is ERACEX betrouwbaar?",
              "U kunt dit verifiëren via Trustpilot-reviews, traderinterviews en on-chain uitbetalingsbewijzen."
          ],
          [
              "Betaalt ERACEX daadwerkelijk uit?",
              "Ja. Alle certificaten en bewijzen zijn openbaar inzichtelijk."
          ],
          [
              "Hoe lang duurt een uitbetaling?",
              "De gemiddelde uitbetalingsduur is minder dan 3,4 uur."
          ],
          [
              "Waar kan ik onafhankelijke reviews lezen?",
              "Op externe beoordelingsplatforms zoals Trustpilot."
          ]
      ]
  } as unknown as typeof CONTENT.en,
};

export const ReviewsComplaintsFaq: React.FC = () => {
  const { currentLang } = useLanguage();
  const c = ((CONTENT as any)[currentLang] || CONTENT.en) as typeof CONTENT.en;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-16 border-t app-border">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-8 space-y-16">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black app-text">{c.complaintsTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.complaints.map(([q, a], i) => (
              <div key={i} className="p-6 rounded-3xl card-surface space-y-2">
                <h3 className="font-bold app-text">{q}</h3>
                <p className="text-sm app-text-secondary leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black app-text text-center">{c.faqTitle}</h2>
          <div className="space-y-3">
            {c.faq.map(([q, a], i) => (
              <div key={i} className="rounded-2xl card-surface overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold app-text cursor-pointer"
                >
                  <span>{q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && <p className="px-5 pb-5 text-sm app-text-secondary leading-relaxed">{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
