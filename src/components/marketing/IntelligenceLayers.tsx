'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LAYER_SUMMARIES, type LayerSlug } from '@/content/intelligenceLayers';
import { LayerGlyph } from '@/components/layers/layerIcons';
import { MotionSection } from '@/components/marketing/MotionSection';
import { cn } from '@/lib/cn';

const TOKEN_SURFACE: LayerSlug[] = ['deployment', 'feedback'];

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
            From training data to production behavior
          </p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,2.85rem)] leading-[1.12] text-dw-cream">
            Deployment and feedback on the token network
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-dw-muted sm:text-lg">
            Production turns on <span className="text-dw-cream">deployment</span> and{' '}
            <span className="text-dw-cream">feedback</span>: routing and metering settle through the token layer you
            already run, and usage loops back with attribution instead of orphan spreadsheets.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          {TOKEN_SURFACE.map((slug) => (
            <TokenSurfaceCard key={slug} slug={slug} />
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="font-sans text-base leading-relaxed text-dw-muted">
            Metered usage, reconcilable receipts, and clear attribution for the next fine-tuning pass—without breaking
            trust.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/layers/deployment"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-dw-tan px-7 py-3 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow sm:px-8 sm:py-3.5"
              >
                Deployment on the network
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/layers/feedback"
                className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-dw-tan/35 px-7 py-3 text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04] sm:px-8 sm:py-3.5"
              >
                Feedback &amp; settlement
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}

function TokenSurfaceCard({ slug }: { slug: LayerSlug }) {
  const L = LAYER_SUMMARIES[slug];
  const tokenBlurb =
    slug === 'deployment'
      ? 'Every promotion and traffic shift accrues usage the token network can settle—predictable spend, reconcilable receipts, and version pins your auditors can follow.'
      : 'Signals from production—human approvals, automated scores, or preference pairs—route back with budgets and attribution on the same layer, so the next fine-tune is funded, not guessed.';

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
            'flex h-full min-h-[280px] flex-col rounded-[24px] border border-white/[0.1] bg-gradient-to-br p-6 shadow-dw-lift backdrop-blur-xl transition-shadow duration-300 sm:p-8',
            L.cardTint,
            'hover:border-dw-tan/30 hover:shadow-[0_16px_48px_rgba(201,169,110,0.16)]'
          )}
        >
          <div className="flex items-start justify-center sm:justify-start">
            <LayerGlyph slug={slug} className="h-11 w-11 shrink-0 text-dw-tan sm:h-12 sm:w-12" aria-hidden />
          </div>
          <h3 className="mt-5 font-display text-2xl text-dw-cream sm:text-[1.65rem]">{L.title}</h3>
          <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted/95">{tokenBlurb}</p>
          <p className="mt-4 border-t border-white/[0.08] pt-4 font-sans text-sm leading-relaxed text-dw-muted">
            {L.cardDesc}
          </p>
          <span className="mt-auto inline-flex pt-6 font-mono text-xs uppercase tracking-[0.18em] text-dw-highlight transition-colors group-hover:text-dw-tan">
            Layer detail →
          </span>
        </motion.div>
      </Link>
    </div>
  );
}
