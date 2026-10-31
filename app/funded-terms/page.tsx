import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import blocks from '@/content/legal/funded-terms.json';

export const metadata: Metadata = {
  title: 'Funded Account Terms | ERACEX',
  description: 'Terms and Conditions of the funded accounts program operated by FX-EDGE V Ltd.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks as LegalBlock[]} />
    </div>
  );
}
