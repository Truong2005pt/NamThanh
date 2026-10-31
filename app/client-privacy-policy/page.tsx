import type { Metadata } from 'next';
import { LegalDocument, type LegalBlock } from '@/components/eracex/LegalDocument';
import blocks from '@/content/legal/client-privacy-policy.json';

export const metadata: Metadata = {
  title: 'Privacy Policy for Clients | ERACEX',
  description: 'Privacy information for clients of FX-EDGE V Ltd.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-28">
      <LegalDocument blocks={blocks as LegalBlock[]} />
    </div>
  );
}
