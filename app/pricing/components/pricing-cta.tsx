'use client';
import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/section-wrapper';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PricingCTA() {
  return (
    <SectionWrapper className="pb-20">
      <div className="rounded-3xl bg-[#0D3082] px-8 py-16 text-center sm:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
          <span className="text-xs font-medium tracking-widest text-[#3E92CC] uppercase">
            Let&apos;s talk
          </span>
          <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
        </motion.div>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="mb-4 text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl"
        >
          Not sure which plan fits?
          <br />
          <span className="bg-linear-to-r from-white to-[#3E92CC] bg-clip-text text-transparent">
            Let&apos;s figure it out together.
          </span>
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="mx-auto mb-10 max-w-md text-base leading-relaxed text-white/60"
        >
          Tell us about your project and we&apos;ll recommend the right scope —
          no commitment required.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="group rounded-full bg-white px-8 py-6 text-base font-semibold text-[#0D3082] shadow-xl transition-all duration-300 hover:bg-white/90 hover:shadow-2xl"
            >
              Get a free quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-[1.5px] border-white/25 bg-transparent px-8 py-6 text-base font-medium text-white transition-all duration-300 hover:border-white/50 hover:bg-white/10"
            >
              See our work
            </Button>
          </Link>
        </motion.div>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="mt-8 text-xs text-white/35"
        >
          No commitment · Free consultation · Reply within 24 hours
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
