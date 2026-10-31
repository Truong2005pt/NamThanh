import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import blocks from '@/content/legal/restricted-jurisdictions.json';

export const metadata: Metadata = {
  title: 'Restricted Jurisdictions | ERACEX',
  description: 'Territories whose citizens and residents FX-EDGE V Ltd does not serve.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks as LegalBlock[]} />
    </div>
  );
}
