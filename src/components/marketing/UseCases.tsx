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
    Icon: CodeBracketSquareIcon,
    title: 'Commit Model Config',
    body: 'Define your model in `.deadwood.yml`. Push to repo. floppydisk.cc detects the change.',
  },
  {
    Icon: BeakerIcon,
    title: 'Train & Store on Filecoin',
    body: 'floppydisk.cc trains the model. Stores weights on Filecoin — immutable, decentralized. Model is versioned and permanent.',
  },
  {
    Icon: RocketLaunchIcon,
    title: 'Swap Live',
    body: 'Set `production: true` in one commit. Model swaps live. Avalanche logs the transaction. No downtime. Full auditability.',
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
          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-5 font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-tight text-dw-tan"
          >
            Models as Code: floppydisk.cc
          </motion.p>
          <motion.h2
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.08] tracking-tight text-dw-cream lg:text-[48px]"
          >
            Dust off the old tech.
          </motion.h2>
          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-dw-muted"
          >
            Define your models in the same place you define everything else: your repo. Give each variant a
            name, wire up training data, pick a method and epochs, and spell out what is experimental versus
            production—all in a config file your team can diff, review, and approve like any other change.
            That definition becomes the contract floppydisk.cc trains against, so every revision stays tied to
            a commit instead of a one-off notebook or a dashboard nobody remembers how to reproduce.
          </motion.p>
        </div>

        {/* Two-column: copy + yaml */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-start lg:gap-16">
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3 className="font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight text-dw-cream lg:text-[32px]">
              Models as code. Storage as immutable.
            </h3>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-dw-muted">
              <p>
                Your models are code. Version them like code. Write a `.deadwood.yml` file in your repo.
                Commit it. floppydisk.cc trains the model, versions it, and stores it.
              </p>
              <p>
                When you swap models, one commit changes production. No downtime. No manual deployments.
                Just git push.
              </p>
              <p>
                Every model version is hashed and stored on Filecoin — decentralized, immutable,
                permanent. If floppydisk.cc goes down, your models are recoverable. Your model history is
                forever.
              </p>
              <p>
                Every swap — every change to production — is recorded on Avalanche. You see which model was
                serving which user at what time. Perfect auditability.
              </p>
            </div>
            <ul className="mt-8 space-y-3 border-l border-dw-tan/25 pl-6 font-sans text-[15px] leading-relaxed text-dw-muted">
              <li>
                <span className="text-dw-cream">`.deadwood.yml`</span> declares models, training data, and
                production rules
              </li>
              <li>Models stay in your repo — version controlled, auditable, reproducible</li>
              <li>floppydisk.cc handles training, versioning, and deployment</li>
              <li>Filecoin stores model weights — decentralized, immutable, redundant</li>
              <li>Avalanche logs every swap — transparent, on-chain, verifiable</li>
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
              <pre className="max-h-[min(82vh,620px)] overflow-x-auto overflow-y-auto whitespace-pre text-left [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-dw-tan/20">
                <code className="text-dw-muted">
                  <span className="text-dw-muted"># Model version control in your repo{'\n'}</span>
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
                  <span className="text-dw-tan">storage</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'  '}
                  <span className="text-dw-tan">filecoin</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">true</span>
                  {'\n'}
                  {'  '}
                  <span className="text-dw-tan">redundancy</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">3</span>
                  {'\n'}
                  <span className="text-dw-tan">settlement</span>
                  <span className="text-dw-muted">:{'\n'}</span>
                  {'  '}
                  <span className="text-dw-tan">chain</span>
                  <span className="text-dw-muted">: </span>
                  <span className="text-dw-highlight">&quot;avalanche&quot;</span>
                </code>
              </pre>
            </div>
            <p className="border-t border-white/[0.06] bg-dw-surface/25 px-4 py-3.5 font-sans text-sm leading-relaxed text-dw-muted sm:px-5">
              Commit this file. floppydisk.cc trains{' '}
              <span className="text-dw-cream">trading_taste_v2</span>, stores on Filecoin. When you set{' '}
              <span className="font-mono text-dw-highlight">production: true</span>, your app swaps to the
              new model — one Avalanche transaction. Live.
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
            <h4 className="font-display text-lg text-dw-cream">Why Filecoin for Model Storage?</h4>
            <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">
              Model weights are precious. If you lose them, you retrain from scratch. Filecoin ensures your
              models are stored permanently on decentralized nodes. If one node fails, others have copies.
              If floppydisk.cc ever shuts down, your models are recoverable. Immutability matters for AI.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-[20px] border border-white/[0.08] bg-dw-surface/40 p-6 text-center backdrop-blur-[24px] transition-shadow hover:shadow-[0_12px_40px_rgba(201,169,110,0.06)]"
          >
            <h4 className="font-display text-lg text-dw-cream">Why Avalanche?</h4>
            <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">
              Every model swap is a transaction. Every production change is logged. Avalanche gives you fast,
              cheap, immutable records — which model served which user, and the full history. Perfect
              auditability. Pennies, not dollars.
            </p>
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}
