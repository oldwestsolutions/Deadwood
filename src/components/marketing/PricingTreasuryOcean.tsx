'use client';

import { useId } from 'react';
import { motion } from 'framer-motion';

const cw = 8;

/** Small 8-bit fish facing right */
const fishMini: [number, number, string][] = [
  [4, 1, '#8ecae6'],
  [5, 1, '#b8e0f0'],
  [3, 2, '#6fb3d2'],
  [4, 2, '#219ebc'],
  [5, 2, '#023047'],
  [6, 2, '#8ecae6'],
  [4, 3, '#8ecae6'],
  [5, 3, '#6fb3d2'],
];

const chestPixels: [number, number, string][] = [
  [2, 0, '#e8c547'],
  [3, 0, '#f4d03f'],
  [4, 0, '#d4af37'],
  [1, 1, '#d4af37'],
  [2, 1, '#f4d03f'],
  [3, 1, '#c9a227'],
  [4, 1, '#f4d03f'],
  [5, 1, '#d4af37'],
  [1, 2, '#5c3d2e'],
  [2, 2, '#6b4423'],
  [3, 2, '#d4af37'],
  [4, 2, '#f4d03f'],
  [5, 2, '#6b4423'],
  [2, 3, '#4a3528'],
  [3, 3, '#d4af37'],
  [4, 3, '#4a3528'],
];

const fishWcells = 7;

function FishSprite({ fp, flip }: { fp: number; flip: boolean }) {
  const w = fishWcells * fp;
  return (
    <g transform={flip ? `translate(${w},0) scale(-1,1)` : undefined}>
      {fishMini.map(([dx, dy, fill], i) => (
        <rect key={i} x={dx * fp} y={dy * fp} width={fp - 1} height={fp - 1} fill={fill} />
      ))}
    </g>
  );
}

/**
 * Billing ocean: fish swim the full width; treasure chests rest on the seabed (tokens → treasury).
 */
export function PricingTreasuryOcean() {
  const uid = useId().replace(/:/g, '');
  const skyGrad = `pricing-treasury-sky-${uid}`;
  const vbW = 460;
  const vbH = 192;
  const horizon = 44;
  const seabedH = 28;
  const seaBot = vbH - seabedH;
  const ox = 10;

  const tu = 4;
  const chestPixelH = 4;
  const chestY = seaBot - chestPixelH * tu - 6;

  /** Chest anchors (left edge), spaced along the seabed */
  const chestXs = [ox + 14, vbW * 0.28, vbW * 0.52, vbW - ox - 38];

  const fishLanes = [
    { y: horizon + 18, dur: 14, delay: 0, dir: 1 as const, fp: 4 },
    { y: horizon + 32, dur: 20, delay: 1.2, dir: -1 as const, fp: 3 },
    { y: horizon + 48, dur: 17, delay: 0.4, dir: 1 as const, fp: 4 },
    { y: horizon + 62, dur: 24, delay: 3.5, dir: -1 as const, fp: 3 },
    { y: horizon + 78, dur: 12, delay: 0.8, dir: 1 as const, fp: 3 },
    { y: horizon + 86, dur: 18, delay: 5, dir: -1 as const, fp: 4 },
    { y: horizon + 54, dur: 27, delay: 7, dir: 1 as const, fp: 3 },
  ];

  const skyTiles: { x: number; y: number; fill: string }[] = [];
  const skyRows = Math.ceil(horizon / (cw - 1));
  const skyCols = Math.ceil((vbW - ox * 2) / (cw - 1));
  for (let r = 0; r < skyRows; r++) {
    for (let c = 0; c < skyCols; c++) {
      const band = r + ((c + r) % 3);
      const fill =
        band < 2 ? '#1a2838' : band < 4 ? '#243041' : band < 6 ? '#2d3d4e' : '#354656';
      skyTiles.push({ x: ox + c * (cw - 1), y: r * (cw - 1), fill });
    }
  }

  const seaTiles: JSX.Element[] = [];
  for (let y = horizon; y < seaBot; y += cw - 1) {
    for (let x = ox; x < vbW - ox; x += cw - 1) {
      const wave = Math.floor((x / 11 + y / 13) % 3);
      const fill = wave === 0 ? '#1e4d6e' : wave === 1 ? '#255f82' : '#1a4360';
      seaTiles.push(<rect key={`w-${x}-${y}`} x={x} y={y} width={cw - 1} height={cw - 1} fill={fill} />);
    }
  }

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className="h-auto w-full overflow-visible rounded-[14px] border border-[#1e4d6e]/40 bg-[#070f14]"
      aria-hidden
    >
      <defs>
        <linearGradient id={skyGrad} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d5570" stopOpacity={0.14} />
          <stop offset="100%" stopColor="#1a2838" stopOpacity={0} />
        </linearGradient>
      </defs>

      {skyTiles.map((t, i) => (
        <rect key={`sky-${i}`} x={t.x} y={t.y} width={cw - 1} height={cw - 1} fill={t.fill} opacity={0.62} />
      ))}
      <rect x={0} y={0} width={vbW} height={horizon} fill={`url(#${skyGrad})`} />

      {Array.from({ length: Math.floor((vbW - ox * 2) / 24) }, (_, i) => (
        <rect
          key={`foam-${i}`}
          x={ox + i * 24}
          y={horizon - 2}
          width={cw}
          height={2}
          fill="#c8e6ff"
          opacity={0.32}
          rx={0.5}
        />
      ))}

      {seaTiles}

      <rect x={0} y={seaBot} width={vbW} height={seabedH} fill="#142620" opacity={0.92} />
      <rect x={0} y={seaBot} width={vbW} height={5} fill="#1f3d2e" opacity={0.55} />
      {Array.from({ length: Math.floor(vbW / 18) }, (_, i) => (
        <rect
          key={`sand-${i}`}
          x={ox + i * 18 + ((i * 5) % 7)}
          y={seaBot + 6 + (i % 3)}
          width={5}
          height={3}
          fill="#2a4a38"
          opacity={0.35}
        />
      ))}

      {/* Seabed treasure chests */}
      {chestXs.map((cx, ci) => (
        <g key={`chest-${ci}`} transform={`translate(${cx}, ${chestY})`}>
          <motion.g
            animate={{ opacity: [0.82, 1, 0.82] }}
            transition={{ duration: 2.8 + ci * 0.25, repeat: Infinity, ease: 'easeInOut', delay: ci * 0.35 }}
          >
            {chestPixels.map(([dx, dy, fill], i) => (
              <rect key={`ch-${ci}-${i}`} x={dx * tu} y={dy * tu} width={tu - 1} height={tu - 1} fill={fill} />
            ))}
          </motion.g>
        </g>
      ))}

      {/* Fish crossing the full illustration (both directions) */}
      {fishLanes.map((lane, i) => {
        const margin = fishWcells * lane.fp + 8;
        const startL = -margin;
        const endR = vbW + margin;
        const xPath = lane.dir === 1 ? [startL, endR] : [endR, startL];
        return (
          <motion.g key={`fish-${i}`} transform={`translate(0, ${lane.y})`}>
            <motion.g
              animate={{ x: xPath }}
              transition={{ duration: lane.dur, repeat: Infinity, ease: 'linear', delay: lane.delay }}
            >
              <FishSprite fp={lane.fp} flip={lane.dir === -1} />
            </motion.g>
          </motion.g>
        );
      })}

      <motion.text
        x={ox}
        y={vbH - 7}
        fill="#7A7570"
        fontSize={8}
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.08em"
        animate={{ opacity: [0.55, 0.95, 0.55] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        usage · tokens · treasury · ledger
      </motion.text>
    </svg>
  );
}
