'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import {
  LAYER_ORDER,
  LAYER_SUMMARIES,
  type LayerSlug,
} from '@/content/intelligenceLayers';
import { LayerGlyph } from '@/components/layers/layerIcons';
import { MotionSection } from '@/components/marketing/MotionSection';
import { cn } from '@/lib/cn';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export function IntelligenceLayers() {
  return (
    <MotionSection
      id="layers-intelligence"
      className="relative overflow-hidden border-y border-white/[0.06] bg-dw-bg py-section"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(201,169,110,0.12)_0%,transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 topo-pattern opacity-[0.22]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-dw-tan">
            From data to deployed model
          </p>
          <h2 className="mt-4 font-display text-4xl text-dw-cream sm:text-[2.75rem]">
            Nine Layers of Intelligence
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-dw-muted sm:text-lg">
            Building AI isn&apos;t magic — it&apos;s nine distinct layers. Data, architecture,
            training, inference, optimization, verification, deployment, feedback. Deadwood
            custodies all of them. You describe your problem. We handle the layers.
          </p>
        </div>

        {/* Desktop / tablet — vertical stack */}
        <motion.div
          className="mx-auto mt-14 hidden max-w-3xl flex-col gap-4 md:flex"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {LAYER_ORDER.map((slug) => (
            <LayerRow key={slug} slug={slug} />
          ))}
        </motion.div>

        {/* Mobile — accordion */}
        <div className="mx-auto mt-10 max-w-lg space-y-3 md:hidden">
          {LAYER_ORDER.map((slug) => (
            <MobileLayerAccordion key={slug} slug={slug} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="font-sans text-base leading-relaxed text-dw-muted">
            Each layer is a problem Deadwood solves. You don&apos;t need to understand all nine —
            but understanding them helps you see why an AI operating system matters.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/layers/data"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Explore a layer
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/layers/training#solution"
                className="inline-flex rounded-full border border-dw-tan/35 px-8 py-3.5 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
              >
                See how we custodian AI
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function LayerRow({ slug }: { slug: LayerSlug }) {
  const L = LAYER_SUMMARIES[slug];
  return (
    <motion.div variants={rowVariants}>
      <Link href={`/layers/${slug}`} className="group block rounded-[22px] focus:outline-none focus-visible:ring-2 focus-visible:ring-dw-tan focus-visible:ring-offset-2 focus-visible:ring-offset-dw-bg">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            'relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-dw-surface/45 p-6 backdrop-blur-xl transition-shadow duration-300',
            'bg-gradient-to-br shadow-dw-lift',
            L.cardTint,
            'hover:border-dw-tan/25 hover:shadow-[0_12px_40px_rgba(201,169,110,0.14)]'
          )}
        >
          <div className="flex flex-wrap items-start gap-5 sm:flex-nowrap">
            <span className="font-mono text-sm text-dw-tan tabular-nums">
              {String(L.index).padStart(2, '0')}
            </span>
            <div className="flex min-w-0 flex-1 gap-5">
              <LayerGlyph
                slug={slug}
                className="h-12 w-12 shrink-0 text-dw-tan opacity-90"
                aria-hidden
              />
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-2xl text-dw-cream">{L.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-dw-muted">
                  {L.cardDesc}
                </p>
                <span className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-dw-highlight transition-colors group-hover:text-dw-tan">
                  Learn more →
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}

function MobileLayerAccordion({ slug }: { slug: LayerSlug }) {
  const L = LAYER_SUMMARIES[slug];
  return (
    <Disclosure>
      {({ open }) => (
        <div className="overflow-hidden rounded-[20px] border border-white/[0.08] bg-dw-surface/40 backdrop-blur-xl">
          <Disclosure.Button className="flex w-full items-center gap-3 px-4 py-4 text-left font-sans text-dw-cream">
            <span className="font-mono text-xs text-dw-tan">{String(L.index).padStart(2, '0')}</span>
            <LayerGlyph slug={slug} className="h-9 w-9 shrink-0 text-dw-tan" />
            <span className="flex-1 font-display text-lg">{L.title}</span>
            <ChevronDownIcon
              className={cn('h-5 w-5 shrink-0 text-dw-muted transition-transform', open && 'rotate-180')}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="border-t border-white/[0.06] px-4 pb-4 pt-2">
            <p className="text-sm leading-relaxed text-dw-muted">{L.cardDesc}</p>
            <Link
              href={`/layers/${slug}`}
              className="mt-4 inline-flex font-mono text-xs uppercase tracking-[0.18em] text-dw-tan hover:text-dw-highlight"
            >
              Learn more →
            </Link>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
