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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function PricingHero() {
  return (
    <SectionWrapper className="pt-28 pb-10 text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#3E92CC]" />
        Transparent pricing
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mb-5 text-4xl leading-[1.12] font-bold tracking-tight text-[#0D3082] sm:text-5xl lg:text-[3.5rem]"
      >
        Simple pricing,
        <br />
        <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
          no surprises
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mx-auto mb-8 max-w-lg text-lg leading-relaxed text-[#0D3082]/60"
      >
        Fixed-scope projects with clear deliverables. You know exactly what
        you&apos;re getting and what it costs before we start.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="border-[#0D3082]/08 mx-auto max-w-xl rounded-2xl border bg-[#f0f4ff] px-5 py-3.5 text-sm text-[#0D3082]/65"
      >
        <span className="font-semibold text-[#0D3082]">
          All prices are starting points.
        </span>{' '}
        Final quotes depend on your specific requirements.{' '}
        <a
          href="/contact"
          className="font-medium text-[#3E92CC] transition-colors hover:text-[#0D3082]"
        >
          Get a free estimate →
        </a>
      </motion.div>
    </SectionWrapper>
  );
}
