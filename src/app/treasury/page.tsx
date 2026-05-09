import { CompareAtGlanceCompact } from '@/components/marketing/CompareAtGlanceCompact';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { NavBar } from '@/components/marketing/NavBar';

export const metadata = {
  title: 'Treasury · Deadwood',
  description:
    'Compare Deadwood tiers at a glance—Local, Premium, and Enterprise by usage, data scale, and operations maturity.',
};

export default function TreasuryPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 pb-16 pt-32 sm:px-5 lg:px-6">
        <CompareAtGlanceCompact />
      </main>
      <LandingFooter />
    </div>
  );
}
