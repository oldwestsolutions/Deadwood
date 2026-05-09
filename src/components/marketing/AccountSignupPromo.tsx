'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

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

const promoSnowflakeCells = buildSnowflakeCells();
const promoSnowflakePx = 4;

/** 5×5 mini cross for smaller flakes */
const promoTinySnowflakeCells: [number, number][] = [
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

function PromoSnowflakeGraphic({
  className,
  cells = promoSnowflakeCells,
  pixelSize = promoSnowflakePx,
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

function promoSnowHash01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 43758.5453) * 43758.5453123;
  return x - Math.floor(x);
}

type PromoFallingFlake = {
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

const PROMO_FALLING_SNOW_COUNT = 96;

function buildPromoFallingSnowflakes(count: number): PromoFallingFlake[] {
  return Array.from({ length: count }, (_, i) => {
    const h = (s: number) => promoSnowHash01(i, s);
    const pixelSize = h(3) > 0.72 ? 2 : h(3) > 0.38 ? 3 : 4;
    const cells = h(4) > 0.78 ? promoSnowflakeCells : promoTinySnowflakeCells;
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

const promoFallingSnowflakes = buildPromoFallingSnowflakes(PROMO_FALLING_SNOW_COUNT);

function PromoSnowflakeAnimations() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]" aria-hidden>
      {promoFallingSnowflakes.map((f, i) => (
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
              <PromoSnowflakeGraphic cells={f.cells} pixelSize={f.pixelSize} fill="#f2f6fa" />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

type AccountSignupPromoProps = {
  className?: string;
};

export function AccountSignupPromo({ className }: AccountSignupPromoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'relative overflow-hidden rounded-[28px] border border-white/[0.12] bg-black px-7 py-9 shadow-dw-glow-sm sm:px-10 sm:py-10',
        className
      )}
    >
      <PromoSnowflakeAnimations />
      <div className="relative z-[1] flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">Snowflake Premium</p>
          <p className="mt-3 font-display text-2xl leading-snug text-dw-cream sm:text-[1.75rem]">
            One login for trains, models, and routing—tier-managed billing and access.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-dw-muted">
            Connect repos, issue keys, and ship versions from the same workspace—local experiments through production.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/snowflake-premium"
              className="inline-flex items-center justify-center rounded-full bg-dw-tan px-8 py-3.5 text-center text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
            >
              Snowflake Premium
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/whitepaper"
              className="inline-flex items-center justify-center rounded-full border border-dw-tan/35 px-8 py-3.5 text-center text-sm font-semibold text-dw-cream transition-colors hover:border-dw-highlight hover:bg-white/[0.04]"
            >
              Whitepaper
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
