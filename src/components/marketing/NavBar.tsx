'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navLinks: { href: string; label: string; external?: boolean }[] = [
  { href: '/#layers-intelligence', label: 'Layers' },
  { href: '/docs', label: 'Docs' },
  { href: '/pricing', label: 'Pricing' },
  { href: 'https://github.com', label: 'GitHub', external: true },
  { href: '/login', label: 'Sign In' },
];

export function NavBar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06]"
    >
      <div className="glass-warm mx-4 mt-4 rounded-pill px-6 py-3 sm:mx-8 lg:mx-auto lg:max-w-6xl">
        <nav className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display text-xl tracking-[0.35em] text-dw-tan sm:text-2xl"
          >
            DEADWOOD
          </Link>

          <ul className="flex flex-wrap items-center gap-6 text-sm font-medium text-dw-muted">
            {navLinks.map(({ href, label, external }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-dw-highlight"
                  {...(external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-full bg-dw-tan px-6 py-2.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
            >
              Start Running
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
