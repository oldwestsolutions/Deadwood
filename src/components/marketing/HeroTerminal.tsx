'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const PX = 5;

/** Shift boat down so hull bottom (was grid row -16) sits on the horizon / waterline. */
const BOAT_GRID_Y_OFFSET = 16;

const MAST_X = 11;

function mastShade(y: number): string {
  if (y <= -27) return '#e8ecf2';
  if (y <= -24) return '#d8dee9';
  if (y <= -22) return '#c5cdd9';
  if (y <= -20) return '#aeb8c6';
  return '#9aa5b4';
}

/** Mast, triangular mainsail (lee · windward · foot shadow), boom, hull — grid units; hull bottom y = -16. */
function buildBoatPixels(): [number, number, string][] {
  const out: [number, number, string][] = [];

  const mastBottom = -17;
  for (let y = -29; y <= mastBottom; y++) {
    out.push([MAST_X, y, mastShade(y)]);
  }

  const sailTop = -27;
  const sailBottom = -22;
  for (let y = sailTop; y <= sailBottom; y++) {
    const t = (y - sailTop) / (sailBottom - sailTop);
    let span = 2 + Math.round(t * 3);
    span = Math.min(Math.max(span, 2), 5);
    for (let dx = 1; dx <= span; dx++) {
      const x = MAST_X + dx;
      const lee = dx <= 2;
      const leech = dx >= span - 1;
      const belly = dx === 3 + Math.max(0, Math.round((span - 3) * 0.55));
      let fill = '#ebe3d4';
      if (lee) fill = '#b8a896';
      else if (leech) fill = '#fffaf2';
      else if (belly) fill = '#f7f0e4';
      else if ((x + y * 2) % 3 === 0) fill = '#dfd6c6';
      else fill = '#f0e8da';
      out.push([x, y, fill]);
    }
  }

  for (let dx = 2; dx <= 5; dx++) {
    out.push([MAST_X + dx, -21, '#cfc4b2']);
  }

  const boomSpan = 5;
  const boomY = -20;
  for (let dx = 1; dx <= boomSpan; dx++) {
    const tip = dx === boomSpan;
    out.push([MAST_X + dx, boomY, tip ? '#4a3629' : '#5c4336']);
  }

  out.push(
    [5, -18, '#5c4336'],
    [6, -18, '#6d5243'],
    [7, -18, '#5c4336'],
    [8, -18, '#6d5243'],
    [9, -18, '#5c4336'],
    [10, -18, '#6d5243'],
    [11, -18, '#5c4336'],
    [12, -18, '#6d5243'],
    [13, -18, '#5c4336'],
    [14, -18, '#6d5243'],
    [15, -18, '#5c4336'],
    [16, -18, '#6d5243'],
    [4, -17, '#4a3629'],
    [5, -17, '#5a4335'],
    [6, -17, '#4a3629'],
    [7, -17, '#5a4335'],
    [8, -17, '#4a3629'],
    [9, -17, '#5a4335'],
    [10, -17, '#4a3629'],
    [11, -17, '#5a4335'],
    [12, -17, '#4a3629'],
    [13, -17, '#5a4335'],
    [14, -17, '#4a3629'],
    [15, -17, '#5a4335'],
    [16, -17, '#4a3629'],
    [17, -17, '#5a4335'],
    [5, -16, '#3d2b22'],
    [6, -16, '#4a3629'],
    [7, -16, '#3d2b22'],
    [8, -16, '#4a3629'],
    [9, -16, '#3d2b22'],
    [10, -16, '#4a3629'],
    [11, -16, '#3d2b22'],
    [12, -16, '#4a3629'],
    [13, -16, '#3d2b22'],
    [14, -16, '#4a3629'],
    [15, -16, '#3d2b22']
  );

  return out;
}

const boatPixels = buildBoatPixels();

export function HeroTerminal() {
  const vbW = 400;
  const vbH = 288;
  const horizon = 152;
  const seaRows = Math.floor((vbH - horizon) / PX);
  const seaCols = Math.ceil(vbW / PX) + 2;

  const skyBand1 = Math.round(horizon * 0.396);
  const skyBand2 = Math.round(horizon * 0.342);
  const skyBand3 = horizon - skyBand1 - skyBand2;
  const skyBands = [
    { y: 0, h: skyBand1, fill: '#1a2838' },
    { y: skyBand1, h: skyBand2, fill: '#243041' },
    { y: skyBand1 + skyBand2, h: skyBand3, fill: '#2d3d4e' },
  ];

  const skyScale = horizon / 96;
  const clouds: [number, number][] = [
    [72, Math.round(28 * skyScale)],
    [320, Math.round(36 * skyScale)],
    [210, Math.round(52 * skyScale)],
  ];

  const seaPixelHeight = seaRows * PX;
  const seaBottomY = horizon + seaPixelHeight;

  return (
    <GlassChrome>
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#6a5346]" />
        <span className="h-3 w-3 rounded-full bg-dw-tan/50" />
        <span className="h-3 w-3 rounded-full bg-dw-muted/40" />
        <span className="ml-3 font-mono text-[11px] text-dw-muted">chart · crossing.py</span>
      </div>

      <div className="p-4 sm:p-5">
        <svg
          viewBox={`0 0 ${vbW} ${vbH}`}
          className="h-auto w-full overflow-visible rounded-[14px] border border-[#1e4d6e]/35 bg-[#0a1628]"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroHorizonGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3d5570" stopOpacity={0.12} />
              <stop offset="100%" stopColor="#1a2838" stopOpacity={0} />
            </linearGradient>
          </defs>

          <rect x={0} y={0} width={vbW} height={horizon} fill="url(#heroHorizonGlow)" />

          {skyBands.map((b) => (
            <g key={`${b.y}-${b.h}`}>
              {Array.from({ length: Math.ceil(vbW / PX) }, (_, c) => (
                <rect
                  key={c}
                  x={c * PX}
                  y={b.y}
                  width={PX - 1}
                  height={b.h}
                  fill={b.fill}
                  opacity={0.72}
                />
              ))}
            </g>
          ))}

          {clouds.map(([sx, sy], i) => (
            <g key={`cloud-${i}`} transform={`translate(${sx}, ${sy})`} opacity={0.55}>
              {[
                [2, 1],
                [1, 2],
                [2, 2],
                [3, 2],
                [2, 3],
              ].map(([cx, cy], j) => (
                <rect
                  key={j}
                  x={cx * PX}
                  y={cy * PX}
                  width={PX - 1}
                  height={PX - 1}
                  fill="#8a9cad"
                />
              ))}
            </g>
          ))}

          <motion.circle
            cx={332}
            cy={Math.round(44 * skyScale)}
            r={10}
            fill="#f4d06f"
            opacity={0.88}
            animate={{ opacity: [0.88, 1, 0.88] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />

          {Array.from({ length: seaRows }, (_, r) =>
            Array.from({ length: seaCols }, (_, c) => {
              const wave = (c * 3 + r * 5) % 7;
              const depth = r / Math.max(1, seaRows - 1);
              const fill =
                depth < 0.32
                  ? wave < 3
                    ? '#2d6a8f'
                    : '#255f82'
                  : depth < 0.52
                    ? wave < 4
                      ? '#1e4d6e'
                      : '#1a4360'
                    : depth < 0.72
                      ? wave < 3
                        ? '#143d52'
                        : '#0f3448'
                      : depth < 0.88
                        ? wave < 4
                          ? '#0c2838'
                          : '#081820'
                        : wave < 3
                          ? '#061018'
                          : '#040a12';
              return (
                <rect
                  key={`sea-${r}-${c}`}
                  x={c * PX - PX}
                  y={horizon + r * PX}
                  width={PX - 1}
                  height={PX - 1}
                  fill={fill}
                />
              );
            })
          ).flat()}

          {seaBottomY < vbH ? (
            <rect x={0} y={seaBottomY} width={vbW} height={vbH - seaBottomY} fill="#040a12" />
          ) : null}

          {Array.from({ length: Math.ceil(vbW / (PX * 2)) }, (_, i) => (
            <rect
              key={`foam-${i}`}
              x={10 + i * PX * 2}
              y={horizon - 3}
              width={PX}
              height={3}
              fill="#c8e6ff"
              opacity={0.38}
              rx={0.5}
            />
          ))}

          <motion.g
            animate={{ x: [-12, 12, -12] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.g
              animate={{ x: [38, 248, 38] }}
              transition={{ duration: 36, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.g
                animate={{ y: [0, -5, 1, -4, 0], rotate: [-1.2, 0.8, -0.6, 1, -1.2] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <g transform={`translate(0, ${horizon})`}>
                  {boatPixels.map(([bx, by, fill], idx) => (
                    <rect
                      key={`bp-${idx}`}
                      x={bx * PX}
                      y={(by + BOAT_GRID_Y_OFFSET) * PX}
                      width={PX - 1}
                      height={PX - 1}
                      fill={fill}
                    />
                  ))}
                </g>
              </motion.g>
            </motion.g>
          </motion.g>
        </svg>
      </div>
    </GlassChrome>
  );
}

function GlassChrome({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[26px] glass-warm shadow-dw-lift ring-1 ring-white/[0.05]">{children}</div>
  );
}
