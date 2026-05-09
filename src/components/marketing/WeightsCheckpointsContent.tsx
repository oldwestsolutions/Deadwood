'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

function HeroGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -left-1/4 top-0 h-[420px] w-[420px] rounded-full bg-dw-tan/[0.09] blur-[100px]"
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-1/4 bottom-0 h-[380px] w-[380px] rounded-full bg-[#5A89A0]/[0.12] blur-[90px]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.11]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="wc-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="#C9A96E" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wc-grid)" />
      </svg>
      <svg
        className="absolute left-1/2 top-1/2 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-[42%] opacity-[0.14]"
        viewBox="0 0 200 200"
        aria-hidden
      >
        <motion.g
          transform="translate(100 100)"
          animate={{ rotate: 360 }}
          transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
        >
          <circle cx="0" cy="0" r="72" fill="none" stroke="#C9A96E" strokeWidth="0.75" strokeDasharray="4 10" />
        </motion.g>
        {[0, 72, 144, 216].map((deg, i) => {
          const r = 72;
          const rad = (deg * Math.PI) / 180;
          const x = 100 + r * Math.cos(rad);
          const y = 100 + r * Math.sin(rad);
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={y}
              r={5}
              fill="#C9A96E"
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.45, ease: 'easeInOut' }}
            />
          );
        })}
      </svg>
    </div>
  );
}

export function WeightsCheckpointsContent() {
  return (
    <>
      <header className="relative isolate overflow-hidden border-b border-white/[0.06] pb-20 pt-28 sm:pb-28 sm:pt-32">
        <HeroGlow />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">Weights & checkpoints</p>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.08] tracking-tight text-dw-cream">
            Self-improving models through feedback loops
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-lg leading-relaxed text-dw-muted">
            Deadwood automates the cybernetic cycle—observe feedback, retrain weights, version checkpoints, promote
            winners, and watch accuracy compound—without standing up data pipelines or MLOps glue code.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 lg:max-w-[52rem] lg:px-8 lg:py-20">
        <section className="scroll-mt-28" id="cybernetic-core">
          <h2 className="font-display text-2xl text-dw-cream sm:text-3xl">The cybernetic core</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-dw-muted">
            A cybernetic learner closes the loop between output and input: predictions shape user behavior; behavior
            generates labels; labels update weights; weights change predictions. Deadwood runs that loop as
            infrastructure—so your product intelligence is{' '}
            <span className="text-dw-cream">continuous</span>, not quarterly.
          </p>
          <ul className="mt-6 space-y-3 font-sans text-sm leading-relaxed text-dw-muted sm:text-[15px]">
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span>
              <strong className="font-medium text-dw-cream">Feedback loops:</strong> ratings, clicks, trades, and API
              callbacks become training rows automatically.
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span>
              <strong className="font-medium text-dw-cream">Self-regulation:</strong> objectives you define (accuracy,
              revenue, satisfaction) steer automated retrains.
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span>
              <strong className="font-medium text-dw-cream">Observability:</strong> metrics and lineage expose model
              health and drift—the loop stays inspectable.
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span>
              <strong className="font-medium text-dw-cream">Circular causality:</strong> production outputs feed back
              into training partitions with governance you control.
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span>
              <strong className="font-medium text-dw-cream">Emergence:</strong> nuanced user models arise from many
              small signals—not hand-authored rules.
            </li>
          </ul>
        </section>

        <section
          id="weights-versioning"
          className="rounded-[24px] border border-white/[0.08] bg-dw-surface/25 px-6 py-8 sm:px-8 sm:py-10"
        >
          <h2 className="font-display text-2xl text-dw-cream sm:text-3xl">Weights, checkpoints, promotion</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-dw-muted">
            Every retrain materializes as versioned artifacts you can diff, audit, and pin. Checkpoints behave like{' '}
            <span className="text-dw-cream">commits</span>: tensors bind to hashes; inference routes follow the promoted
            head unless you roll back. Promotion can be one-click from the console or policy-driven when offline metrics
            beat the incumbent—either way, the cybernetic loop stays automated while you keep veto power.
          </p>
          <ul className="mt-6 space-y-2.5 font-sans text-sm text-dw-muted sm:text-[15px]">
            <li className="flex gap-2">
              <span className="text-dw-highlight">●</span>
              Continuous learning without bespoke data infrastructure
            </li>
            <li className="flex gap-2">
              <span className="text-dw-highlight">●</span>
              Automating observation, learning, and adaptation end-to-end
            </li>
            <li className="flex gap-2">
              <span className="text-dw-highlight">●</span>
              Git-like lineage from experiment → checkpoint → production routing
            </li>
          </ul>
        </section>

        <section
          id="example-trading"
          className="relative border-l-2 border-dw-tan/40 pl-6 sm:pl-8"
          aria-labelledby="example-story-heading"
        >
          <h2 id="example-story-heading" className="font-display text-xl text-dw-cream sm:text-2xl">
            Example: feedback in a trading surface
          </h2>
          <div className="mt-5 space-y-4 font-sans text-sm leading-relaxed text-dw-muted sm:text-[15px]">
            <p>
              Imagine a trading app powered by Deadwood. Each execution is an event the model can learn from: was the
              trade profitable? Did the user rate the idea? Those outcomes become supervision—weights nudge toward
              recommendations that historically aligned with profit and satisfaction.
            </p>
            <p>
              The model self-regulates toward the objectives you publish. Metrics show the loop tightening: accuracy
              climbs week over week without an engineer babysitting notebooks.
            </p>
            <p>
              Causality is circular by design—predictions influence which trades fire; outcomes reshape predictions.
              Over time, behavior emerges that resembles a trader-specific copilot built from thousands of tiny signals,
              not a rulesheet.
            </p>
            <p className="font-medium text-dw-tan">That is cybernetic learning—and Deadwood keeps it running.</p>
          </div>
        </section>

        <aside
          className="relative overflow-hidden rounded-[24px] border border-dw-tan/35 bg-gradient-to-br from-dw-tan/[0.12] via-dw-surface/40 to-dw-bg px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:px-10 sm:py-10"
          aria-labelledby="cybernetic-advantage-title"
        >
          <motion.div
            className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-dw-highlight/10 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            aria-hidden
          />
          <h2 id="cybernetic-advantage-title" className="relative font-display text-2xl text-dw-cream sm:text-[1.75rem]">
            The cybernetic advantage
          </h2>
          <div className="relative mt-4 space-y-4 font-sans text-sm leading-relaxed text-dw-muted sm:text-[15px]">
            <p>
              Cybernetic systems learn from their own effects on the world: act, sense, adapt. Product teams benefit when
              that loop ships as managed infrastructure—a feedback signal becomes a living model instead of a backlog of
              offline experiments.
            </p>
            <p>
              Deadwood lets you define what “good” means for your users; models absorb it continuously at scale. That is
              more than personalization—it is a product surface that{' '}
              <span className="text-dw-cream">gets sharper every session</span>.
            </p>
          </div>
        </aside>

        <figure className="rounded-[20px] border border-white/[0.08] bg-dw-bg/60 p-6 sm:p-8">
          <blockquote className="font-display text-lg leading-snug text-dw-cream sm:text-xl">
            “With Deadwood, our models are continuously learning from user behavior. We see accuracy improving week over
            week, without any engineering effort. It feels like the product is always observing and adapting—that is the
            power of cybernetic learning.”
          </blockquote>
          <figcaption className="mt-4 font-sans text-sm text-dw-muted">— Jane D., Product Manager</figcaption>
        </figure>

        <section
          className="rounded-[24px] border border-white/[0.1] bg-gradient-to-b from-dw-surface/30 to-dw-bg px-6 py-10 text-center sm:px-10 sm:py-12"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading" className="font-display text-2xl text-dw-cream sm:text-3xl">
            Start your cybernetic journey
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-sans text-base text-dw-muted">
            Deadwood is your copilot for shipping self-learning products—metered, observable, and ready to scale with
            your traffic.
          </p>
          <ul className="mx-auto mt-8 max-w-md space-y-2.5 text-left font-sans text-sm text-dw-muted">
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span> Models that improve automatically from user feedback
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span> Continuous learning without standing up data plumbing
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span> Observability across checkpoints, promotions, and drift
            </li>
            <li className="flex gap-2">
              <span className="text-dw-tan">→</span> Elastic scale as usage compounds
            </li>
          </ul>
          <motion.div className="mt-10 flex justify-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/register?tier=premium"
              className="inline-flex rounded-full bg-dw-tan px-10 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
            >
              Activate cybernetic learning
            </Link>
          </motion.div>
          <p className="mt-6 font-sans text-sm text-dw-muted">
            Prefer to talk through architecture first?{' '}
            <Link href="/snowflake-premium" className="text-dw-highlight hover:underline">
              Snowflake Premium overview
            </Link>{' '}
            ·{' '}
            <Link href="/snowflake-premium#premium-faq" className="text-dw-highlight hover:underline">
              FAQ
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}
