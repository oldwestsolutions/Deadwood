import type { Metadata } from 'next';
import { ChipVendorPage } from '@/components/chips/ChipVendorPage';

export const metadata: Metadata = {
  title: 'NVIDIA — Deadwood',
  description:
    'CUDA + TensorRT optimization for Monte Carlo and training on RTX, H100, and L40.',
};

export default function NvidiaChipPage() {
  return <ChipVendorPage id="nvidia" />;
}
