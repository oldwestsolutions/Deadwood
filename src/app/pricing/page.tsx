import { LandingFooter } from '@/components/marketing/LandingFooter';
import { NavBar } from '@/components/marketing/NavBar';
import { Pricing } from '@/components/marketing/Pricing';

export const metadata = {
  title: 'Pricing · Deadwood',
  description:
    'Deadwood pricing — Local (free), Premium ($99/mo with Snowflake), and Enterprise (custom) tiers compared.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <Pricing />
      <LandingFooter />
    </div>
  );
}
