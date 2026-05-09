'use client';

import Link from 'next/link';
import { useId } from 'react';
import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';

/** Pixel scale inside the faux browser game */
const U = 4;

function PremiumIllustration() {
  const uid = useId().replace(/:/g, '');
  const clipId = `browser-game-${uid}`;
  const skyId = `browser-sky-${uid}`;
  const chromeId = `browser-chrome-${uid}`;

  const win = { x: 8, y: 8, w: 432, h: 296, rx: 14 };
  const pad = 10;
  const titleH = 36;
  const urlY = win.y + titleH + 6;
  const urlH = 28;
  const game = {
    x: win.x + pad,
    y: urlY + urlH + 10,
    w: win.w - pad * 2,
    h: win.y + win.h - (urlY + urlH + 10) - pad,
    rx: 8,
  };

  const stars = Array.from({ length: 52 }, (_, i) => ({
    x: game.x + 6 + ((i * 97) % Math.max(1, game.w - 14)),
    y: game.y + 8 + ((i * 53) % Math.max(1, game.h - 88)),
    s: 1 + (i % 2),
    o: 0.25 + (i % 4) * 0.15,
  }));

  const gx0 = game.x;
  const gy0 = game.y;
  const gh = game.h;
  const gw = game.w;
  const groundY = gy0 + gh - 44;

  const goalBlocks: [number, number, string][] = [
    [12, 0, '#9ECADF'],
    [8, U, '#7BA7BC'],
    [16, U, '#7BA7BC'],
    [8, U * 2, '#5A89A0'],
    [12, U * 2, '#E0F5FF'],
    [16, U * 2, '#5A89A0'],
    [10, U * 3, '#4a7384'],
    [14, U * 3, '#4a7384'],
  ];

  return (
    <svg
      viewBox="0 0 448 312"
      className="relative h-auto w-full min-w-0 max-w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={skyId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="55%" stopColor="#152238" />
          <stop offset="100%" stopColor="#0c1420" />
        </linearGradient>
        <linearGradient id={chromeId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3834" />
          <stop offset="100%" stopColor="#242220" />
        </linearGradient>
        <clipPath id={clipId}>
          <rect x={game.x} y={game.y} width={game.w} height={game.h} rx={game.rx} />
        </clipPath>
      </defs>

      <ellipse cx={224} cy={306} rx={200} ry={14} fill="#000000" opacity={0.22} />

      {/* Browser shell */}
      <rect
        x={win.x}
        y={win.y}
        width={win.w}
        height={win.h}
        rx={win.rx}
        fill="#0f0e0c"
        stroke="#C9A96E"
        strokeOpacity={0.28}
        strokeWidth={1.25}
      />

      {/* Title bar */}
      <rect
        x={win.x + 6}
        y={win.y + 6}
        width={win.w - 12}
        height={titleH - 4}
        rx={10}
        fill={`url(#${chromeId})`}
      />
      <circle cx={win.x + 26} cy={win.y + titleH / 2 + 2} r={5} fill="#ff5f57" opacity={0.92} />
      <circle cx={win.x + 44} cy={win.y + titleH / 2 + 2} r={5} fill="#febc2e" opacity={0.92} />
      <circle cx={win.x + 62} cy={win.y + titleH / 2 + 2} r={5} fill="#28c840" opacity={0.92} />

      {/* Tab */}
      <rect
        x={win.x + 84}
        y={win.y + 14}
        width={218}
        height={22}
        rx={6}
        fill="#1a1916"
        stroke="#C9A96E"
        strokeOpacity={0.18}
      />
      <text
        x={win.x + 94}
        y={win.y + 29}
        fill="#C9A96E"
        fontSize={10}
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.04em"
      >
        Deadwood Software
      </text>

      {/* Address bar */}
      <rect
        x={win.x + pad}
        y={urlY}
        width={win.w - pad * 2}
        height={urlH}
        rx={8}
        fill="#080807"
        stroke="#2a2824"
        strokeWidth={1}
      />
      <path
        d={`M ${win.x + pad + 22} ${urlY + 9} h 10 v 10 h -10 Z`}
        fill="none"
        stroke="#5A89A0"
        strokeWidth={1.2}
        opacity={0.65}
      />
      <text
        x={win.x + pad + 38}
        y={urlY + 19}
        fill="#9ECADF"
        fontSize={11}
        fontFamily="ui-monospace, monospace"
      >
        https://train.floppydisk.cc/premium
      </text>

      {/* Game bezel */}
      <rect
        x={game.x - 3}
        y={game.y - 3}
        width={game.w + 6}
        height={game.h + 6}
        rx={game.rx + 2}
        fill="none"
        stroke="#1f1d19"
        strokeWidth={2}
      />

      <g clipPath={`url(#${clipId})`}>
        <rect x={game.x} y={game.y} width={game.w} height={game.h} fill={`url(#${skyId})`} />

        {stars.map((s, i) => (
          <rect key={i} x={s.x} y={s.y} width={s.s} height={s.s} fill="#E0F5FF" opacity={s.o} rx={0.5} />
        ))}

        <g opacity={0.35}>
          {[0, 1, 2].map((i) => (
            <rect
              key={i}
              x={gx0 + gw * (0.05 + i * 0.31)}
              y={gy0 + 24 + (i % 2) * 14}
              width={Math.min(124, gw * 0.26)}
              height={16}
              rx={2}
              fill="#243d52"
            />
          ))}
        </g>

        <g>
          <rect
            x={gx0 + gw * 0.06}
            y={gy0 + gh * 0.38}
            width={gw * 0.32}
            height={12}
            rx={2}
            fill="#4a4336"
            stroke="#C9A96E"
            strokeOpacity={0.25}
          />
          <rect
            x={gx0 + gw * 0.54}
            y={gy0 + gh * 0.3}
            width={gw * 0.28}
            height={12}
            rx={2}
            fill="#4a4336"
            stroke="#C9A96E"
            strokeOpacity={0.25}
          />
        </g>

        <rect x={gx0} y={groundY} width={gw} height={gy0 + gh - groundY} fill="#2d5234" />
        {Array.from({ length: Math.ceil(gw / 10) }, (_, i) => (
          <rect
            key={i}
            x={gx0 + i * 10}
            y={groundY + ((i % 2) + (i % 3)) * 4}
            width={6}
            height={4}
            fill="#3d6b45"
            opacity={0.65}
          />
        ))}

        {/* Goal: warehouse stack + SF badge */}
        <g transform={`translate(${gx0 + gw - 104}, ${groundY - 56})`}>
          <text x={4} y={-6} fill="#C9A96E" fontSize={10} fontFamily="ui-monospace, monospace" opacity={0.9}>
            SF
          </text>
          {goalBlocks.map(([x, y, c], i) => (
            <rect key={i} x={Number(x)} y={Number(y)} width={U * 2 - 1} height={U * 2 - 1} fill={String(c)} />
          ))}
        </g>

        {/* Runner sprite */}
        <g transform={`translate(${gx0 + gw * 0.13}, ${groundY - 36})`}>
          <rect x={0} y={8} width={18} height={6} fill="#C9A96E" rx={1} />
          <rect x={4} y={0} width={10} height={10} fill="#D4B896" rx={1} />
          <rect x={6} y={2} width={3} height={3} fill="#1a1814" />
          <rect x={11} y={2} width={3} height={3} fill="#1a1814" />
          <rect x={2} y={14} width={5} height={10} fill="#3d5a66" />
          <rect x={11} y={14} width={5} height={10} fill="#3d5a66" />
          <rect x={-2} y={12} width={6} height={4} fill="#D4B896" rx={1} />
        </g>

        <g opacity={0.045} stroke="#fff" strokeWidth={0.6}>
          {Array.from({ length: Math.floor(gh / 4) }, (_, i) => (
            <line key={i} x1={gx0} y1={gy0 + i * 4} x2={gx0 + gw} y2={gy0 + i * 4} />
          ))}
        </g>

        <rect
          x={gx0 + 10}
          y={gy0 + 10}
          width={gw - 20}
          height={28}
          rx={4}
          fill="#0a0a08"
          fillOpacity={0.72}
          stroke="#C9A96E"
          strokeOpacity={0.2}
        />
        <text x={gx0 + 20} y={gy0 + 28} fill="#E0F5FF" fontSize={11} fontFamily="ui-monospace, monospace">
          SCORE 94120 · EPOCH 12/24 · API 62.4K
        </text>

        <rect
          x={gx0 + gw * 0.06}
          y={gy0 + gh - 58}
          width={gw * 0.88}
          height={44}
          rx={6}
          fill="#0c0b09"
          fillOpacity={0.88}
          stroke="#C9A96E"
          strokeOpacity={0.35}
        />
        <text x={gx0 + gw * 0.1} y={gy0 + gh - 38} fill="#EDE9E0" fontSize={11} fontFamily="ui-monospace, monospace">
          TRAINING RUN… Snowflake query pool
        </text>
        <rect
          x={gx0 + gw * 0.1}
          y={gy0 + gh - 28}
          width={gw * 0.8}
          height={10}
          rx={2}
          fill="#1a1814"
          stroke="#33302c"
        />
        <rect
          x={gx0 + gw * 0.1 + 2}
          y={gy0 + gh - 26}
          width={(gw * 0.8 - 4) * 0.72}
          height={6}
          rx={1}
          fill="#4a9f6e"
        />
        <text
          x={gx0 + gw * 0.9 - 8}
          y={gy0 + gh - 19}
          fill="#7A7570"
          fontSize={10}
          fontFamily="ui-monospace, monospace"
          textAnchor="end"
        >
          82%
        </text>
      </g>

      {/* Gloss pass over chrome */}
      <path
        d={`M ${win.x + win.w * 0.55} ${win.y + 24} Q ${win.x + win.w * 0.85} ${win.y + 90} ${win.x + win.w - 20} ${win.y + 140}`}
        stroke="#ffffff"
        strokeOpacity={0.06}
        strokeWidth={28}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ConsequentialLearning() {
  return (
    <MotionSection id="premium" className="relative py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-5 lg:pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-muted">
              Premium
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-dw-cream sm:text-[2.75rem]">
              Production Paths
            </h2>
            <p className="mt-6 text-base leading-relaxed text-dw-muted sm:text-lg">
              Open a Premium account for higher API and training quotas, Snowflake-connected datasets, and private,
              versioned weight storage—so your team can promote models through the same git workflow with room to grow.
            </p>
            <motion.div className="mt-10" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/register?tier=premium"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
              >
                Get Premium
              </Link>
            </motion.div>
          </div>

          <div className="relative lg:col-span-7">
            <motion.figure
              initial={{ opacity: 0, rotate: -0.4 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="relative overflow-hidden rounded-[28px] border border-dw-tan/15 bg-gradient-to-br from-dw-tan/[0.07] via-dw-surface/90 to-dw-bg p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_80px_rgba(0,0,0,0.35)] sm:p-7 lg:ml-8 lg:-translate-y-4"
            >
              <div
                className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12)_0%,transparent_68%)] blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,184,150,0.08)_0%,transparent_65%)] blur-2xl"
                aria-hidden
              />
              <div className="relative flex min-h-[260px] items-stretch py-1 sm:min-h-[300px] sm:py-2">
                <PremiumIllustration />
              </div>
              <figcaption className="sr-only">
                Illustration of a web browser window running a retro pixel training simulation: URL bar, tab titled Deadwood
                Software, in-game HUD with score and epoch counter, a runner sprite, Snowflake-style warehouse goal, and a
                training progress bar for Premium.
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
