import { CtaBanner } from '@/components/home/CtaBanner';
import { Faq } from '@/components/home/Faq';
import { HomeMotion } from '@/components/home/HomeMotion';
import { Hero } from '@/components/home/Hero';
import { Journey } from '@/components/home/Journey';
import { Plans } from '@/components/home/Plans';
import { RewardPanel } from '@/components/home/RewardPanel';
import { Rewards } from '@/components/home/Rewards';
import { SelectionProvider } from '@/components/home/SelectionContext';
import { Support } from '@/components/home/Support';
import { Tech } from '@/components/home/Tech';
import { Why } from '@/components/home/Why';
import '@/components/home/home.css';

export default function HomePage() {
  return (
    <SelectionProvider>
      <div className="home" data-no-reveal>
        <HomeMotion />
        <Hero />
        <RewardPanel />
        <Journey />
        <Plans />
        <Rewards />
        <Why />
        <Tech />
        <Support />
        <Faq />
        <CtaBanner />
      </div>
    </SelectionProvider>
  );
}
