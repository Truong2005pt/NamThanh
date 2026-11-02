import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import blocks from '@/content/legal/client-privacy-policy.json';

export const metadata: Metadata = { title: 'Client Privacy Policy | ERACEX' };

export default function Page() {
  return <LegalDocument blocks={blocks as LegalBlock[]} />;
}
