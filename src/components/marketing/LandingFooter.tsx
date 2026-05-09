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
      { href: '/architecture', label: 'How it works' },
      { href: '/#models-as-code', label: 'Models as code' },
      { href: '/weights-checkpoints', label: 'Weights & checkpoints' },
      { href: '/architecture#chip-optimization', label: 'Chip optimization' },
      { href: '/architecture#layers-intelligence', label: 'Layers of intelligence' },
      { href: '/snowflake-premium', label: 'Snowflake Premium' },
      { href: '/pricing', label: 'Pricing' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { href: '/docs', label: 'Documentation' },
      { href: '/tutorials', label: 'Tutorials & guides' },
      { href: '/docs', label: 'API reference' },
      { href: '/downloads', label: 'Language SDKs' },
      { href: '/features/developer-tools', label: 'Developer tools' },
      {
        href: 'https://status.deadwood.software',
        label: 'System status',
        external: true,
      },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { href: '/solutions', label: 'Use cases' },
      { href: '/applications', label: 'Applications' },
      { href: '/solutions', label: 'Integrations' },
      { href: '/articles', label: 'Customer stories' },
      { href: '/whitepaper', label: 'Whitepapers' },
    ],
  },
  {
    title: 'Learn',
    links: [
      { href: '/articles', label: 'Blog' },
      { href: '/research', label: 'Research papers' },
      { href: '/demonstrations', label: 'Videos & webinars' },
      { href: '/resources', label: 'Infographics' },
      { href: '/support-center', label: 'Glossary' },
      { href: '/snowflake-premium#premium-faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Ecosystem',
    links: [
      { href: '/products', label: 'Marketplace' },
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
      { href: '/demonstrations', label: 'Demonstrations' },
      { href: '/community', label: 'Community showcase' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/support', label: 'About' },
      { href: '/community', label: 'Team' },
      { href: '/join', label: 'Careers' },
      { href: '/articles', label: 'Press & media' },
      { href: '/contact/enterprise', label: 'Contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { href: '/support-center', label: 'Help center' },
      { href: '/support', label: 'Support' },
      { href: '/support', label: 'Privacy & terms' },
      { href: '/features/security', label: 'Compliance' },
      { href: '/features/security', label: 'Security' },
      { href: '/resources', label: 'Site map' },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.06 },
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
      className="relative mt-auto overflow-hidden border-t border-[#1A1814] bg-[#0A0A08]"
    >
      <div className="pointer-events-none absolute inset-0 topo-pattern opacity-[0.35]" aria-hidden />
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
        className="relative mx-auto max-w-[88rem] px-6 pb-14 pt-16 lg:px-8"
      >
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
          <motion.div variants={item} className="lg:col-span-3">
            <p className="font-display text-xl tracking-[0.28em] text-[#C9A96E]">DEADWOOD</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#7A7570]">
              Compute infrastructure for the consequential economy — Python as a Service, Numbers as a Service,
              anchored where it matters.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-start">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-full bg-[#EDE9E0] px-6 py-2.5 text-center text-sm font-bold text-[#0A0A08] shadow-sm transition-opacity hover:opacity-90"
              >
                Sign up
              </Link>
              <Link
                href="/snowflake-premium"
                className="inline-flex items-center justify-center rounded-full border border-[#1A1814] bg-[#0A0A08] px-6 py-2.5 text-center text-sm font-bold text-[#EDE9E0] transition-colors hover:border-dw-tan/40 hover:text-dw-highlight"
              >
                Upgrade to Premium
              </Link>
              <Link
                href="/login"
                className="text-[13px] font-medium text-[#7A7570] underline-offset-4 transition-colors hover:text-dw-highlight hover:underline"
              >
                Sign in
              </Link>
            </div>
            <div className="mt-8 rounded-2xl border border-[#1A1814] bg-dw-surface/40 px-5 py-4 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#7A7570]">Portfolio</p>
              <p className="mt-2 text-sm text-dw-highlight">Old West Solutions · open rails · metered truth</p>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-9 xl:grid-cols-7"
          >
            {columns.map((col) => (
              <div key={col.title} className="min-w-0">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-[#C9A96E]">{col.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map(({ href, label, external }) => (
                    <li key={`${col.title}-${href}-${label}`}>
                      <Link
                        href={href}
                        className="group inline-flex text-[13px] leading-snug text-[#7A7570] transition-colors hover:text-dw-highlight"
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        <span className="relative">
                          {label}
                          <span className="absolute -bottom-px left-0 h-px w-0 bg-dw-tan/50 transition-[width] duration-300 group-hover:w-full" />
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
          className="mt-16 flex flex-col gap-6 border-t border-[#1A1814] pt-10 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              href="/support"
              className="text-[13px] text-[#7A7570] transition-colors hover:text-dw-highlight hover:underline"
            >
              Privacy & legal
            </Link>
            <Link
              href="/support-center"
              className="text-[13px] text-[#7A7570] transition-colors hover:text-dw-highlight hover:underline"
            >
              Trust center
            </Link>
            <Link
              href="/features/security"
              className="text-[13px] text-[#7A7570] transition-colors hover:text-dw-highlight hover:underline"
            >
              Security
            </Link>
          </div>
          <p className="text-[13px] text-[#7A7570]/90 md:text-right">
            © {new Date().getFullYear()} Deadwood Software. All rights reserved.
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-[#7A7570]/55 lg:text-left"
        >
          Part of the Old West Solutions portfolio · Helsinki-quiet ops · warm silicon
        </motion.p>
      </motion.div>
    </motion.footer>
  );
}
