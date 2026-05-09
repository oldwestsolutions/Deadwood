'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';
import {
  comparisonRows,
  faqItems,
  featureExplainerItems,
} from '@/content/pricingMcpContent';

type Billing = 'monthly' | 'annual';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function Capability({
  title,
  detail,
}: {
  title: string;
  detail?: string;
}) {
  return (
    <li className="flex gap-3 text-left">
      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-dw-tan" aria-hidden />
      <span>
        <span className="font-sans text-sm text-dw-cream">{title}</span>
        {detail && (
          <span className="mt-0.5 block font-sans text-xs leading-snug text-dw-muted">
            {detail}
          </span>
        )}
      </span>
    </li>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>('monthly');
  const acceleratorMonthly = 99;
  const acceleratorAnnualPerMonth = Math.round(acceleratorMonthly * 0.8);

  return (
    <section id="pricing" className="border-t border-white/[0.06] py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan">
            ML capabilities, not compute cycles
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] text-dw-cream lg:text-[56px]">
            Extend Claude. Pay for What You Use.
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-dw-muted sm:text-lg">
            Deadwood is an API for personal AI models. Get an API key. Train models on your data.
            Pay per prediction in tokens. Everything settles on Avalanche. Premium tiers add Snowflake
            data integration — train models on massive datasets without moving your data.
          </p>

          <p className="mt-8 font-sans text-sm text-dw-muted">Billing: Monthly / Annual (save 20%)</p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-3 inline-flex rounded-pill border border-white/[0.1] bg-dw-surface/50 p-1 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => setBilling('monthly')}
              className={cn(
                'rounded-pill px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors',
                billing === 'monthly'
                  ? 'bg-dw-tan text-dw-bg'
                  : 'text-dw-muted hover:text-dw-cream'
              )}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBilling('annual')}
              className={cn(
                'rounded-pill px-5 py-2 font-mono text-xs uppercase tracking-wider transition-colors',
                billing === 'annual'
                  ? 'bg-dw-tan text-dw-bg'
                  : 'text-dw-muted hover:text-dw-cream'
              )}
            >
              Annual <span className="text-dw-highlight">(save 20%)</span>
            </button>
          </motion.div>
        </div>

        {/* Tier cards */}
        <motion.div
          className="grid gap-6 lg:grid-cols-3 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {/* Catalyst */}
          <motion.article
            variants={cardReveal}
            className={cn(
              'relative flex flex-col rounded-[20px] p-10',
              'border border-dw-muted bg-dw-surface',
              'motion-safe:transition-transform motion-safe:duration-300',
              'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)]'
            )}
          >
            <h3 className="font-display text-[32px] text-dw-cream">Catalyst</h3>
            <p className="mt-2 font-sans text-xl text-dw-tan">Free forever</p>
            <p className="mt-2 font-sans text-sm text-dw-muted">Try Deadwood with API key</p>
            <ul className="mt-8 flex flex-1 flex-col gap-4">
              <Capability title="1,000 API calls/month" detail="Predictions, inferences, swaps" />
              <Capability title="1 free model training/month" detail="Train on up to 10K items locally" />
              <Capability title="Model storage on floppydisk.cc" detail="Version control for your models" />
              <Capability title="Basic model swap" detail="Switch between base models" />
              <Capability title="On-chain verification" detail="Avalanche proof of every prediction" />
              <Capability title="Community support" detail="Discord & GitHub discussions" />
              <Capability title="Public model marketplace" detail="Browse free and community models" />
            </ul>
            <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-6 font-sans text-xs text-dw-muted">
              <p>Max 1,000 items per training run · Phi-3 & smaller models only</p>
              <p>Local data only (no Snowflake) · Hourly token settlement batches · Community (24–48hr)</p>
            </div>
            <motion.div className="mt-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/register?plan=catalyst"
                className="flex w-full items-center justify-center rounded-full bg-dw-tan py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Start Free
              </Link>
            </motion.div>
          </motion.article>

          {/* Accelerator */}
          <motion.article
            variants={cardReveal}
            className={cn(
              'relative flex flex-col rounded-[20px] p-10',
              'border-2 border-dw-tan',
              'bg-gradient-to-br from-dw-surface/80 via-dw-surface/70 to-dw-tan/[0.1]',
              'backdrop-blur-[24px]',
              'shadow-[0_0_48px_rgba(201,169,110,0.12)]',
              'motion-safe:transition-transform motion-safe:duration-300',
              'hover:-translate-y-2 hover:shadow-[0_20px_56px_rgba(201,169,110,0.22)]'
            )}
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-dw-tan px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-dw-bg">
              Recommended for Teams
            </span>
            <h3 className="mt-2 font-display text-[32px] text-dw-tan">Accelerator</h3>
            <p className="mt-2 font-sans text-xl text-dw-tan">
              {billing === 'annual' ? (
                <>
                  ${acceleratorAnnualPerMonth}
                  <span className="text-base text-dw-muted">/mo</span>{' '}
                  <span className="block text-sm font-normal text-dw-muted">
                    billed annually (${acceleratorAnnualPerMonth * 12}/yr)
                  </span>
                </>
              ) : (
                <>
                  ${acceleratorMonthly}
                  <span className="text-base text-dw-muted">/month</span>
                </>
              )}
            </p>
            <p className="mt-2 font-sans text-sm text-dw-muted">
              Production AI with Snowflake integration
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3.5">
              <Capability title="100,000 API calls/month" detail="Predictions, inferences, swaps" />
              <Capability title="10 model trainings/month" detail="Each up to 1M items" />
              <Capability title="Full model ecosystem access" detail="LLaMA, Falcon, Mistral, custom" />
              <Capability title="Advanced model selection" detail="Choose base architecture per use case" />
              <Capability title="Fairness + performance eval" detail="BLEU, ROUGE, F1, bias detection" />
              <Capability title="Real-time on-chain settlement" detail="Avalanche — instant token transfers" />
              <Capability title="Private floppydisk.cc workspace" detail="Version-controlled model storage" />
              <Capability title="Model swap without retraining" detail="Deploy new models instantly" />
              <Capability title="Email + Slack support" detail="4-hour response SLA" />
              <Capability title="Usage dashboard" detail="API calls, costs, earnings" />
              <Capability title="Custom model library" detail="Save training configs, reuse" />
              <Capability
                title="Snowflake integration"
                detail="Query your instance · Train on 100M+ rows · Models never leave your cloud · Pay for queries, not bulk data movement"
              />
            </ul>
            <div className="mt-6 space-y-1 border-t border-white/[0.08] pt-6 font-sans text-xs text-dw-muted">
              <p>Inference latency SLA: &lt; 500ms · Snowflake connection included (your instance)</p>
              <p>Full-weight fine-tuning costs extra tokens · Email/Slack, 4-hour response</p>
            </div>
            <p className="mt-2 font-sans text-xs text-dw-muted">Most teams start here.</p>
            <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/pricing/accelerator"
                className="flex w-full items-center justify-center rounded-full bg-dw-tan py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Upgrade to Accelerator
              </Link>
            </motion.div>
          </motion.article>

          {/* Autonomous */}
          <motion.article
            variants={cardReveal}
            className={cn(
              'relative flex flex-col rounded-[20px] p-10',
              'border border-dw-tan/15 bg-dw-surface',
              'motion-safe:transition-transform motion-safe:duration-300',
              'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.1)]'
            )}
          >
            <h3 className="font-display text-[32px] text-dw-cream">Autonomous</h3>
            <p className="mt-2 font-sans text-xl text-dw-tan">Custom pricing</p>
            <p className="mt-2 font-sans text-sm text-dw-muted">
              Unlimited scale, Snowflake data lake
            </p>
            <ul className="mt-8 flex flex-1 flex-col gap-3.5">
              <Capability title="Unlimited API calls" detail="Predictions, inferences, swaps" />
              <Capability title="Unlimited model trainings" detail="Any size dataset" />
              <Capability title="Full model ecosystem" detail="LLaMA, Falcon, Mistral, multimodal, custom" />
              <Capability title="Dedicated GPU cluster" detail="Faster model training" />
              <Capability title="Private floppydisk.cc instance" detail="Dedicated storage, Filecoin backup" />
              <Capability title="Real-time on-chain settlement" detail="Cosmos or Avalanche — your choice" />
              <Capability
                title="Enterprise Snowflake integration"
                detail="Dedicated cluster · Unlimited querying · Petabyte-scale training · Data residency · VPN/private link"
              />
              <Capability title="Custom model training" detail="Bespoke architectures for your domain" />
              <Capability title="Compliance + security" detail="HIPAA, SOC2, custom agreements" />
              <Capability title="Dedicated account manager" detail="Strategy, architecture, optimization" />
              <Capability title="Training & workshops" detail="Onboard your team on Deadwood" />
              <Capability title="SLA guarantees" detail="99.99% uptime · &lt; 50ms latency" />
              <Capability title="Priority feature requests" detail="Influence Deadwood&apos;s roadmap" />
            </ul>
            <p className="mt-auto pt-8 font-sans text-xs text-dw-muted">
              For trading desks, ML labs, enterprises with Snowflake data lakes.
            </p>
            <motion.div className="mt-8" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact/enterprise"
                className="flex w-full items-center justify-center rounded-full border border-dw-tan/45 bg-transparent py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-dw-tan/10"
              >
                Talk to Our Team
              </Link>
            </motion.div>
          </motion.article>
        </motion.div>

        {/* Why Snowflake */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-20 max-w-[60%] min-w-0 text-center max-lg:max-w-xl"
        >
          <h3 className="font-display text-[clamp(1.75rem,3vw,2.25rem)] leading-tight text-dw-cream lg:text-[36px]">
            Why Snowflake?
          </h3>
          <div className="mt-6 space-y-4 font-sans text-base leading-relaxed text-dw-muted">
            <p>
              Deadwood trains models on whatever you feed it. But if you have massive datasets — 100M
              trades, 1B customer records, petabytes of historical data — moving that data to train a
              model is expensive and slow.
            </p>
            <p>
              Snowflake integration means: Leave your data in Snowflake. Deadwood queries it directly.
              Trains your model. Returns the trained weights. Your data never leaves your cloud.
            </p>
            <p>
              For Accelerator tier: Connect your own Snowflake instance. Query costs are yours.
            </p>
            <p>
              For Autonomous tier: We provision a dedicated Snowflake cluster. Unlimited querying.
              Unlimited model training. Data residency compliance. Direct VPN access.
            </p>
            <p className="text-dw-cream">This is how enterprises train AI on their real data.</p>
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20"
        >
          <h3 className="text-center font-display text-2xl text-dw-cream">Compare at a glance</h3>
          <div className="mt-8 overflow-x-auto rounded-[20px] border border-white/[0.08] bg-dw-surface/40 backdrop-blur-xl">
            <table className="w-full min-w-[820px] border-collapse text-left font-sans text-sm">
              <thead>
                <tr className="border-b border-white/[0.08] bg-dw-bg/60">
                  <th className="px-5 py-4 font-medium text-dw-tan">Feature</th>
                  <th className="px-5 py-4 font-medium text-dw-cream">Catalyst</th>
                  <th className="px-5 py-4 font-medium text-dw-cream">Accelerator</th>
                  <th className="px-5 py-4 font-medium text-dw-cream">Autonomous</th>
                </tr>
              </thead>
              <tbody className="text-dw-muted">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/[0.05]">
                    <th scope="row" className="px-5 py-3.5 font-medium text-dw-cream">
                      {row.feature}
                    </th>
                    <td className="px-5 py-3.5">{row.catalyst}</td>
                    <td className="px-5 py-3.5">{row.accelerator}</td>
                    <td className="px-5 py-3.5">{row.autonomous}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Feature explainers */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-dw-cream">What&apos;s included</h3>
          <div className="mt-6 space-y-2">
            {featureExplainerItems.map((item) => (
              <Disclosure key={item.q} as="div" className="rounded-[18px] border border-white/[0.08] bg-dw-surface/35">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-sans text-sm font-medium text-dw-cream transition-colors hover:bg-white/[0.03]">
                      {item.q}
                      <ChevronDownIcon
                        className={cn(
                          'h-5 w-5 shrink-0 text-dw-muted transition-transform duration-300',
                          open && 'rotate-180'
                        )}
                      />
                    </Disclosure.Button>
                    <div
                      className={cn(
                        'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="min-h-0">
                        <Disclosure.Panel static className="focus:outline-none">
                          <div className="space-y-3 border-t border-white/[0.06] px-5 pb-4 pt-2 font-sans text-sm leading-relaxed text-dw-muted">
                            {item.a.map((p) => (
                              <p key={p}>{p}</p>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* How billing works */}
        <div className="mx-auto mt-24 max-w-5xl">
          <h3 className="font-display text-2xl text-dw-cream">Transparent, Pay-for-What-You-Use</h3>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <ul className="space-y-4 font-sans text-sm leading-relaxed text-dw-muted">
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> You integrate Deadwood with your API key.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Every prediction, training run, and model swap is counted.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Usage updates live on your dashboard.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Monthly bill = base tier + token overages (if applicable).
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Snowflake query fees stay with your Snowflake bill on Accelerator.
                </li>
              </ul>
            </div>
            <div className="rounded-[20px] border border-white/[0.08] bg-dw-bg/60 p-6 font-mono text-xs leading-relaxed text-dw-muted backdrop-blur-sm sm:text-[13px]">
              <p className="font-sans text-sm font-medium text-dw-cream">Example month (Accelerator)</p>
              <pre className="mt-4 whitespace-pre-wrap text-dw-highlight">{`Base: $99/month
├─ 60,000 API calls (within 100K)
├─ 4 trainings (within 10)
└─ Snowflake-connected jobs within quota
Overage charges:
├─ 25,000 extra API calls @ $0.001 = $25
├─ 3 extra trainings @ $50 = $150
└─ Extra prediction tokens @ metered rate = $40
Total: $99 + $25 + $150 + $40 = $314`}</pre>
              <p className="mt-4 font-sans text-sm text-dw-tan">Transparent. No surprises.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mx-auto mt-20 max-w-3xl">
          <h3 className="font-display text-2xl text-dw-cream">FAQ</h3>
          <div className="mt-6 space-y-2">
            {faqItems.map((item) => (
              <Disclosure key={item.q} as="div" className="rounded-[18px] border border-white/[0.08] bg-dw-surface/35">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-sans text-sm font-medium text-dw-cream transition-colors hover:bg-white/[0.03]">
                      {item.q}
                      <ChevronDownIcon
                        className={cn(
                          'h-5 w-5 shrink-0 text-dw-muted transition-transform duration-300',
                          open && 'rotate-180'
                        )}
                      />
                    </Disclosure.Button>
                    <div
                      className={cn(
                        'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                        open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="min-h-0">
                        <Disclosure.Panel static className="focus:outline-none">
                          <p className="border-t border-white/[0.06] px-5 pb-4 pt-2 font-sans text-sm leading-relaxed text-dw-muted">
                            {item.a}
                          </p>
                        </Disclosure.Panel>
                      </div>
                    </div>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-24 max-w-xl text-center"
        >
          <h2 className="font-display text-3xl text-dw-cream sm:text-4xl">
            Ready to train on your data?
          </h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Pick a plan or talk to us about Snowflake-scale personalization.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/register?plan=catalyst"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
              >
                Start with Catalyst
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/support"
                className="inline-flex rounded-full border border-dw-tan/40 px-8 py-3.5 text-sm font-semibold text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]"
              >
                Schedule a Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
