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

export default function AboutHero() {
  return (
    <SectionWrapper className="pt-12 pb-16 text-center">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]"
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-[#3E92CC]" />
        About CraftBit
      </motion.div>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        className="mb-5 text-4xl leading-[1.12] font-bold tracking-tight text-[#0D3082] sm:text-5xl lg:text-[3.5rem]"
      >
        A small team that does
        <br />
        <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
          focused, quality work
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mx-auto max-w-xl text-lg leading-relaxed text-[#0D3082]/60"
      >
        CraftBit helps growing businesses build fast, clean digital products.
        We&apos;re selective about the work we take on — because we believe in
        doing fewer things exceptionally well.
      </motion.p>
    </SectionWrapper>
  );
}
