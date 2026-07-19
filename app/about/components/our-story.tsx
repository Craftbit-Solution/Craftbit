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
      duration: 0.5,
      delay: 0.06 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function OurStory() {
  return (
    <SectionWrapper className="section-y">
      <div className="mx-auto max-w-2xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow>Our story</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          Why we started CraftBit
        </motion.h2>

        <div className="mt-6 space-y-5 text-body leading-relaxed text-ink-muted">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={2}
          >
            After working at larger agencies and tech companies, we kept seeing
            the same problem — small and growing businesses were either paying
            agency prices for cookie-cutter work, or taking chances with
            unreliable freelancers.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={3}
          >
            We started CraftBit to offer something in between: the expertise and
            reliability of an agency, with the personal attention and fair
            pricing of a boutique team.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={4}
          >
            We&apos;re a tight-knit team who genuinely care about every project
            we take on. We stay small on purpose — because that&apos;s how we
            keep the quality high.
          </motion.p>
        </div>
      </div>
    </SectionWrapper>
  );
}
