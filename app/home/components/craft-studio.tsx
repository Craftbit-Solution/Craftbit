'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import { motion, Variants } from 'framer-motion';
import {
  Code2,
  Monitor,
  Clock,
  Shield,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';
import Link from 'next/link';

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
    price: '₹5L+',
    desc: 'High cost, slow turnaround, multiple middlemen',
    featured: false,
  },
  {
    label: 'CraftBit',
    price: 'Starting ₹50K',
    desc: 'Quality work, direct team, honest timelines',
    featured: true,
  },
  {
    label: 'Freelancers',
    price: '₹10K–₹40K',
    desc: 'Lower cost, but inconsistent and limited in scope',
    featured: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CraftStudio() {
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
          Our positioning
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mx-auto mb-10 max-w-2xl text-center"
      >
        <h2 className="mb-5 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl lg:text-5xl">
          The sweet spot between{' '}
          <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
            agency and freelancer
          </span>
        </h2>
        <p className="text-lg leading-relaxed text-[#0D3082]/60">
          Agencies charge too much and move too slow. Freelancers are affordable
          but risky. We&apos;re built to give you the best of both — without the
          tradeoffs.
        </p>
      </motion.div>

      <div className="mb-5 grid gap-4 md:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 2}
            whileHover={{ scale: 1.01 }}
            className="border-[#0D3082]/08 hover:shadow-[#0D3082]/08 flex items-start gap-4 rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3E92CC]/10">
              <reason.icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="mb-2 flex items-center gap-2 text-base font-semibold text-[#0D3082]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-500" />
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#0D3082]/60">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={6}
        className="rounded-2xl bg-[#0D3082] p-6 sm:p-8"
      >
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/10">
          {comparisons.map((col) => (
            <div
              key={col.label}
              className={`relative rounded-xl px-5 py-4 text-center sm:rounded-none sm:px-6 sm:py-2 ${
                col.featured
                  ? 'border border-[#3E92CC]/30 bg-[#3E92CC]/15 sm:border-0 sm:bg-transparent'
                  : 'bg-white/5 sm:bg-transparent'
              }`}
            >
              {col.featured && (
                <div className="absolute inset-0 hidden rounded-xl border border-[#3E92CC]/30 bg-[#3E92CC]/15 sm:block" />
              )}
              <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-center sm:justify-center sm:gap-0">
                <div
                  className={`min-w-[100px] text-left text-xs font-semibold tracking-widest uppercase sm:mb-2 sm:min-w-0 sm:text-center ${
                    col.featured ? 'text-[#3E92CC]' : 'text-white/40'
                  }`}
                >
                  {col.label}
                </div>
                <div className="relative text-right text-xl font-bold text-white sm:mb-2 sm:text-center sm:text-2xl">
                  {col.price}
                </div>
                <div
                  className={`relative hidden text-center text-xs leading-relaxed sm:block ${
                    col.featured ? 'text-white/75' : 'text-white/40'
                  }`}
                >
                  {col.desc}
                </div>
              </div>
              <p
                className={`mt-1.5 text-left text-xs leading-relaxed sm:hidden ${
                  col.featured ? 'text-white/70' : 'text-white/35'
                }`}
              >
                {col.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <p className="mt-3 text-center text-xs text-[#0D3082]/50">
        Pricing varies by project scope.{' '}
        <Link
          href="/contact"
          className="cursor-pointer font-medium text-[#0D3082] transition-colors hover:text-[#3E92CC]"
        >
          Get a free quote →
        </Link>
      </p>
    </SectionWrapper>
  );
}
