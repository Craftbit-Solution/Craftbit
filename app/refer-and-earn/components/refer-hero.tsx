'use client';
import { motion, Variants } from 'framer-motion';
import SectionWrapper from '@/components/shared/section-wrapper';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ReferHero() {
  return (
    <SectionWrapper className="pt-12 pb-16 text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]"
      >
        💸 Refer & Earn
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mb-5 text-4xl font-bold text-[#0D3082] sm:text-5xl"
      >
        Turn your network into
        <br />
        <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
          real earnings
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mx-auto max-w-xl text-lg text-[#0D3082]/60"
      >
        Invite people to CraftBit and earn ₹500 for every successful referral.
        Simple, transparent, and rewarding.
      </motion.p>
    </SectionWrapper>
  );
}