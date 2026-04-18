'use client';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Monitor,
  Shield,
  Clock,
  MessageCircle,
  LucideIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';

type Guarantee = {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
};

const guarantees: Guarantee[] = [
  {
    icon: Shield,
    iconBg: '#eef3ff',
    iconColor: '#0D3082',
    title: '30-day money-back',
    desc: 'Not happy? Full refund, no questions.',
  },
  {
    icon: Clock,
    iconBg: '#f0fdf4',
    iconColor: '#16a34a',
    title: 'On-time delivery',
    desc: 'Late? Your first revision is free.',
  },
  {
    icon: MessageCircle,
    iconBg: '#fffbeb',
    iconColor: '#b45309',
    title: '48h response',
    desc: 'Always reachable, always responsive.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomeHero() {
  return (
    <SectionWrapper className="pt-28 pb-20">
      <div className="relative z-10 px-6 pt-12 pb-20">
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
            <span className="text-sm font-medium">
              Now taking new projects for Q2 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl leading-[1.12] font-bold tracking-tight text-[#0D3082] sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            Your business, built
            <br />
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
                for the digital age
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="pointer-events-none absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 10"
                fill="none"
              >
                <motion.path
                  d="M2 7C55 2 110 2 160 5.5C200 8.5 250 5 298 3"
                  stroke="url(#g1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0D3082" />
                    <stop offset="100%" stopColor="#3E92CC" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-7 max-w-[560px] text-lg leading-relaxed text-[#0D3082]/60 md:text-xl"
          >
            We build{' '}
            <span className="font-medium text-[#0D3082]">
              fast, conversion-focused websites
            </span>{' '}
            and digital products for growing businesses. From design to
            deployment — you get a partner, not just a vendor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="group rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-8 py-6 text-base font-semibold text-white shadow-xl shadow-[#0D3082]/25 transition-all duration-300 hover:opacity-90 hover:shadow-2xl hover:shadow-[#0D3082]/30"
            >
              Get a free consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group rounded-full border-[1.5px] border-[#0D3082]/20 bg-white px-8 py-6 text-base font-medium text-[#0D3082] transition-all duration-300 hover:border-[#3E92CC] hover:bg-[#0D3082]/5"
            >
              <Monitor className="mr-2 h-4 w-4 text-[#3E92CC]" />
              See our work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mx-auto mt-14 flex max-w-[620px] flex-col items-stretch justify-center gap-3 sm:flex-row"
          >
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="flex flex-1 items-start gap-3 rounded-xl border border-[#0D3082]/12 bg-[#fafbff] px-4 py-4 text-left"
                >
                  <div
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{ background: g.iconBg }}
                  >
                    <Icon
                      className="h-4 w-4"
                      style={{ color: g.iconColor }}
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <p className="text-sm leading-snug font-semibold text-[#0D3082]">
                      {g.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-[#0D3082]/55">
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
