/** Pricing copy: Snowflake as premium value-add; API + personalization model */

export const comparisonRows: {
  feature: string;
  catalyst: string;
  accelerator: string;
  autonomous: string;
}[] = [
  {
    feature: 'API calls/month',
    catalyst: '1,000',
    accelerator: '100,000',
    autonomous: 'Unlimited',
  },
  {
    feature: 'Model trainings/month',
    catalyst: '1',
    accelerator: '10',
    autonomous: 'Unlimited',
  },
  {
    feature: 'Training data source',
    catalyst: 'Local files',
    accelerator: 'Local + Snowflake',
    autonomous: 'Local + Enterprise Snowflake',
  },
  {
    feature: 'Max training dataset',
    catalyst: '10K items',
    accelerator: '1M items',
    autonomous: 'Unlimited (petabyte-scale)',
  },
  {
    feature: 'Model ecosystem',
    catalyst: 'Phi-3',
    accelerator: 'Phi, Falcon, Mistral, LLaMA',
    autonomous: 'Full + custom architectures',
  },
  {
    feature: 'Model storage',
    catalyst: 'Public shared',
    accelerator: 'Private floppydisk.cc',
    autonomous: 'Dedicated floppydisk.cc + Filecoin',
  },
  {
    feature: 'On-chain settlement',
    catalyst: 'Hourly batches',
    accelerator: 'Real-time Avalanche',
    autonomous: 'Real-time (Cosmos or Avalanche)',
  },
  {
    feature: 'Snowflake access',
    catalyst: 'None',
    accelerator: 'Your instance (query costs)',
    autonomous: 'Dedicated cluster (unlimited)',
  },
  {
    feature: 'Support',
    catalyst: 'Community',
    accelerator: 'Email/Slack 4hr',
    autonomous: 'Dedicated manager',
  },
  {
    feature: 'Price',
    catalyst: 'Free',
    accelerator: '$99/mo',
    autonomous: 'Custom',
  },
];

export const featureExplainerItems = [
  {
    q: 'What counts as an API call?',
    a: [
      'Each prediction, inference, or model swap against Deadwood’s API counts as one call.',
      'Example: Catalyst includes 1,000 calls/month — fine for experiments and early integrations.',
    ],
  },
  {
    q: 'What is a model training run?',
    a: [
      'A training run fine-tunes or trains a model from your configuration and data (local files or Snowflake-backed queries on premium tiers).',
      'Catalyst includes one training run per month on local data up to 10K items.',
    ],
  },
  {
    q: 'How does Snowflake integration work?',
    a: [
      'On Accelerator, you connect your own Snowflake account. Deadwood queries data in place — models train without bulk-exporting your warehouse.',
      'On Autonomous, we can provision a dedicated Snowflake cluster with unlimited querying and enterprise residency controls.',
    ],
  },
  {
    q: 'Why Avalanche for settlement?',
    a: [
      'Predictions and usage settle on Avalanche for fast, cheap, auditable records.',
      'Higher tiers add real-time settlement so balances and proofs stay in sync with production traffic.',
    ],
  },
  {
    q: 'What is floppydisk.cc storage?',
    a: [
      'Deadwood versions model artifacts through floppydisk.cc — think git for weights.',
      'Premium tiers add private workspaces and Filecoin-backed durability so versions stay immutable and recoverable.',
    ],
  },
];

export const faqItems = [
  {
    q: 'Can I change tiers monthly?',
    a: 'Yes. Downgrade anytime (refund prorated where applicable). Upgrade anytime.',
  },
  {
    q: 'What if I exceed my limits?',
    a: 'Catalyst: requests are rejected until the next period. Accelerator: transparent overage pricing on your dashboard. Autonomous: no hard caps.',
  },
  {
    q: 'Do I pay for Snowflake queries?',
    a: 'On Accelerator, Snowflake query costs are billed by Snowflake to your account; Deadwood charges for training and API usage. On Autonomous, dedicated-cluster terms can include unlimited querying.',
  },
  {
    q: 'Is my data copied off Snowflake?',
    a: 'No. Deadwood trains against queries you authorize; massive datasets stay in your cloud.',
  },
  {
    q: 'Can I use Deadwood without Snowflake?',
    a: 'Yes. Catalyst and local-data workflows never require Snowflake. Snowflake is optional infrastructure for large-scale training.',
  },
  {
    q: 'What if I need custom pricing?',
    a: 'Talk to our team — Autonomous is fully customizable for data residency, SLAs, and dedicated infrastructure.',
  },
  {
    q: 'Is there a free trial of Accelerator?',
    a: 'Yes. 14-day Accelerator trial — no credit card required.',
  },
];
