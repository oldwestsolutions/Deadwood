'use client';

import { motion } from 'framer-motion';
import { CHIP_VENDOR_ORDER, CHIP_VENDORS } from '@/content/chipVendors';
import { MotionSection } from '@/components/marketing/MotionSection';
import { ChipCard } from '@/components/marketing/ChipCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const logoClass =
  'h-14 w-auto max-w-[120px] text-dw-tan transition-colors group-hover:text-dw-highlight';

export function ChipOptimization() {
  return (
    <MotionSection
      id="chip-optimization"
      className="relative border-y border-white/[0.06] bg-dw-surface/35 py-section backdrop-blur-sm"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201, 169, 110, 0.07) 0%, transparent 55%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-muted">
            Hardware-aware execution paths
          </p>
          <h2 className="mt-4 font-display text-4xl text-dw-cream sm:text-[2.75rem]">
            Optimized for Every Chip
          </h2>
          <p className="mt-6 text-base leading-relaxed text-dw-muted sm:text-lg">
            Deadwood compiles your Python to run on whatever hardware you choose — NVIDIA, AMD,
            Intel, or Apple Silicon. Each chip gets a custom optimization path: GPU parallelization
            for Monte Carlo, CPU threading for algo trading, Metal acceleration for edge learning.
            You write once. We route smart.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {CHIP_VENDOR_ORDER.map((id) => {
            const v = CHIP_VENDORS[id];
            const Logo = v.Logo;
            return (
              <motion.div key={id} variants={cardVariants} className="min-h-0">
                <ChipCard
                  href={`/chips/${id}`}
                  title={v.title}
                  icon={<Logo className={logoClass} aria-hidden />}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </MotionSection>
  );
}
