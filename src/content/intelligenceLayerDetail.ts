import type { LayerSlug } from '@/content/intelligenceLayers';

export interface BenchmarkRow {
  label: string;
  speedup?: string;
  cost?: string;
}

export interface LayerDetailContent {
  slug: LayerSlug;
  missionStatement: string;
  subheader: string;
  heroIntro: string[];
  heroMeshBg: string;
  whatLayerDoes: { title: string; paragraphs: string[] }[];
  withoutBullets: string[];
  estimate: { timeline: string; cost: string; expertise: string };
  deadwoodCode: string;
  custodianParagraphs: string[];
  benchmarks?: BenchmarkRow[];
  benchmarksFootnote?: string;
}

export const LAYER_DETAIL: Record<LayerSlug, LayerDetailContent> = {
  data: {
    slug: 'data',
    missionStatement: 'without tidy inputs, nothing learns.',
    subheader: 'Garbage in, garbage out — except faster.',
    heroIntro: [
      'Models never see the internet raw. They see tokens sliced from text that humans have filtered, deduplicated, de‑biased, and normalized.',
      'This layer decides whether your downstream billion‑parameter model memorizes noise or generalizes. Deadwood treats datasets like regulated infrastructure.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_85%_60%_at_70%_20%,rgba(201,169,110,0.14)_0%,transparent_50%),radial-gradient(ellipse_55%_45%_at_15%_80%,rgba(74,99,82,0.35)_0%,transparent_55%)]',
    whatLayerDoes: [
      {
        title: 'Data is the foundation of everything',
        paragraphs: [
          'Raw corpora include duplicates, toxic snippets, PII, and contradictory facts. Training on them blindly wastes compute and creates liabilities.',
          'Curation trades brute‑scale for signal density — often a million disciplined rows outperform a hundred million noisy ones.',
          'Tokenization maps language into discrete IDs your architecture consumes; tokenizer choice changes sequence lengths and vocabulary coverage.',
        ],
      },
      {
        title: 'Examples',
        paragraphs: [
          'Financial telemetry, licensed documentation, GitHub corpora, Wikipedia extracts — each needs bespoke consent and preprocessing pipelines.',
        ],
      },
    ],
    withoutBullets: [
      'Spin up storage buckets and lineage spreadsheets manually.',
      'Write bespoke cleaners for deduping, normalization, and toxicity filtering.',
      'Tune tokenizer merges with linguists and domain experts.',
      'Rebuild pipelines whenever regulation shifts.',
    ],
    estimate: {
      timeline: '4–8 weeks initial pass',
      cost: '$30k–$120k in tooling + labeling',
      expertise: 'Data engineers + annotators + compliance counsel',
    },
    deadwoodCode: `from deadwood import DataCustodian

custodian = DataCustodian(
    source="your_raw_data.csv",
    cleaning=True,
    curation_quality="high",
    tokenizer="sentencepiece",
)

clean_data = custodian.prepare()
# dedupe · normalize · token-ready manifests`,
    custodianParagraphs: [
      'Deadwood custodies ingestion contracts: schemas, consent tags, and reproducible manifests ride beside every batch.',
      'Cleaning recipes stay versioned like infrastructure-as-code. When auditors ask what trained this model, you point to an anchored manifest hash.',
    ],
    benchmarks: [
      { label: 'Manual QC throughput', speedup: 'baseline', cost: 'linear headcount' },
      { label: 'Deadwood custodied ingest', speedup: '12× batches/week', cost: 'fractional ops time' },
    ],
    benchmarksFootnote:
      'Latency numbers illustrative — measured against synthetic enterprise uploads.',
  },

  architecture: {
    slug: 'architecture',
    missionStatement: 'attention turns sequences into programs.',
    subheader: 'Pick structure before you touch GPUs.',
    heroIntro: [
      'Transformers route information across tokens using learned attention maps — effectively programmable memory bandwidth.',
      'Encoder stacks summarize context; decoder stacks generate tokens autoregressively; hybrids mix both.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_70%_55%_at_80%_25%,rgba(201,169,110,0.18)_0%,transparent_55%),radial-gradient(ellipse_50%_45%_at_10%_75%,rgba(92,63,48,0.45)_0%,transparent_60%)]',
    whatLayerDoes: [
      {
        title: 'Why attention works',
        paragraphs: [
          'Each token emits queries that attend to keys elsewhere in the sequence. Softmax yields differentiable routing.',
          'BERT-style models predict masked tokens; GPT-style models predict the next token; T5 frames tasks as text-to-text.',
          'Parameter counts (7B, 70B, etc.) describe tensor shards inside blueprint templates you still must choose responsibly.',
        ],
      },
    ],
    withoutBullets: [
      'Survey dozens of papers comparing widths, depths, RoPE vs sinusoidal PE.',
      'Prototype tiny Transformer forks to benchmark throughput.',
      'Negotiate licensing for proprietary modifications.',
    ],
    estimate: {
      timeline: '6–12 weeks experimentation',
      cost: '$80k–$250k research time',
      expertise: 'Research engineers + GPU profiling',
    },
    deadwoodCode: `from deadwood import ArchitectureLab

lab = ArchitectureLab()

blueprint = lab.select(
    modality="text",
    context_window=8192,
    inference_budget="a100-40gb",
)

blueprint.summary()  # depth · heads · MoE flags`,
    custodianParagraphs: [
      'ArchitectureLab encodes hardware envelopes — memory ceilings, tensor parallel widths, and Snowflake-side preprocessing assumptions.',
      'Instead of guessing head counts, you declare throughput targets and Deadwood snaps to reviewed templates.',
    ],
  },

  weights: {
    slug: 'weights',
    missionStatement: 'parameters are frozen histories of gradients.',
    subheader: 'Reuse giants; specialize safely.',
    heroIntro: [
      'Weights store everything the optimizer discovered — billions of floats distilled from data and schedules.',
      'Fine-tuning nudges subsets toward domain nuance; LoRA freezes backbone tensors while learning thin adapters.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_80%_50%_at_50%_15%,rgba(212,184,150,0.15)_0%,transparent_55%),radial-gradient(ellipse_55%_50%_at_20%_85%,rgba(74,60,48,0.45)_0%,transparent_60%)]',
    whatLayerDoes: [
      {
        title: 'Lifecycle',
        paragraphs: [
          'Foundation checkpoints ship from labs under licenses — Deadwood tracks lineage automatically.',
          'Quantization maps FP32 tensors into INT8/INT4 blocks with calibration datasets.',
          'Distillation trains compact students on teacher logits; merges fuse complementary adapters.',
        ],
      },
    ],
    withoutBullets: [
      'Download opaque blobs from untrusted mirrors.',
      'Hand-patch adapters incompatible with your tokenizer.',
      'Rebuild quantization recipes whenever GPUs change.',
    ],
    estimate: {
      timeline: '3–6 weeks per adaptation',
      cost: '$40k–$180k GPU burn',
      expertise: 'ML engineers comfortable with safetensors + CUDA graphs',
    },
    deadwoodCode: `from deadwood import ModelLibrary

library = ModelLibrary()

model = library.select(
    task="classification",
    constraint="memory",
    hardware="rtx4090",
)

finetuned = library.finetune(
    model="llama-7b",
    data=clean_data,
    method="lora",
)`,
    custodianParagraphs: [
      'ModelLibrary aligns checkpoints with custodied datasets — mismatched tokenizers never silently corrupt batches.',
      'Quantization presets adapt per SKU — LoRA ranks resize automatically when VRAM budgets swing.',
    ],
  },

  training: {
    slug: 'training',
    missionStatement: 'optimization sculpts noise into skill.',
    subheader: 'Gradients are fragile currency.',
    heroIntro: [
      'Training minimizes a loss functional — cross-entropy for language modeling, contrastive objectives for embeddings.',
      'Optimizers like AdamW accumulate momentum and adaptive scales; learning rates schedule warmup plus cosine decay.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_75%_55%_at_65%_30%,rgba(217,119,6,0.14)_0%,transparent_55%),radial-gradient(ellipse_45%_40%_at_15%_70%,rgba(120,53,15,0.35)_0%,transparent_60%)]',
    whatLayerDoes: [
      {
        title: 'Mechanics',
        paragraphs: [
          'Backpropagation walks gradients backward through the graph; mixed precision trades numerical noise for throughput.',
          'Gradient accumulation simulates huge batches when VRAM is tight.',
        ],
      },
    ],
    withoutBullets: [
      'Author bespoke PyTorch loops per experiment.',
      'Tune LR finder plots manually.',
      'Babysit NCCL topology failures nightly.',
    ],
    estimate: {
      timeline: 'multiple multi-week burn-ins',
      cost: '$100k–$600k GPU',
      expertise: 'Distributed training specialists',
    },
    deadwoodCode: `from deadwood import Trainer

trainer = Trainer(
    model=model,
    dataset=clean_data,
    optimizer="adamw",
    precision="bf16",
)

trainer.fit(epochs=3, eval_every="2500steps")`,
    custodianParagraphs: [
      'Trainer pipelines inherit manifests from DataCustodian — no rogue shards slip into gradients.',
      'Automatic checkpoint diffing pairs metrics with on-chain attestations when policies demand it.',
    ],
  },

  inference: {
    slug: 'inference',
    missionStatement: 'tokens drip one matmul at a time.',
    subheader: 'Sampling turns logits into language.',
    heroIntro: [
      'Each forward pass emits logits — raw scores over vocabulary. Sampling policies decide whether to pick greedily or explore.',
      'Temperature reshapes probability mass; nucleus sampling trims unlikely tails.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_70%_55%_at_25%_25%,rgba(201,169,110,0.16)_0%,transparent_55%),radial-gradient(ellipse_60%_45%_at_85%_75%,rgba(55,65,58,0.4)_0%,transparent_58%)]',
    whatLayerDoes: [
      {
        title: 'Pipeline',
        paragraphs: [
          'Detokenization stitches IDs back into Unicode; streaming APIs flush partial strings for responsive UX.',
        ],
      },
    ],
    withoutBullets: [
      'Rebuild KV caches per framework fork.',
      'Calibrate sampling knobs without telemetry.',
      'Guard against degenerate repetition manually.',
    ],
    estimate: {
      timeline: '2–4 weeks hardening',
      cost: '$25k–$90k engineering weeks',
      expertise: 'Serving engineers + UX writers',
    },
    deadwoodCode: `from deadwood import InferenceRuntime

runtime = InferenceRuntime(
    model=finetuned,
    decoding="nucleus",
    temperature=0.65,
)

for chunk in runtime.stream("Summarize risk..."):
    print(chunk, end="")`,
    custodianParagraphs: [
      'InferenceRuntime shares kernels with Optimization custodians — sampling stability inherits batching decisions automatically.',
    ],
  },

  optimization: {
    slug: 'optimization',
    missionStatement: 'latency is margin.',
    subheader: 'Batching turns GPUs into factories.',
    heroIntro: [
      'Production inference piles constraints: tail latency p99, throughput per dollar, VRAM ceilings.',
      'KV caches reuse attention keys across tokens; FlashAttention trades memory for bandwidth-aware tiling.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_75%_55%_at_60%_10%,rgba(251,146,60,0.12)_0%,transparent_55%),radial-gradient(ellipse_55%_45%_at_10%_85%,rgba(201,169,110,0.12)_0%,transparent_58%)]',
    whatLayerDoes: [
      {
        title: 'Toolkit',
        paragraphs: [
          'Continuous batching absorbs uneven prompts; speculative decoding drafts tokens then verifies cheaply.',
          'Efficient servers coordinate paging across GPUs — Deadwood abstracts vendor knobs.',
        ],
      },
    ],
    withoutBullets: [
      'Profile CUDA kernels yourself.',
      'Negotiate bespoke kernels with contractors.',
      'Resize fleets manually when campaigns spike.',
    ],
    estimate: {
      timeline: 'evergreen tuning',
      cost: '$75k–$400k/yr infra drag',
      expertise: 'Performance + finance analysts',
    },
    deadwoodCode: `from deadwood import InferenceServer

server = InferenceServer(
    model="mistral-7b-lora-finance",
    optimization="auto",
    target_latency_ms=100,
    target_rps=1000,
)

results = server.batch_inference(requests)`,
    custodianParagraphs: [
      'InferenceServer negotiates batch sizes, cache tiers, and quantization passes until telemetry satisfies SLAs.',
      'Cost dashboards tie millisecond regressions to ledger lines — finance sees ops impact instantly.',
    ],
    benchmarks: [
      { label: 'Stock PyTorch', speedup: '1×', cost: 'baseline' },
      { label: '+ batching', speedup: '≈8×', cost: '—' },
      { label: '+ KV and flash kernels', speedup: '≈3×', cost: 'lower VRAM' },
      { label: '+ int8 quant', speedup: '≈2.5×', cost: '−50% VRAM' },
      { label: 'Deadwood stack', speedup: '15–20×', cost: '≈70% savings' },
    ],
    benchmarksFootnote:
      'Illustrative geometric means — actual uplift depends on sequence lengths.',
  },

  evaluation: {
    slug: 'evaluation',
    missionStatement: 'metrics turn opinions into evidence.',
    subheader: 'Prove quality before users feel it.',
    heroIntro: [
      'Automatic metrics (BLEU, ROUGE, perplexity) proxy human judgment until annotators intervene.',
      'Fairness audits stress-test slices — geography, income bands, dialect.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_70%_55%_at_75%_25%,rgba(201,169,110,0.15)_0%,transparent_55%),radial-gradient(ellipse_50%_45%_at_15%_75%,rgba(52,78,65,0.45)_0%,transparent_58%)]',
    whatLayerDoes: [
      {
        title: 'Evidence stack',
        paragraphs: [
          'Human eval harnesses Likert scales or pairwise battles.',
          'Anchoring writes fingerprints — model hash, dataset hash, metric tuple — to Cosmos/Avalanche relays.',
        ],
      },
    ],
    withoutBullets: [
      'Glue spreadsheets and notebooks ad hoc.',
      'Lose audit trails when notebooks diverge.',
      'Explain governance without cryptographic receipts.',
    ],
    estimate: {
      timeline: '2–5 weeks per release gate',
      cost: '$20k–$80k annotator budget',
      expertise: 'Risk + ML QA leads',
    },
    deadwoodCode: `from deadwood import Evaluator

evaluator = Evaluator(
    model=finetuned,
    test_set=held_out,
    metrics=["bleu", "rouge", "f1", "fairness"],
)

report = evaluator.run()
print(report.chain_tx)`,
    custodianParagraphs: [
      'Evaluator binds fairness suites to regulatory posture — failing slices block promotion automatically.',
      'Chain TX IDs ride beside dashboards so external auditors reproduce claims.',
    ],
  },

  deployment: {
    slug: 'deployment',
    missionStatement: 'shipping is the start of responsibility.',
    subheader: 'Production is a living organism.',
    heroIntro: [
      'Canary deployments expose fractions of traffic to new graphs while telemetry guards regressions.',
      'Autoscaling pairs orchestrator patterns with GPU quotas; alerts wake humans before SLAs crack.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_75%_55%_at_40%_15%,rgba(201,169,110,0.12)_0%,transparent_55%),radial-gradient(ellipse_55%_45%_at_85%_80%,rgba(41,37,36,0.55)_0%,transparent_60%)]',
    whatLayerDoes: [
      {
        title: 'Operating discipline',
        paragraphs: [
          'Versioning ties checkpoints to CI commits; rollbacks stay one revert away.',
          'Cost meters allocate spend per tenant — finance reconciles usage-based invoices trivially.',
        ],
      },
    ],
    withoutBullets: [
      'Maintain bespoke Helm charts per region.',
      'Patch Prometheus rules whenever queues rename.',
      'Coordinate incident bridges without runbooks.',
    ],
    estimate: {
      timeline: 'always-on ownership',
      cost: '$150k–$700k/yr platform tax',
      expertise: 'SRE + FinOps + ML engineers',
    },
    deadwoodCode: `from deadwood import ProductionPlane

plane = ProductionPlane(
    model_id="fin-risk-v3",
    regions=["eu-west", "us-east"],
    autoscale=True,
)

plane.promote(version="2025.05.08")`,
    custodianParagraphs: [
      'ProductionPlane inherits evaluations — failing attestations never reach routers.',
      'Deadwood surfaces unified health: latency, GPU watts, $/1k tokens, incident timelines.',
    ],
  },

  feedback: {
    slug: 'feedback',
    missionStatement: 'users teach better than static datasets.',
    subheader: 'Close the loop or drift wins.',
    heroIntro: [
      'Supervised fine-tuning ingests curated corrections; RLHF shapes rewards from human rankers.',
      'DPO aligns preferences without explicit reward models; online loops ingest streaming signals.',
    ],
    heroMeshBg:
      'bg-[radial-gradient(ellipse_70%_55%_at_70%_30%,rgba(201,169,110,0.16)_0%,transparent_55%),radial-gradient(ellipse_50%_45%_at_10%_75%,rgba(88,28,28,0.35)_0%,transparent_58%)]',
    whatLayerDoes: [
      {
        title: 'Feedback mechanics',
        paragraphs: [
          'Each loop feeds custodied datasets — consent tags propagate forward.',
          'Deadwood sequences retraining jobs through Training and Evaluation custodians automatically.',
        ],
      },
    ],
    withoutBullets: [
      'Manually export chat logs into spreadsheets.',
      'Risk leaking PII into reward datasets.',
      'Lose reproducibility when reward hacks mutate offline.',
    ],
    estimate: {
      timeline: 'rolling 2–4 week cycles',
      cost: '$50k–$200k per iteration',
      expertise: 'Human raters + alignment researchers',
    },
    deadwoodCode: `from deadwood import FeedbackLoop

loop = FeedbackLoop(
    model=finetuned,
    strategy="dpo",
    privacy="redact-pii",
)

loop.ingest(interactions)
loop.schedule_retrain(cadence="weekly")`,
    custodianParagraphs: [
      'FeedbackLoop sanitizes signals, aligns them with manifests, and opens tickets only when evaluation gates pass.',
      'Custody means your policy stack stays coherent — no rogue adapters trained on unapproved logs.',
    ],
  },
};
