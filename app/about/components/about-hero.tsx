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

export default function AboutHero() {
  return (
    <SectionWrapper className="pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>About CraftBit</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 text-display font-medium tracking-tight text-ink"
        >
          A small team that does{' '}
          <span className="font-serif text-[1.05em] font-normal italic">
            focused, quality work
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mx-auto mt-6 max-w-[65ch] text-subhead text-ink-muted"
        >
          CraftBit helps growing businesses build fast, clean digital products.
          We&apos;re selective about the work we take on — because we believe in
          doing fewer things exceptionally well.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
          >
            Start a project
            <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-6 text-body font-medium text-ink transition-colors hover:border-ink/25 hover:bg-ink/5"
          >
            See our work
          </Link>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
