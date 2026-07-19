'use client';

import { ArrowRight } from 'lucide-react';
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

export default function ReferHero() {
  return (
    <SectionWrapper className="pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>Refer & Earn</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 text-display font-medium tracking-tight text-ink"
        >
          Turn your network into{' '}
          <span className="font-serif text-[1.05em] font-normal italic">
            real earnings
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-[65ch] text-subhead text-ink-muted"
        >
          Invite people to CraftBit and earn ₹500 for every successful referral.
          Simple, transparent, and paid when their project kicks off.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="https://wa.me/916201855200?text=Hi%20CraftBit%2C%20I%27d%20like%20to%20refer%20someone."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
          >
            Start referring
            <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-6 text-body font-medium text-ink transition-colors hover:border-ink/25 hover:bg-ink/5"
          >
            How it works
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
