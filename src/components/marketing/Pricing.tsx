'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
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

function TierFeaturesLink({
  variant,
}: {
  variant: 'filled' | 'outline';
}) {
  return (
    <Link
      href="#pricing-compare"
      className={cn(
        'flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-colors',
        variant === 'filled'
          ? 'border border-dw-tan/35 text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]'
          : 'border border-white/[0.12] text-dw-cream hover:border-dw-tan/40 hover:bg-white/[0.04]'
      )}
    >
      Features
    </Link>
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
              'relative flex h-full min-h-[260px] flex-col rounded-[20px] p-10',
              'border border-dw-muted bg-dw-surface',
              'motion-safe:transition-transform motion-safe:duration-300',
              'hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)]'
            )}
          >
            <h3 className="font-display text-[32px] text-dw-cream">Catalyst</h3>
            <p className="mt-2 font-sans text-xl text-dw-tan">Free forever</p>
            <p className="mt-2 font-sans text-sm text-dw-muted">Try Deadwood with API key</p>
            <div className="mt-auto flex flex-col gap-3 pt-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/register?plan=catalyst"
                  className="flex w-full items-center justify-center rounded-full bg-dw-tan py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
                >
                  Start Free
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TierFeaturesLink variant="outline" />
              </motion.div>
            </div>
          </motion.article>

          {/* Accelerator */}
          <motion.article
            variants={cardReveal}
            className={cn(
              'relative flex h-full min-h-[260px] flex-col rounded-[20px] p-10',
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
            <div className="mt-auto flex flex-col gap-3 pt-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/pricing/accelerator"
                  className="flex w-full items-center justify-center rounded-full bg-dw-tan py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
                >
                  Upgrade to Accelerator
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TierFeaturesLink variant="filled" />
              </motion.div>
            </div>
          </motion.article>

          {/* Autonomous */}
          <motion.article
            variants={cardReveal}
            className={cn(
              'relative flex h-full min-h-[260px] flex-col rounded-[20px] p-10',
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
            <div className="mt-auto flex flex-col gap-3 pt-10">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact/enterprise"
                  className="flex w-full items-center justify-center rounded-full border border-dw-tan/45 bg-transparent py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-dw-tan/10"
                >
                  Talk to Our Team
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <TierFeaturesLink variant="outline" />
              </motion.div>
            </div>
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
          id="pricing-compare"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-20 scroll-mt-28"
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
