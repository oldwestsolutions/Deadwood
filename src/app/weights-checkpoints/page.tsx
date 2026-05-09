import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { WeightsCheckpointsContent } from '@/components/marketing/WeightsCheckpointsContent';

export const metadata: Metadata = {
  title: 'Weights & Checkpoints — Deadwood Premium',
  description:
    'How Deadwood runs cybernetic learning for Premium: feedback loops, checkpoint versioning, automated retraining, promotion, and observability.',
};

export default function WeightsCheckpointsPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <WeightsCheckpointsContent />
      <LandingFooter />
    </div>
  );
}
