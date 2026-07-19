'use client';

import { motion, type Variants } from 'framer-motion';
import { Eyebrow, Stat } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

const tiers = [
  {
    label: '1 referral',
    value: '₹500',
    description: 'Earn on your first successful intro.',
  },
  {
    label: '5 referrals',
    value: '₹2,500',
    description: 'A solid side payout from a few intros.',
  },
  {
    label: '10 referrals',
    value: '₹5,000',
    description: 'Keep referring — rewards scale with you.',
  },
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

export default function EarningPotential() {
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
          <Eyebrow>Earning potential</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          ₹500 for every successful referral
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          Paid when the referred client starts a project with us. No caps, no
          complicated tiers — the more you refer, the more you earn.
        </motion.p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-3">
        {tiers.map(({ label, value, description }, index) => (
          <motion.li
            key={label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-6 text-left"
          >
            <Stat value={value} label={label} />
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              {description}
            </p>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
