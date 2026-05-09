import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create workspace — Snowflake Premium · Deadwood',
  description: 'Sign up for a Deadwood workspace: API keys, training runs, and production routing.',
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
