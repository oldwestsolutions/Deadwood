import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { SnowflakePremiumOffering } from '@/components/marketing/SnowflakePremiumOffering';

export const metadata: Metadata = {
  title: 'Snowflake Premium — Deadwood',
  description:
    'Enterprise Snowflake Premium: train Deadwood models on petabyte-scale warehouses without bulk exports—economics, security, timelines, and ROI in one immersive brief.',
};

export default function SnowflakePremiumPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <SnowflakePremiumOffering />
      <LandingFooter />
    </div>
  );
}
