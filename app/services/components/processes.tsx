'use client';

import { motion, Variants } from 'framer-motion';
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';
import Link from 'next/link';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: Lightbulb,
    title: 'Discovery',
    description:
      'We dive deep into your business goals, target audience, and competition to create a strategic roadmap.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'We craft intuitive designs that align with your brand and resonate with your users.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'We build robust, scalable solutions using modern technologies and best practices.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description:
      'We deploy with precision, ensuring a smooth launch and providing ongoing support.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ProcessSection() {
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
          Our Process
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl lg:text-5xl">
          From idea to launch in{' '}
          <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
            4 simple steps
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#0D3082]/60">
          A transparent, collaborative process that keeps you informed and
          involved every step of the way.
        </p>
      </motion.div>

      <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 2}
              className="group border-[#0D3082]/08 hover:shadow-[#0D3082]/08 relative rounded-2xl border bg-[#fafbff] p-6 transition-all duration-300 hover:shadow-lg"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-full z-10 hidden h-px w-4 bg-linear-to-r from-[#3E92CC]/40 to-transparent lg:block" />
              )}

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3E92CC]/10">
                  <Icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
                </div>
                <span className="text-2xl font-bold text-[#0D3082]/10">
                  0{index + 1}
                </span>
              </div>

              <h3 className="mb-2 text-base font-semibold text-[#0D3082]">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#0D3082]/60">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={7}
        className="mt-12 text-center"
      >
        <Link href="/contact">
          <Button className="group h-12 rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-8 text-base font-semibold text-white shadow-xl shadow-[#0D3082]/25 transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-[#0D3082]/30">
            Let&apos;s get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </motion.div>
    </SectionWrapper>
  );
}
