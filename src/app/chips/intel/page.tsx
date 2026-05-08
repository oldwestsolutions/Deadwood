import type { Metadata } from 'next';
import { ChipVendorPage } from '@/components/chips/ChipVendorPage';

export const metadata: Metadata = {
  title: 'Intel — Deadwood',
  description: 'Xeon-optimized, deterministic workloads for algo trading.',
};

export default function IntelChipPage() {
  return <ChipVendorPage id="intel" />;
}
