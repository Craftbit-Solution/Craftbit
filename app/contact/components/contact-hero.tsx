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

export default function ContactHero() {
  return (
    <SectionWrapper className="pt-16 pb-10 md:pt-20 md:pb-12">
      <div className="max-w-2xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>Get in touch</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 text-display font-medium tracking-tight text-ink"
        >
          Let&apos;s build something{' '}
          <span className="font-serif text-[1.05em] font-normal italic">
            you&apos;re proud of
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-[55ch] text-subhead text-ink-muted"
        >
          Tell us about your project and we&apos;ll get back within 24 hours.
          No commitment required.
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
