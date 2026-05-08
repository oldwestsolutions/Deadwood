'use client';

import { motion } from 'framer-motion';
import type { LayerSlug } from '@/content/intelligenceLayers';
import { LayerGlyph } from '@/components/layers/layerIcons';

export function LayerHeroVisual({ slug }: { slug: LayerSlug }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-square max-h-[380px] w-full overflow-hidden rounded-[28px] border border-white/[0.1] bg-dw-surface/50 p-10 backdrop-blur-xl"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(201,169,110,0.2), transparent 55%), radial-gradient(circle at 70% 70%, rgba(212,184,150,0.08), transparent 50%)',
        }}
      />
      <motion.div
        className="relative flex h-full items-center justify-center text-dw-tan"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <LayerGlyph slug={slug} className="h-40 w-40 sm:h-44 sm:w-44" strokeWidth={0.9} />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-dw-tan/35 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
