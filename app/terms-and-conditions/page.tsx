import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import blocks from '@/content/legal/terms-and-conditions.json';

export const metadata: Metadata = {
  title: 'Terms and Conditions | ERACEX',
  description: 'Terms and Conditions governing access to and use of the ERACEX services, operated by FX-EDGE V Ltd.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks as LegalBlock[]} doc="terms-and-conditions" />
    </div>
  );
}
