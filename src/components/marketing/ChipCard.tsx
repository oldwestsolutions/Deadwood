'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export type ChipCardProps = {
  icon: ReactNode;
  title: string;
  href: string;
};

export function ChipCard({ icon, title, href }: ChipCardProps) {
  return (
    <Link
      href={href}
      aria-label={`${title}: view hardware details`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-dw-tan focus-visible:ring-offset-2 focus-visible:ring-offset-dw-bg"
    >
      <motion.div
        className="chip-card flex flex-col items-center text-center"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="chip-icon flex shrink-0 items-center justify-center">{icon}</div>
        <h3 className="font-display text-2xl text-dw-cream">{title}</h3>
      </motion.div>
    </Link>
  );
}
