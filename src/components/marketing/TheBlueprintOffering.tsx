'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import {
  ArrowPathIcon,
  BoltIcon,
  CalculatorIcon,
  ChartBarIcon,
  ChevronDownIcon,
  EyeIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { GradientMesh } from '@/components/marketing/GradientMesh';
import { cn } from '@/lib/cn';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.52, ease: [0.22, 1, 0.36, 1] },
  }),
};

const glassCard =
  'rounded-[24px] border border-white/[0.09] bg-dw-surface/40 p-6 shadow-dw-lift backdrop-blur-xl sm:p-8';

export function TheBlueprintOffering() {
  return (
    <>
      <SnowflakeHero />
      <SnowflakeProblem />
      <SnowflakeSolution />
      <SnowflakeEconomics />
      <SnowflakeUseCases />
      <SnowflakePerformance />
      <SnowflakeSecurity />
      <SnowflakeTimeline />
      <SnowflakeCalculator />
      <SnowflakeCompareMatrix />
      <SnowflakeFAQ />
      <SnowflakeCaseStudies />
      <SnowflakePricingTiers />
      <SnowflakeWhyChoose />
      <SnowflakeFinalCTA />
    </>
  );
}

function SnowflakeIceWash() {
  return (
    <div
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_92%_42%,rgba(224,245,255,0.09)_0%,transparent_58%)]"
      aria-hidden
    />
  );
}

function SnowflakeHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pb-28">
      <GradientMesh />
      <SnowflakeIceWash />
      <div className="pointer-events-none absolute inset-0 bg-dw-bg/82" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-8"
        >
          <motion.p variants={fadeUp} custom={0} className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan">
            Warehouse-native blueprint
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="font-display text-[clamp(2.35rem,6vw,4.5rem)] leading-[1.06] tracking-tight text-dw-cream"
          >
            The Blueprint.
            <span className="mt-2 block">Train on petabytes.</span>
            <span className="mt-1 block text-dw-tan">Pay for efficiency.</span>
          </motion.h1>
          <motion.p variants={fadeUp} custom={2} className="font-sans text-lg font-medium text-dw-tan sm:text-xl">
            For enterprises with massive data. Deadwood plus Snowflake means models that learn from billions of rows—
            without bulk exports.
          </motion.p>
          <motion.p variants={fadeUp} custom={3} className="max-w-xl font-sans text-base leading-relaxed text-dw-muted">
            You may host hundreds of billions of trades, tens of billions of transactions, or petabytes of clinical
            history. Moving it to train models breaks compliance, blows egress budgets, and stalls teams. The Blueprint
            keeps data authoritative in your warehouse while Deadwood runs governed training queries,
            orchestrates jobs, and ships checkpoints back to your API. Snowflake consumption tiers improve as scale
            grows—so per-unit economics can improve while models improve. That is the flywheel finance and product
            both care about.
          </motion.p>
          <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4">
            <Link
              href="#blueprint-solution"
              className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
            >
              Explore The Blueprint
            </Link>
            <Link
              href="#blueprint-calculator"
              className="inline-flex rounded-full border border-dw-tan/40 px-8 py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
            >
              See pricing calculator
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className={cn(
            glassCard,
            'relative overflow-hidden shadow-[0_0_0_1px_rgba(224,245,255,0.06),0_24px_80px_rgba(0,0,0,0.5)]'
          )}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dw-muted">Warehouse-scale flow</p>
          <div className="mt-8 space-y-6">
            <div className="flex items-center gap-3 rounded-2xl border border-dw-snow/10 bg-dw-bg/40 px-4 py-3">
              <ServerStackIcon className="h-8 w-8 shrink-0 text-dw-snow/90" aria-hidden />
              <div>
                <p className="font-display text-sm text-dw-cream">Your Snowflake region</p>
                <p className="font-mono text-xs text-dw-muted">500B+ rows · encrypted · residency pinned</p>
              </div>
            </div>
            <motion.div
              className="flex justify-center"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden
            >
              <div className="h-10 w-px bg-gradient-to-b from-dw-tan via-dw-snow/40 to-dw-tan" />
            </motion.div>
            <div className="rounded-2xl border border-dw-tan/25 bg-dw-tan/10 px-4 py-4 text-center">
              <p className="font-display text-sm text-dw-cream">Deadwood training plane</p>
              <p className="mt-1 font-mono text-[11px] text-dw-muted">Governed reads · job orchestration · model artifacts</p>
            </div>
            <motion.div
              className="flex justify-center"
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
              aria-hidden
            >
              <div className="h-10 w-px bg-gradient-to-b from-dw-tan via-dw-snow/40 to-dw-tan" />
            </motion.div>
            <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-dw-surface/60 px-4 py-3">
              <BoltIcon className="h-8 w-8 shrink-0 text-dw-tan" aria-hidden />
              <div>
                <p className="font-display text-sm text-dw-cream">Your product</p>
                <p className="font-mono text-xs text-dw-muted">Personalized inference · metered tokens · audited promotions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SnowflakeProblem() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Why most enterprises cannot train AI</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">Data is too big. Compliance is too strict. Costs are too high.</p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className={glassCard}>
            <h3 className="font-display text-xl text-dw-tan">The problem</h3>
            <div className="mt-6 space-y-6 font-sans text-sm leading-relaxed text-dw-muted">
              <p>
                Picture a desk that already warehouses hundreds of billions of events. classical ML paths force ugly
                trade-offs:
              </p>
              <div>
                <p className="font-medium text-dw-cream">Option A — move data to another cloud</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Network transfers measured in weeks; egress measured in hundreds of thousands.</li>
                  <li>Compliance reviewers see regulated rows leaving the warehouse boundary.</li>
                  <li>Residency and lineage stories fracture right when auditors ask for proof.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-dw-cream">Option B — build local GPU factories</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>You hire for pipelines, observability, failover—and suddenly you run an ML infrastructure company.</li>
                  <li>Calendar time is measured in quarters before anything production-grade ships.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-dw-cream">Option C — generic ML SaaS</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Platforms still want extracts or opaque copies; Snowflake-native governance rarely survives.</li>
                  <li>Models skew generic because they never drink the full domain signal sitting in your warehouse.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={glassCard}>
            <h3 className="font-display text-xl text-dw-tan">What it costs (typical enterprise)</h3>
            <p className="mt-3 font-sans text-sm text-dw-muted">
              Illustrative desk moving hundreds of billions of rows daily—numbers compress reality but directionally match
              CFO conversations.
            </p>
            <pre className="mt-6 overflow-x-auto rounded-2xl border border-white/[0.07] bg-dw-bg/70 p-4 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
              {`Option A — export + external training
├ Egress + replication      $180K–550K / yr
├ GPU burst outside SF       bundled above
├ Pipeline engineering       ~$150K / yr
├ Compliance + audit        ~$100K / yr
└ Risk                      data leaves home region

Option C — generic ML SaaS + workarounds
├ Licenses                   ~$50K / yr
├ Export automation          ~$200K / yr
├ Shadow infra               ~$100K / yr
└ Consulting                 ~$50K / yr`}
            </pre>
            <p className="mt-4 font-sans text-sm text-dw-muted">
              The Blueprint is aimed at teams who refuse those defaults—keeping queries inside Snowflake while Deadwood
              owns orchestration, checkpoints, and inference semantics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SnowflakeSolution() {
  return (
    <section id="blueprint-solution" className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">
          Deadwood plus Snowflake equals train where your data lives
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-center font-sans text-base leading-relaxed text-dw-muted">
          You do not ship petabytes. Deadwood connects with least-privilege roles, reads approved views, streams batches into
          training workers, and lands model artifacts alongside your existing promotion gates.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-2">
          <pre className="rounded-[22px] border border-white/[0.08] bg-dw-surface/35 p-5 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
            {`Your Snowflake warehouse
├ hundreds of billions of rows (compressed)
├ residency + RBAC unchanged
└ billing stays on Snowflake meters

Deadwood connects in-region
├ governed SELECT surfaces
├ training jobs orchestrated
└ checkpoints + manifests exported securely

Outcomes
├ train on full history (not risky samples)
├ auditors see data stays put
└ economics improve as Snowflake tiers deepen`}
          </pre>
          <pre className="rounded-[22px] border border-dw-snow/10 bg-dw-bg/60 p-5 font-mono text-[11px] leading-relaxed text-dw-muted shadow-dw-glow-ice sm:text-xs">
            {`Traditional export path
Data → bulk extract → object store → train

The Blueprint path
Snowflake → Deadwood query plane → in-place training → API-ready models`}
          </pre>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-[22px] border border-dw-tan/20 bg-gradient-to-br from-dw-tan/10 via-dw-bg/40 to-dw-surface/40 p-6 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
          {`Private Snowflake cluster (your account)
      ↓ governed networking / private link
Deadwood API + training orchestration
      ├ reads approved tables / secure views
      ├ schedules warehouses sized for batch windows
      ├ streams features into Deadwood runners
      └ stores promoted weights + evaluation hooks
      ↓
Your apps — personalized scoring at production scale`}
        </div>
      </div>
    </section>
  );
}

function SnowflakeEconomics() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">How Snowflake volume economics compound</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Snowflake bills consumption. As trusted queries grow, negotiated tiers improve—Deadwood keeps orchestration
            predictable so finance can model both sides.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'Year 1 — prove the loop',
              lines: [
                'Snowflake queries ~$100K',
                'Deadwood Autonomous envelope ~$12K',
                'Discount tier: baseline',
                'Per-model cost highest while patterns stabilize',
              ],
            },
            {
              title: 'Year 2 — expand coverage',
              lines: [
                'Snowflake queries ~$200K → ~$170K after tier relief',
                'Deadwood envelope steady (~$12K)',
                'More models amortize orchestration',
                'Product metrics justify broader schedules',
              ],
            },
            {
              title: 'Year 3 — enterprise cadence',
              lines: [
                'Snowflake queries ~$500K → ~$350K after deeper tiers',
                'Deadwood remains contracted—not a surprise line item',
                'Per-model economics fall as automation hardens',
                'Ops budgets shift from exports to insights',
              ],
            },
          ].map((col) => (
            <div key={col.title} className={cn(glassCard, 'hover:shadow-dw-glow-ice transition-shadow')}>
              <h3 className="font-display text-lg text-dw-tan">{col.title}</h3>
              <ul className="mt-4 space-y-2 font-sans text-sm text-dw-muted">
                {col.lines.map((line) => (
                  <li key={line}>• {line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <pre className="mx-auto mt-10 max-w-4xl overflow-x-auto rounded-[22px] border border-white/[0.08] bg-dw-surface/30 p-6 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
          {`Flywheel (honest version — requires disciplined scheduling)

More governed data in Snowflake
    → bigger compliant training batches
    → Snowflake consumption tiers improve
    → lower unit cost per training hour
    → room for more models / richer personalization
    → better product metrics + fresher telemetry
    → cycle repeats (finance + compliance stay aligned)`}
        </pre>
      </div>
    </section>
  );
}

function SnowflakeUseCases() {
  const cases = [
    {
      Icon: ChartBarIcon,
      title: 'Quantitative trading desk',
      scale: '500B+ historical trades · 1B+ new prints daily',
      problem:
        'Managers want personalization against full tape history. Exports torch compliance budgets and Sharpe wins disappear under latency.',
      solution:
        'The Blueprint trains manager-scoped models directly in the warehouse—styles, risk envelopes, and conviction profiles stay encoded without shipping the tape.',
      bullets: ['Training footprint: full-history batches', 'Schedule: monthly refresh windows (configurable)', ' economics align with Snowflake tiers—not surprise egress'],
    },
    {
      Icon: ShoppingBagIcon,
      title: 'Global retailer',
      scale: '10B+ transactions · 100M+ shoppers',
      problem:
        'Category-specific taste vectors need full baskets. Legacy personalization vendors choke when extracts stall or anonymization strips signal.',
      solution:
        'Category models train inside Snowflake; merchandising, search, and lifecycle campaigns reuse the same governed features.',
      bullets: ['Separate models per major category', 'Weekly schedule typical for seasonal assortments', 'Finance sees Snowflake + Deadwood split clearly'],
    },
    {
      Icon: ShieldCheckIcon,
      title: 'Healthcare network',
      scale: 'Petabytes of clinical history · billions of structured events',
      problem:
        'Precision pathways need longitudinal records. HIPAA and state privacy rules make export-first ML non-starters.',
      solution:
        'Models train in-place with residency pinned; clinicians consume suggestions through existing Epic/Cerner hooks while Deadwood handles checkpoints.',
      bullets: ['Models for dosing, risk, throughput planning', 'Monthly or streaming cadence depending on ward', 'Compliance artifacts attach to known warehouse RBAC'],
    },
    {
      Icon: PresentationChartLineIcon,
      title: 'Enterprise analytics platform',
      scale: 'Billions of tenant events · multi-tenant warehouses',
      problem:
        'Customer-specific insights stall when every tenant demands bespoke extracts.',
      solution:
        'Each tenant keeps data in their Snowflake; Deadwood orchestrates isolated training envelopes per contract.',
      bullets: ['Anomaly + lifecycle models per tenant', 'Clear attribution for finance / CS workflows', 'Expansion revenue tied to measurable insight adoption'],
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">What enterprises do with The Blueprint</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Applications that only make sense when the warehouse—not a CSV dump—is the source of truth.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cases.map(({ Icon, ...c }) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45 }}
              className={cn(glassCard, 'flex flex-col hover:border-dw-snow/15 transition-colors')}
            >
              <Icon className="h-9 w-9 text-dw-tan" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-dw-cream">{c.title}</h3>
              <p className="mt-1 font-mono text-xs text-dw-snow/80">{c.scale}</p>
              <p className="mt-4 font-sans text-sm font-medium text-dw-tan">Challenge</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-dw-muted">{c.problem}</p>
              <p className="mt-4 font-sans text-sm font-medium text-dw-tan">Deadwood layer</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-dw-muted">{c.solution}</p>
              <ul className="mt-4 space-y-1 font-sans text-sm text-dw-cream">
                {c.bullets.map((b) => (
                  <li key={b}>↗ {b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowflakePerformance() {
  const rows = [
    ['1M rows', '~10 sec', '~$0.01', 'Prototype / QA'],
    ['100M rows', '2–5 min', '$1–3', 'Daily refresh apps'],
    ['1B rows', '5–15 min', '$10–30', 'Weekly warehouse batches'],
    ['10B rows', '15–45 min', '$100–300', 'Category-scale retailers'],
    ['100B rows', '30–90 min', '$1K–3K', 'Enterprise desks'],
    ['500B rows', '45–120 min', '$5K–15K', 'Mega funds · quarterly refreshes'],
    ['1T+ rows', '2–4 hr', '$20K–50K', 'Petabyte lanes (scoped warehouses)'],
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Training speed and cost at different scales</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Numbers vary with schema width, clustering, and warehouse size—below is how planners bracket budgets before a
            scoped pilot.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className={glassCard}>
            <h3 className="font-display text-lg text-dw-cream">100 million rows</h3>
            <p className="mt-2 font-mono text-xs text-dw-muted">2–5 minutes typical · Snowflake spend $0.50–2</p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-dw-muted">
              Accelerator-friendly footprint for teams validating personalization loops before expanding schedules.
            </p>
          </div>
          <div className={cn(glassCard, 'shadow-dw-glow-ice')}>
            <h3 className="font-display text-lg text-dw-cream">500 billion rows</h3>
            <p className="mt-2 font-mono text-xs text-dw-muted">45–120 minutes · Snowflake spend $5K–15K per heavy refresh</p>
            <p className="mt-4 font-sans text-sm leading-relaxed text-dw-muted">
              Autonomous engagements dedicate warehouses, throttle concurrency, and attach finance dashboards so ops see
              spikes before invoices—not after.
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-[22px] border border-white/[0.08]">
          <table className="min-w-full divide-y divide-white/[0.06] font-sans text-sm">
            <thead className="bg-dw-surface/40 text-left text-xs uppercase tracking-wide text-dw-muted">
              <tr>
                <th className="px-4 py-3">Data size</th>
                <th className="px-4 py-3">Wall time</th>
                <th className="px-4 py-3">Snowflake envelope</th>
                <th className="px-4 py-3">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-dw-muted">
              {rows.map(([size, time, cost, note]) => (
                <tr key={size} className="bg-dw-bg/40">
                  <td className="px-4 py-3 font-mono text-xs text-dw-cream">{size}</td>
                  <td className="px-4 py-3">{time}</td>
                  <td className="px-4 py-3">{cost}</td>
                  <td className="px-4 py-3">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center font-sans text-sm text-dw-muted">
          Snowflake parallelizes large scans—cost rarely grows linearly with row multiples. Deadwood helps sequence jobs so
          operational warehouses stay untouched during peak reporting.
        </p>
      </div>
    </section>
  );
}

function SnowflakeSecurity() {
  const pillars = [
    {
      Icon: GlobeAltIcon,
      title: 'Data residency',
      body: 'Stay inside the Snowflake region your counsel approved. Deadwood issues queries from that boundary—no surprise cross-border copies for training.',
      specs: ['Region pinning by contract', 'Replication only where you enable it', 'GDPR / CCPA workflows supported'],
    },
    {
      Icon: LockClosedIcon,
      title: 'Encryption and RBAC',
      body: 'TLS 1.3 in transit, AES-256 at rest, reader roles scoped to explicit views. Audit logs tie each training batch to a service identity.',
      specs: ['Least-privilege connectors', 'Short-lived credential patterns', 'Immutable query history for auditors'],
    },
    {
      Icon: ShieldCheckIcon,
      title: 'Certified stacks',
      body: 'Snowflake maintains SOC 2 Type II, ISO 27001, HIPAA BAA paths, PCI surfaces. Deadwood maps controls without weakening those attestations.',
      specs: ['Shared responsibility model documented', 'DPAs available on Autonomous', 'Customer-managed keys where required'],
    },
    {
      Icon: ArrowPathIcon,
      title: 'Disaster recovery',
      body: 'Leverage Snowflake Time Travel and failover regions; Deadwood stores manifests so you can replay promotions after recovery drills.',
      specs: ['90-day rollback windows (Snowflake dependent)', 'Cross-region rehearsal plans', 'Checkpoint duplication policies'],
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Security and compliance at warehouse scale</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            The Blueprint keeps sensitive planes aligned—legal stays happy, engineers stay shipping.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ Icon, ...p }) => (
            <div key={p.title} className={cn(glassCard, 'flex flex-col hover:shadow-dw-glow-ice transition-shadow')}>
              <Icon className="h-8 w-8 text-dw-tan" aria-hidden />
              <h3 className="mt-4 font-display text-lg text-dw-cream">{p.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">{p.body}</p>
              <ul className="mt-4 space-y-1 font-sans text-xs text-dw-muted">
                {p.specs.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowflakeTimeline() {
  const steps = [
    {
      Icon: UserGroupIcon,
      title: 'Sales and architecture review',
      time: 'Week 1',
      detail:
        'Joint session with Deadwood solutions architects: warehouse topology, sensitive datasets, training cadence, compliance artifacts. Output includes program plan plus commercial envelope.',
      effort: '~4 sponsor hours',
    },
    {
      Icon: WrenchScrewdriverIcon,
      title: 'Connect Snowflake securely',
      time: 'Weeks 2–3',
      detail:
        'Provision reader roles, network paths (private link / VPN), validate query plans, and dry-run cost telemetry on non-prod warehouses.',
      effort: '~8–16 DBA hours',
    },
    {
      Icon: RocketLaunchIcon,
      title: 'Pilot model',
      time: 'Weeks 3–4',
      detail:
        'Pick one monetizable workflow, finalize feature SQL, train first checkpoint, evaluate offline + shadow traffic, then promote via API.',
      effort: '~16–24 PM + engineer hours',
    },
    {
      Icon: ChartBarIcon,
      title: 'Scale programs',
      time: 'Week 5 onward',
      detail:
        'Automate schedules, monitor drift dashboards, tune warehouses with finance, and queue the next domains on the roadmap.',
      effort: 'Ongoing joint steering',
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">From evaluation to production</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Most desks reach a production checkpoint in four to six weeks; portfolio-scale rollouts stretch based on model
            fan-out.
          </p>
        </div>
        <div className="relative mx-auto mt-14 max-w-3xl space-y-8">
          <div className="absolute left-[19px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-dw-tan via-dw-snow/30 to-dw-tan sm:block" aria-hidden />
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="relative flex gap-6 sm:gap-8"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dw-tan/40 bg-dw-surface/80 text-dw-tan">
                <s.Icon className="h-5 w-5" aria-hidden />
              </div>
              <div className={cn(glassCard, 'flex-1')}>
                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-display text-xl text-dw-cream">{s.title}</h3>
                  <span className="font-mono text-xs uppercase tracking-wide text-dw-snow/90">{s.time}</span>
                </div>
                <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">{s.detail}</p>
                <p className="mt-3 font-mono text-xs text-dw-highlight">Your investment: {s.effort}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <pre className="mx-auto mt-12 max-w-3xl rounded-[22px] border border-white/[0.08] bg-dw-surface/30 p-5 font-mono text-[11px] text-dw-muted sm:text-xs">
          {`Typical milestones
• First governed query → week 2
• First promoted model → week 4–6
• Portfolio automation → quarter roadmap`}
        </pre>
      </div>
    </section>
  );
}

function SnowflakeCalculator() {
  const sizeOptions = [
    { label: '100M rows', rows: 1e8, base: 2 },
    { label: '1B rows', rows: 1e9, base: 25 },
    { label: '10B rows', rows: 1e10, base: 180 },
    { label: '100B rows', rows: 1e11, base: 1400 },
    { label: '500B rows', rows: 5e11, base: 5200 },
    { label: '1T rows', rows: 1e12, base: 9500 },
  ];
  const freqOptions = [
    { label: 'Daily', mult: 22 },
    { label: 'Weekly', mult: 4.3 },
    { label: 'Monthly', mult: 1 },
  ];

  const [sizeIdx, setSizeIdx] = useState(4);
  const [freqIdx, setFreqIdx] = useState(2);
  const [models, setModels] = useState(120);

  const estimate = useMemo(() => {
    const { base } = sizeOptions[sizeIdx];
    const { mult } = freqOptions[freqIdx];
    const modelFactor = 1 + Math.min(models, 1000) / 400;
    const rawSnowflake = base * mult * modelFactor;
    const discount =
      sizeIdx >= 4 ? 0.28 : sizeIdx >= 3 ? 0.22 : sizeIdx >= 2 ? 0.15 : sizeIdx >= 1 ? 0.08 : 0;
    const snowflake = rawSnowflake * (1 - discount);
    const deadwood = sizeIdx >= 3 ? 3500 : sizeIdx >= 2 ? 2000 : 1000;
    const total = snowflake + deadwood;
    const perModel = total / Math.max(models, 1);
    return {
      snowflake: Math.round(snowflake),
      deadwood,
      total: Math.round(total),
      perModel: Math.round(perModel),
      discountPct: Math.round(discount * 100),
    };
  }, [freqIdx, models, sizeIdx]);

  return (
    <section id="blueprint-calculator" className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Economics calculator · The Blueprint</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Interactive planner—outputs are directional. Final numbers come from joint telemetry during onboarding.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className={cn(glassCard, 'space-y-6')}>
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-dw-muted">Rows per training batch</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {sizeOptions.map((opt, i) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => setSizeIdx(i)}
                    className={cn(
                      'rounded-full px-3 py-1.5 font-mono text-xs transition-colors',
                      sizeIdx === i
                        ? 'bg-dw-tan text-dw-bg'
                        : 'border border-white/[0.1] text-dw-muted hover:border-dw-tan/40'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-dw-muted">Training cadence</label>
              <select
                value={freqIdx}
                onChange={(e) => setFreqIdx(Number(e.target.value))}
                className="mt-3 w-full rounded-2xl border border-white/[0.12] bg-dw-bg/70 px-4 py-3 font-sans text-sm text-dw-cream focus:border-dw-tan focus:outline-none"
              >
                {freqOptions.map((opt, i) => (
                  <option key={opt.label} value={i}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="flex justify-between font-mono text-xs uppercase tracking-wide text-dw-muted">
                <span>Parallel model programs</span>
                <span className="text-dw-tan">{models}</span>
              </label>
              <input
                type="range"
                min={1}
                max={1000}
                value={models}
                onChange={(e) => setModels(Number(e.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-dw-surface accent-dw-tan"
              />
            </div>
          </div>

          <div className={cn(glassCard, 'border-dw-snow/15 shadow-dw-glow-ice space-y-4')}>
            <p className="font-mono text-xs uppercase tracking-wide text-dw-muted">Monthly envelope (illustrative)</p>
            <div className="space-y-2 font-mono text-sm text-dw-muted">
              <p>
                Snowflake queries (~after {estimate.discountPct}% tier relief):{' '}
                <span className="text-dw-cream">${estimate.snowflake.toLocaleString()}</span>
              </p>
              <p>
                Deadwood orchestration envelope: <span className="text-dw-cream">${estimate.deadwood.toLocaleString()}</span>
              </p>
              <p className="border-t border-white/[0.08] pt-3 text-dw-tan">
                Total ≈ ${estimate.total.toLocaleString()} / mo · ~${estimate.perModel}/model-month at current inputs
              </p>
            </div>
            <p className="font-sans text-xs leading-relaxed text-dw-muted">
              Includes governed training orchestration, API metering hooks, and dashboard exports. Excludes your internal
              staffing, optional archival tiers, and burst GPU surcharges typed in Autonomous statements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SnowflakeCompareMatrix() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">The Blueprint versus alternatives</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Executive framing—every alternative leaks either data, calendar time, or CFO credibility at petabyte scale.
          </p>
        </div>
        <div className="mt-12 overflow-x-auto rounded-[22px] border border-white/[0.08]">
          <table className="min-w-[720px] w-full divide-y divide-white/[0.06] font-sans text-sm">
            <thead className="bg-dw-surface/45 text-left text-xs uppercase tracking-wide text-dw-muted">
              <tr>
                <th className="px-4 py-3">Capability</th>
                <th className="px-4 py-3">DIY cloud</th>
                <th className="px-4 py-3">Generic ML SaaS</th>
                <th className="px-4 py-3 text-dw-tan">The Blueprint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-dw-muted">
              {[
                ['Train on petabyte tables', 'Possible — expensive', 'Usually blocked without export', 'Native query-in-place'],
                ['Data residency story', 'Your burden', 'Often weakened', 'Anchored to Snowflake region'],
                ['Calendar to production', '12–18 mo', '3–6 mo', '4–8 weeks typical pilot'],
                ['Engineering load', '5+ specialists', '2–3 integrators', '0.5–1 embedded partner'],
                ['Financial transparency', 'Opaque', 'Opaque bundles', 'Snowflake + Deadwood split'],
              ].map(([cap, diy, gen, prem]) => (
                <tr key={cap as string} className="bg-dw-bg/35">
                  <td className="px-4 py-3 font-medium text-dw-cream">{cap}</td>
                  <td className="px-4 py-3">{diy}</td>
                  <td className="px-4 py-3">{gen}</td>
                  <td className="px-4 py-3 text-dw-cream">{prem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

const faqItems: { q: string; a: string }[] = [
  {
    q: 'Do we need to redesign our Snowflake deployment?',
    a: 'No material redesign. Deadwood attaches via governed readers and explicit views. Production schemas stay untouched beyond optional secure views for training slices.',
  },
  {
    q: 'How long does a trillion-row refresh take?',
    a: 'Expect roughly two to four wall-clock hours with appropriately sized warehouses—schema width and clustering matter more than headline row counts.',
  },
  {
    q: 'Can we train hundreds of models concurrently?',
    a: 'Yes, with sequencing rules so warehouses stay healthy. Most desks dedicate Snowflake capacity to Deadwood batches during off-peak finance windows.',
  },
  {
    q: 'What happens when a training job fails?',
    a: 'Automatic retries with backoff, paging on-call, and joint debugging sessions if Snowflake surfaces errors we cannot classify automatically.',
  },
  {
    q: 'How do we control cadence?',
    a: 'Schedules live in Deadwood with finance-approved ceilings. Daily refreshes cost more Snowflake credits than monthly portfolio runs—that trade-off stays explicit.',
  },
  {
    q: 'Will training starve operational queries?',
    a: 'Not when warehouses are isolated. Autonomous engagements document burst ceilings and autoscale policies so BI dashboards stay responsive.',
  },
  {
    q: 'Can data span multiple Snowflake regions?',
    a: 'Yes with replication-aware planning. Most regulated desks train locally per region to keep GDPR and state privacy narratives simple.',
  },
  {
    q: 'Will Deadwood help tune Snowflake spend?',
    a: 'We ship anomaly alerts, clustering suggestions, and warehouse sizing reviews alongside Snowflake account teams.',
  },
  {
    q: 'Is there a mandated Snowflake commit?',
    a: 'Deadwood does not force Snowflake commits—you negotiate consumption contracts directly. We interoperate with Standard and Business Critical editions.',
  },
  {
    q: 'How is the connector secured?',
    a: 'Private connectivity paths, hardware-backed secrets, read-only roles, per-query audit trails, and optional customer-managed keys.',
  },
  {
    q: 'Can we disconnect later?',
    a: 'Yes. Models export in portable formats; configs extract as Infrastructure-as-code style manifests. Notice windows match your enterprise agreement.',
  },
  {
    q: 'What happens during Snowflake maintenance?',
    a: 'Training pauses gracefully and resumes after Snowflake completes work—no manual babysitting required.',
  },
  {
    q: 'Do you offer sandbox pilots?',
    a: 'Yes—six-week pilots pair Deadwood engineers with your warehouse admins before expanding schedules.',
  },
  {
    q: 'How do finance leaders review ROI?',
    a: 'Dashboards tie personalization lift hypotheses to Snowflake credits + Deadwood envelopes so ROI math stays traceable.',
  },
  {
    q: 'Can MSP partners operate The Blueprint?',
    a: 'Partner-led operations are supported under Autonomous statements with joint governance checkpoints.',
  },
];

function SnowflakeFAQ() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Common questions</h2>
        <div className="mt-10 space-y-2">
          {faqItems.map((item) => (
            <Disclosure key={item.q} as="div" className="rounded-[18px] border border-white/[0.08] bg-dw-surface/35">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-sans text-sm font-medium text-dw-cream transition-colors hover:bg-white/[0.03]">
                    {item.q}
                    <ChevronDownIcon className={cn('h-5 w-5 shrink-0 text-dw-muted transition-transform', open && 'rotate-180')} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="border-t border-white/[0.06] px-5 pb-4 pt-2 font-sans text-sm leading-relaxed text-dw-muted">
                    {item.a}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowflakeCaseStudies() {
  const studies = [
    {
      title: 'Quant desk (illustrative)',
      stats: ['500B trades materialized', '500 portfolio leads', 'Monthly refresh cadence'],
      challenge:
        'Personalization stalled behind export approvals; Sharpe uplift hypotheses could not be tested on complete tape history.',
      outcome:
        'The Blueprint trained manager-local models in-region; promotion latency dropped from quarters to weeks.',
      metrics: ['Risk-reviewed connectors in under six weeks', 'Snowflake spend tracked beside Deadwood orchestration'],
    },
    {
      title: 'Global retailer (illustrative)',
      stats: ['10B loyalty transactions', 'Eight category loops', 'Weekly merchandising refresh'],
      challenge:
        'Recommendation vendors demanded brittle extracts; privacy counsel blocked repeated copies.',
      outcome:
        'Category-specific embeddings train directly inside Snowflake while storefront APIs consume Deadwood checkpoints.',
      metrics: ['Inline experimentation without duplicate lakes', 'Finance-ready attribution dashboards'],
    },
    {
      title: 'Healthcare network (illustrative)',
      stats: ['Petabyte-scale EHR slices', 'Twelve clinical workflows', 'HIPAA-aligned controls'],
      challenge:
        'Clinical intelligence pilots died whenever data left the accredited boundary.',
      outcome:
        'Care pathways score inside Snowflake; bedside apps pull inference envelopes controlled by existing IAM.',
      metrics: ['Compliance cycle shortened vs DIY ML platforms', 'Repeatable audit packets per training batch'],
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">How enterprises adopt The Blueprint</h2>
          <p className="mt-4 font-sans text-sm text-dw-muted">
            Illustrative composites—swap in your logos once legal clears references.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {studies.map((s) => (
            <article key={s.title} className={cn(glassCard, 'flex flex-col')}>
              <h3 className="font-display text-xl text-dw-cream">{s.title}</h3>
              <ul className="mt-3 space-y-1 font-mono text-xs text-dw-snow/85">
                {s.stats.map((x) => (
                  <li key={x}>• {x}</li>
                ))}
              </ul>
              <p className="mt-4 font-sans text-sm font-medium text-dw-tan">Challenge</p>
              <p className="mt-1 font-sans text-sm text-dw-muted">{s.challenge}</p>
              <p className="mt-4 font-sans text-sm font-medium text-dw-tan">Outcome</p>
              <p className="mt-1 font-sans text-sm text-dw-muted">{s.outcome}</p>
              <ul className="mt-4 space-y-1 font-sans text-xs text-dw-highlight">
                {s.metrics.map((m) => (
                  <li key={m}>↗ {m}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowflakePricingTiers() {
  const tiers = [
    {
      name: 'Snowflake Starter',
      price: '$500 / mo',
      for: 'Teams validating The Blueprint on sub–10B-row batches',
      bullets: [
        'Read-only integration',
        'Up to five trainings / month',
        'Single primary use case',
        'Email support (24-hour targets)',
        '10K API calls included',
      ],
    },
    {
      name: 'Snowflake Professional',
      price: '$2,000 / mo',
      for: 'Production desks spanning 10B–500B rows',
      featured: true,
      bullets: [
        'Unlimited model programs (fair-use guardrails)',
        'Custom cadence + warehouse co-management',
        '100K API calls included',
        'Slack + email with four-hour targets',
        'Cost telemetry + Snowflake discount negotiations supported',
      ],
    },
    {
      name: 'Snowflake Enterprise',
      price: 'Custom · from $5K / mo',
      for: 'Petabyte lanes, multi-region, embedded engineers',
      bullets: [
        'Dedicated Deadwood engineer',
        'Real-time or batched schedules',
        'Custom SLAs + residency attestations',
        'Quarterly architecture reviews',
        'Joint roadmap + Snowflake partner alignment',
      ],
    },
  ];

  return (
    <section id="blueprint-pricing" className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Pricing envelopes · The Blueprint</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Snowflake consumption stays on your Snowflake invoice; Deadwood bills orchestration, APIs, and premium support.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={cn(
                glassCard,
                t.featured && 'border-dw-tan/35 shadow-dw-glow-sm ring-1 ring-dw-tan/25 lg:-translate-y-1'
              )}
            >
              <p className="font-mono text-xs uppercase tracking-wide text-dw-muted">{t.name}</p>
              <p className="mt-3 font-display text-3xl text-dw-cream">{t.price}</p>
              <p className="mt-2 font-sans text-sm text-dw-muted">{t.for}</p>
              <ul className="mt-6 space-y-2 font-sans text-sm text-dw-muted">
                {t.bullets.map((b) => (
                  <li key={b}>✓ {b}</li>
                ))}
              </ul>
              <Link
                href="/contact/enterprise"
                className={cn(
                  'mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors',
                  t.featured
                    ? 'bg-dw-tan text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow'
                    : 'border border-dw-tan/35 text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]'
                )}
              >
                Talk to sales
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SnowflakeWhyChoose() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Why desks choose The Blueprint</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            One slide summary for steering committees comparing build, buy, or export paths.
          </p>
        </div>
        <div className="mt-12 overflow-x-auto rounded-[22px] border border-white/[0.08]">
          <table className="min-w-[680px] w-full divide-y divide-white/[0.06] font-sans text-sm">
            <thead className="bg-dw-surface/45 text-left text-xs uppercase tracking-wide text-dw-muted">
              <tr>
                <th className="px-4 py-3">Dimension</th>
                <th className="px-4 py-3">DIY</th>
                <th className="px-4 py-3">Generic SaaS</th>
                <th className="px-4 py-3 text-dw-tan">The Blueprint</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.05] text-dw-muted">
              {[
                ['Time to trust', 'Quarters–years', 'Months', 'Weeks for governed pilot'],
                ['Data narrative', 'Brittle exports', 'Opaque copies', 'Warehouse-native'],
                ['Finance clarity', 'Hidden infra tax', 'Bundled opaque', 'Dual transparency'],
                ['Lock-in risk', 'You maintain stack', 'Platform-bound', 'Portable checkpoints'],
              ].map(([d, a, b, c]) => (
                <tr key={d as string} className="bg-dw-bg/35">
                  <td className="px-4 py-3 font-medium text-dw-cream">{d}</td>
                  <td className="px-4 py-3">{a}</td>
                  <td className="px-4 py-3">{b}</td>
                  <td className="px-4 py-3 text-dw-cream">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center font-sans text-sm text-dw-muted">
          At warehouse scale the decisive question is whether personalization stays aligned with residency, finance, and
          velocity. The Blueprint is the lane built for yes on all three.
        </p>
      </div>
    </section>
  );
}

function SnowflakeFinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-section">
      <GradientMesh />
      <SnowflakeIceWash />
      <div className="pointer-events-none absolute inset-0 bg-dw-bg/88" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-display text-[clamp(2rem,4vw,2.85rem)] text-dw-cream">Ready to train at scale?</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              Icon: EyeIcon,
              title: 'See it live',
              body: 'Thirty-minute architecture drill with Deadwood + your warehouse admins.',
              href: '/contact/enterprise?intent=demo&product=the-blueprint',
              label: 'Schedule demo',
              variant: 'solid' as const,
            },
            {
              Icon: CalculatorIcon,
              title: 'Estimate costs',
              body: 'Dial row counts with finance in the room using the planner above.',
              href: '#blueprint-calculator',
              label: 'Open calculator',
              variant: 'outline' as const,
            },
            {
              Icon: RocketLaunchIcon,
              title: 'Pilot program',
              body: 'Six-week scoped pilot with clear promotion criteria.',
              href: '/contact/enterprise?intent=pilot&product=the-blueprint',
              label: 'Start pilot',
              variant: 'outline' as const,
            },
          ].map(({ Icon, ...c }) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -4 }}
              className={cn(glassCard, 'flex flex-col items-start shadow-dw-glow-ice')}
            >
              <Icon className="h-8 w-8 text-dw-tan" aria-hidden />
              <h3 className="mt-4 font-display text-xl text-dw-cream">{c.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-dw-muted">{c.body}</p>
              <Link
                href={c.href}
                className={cn(
                  'mt-6 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition-colors',
                  c.variant === 'solid'
                    ? 'bg-dw-tan text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow'
                    : 'border border-dw-tan/35 text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]'
                )}
              >
                {c.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
