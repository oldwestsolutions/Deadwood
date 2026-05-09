export type LayerSlug =
  | 'data'
  | 'architecture'
  | 'weights'
  | 'training'
  | 'inference'
  | 'optimization'
  | 'evaluation'
  | 'deployment'
  | 'feedback';

export interface LayerSummary {
  slug: LayerSlug;
  index: number;
  title: string;
  subtitle: string;
  /** Homepage card line */
  cardDesc: string;
  /** Tailwind gradient overlay classes — warm palette only */
  cardTint: string;
}

export const LAYER_ORDER: LayerSlug[] = [
  'data',
  'architecture',
  'weights',
  'training',
  'inference',
  'optimization',
  'evaluation',
  'deployment',
  'feedback',
];

export const LAYER_SUMMARIES: Record<LayerSlug, LayerSummary> = {
  data: {
    slug: 'data',
    index: 1,
    title: 'Data',
    subtitle: 'The foundation',
    cardDesc:
      'Curation, cleaning, tokenization. The foundation everything else builds on.',
    cardTint:
      'from-dw-tan/18 via-emerald-950/25 to-dw-surface/90',
  },
  architecture: {
    slug: 'architecture',
    index: 2,
    title: 'Architecture',
    subtitle: 'The blueprint',
    cardDesc:
      'Transformer design, attention mechanisms, positional encoding. The blueprint.',
    cardTint:
      'from-dw-tan/22 via-amber-950/30 to-dw-surface/90',
  },
  weights: {
    slug: 'weights',
    index: 3,
    title: 'Weights',
    subtitle: 'The knowledge',
    cardDesc:
      'Learned parameters, fine-tuning, quantization, distillation, merging. The knowledge.',
    cardTint:
      'from-dw-highlight/15 via-dw-tan/12 to-dw-surface/90',
  },
  training: {
    slug: 'training',
    index: 4,
    title: 'Training algorithm',
    subtitle: 'The learning process',
    cardDesc:
      'Loss functions, optimizers, learning rates, gradient accumulation. How models learn.',
    cardTint:
      'from-amber-900/35 via-dw-tan/15 to-dw-surface/90',
  },
  inference: {
    slug: 'inference',
    index: 5,
    title: 'Inference engine',
    subtitle: 'Generation',
    cardDesc:
      'Tokenization, forward pass, logits, sampling, decoding. How output is produced.',
    cardTint:
      'from-dw-tan/16 via-teal-950/25 to-dw-surface/90',
  },
  optimization: {
    slug: 'optimization',
    index: 6,
    title: 'Optimization & serving',
    subtitle: 'Speed & cost',
    cardDesc:
      'Batching, caching, quantization, flash attention, efficient servers. Fast and cheap inference.',
    cardTint:
      'from-orange-950/40 via-dw-tan/20 to-dw-surface/90',
  },
  evaluation: {
    slug: 'evaluation',
    index: 7,
    title: 'Evaluation & verification',
    subtitle: 'Proof it works',
    cardDesc:
      'BLEU, ROUGE, perplexity, F1, fairness checks, red-team suites. Evidence that gates a promotion.',
    cardTint:
      'from-emerald-950/35 via-dw-tan/14 to-dw-surface/90',
  },
  deployment: {
    slug: 'deployment',
    index: 8,
    title: 'Deployment & monitoring',
    subtitle: 'Production reality',
    cardDesc:
      'Promoted weights, routing, and traffic shifts post against the token network—metered usage, reconcilable receipts, no shadow billing.',
    cardTint:
      'from-stone-900/50 via-dw-tan/12 to-dw-surface/90',
  },
  feedback: {
    slug: 'feedback',
    index: 9,
    title: 'Feedback & fine-tuning',
    subtitle: 'Continuous improvement',
    cardDesc:
      'Production signals and incentives loop back through the same settlement layer—budgeting the next SFT, RLHF, or DPO pass with clear attribution.',
    cardTint:
      'from-rose-950/35 via-dw-tan/14 to-dw-surface/90',
  },
};

export function getLayerBySlug(slug: string): LayerSummary | undefined {
  return LAYER_ORDER.includes(slug as LayerSlug)
    ? LAYER_SUMMARIES[slug as LayerSlug]
    : undefined;
}

export function getAdjacent(slug: LayerSlug): {
  prev: LayerSlug | null;
  next: LayerSlug | null;
} {
  const i = LAYER_ORDER.indexOf(slug);
  return {
    prev: i > 0 ? LAYER_ORDER[i - 1] : null,
    next: i < LAYER_ORDER.length - 1 ? LAYER_ORDER[i + 1] : null,
  };
}
