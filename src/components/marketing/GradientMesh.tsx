'use client';

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from 'framer-motion';

export function GradientMesh() {
  const { scrollYProgress } = useScroll();

  const bloomX = useTransform(scrollYProgress, [0, 0.45], [88, 76]);
  const bloomY = useTransform(scrollYProgress, [0, 0.45], [10, 26]);

  const bloom = useMotionTemplate`radial-gradient(ellipse 58% 48% at ${bloomX}% ${bloomY}%, rgba(201, 169, 110, 0.22) 0%, transparent 52%)`;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="mesh-layer absolute inset-0 animate-mesh-drift" />
      <motion.div className="absolute inset-0 opacity-95" style={{ background: bloom }} />
    </div>
  );
}
