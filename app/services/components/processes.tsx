'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Eyebrow, Section } from '@/components/design';

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
      'We start by deeply understanding your goals, users, and challenges — then dive into your audience and competition to create a strategic roadmap that fits your needs.',
  },
  {
    icon: Palette,
    title: 'Design',
    description:
      'We craft elegant, user-centered designs that align with your brand and resonate with your users — through rapid prototyping and continuous feedback loops.',
  },
  {
    icon: Code,
    title: 'Development',
    description:
      'We develop robust, scalable solutions using modern technologies and best practices that grow with your business.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description:
      'We deploy with precision, ensuring a smooth launch and providing ongoing support as your product scales.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.06 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ProcessSection() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow>Our Process</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          From idea to launch in 4 simple steps
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          A transparent, collaborative process that keeps you informed and
          involved every step of the way.
        </motion.p>
      </div>

      <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {steps.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="relative flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-9 items-center justify-center rounded-md border border-rule text-ink">
                <Icon className="size-4" strokeWidth={1.75} aria-hidden />
              </div>
              <span className="text-2xl font-medium text-ink/15">
                0{index + 1}
              </span>
            </div>

            <h3 className="text-body font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {description}
            </p>
          </motion.li>
        ))}
      </ol>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        custom={7}
        className="mt-12 text-center"
      >
        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
        >
          Let&apos;s get started
          <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
        </Link>
      </motion.div>
    </Section>
  );
}
