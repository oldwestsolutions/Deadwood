'use client';

/**
 * Hero backdrop: vertical depth + hairline grain only — no drifting radial blobs.
 */
export function GradientMesh() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,13,11,0.88)_0%,transparent_46%,transparent_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            92deg,
            transparent 0px,
            transparent 14px,
            rgba(52, 46, 38, 0.055) 14px,
            rgba(52, 46, 38, 0.055) 15px
          )`,
        }}
      />
    </div>
  );
}
