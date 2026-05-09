'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { GradientMesh } from '@/components/marketing/GradientMesh';
import { HeroTerminal } from '@/components/marketing/HeroTerminal';

export function Hero() {
  return (
    <section className="relative isolate min-h-[min(100vh,920px)] overflow-hidden pt-36 pb-24">
      <GradientMesh />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,440px)] lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="inline-flex rounded-pill border border-white/[0.08] bg-dw-surface/60 px-4 py-2 font-sans text-[11px] tracking-[0.14em] text-dw-muted sm:text-xs">
            Power Performance And Precision
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.08] tracking-tight text-dw-cream">
            <span className="block">
              <span className="inline-flex items-baseline gap-[0.18em]">
                Deadwood
                <span
                  aria-hidden
                  className="mb-[0.04em] inline-block h-[0.22em] min-h-[4px] w-[0.22em] min-w-[4px] shrink-0 rounded-full border border-dw-tan bg-transparent"
                />
              </span>
            </span>
            <span className="mt-3 block text-[clamp(1.75rem,4.5vw,2.75rem)] leading-snug">
              <span className="text-dw-tan">Software</span> as a Craft
            </span>
          </h1>

          <div className="max-w-xl space-y-5">
            <p className="text-base leading-relaxed text-dw-muted sm:text-lg">
              Plug Deadwood into your product and <span className="text-dw-cream">train your own model</span> on your
              data. You decide how the model improves over time.
            </p>
            <p className="text-sm leading-relaxed text-dw-muted sm:text-base">
              An auditable token layer keeps usage predictable—so you always know what you are spending and what you
              are earning with a ledger everyone can trust.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/locomotive"
                className="inline-flex items-baseline gap-[0.02em] rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                <span>Locomotive</span>
                <span className="font-sans text-[0.58em] font-semibold leading-none tracking-wide text-dw-bg/85 [vertical-align:super]">
                  TM
                </span>
                <span className="sr-only">™</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/docs"
                className="inline-flex rounded-full border border-dw-tan/35 bg-transparent px-8 py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.03]"
              >
                Read the Docs
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(ellipse_at_center,_var(--dw-glow)_0%,_transparent_70%)] blur-2xl" />
          <HeroTerminal />
        </motion.div>
      </div>
    </section>
  );
}
