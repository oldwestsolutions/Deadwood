import type { ComponentType } from 'react';
import { SiAmd, SiApple, SiIntel, SiNvidia } from 'react-icons/si';

export type ChipVendorId = 'nvidia' | 'amd' | 'intel' | 'apple';

export type ChipVendorMeta = {
  id: ChipVendorId;
  title: string;
  subtitle: string;
  body: string;
  Logo: ComponentType<{ className?: string }>;
};

export const CHIP_VENDOR_ORDER: ChipVendorId[] = ['nvidia', 'amd', 'intel', 'apple'];

export const CHIP_VENDORS: Record<ChipVendorId, ChipVendorMeta> = {
  nvidia: {
    id: 'nvidia',
    title: 'NVIDIA',
    subtitle: 'GPU-Accelerated AI & Monte Carlo',
    body: 'CUDA + TensorRT optimization. Parallelized simulations and model training on RTX, H100, and L40 hardware.',
    Logo: SiNvidia,
  },
  amd: {
    id: 'amd',
    title: 'AMD',
    subtitle: 'Cost-Optimized Batch Processing',
    body: 'ROCm-compiled workloads. High-throughput parallel jobs on MI300X and EPYC at 40% lower cost than NVIDIA.',
    Logo: SiAmd,
  },
  intel: {
    id: 'intel',
    title: 'Intel',
    subtitle: 'CPU-Native Algo Trading',
    body: 'Xeon-optimized execution. Deterministic, low-latency compute for live trading strategies and traditional workloads.',
    Logo: SiIntel,
  },
  apple: {
    id: 'apple',
    title: 'Apple Silicon',
    subtitle: 'Edge Learning & On-Device Inference',
    body: 'Metal + Neural Engine compilation. Privacy-first training and inference on M-series MacBooks with zero cloud latency.',
    Logo: SiApple,
  },
};
