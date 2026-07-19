'use client';

import { motion, type Variants } from 'framer-motion';
import {
  MessageCircle,
  UserPlus,
  Handshake,
  Banknote,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: 'Reach out',
    description:
      "Message us on WhatsApp and share who you'd like to introduce — a business that needs a website or digital product.",
  },
  {
    icon: UserPlus,
    title: 'Make the intro',
    description:
      'Connect us with your contact. A warm introduction is all it takes to get the conversation started.',
  },
  {
    icon: Handshake,
    title: 'They start a project',
    description:
      'If they become a CraftBit client and kick off a project, your referral qualifies for the reward.',
  },
  {
    icon: Banknote,
    title: 'Get paid ₹500',
    description:
      'We send your ₹500 reward once their project officially begins. Simple, transparent, and quick.',
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

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="section-y">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow>How it works</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          Four simple steps to earn
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          No forms, no referral codes, no waiting for mystery payouts. Introduce
          someone who needs our work — we handle the rest.
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
    </SectionWrapper>
  );
}
