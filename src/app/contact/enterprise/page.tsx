import Link from 'next/link';

export const metadata = {
  title: 'Enterprise · Deadwood',
  description: 'Dedicated infrastructure, compliance, and custom MCP extensions for Autonomous tier.',
};

export default function EnterpriseContactPage() {
  return (
    <main className="mesh-layer topo-pattern min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-tan">Autonomous</p>
        <h1 className="mt-4 font-display text-4xl text-dw-cream sm:text-5xl">Enterprise &amp; research</h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-dw-muted">
          Custom pricing for dedicated GPU clusters, private Snowflake, HIPAA / SOC2, and bespoke MCP
          extensions. Tell us about your workloads and we&apos;ll design an SLA that fits.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/support"
            className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
          >
            Contact sales
          </Link>
          <Link
            href="/pricing"
            className="inline-flex rounded-full border border-dw-tan/40 px-8 py-3.5 text-sm font-semibold text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]"
          >
            View pricing
          </Link>
        </div>
      </div>
    </main>
  );
}
