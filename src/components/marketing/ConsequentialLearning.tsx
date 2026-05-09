'use client';

import Link from 'next/link';
import { useId } from 'react';
import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';

/** Pixel step for anchor / sand details */
const U = 4;

function PremiumIllustration() {
  const uid = useId().replace(/:/g, '');
  const clipId = `browser-game-${uid}`;
  const skyId = `browser-sky-${uid}`;
  const chromeId = `browser-chrome-${uid}`;
  const waterGradId = `browser-water-${uid}`;

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

  const gx0 = game.x;
  const gy0 = game.y;
  const gh = game.h;
  const gw = game.w;

  const sandTop = gy0 + gh * 0.52;
  const waterTop = gy0 + gh * 0.14;

  const stars = Array.from({ length: 28 }, (_, i) => ({
    x: gx0 + 8 + ((i * 91) % Math.max(1, gw - 16)),
    y: gy0 + 6 + ((i * 47) % Math.max(1, Math.floor(sandTop - gy0) - 24)),
    s: 1 + (i % 2),
    o: 0.2 + (i % 5) * 0.12,
  }));

  const anchorCx = gx0 + gw * 0.5;
  const anchorCy = sandTop + 10;
  const steel = '#9aa3ad';
  const steelMid = '#6f7782';
  const steelDark = '#4a5159';
  const steelHi = '#c5ccd4';

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
        <linearGradient id={waterGradId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#335f78" />
          <stop offset="45%" stopColor="#254a62" />
          <stop offset="100%" stopColor="#183548" />
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

        <rect x={gx0} y={waterTop - 2} width={gw} height={8} fill="#243d52" opacity={0.55} />

        <rect x={gx0} y={waterTop} width={gw} height={sandTop - waterTop} fill={`url(#${waterGradId})`} />

        <motion.g
          animate={{ x: [0, -20, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[0, 1, 2, 3].map((i) => (
            <rect
              key={i}
              x={gx0 - 24 + i * 28}
              y={waterTop + 10 + i * 16}
              width={gw + 120}
              height={4 + (i % 2)}
              fill="#4a86a8"
              opacity={0.22 - i * 0.035}
            />
          ))}
        </motion.g>
        <motion.g
          animate={{ x: [0, 16, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[0, 1].map((i) => (
            <rect
              key={i}
              x={gx0 - 40 + i * 50}
              y={sandTop - 18 - i * 10}
              width={gw + 100}
              height={3}
              fill="#7eb8d4"
              opacity={0.12}
            />
          ))}
        </motion.g>

        {/* Sand */}
        <rect x={gx0} y={sandTop} width={gw} height={gy0 + gh - sandTop} fill="#c9a882" />
        <rect x={gx0} y={sandTop} width={gw} height={10} fill="#a88562" opacity={0.55} />
        {Array.from({ length: Math.ceil(gw / 8) }, (_, i) => (
          <rect
            key={`s-${i}`}
            x={gx0 + i * 8 + ((i * 3) % 5)}
            y={sandTop + 14 + ((i * 7) % 28)}
            width={5}
            height={3}
            fill="#8f704e"
            opacity={0.35}
          />
        ))}

        {/* Subtle drifting sand sparkles */}
        {[0, 1, 2, 3, 4].map((i) => {
          const bx = gx0 + 20 + ((i * 83) % Math.max(1, gw - 40));
          const by = sandTop + 20 + (i % 3) * 16;
          return (
            <g key={`g-${i}`} transform={`translate(${bx}, ${by})`}>
              <motion.rect
                width={3}
                height={2}
                fill="#e8d4b8"
                animate={{ y: [0, -2.5, 0], opacity: [0.22, 0.5, 0.22] }}
                transition={{
                  duration: 3.2 + i * 0.4,
                  delay: i * 0.35,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </g>
          );
        })}

        <g transform={`translate(${anchorCx}, ${anchorCy})`}>
          <ellipse cx={0} cy={20} rx={40} ry={9} fill="#000000" opacity={0.16} />
          <motion.g
            animate={{ rotate: [-2.6, 2.6, -2.6], y: [0, 2.5, 0] }}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '0px 20px' }}
          >
            {/* Flukes & crown (buried in sand) */}
            <rect x={-9 * U} y={10} width={5 * U} height={2 * U} fill={steelDark} />
            <rect x={4 * U} y={10} width={5 * U} height={2 * U} fill={steelDark} />
            <rect x={-11 * U} y={12} width={4 * U} height={2 * U} fill={steelDark} />
            <rect x={7 * U} y={12} width={4 * U} height={2 * U} fill={steelDark} />
            <rect x={-6 * U} y={4} width={3 * U} height={4 * U} fill={steelMid} />
            <rect x={3 * U} y={4} width={3 * U} height={4 * U} fill={steelMid} />
            {/* Shank */}
            <rect x={-U} y={-50} width={2 * U} height={58} fill={steelDark} />
            <rect x={-U + 1} y={-48} width={2 * U - 2} height={54} fill={steelMid} />
            {/* Stock */}
            <rect x={-8 * U} y={-52} width={16 * U} height={2 * U} fill={steel} />
            <rect x={-8 * U} y={-50} width={16 * U} height={U} fill={steelHi} opacity={0.45} />
            {/* Ring head */}
            <rect x={-2 * U} y={-64} width={4 * U} height={2 * U} fill={steelHi} />
            <rect x={-3 * U} y={-62} width={6 * U} height={2 * U} fill={steelHi} />
            <rect x={-2 * U} y={-60} width={4 * U} height={2 * U} fill={steelMid} />
            <rect x={-U} y={-66} width={2 * U} height={2 * U} fill={steelDark} />
          </motion.g>
        </g>

        <g opacity={0.04} stroke="#fff" strokeWidth={0.6}>
          {Array.from({ length: Math.floor(gh / 5) }, (_, i) => (
            <line key={i} x1={gx0} y1={gy0 + i * 5} x2={gx0 + gw} y2={gy0 + i * 5} />
          ))}
        </g>

        <rect
          x={gx0 + 10}
          y={gy0 + gh - 50}
          width={gw - 20}
          height={34}
          rx={5}
          fill="#0a0a08"
          fillOpacity={0.78}
          stroke="#C9A96E"
          strokeOpacity={0.22}
        />
        <text
          x={gx0 + 22}
          y={gy0 + gh - 32}
          fill="#E0F5FF"
          fontSize={10}
          fontFamily="ui-monospace, monospace"
        >
          CHECKPOINT ARTIFACTS · learned tensors · commit lineage
        </text>
        <text
          x={gx0 + 22}
          y={gy0 + gh - 18}
          fill="#7A7570"
          fontSize={9}
          fontFamily="ui-monospace, monospace"
        >
          Hashes bind tensors to commits—inference follows the promoted checkpoint.
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
  const loopSteps = [
    'Collect feedback (API, logging)',
    'Retrain models (serverless, scalable)',
    'Version checkpoints (full history)',
    'Promote winners (one-click, or automatic)',
    'Monitor performance (alerts, metrics)',
  ];

  const featureBullets = [
    'Automatic feedback collection (user interactions → training data)',
    'Serverless model retraining (no infrastructure to manage)',
    'Checkpoint versioning (full model history, git-like)',
    'One-click promotion (new model → production)',
    'Continuous learning (models improve with every use)',
    'Observable system (metrics, monitoring, audit trail)',
  ];

  return (
    <MotionSection id="premium" className="relative py-section">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="relative lg:col-span-7">
            <motion.figure
              initial={{ opacity: 0, rotate: -0.4 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="relative overflow-hidden rounded-[28px] border border-dw-tan/15 bg-gradient-to-br from-dw-tan/[0.07] via-dw-surface/90 to-dw-bg p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_24px_80px_rgba(0,0,0,0.35)] sm:p-7 lg:mr-8 lg:-translate-y-4"
            >
              <div
                className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] opacity-[0.07]"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, rgba(201,169,110,0.35) 1px, transparent 1px), linear-gradient(rgba(201,169,110,0.35) 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
                aria-hidden
              />
              <motion.div
                className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit] bg-[radial-gradient(circle_at_50%_38%,rgba(201,169,110,0.16),transparent_58%)]"
                animate={{ opacity: [0.45, 0.85, 0.45] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(201,169,110,0.12)_0%,transparent_68%)] blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(212,184,150,0.08)_0%,transparent_65%)] blur-2xl"
                aria-hidden
              />
              <div className="relative z-[2] flex min-h-[260px] items-stretch py-1 sm:min-h-[300px] sm:py-2">
                <PremiumIllustration />
              </div>
              <figcaption className="sr-only">
                Pixel illustration inside a browser window: night sky, animated ocean waves, beach sand, and an anchor
                partially buried in the sand with gentle motion. The tab reads Deadwood Software; the URL bar shows the
                Premium training URL. A status strip summarizes checkpoint artifacts as learned tensors with commit
                lineage and promotion-driven inference routing.
              </figcaption>
            </motion.figure>
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-muted">Premium</p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.65rem)] leading-[1.12] text-dw-cream">
              Deadwood Premium: Your Cybernetic Copilot
            </h2>
            <h3 className="mt-4 font-sans text-lg font-semibold leading-snug text-dw-tan sm:text-xl">
              Models that learn from every interaction. No infrastructure to manage.
            </h3>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-dw-muted sm:text-[15px]">
              <p>
                Deadwood Premium is a cybernetic learning system. It turns your user feedback into self-improving models,
                automatically.
              </p>
              <p>
                Every user interaction is a learning opportunity. Every rating, every click, every transaction—Deadwood
                observes, learns, and adapts. Models retrain automatically. Accuracy improves continuously. Your product
                gets smarter with every use.
              </p>
              <p className="font-medium text-dw-cream">Under the hood, Deadwood automates the cybernetic loop:</p>
              <ol className="list-decimal space-y-2 pl-5 marker:text-dw-tan">
                {loopSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p>
                You define the feedback signal. Deadwood handles the learning infrastructure. No data pipelines to
                manage, no DevOps overhead, no manual retraining. Just models that learn from your users, automatically.
              </p>
            </div>
            <ul className="mt-6 space-y-2.5 text-sm leading-relaxed text-dw-muted sm:text-[15px]">
              {featureBullets.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="shrink-0 text-dw-tan">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-base italic leading-snug text-dw-tan/95 sm:text-lg">
              Want to see how it works? Dive into the details of Deadwood&apos;s cybernetic learning system →
            </p>
            <motion.div className="mt-6" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/weights-checkpoints"
                className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
              >
                Explore Weights &amp; Checkpoints
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
