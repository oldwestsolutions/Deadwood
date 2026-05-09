import type { Metadata } from 'next';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';
import { PricingFaqAccordion } from '@/components/marketing/PricingFaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ — Deadwood',
  description:
    'Answers about API calls, training runs, Snowflake integration, Avalanche settlement, and using Deadwood without Snowflake.',
};

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <main className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl text-dw-cream sm:text-4xl">FAQ</h1>
        <p className="mt-3 max-w-xl font-sans text-sm leading-relaxed text-dw-muted">
          Pricing, Snowflake, and platform basics—same answers we surface next to the Premium tier.
        </p>
        <PricingFaqAccordion className="mt-8" />
      </main>
      <LandingFooter />
    </div>
  );
}
