'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LAYER_SUMMARIES, type LayerSlug } from '@/content/intelligenceLayers';
import { LayerGlyph } from '@/components/layers/layerIcons';
import { MotionSection } from '@/components/marketing/MotionSection';
import { cn } from '@/lib/cn';

const TOKEN_SURFACE: LayerSlug[] = ['optimization', 'evaluation'];

export function IntelligenceLayers() {
  return (
    <MotionSection
      id="layers-intelligence"
      className="relative overflow-hidden border-y border-white/[0.06] bg-dw-bg py-section"
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
            <span className="text-dw-cream">Optimization</span> buys more quality per dollar from the hardware you
            already have. <span className="text-dw-cream">Evaluation</span> ties scores to the same commits as your
            weights—so promotions are measured, comparable, and explainable.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {TOKEN_SURFACE.map((slug) => (
            <TokenSurfaceCard key={slug} slug={slug} />
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function TokenSurfaceCard({ slug }: { slug: LayerSlug }) {
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
