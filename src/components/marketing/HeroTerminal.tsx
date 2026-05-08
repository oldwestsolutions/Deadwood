'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CODE_LINES = [
  'import numpy as np',
  'paths, steps = 500_000, 252',
  'dt, mu, sigma = 1 / 252, 0.06, 0.22',
  'z = np.random.standard_normal((paths, steps))',
  'log_s = (mu - 0.5 * sigma**2) * dt + sigma * np.sqrt(dt) * z',
  'pv = np.mean(np.exp(np.sum(log_s, axis=1))) * 1e6',
  'print(f"mean_pv: ${pv:,.0f}")',
];

const STREAM_LINES = [
  '$ deadwood run monte_carlo.py --paths 500000',
  '→ Warm pool · Snowflake · runners 12',
  'simulating batches ████████████████████ OK (41.2s)',
  'mean_pv: $1,042,180  CI₉₅: [$981,400 — $1,108,900]',
  'anchoring digest · Cosmos ↔ Avalanche relay · verified',
];

export function HeroTerminal() {
  const [codeIdx, setCodeIdx] = useState(0);
  const [codeCol, setCodeCol] = useState(0);
  const [phase, setPhase] = useState<'code' | 'stream'>('code');
  const [streamIdx, setStreamIdx] = useState(0);

  const lineTyping = CODE_LINES[codeIdx];
  const visibleCode =
    phase === 'code' && lineTyping ? lineTyping.slice(0, codeCol) : '';

  useEffect(() => {
    if (phase !== 'code') return;

    const line = CODE_LINES[codeIdx];
    if (!line) {
      setPhase('stream');
      return;
    }

    if (codeCol < line.length) {
      const t = setTimeout(() => setCodeCol((c) => c + 1), 28 + Math.random() * 22);
      return () => clearTimeout(t);
    }

    const pause = setTimeout(() => {
      setCodeIdx((i) => i + 1);
      setCodeCol(0);
    }, 280);
    return () => clearTimeout(pause);
  }, [phase, codeIdx, codeCol]);

  useEffect(() => {
    if (phase !== 'stream') return;

    if (streamIdx >= STREAM_LINES.length) return;

    const delay = streamIdx === 0 ? 400 : 620 + streamIdx * 180;
    const t = setTimeout(() => {
      setStreamIdx((i) => i + 1);
    }, delay);

    return () => clearTimeout(t);
  }, [phase, streamIdx]);

  useEffect(() => {
    if (phase === 'stream' && streamIdx >= STREAM_LINES.length) {
      const reset = setTimeout(() => {
        setPhase('code');
        setCodeIdx(0);
        setCodeCol(0);
        setStreamIdx(0);
      }, 3200);
      return () => clearTimeout(reset);
    }
  }, [phase, streamIdx]);

  return (
    <GlassChrome>
      <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3">
        <span className="h-3 w-3 rounded-full bg-[#6a5346]" />
        <span className="h-3 w-3 rounded-full bg-dw-tan/50" />
        <span className="h-3 w-3 rounded-full bg-dw-muted/40" />
        <span className="ml-3 font-mono text-[11px] text-dw-muted">
          runner · monte_carlo.py
        </span>
      </div>

      <div className="space-y-3 p-5 font-mono text-[11px] leading-relaxed sm:text-xs">
        <div className="min-h-[168px] text-dw-highlight/95">
          {CODE_LINES.slice(0, codeIdx).map((line) => (
            <div key={line} className="text-dw-muted">
              <span className="text-dw-tan/70">&gt;&gt;&gt; </span>
              {line}
            </div>
          ))}
          {phase === 'code' && (
            <div className="text-dw-muted">
              <span className="text-dw-tan/70">&gt;&gt;&gt; </span>
              {visibleCode}
              <motion.span
                className="inline-block w-2 text-dw-tan"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.76 }}
              >
                ▍
              </motion.span>
            </div>
          )}
        </div>

        <div className="border-t border-white/[0.06] pt-3 text-dw-cream/90">
          <AnimatePresence mode="popLayout">
            {STREAM_LINES.slice(0, streamIdx).map((line, i) => (
              <motion.div
                key={`${line}-${i}`}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35 }}
                className={
                  line.startsWith('mean_pv')
                    ? 'text-dw-tan'
                    : line.startsWith('anchoring')
                      ? 'text-dw-highlight'
                      : 'text-dw-muted'
                }
              >
                {line}
              </motion.div>
            ))}
          </AnimatePresence>
          {phase === 'stream' && streamIdx === 0 && codeIdx >= CODE_LINES.length && (
            <motion.span
              className="text-dw-muted"
              animate={{ opacity: [0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.1 }}
            >
              streaming logs…
            </motion.span>
          )}
        </div>
      </div>
    </GlassChrome>
  );
}

function GlassChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[26px] glass-warm shadow-dw-lift ring-1 ring-white/[0.05]">
      {children}
    </div>
  );
}
