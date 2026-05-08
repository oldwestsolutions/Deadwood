import type { LayerSlug } from '@/content/intelligenceLayers';
import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function LayerGlyph({
  slug,
  ...props
}: IconProps & { slug: LayerSlug }) {
  switch (slug) {
    case 'data':
      return <IconDatabase {...props} />;
    case 'architecture':
      return <IconAttention {...props} />;
    case 'weights':
      return <IconWeights {...props} />;
    case 'training':
      return <IconTraining {...props} />;
    case 'inference':
      return <IconInference {...props} />;
    case 'optimization':
      return <IconSpeed {...props} />;
    case 'evaluation':
      return <IconCheck {...props} />;
    case 'deployment':
      return <IconServer {...props} />;
    case 'feedback':
      return <IconLoop {...props} />;
    default:
      return null;
  }
}

function IconDatabase(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <ellipse cx="24" cy="14" rx="14" ry="6" />
      <path d="M10 14v10c0 3.3 6.3 6 14 6s14-2.7 14-6V14" />
      <path d="M10 24v10c0 3.3 6.3 6 14 6s14-2.7 14-6V24" />
    </svg>
  );
}

function IconAttention(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <circle cx="16" cy="24" r="4" />
      <circle cx="32" cy="24" r="4" />
      <path d="M20 24h8M24 12v8M24 28v8" strokeLinecap="round" />
      <path d="M8 40 L40 8" opacity={0.35} strokeDasharray="4 3" />
    </svg>
  );
}

function IconWeights(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <path d="M14 34c6-12 14-12 20 0" strokeLinecap="round" />
      <circle cx="18" cy="18" r="3" />
      <circle cx="30" cy="18" r="3" />
      <circle cx="24" cy="26" r="3" />
      <path d="M12 38h24" strokeLinecap="round" opacity={0.5} />
    </svg>
  );
}

function IconTraining(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <path d="M10 36 L38 12" strokeLinecap="round" opacity={0.35} />
      <path d="M12 32 Q24 8 36 28" strokeLinecap="round" />
      <path d="M10 36 L38 36" strokeLinecap="round" opacity={0.35} />
    </svg>
  );
}

function IconInference(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <path d="M12 24h20l-6-6M32 24l-6 6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 14h6v6H8z M34 28h6v6h-6z" rx={1} />
    </svg>
  );
}

function IconSpeed(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <circle cx="24" cy="26" r="14" opacity={0.6} />
      <path d="M24 26 L34 14" strokeLinecap="round" />
      <path d="M14 38 L22 30" strokeLinecap="round" opacity={0.45} />
    </svg>
  );
}

function IconCheck(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <path d="M14 24l8 8 14-16" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="10" y="10" width="28" height="28" rx="4" opacity={0.25} />
    </svg>
  );
}

function IconServer(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <rect x="10" y="10" width="28" height="10" rx="2" />
      <rect x="10" y="22" width="28" height="10" rx="2" />
      <rect x="10" y="34" width="28" height="8" rx="2" opacity={0.65} />
      <circle cx="14" cy="15" r="1.5" fill="currentColor" />
      <circle cx="14" cy="27" r="1.5" fill="currentColor" />
    </svg>
  );
}

function IconLoop(p: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.2} {...p}>
      <path
        d="M14 28c4 10 18 10 22 0M34 20c-4-10-18-10-22 0"
        strokeLinecap="round"
      />
      <path d="M32 18v-6h6M16 30v6h-6" strokeLinecap="round" />
    </svg>
  );
}
