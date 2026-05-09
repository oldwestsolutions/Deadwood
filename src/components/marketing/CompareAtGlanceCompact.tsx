'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { pricingComparisonRows } from '@/content/pricingMcpContent';

const GRID_TEMPLATE_COLUMNS = 'minmax(128px, 26%) repeat(3, minmax(0, 1fr))';

type CompareAtGlanceCompactProps = {
  className?: string;
  headerClassName?: string;
  /** Default h2 for section-level placement; use h3 when nested under another section title. */
  titleTag?: 'h2' | 'h3';
};

export function CompareAtGlanceCompact({
  className,
  headerClassName,
  titleTag: TitleTag = 'h2',
}: CompareAtGlanceCompactProps) {
  return (
    <div className={cn(className)}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className={cn('text-center', headerClassName)}
      >
        <TitleTag className="font-display text-xl text-dw-cream sm:text-2xl">Compare at a glance</TitleTag>
        <p className="mx-auto mt-2 max-w-lg font-sans text-[11px] leading-snug text-dw-muted sm:text-xs">
          Three tiers by data scale and operations maturity. Premium is where most production teams land.
        </p>
      </motion.div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-white/[0.08] bg-dw-surface/30 backdrop-blur-xl">
        <div className="min-w-[600px]">
          <div
            className="grid border-b border-white/[0.08] bg-dw-bg/55"
            style={{ gridTemplateColumns: GRID_TEMPLATE_COLUMNS }}
          >
            <div className="px-2 py-2 font-sans text-[9px] font-semibold uppercase tracking-wide text-dw-tan sm:px-2.5 sm:text-[10px]">
              Feature
            </div>
            <div className="border-l border-white/[0.06] px-2 py-2 text-center sm:px-2.5">
              <p className="font-display text-xs font-semibold text-dw-cream sm:text-sm">Local</p>
              <p className="font-sans text-[9px] text-dw-muted sm:text-[10px]">Free forever</p>
            </div>
            <div className="border-l border-white/[0.06] px-2 py-2 text-center sm:px-2.5">
              <p className="font-display text-xs font-semibold text-dw-cream sm:text-sm">Premium</p>
              <p className="font-sans text-[9px] text-dw-tan sm:text-[10px]">$99/month</p>
            </div>
            <div className="border-l border-white/[0.06] px-2 py-2 text-center sm:px-2.5">
              <p className="font-display text-xs font-semibold text-dw-cream sm:text-sm">Enterprise</p>
              <p className="font-sans text-[9px] text-dw-muted sm:text-[10px]">Custom pricing</p>
            </div>
          </div>
          {pricingComparisonRows.map((row) => (
            <div
              key={row.feature}
              className={cn(
                'grid border-b border-white/[0.05] last:border-b-0',
                row.highlight && 'bg-dw-tan/[0.04]'
              )}
              style={{ gridTemplateColumns: GRID_TEMPLATE_COLUMNS }}
            >
              <div className="border-r border-white/[0.05] px-2 py-1.5 text-left font-sans text-[9px] leading-snug text-dw-muted sm:px-2.5 sm:text-[10px]">
                {row.feature}
              </div>
              <div className="border-l border-white/[0.06] px-2 py-1.5 text-center font-sans text-[9px] leading-snug text-dw-muted sm:px-2.5 sm:text-[10px]">
                {row.local}
              </div>
              <div className="border-l border-white/[0.06] px-2 py-1.5 text-center font-sans text-[9px] leading-snug text-dw-muted sm:px-2.5 sm:text-[10px]">
                {row.premium}
              </div>
              <div className="border-l border-white/[0.06] px-2 py-1.5 text-center font-sans text-[9px] leading-snug text-dw-muted sm:px-2.5 sm:text-[10px]">
                {row.enterprise}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
