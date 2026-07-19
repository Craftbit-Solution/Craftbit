'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Clock, MessageCircle, Shield } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

const guarantees = [
  { icon: Shield, label: '30-day money-back' },
  { icon: Clock, label: 'On-time delivery' },
  { icon: MessageCircle, label: '24h response' },
] as const;

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

export default function HomeHero() {
  return (
    <SectionWrapper className="pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <Eyebrow>Now taking new projects for Q2 2026</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="mt-5 max-w-4xl text-display font-medium tracking-tight text-ink"
        >
          Your business, built for the{' '}
          <span className="font-serif italic font-normal">digital age</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="mt-6 max-w-[65ch] text-subhead text-ink-muted"
        >
          We build{' '}
          <span className="font-medium text-ink">
            fast, conversion-focused websites
          </span>{' '}
          for growing businesses. From design to deployment — a partner, not
          just a vendor.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
          >
            Get a free consultation
            <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-6 text-body font-medium text-ink transition-colors hover:border-ink/25 hover:bg-ink/5"
          >
            See our work
          </Link>
        </motion.div>

        <motion.ul
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="mt-14 flex w-full max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:justify-between sm:gap-x-4"
        >
          {guarantees.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-caption font-medium tracking-wide text-ink-muted"
            >
              <Icon
                className="size-4 shrink-0 text-ink"
                strokeWidth={1.75}
                aria-hidden
              />
              <span>{label}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </SectionWrapper>
  );
}
