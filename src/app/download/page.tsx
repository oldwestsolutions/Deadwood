import type { Metadata } from 'next';
import { DownloadView } from '@/components/marketing/DownloadView';

export const metadata: Metadata = {
  title: 'Download — Deadwood',
  description:
    'Download the Deadwood Runner CLI for macOS, Windows, and Linux. Connect GitLab pipelines and metered compute.',
};

export default function DownloadPage() {
  return <DownloadView />;
}
