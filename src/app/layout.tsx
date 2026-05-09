import type { Metadata } from 'next';
import './globals.css';
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';
import AuthProvider from '@/components/AuthProvider';
import { Analytics } from '@vercel/analytics/react';

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Deadwood — Python as a Service · Numbers as a Service',
  description:
    'Compute infrastructure for Monte Carlo simulations, AI training, algorithmic trading, and consequential learning. Deploy Python jobs billed by the cycle.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const fontVars = `${dmSerifDisplay.variable} ${dmSans.variable} ${jetbrainsMono.variable}`;

  return (
    <html lang="en" className={`h-full ${fontVars}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className="dw-body-grain font-sans min-h-full text-dw-cream">
        <AuthProvider>
          {children}
          <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}
