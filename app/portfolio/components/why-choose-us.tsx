'use client';

import { motion, type Variants } from 'framer-motion';
import {
  MessageCircle,
  Gem,
  Clock,
  Headphones,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: MessageCircle,
    title: 'Clear communication',
    description:
      'Direct access to whoever is building your project — no account managers, no message lag.',
  },
  {
    icon: Gem,
    title: 'Quality over volume',
    description:
      'We take on fewer projects so we can give each one the attention it deserves.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    description:
      'We set realistic timelines and stick to them. Late delivery means your next revision is free.',
  },
  {
    icon: Headphones,
    title: 'Post-launch support',
    description:
      "30 days of support after every launch. We don't hand over and disappear.",
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
          <Eyebrow>Why work with us</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          What makes the difference
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          Good work is table stakes. Here&apos;s what we do beyond that.
        </motion.p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="flex h-full items-start gap-4 rounded-lg border border-rule bg-paper/60 p-6 text-left"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-rule text-ink">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h3 className="text-body font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
