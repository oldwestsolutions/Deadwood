'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LAYER_ORDER,
  LAYER_SUMMARIES,
  type LayerSlug,
} from '@/content/intelligenceLayers';
import { cn } from '@/lib/cn';

export function LayersRail({ active }: { active: LayerSlug }) {
  return (
    <nav
      aria-label="All intelligence layers"
      className="border-t border-white/[0.08] bg-dw-bg/80 px-4 py-8 backdrop-blur-xl"
    >
      <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-dw-muted">
        Navigate layers
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {LAYER_ORDER.map((slug) => {
          const L = LAYER_SUMMARIES[slug];
          const isActive = slug === active;
          return (
            <Link
              key={slug}
              href={`/layers/${slug}`}
              className={cn(
                'rounded-full border px-3 py-1.5 font-mono text-[11px] transition-colors',
                isActive
                  ? 'border-dw-tan bg-dw-tan/15 text-dw-highlight'
                  : 'border-white/[0.08] text-dw-muted hover:border-dw-tan/30 hover:text-dw-cream'
              )}
            >
              {L.index}. {L.title}
            </Link>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-dw-muted"
      >
        <LayerNavArrow slug={active} dir="prev" />
        <Link href="/#layers-intelligence" className="hover:text-dw-highlight">
          ↑ All layers on homepage
        </Link>
        <LayerNavArrow slug={active} dir="next" />
      </motion.div>
    </nav>
  );
}

function LayerNavArrow({ slug, dir }: { slug: LayerSlug; dir: 'prev' | 'next' }) {
  const i = LAYER_ORDER.indexOf(slug);
  const target =
    dir === 'prev'
      ? i > 0
        ? LAYER_ORDER[i - 1]
        : null
      : i < LAYER_ORDER.length - 1
        ? LAYER_ORDER[i + 1]
        : null;
  if (!target) {
    return <span className="hidden min-w-[10rem] sm:inline-block" aria-hidden />;
  }
  const L = LAYER_SUMMARIES[target];
  return (
    <Link
      href={`/layers/${target}`}
      className="min-w-[9rem] text-center font-medium text-dw-tan hover:text-dw-highlight"
    >
      {dir === 'prev' ? '← Prev: ' : 'Next: '}
      {L.title}
      {dir === 'next' ? ' →' : ''}
    </Link>
  );
}
