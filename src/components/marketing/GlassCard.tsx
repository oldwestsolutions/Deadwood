'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hoverLift?: boolean;
};

export function GlassCard({
  children,
  className,
  hoverLift = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? { y: -6, boxShadow: '0 0 48px rgba(201, 169, 110, 0.12)' }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className={cn(
        'rounded-[22px] glass-warm shadow-dw-lift',
        hoverLift && 'cursor-default',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
