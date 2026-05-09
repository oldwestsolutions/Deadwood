'use client';

import { PricingTreasuryOcean } from '@/components/marketing/PricingTreasuryOcean';
import { AccountSignupPromo } from '@/components/marketing/AccountSignupPromo';

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-white/[0.06] py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 lg:px-6">
        {/* How billing works */}
        <div className="mx-auto max-w-5xl">
          <h3 className="font-display text-2xl text-dw-cream">Transparent, Pay-for-What-You-Use</h3>
          <div className="mt-3 overflow-hidden rounded-[14px] border border-[#1e4d6e]/35 bg-[#070f18]/90 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-2.5">
            <div className="mb-1 flex items-center gap-2 px-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-dw-tan/70" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-dw-muted">
                Billing ocean · tokens → treasury
              </span>
            </div>
            <PricingTreasuryOcean />
          </div>
          <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:gap-8">
            <div>
              <ul className="space-y-2.5 font-sans text-sm leading-relaxed text-dw-muted">
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> You integrate Deadwood with your API key.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Every prediction, training run, and model swap is counted.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Usage updates live on your dashboard.
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Monthly bill = base tier + token overages (if applicable).
                </li>
                <li className="flex gap-2">
                  <span className="text-dw-tan">→</span> Snowflake query fees stay with your Snowflake bill on Premium.
                </li>
              </ul>
            </div>
            <div className="rounded-[16px] border border-white/[0.08] bg-dw-bg/60 p-4 font-mono text-xs leading-relaxed text-dw-muted backdrop-blur-sm sm:text-[13px]">
              <p className="font-sans text-sm font-medium text-dw-cream">Example month (Premium)</p>
              <pre className="mt-2 whitespace-pre-wrap text-dw-highlight">{`Base: $99/month
├─ 60,000 API calls (within 100K)
├─ 4 trainings (within 10)
└─ Snowflake-connected jobs within quota
Overage charges:
├─ 25,000 extra API calls @ $0.001 = $25
├─ 3 extra trainings @ $50 = $150
└─ Extra prediction tokens @ metered rate = $40
Total: $99 + $25 + $150 + $40 = $314`}</pre>
              <p className="mt-3 font-sans text-sm text-dw-tan">Transparent. No surprises.</p>
            </div>
          </div>

          <AccountSignupPromo className="mt-10" />
        </div>
      </div>
    </section>
  );
}
