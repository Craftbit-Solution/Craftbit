'use client';

import { motion, Variants } from 'framer-motion';
import {
  Monitor,
  Search,
  Zap,
  Shield,
  GraduationCap,
  Headphones,
  BarChart3,
  RefreshCw,
  LucideIcon,
} from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Monitor,
    title: 'Responsive Design',
    description: 'Perfect on all devices',
  },
  {
    icon: Search,
    title: 'SEO Foundation',
    description: 'Ready for search engines',
  },
  { icon: Zap, title: 'Performance', description: 'Fast loading speeds' },
  { icon: Shield, title: 'Security', description: 'SSL & best practices' },
  {
    icon: GraduationCap,
    title: 'Training',
    description: 'Learn to manage your site',
  },
  {
    icon: Headphones,
    title: 'Support',
    description: '30 days post-launch support',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Google Analytics setup',
  },
  {
    icon: RefreshCw,
    title: 'Revisions',
    description: "Until you're satisfied",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function IncludedWithProject() {
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
          All Inclusive
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
          What&apos;s included with{' '}
          <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
            every project
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#0D3082]/60">
          No hidden costs. Every project comes with these essentials.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 2}
              className="group border-[#0D3082]/08 hover:shadow-[#0D3082]/08 rounded-2xl border bg-[#fafbff] p-5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#3E92CC]/10">
                <Icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-[#0D3082]">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-[#0D3082]/55">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
