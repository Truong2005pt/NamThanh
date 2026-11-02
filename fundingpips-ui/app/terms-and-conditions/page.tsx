import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import blocks from '@/content/legal/terms-and-conditions.json';

export const metadata: Metadata = { title: 'Terms and Conditions | ERACEX' };

export default function Page() {
  return <LegalDocument blocks={blocks as LegalBlock[]} />;
}
