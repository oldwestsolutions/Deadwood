'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { LayerSlug } from '@/content/intelligenceLayers';
import { LAYER_DETAIL } from '@/content/intelligenceLayerDetail';
import { LAYER_ORDER, LAYER_SUMMARIES, getAdjacent } from '@/content/intelligenceLayers';
import { LayerHeroVisual } from '@/components/layers/LayerHeroVisual';
import { LayersRail } from '@/components/layers/LayersRail';

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LayerDetailView({ slug }: { slug: LayerSlug }) {
  const summary = LAYER_SUMMARIES[slug];
  const detail = LAYER_DETAIL[slug];
  const { prev, next } = getAdjacent(slug);
  const nextTitle = next ? LAYER_SUMMARIES[next].title : 'Home';

  return (
    <div className="min-h-screen bg-dw-bg text-dw-cream">
      <section
        className={`relative overflow-hidden border-b border-white/[0.06] px-6 pb-16 pt-28 lg:px-8 lg:pb-24 lg:pt-32 ${detail.heroMeshBg}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-dw-bg/55" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.p
                variants={fade}
                className="font-sans text-xs uppercase tracking-[0.2em] text-dw-tan"
              >
                Layer {summary.index} of {LAYER_ORDER.length}
              </motion.p>
              <motion.h1
                variants={fade}
                className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tight"
              >
                {summary.title}.{' '}
                <span className="text-dw-highlight">{detail.missionStatement}</span>
              </motion.h1>
              <motion.p
                variants={fade}
                className="mt-6 font-sans text-xl text-dw-tan sm:text-[1.35rem]"
              >
                {detail.subheader}
              </motion.p>
              {detail.heroIntro.map((p) => (
                <motion.p
                  key={p}
                  variants={fade}
                  className="mt-4 font-sans text-base leading-relaxed text-dw-muted"
                >
                  {p}
                </motion.p>
              ))}
              <motion.div variants={fade} className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#solution"
                  className="inline-flex rounded-full bg-dw-tan px-8 py-3.5 text-sm font-semibold text-dw-bg shadow-dw-glow-sm hover:shadow-dw-glow"
                >
                  See Deadwood&apos;s solution
                </Link>
                {next && (
                  <Link
                    href={`/layers/${next}`}
                    className="inline-flex rounded-full border border-dw-tan/35 px-8 py-3.5 text-sm font-semibold text-dw-cream hover:border-dw-highlight hover:bg-white/[0.04]"
                  >
                    Next layer: {nextTitle}
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <LayerHeroVisual slug={slug} />
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        className="mx-auto max-w-3xl px-6 py-section lg:px-8"
      >
        <motion.h2 variants={fade} className="font-display text-3xl text-dw-cream">
          What this layer does
        </motion.h2>
        {detail.whatLayerDoes.map((block) => (
          <motion.div key={block.title} variants={fade} className="mt-10">
            <h3 className="font-display text-xl text-dw-highlight">{block.title}</h3>
            {block.paragraphs.map((para) => (
              <p key={para} className="mt-4 font-sans text-base leading-relaxed text-dw-muted">
                {para}
              </p>
            ))}
          </motion.div>
        ))}
      </motion.section>

      <section className="border-y border-white/[0.06] bg-dw-surface/25 px-6 py-section backdrop-blur-sm lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl text-dw-cream">The problem without Deadwood</h2>
            <p className="mt-4 font-sans text-base text-dw-muted">
              Without custodianship, your team inherits every sharp edge below.
            </p>
            <ul className="mt-8 space-y-4 font-sans text-sm leading-relaxed text-dw-muted">
              {detail.withoutBullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dw-tan/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] border border-white/[0.08] bg-dw-bg/60 p-8 backdrop-blur-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-dw-tan">
              Typical DIY cost
            </p>
            <dl className="mt-6 space-y-4 font-sans text-sm text-dw-muted">
              <div>
                <dt className="text-dw-cream">Timeline</dt>
                <dd className="mt-1">{detail.estimate.timeline}</dd>
              </div>
              <div>
                <dt className="text-dw-cream">Budget</dt>
                <dd className="mt-1">{detail.estimate.cost}</dd>
              </div>
              <div>
                <dt className="text-dw-cream">Expertise</dt>
                <dd className="mt-1">{detail.estimate.expertise}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="solution" className="scroll-mt-28 px-6 py-section lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl text-dw-cream">Deadwood&apos;s solution</h2>
          <p className="mt-4 font-sans text-base text-dw-muted">
            Opinionated APIs wire custodied data, runners, and proofs together — no boilerplate
            archaeology.
          </p>
          <pre className="dw-yaml-glow mt-8 overflow-x-auto rounded-[20px] border border-white/[0.08] bg-[#0c0c0a]/85 p-6 font-mono text-[11px] leading-relaxed text-dw-highlight sm:text-xs">
            <code className="text-dw-cream/95">{detail.deadwoodCode}</code>
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-section lg:px-8">
        <h2 className="font-display text-3xl text-dw-cream">
          How Deadwood custodies this layer
        </h2>
        <div className="mt-8 space-y-6 rounded-[24px] border border-dw-tan/15 bg-dw-surface/35 p-8 backdrop-blur-xl">
          {detail.custodianParagraphs.map((para) => (
            <p key={para} className="font-sans text-base leading-relaxed text-dw-muted">
              {para}
            </p>
          ))}
        </div>

        {detail.benchmarks && detail.benchmarks.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl text-dw-cream">Benchmarks / proof</h2>
            <div className="mt-6 overflow-x-auto rounded-[20px] border border-white/[0.08]">
              <table className="w-full min-w-[420px] border-collapse font-sans text-sm">
                <thead>
                  <tr className="border-b border-white/[0.08] bg-dw-surface/50 text-left">
                    <th className="px-4 py-3 font-medium text-dw-tan">Optimization</th>
                    <th className="px-4 py-3 font-medium text-dw-tan">Speedup</th>
                    <th className="px-4 py-3 font-medium text-dw-tan">Cost / VRAM</th>
                  </tr>
                </thead>
                <tbody className="text-dw-muted">
                  {detail.benchmarks.map((row) => (
                    <tr key={row.label} className="border-b border-white/[0.05]">
                      <td className="px-4 py-3 text-dw-cream">{row.label}</td>
                      <td className="px-4 py-3">{row.speedup ?? '—'}</td>
                      <td className="px-4 py-3">{row.cost ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {detail.benchmarksFootnote && (
              <p className="mt-4 font-sans text-xs text-dw-muted/80">{detail.benchmarksFootnote}</p>
            )}
          </div>
        )}
      </section>

      <section className="border-t border-white/[0.06] bg-dw-surface/20 px-6 py-section lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl text-dw-cream">Next steps</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <NextCard
              title="Continue the tour"
              body={
                next
                  ? `Follow how custody chains into ${LAYER_SUMMARIES[next].title}.`
                  : 'Return home for the full stack narrative.'
              }
              href={next ? `/layers/${next}` : '/'}
              cta={next ? `Next: ${LAYER_SUMMARIES[next].title}` : 'Back home'}
            />
            <NextCard
              title="Run a workload"
              body="Provision runners and metered jobs — describe the outcome, not every knob."
              href="/register"
              cta="Start a job"
            />
            <NextCard
              title="Talk to custodians"
              body="White-glove onboarding for regulated teams and bespoke stacks."
              href="/support"
              cta="Schedule a demo"
            />
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {prev && (
              <Link
                href={`/layers/${prev}`}
                className="text-sm text-dw-tan hover:text-dw-highlight"
              >
                ← Previous: {LAYER_SUMMARIES[prev].title}
              </Link>
            )}
          </div>
        </div>
      </section>

      <LayersRail active={slug} />
    </div>
  );
}

function NextCard({
  title,
  body,
  href,
  cta,
}: {
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-[22px] border border-white/[0.08] bg-dw-bg/50 p-7 backdrop-blur-xl"
    >
      <h3 className="font-display text-xl text-dw-cream">{title}</h3>
      <p className="mt-3 font-sans text-sm leading-relaxed text-dw-muted">{body}</p>
      <Link
        href={href}
        className="mt-6 inline-flex rounded-full border border-dw-tan/35 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-dw-tan hover:border-dw-highlight hover:bg-white/[0.04]"
      >
        {cta}
      </Link>
    </motion.div>
  );
}
