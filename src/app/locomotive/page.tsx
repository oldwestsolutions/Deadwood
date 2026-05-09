import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LocomotiveExperience } from '@/components/marketing/LocomotiveExperience';
import { LandingFooter } from '@/components/marketing/LandingFooter';

export const metadata: Metadata = {
  title: 'Locomotive™ — Infinite Learning Model — Deadwood',
  description:
    'Explore Locomotive™, Deadwood’s Infinite Learning Model: continuous improvement on your data with auditable, ledger-native usage.',
};

export default function LocomotivePage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <LocomotiveExperience />
      <LandingFooter />
    </div>
  );
}
