import type { Metadata } from 'next';
import Link from 'next/link';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';

export const metadata: Metadata = {
  title: 'Technical whitepaper — Deadwood',
  description:
    'Architecture and economics of Deadwood: preference learning API, warehouse-native training, token settlement, and Enterprise deployment patterns.',
};

const sections: { id: string; title: string; body: string[] }[] = [
  {
    id: 'abstract',
    title: 'Abstract',
    body: [
      'Deadwood is compute infrastructure for supervised preference learning and production inference. Teams integrate a single API, train models against governed data sources—including Snowflake warehouses without bulk export—and route predictions through versioned deployments.',
      'This note summarizes control planes, metering, and settlement assumptions buyers evaluate alongside Premium and Enterprise contracts.',
    ],
  },
  {
    id: 'warehouse-native-training',
    title: 'Warehouse-native training',
    body: [
      'Premium connects your Snowflake account under credentials you issue. Training jobs submit authorized queries; large datasets remain in your cloud boundary. Deadwood charges for orchestration, training units, and API usage—Snowflake bills query compute separately unless Enterprise terms include a dedicated cluster envelope.',
    ],
  },
  {
    id: 'metering',
    title: 'Metering and SLAs',
    body: [
      'API calls, training runs, and model swaps are counted per workspace. Dashboards expose usage, tier limits, and overage math. Accelerator and Autonomous SKUs (where offered) publish uptime targets; incident response follows subscribed notification channels.',
    ],
  },
  {
    id: 'settlement',
    title: 'Settlement and treasury',
    body: [
      'Premium maps usage to real-time Avalanche postings for auditable balances and creator payouts where marketplace features apply. Local and Enterprise variants may batch or alternate chains per contract—implementation detail is pinned in order forms.',
    ],
  },
  {
    id: 'security',
    title: 'Security posture',
    body: [
      'Transport uses TLS; Premium advertises SOC 2 Type II and GDPR-aligned processing with encryption at rest for Deadwood-managed artifacts. Customer VPC peering, SSO, and residency are Enterprise negotiation items.',
    ],
  },
  {
    id: 'next-steps',
    title: 'Next steps',
    body: [
      'For tier limits, Snowflake billing split, and trial mechanics, see the FAQ on the Snowflake Premium page. For custom data residency, SLAs, or warehouse topology, route through sales with your architecture diagram.',
    ],
  },
];

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <article className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <header className="border-b border-white/[0.08] pb-12">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">Technical whitepaper</p>
          <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-tight text-dw-cream">
            Deadwood platform overview
          </h1>
          <p className="mt-5 font-sans text-base leading-relaxed text-dw-muted">
            A concise reference for engineers and procurement: how training touches your warehouse, how usage is metered,
            and how settlement aligns with production traffic.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/snowflake-premium"
              className="inline-flex items-center justify-center rounded-full bg-dw-tan px-7 py-3 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
            >
              Snowflake Premium
            </Link>
            <Link
              href="/snowflake-premium#premium-faq"
              className="inline-flex items-center justify-center rounded-full border border-dw-tan/35 px-7 py-3 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
            >
              FAQ
            </Link>
          </div>
        </header>

        <nav
          className="sticky top-[5.5rem] z-10 -mx-4 my-10 border-y border-white/[0.06] bg-dw-bg/90 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6"
          aria-label="Whitepaper sections"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dw-muted">On this page</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-sans text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-dw-muted transition-colors hover:text-dw-highlight">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-14">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className="font-display text-xl text-dw-cream sm:text-2xl">{s.title}</h2>
              <div className="mt-4 space-y-4 font-sans text-sm leading-relaxed text-dw-muted sm:text-[15px]">
                {s.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/[0.08] pt-10">
          <p className="font-mono text-xs text-dw-muted">
            Deadwood · revised periodically · not a legal instrument; order forms and DPAs prevail.
          </p>
        </footer>
      </article>
      <LandingFooter />
    </div>
  );
}
