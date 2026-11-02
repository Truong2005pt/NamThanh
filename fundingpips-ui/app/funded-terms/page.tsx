import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import blocks from '@/content/legal/funded-terms.json';

export const metadata: Metadata = { title: 'Funded Account Terms | ERACEX' };

export default function Page() {
  return <LegalDocument blocks={blocks as LegalBlock[]} />;
}
