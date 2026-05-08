'use client';

import { motion } from 'framer-motion';
import { MotionSection } from '@/components/marketing/MotionSection';

const stages = [
  { key: 'prepare', label: 'Prepare', hint: 'cache · image · deps' },
  { key: 'execute', label: 'Execute', hint: 'Snowflake pools' },
  { key: 'verify', label: 'Verify', hint: 'tests · coverage' },
  { key: 'publish', label: 'Publish', hint: 'artifacts · chain' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function UseCases() {
  return (
    <MotionSection
      id="gitlab-ci"
      className="relative flex min-h-[100dvh] min-h-[100vh] flex-col justify-center overflow-hidden py-20 sm:py-24"
    >
      {/* Atmospheric stack */}
      <div className="pointer-events-none absolute inset-0 bg-dw-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_15%_20%,rgba(252,109,38,0.07)_0%,transparent_50%),radial-gradient(ellipse_70%_50%_at_85%_75%,rgba(201,169,110,0.12)_0%,transparent_55%),radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(42,38,32,0.95)_0%,transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 dw-gitlab-grid opacity-90 dw-gitlab-vignette" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FC6D26]/25 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          {/* Copy column */}
          <div className="lg:col-span-5">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#FC6D26]"
            >
              Native CI · self-hosted runners
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] tracking-tight text-dw-cream"
            >
              Ship compute the same way you ship code.
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-6 text-base leading-relaxed text-dw-muted sm:text-lg"
            >
              Wire Deadwood into the workflow your teams already trust: merge requests, protected
              branches, review apps, and pipeline graphs —{' '}
              <span className="text-dw-highlight">
                Python workloads become first-class jobs
              </span>{' '}
              with artifacts, logs, and gates you can read without leaving the DevOps surface you
              live in every day.
            </motion.p>

            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="mt-8 space-y-4 border-l border-[#FC6D26]/25 pl-6"
            >
              {[
                '`.gitlab-ci.yml` declares runners, stages, and secrets alongside application code.',
                'Executors stay yours — Docker, shell, or Kubernetes — Deadwood schedules inside those fences.',
                'Artifacts carry hashes downstream so Monte Carlo, training, and trading backends stay reproducible.',
              ].map((line) => (
                <li key={line} className="text-sm leading-relaxed text-dw-muted sm:text-[15px]">
                  {line}
                </li>
              ))}
            </motion.ul>

            {/* MR strip — illustrative */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="relative mt-10 overflow-hidden rounded-2xl border border-white/[0.07] bg-dw-surface/35 backdrop-blur-md"
            >
              <div className="dw-mr-shimmer absolute inset-0 opacity-70" aria-hidden />
              <div className="relative flex flex-wrap items-center gap-3 px-5 py-4 font-mono text-[11px] sm:text-xs">
                <span className="rounded-md bg-white/[0.06] px-2 py-1 text-dw-muted">!142</span>
                <span className="text-dw-cream">feat(runner): snowflake-backed monte_carlo job</span>
                <span className="ml-auto flex gap-3">
                  <span className="text-emerald-400/90">+428</span>
                  <span className="text-rose-400/75">−61</span>
                </span>
              </div>
              <div className="relative flex gap-1 border-t border-white/[0.06] px-5 py-2">
                <span className="h-1.5 flex-1 rounded-full bg-emerald-500/35" />
                <span className="h-1.5 flex-1 rounded-full bg-emerald-500/55" />
                <span className="h-1.5 flex-1 rounded-full bg-dw-tan/40" />
                <span className="h-1.5 flex-1 rounded-full bg-dw-muted/25" />
              </div>
            </motion.div>
          </div>

          {/* Illustration column */}
          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Floating orbit decoration */}
              <div
                className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full border border-[#FC6D26]/10 opacity-60"
                style={{
                  background:
                    'conic-gradient(from 210deg, transparent 0deg, rgba(252,109,38,0.15) 80deg, transparent 160deg)',
                }}
                aria-hidden
              />

              {/* Pipeline */}
              <div className="relative rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-dw-surface/55 via-dw-bg/90 to-dw-bg p-6 shadow-dw-lift sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-5 font-mono text-[10px] uppercase tracking-[0.2em] text-dw-muted">
                  <span>Pipeline · main</span>
                  <span className="text-emerald-400/85">passed</span>
                  <span className="text-dw-muted/80">04:18</span>
                </div>

                <div className="relative mt-8 pb-2">
                  <div className="absolute left-[12%] right-[12%] top-[22px] hidden h-[5px] overflow-hidden rounded-full sm:block">
                    <div className="dw-pipeline-track h-full w-full rounded-full opacity-90" />
                  </div>

                  <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4">
                    {stages.map((s, i) => (
                      <div key={s.key} className="relative flex flex-col items-center text-center">
                        <div
                          className="dw-runner-ring relative z-[1] flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/[0.08] bg-gradient-to-br from-dw-surface to-dw-bg font-mono text-[13px] font-semibold text-dw-cream sm:h-14 sm:w-14"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        >
                          {i + 1}
                        </div>
                        <p className="mt-4 font-display text-lg text-dw-cream">{s.label}</p>
                        <p className="mt-1 max-w-[9rem] text-[11px] leading-snug text-dw-muted">
                          {s.hint}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* YAML panel */}
                <div className="relative mt-10 rounded-2xl border border-[#FC6D26]/15 bg-[#0c0c0a]/80 px-5 py-5 font-mono text-[11px] leading-relaxed text-dw-muted backdrop-blur-xl sm:text-xs dw-yaml-glow">
                  <div className="mb-3 flex items-center gap-2 border-b border-white/[0.06] pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FC6D26]/80" />
                    <span className="text-[10px] uppercase tracking-wider text-dw-muted">
                      .gitlab-ci.yml
                    </span>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre text-left">
                    <code>
                      <span className="text-dw-highlight">deadwood_monte_carlo</span>
                      {':\n'}
                      {'  '}
                      <span className="text-dw-tan">stage</span>
                      <span className="text-dw-muted">: compute</span>
                      {'\n'}
                      {'  '}
                      <span className="text-dw-tan">tags</span>
                      <span className="text-dw-muted">: [snowflake, python312]</span>
                      {'\n'}
                      {'  '}
                      <span className="text-dw-tan">script</span>
                      <span className="text-dw-muted">:</span>
                      {'\n'}
                      {'    - '}
                      <span className="text-dw-cream/90">
                        python jobs/run_sim.py --paths $PATHS
                      </span>
                      {'\n'}
                      {'  '}
                      <span className="text-dw-tan">artifacts</span>
                      <span className="text-dw-muted">:</span>
                      {'\n'}
                      {'    '}
                      <span className="text-dw-tan">reports</span>
                      <span className="text-dw-muted">: </span>
                      <span className="text-dw-cream/85">dotenv</span>
                      {'\n'}
                      {'    '}
                      <span className="text-dw-tan">paths</span>
                      <span className="text-dw-muted">: [manifest.json, logs/]</span>
                    </code>
                  </pre>
                </div>

                <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-dw-muted/65">
                  Merge trains · protected branches · review environments
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
