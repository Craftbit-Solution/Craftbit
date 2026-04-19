'use client';

import { ArrowRight, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, Variants } from 'framer-motion';
import SectionWrapper from '@/components/shared/section-wrapper';
import Link from 'next/link';

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

export default function ServiceHero() {
  return (
    <SectionWrapper className="pt-28 pb-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]"
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3E92CC]" />
            Our Services
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mb-6 text-4xl leading-[1.12] font-bold tracking-tight text-[#0D3082] sm:text-5xl lg:text-[3rem]"
          >
            Web solutions built
            <br />
            <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
              around your goals
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mb-10 max-w-lg text-lg leading-relaxed text-[#0D3082]/60"
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
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#0D3082]/25 transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-[#0D3082]/30"
              >
                Get a free quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[1.5px] border-[#0D3082]/20 bg-white px-8 py-6 text-base font-medium text-[#0D3082] transition-all duration-300 hover:border-[#3E92CC] hover:bg-[#0D3082]/5"
              >
                See our work
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
          </div>

          <div className="absolute h-[460px] w-[460px] rounded-full border border-blue-200/40" />
          <div className="absolute h-[520px] w-[520px] rounded-full border border-blue-100/30" />

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex aspect-square w-64 items-center justify-center sm:w-80 lg:w-[400px]">
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-blue-400 shadow-2xl shadow-blue-300/40" />

              <img
                // src="https://i.pinimg.com/1200x/33/ae/98/33ae98d3f7ee3f79ce452e81299d200b.jpg"
                src="/images/services_hero_image.png"
                alt="Services Hero"
                className="h-full w-full object-contain"
              />
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-4 -bottom-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                  <Workflow className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-medium text-slate-700">
                  Scalable Solutions
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
