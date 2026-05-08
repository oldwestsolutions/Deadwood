import type { Metadata } from 'next';
import { ChipVendorPage } from '@/components/chips/ChipVendorPage';

export const metadata: Metadata = {
  title: 'Apple Silicon — Deadwood',
  description: 'Metal + Neural Engine paths for on-device inference.',
};

export default function AppleChipPage() {
  return <ChipVendorPage id="apple" />;
}
