import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import blocks from '@/content/legal/restricted-jurisdictions.json';

export const metadata: Metadata = { title: 'Restricted Jurisdictions | ERACEX' };

export default function Page() {
  return <LegalDocument blocks={blocks as LegalBlock[]} />;
}
