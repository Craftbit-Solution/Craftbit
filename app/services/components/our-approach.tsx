'use client';

import { motion, Variants } from 'framer-motion';
import SectionWrapper from '@/components/shared/section-wrapper';

type Approach = {
  id: number;
  title: string;
  description: string;
};

const approaches: Approach[] = [
  {
    id: 1,
    title: 'Understand First',
    description:
      'We start by deeply understanding your goals, users, and challenges to ensure the solution fits your needs perfectly.',
  },
  {
    id: 2,
    title: 'Design & Iterate',
    description:
      'We craft elegant, user-centered designs through rapid prototyping and continuous feedback loops.',
  },
  {
    id: 3,
    title: 'Build & Scale',
    description:
      'We develop robust, scalable solutions using modern technologies that grow with your business.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function OurApproach() {
  return (
    <SectionWrapper className="py-16">
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
          How We Work
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="relative order-2 lg:order-1"
        >
          <div className="shadow-[#0D3082]/08 overflow-hidden rounded-3xl border border-[#0D3082]/10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="border-[#0D3082]/08 absolute -right-4 -bottom-4 flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <p className="text-xs font-semibold text-[#0D3082]">
              3-step process, zero surprises
            </p>
          </motion.div>
        </motion.div>
        <div className="order-1 lg:order-2">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mb-4 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl"
          >
            Our{' '}
            <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
              approach
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="mb-10 text-lg leading-relaxed text-[#0D3082]/60"
          >
            We focus on delivering simple, scalable, and user-centric digital
            solutions that create real value for businesses.
          </motion.p>

          <div className="space-y-8">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 3}
                className="flex gap-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-[#0D3082] to-[#3E92CC] text-sm font-bold text-white shadow-md shadow-[#0D3082]/20">
                  {approach.id}
                </div>
                <div>
                  <h3 className="mb-1.5 text-base font-semibold text-[#0D3082]">
                    {approach.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0D3082]/60">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
