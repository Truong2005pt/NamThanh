import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import blocks from '@/content/legal/privacy-policy.json';

export const metadata: Metadata = {
  title: 'Website Privacy Policy | ERACEX',
  description: 'How FX-EDGE V Ltd processes personal data collected through the ERACEX website.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks as LegalBlock[]} doc="privacy-policy" />
    </div>
  );
}
