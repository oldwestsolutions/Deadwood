'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GradientMesh } from '@/components/marketing/GradientMesh';

const railItems = [
  'anchoring digest',
  'Avalanche',
  'verified ledger',
  'metered cycles',
  'continuous improvement',
  'auditable tokens',
];

function LocomotiveMark({
  className,
  size = 'hero',
}: {
  className?: string;
  size?: 'hero' | 'inline';
}) {
  const isHero = size === 'hero';
  return (
    <span className={className}>
      <span className={isHero ? 'font-display text-[clamp(2.75rem,12vw,7rem)] tracking-tight' : ''}>
        Locomotive
      </span>
      <span
        aria-hidden
        className={
          isHero
            ? 'ml-[0.06em] font-sans text-[0.28em] font-semibold leading-none tracking-wide text-dw-tan [vertical-align:super]'
            : 'ml-[0.06em] font-sans text-[0.55em] font-semibold leading-none tracking-wide text-dw-bg [vertical-align:super]'
        }
      >
        TM
      </span>
      <span className="sr-only">™</span>
    </span>
  );
}

export function LocomotiveExperience() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.12], [1, 0.94]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0.65]);

  const strip = [...railItems, ...railItems];

  return (
    <div ref={scrollRef} className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <GradientMesh />
      </div>

      {/* Track lines — subtle depth */}
      <div
        className="pointer-events-none fixed inset-0 -z-[5] opacity-[0.07]"
        aria-hidden
      >
        <div
          className="absolute inset-y-0 left-[12%] w-px bg-gradient-to-b from-transparent via-dw-tan to-transparent"
          style={{ boxShadow: '0 0 24px rgba(201, 169, 110, 0.35)' }}
        />
        <div
          className="absolute inset-y-0 right-[18%] w-px bg-gradient-to-b from-transparent via-dw-tan to-transparent"
          style={{ boxShadow: '0 0 24px rgba(201, 169, 110, 0.35)' }}
        />
      </div>

      <section className="relative flex min-h-[100dvh] flex-col justify-center px-6 pb-20 pt-36 lg:px-12">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="mx-auto max-w-5xl">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-dw-muted">
            Infinite Learning Model
          </p>
          <h1 className="text-dw-cream">
            <LocomotiveMark size="hero" />
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-dw-muted sm:text-xl">
            A learning loop that stays on your rails: train on your data, ship outcomes you own, and let usage settle to
            an auditable ledger—so improvement stays measurable and quiet.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/download"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Download
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
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-dw-muted"
          animate={{ opacity: [0.35, 0.85, 0.35] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-dw-tan/80 to-transparent" />
        </motion.div>
      </section>

      <section className="relative border-t border-white/[0.06] px-6 py-section lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.06] bg-dw-surface/35 py-10 backdrop-blur-md">
          <motion.div
            className="flex gap-16 whitespace-nowrap font-mono text-xs uppercase tracking-[0.42em] text-dw-muted/50"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          >
            {strip.map((label, i) => (
              <span key={`${label}-${i}`} className="shrink-0">
                {label}
                <span className="mx-10 inline-block h-1 w-1 rounded-full bg-dw-tan/40 align-middle" />
              </span>
            ))}
          </motion.div>
        </div>

        <div className="mx-auto mt-24 grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-10">
          {[
            {
              title: 'Your gradient',
              body: 'Improvement follows your product—not a black box. You choose what becomes supervision signal.',
            },
            {
              title: 'Ledger-native usage',
              body: 'Metered cycles map to tokens you can audit. Spend and earning stay legible across teams.',
            },
            {
              title: 'Quiet continuity',
              body: 'The loop keeps running without spectacle: digest, verify, ship—again.',
            },
          ].map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12%' }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-card border border-white/[0.06] bg-gradient-to-b from-white/[0.04] to-transparent p-8"
            >
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-dw-tan/90">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h2 className="font-display text-2xl text-dw-cream">{item.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-dw-muted">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="relative px-6 py-section lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl rounded-[32px] border border-dw-tan/20 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(201,169,110,0.15),transparent_55%)] px-8 py-16 text-center sm:px-14 sm:py-20"
        >
          <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] leading-snug text-dw-cream">
            Stay on the line. Ship the next better version—without losing the thread.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/" className="text-sm font-medium text-dw-muted underline-offset-4 hover:text-dw-highlight hover:underline">
              Back to Deadwood
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
