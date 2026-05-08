'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';

export function ConsequentialLearning() {
  return (
    <MotionSection id="learning" className="relative py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-5 lg:pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-muted">
              B2C teaser
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-dw-cream sm:text-[2.75rem]">
              Learn by doing.
              <br />
              Earn by learning.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-dw-muted sm:text-lg">
              The educational layer of Deadwood rewards verified comprehension with
              on-chain outcomes. Every solved problem has a price. Every insight has a
              yield.
            </p>
            <motion.div className="mt-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/join"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
              >
                Join the waitlist
              </Link>
            </motion.div>
          </div>

          <div className="relative lg:col-span-7">
            <motion.figure
              initial={{ opacity: 0, rotate: -0.4 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="rounded-[28px] border border-white/[0.07] bg-gradient-to-br from-dw-surface/90 to-dw-bg p-10 sm:p-14 lg:ml-8 lg:-translate-y-4"
            >
              <blockquote className="font-display text-[clamp(1.65rem,3.2vw,2.35rem)] italic leading-snug text-dw-highlight">
                &ldquo;Understanding should compound like capital — transparent,
                portable, and yours.&rdquo;
              </blockquote>
              <figcaption className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-dw-muted">
                Deadwood Learning · forthcoming
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
