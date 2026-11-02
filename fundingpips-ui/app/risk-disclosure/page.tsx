import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import disclaimers from '@/content/legal/footer-disclaimers.json';

export const metadata = { title: 'Risk Disclosure | ERACEX' };

export default function Page() {
  const d = disclaimers as { t: string; x: string }[];
  const i = d.findIndex((b) => /Risk Disclosure/i.test(b.x));
  const blocks: LegalBlock[] = [{ t: 'p', x: '<b>Risk Disclosure</b>', center: true }, ...d.slice(i + 1, i + 2).map((b) => ({ t: 'p' as const, x: b.x }))];
  return <LegalDocument blocks={blocks} />;
}
