import type { Metadata } from 'next';
import Link from 'next/link';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';

export const metadata: Metadata = {
  title: 'Snowflake Premium — Deadwood',
  description:
    'Premium tier: Snowflake-connected training, higher API and training limits, Avalanche settlement, and team workspace—sign up to connect repos and issue keys.',
};

export default function SnowflakePremiumPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <main className="mx-auto max-w-2xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">Snowflake Premium</p>
        <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3rem)] leading-tight tracking-tight text-dw-cream">
          Train at warehouse scale without exporting your data.
        </h1>
        <p className="mt-5 font-sans text-base leading-relaxed text-dw-muted">
          Connect your Snowflake account for query-in-place runs, higher API and training quotas, real-time Avalanche
          settlement, and a shared workspace from first experiment through production routing.
        </p>
        <ul className="mt-8 space-y-3 font-sans text-sm leading-relaxed text-dw-muted">
          <li className="flex gap-2">
            <span className="text-dw-tan">→</span>
            Link repos, mint API keys, and track model versions in one place.
          </li>
          <li className="flex gap-2">
            <span className="text-dw-tan">→</span>
            Billing and access are tier-managed—no hand-wired metering per project.
          </li>
          <li className="flex gap-2">
            <span className="text-dw-tan">→</span>
            Snowflake query costs stay on your Snowflake bill; see our{' '}
            <Link href="/faq" className="text-dw-highlight underline-offset-2 hover:underline">
              FAQ
            </Link>{' '}
            for details.
          </li>
        </ul>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/register?tier=premium"
            className="inline-flex items-center justify-center rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
          >
            Create workspace
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-full border border-dw-tan/35 px-8 py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
          >
            FAQ
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full border border-transparent px-6 py-3.5 text-sm font-medium text-dw-muted transition-colors hover:text-dw-highlight"
          >
            Sign in
          </Link>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
