'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';
import { GlassCard } from '@/components/marketing/GlassCard';
import { cn } from '@/lib/cn';

const tiers = [
  {
    name: 'Spark',
    price: 'Free',
    cycles: '100 cycles/mo',
    features: ['Community runners', 'Starter notebooks', 'Forum support'],
    cta: 'Start free',
    href: '/register',
    featured: false,
  },
  {
    name: 'Ember',
    price: '$49',
    period: '/mo',
    cycles: '10,000 cycles',
    features: ['Priority queue', 'Full API access', 'Usage telemetry'],
    cta: 'Upgrade',
    href: '/pricing',
    featured: true,
  },
  {
    name: 'Forge',
    price: 'Custom',
    cycles: 'Dedicated capacity',
    features: ['Enterprise SLA', 'Dedicated runners', 'Snowflake integration'],
    cta: 'Talk to us',
    href: '/support',
    featured: false,
  },
];

export function Pricing() {
  return (
    <MotionSection id="pricing" className="border-t border-white/[0.06] py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-muted">
            Pricing
          </p>
          <h2 className="mt-4 font-display text-4xl text-dw-cream sm:text-[2.75rem]">
            Metered by the cycle.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <GlassCard
              key={t.name}
              hoverLift
              className={cn(
                'relative flex flex-col p-8',
                t.featured &&
                  'ring-2 ring-dw-tan/50 shadow-[0_0_60px_rgba(201,169,110,0.12)]'
              )}
            >
              {t.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-dw-tan px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-dw-bg">
                  Recommended
                </span>
              )}
              <h3 className="font-display text-2xl text-dw-cream">{t.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-semibold text-dw-cream">{t.price}</span>
                {'period' in t && t.period && (
                  <span className="text-dw-muted">{t.period}</span>
                )}
              </div>
              <p className="mt-3 font-mono text-sm text-dw-tan">{t.cycles}</p>
              <ul className="mt-8 flex-1 space-y-3 text-sm text-dw-muted">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-dw-highlight/80" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.div className="mt-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={t.href}
                  className={cn(
                    'flex w-full items-center justify-center rounded-full py-3 text-sm font-semibold transition-shadow',
                    t.featured
                      ? 'bg-dw-tan text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow'
                      : 'border border-dw-tan/35 text-dw-cream hover:border-dw-highlight hover:bg-white/[0.03]'
                  )}
                >
                  {t.cta}
                </Link>
              </motion.div>
            </GlassCard>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
