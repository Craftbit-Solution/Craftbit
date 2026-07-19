'use client';

import { ArrowRight } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
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

export default function ServiceHero() {
  return (
    <SectionWrapper className="pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <Eyebrow>Our Services</Eyebrow>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-5 text-display font-medium tracking-tight text-ink"
          >
            Web solutions built{' '}
            <span className="font-serif text-[1.05em] font-normal italic">
              around your goals
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-[65ch] text-subhead text-ink-muted"
          >
            From simple business websites to complex web applications — we scope
            the right solution for where your business is now and where
            it&apos;s headed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
            >
              Get a free quote
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

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="relative flex items-center justify-center"
        >
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="size-[min(100%,28rem)] rounded-full bg-ember/10 blur-3xl" />
          </div>

          <div className="relative aspect-square w-full max-w-md">
            <Image
              src="/images/services_hero_image.png"
              alt="Services Hero"
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 28rem, 80vw"
              priority
            />
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
