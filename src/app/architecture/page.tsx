import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { InfrastructureOffering } from '@/components/marketing/InfrastructureOffering';

export const metadata: Metadata = {
  title: 'Architecture — Deadwood',
  description:
    'Managed preference-learning infrastructure: API, training, storage, settlement, security, and SLAs—what you buy when you partner with Deadwood.',
};

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <InfrastructureOffering />
      <LandingFooter />
    </div>
  );
}
