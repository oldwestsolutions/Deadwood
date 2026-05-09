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
      { href: '/#models-as-code', label: 'Models as code' },
      { href: '/#chip-optimization', label: 'Chip optimization' },
      { href: '/architecture#layers-intelligence', label: 'Optimization & evaluation' },
      { href: '/#pricing', label: 'Pricing' },
      { href: '/#premium', label: 'Premium' },
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

/** 13×13 grid cells for pixel snowflake (center 6,6). */
function buildSnowflakeCells(): [number, number][] {
  const m = new Map<string, [number, number]>();
  const add = (x: number, y: number) => {
    if (x >= 0 && x <= 12 && y >= 0 && y <= 12) m.set(`${x},${y}`, [x, y]);
  };
  add(6, 6);
  for (let i = 1; i <= 5; i++) {
    add(6, 6 - i);
    add(6, 6 + i);
    add(6 - i, 6);
    add(6 + i, 6);
  }
  for (let i = 1; i <= 4; i++) {
    add(6 - i, 6 - i);
    add(6 + i, 6 + i);
    add(6 - i, 6 + i);
    add(6 + i, 6 - i);
  }
  [
    [5, 3],
    [7, 3],
    [5, 9],
    [7, 9],
    [3, 5],
    [3, 7],
    [9, 5],
    [9, 7],
    [4, 2],
    [8, 2],
    [4, 10],
    [8, 10],
    [2, 4],
    [2, 8],
    [10, 4],
    [10, 8],
  ].forEach(([x, y]) => add(x, y));
  return Array.from(m.values());
}

const footerSnowflakeCells = buildSnowflakeCells();
const footerSnowflakePx = 4;

/** 5×5 mini cross for smaller flakes */
const footerTinySnowflakeCells: [number, number][] = [
  [2, 0],
  [2, 1],
  [2, 3],
  [2, 4],
  [0, 2],
  [1, 2],
  [3, 2],
  [4, 2],
  [2, 2],
];

function FooterSnowflakeGraphic({
  className,
  cells = footerSnowflakeCells,
  pixelSize = footerSnowflakePx,
  fill = '#f2f6fa',
}: {
  className?: string;
  cells?: [number, number][];
  pixelSize?: number;
  fill?: string;
}) {
  let maxX = 0;
  let maxY = 0;
  for (const [x, y] of cells) {
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
  }
  const vbW = (maxX + 1) * pixelSize;
  const vbH = (maxY + 1) * pixelSize;
  return (
    <svg width={vbW} height={vbH} viewBox={`0 0 ${vbW} ${vbH}`} className={className} aria-hidden>
      {cells.map(([cx, cy], i) => (
        <rect
          key={i}
          x={cx * pixelSize}
          y={cy * pixelSize}
          width={pixelSize - 0.5}
          height={pixelSize - 0.5}
          fill={fill}
        />
      ))}
    </svg>
  );
}

/** Deterministic 0–1 for SSR/client parity (no Math.random at module init). */
function footerSnowHash01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 43758.5453) * 43758.5453123;
  return x - Math.floor(x);
}

type FooterFallingFlake = {
  leftPct: number;
  delay: number;
  fallSec: number;
  scale: number;
  pixelSize: number;
  cells: [number, number][];
  rotateSec: number;
  swaySec: number;
  swayX: number;
  opacity: number;
};

const FOOTER_FALLING_SNOW_COUNT = 96;

function buildFooterFallingSnowflakes(count: number): FooterFallingFlake[] {
  return Array.from({ length: count }, (_, i) => {
    const h = (s: number) => footerSnowHash01(i, s);
    const pixelSize = h(3) > 0.72 ? 2 : h(3) > 0.38 ? 3 : 4;
    const cells = h(4) > 0.78 ? footerSnowflakeCells : footerTinySnowflakeCells;
    return {
      leftPct: h(1) * 100,
      delay: h(2) * 18,
      fallSec: 7 + h(5) * 18,
      scale: 0.28 + h(6) * 0.82,
      pixelSize,
      cells,
      rotateSec: 7 + h(7) * 20,
      swaySec: 2.4 + h(8) * 3.8,
      swayX: 5 + h(9) * 22,
      opacity: 0.18 + h(10) * 0.42,
    };
  });
}

const footerFallingSnowflakes = buildFooterFallingSnowflakes(FOOTER_FALLING_SNOW_COUNT);

function FooterSnowflakeAnimations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]" aria-hidden>
      {footerFallingSnowflakes.map((f, i) => (
        <motion.div
          key={i}
          className="absolute left-0 top-0 w-px"
          style={{ left: `${f.leftPct}%` }}
          initial={{ top: '-14%' }}
          animate={{ top: ['-14%', '118%'] }}
          transition={{
            duration: f.fallSec,
            delay: f.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <motion.div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ scale: f.scale, opacity: f.opacity }}
            animate={{ x: [0, f.swayX, -f.swayX * 0.55, f.swayX * 0.35, 0] }}
            transition={{
              duration: f.swaySec,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: f.rotateSec,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <FooterSnowflakeGraphic cells={f.cells} pixelSize={f.pixelSize} fill="#f2f6fa" />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

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
          className="relative mb-14 overflow-hidden rounded-[28px] border border-white/[0.12] bg-black px-7 py-9 shadow-dw-glow-sm sm:px-10 sm:py-10"
        >
          <FooterSnowflakeAnimations />
          <div className="relative z-[1] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-xl">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">
                Create your account
              </p>
              <p className="mt-3 font-display text-2xl leading-snug text-dw-cream sm:text-[1.75rem]">
                One login for training runs, model versions, and production routing—without wiring billing and access by hand.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-dw-muted">
                Sign up to connect repos, issue API keys, and track what shipped—same workspace your team uses from first
                local train through promotion.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center rounded-full bg-dw-tan px-8 py-3.5 text-center text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
                >
                  Create account
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-full border border-dw-tan/35 px-8 py-3.5 text-center text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
                >
                  Sign in
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
