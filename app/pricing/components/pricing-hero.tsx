'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 + i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function PricingHero() {
  return (
    <SectionWrapper className="pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>Transparent pricing</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 text-display font-medium tracking-tight text-ink"
        >
          Simple pricing,{' '}
          <span className="font-serif text-[1.05em] font-normal italic">
            no surprises
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-[65ch] text-subhead text-ink-muted"
        >
          Fixed-scope projects with clear deliverables. You know exactly what
          you&apos;re getting and what it costs before we start.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mx-auto mt-8 max-w-xl border-t border-rule pt-6 text-sm leading-relaxed text-ink-muted"
        >
          <span className="font-medium text-ink">
            All prices are starting points.
          </span>{' '}
          Final quotes depend on your specific requirements.{' '}
          <Link
            href="/contact"
            className="font-medium text-ink underline decoration-rule underline-offset-4 transition-colors hover:decoration-ember"
          >
            Get a free estimate →
          </Link>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
