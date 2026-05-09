import Link from 'next/link';
import type { ChipVendorId } from '@/content/chipVendors';
import { CHIP_VENDORS } from '@/content/chipVendors';

export function ChipVendorPage({ id }: { id: ChipVendorId }) {
  const v = CHIP_VENDORS[id];
  const Logo = v.Logo;

  return (
    <div className="min-h-screen bg-dw-bg px-6 py-24 text-dw-cream">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="font-mono text-sm text-dw-tan hover:text-dw-highlight">
          ← Home
        </Link>
        <Link
          href="/architecture#chip-optimization"
          className="ml-6 font-mono text-sm text-dw-muted hover:text-dw-highlight"
        >
          All chips
        </Link>

        <div className="mt-10 flex items-center gap-4 border-b border-white/[0.06] pb-10">
          <Logo className="h-14 w-auto shrink-0 text-dw-tan" aria-hidden />
          <div>
            <h1 className="font-display text-4xl text-dw-cream">{v.title}</h1>
            <p className="mt-2 font-sans text-lg font-medium text-dw-tan">{v.subtitle}</p>
          </div>
        </div>

        <p className="mt-8 font-sans text-base leading-relaxed text-dw-muted">{v.body}</p>

        <p className="mt-10 font-mono text-xs uppercase tracking-[0.18em] text-dw-muted">
          Deadwood routes workloads automatically · docs expanding
        </p>
      </div>
    </div>
  );
}
