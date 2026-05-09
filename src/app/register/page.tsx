'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { NavBar } from '@/components/marketing/NavBar';

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong');
      }

      router.push('/login?registered=true');
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-dw-bg text-dw-cream">
      <NavBar />
      <main className="mx-auto max-w-md px-4 pb-24 pt-28 sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-dw-tan">Snowflake Premium</p>
        <h1 className="mt-3 font-display text-3xl tracking-tight text-dw-cream">Create workspace</h1>
        <p className="mt-2 font-sans text-sm leading-relaxed text-dw-muted">
          One account for API keys, training runs, and routing. Questions? See the{' '}
          <Link href="/snowflake-premium#premium-faq" className="text-dw-highlight underline-offset-2 hover:underline">
            FAQ
          </Link>
          .
        </p>

        <div className="mt-8 rounded-[20px] border border-white/[0.1] bg-dw-surface/40 p-6 shadow-dw-glow-sm backdrop-blur-sm sm:p-8">
          {error && (
            <div className="mb-4 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 font-sans text-sm text-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-dw-tan">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 block w-full rounded-xl border border-white/[0.12] bg-dw-bg/80 px-4 py-3 font-sans text-dw-cream placeholder:text-dw-muted/60 outline-none ring-dw-highlight/30 transition-shadow focus:border-dw-highlight/40 focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-dw-tan">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="mt-2 block w-full rounded-xl border border-white/[0.12] bg-dw-bg/80 px-4 py-3 font-sans text-dw-cream placeholder:text-dw-muted/60 outline-none ring-dw-highlight/30 transition-shadow focus:border-dw-highlight/40 focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="password" className="block font-sans text-sm font-medium text-dw-tan">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                autoComplete="new-password"
                className="mt-2 block w-full rounded-xl border border-white/[0.12] bg-dw-bg/80 px-4 py-3 font-sans text-dw-cream placeholder:text-dw-muted/60 outline-none ring-dw-highlight/30 transition-shadow focus:border-dw-highlight/40 focus:ring-2"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-full bg-dw-tan px-4 py-3.5 font-sans text-sm font-semibold text-dw-bg shadow-dw-glow-sm transition-shadow hover:shadow-dw-glow disabled:opacity-50"
            >
              {isLoading ? 'Creating workspace…' : 'Create workspace'}
            </button>
          </form>

          <p className="mt-6 text-center font-sans text-sm text-dw-muted">
            Already have an account?{' '}
            <Link href="/login" className="font-medium text-dw-highlight hover:underline">
              Sign in
            </Link>
          </p>
          <p className="mt-4 text-center font-sans text-sm">
            <Link href="/snowflake-premium" className="text-dw-muted hover:text-dw-highlight">
              ← Snowflake Premium overview
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
