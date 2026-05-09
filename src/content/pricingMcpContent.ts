/** Pricing copy: Local / Premium / Enterprise tiers; Snowflake as premium value-add */

export type PricingComparisonRow = {
  feature: string;
  local: string;
  premium: string;
  enterprise: string;
  /** Emphasize row (training source, settlement, Snowflake) */
  highlight?: boolean;
  /** Shown next to feature label — explains row or premium cell */
  tooltip?: string;
};

export const pricingComparisonRows: PricingComparisonRow[] = [
  {
    feature: 'API calls / month',
    local: '1,000',
    premium: '100,000',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Model trainings / month',
    local: '1',
    premium: '10',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Training data source',
    local: 'Local files only',
    premium: 'Local files + Snowflake',
    enterprise: 'Local + Enterprise Snowflake + custom sources',
    highlight: true,
    tooltip:
      'Premium: connect your Snowflake instance. Deadwood queries in place—you pay Snowflake for queries. No bulk export; data stays in your warehouse.',
  },
  {
    feature: 'Max training dataset',
    local: '10K items (MB-scale)',
    premium: '1M items (GB-scale)',
    enterprise: 'Unlimited (petabyte-scale)',
  },
  {
    feature: 'Model ecosystem',
    local: 'Phi-3 (lightweight)',
    premium: 'Phi, Falcon, Mistral, LLaMA',
    enterprise: 'Full ecosystem + custom fine-tuning + proprietary models',
  },
  {
    feature: 'Model storage',
    local: 'Public shared storage (no privacy)',
    premium: 'Private floppydisk.cc (versioned, encrypted)',
    enterprise: 'Dedicated floppydisk.cc + Filecoin backup + custom storage',
  },
  {
    feature: 'On-chain settlement',
    local: 'Hourly token batches (daily ledger updates)',
    premium: 'Real-time Avalanche (immediate transactions, immutable ledger)',
    enterprise: 'Real-time (Cosmos or Avalanche—you choose)',
    highlight: true,
    tooltip:
      'Premium: usage posts as transactions on Avalanche—transparent spend and creator payouts on an immutable ledger.',
  },
  {
    feature: 'Snowflake integration',
    local: 'None (local training only)',
    premium: 'Your Snowflake instance (you pay Snowflake query costs)',
    enterprise: 'Dedicated Snowflake cluster (unlimited queries included)',
    highlight: true,
    tooltip:
      'Premium uses your Snowflake account. For dedicated clusters and negotiated query envelopes, see Enterprise and the Snowflake Premium product page.',
  },
  {
    feature: 'Training speed',
    local: 'Local compute (CPU only, 1–10 min per 10K items)',
    premium: 'Cloud compute (serverless, 2–5 min per 1M items)',
    enterprise: 'GPU-accelerated (20–60 min per 500B items, optional real-time)',
  },
  {
    feature: 'Creator marketplace',
    local: 'View only (can use published models)',
    premium: 'Publish & earn (70% revenue share on published models)',
    enterprise: 'Premium publishing (featured placement, custom revenue split, direct creator relationships)',
  },
  {
    feature: 'Compliance & certifications',
    local: 'Basic encryption (TLS in transit)',
    premium: 'SOC 2 Type II, GDPR, encryption at rest + in transit',
    enterprise: 'SOC 2 II, GDPR, HIPAA, FedRAMP (custom agreements)',
  },
  {
    feature: 'Multi-team access',
    local: 'Single user only',
    premium: 'Basic (2–3 team members, read/write)',
    enterprise: 'Full RBAC (unlimited users, custom roles, SSO/SAML)',
  },
];

/** @deprecated Use pricingComparisonRows — kept for any stray imports */
export const comparisonRows = pricingComparisonRows.map((r) => ({
  feature: r.feature,
  catalyst: r.local,
  accelerator: r.premium,
  autonomous: r.enterprise,
}));

/** FAQ answer: plain copy, or optional labeled subsections after the lead paragraph */
export type FaqAnswer = string | Array<string | { subq: string; suba: string }>;

export type FaqItem = {
  q: string;
  a: FaqAnswer;
};

export const faqItems: FaqItem[] = [
  {
    q: 'What counts as an API call?',
    a: [
      'Each prediction, inference, or model swap against Deadwood’s API counts as one call. Local includes 1,000 calls/month — fine for experiments and early integrations.',
      {
        subq: 'Can I change tiers monthly?',
        suba: 'Yes. Downgrade anytime (refund prorated where applicable). Upgrade anytime.',
      },
      {
        subq: 'What if I exceed my limits?',
        suba: 'Local: requests are rejected until the next period. Premium: transparent overage pricing on your dashboard. Enterprise: no hard caps.',
      },
      {
        subq: 'What if I need custom pricing?',
        suba: 'Talk to our team — Enterprise is fully customizable for data residency, SLAs, and dedicated infrastructure.',
      },
      {
        subq: 'Is there a free trial of Premium?',
        suba: 'Yes. 14-day Premium trial — contact sales or start from the pricing CTAs when available.',
      },
    ],
  },
  {
    q: 'What is a model training run?',
    a: 'A training run fine-tunes or trains a model from your configuration and data (local files or Snowflake-backed queries on Premium and Enterprise). Local includes one training run per month on local data up to 10K items.',
  },
  {
    q: 'How does Snowflake integration work?',
    a: 'On Premium, you connect your own Snowflake account. Deadwood queries data in place — models train without bulk-exporting your warehouse. On Enterprise, we can provision a dedicated Snowflake cluster with unlimited querying and enterprise residency controls.',
  },
  {
    q: 'Why Avalanche for settlement?',
    a: 'Predictions and usage settle on Avalanche for fast, cheap, auditable records. Premium adds real-time settlement so balances and proofs stay in sync with production traffic.',
  },
  {
    q: 'Do I pay for Snowflake queries?',
    a: 'On Premium, Snowflake query costs are billed by Snowflake to your account; Deadwood charges for training and API usage. On Enterprise, dedicated-cluster terms can include unlimited querying.',
  },
  {
    q: 'Is my data copied off Snowflake?',
    a: 'No. Deadwood trains against queries you authorize; massive datasets stay in your cloud.',
  },
  {
    q: 'Can I use Deadwood without Snowflake?',
    a: 'Yes. Local workflows never require Snowflake. Snowflake is optional infrastructure for large-scale training.',
  },
];
