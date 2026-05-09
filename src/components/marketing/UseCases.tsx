'use client';

import { motion } from 'framer-motion';
import {
  BeakerIcon,
  CodeBracketSquareIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { MotionSection } from '@/components/marketing/MotionSection';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const flowSteps = [
  {
    Icon: BeakerIcon,
    title: 'Training',
    body: 'Fit models against your datasets with the settings in `.deadwood.yml`—method, epochs, and data paths stay reviewable in git. Each run yields checkpoints you can promote when ready.',
  },
  {
    Icon: CodeBracketSquareIcon,
    title: 'Weights',
    body: 'Checkpoints are versioned artifacts: hashed bundles tied to commits, stored off-laptop with redundancy, and easy to roll back. You always know which parameters shipped with which release.',
  },
  {
    Icon: RocketLaunchIcon,
    title: 'Inference',
    body: 'Serve predictions from the weights marked `production: true`. Flip that flag in one commit and route traffic to the new bundle—no separate deploy dance, same push workflow your team already uses.',
  },
];

export function UseCases() {
  return (
    <MotionSection
      id="models-as-code"
      className="relative flex min-h-[100dvh] min-h-[100vh] flex-col justify-center overflow-hidden py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-dw-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_15%_20%,rgba(201,169,110,0.09)_0%,transparent_50%),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(201,169,110,0.14)_0%,transparent_55%),radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(42,38,32,0.95)_0%,transparent_60%)]"
        aria-hidden
      />
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
            <div className="rounded-[22px] border border-dw-tan/12 bg-[#0c0c0a]/92 px-4 py-4 font-mono text-[10px] leading-relaxed backdrop-blur-xl sm:px-5 sm:py-5 sm:text-[11px]">
              <div className="mb-3 flex items-center gap-2 border-b border-white/[0.06] pb-3">
                <span className="h-2 w-2 rounded-full bg-dw-tan/85" />
                <span className="text-[10px] uppercase tracking-wider text-dw-muted sm:text-[11px]">
                  .deadwood.yml
                </span>
              </div>
              <pre className="max-h-[min(82vh,620px)] overflow-x-auto overflow-y-auto whitespace-pre bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(16,185,129,0.06)_0%,transparent_55%)] px-1 py-0.5 text-left font-mono tracking-[0.04em] [text-shadow:0_0_24px_rgba(52,211,153,0.12)] [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-emerald-500/25">
                <code className="text-dw-muted">
                  <span className="text-emerald-500/55"># ciphertext manifest — unlock at deploy{'\n'}</span>
                  <span className="text-dw-tan">version</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">1</span>
                  {'\n'}
                  <span className="text-dw-tan">models</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'  '}
                  <span className="text-dw-cream">trading_taste</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'    '}
                  <span className="text-dw-tan">base</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;llama-7b&quot;</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">training</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'      '}
                  <span className="text-dw-tan">data</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;trades_2024.csv&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">method</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;preference_learning&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">epochs</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">3</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">production</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">false</span>
                  {'\n'}
                  {'  '}
                  <span className="text-dw-cream">trading_taste_v2</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'    '}
                  <span className="text-dw-tan">base</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;llama-7b&quot;</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">training</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'      '}
                  <span className="text-dw-tan">data</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;trades_2024_q1.csv&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">method</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;preference_learning&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">epochs</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">5</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">production</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">true</span>
                  <span className="text-dw-muted"> </span>
                  <span className="text-dw-muted"># live{'\n'}</span>
                  {'  '}
                  <span className="text-dw-cream">gaming_taste</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'    '}
                  <span className="text-dw-tan">base</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;phi-3&quot;</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">training</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'      '}
                  <span className="text-dw-tan">data</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;game_feedback.jsonl&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">method</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;contrastive_learning&quot;</span>
                  {'\n'}
                  {'      '}
                  <span className="text-dw-tan">epochs</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">2</span>
                  {'\n'}
                  {'    '}
                  <span className="text-dw-tan">production</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">true</span>
                  {'\n'}
                  <span className="text-dw-tan">vault</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'  '}
                  <span className="text-dw-tan">ciphertext</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-emerald-400/90">&quot;ENC:v3:a8f21cb904…e771&quot;</span>
                  {'\n'}
                  {'  '}
                  <span className="text-dw-tan">redundancy</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">3</span>
                  {'\n'}
                  <span className="text-dw-tan">audit</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'  '}
                  <span className="text-dw-tan">attestation</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-emerald-400/90">&quot;SIG:ed25519:9Qm…kL2f&quot;</span>
                </code>
              </pre>
            </div>
            <p className="border-t border-white/[0.06] bg-dw-surface/25 px-4 py-3.5 font-sans text-sm leading-relaxed text-dw-muted sm:px-5">
              Commit this file. Training runs for{' '}
              <span className="text-dw-cream">trading_taste_v2</span>, and weights are stored across redundant
              network storage. When you set{' '}
              <span className="font-mono text-dw-highlight">production: true</span>, your app swaps to the new
              model in one step—with a permanent audit trail. Live.
            </p>
          </motion.div>
        </div>

        {/* Three-step flow */}
        <div className="mx-auto mt-24 max-w-6xl">
          <div className="relative">
            <motion.div
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="pointer-events-none absolute left-[10%] right-[10%] top-[36px] z-0 hidden h-px origin-left bg-gradient-to-r from-dw-tan/15 via-dw-tan/45 to-dw-tan/15 lg:block"
            />
            <div className="relative z-[1] flex flex-col gap-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
              {flowSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex flex-1 flex-col rounded-[22px] border border-white/[0.08] bg-dw-surface/35 p-6 backdrop-blur-[24px] transition-shadow hover:shadow-[0_12px_40px_rgba(201,169,110,0.08)]"
                >
                  <step.Icon className="h-10 w-10 text-dw-tan" aria-hidden />
                  <h4 className="mt-4 font-display text-xl text-dw-cream">{step.title}</h4>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-dw-muted">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Workflow example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mt-24 max-w-4xl"
        >
          <h3 className="font-display text-2xl text-dw-cream">From Code to Production in Minutes</h3>
          <pre className="mt-8 overflow-x-auto rounded-[20px] border border-white/[0.08] bg-dw-bg/70 p-6 font-mono text-[11px] leading-relaxed text-dw-muted backdrop-blur-[24px] sm:text-xs">
            {`Step 1: You train locally
├─ Run: deadwood train --config .deadwood.yml
├─ Local model trains on your data
└─ You validate it works

Step 2: You commit
├─ git add .deadwood.yml
├─ git commit -m "feat: trading_taste_v2 model, 98.2% accuracy"
└─ git push

Step 3: floppydisk.cc detects change
├─ Sees new model definition
├─ Trains trading_taste_v2 on remote GPUs (optional)
├─ Stores final weights on Filecoin
└─ Model is versioned, permanent, immutable

Step 4: You deploy
├─ Edit .deadwood.yml: set trading_taste_v2 to production: true
├─ git commit -m "deploy: trading_taste_v2 to production"
├─ git push
└─ Your app immediately uses new model (no downtime)

Step 5: Avalanche records it
├─ Transaction: "user_xyz swapped to trading_taste_v2"
├─ Timestamp: [timestamp]
├─ Model hash: [hash]
└─ Now immutably recorded

Result: New model in production. Perfect auditability. No manual deployment. No infrastructure thinking.`}
          </pre>
        </motion.div>

        {/* Callouts */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[20px] border border-white/[0.08] bg-dw-surface/40 p-6 text-center backdrop-blur-[24px] transition-shadow hover:shadow-[0_12px_40px_rgba(201,169,110,0.06)]"
          >
            <h4 className="font-display text-lg text-dw-cream">Optimization</h4>
            <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">
              Training and inference are expensive when left on defaults. Deadwood routes workloads through
              hardware-aware paths—parallelism, batching, and precision choices matched to your chips—so each
              epoch and each serving hour buys more quality per dollar before you ever widen traffic.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[20px] border border-white/[0.08] bg-dw-surface/40 p-6 text-center backdrop-blur-[24px] transition-shadow hover:shadow-[0_12px_40px_rgba(201,169,110,0.06)]"
          >
            <h4 className="font-display text-lg text-dw-cream">Evaluation</h4>
            <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">
              Shipping a model without a consistent scoreboard is flying blind. Tie evaluations to the same
              commits as your weights—fixed datasets, regression metrics, and side-by-side baselines—so when
              production flips, you know exactly what improved, what regressed, and who signed off on the
              tradeoffs.
            </p>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
