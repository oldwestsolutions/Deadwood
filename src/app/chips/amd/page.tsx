import type { Metadata } from 'next';
import { ChipVendorPage } from '@/components/chips/ChipVendorPage';

export const metadata: Metadata = {
  title: 'AMD — Deadwood',
  description: 'ROCm-compiled workloads on MI300X and EPYC.',
};

export default function AmdChipPage() {
  return <ChipVendorPage id="amd" />;
}
