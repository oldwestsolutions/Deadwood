'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { href: '/#gitlab-ci', label: 'GitLab CI' },
      { href: '/#chip-optimization', label: 'Chip optimization' },
      { href: '/#layers-intelligence', label: 'Nine layers' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/#learning', label: 'Educational AI' },
      { href: '/products', label: 'Products' },
      { href: '/solutions', label: 'Solutions' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { href: '/docs', label: 'Documentation' },
      { href: '/tutorials', label: 'Tutorials' },
      { href: '/resources', label: 'Resources' },
      { href: '/downloads', label: 'Downloads' },
      { href: '/features/developer-tools', label: 'Developer tools' },
      {
        href: 'https://github.com',
        label: 'GitHub',
        external: true,
      },
      {
        href: 'https://status.deadwood.software',
        label: 'System status',
        external: true,
      },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      {
        href: 'https://general.exchange',
        label: 'general.exchange',
        external: true,
      },
      {
        href: 'https://52pickup.cc',
        label: '52pickup.cc',
        external: true,
      },
      { href: '/applications', label: 'Applications' },
      { href: '/demonstrations', label: 'Demonstrations' },
      { href: '/research', label: 'Research' },
      { href: '/community', label: 'Community' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/join', label: 'Join / Waitlist' },
      { href: '/newsletter', label: 'Newsletter' },
      { href: '/articles', label: 'Articles' },
      { href: '/support', label: 'Support' },
      { href: '/support-center', label: 'Help center' },
      {
        href: 'https://twitter.com',
        label: 'Twitter / X',
        external: true,
      },
      { href: '/login', label: 'Sign in' },
      { href: '/register', label: 'Create account' },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { href: '/support', label: 'Privacy & legal' },
  { href: '/support-center', label: 'Trust center' },
  { href: '/features/security', label: 'Security' },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LandingFooter() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65 }}
      className="relative mt-auto overflow-hidden border-t border-white/[0.07] bg-dw-bg"
    >
      <div
        className="pointer-events-none absolute inset-0 topo-pattern opacity-[0.35]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_70%_at_50%_100%,rgba(201,169,110,0.14)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dw-tan/20 to-transparent"
        aria-hidden
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="relative mx-auto max-w-6xl px-6 pb-14 pt-16 lg:px-8"
      >
        <motion.div
          variants={item}
          className="mb-14 rounded-[28px] glass-warm px-7 py-9 shadow-dw-glow-sm sm:px-10 sm:py-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">
                Signals from the mesh
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-dw-cream sm:text-[1.75rem]">
                Cycle drops, roadmap sketches, and runner telemetry — distilled for builders.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dw-muted">
                No fluff. Occasional notes when Snowflake pools rotate, chains handshake, or new
                APIs ship.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/newsletter"
                  className="inline-flex items-center justify-center rounded-full bg-dw-tan px-8 py-3.5 text-center text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
                >
                  Subscribe
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/join"
                  className="inline-flex items-center justify-center rounded-full border border-dw-tan/35 px-8 py-3.5 text-center text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
                >
                  Join waitlist
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <motion.div variants={item} className="lg:col-span-4">
            <p className="font-display text-xl tracking-[0.28em] text-dw-tan">DEADWOOD</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-dw-muted">
              Compute infrastructure for the consequential economy — Python as a Service,
              Numbers as a Service, anchored where it matters.
            </p>
            <div className="mt-8 rounded-2xl border border-white/[0.06] bg-dw-surface/40 px-5 py-4 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-dw-muted">
                Portfolio
              </p>
              <p className="mt-2 text-sm text-dw-highlight">
                Old West Solutions · open rails · metered truth
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 lg:col-span-8"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-dw-tan/90">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map(({ href, label, external }) => (
                    <li key={`${col.title}-${href}-${label}`}>
                      <Link
                        href={href}
                        className="group inline-flex text-sm text-dw-muted transition-colors hover:text-dw-highlight"
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <span className="relative">
                          {label}
                          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-dw-tan/60 transition-[width] duration-300 group-hover:w-full" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="mt-16 flex flex-col gap-6 border-t border-white/[0.06] pt-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map(({ href, label, external }) => (
              <Link
                key={href + label}
                href={href}
                className="text-xs text-dw-muted transition-colors hover:text-dw-highlight"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-dw-muted/80 md:text-right">
            © {new Date().getFullYear()} Deadwood Software. All rights reserved.
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-dw-muted/55 lg:text-left"
        >
          Part of the Old West Solutions portfolio · Helsinki-quiet ops · warm silicon
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
