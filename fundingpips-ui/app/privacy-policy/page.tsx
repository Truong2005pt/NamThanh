import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';
import blocks from '@/content/legal/privacy-policy.json';

export const metadata: Metadata = { title: 'Privacy Policy | ERACEX' };

export default function Page() {
  return <LegalDocument blocks={blocks as LegalBlock[]} />;
}
