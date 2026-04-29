'use client';

import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Eye,
  LucideIcon,
  Shield,
  Clock,
  Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/shared/section-wrapper';
import Link from 'next/link';

/* ─── Types ─── */
type Guarantee = {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  desc: string;
};

type ClientLogo = {
  name: string;
  className?: string;
};

const guarantees: Guarantee[] = [
  {
    icon: Shield,
    iconBg: '#eef3ff',
    iconColor: '#0D3082',
    title: '100% Risk-Free',
    desc: "Full refund if you're not satisfied.",
  },
  {
    icon: Clock,
    iconBg: '#f0fdf4',
    iconColor: '#16a34a',
    title: 'On-Time, Every Time',
    desc: "We deliver on time, or the next one's on us.",
  },
  {
    icon: Zap,
    iconBg: '#fffbeb',
    iconColor: '#b45309',
    title: 'Lightning Fast Support',
    desc: 'We respond within 24 hours — guaranteed.',
  },
];

const clientLogos: ClientLogo[] = [
  { name: 'The Yoga Co.' },
  { name: 'Bloom & Co.' },
  { name: 'NEXORA REALTY' },
  { name: 'FITZONE STUDIO' },
  { name: 'Crafted Interiors' },
];

const avatarColors = ['#CBD5E1', '#94A3B8', '#64748B', '#475569'];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function BrowserMockup() {
  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-[#0D3082]/12"
      >
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="mx-auto flex h-6 w-48 items-center rounded-md bg-white px-3 text-[10px] text-gray-400 shadow-sm">
            modernliving.com
          </div>
        </div>

        <div className="bg-white p-0">
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-3">
            <span className="text-[11px] font-bold tracking-wide text-gray-800">
              MODERN LIVING
            </span>
            <div className="flex gap-4">
              {['Home', 'Shop', 'About', 'Contact'].map((item) => (
                <span key={item} className="text-[9px] text-gray-500">
                  {item}
                </span>
              ))}
            </div>
            <div className="rounded bg-gray-900 px-2 py-1 text-[9px] font-semibold text-white">
              Shop Now
            </div>
          </div>

          <div className="flex items-center gap-4 p-5">
            <div className="flex-1">
              <h3 className="text-[16px] leading-tight font-bold text-gray-900">
                Luxury furniture,
                <br />
                designed for life.
              </h3>
              <p className="mt-2 text-[9px] leading-relaxed text-gray-500">
                Modern pieces. Timeless comfort.
                <br />
                Made for your space.
              </p>
              <div className="mt-3 inline-block rounded-lg bg-gray-900 px-3 py-1.5 text-[9px] font-semibold text-white">
                Explore Collection
              </div>
            </div>
            <div className="flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-gray-100 to-gray-200">
              <svg viewBox="0 0 80 60" className="h-20 w-20 opacity-40">
                <rect
                  x="10"
                  y="35"
                  width="60"
                  height="18"
                  rx="4"
                  fill="#9CA3AF"
                />
                <rect
                  x="8"
                  y="28"
                  width="64"
                  height="10"
                  rx="3"
                  fill="#6B7280"
                />
                <rect x="15" y="43" width="8" height="10" fill="#6B7280" />
                <rect x="57" y="43" width="8" height="10" fill="#6B7280" />
                <circle cx="55" cy="18" r="12" fill="#D1D5DB" />
                <rect x="44" y="4" width="3" height="16" fill="#9CA3AF" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-30 -left-6 z-10 w-56 overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl shadow-[#0D3082]/10"
      >
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-gray-700">
            Performance Overview
          </span>
          <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[9px] text-gray-400">
            This Month ↓
          </span>
        </div>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: 'Visitors', value: '12.5K', delta: '+32%' },
            { label: 'Conversions', value: '320', delta: '+28%' },
            { label: 'Conv. Rate', value: '2.56%', delta: '+42%' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-[8px] text-gray-400">{stat.label}</p>
              <p className="text-[11px] font-bold text-gray-800">
                {stat.value}
              </p>
              <p className="text-[8px] font-medium text-green-500">
                {stat.delta}
              </p>
            </div>
          ))}
        </div>
        <div className="relative h-10 overflow-hidden">
          <svg viewBox="0 0 200 40" className="h-full w-full">
            <polyline
              points="0,30 30,25 60,28 90,15 120,18 150,8 180,12 200,6"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="absolute top-1 right-4 rounded-full bg-[#0D3082] px-1.5 py-0.5 text-[8px] font-semibold text-white">
            +42%
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 -bottom-24 z-10 w-28 overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-xl shadow-[#0D3082]/10"
      >
        <p className="mb-2 text-[10px] font-semibold text-gray-700">
          Page Speed
        </p>
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center">
          <svg
            viewBox="0 0 48 48"
            className="absolute h-full w-full -rotate-90"
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#F3F4F6"
              strokeWidth="4"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="#22C55E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${(98 / 100) * 125.6} 125.6`}
            />
          </svg>
          <span className="text-[16px] font-bold text-gray-800">98</span>
        </div>
        <p className="mt-1 text-center text-[8px] text-gray-400">Out of 100</p>
        <p className="text-center text-[8px] font-semibold text-green-500">
          Great Performance!
        </p>
      </motion.div>
    </div>
  );
}

/* ─── Component ─── */
export default function HomeHero() {
  return (
    <SectionWrapper className="pt-8 pb-24 md:pt-12">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-600 shadow-sm"
          >
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
            Now taking new projects for Q2 2026
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-[2.6rem] leading-[1.08] font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-[3.25rem]"
          >
            We build websites
            <br />
            that{' '}
            <span className="relative inline-block text-[#0D3082]">
              turn visitors
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.8 }}
                className="pointer-events-none absolute -bottom-1.5 left-0 w-full"
                viewBox="0 0 280 8"
                fill="none"
              >
                <motion.path
                  d="M2 6C50 2 100 1.5 150 4C190 6.5 240 4 278 2"
                  stroke="#0D3082"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>{' '}
            into
            <br />
            paying clients.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-500"
          >
            We design and develop high-performance websites for{' '}
            <strong className="font-semibold text-gray-800">
              local businesses
            </strong>{' '}
            and{' '}
            <strong className="font-semibold text-gray-800">
              personal brands
            </strong>{' '}
            — built to convert, load fast, and scale with your growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="group w-full rounded-full bg-[#0D3082] px-7 py-6 text-[15px] font-semibold text-white shadow-lg shadow-[#0D3082]/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0a2468] hover:shadow-xl sm:w-auto"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book a Free Strategy Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-full border-gray-200 bg-white px-7 py-6 text-[15px] font-medium text-gray-700 transition-all duration-200 hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
              >
                <Eye className="mr-2 h-4 w-4 text-gray-400" />
                View Our Work
              </Button>
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-3 flex items-center gap-1.5 text-sm text-gray-400"
          >
            <span className="text-gray-300">↳</span>
            No pressure. 15-min call. Get clear next steps.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-8 flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {avatarColors.map((color, i) => (
                <div
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white"
                  style={{ background: color, zIndex: 4 - i }}
                >
                  {['A', 'B', 'C', 'D'][i]}
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm font-medium text-gray-600">
                Trusted by 25+ businesses
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          className="relative hidden pb-14 lg:block"
        >
          <BrowserMockup />
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={6}
        className="mt-20 rounded-2xl border border-gray-100 bg-gray-50 px-8 py-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          {clientLogos.map((logo) => (
            <span
              key={logo.name}
              className="text-sm font-semibold tracking-wide text-gray-400 transition-colors hover:text-gray-600"
            >
              {logo.name}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={7}
        className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        {guarantees.map((g) => {
          const Icon = g.icon;
          return (
            <div
              key={g.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white px-5 py-4"
            >
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                style={{ background: g.iconBg }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: g.iconColor }}
                  strokeWidth={2}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">{g.title}</p>
                <p className="mt-0.5 text-xs leading-snug text-gray-400">
                  {g.desc}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
