'use client';

import { motion, type Variants } from 'framer-motion';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

const values = [
  'We treat your business like our own',
  'Quality over quick fixes',
  'Honest pricing, no hidden fees',
  'Long-term partnerships, not transactions',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.06 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Values() {
  return (
    <SectionWrapper className="section-y">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow>What we stand for</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          The principles that guide every project
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          We&apos;re a small, focused team — which means you get direct access
          to the people actually building your product, not a rotating cast of
          junior developers.
        </motion.p>
      </div>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2">
        {values.map((value, index) => (
          <motion.li
            key={value}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="flex h-full items-start gap-4 rounded-lg border border-rule bg-paper/60 p-6 text-left"
          >
            <span className="shrink-0 text-2xl font-medium text-ink/15">
              0{index + 1}
            </span>
            <h3 className="pt-1 text-body font-medium text-ink">{value}</h3>
          </motion.li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
