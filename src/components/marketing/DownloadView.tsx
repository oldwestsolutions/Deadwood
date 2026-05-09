'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { NavBar } from '@/components/marketing/NavBar';
import { LandingFooter } from '@/components/marketing/LandingFooter';

const RELEASES_URL =
  'https://github.com/oldwestsolutions/Deadwood/releases';

const platforms = [
  {
    id: 'macos',
    name: 'macOS',
    detail: 'Apple Silicon & Intel · universal binary',
    ext: '.dmg',
    note: 'Installer & CLI bundled',
  },
  {
    id: 'windows',
    name: 'Windows',
    detail: 'x64 · Windows 10/11',
    ext: '.msi',
    note: 'Signed builds',
  },
  {
    id: 'linux',
    name: 'Linux',
    detail: 'x86_64 · glibc 2.31+',
    ext: '.deb · .tar.gz',
    note: 'Headless runner package',
  },
];

export function DownloadView() {
  return (
    <div className="min-h-screen bg-dw-bg">
      <NavBar />
      <main className="relative overflow-hidden pt-32 pb-section">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(201,169,110,0.12)_0%,transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-2xl text-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-dw-muted">
              Deadwood Runner
            </p>
            <h1 className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-tight text-dw-cream">
              Download
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed text-dw-muted">
              Install the Deadwood CLI and local runner agent — connect to GitLab pipelines, Snowflake
              pools, and metered cycles from your workstation or fleet.
            </p>
            <p className="mt-4 font-mono text-xs text-dw-tan/90">
              Builds ship with checksum manifests · verify before install
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3"
          >
            {platforms.map((p, i) => (
              <motion.article
                key={p.name}
                id={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 + i * 0.06, duration: 0.45 }}
                className="scroll-mt-28 flex flex-col rounded-[22px] border border-white/[0.08] bg-gradient-to-br from-dw-surface/70 to-dw-bg/90 p-8 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-2xl text-dw-cream">{p.name}</h2>
                    <p className="mt-2 text-sm text-dw-muted">{p.detail}</p>
                  </div>
                  <ArrowDownTrayIcon className="h-8 w-8 shrink-0 text-dw-tan/80" aria-hidden />
                </div>
                <p className="mt-4 font-mono text-xs text-dw-highlight">{p.ext}</p>
                <p className="mt-2 text-xs text-dw-muted">{p.note}</p>
                <div className="mt-auto pt-8">
                  <Link
                    href={RELEASES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-dw-tan px-6 py-3 text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow"
                  >
                    Download for {p.name}
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mx-auto mt-16 max-w-2xl rounded-[22px] border border-white/[0.08] glass-warm p-8 text-center"
          >
            <p className="font-sans text-sm leading-relaxed text-dw-muted">
              Release artifacts and SHA256 sums will appear here when builds are published. Until
              then, use the docs for{' '}
              <Link href="/docs" className="text-dw-tan underline-offset-4 hover:text-dw-highlight hover:underline">
                installation from source
              </Link>{' '}
              or{' '}
              <Link
                href="/register"
                className="text-dw-tan underline-offset-4 hover:text-dw-highlight hover:underline"
              >
                cloud runners
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </main>
      <LandingFooter />
    </div>
  );
}
