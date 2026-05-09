'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  BeakerIcon,
  BoltIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ChevronDownIcon,
  CloudArrowUpIcon,
  CodeBracketSquareIcon,
  CpuChipIcon,
  CubeIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PlayIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  SignalIcon,
  UserGroupIcon,
  WalletIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { LayerGlyph } from '@/components/layers/layerIcons';
import { GradientMesh } from '@/components/marketing/GradientMesh';
import { CompareAtGlanceCompact } from '@/components/marketing/CompareAtGlanceCompact';
import { LAYER_SUMMARIES, type LayerSlug } from '@/content/intelligenceLayers';
import { cn } from '@/lib/cn';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const faqItems: { q: string; a: string }[] = [
  {
    q: 'How fast can I integrate Deadwood?',
    a: 'Most teams reach a first successful API call within hours. Production-hardening—auth, error handling, and UX—typically lands in one to two weeks depending on your release process. We publish SDK examples and reference flows to shorten that path.',
  },
  {
    q: 'Do you support GDPR or HIPAA-style controls?',
    a: 'We support GDPR-aligned processing and offer stronger assurance packages on Autonomous, including custom DPAs and residency discussions. Healthcare-style deployments are scoped per contract—talk to sales with your requirements.',
  },
  {
    q: 'Can I export models if I leave?',
    a: 'Yes. Checkpoints and manifests are yours contractually. Moving inference elsewhere is engineering work on your side; scale drives timeline. We publish export formats and migration guidance so you are not guessing.',
  },
  {
    q: 'What happens during an outage?',
    a: 'Accelerator and Autonomous carry written uptime targets. When incidents occur, we notify subscribed channels, staff an incident commander, and publish timelines until resolution. Catalyst receives best-effort status updates.',
  },
  {
    q: 'Can I bring my own Snowflake or warehouse?',
    a: 'Premium tiers are built around query-in-place patterns so massive datasets never turn into ad-hoc bulk exports. Your warehouse stays authoritative; Deadwood orchestrates governed jobs against it.',
  },
  {
    q: 'Will I get surprised by a giant bill?',
    a: 'Usage dashboards break down calls, trainings, and token movement. You can set alerts before spend crosses thresholds. Overage rates are published—no black-box invoicing.',
  },
  {
    q: 'What if Deadwood winds down?',
    a: 'Long-horizon backups and ledger anchors exist so artifacts remain recoverable independent of any single host. Contractual wind-down clauses describe export windows—we would rather you trust us because portability is real.',
  },
  {
    q: 'How do teams share access?',
    a: 'Accelerator supports workspace roles for admins and builders. Autonomous adds enterprise patterns—SSO integration, finer RBAC, and audit exports sized for compliance reviewers.',
  },
];

const OPT_EVAL_LAYER_SLUGS: LayerSlug[] = ['optimization', 'evaluation'];

export function InfrastructureOffering() {
  return (
    <>
      <InfraHero />
      <InfraWhatYouGet />
      <InfraHowItWorks />
      <InfraOptimizationEvaluation />
      <InfraUseCases />
      <InfraPricing />
      <InfraEconomics />
      <InfraBusinessModel />
      <InfraTCO />
      <InfraMigration />
      <InfraSecurity />
      <InfraGetStarted />
      <InfraFAQ />
    </>
  );
}

function InfraHero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pb-28">
      <GradientMesh />
      <div className="pointer-events-none absolute inset-0 bg-dw-bg/80" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_minmax(280px,400px)] lg:items-center lg:gap-16 lg:px-8">
        <div className="space-y-8">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan">
            Enterprise Infrastructure as a Service
          </p>
          <h1 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.08] tracking-tight text-dw-cream">
            Deadwood handles the infrastructure.
            <span className="mt-2 block">You handle the product.</span>
          </h1>
          <p className="font-sans text-lg font-medium text-dw-tan sm:text-xl">
            Managed preference learning, enterprise SLAs, transparent pricing. Focus on your users—we operate the
            stack underneath.
          </p>
          <p className="max-w-xl font-sans text-base leading-relaxed text-dw-muted">
            Deadwood is infrastructure you buy, not build. Integrate our API, let your users train models, and we run
            orchestration, storage, delivery, settlement, scaling, backups, and security monitoring. You pay for measured
            usage on published tiers. We publish uptime and latency targets where you sign a production tier—no DIY
            servers, no midnight pager unless it is your product choice.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/register?tier=accelerator&trial=14days"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Start free trial
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact/enterprise"
                className="inline-flex rounded-full border border-dw-tan/40 px-8 py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
              >
                Talk to sales
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] border border-white/[0.1] bg-dw-surface/45 p-8 shadow-dw-lift backdrop-blur-xl"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-dw-muted">Request flow</p>
          <div className="mt-8 flex flex-col gap-6">
            <FlowNode label="Your product" sub="Mobile · web · desk" accent="cream" />
            <motion.div
              className="flex justify-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRightIcon className="h-6 w-6 rotate-90 text-dw-tan sm:rotate-0" aria-hidden />
            </motion.div>
            <FlowNode label="Deadwood API" sub="Auth · routing · metering" accent="tan" />
            <motion.div
              className="flex justify-center"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.35 }}
            >
              <ArrowRightIcon className="h-6 w-6 rotate-90 text-dw-tan sm:rotate-0" aria-hidden />
            </motion.div>
            <div className="rounded-[20px] border border-dw-tan/20 bg-dw-bg/60 p-5">
              <p className="font-display text-lg text-dw-cream">Everything behind the API</p>
              <ul className="mt-3 space-y-2 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
                <li>Training orchestration · checkpoint storage</li>
                <li>Edge delivery · health monitoring</li>
                <li>Settlement · backups · failover</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const modelsWorkflowSteps = [
  {
    Icon: BeakerIcon,
    title: 'Training',
    body: 'Fit models against your datasets with the settings in `.deadwood.yml`—method, epochs, and data paths stay reviewable in git. Each run yields checkpoints you can promote when ready.',
  },
  {
    Icon: CodeBracketSquareIcon,
    title: 'Weights',
    body: 'Checkpoints are versioned artifacts: hashed bundles tied to commits, stored off-laptop with redundancy, and easy to roll back. You always know which parameters shipped with which release.',
  },
  {
    Icon: RocketLaunchIcon,
    title: 'Inference',
    body: 'Serve predictions from the weights marked `production: true`. Flip that flag in one commit and route traffic to the new bundle—no separate deploy dance, same push workflow your team already uses.',
  },
];

function InfraModelsWorkflow() {
  return (
    <section
      id="models-workflow"
      className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28"
      aria-labelledby="models-workflow-heading"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan">Models as code</p>
          <h2
            id="models-workflow-heading"
            className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] text-dw-cream"
          >
            Training, weights, and inference in git
          </h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-dw-muted">
            Manifests in <span className="font-mono text-dw-highlight">.deadwood.yml</span>, versioned checkpoints, and
            production routing—without a separate deploy step.
          </p>
        </div>
        <div className="relative mx-auto mt-14 max-w-6xl">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="pointer-events-none absolute left-[10%] right-[10%] top-[36px] z-0 hidden h-px origin-left bg-gradient-to-r from-dw-tan/15 via-dw-tan/45 to-dw-tan/15 lg:block"
          />
          <div className="relative z-[1] flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {modelsWorkflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-1 flex-col rounded-[22px] border border-white/[0.08] bg-dw-surface/35 p-6 backdrop-blur-[24px] transition-shadow hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)]"
              >
                <step.Icon className="h-10 w-10 text-dw-tan" aria-hidden />
                <h3 className="mt-4 font-display text-xl text-dw-cream">{step.title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-dw-muted">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowNode({
  label,
  sub,
  accent,
}: {
  label: string;
  sub: string;
  accent: 'cream' | 'tan';
}) {
  return (
    <div
      className={cn(
        'rounded-[18px] border px-5 py-4',
        accent === 'tan'
          ? 'border-dw-tan/35 bg-dw-tan/10'
          : 'border-white/[0.1] bg-dw-surface/50'
      )}
    >
      <p className={cn('font-display text-xl', accent === 'tan' ? 'text-dw-tan' : 'text-dw-cream')}>{label}</p>
      <p className="mt-1 font-sans text-xs text-dw-muted">{sub}</p>
    </div>
  );
}

function InfraWhatYouGet() {
  const cards = [
    {
      Icon: SignalIcon,
      title: 'Managed API',
      headline: 'Your users. Our edge.',
      body: 'HTTPS endpoints, routing, caching, and failover sit on our side. You integrate once; we absorb traffic spikes and maintain production hygiene.',
      specs: [
        'Target uptime: 99.9% on paid tiers',
        'Latency targets published per tier',
        'Autoscaling request plane',
        'Global delivery footprint',
        '24/7 monitoring with routed alerts',
      ],
      included: [
        'Managed TLS and rotation',
        'Zero-downtime configuration pushes',
        'Health checks with automatic reroute',
        'Usage telemetry exposed to your dashboard',
      ],
      avoid: ['Provisioning VMs', 'Patching load balancers', 'Capacity spreadsheets'],
    },
    {
      Icon: CpuChipIcon,
      title: 'Serverless training',
      headline: 'Users train. We execute.',
      body: 'Jobs spin up on demand, run isolated pipelines, persist checkpoints, and shut down idle workers—you pay for runtime and published token economics, not parked GPUs.',
      specs: [
        'Elastic concurrent training jobs',
        'Typical jobs finish in minutes, not days',
        'Optional large-GPU paths on Autonomous',
        'Reproducible manifests per run',
        'Streaming logs for operators',
      ],
      included: [
        'Queueing, retries, and backoff',
        'Hardware-aware execution profiles',
        'Automatic artifact packaging',
        'Failure notifications to your channels',
      ],
      avoid: ['Kubernetes babysitting', 'Manual cluster sizing', 'Notebook-only drift'],
    },
    {
      Icon: CubeIcon,
      title: 'Global model storage',
      headline: 'Train once. Serve everywhere.',
      body: 'Versioned weights live behind the API with immutable history. Hot copies fan out close to users; cold anchors exist for governance and disaster scenarios.',
      specs: [
        'Unlimited logical versions (fair-use on Catalyst)',
        'Replication across regions',
        'Edge caching for low-latency inference',
        'Git-adjacent audit trail',
        'Long-horizon archival partners (contractual)',
      ],
      included: [
        'Content-addressed bundles',
        'Instant promotion between versions',
        'Encrypted pipelines by default',
        'Restore drills available on Autonomous',
      ],
      avoid: ['Self-managed object stores', 'Manual CDN wiring', 'Silent overwrite of weights'],
    },
    {
      Icon: WalletIcon,
      title: 'Transparent token billing',
      headline: 'Pay for usage. See the ledger.',
      body: 'Calls and trainings meter into balances you can inspect in real time. Creator-market splits can ride the same rails when you enable marketplaces.',
      specs: [
        'Per-call economics published upfront',
        'Settlement batches or near-real-time by tier',
        'Exports for finance teams',
        'Spend alerts and caps',
        'Optional royalty rails for creators',
      ],
      included: [
        'Dashboards with attribution',
        'Immutable receipts where enabled',
        'Chargeback-friendly CSV exports',
        'Tiered batching on free experiments',
      ],
      avoid: ['Surprise line items', 'Opaque GPU minute math'],
    },
    {
      Icon: ShieldCheckIcon,
      title: 'Enterprise security posture',
      headline: 'Data stays governed.',
      body: 'Encryption in transit and at rest, tenant isolation, optional private networking, and audit trails sized for security questionnaires—not marketing promises.',
      specs: [
        'Modern TLS everywhere customer-facing',
        'Encrypted persistence layers',
        'GDPR-aware processing; HIPAA paths via contract',
        'Automated encrypted backups',
        'Custom DPAs on Autonomous',
      ],
      included: [
        'API key scoping and rotation guidance',
        'Role separation inside workspaces',
        'Immutable access logs (tiered retention)',
        'Incident response runbooks',
      ],
      avoid: ['Shared passwords', 'Mystery admin access'],
    },
    {
      Icon: UserGroupIcon,
      title: 'Support & SLAs',
      headline: 'Someone answers.',
      body: 'Operations engineers watch the fleet around the clock. Accelerator receives business-hour-plus urgent paths; Autonomous tightens response windows and adds named coverage.',
      specs: [
        'Always-on automated alerting',
        'Slack, email, or webhook routing',
        '4-hour target on Accelerator incidents',
        '1-hour executive paths on Autonomous',
        'Public status communication',
      ],
      included: [
        'Post-incident reviews on request',
        'Cost and latency tuning guidance',
        'Hands-on migration planning (Autonomous)',
        'Roadmap briefings for strategic partners',
      ],
      avoid: ['Ticket black holes', 'Unsupported weekends on paid tiers'],
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Enterprise Deadwood infrastructure</h2>
          <p className="mt-4 font-sans text-base text-dw-muted sm:text-lg">
            Everything required to ship personalization—operated as a service, not a science project.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="flex flex-col rounded-[24px] border border-white/[0.08] bg-dw-surface/40 p-8 backdrop-blur-xl transition-shadow hover:shadow-[0_16px_48px_rgba(201,169,110,0.08)]"
            >
              <c.Icon className="h-10 w-10 text-dw-tan" aria-hidden />
              <h3 className="mt-5 font-display text-2xl text-dw-cream">{c.title}</h3>
              <p className="mt-2 font-display text-lg text-dw-tan">{c.headline}</p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-dw-muted">{c.body}</p>
              <div className="mt-6 rounded-[16px] border border-white/[0.06] bg-dw-bg/50 p-4 font-mono text-[11px] leading-relaxed text-dw-muted sm:text-xs">
                {c.specs.map((s) => (
                  <p key={s}>
                    <span className="text-dw-tan">•</span> {s}
                  </p>
                ))}
              </div>
              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dw-highlight">Included</p>
                <ul className="mt-2 space-y-1.5 font-sans text-sm text-dw-muted">
                  {c.included.map((x) => (
                    <li key={x}>✓ {x}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 border-t border-white/[0.06] pt-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dw-muted">You skip</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {c.avoid.map((x) => (
                    <li
                      key={x}
                      className="rounded-pill border border-white/[0.08] px-3 py-1 font-sans text-xs text-dw-muted line-through decoration-dw-tan/50"
                    >
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const LOCAL_WORKFLOW_COMPACT = `Step 1: You train locally
├─ Run: deadwood train --config .deadwood.yml
├─ Local model trains on your data
└─ You validate it works

Step 2: You commit
├─ git add .deadwood.yml
├─ git commit -m "feat: trading_taste_v2 model, 98.2% accuracy"
└─ git push

Step 3: floppydisk.cc detects change
├─ Sees new model definition
├─ Trains trading_taste_v2 on remote GPUs (optional)
├─ Stores final weights on Filecoin
└─ Model is versioned, permanent, immutable

Step 4: You deploy
├─ Edit .deadwood.yml: set trading_taste_v2 to production: true
├─ git commit -m "deploy: trading_taste_v2 to production"
├─ git push
└─ Your app immediately uses new model (no downtime)

Step 5: Avalanche records it
├─ Transaction: "user_xyz swapped to trading_taste_v2"
├─ Timestamp: [timestamp]
├─ Model hash: [hash]
└─ Now immutably recorded

Result: New model in production. Perfect auditability. No manual deployment. No infrastructure thinking.`;

function InfraHowItWorks() {
  return (
    <section id="architecture-compare" className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <CompareAtGlanceCompact />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mt-8"
        >
          <h3 className="font-display text-sm text-dw-cream sm:text-base">Local git workflow</h3>
          <p className="mt-1 font-sans text-[11px] text-dw-muted sm:text-xs">
            Train locally, commit manifests, let floppydisk.cc pin artifacts, flip production in git, settle promotions on-chain.
          </p>
          <pre className="mt-2 max-h-[min(50vh,380px)] overflow-auto rounded-xl border border-white/[0.08] bg-[#0c0c0a]/95 p-3 font-mono text-[9px] leading-relaxed text-dw-muted sm:p-3.5 sm:text-[10px]">
            <code>{LOCAL_WORKFLOW_COMPACT}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
}

function InfraOptimizationEvaluation() {
  return (
    <section
      id="layers-intelligence"
      className="relative overflow-hidden border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_50%_at_50%_-8%,rgba(201,169,110,0.11)_0%,transparent_52%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 topo-pattern opacity-[0.18]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan">
            Before you widen traffic or flip production
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.85rem)] leading-[1.12] text-dw-cream">
            Optimization and evaluation
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-dw-muted sm:text-lg">
            <span className="text-dw-cream">Optimization</span> buys more quality per dollar from the hardware you already
            have. <span className="text-dw-cream">Evaluation</span> ties scores to the same commits as your weights—so
            promotions are measured, comparable, and explainable.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {OPT_EVAL_LAYER_SLUGS.map((slug) => (
            <InfraOptEvalLayerCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </section>
  );
}

function InfraOptEvalLayerCard({ slug }: { slug: LayerSlug }) {
  const L = LAYER_SUMMARIES[slug];
  const summary =
    slug === 'optimization'
      ? 'Tune batching and precision for your hardware so training and serving cost less.'
      : slug === 'evaluation'
        ? 'Score models on benchmarks tied to the same commits as your weights—know what changed before you promote.'
        : L.cardDesc;

  return (
    <div>
      <Link
        href={`/layers/${slug}`}
        aria-label={`${L.title} — open layer detail`}
        className="group block h-full rounded-[24px] focus:outline-none focus-visible:ring-2 focus-visible:ring-dw-tan focus-visible:ring-offset-2 focus-visible:ring-offset-dw-bg"
      >
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'flex h-full min-h-[220px] flex-col rounded-[24px] border border-white/[0.1] bg-gradient-to-br p-6 shadow-dw-lift backdrop-blur-xl transition-shadow duration-300 sm:p-8',
            L.cardTint,
            'hover:border-dw-tan/30 hover:shadow-[0_16px_48px_rgba(201,169,110,0.16)]'
          )}
        >
          <div className="flex items-start justify-center sm:justify-start">
            <LayerGlyph slug={slug} className="h-11 w-11 shrink-0 text-dw-tan sm:h-12 sm:w-12" aria-hidden />
          </div>
          <h3 className="mt-5 font-display text-2xl text-dw-cream sm:text-[1.65rem]">{L.title}</h3>
          <p className="mt-4 flex-1 font-sans text-sm leading-relaxed text-dw-muted">{summary}</p>
          <span className="mt-6 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-dw-highlight transition-colors group-hover:text-dw-tan">
            Layer detail →
          </span>
        </motion.div>
      </Link>
    </div>
  );
}

function InfraUseCases() {
  const cases = [
    {
      Icon: ChartBarIcon,
      title: 'Trading & markets',
      problem: 'Generic signals frustrate distinct trader personas—risk tolerances differ wildly.',
      solution:
        'Preference models rank scenarios per user, lifting engagement without exposing proprietary execution logic outside your compliance perimeter.',
      metrics: ['Longer qualified sessions', 'Higher repeat usage', 'Lower churn among power users'],
    },
    {
      Icon: GlobeAltIcon,
      title: 'Marketplaces & listings',
      problem: 'Static sorting wastes buyer attention; agents burn cycles on poor-fit inventory.',
      solution:
        'Learn aesthetic and constraint preferences, surface better matches first, and shorten the path from browse to commitment.',
      metrics: ['Faster qualified conversations', 'Higher conversion on premium inventory', 'Better partner NPS'],
    },
    {
      Icon: PlayIcon,
      title: 'Interactive games',
      problem: 'Uniform difficulty curves bleed casual and expert players alike.',
      solution:
        'Adapt pacing, seeds, and challenges from observed play styles—without shipping bespoke ML teams inside the studio.',
      metrics: ['Stronger DAU/WAU ratios', 'Longer sessions', 'Lift in monetization among engaged cohorts'],
    },
    {
      Icon: CloudArrowUpIcon,
      title: 'Feeds & creators',
      problem: 'One-size feeds collapse creator economics and tank engagement.',
      solution:
        'Rank with per-user taste models while preserving creator transparency—Deadwood handles training loops and delivery.',
      metrics: ['Higher meaningful interactions', 'Better creator retention', 'More efficient ad inventory'],
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">What Deadwood enables</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Patterns we see once APIs land—your vertical names will differ, but the mechanics repeat.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {cases.map((u, i) => (
            <motion.article
              key={u.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[24px] border border-white/[0.08] bg-dw-surface/35 p-8 backdrop-blur-xl"
            >
              <u.Icon className="h-9 w-9 text-dw-tan" />
              <h3 className="mt-4 font-display text-2xl text-dw-cream">{u.title}</h3>
              <p className="mt-3 font-sans text-sm font-medium text-dw-tan">Problem</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-dw-muted">{u.problem}</p>
              <p className="mt-4 font-sans text-sm font-medium text-dw-tan">Deadwood layer</p>
              <p className="mt-1 font-sans text-sm leading-relaxed text-dw-muted">{u.solution}</p>
              <ul className="mt-4 space-y-1 font-sans text-sm text-dw-cream">
                {u.metrics.map((m) => (
                  <li key={m}>↗ {m}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfraPricing() {
  return (
    <section id="infrastructure-pricing" className="border-t border-white/[0.06] bg-dw-bg py-section scroll-mt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Transparent pricing</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Published tiers, published overages, published SLAs—pick the envelope that matches your stage.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <PricingTier
            name="Catalyst"
            price="Free"
            tagline="Learn and prototype"
            bullets={[
              '1,000 API calls / month',
              '1 training job / month',
              'Community support',
              'Basic telemetry',
              'Batch settlement cadence',
            ]}
            limits="Smaller models · local data paths · fair-use guards"
            cta={{ label: 'Start free', href: '/register?tier=catalyst' }}
            emphasis={false}
          />
          <PricingTier
            name="Accelerator"
            price="$99 / mo"
            tagline="Production teams"
            bullets={[
              '100,000 API calls / month',
              '10 trainings / month',
              'Private workspaces',
              'Near-real-time settlement',
              'Email + Slack · 4-hour targets',
            ]}
            limits="Snowflake-forward integrations · optional GPU surcharges"
            cta={{ label: 'Start 14-day trial', href: '/register?tier=accelerator&trial=14days' }}
            emphasis
            note="Illustrative overages: extra calls and trainings billed at published meter rates—see dashboard before invoice."
          />
          <PricingTier
            name="Autonomous"
            price="Custom"
            tagline="Enterprise scale"
            bullets={[
              'Unlimited usage envelopes',
              'Dedicated compute + managers',
              'Custom SLAs & residency',
              'Advanced compliance packages',
              'Roadmap collaboration',
            ]}
            limits="Starts around $500/mo for scoped pilots—final economics depend on data gravity"
            cta={{ label: 'Talk to sales', href: '/contact/enterprise' }}
            emphasis={false}
          />
        </div>
      </div>
    </section>
  );
}

function PricingTier({
  name,
  price,
  tagline,
  bullets,
  limits,
  cta,
  emphasis,
  note,
}: {
  name: string;
  price: string;
  tagline: string;
  bullets: string[];
  limits: string;
  cta: { label: string; href: string };
  emphasis?: boolean;
  note?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        'flex flex-col rounded-[24px] border p-8 backdrop-blur-xl',
        emphasis
          ? 'border-2 border-dw-tan bg-gradient-to-br from-dw-surface/90 via-dw-surface/70 to-dw-tan/[0.12] shadow-[0_0_48px_rgba(201,169,110,0.15)]'
          : 'border-white/[0.08] bg-dw-surface/40'
      )}
    >
      <h3 className={cn('font-display text-2xl', emphasis ? 'text-dw-tan' : 'text-dw-cream')}>{name}</h3>
      <p className="mt-2 font-display text-xl text-dw-cream">{price}</p>
      <p className="mt-1 font-sans text-sm text-dw-muted">{tagline}</p>
      <ul className="mt-6 flex-1 space-y-2 font-sans text-sm text-dw-muted">
        {bullets.map((b) => (
          <li key={b}>✓ {b}</li>
        ))}
      </ul>
      <p className="mt-6 border-t border-white/[0.06] pt-4 font-sans text-xs text-dw-muted">{limits}</p>
      {note && <p className="mt-3 font-sans text-xs text-dw-highlight">{note}</p>}
      <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href={cta.href}
          className={cn(
            'flex w-full items-center justify-center rounded-full py-3.5 text-sm font-semibold transition-colors',
            emphasis
              ? 'bg-dw-tan text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow'
              : 'border border-dw-tan/35 text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]'
          )}
        >
          {cta.label}
        </Link>
      </motion.div>
    </motion.div>
  );
}

function InfraEconomics() {
  const callouts = [
    {
      title: 'API & delivery plane',
      body: 'Managed ingress, autoscaling, observability, and incident staffing are bundled into subscription economics. At modest scale we intentionally run close to cost—margin expands as your usage depth grows.',
    },
    {
      title: 'Training & artifacts',
      body: 'Serverless execution keeps idle capacity off your books. Large GPU bursts map to token surcharges so finance can see exactly when heavyweight jobs occurred.',
    },
    {
      title: 'Data platforms',
      body: 'Shared metadata services amortize across tenants; premium isolation lands on Autonomous with explicit sizing so databases never become mystery spend.',
    },
    {
      title: 'Support & reliability engineering',
      body: 'Human coverage is priced into Accelerator and above. On smaller footprints we may subsidize support—Autonomous and strategic accounts fund the bench depth.',
    },
    {
      title: 'Archival & settlement',
      body: 'Long-horizon storage partners and ledger receipts add pennies per artifact but eliminate “single vendor amnesia.” We disclose those flows in enterprise reviews—not billboard marketing.',
    },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">
          What you are actually paying for
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-base text-dw-muted">
          Margins move with utilization. Here is the honest shape—not line-item invoices, but the cost buckets we
          manage so you do not have to hire a cloud economics team.
        </p>
        <div className="mt-14 space-y-6">
          {callouts.map((c) => (
            <div
              key={c.title}
              className="rounded-[22px] border border-white/[0.08] bg-dw-surface/35 p-8 backdrop-blur-xl"
            >
              <h3 className="font-display text-xl text-dw-tan">{c.title}</h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfraBusinessModel() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">How Deadwood monetizes</h2>
        <p className="mt-4 font-sans text-base text-dw-muted">
          We make money when you succeed at scale—subscriptions anchor the relationship, usage aligns incentives, and
          marketplace rails let creators participate without hiding economics.
        </p>
        <div className="mt-10 space-y-8 font-sans text-sm leading-relaxed text-dw-muted">
          <div className="rounded-[20px] border border-white/[0.08] bg-dw-surface/30 p-6">
            <h3 className="font-display text-lg text-dw-cream">1 · Subscriptions</h3>
            <p className="mt-3">
              Catalyst is deliberately lightweight—it lets you validate fit. Accelerator carries most product R&amp;D.
              Autonomous concentrates margin so we can dedicate partitions, lawyers, and reliability engineers without
              pretending it is the same SKU.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/[0.08] bg-dw-surface/30 p-6">
            <h3 className="font-display text-lg text-dw-cream">2 · Metered overages</h3>
            <p className="mt-3">
              When you blow past inclusive quotas, incremental usage bills at published rates. Those increments fund
              burst capacity and keep baseline pricing approachable for early teams.
            </p>
          </div>
          <div className="rounded-[20px] border border-white/[0.08] bg-dw-surface/30 p-6">
            <h3 className="font-display text-lg text-dw-cream">3 · Creator revenue share (roadmap)</h3>
            <p className="mt-3">
              When marketplaces go live, creators keep the majority of downstream token spend; Deadwood captures a
              platform fee that pays for trust, safety review, and settlement plumbing—never hidden inside inference
              pricing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraTCO() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">
          DIY vs. Deadwood (plain-language TCO)
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center font-sans text-base text-dw-muted">
          Building preference infrastructure in-house means hiring specialists, stitching observability, and accepting
          outage risk. Buying Deadwood trades capex-like engineering spikes for predictable opex tied to usage.
        </p>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[24px] border border-white/[0.1] bg-dw-surface/35 p-8 backdrop-blur-xl">
            <h3 className="font-display text-xl text-dw-cream">Self-build trajectory</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-dw-muted">
              <li>Multi-quarter engineering for API + training + delivery</li>
              <li>Ongoing SRE coverage (nights and weekends cost real money)</li>
              <li>Vendor sprawl: observability, secrets, artifact stores, compliance scans</li>
              <li>Risk reserve for outages, breaches, or failed audits</li>
            </ul>
            <p className="mt-6 font-display text-lg text-dw-tan">Typical outcome</p>
            <p className="mt-2 font-sans text-sm text-dw-muted">
              Hundreds of thousands in engineering over multi-year horizons—before you ship differentiated product work.
            </p>
          </div>
          <div className="rounded-[24px] border border-dw-tan/25 bg-gradient-to-br from-dw-surface/80 to-dw-tan/[0.08] p-8 backdrop-blur-xl">
            <h3 className="font-display text-xl text-dw-tan">Deadwood trajectory</h3>
            <ul className="mt-4 space-y-3 font-sans text-sm leading-relaxed text-dw-muted">
              <li>Integration measured in days-to-weeks</li>
              <li>Operations, scaling, and resilience bundled into subscription + meters</li>
              <li>Finance sees usage dashboards—not mystery invoices</li>
              <li>Engineering stays on roadmap features users notice</li>
            </ul>
            <p className="mt-6 font-display text-lg text-dw-cream">Typical outcome</p>
            <p className="mt-2 font-sans text-sm text-dw-muted">
              Lower multi-year spend with faster iteration—especially once traffic grows nonlinearly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraMigration() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Switching costs—stated clearly</h2>
        <p className="mt-4 font-sans text-base leading-relaxed text-dw-muted">
          Portable artifacts reduce trap dynamics, but migration is never zero. Small footprints export quickly; large
          fleets require coordinated inference cutovers and verification windows. We document exports up front because
          trust beats lock-in theater.
        </p>
        <div className="mt-8 rounded-[20px] border border-white/[0.08] bg-dw-surface/35 p-6 font-sans text-sm leading-relaxed text-dw-muted backdrop-blur-xl">
          <p className="font-medium text-dw-cream">What travels easily</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Checkpoint binaries + manifests</li>
            <li>Training logs + evaluation notebooks</li>
            <li>Ledger receipts for finance reconciliation</li>
          </ul>
          <p className="mt-6 font-medium text-dw-cream">What costs time</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Rewiring inference routers inside your stack</li>
            <li>Replaying governance approvals with a new vendor</li>
            <li>Retuning latency budgets after CDN topology changes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function InfraSecurity() {
  const pillars = [
    { Icon: LockClosedIcon, title: 'Encryption everywhere', body: 'TLS for every customer hop; encrypted disks for persistence; hashed secrets in our control plane.' },
    { Icon: ServerStackIcon, title: 'Tenant isolation', body: 'API keys scope access; workspaces separate environments; optional private networking on enterprise contracts.' },
    { Icon: ShieldCheckIcon, title: 'Assurance programs', body: 'SOC2 Type II posture, GDPR-aware workflows, HIPAA pathways via Autonomous paperwork—not handshake promises.' },
    { Icon: GlobeAltIcon, title: 'Resilience', body: 'HA databases, encrypted backups, rehearsal restores for mission-critical tenants.' },
  ];

  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Enterprise-grade security</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Security is operational discipline—not a single checkbox workshop.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-[22px] border border-white/[0.08] bg-dw-surface/35 p-6 backdrop-blur-xl">
              <p.Icon className="h-8 w-8 text-dw-tan" />
              <h3 className="mt-4 font-display text-lg text-dw-cream">{p.title}</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-dw-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfraGetStarted() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-section">
      <GradientMesh />
      <div className="pointer-events-none absolute inset-0 bg-dw-bg/85" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">
          Ready to add personalization?
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              Icon: BoltIcon,
              title: 'Start free',
              body: 'Free tier, no credit card. Build your first model.',
              href: '/register?tier=catalyst',
              label: 'Get free API key',
              variant: 'solid' as const,
            },
            {
              Icon: RocketLaunchIcon,
              title: 'Go production',
              body: 'Accelerator tier. Full features. $99/mo after trial.',
              href: '/register?tier=accelerator&trial=14days',
              label: 'Start 14-day free trial',
              variant: 'outline' as const,
            },
            {
              Icon: BuildingOffice2Icon,
              title: 'Talk to us',
              body: 'Custom pricing, SLAs, and support for enterprises.',
              href: '/contact/enterprise',
              label: 'Schedule demo',
              variant: 'outline' as const,
            },
          ].map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -4 }}
              className="rounded-[24px] border border-white/[0.1] bg-dw-surface/45 p-8 text-center backdrop-blur-xl"
            >
              <c.Icon className="mx-auto h-10 w-10 text-dw-tan" />
              <h3 className="mt-4 font-display text-xl text-dw-cream">{c.title}</h3>
              <p className="mt-2 font-sans text-sm text-dw-muted">{c.body}</p>
              <Link
                href={c.href}
                className={cn(
                  'mt-6 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors',
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

function InfraFAQ() {
  return (
    <section className="border-t border-white/[0.06] bg-dw-bg py-section">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="font-display text-[clamp(2rem,4vw,2.75rem)] text-dw-cream">Questions?</h2>
        <div className="mt-8 space-y-2">
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
