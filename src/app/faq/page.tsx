'use client';

import { useEffect } from 'react';

/** FAQ content lives on `/snowflake-premium#premium-faq`. Server redirects omit fragments. */
export default function FaqRedirectPage() {
  useEffect(() => {
    window.location.replace('/snowflake-premium#premium-faq');
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-dw-bg px-4">
      <p className="font-sans text-sm text-dw-muted">Opening FAQ…</p>
    </div>
  );
}
