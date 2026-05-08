import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  LAYER_ORDER,
  type LayerSlug,
  getLayerBySlug,
} from '@/content/intelligenceLayers';
import { LayerDetailView } from '@/components/layers/LayerDetailView';

type Props = { params: { slug: string } };

export function generateStaticParams(): { slug: LayerSlug }[] {
  return LAYER_ORDER.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const summary = getLayerBySlug(params.slug);
  if (!summary) {
    return { title: 'Layer — Deadwood' };
  }
  return {
    title: `${summary.title} — Nine Layers · Deadwood`,
    description: summary.cardDesc,
  };
}

export default function LayerPage({ params }: Props) {
  const slug = params.slug as LayerSlug;
  if (!LAYER_ORDER.includes(slug)) {
    notFound();
  }
  return <LayerDetailView slug={slug} />;
}
