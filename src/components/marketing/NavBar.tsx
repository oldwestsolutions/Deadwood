'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

export function NavBar() {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onScroll = () => {
      if (reduceMotion.matches) {
        setHidden(false);
        return;
      }
      const y = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      if (y < 24) {
        setHidden(false);
        return;
      }
      if (delta > 8 && y > 72) {
        setHidden(true);
      } else if (delta < -8) {
        setHidden(false);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        hidden && '-translate-y-[calc(100%+2rem)] pointer-events-none'
      )}
    >
      <div className="glass-warm mx-4 mt-4 rounded-pill px-6 py-3 sm:mx-8 lg:mx-auto lg:max-w-6xl">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.35em] text-dw-tan sm:text-2xl"
          >
            DEADWOOD
          </Link>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-dw-muted transition-colors hover:text-dw-highlight"
            >
              Client Portal
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/download"
                className="inline-flex items-center justify-center rounded-full bg-dw-tan px-6 py-2.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
              >
                Download
              </Link>
            </motion.div>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
