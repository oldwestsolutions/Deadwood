'use client';

import { useId } from 'react';
import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

/** 8-bit ocean: ships, fish, anchor chains to seabed, treasure — hosting metaphor */
function ModelsAsCodeOceanIllustration() {
  const uid = useId().replace(/:/g, '');
  const skyId = `ocean-sky-${uid}`;
  const deepId = `ocean-deep-${uid}`;

  const cell = 10;
  const cols = 26;
  const rowsSky = 8;
  const rowsSea = 22;
  const ox = 14;
  const oy = 12;
  const width = ox * 2 + cols * cell;
  const height = oy * 2 + (rowsSky + rowsSea) * cell + 52;

  const skyTiles: { x: number; y: number; fill: string }[] = [];
  for (let r = 0; r < rowsSky; r++) {
    for (let c = 0; c < cols; c++) {
      const band = r + ((c + r) % 3);
      const fill =
        band < 3 ? '#3d5a80' : band < 5 ? '#4f6f91' : band < 7 ? '#5c7aa3' : '#6b88b5';
      skyTiles.push({ x: ox + c * cell, y: oy + r * cell, fill });
    }
  }

  const seaTiles: { x: number; y: number; fill: string }[] = [];
  for (let r = 0; r < rowsSea; r++) {
    for (let c = 0; c < cols; c++) {
      const wave = Math.floor((c * 3 + r * 5) % 7);
      const depth = r / rowsSea;
      const base =
        depth < 0.25
          ? wave < 3
            ? '#2d6a8f'
            : '#255f82'
          : depth < 0.55
            ? wave < 4
              ? '#1e4d6e'
              : '#1a4360'
            : wave < 3
              ? '#143d52'
              : '#0f3448';
      seaTiles.push({ x: ox + c * cell, y: oy + (rowsSky + r) * cell, fill: base });
    }
  }

  const foam: { x: number; y: number }[] = [];
  for (let c = 0; c < cols; c++) {
    if ((c + rowsSky) % 4 === 0 || (c + rowsSky) % 7 === 2) {
      foam.push({ x: ox + c * cell, y: oy + rowsSky * cell - 4 });
    }
  }

  const seaTop = oy + rowsSky * cell;
  const seaBot = oy + (rowsSky + rowsSea) * cell;
  const u = 5;

  const fp = 4;
  const fishS: [number, number, string][] = [
    [5, 1, '#8ecae6'],
    [6, 1, '#b8e0f0'],
    [4, 2, '#6fb3d2'],
    [5, 2, '#8ecae6'],
    [6, 2, '#219ebc'],
    [7, 2, '#023047'],
    [8, 2, '#6fb3d2'],
    [5, 3, '#8ecae6'],
    [6, 3, '#8ecae6'],
    [7, 3, '#5a90b0'],
    [6, 4, '#6fb3d2'],
  ];
  const fishM: [number, number, string][] = [
    [6, 1, '#7eb8d6'],
    [7, 1, '#a8d4ea'],
    [8, 1, '#7eb8d6'],
    [5, 2, '#5a9eba'],
    [6, 2, '#7eb8d6'],
    [7, 2, '#1a7a9e'],
    [8, 2, '#7eb8d6'],
    [9, 2, '#5a9eba'],
    [10, 2, '#7eb8d6'],
    [6, 3, '#7eb8d6'],
    [7, 3, '#023047'],
    [8, 3, '#7eb8d6'],
    [9, 3, '#5a9eba'],
    [7, 4, '#7eb8d6'],
    [8, 4, '#5a9eba'],
    [9, 4, '#7eb8d6'],
  ];

  const anchorPixels: [number, number, string][] = [
    [2, 0, '#c5d4e8'],
    [1, 1, '#9aadbf'],
    [2, 1, '#b8c5d6'],
    [3, 1, '#9aadbf'],
    [2, 2, '#6e7d90'],
    [2, 3, '#6e7d90'],
    [0, 4, '#5c6778'],
    [4, 4, '#5c6778'],
    [1, 5, '#5c6778'],
    [2, 5, '#7a8b9e'],
    [3, 5, '#5c6778'],
  ];

  const treasurePixels: [number, number, string][] = [
    [3, 0, '#e8c547'],
    [4, 0, '#f4d03f'],
    [5, 0, '#d4af37'],
    [2, 1, '#d4af37'],
    [3, 1, '#f4d03f'],
    [4, 1, '#c9a227'],
    [5, 1, '#f4d03f'],
    [6, 1, '#d4af37'],
    [1, 2, '#5c3d2e'],
    [2, 2, '#6b4423'],
    [3, 2, '#d4af37'],
    [4, 2, '#f4d03f'],
    [5, 2, '#d4af37'],
    [6, 2, '#6b4423'],
    [7, 2, '#5c3d2e'],
    [1, 3, '#5c3d2e'],
    [2, 3, '#6b4423'],
    [3, 3, '#6b4423'],
    [4, 3, '#5c3d2e'],
    [5, 3, '#6b4423'],
    [6, 3, '#6b4423'],
    [7, 3, '#5c3d2e'],
    [2, 4, '#4a3528'],
    [3, 4, '#4a3528'],
    [4, 4, '#d4af37'],
    [5, 4, '#4a3528'],
    [6, 4, '#4a3528'],
    [8, 3, '#f4d03f'],
    [9, 3, '#e8c547'],
    [8, 4, '#e8c547'],
    [9, 4, '#f4d03f'],
    [10, 4, '#f4d03f'],
  ];

  const ss = 4;
  const shipSmall: [number, number, string][] = [
    [3, 0, '#c5cdd9'],
    [3, 1, '#9aa5b4'],
    [2, 2, '#5c4336'],
    [3, 2, '#6d5243'],
    [4, 2, '#5c4336'],
    [1, 3, '#4a3629'],
    [2, 3, '#5a4335'],
    [3, 3, '#4a3629'],
    [4, 3, '#5a4335'],
    [5, 3, '#4a3629'],
    [2, 4, '#3d2b22'],
    [3, 4, '#4a3629'],
    [4, 4, '#3d2b22'],
  ];
  const shipWide: [number, number, string][] = [
    [6, 0, '#d8dee9'],
    [6, 1, '#aeb8c6'],
    [6, 2, '#8d98a8'],
    [4, 3, '#5c4336'],
    [5, 3, '#6d5243'],
    [6, 3, '#5c4336'],
    [7, 3, '#6d5243'],
    [8, 3, '#5c4336'],
    [2, 4, '#4a3629'],
    [3, 4, '#5a4335'],
    [4, 4, '#4a3629'],
    [5, 4, '#5a4335'],
    [6, 4, '#4a3629'],
    [7, 4, '#5a4335'],
    [8, 4, '#4a3629'],
    [9, 4, '#5a4335'],
    [10, 4, '#4a3629'],
    [3, 5, '#3d2b22'],
    [4, 5, '#4a3629'],
    [5, 5, '#3d2b22'],
    [6, 5, '#4a3629'],
    [7, 5, '#3d2b22'],
    [8, 5, '#4a3629'],
    [9, 5, '#3d2b22'],
  ];
  const shipTiny: [number, number, string][] = [
    [2, 0, '#aeb8c6'],
    [1, 1, '#4a3629'],
    [2, 1, '#5a4335'],
    [3, 1, '#4a3629'],
    [2, 2, '#3d2b22'],
    [3, 2, '#4a3629'],
  ];

  const chainLink = (cx: number, y0: number, y1: number) => {
    const links: { x: number; y: number }[] = [];
    for (let y = y0; y < y1; y += 7) {
      links.push({ x: cx - 2, y });
    }
    return links;
  };

  const sandTop = seaBot - cell * 2;
  const anchorDropY = sandTop - 6 * u - 6;
  const anchorLeftX = ox + 14;
  const anchorRightX = ox + cols * cell - 40;
  const chainTop = oy + rowsSky * cell - 10;
  const chainBottom = anchorDropY + 10;

  const swimSpan = cols * cell + fp * 28;

  function FishLane({
    baseY,
    pixels,
    dur,
    delay = 0,
  }: {
    baseY: number;
    pixels: [number, number, string][];
    dur: number;
    delay?: number;
  }) {
    return (
      <g transform={`translate(${ox}, ${baseY})`}>
        <motion.g
          animate={{ x: [-fp * 16, swimSpan, -fp * 16] }}
          transition={{ duration: dur, repeat: Infinity, ease: 'linear', delay }}
        >
          {pixels.map(([dx, dy, fill], i) => (
            <rect
              key={`${baseY}-${i}`}
              x={dx * fp}
              y={dy * fp}
              width={fp - 1}
              height={fp - 1}
              fill={fill}
            />
          ))}
        </motion.g>
      </g>
    );
  }

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="h-auto w-full text-dw-muted"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={skyId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7aa8d8" stopOpacity={0.35} />
          <stop offset="100%" stopColor="#2d6a8f" stopOpacity={0} />
        </linearGradient>
        <linearGradient id={deepId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e4d6e" stopOpacity={0.15} />
          <stop offset="100%" stopColor="#081820" stopOpacity={0.55} />
        </linearGradient>
      </defs>
      <rect x={0} y={0} width={width} height={height} rx={12} fill="#0a1628" />
      <rect x={ox} y={oy} width={cols * cell} height={rowsSky * cell} fill={`url(#${skyId})`} />

      {skyTiles.map((t, i) => (
        <rect key={`s-${i}`} x={t.x} y={t.y} width={cell - 1} height={cell - 1} fill={t.fill} opacity={0.55} />
      ))}

      {/* Pixel sun */}
      <g transform={`translate(${ox + cols * cell - 52}, ${oy + 16})`}>
        {[
          [2, 0],
          [1, 1],
          [2, 1],
          [3, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [3, 2],
          [4, 2],
          [1, 3],
          [2, 3],
          [3, 3],
          [2, 4],
        ].map(([dx, dy], i) => (
          <rect key={i} x={dx * 5} y={dy * 5} width={4} height={4} fill="#f4d06f" opacity={0.9} />
        ))}
      </g>

      <rect
        x={ox}
        y={oy + rowsSky * cell}
        width={cols * cell}
        height={rowsSea * cell}
        fill={`url(#${deepId})`}
      />
      {seaTiles.map((t, i) => (
        <rect key={`w-${i}`} x={t.x} y={t.y} width={cell - 1} height={cell - 1} fill={t.fill} />
      ))}

      {foam.map((f, i) => (
        <rect key={`f-${i}`} x={f.x} y={f.y} width={cell - 2} height={3} fill="#c8e6ff" opacity={0.35} rx={0.5} />
      ))}

      {/* Ships — pixel silhouettes on the horizon */}
      <g opacity={0.92}>
        <g transform={`translate(${ox + 38}, ${seaTop - ss * 5})`}>
          {shipTiny.map(([dx, dy, fill], i) => (
            <rect key={`st-${i}`} x={dx * ss} y={dy * ss} width={ss - 1} height={ss - 1} fill={fill} />
          ))}
        </g>
        <g transform={`translate(${ox + 92}, ${seaTop - ss * 6})`}>
          {shipSmall.map(([dx, dy, fill], i) => (
            <rect key={`ss-${i}`} x={dx * ss} y={dy * ss} width={ss - 1} height={ss - 1} fill={fill} />
          ))}
        </g>
        <g transform={`translate(${ox + cols * cell - 58 - 11 * ss}, ${seaTop - ss * 7})`}>
          {shipWide.map(([dx, dy, fill], i) => (
            <rect key={`sw-${i}`} x={dx * ss} y={dy * ss} width={ss - 1} height={ss - 1} fill={fill} />
          ))}
        </g>
      </g>

      {/* “Cable” path — data lane */}
      <g opacity={0.45}>
        {Array.from({ length: 18 }, (_, i) => (
          <rect
            key={`c-${i}`}
            x={ox + 8 + i * 14}
            y={oy + rowsSky * cell + 40 + ((i * 3) % 5) * cell}
            width={6}
            height={6}
            fill="#C9A96E"
          />
        ))}
      </g>

      {/* 8-bit fish */}
      <g opacity={0.88}>
        <FishLane baseY={seaTop + cell * 5} pixels={fishS} dur={24} />
        <FishLane baseY={seaTop + cell * 9} pixels={fishM} dur={32} delay={3} />
        <FishLane baseY={seaTop + cell * 13} pixels={fishS} dur={28} delay={9} />
        <FishLane baseY={sandTop - cell * 5} pixels={fishM} dur={36} delay={5} />
      </g>

      {/* Anchor chains — manifests / commits */}
      <g opacity={0.65}>
        {chainLink(anchorLeftX + 2 * u + Math.floor(u / 2), chainTop, chainBottom).map((p, i) => (
          <rect key={`cl-${i}`} x={p.x} y={p.y} width={5} height={5} rx={1} fill="#8fa8bf" />
        ))}
        {chainLink(anchorRightX + 2 * u + Math.floor(u / 2), chainTop, chainBottom).map((p, i) => (
          <rect key={`cr-${i}`} x={p.x} y={p.y} width={5} height={5} rx={1} fill="#8fa8bf" />
        ))}
      </g>

      {/* Anchors */}
      <g transform={`translate(${anchorLeftX}, ${anchorDropY})`}>
        {anchorPixels.map(([dx, dy, fill], i) => (
          <rect key={`al-${i}`} x={dx * u} y={dy * u} width={u - 1} height={u - 1} fill={fill} />
        ))}
      </g>
      <g transform={`translate(${anchorRightX}, ${anchorDropY})`}>
        {anchorPixels.map(([dx, dy, fill], i) => (
          <rect key={`ar-${i}`} x={dx * u} y={dy * u} width={u - 1} height={u - 1} fill={fill} />
        ))}
      </g>

      {/* Seabed sand + treasure — marketplace / sell */}
      <rect
        x={ox}
        y={seaBot - cell * 2}
        width={cols * cell}
        height={cell * 2}
        fill="#1a2f24"
        opacity={0.85}
      />
      <g transform={`translate(${ox + (cols * cell) / 2 - 28}, ${sandTop - u * 14 - 4})`} opacity={0.98}>
        {treasurePixels.map(([dx, dy, fill], i) => (
          <rect key={`t-${i}`} x={dx * u} y={dy * u} width={u - 1} height={u - 1} fill={fill} />
        ))}
        <motion.text
          x={0}
          y={-8}
          fill="#C9A96E"
          fontSize={9}
          fontFamily="ui-monospace, monospace"
          letterSpacing="0.12em"
          animate={{ opacity: [0.72, 1, 0.72] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          MARKET
        </motion.text>
      </g>

      <motion.text
        x={ox}
        y={height - 28}
        fill="#7A7570"
        fontSize={9}
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.03em"
        animate={{ opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
      >
        anchors → manifests, commits, eval
      </motion.text>
      <motion.text
        x={ox}
        y={height - 12}
        fill="#7A7570"
        fontSize={9}
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.03em"
        animate={{ opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
      >
        treasure → publish &amp; earn (marketplace payouts)
      </motion.text>
    </svg>
  );
}

export function UseCases() {
  return (
    <MotionSection
      id="models-as-code"
      className="relative flex min-h-[100dvh] min-h-[100vh] flex-col justify-center overflow-hidden py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-dw-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-dw-tan/35 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="font-sans text-xs uppercase tracking-[0.22em] text-dw-tan"
          >
            Ship models like code, store them like data
          </motion.p>
        </div>

        {/* Two-column: copy + yaml */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight text-dw-cream lg:text-[32px]">
              Define Your Models
            </h3>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-dw-muted">
              <p>
                Think of your AI models the same way you think about your application code. You add a small
                config file called <span className="text-dw-cream">`.deadwood.yml`</span> next to everything
                else in your repository. In plain language, it lists your models, what data they learn from,
                and which model should be running in production when someone uses your product.
              </p>
              <p>
                When you are happy with a change, you commit and push like normal. There is no separate
                “deployment button” for the model: updating production is part of the same git workflow your
                team already knows. That keeps releases predictable and easy to roll back if something looks
                wrong.
              </p>
              <p>
                The trained model files (the weights) are stored on a decentralized network, so copies live in
                many places instead of on one company&apos;s hard drive. If one host disappears, the data can
                still be fetched from elsewhere, so you are not betting everything on a single machine staying
                online forever.
              </p>
              <p>
                Whenever production switches from one model version to another, that change is written to a
                permanent record. Later you can see what was live and when—helpful for debugging, compliance,
                or just explaining to your team what shipped last Tuesday.
              </p>
            </div>
            <ul className="mt-8 space-y-4 border-l border-dw-tan/25 pl-6 font-sans text-sm leading-relaxed text-dw-muted">
              <li>
                The ledger keeps a permanent, timestamped record of production changes—who pointed traffic at
                which model and when—so audits do not rely on chat logs or fuzzy memory.
              </li>
              <li>
                Every model change is version control: branches, tags, and merges work the same way they do
                for your code, so you always know which definition shipped with which release.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-gradient-to-br from-dw-surface/55 via-dw-bg/95 to-dw-bg p-1 shadow-dw-lift"
          >
            <div className="rounded-[22px] border border-dw-tan/12 bg-[#070f18]/95 px-4 py-4 backdrop-blur-xl sm:px-5 sm:py-5">
              <div className="mb-3 flex items-center gap-2 border-b border-white/[0.06] pb-3">
                <span className="h-2 w-2 rounded-full bg-dw-tan/75" />
                <motion.span
                  className="text-[10px] uppercase tracking-wider text-dw-muted sm:text-[11px]"
                  animate={{ opacity: [0.78, 1, 0.78] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Ocean context · 8-bit chart
                </motion.span>
              </div>
              <div className="relative overflow-hidden rounded-[14px] border border-[#1e4d6e]/40 bg-[#081820]">
                <ModelsAsCodeOceanIllustration />
              </div>
            </div>
            <p className="border-t border-white/[0.06] bg-dw-surface/25 px-4 py-3.5 font-sans text-sm leading-relaxed text-dw-muted sm:px-5">
              Same mental model as sea-scale hosting (think{' '}
              <span className="text-dw-cream">DigitalOcean</span>-style regions):{' '}
              <span className="text-dw-cream">anchors</span> stand for grounding—manifests, commits, and evaluation tied
              to real artifacts. The <span className="text-dw-cream">treasure</span> on the floor is the upside: publish
              models to the marketplace and capture payouts when others ship them. Currents still route traffic;{' '}
              <span className="font-mono text-dw-highlight">.deadwood.yml</span> stays your chart, and the ledger logs every
              promotion.
            </p>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
