import Link from 'next/link';

export const metadata = {
  title: 'Accelerator · Deadwood',
  description:
    'Production ML for Claude via MCP — classification, inference, fine-tuning, and on-chain verification.',
};

export default function AcceleratorPricingPage() {
  return (
    <main className="mesh-layer topo-pattern min-h-screen">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-tan">Accelerator</p>
        <h1 className="mt-4 font-display text-4xl text-dw-cream sm:text-5xl">Upgrade to production ML</h1>
        <p className="mx-auto mt-6 max-w-lg font-sans text-base leading-relaxed text-dw-muted">
          Start your 14-day Accelerator trial — no credit card required. You get priority inference, private
          Snowflake, real-time on-chain verification, and API access to the Deadwood MCP.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/register?plan=accelerator"
            className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
          >
            Start 14-day trial
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex rounded-full border border-dw-tan/40 px-8 py-3.5 text-sm font-semibold text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]"
          >
            Compare plans
          </Link>
        </div>
      </div>
    </main>
  );
}
