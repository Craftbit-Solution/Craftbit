'use client';

import { motion, type Variants } from 'framer-motion';
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

export default function PortfolioHero() {
  return (
    <SectionWrapper className="pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>Our Work</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 text-display font-medium tracking-tight text-ink"
        >
          Projects that{' '}
          <span className="font-serif text-[1.05em] font-normal italic">
            speak for themselves
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-[65ch] text-subhead text-ink-muted"
        >
          A selection of work we&apos;re proud of — from business websites to
          full-scale web applications.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
