import { NavBar } from '@/components/marketing/NavBar';
import { Hero } from '@/components/marketing/Hero';
import { UseCases } from '@/components/marketing/UseCases';
import { ChipOptimization } from '@/components/marketing/ChipOptimization';
import { ConsequentialLearning } from '@/components/marketing/ConsequentialLearning';
import { Pricing } from '@/components/marketing/Pricing';
import { LandingFooter } from '@/components/marketing/LandingFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <Hero />
      <UseCases />
      <ChipOptimization />
      <ConsequentialLearning />
      <Pricing />
      <LandingFooter />
    </div>
  );
}
