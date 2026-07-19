'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Activity,
  Clock,
  FileCheck2,
  Headphones,
  MessageCircle,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

type Differentiator = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const differentiators: Differentiator[] = [
  {
    icon: Clock,
    title: 'On-time delivery',
    description:
      'We set realistic timelines and stick to them. Late delivery means your next revision is on us.',
  },
  {
    icon: MessageCircle,
    title: '24h response',
    description:
      'Every message gets a reply within 24 hours — usually much faster during business hours.',
  },
  {
    icon: Users,
    title: 'Direct access',
    description:
      'You talk to the designer and developer directly — no middlemen, no lost-in-translation moments.',
  },
  {
    icon: Activity,
    title: 'Performance-first',
    description:
      'Every site we ship is optimized for speed, SEO, and Core Web Vitals out of the box.',
  },
  {
    icon: Headphones,
    title: 'Post-launch support',
    description:
      "30 days of support after every launch. We don't hand over and disappear.",
  },
  {
    icon: FileCheck2,
    title: 'Fixed-scope contracts',
    description:
      "Fixed-scope projects with clear deliverables. You know exactly what you're getting and what it costs before we start.",
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

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="section-y">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow>Why CraftBit</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          What makes working with us different
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          We&apos;re a small team — you get direct access to the people actually
          building your product, not account managers passing messages around.
        </motion.p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-6 text-left"
          >
            <div className="mb-4 flex size-9 items-center justify-center rounded-md border border-rule text-ink">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="text-body font-medium text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {description}
            </p>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
