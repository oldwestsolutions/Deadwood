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
        'fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
        hidden && '-translate-y-[calc(100%+2rem)] pointer-events-none'
      )}
    >
      <div className="glass-warm mx-4 mt-4 max-w-xl rounded-pill px-4 py-2.5 shadow-sm sm:mx-auto sm:mt-5 sm:max-w-2xl sm:px-6 sm:py-3 md:max-w-3xl lg:max-w-4xl xl:max-w-[56rem]">
        <nav className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <Link
            href="/"
            className="min-h-[44px] min-w-[44px] font-display text-lg tracking-[0.28em] text-dw-tan sm:text-xl sm:tracking-[0.35em] md:text-2xl"
          >
            DEADWOOD
          </Link>

          <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 sm:gap-x-6">
            <Link
              href="/treasury"
              className="min-h-[44px] inline-flex items-center text-sm font-medium text-dw-muted transition-colors hover:text-dw-highlight"
            >
              Treasury
            </Link>
            <Link
              href="/login"
              className="min-h-[44px] inline-flex items-center text-sm font-medium text-dw-muted transition-colors hover:text-dw-highlight"
            >
              Client Portal
            </Link>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/download"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-dw-tan px-5 py-2.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow sm:px-6"
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
