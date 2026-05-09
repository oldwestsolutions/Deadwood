import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { TheBlueprintOffering } from '@/components/marketing/TheBlueprintOffering';

export const metadata: Metadata = {
  title: 'The Blueprint — Deadwood',
  description:
    'The Blueprint: train Deadwood models on petabyte-scale Snowflake warehouses without bulk exports—economics, security, timelines, and ROI in one brief.',
};

export default function TheBlueprintPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <TheBlueprintOffering />
      <LandingFooter />
    </div>
  );
}
