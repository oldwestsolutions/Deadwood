'use client';

import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';
import { faqItems, type FaqAnswer } from '@/content/pricingMcpContent';

function FaqAnswerBody({ a }: { a: FaqAnswer }) {
  const blocks = Array.isArray(a) ? a : [a];
  return (
    <div className="space-y-4 border-t border-white/[0.06] px-5 pb-4 pt-2 font-sans text-sm leading-relaxed text-dw-muted">
      {blocks.map((block, i) =>
        typeof block === 'string' ? (
          <p key={i}>{block}</p>
        ) : (
          <div key={i}>
            <p className="font-medium text-dw-cream">{block.subq}</p>
            <p className="mt-1.5">{block.suba}</p>
          </div>
        )
      )}
    </div>
  );
}

export function PricingFaqAccordion({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-2', className)}>
      {faqItems.map((item) => (
        <Disclosure key={item.q} as="div" className="rounded-[18px] border border-white/[0.08] bg-dw-surface/35">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left font-sans text-sm font-medium text-dw-cream transition-colors hover:bg-white/[0.03]">
                {item.q}
                <ChevronDownIcon
                  className={cn(
                    'h-5 w-5 shrink-0 text-dw-muted transition-transform duration-300',
                    open && 'rotate-180'
                  )}
                />
              </Disclosure.Button>
              <div
                className={cn(
                  'grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out',
                  open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                )}
              >
                <div className="min-h-0">
                  <Disclosure.Panel static className="focus:outline-none">
                    <FaqAnswerBody a={item.a} />
                  </Disclosure.Panel>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
