'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Clock,
  Code2,
  Monitor,
  Shield,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';
import { cn } from '@/lib/utils';

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Code2,
    title: 'Built by engineers',
    description:
      'Every site is built for performance and scale — not just made to look good in a browser.',
  },
  {
    icon: Monitor,
    title: 'End-to-end ownership',
    description:
      'Design, development, and deployment — all handled by us. No handoffs, no gaps.',
  },
  {
    icon: Clock,
    title: 'Agency speed, minus the bureaucracy',
    description:
      'No approval chains. You talk to whoever is building your product, directly.',
  },
  {
    icon: Shield,
    title: 'Freelancer flexibility, minus the risk',
    description: "We show up, meet deadlines, and don't disappear mid-project.",
  },
];

const comparisons = [
  {
    label: 'Large Agencies',
    price: '₹2L – ₹10L+',
    desc: 'High cost, slow turnaround, multiple layers of communication',
    featured: false,
  },
  {
    label: 'CraftBit',
    price: '₹5K – ₹60K+',
    desc: 'Affordable pricing, direct communication, fast delivery, scalable solutions',
    featured: true,
  },
  {
    label: 'Freelancers',
    price: '₹3K – ₹30K',
    desc: 'Lower cost, but limited scalability and inconsistent quality',
    featured: false,
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

export default function CraftStudio() {
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
          <Eyebrow>Our positioning</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          The sweet spot between{' '}
          <span className="font-serif italic font-normal">
            agency and freelancer
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          Agencies charge too much and move too slow. Freelancers are affordable
          but risky. We&apos;re built to give you the best of both — without the
          tradeoffs.
        </motion.p>
      </div>

      {/* Comparison columns */}
      <ul className="mt-12 grid items-stretch gap-3 md:grid-cols-3 md:gap-0">
        {comparisons.map((col, index) => (
          <motion.li
            key={col.label}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className={cn(
              'relative flex flex-col px-5 py-6 text-center md:px-6 md:py-8',
              col.featured
                ? 'z-10 rounded-lg border border-ember/40 bg-ember/8 py-8 shadow-sm md:-my-3 md:py-11'
                : 'rounded-lg border border-rule bg-paper/50 md:rounded-none md:border-y md:border-x-0',
              !col.featured && index === 0 && 'md:rounded-l-lg md:border-l',
              !col.featured && index === 2 && 'md:rounded-r-lg md:border-r',
            )}
          >
            <span
              className={cn(
                'font-mono text-caption font-medium tracking-[0.14em] uppercase',
                col.featured ? 'text-ember' : 'text-ink-muted',
              )}
            >
              {col.label}
            </span>
            <p
              className={cn(
                'mt-3 font-mono text-2xl tracking-tight tabular-nums md:text-[1.65rem]',
                col.featured ? 'text-ink' : 'text-ink/80',
              )}
            >
              {col.price}
            </p>
            <p
              className={cn(
                'mt-3 text-sm leading-relaxed',
                col.featured ? 'text-ink-muted' : 'text-ink-muted/80',
              )}
            >
              {col.desc}
            </p>
          </motion.li>
        ))}
      </ul>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        custom={6}
        className="mt-4 text-center text-caption text-ink-muted"
      >
        Pricing varies by project scope.{' '}
        <Link
          href="/contact"
          className="font-medium text-ink transition-colors hover:text-ember"
        >
          Get a free quote →
        </Link>
      </motion.p>

      {/* Reason cards */}
      <ul className="mt-12 grid gap-3 sm:grid-cols-2">
        {reasons.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 7}
            className="flex gap-3.5 rounded-lg border border-rule bg-paper/60 p-5"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-rule text-ink">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-body font-medium text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </SectionWrapper>
  );
}
