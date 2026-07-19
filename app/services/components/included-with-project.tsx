'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Monitor,
  Search,
  Zap,
  Shield,
  GraduationCap,
  Headphones,
  BarChart3,
  RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow, Section } from '@/components/design';

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

export default function IncludedWithProject() {
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
          <Eyebrow>All Inclusive</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          What&apos;s included with every project
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          No hidden costs. Every project comes with these essentials.
        </motion.p>
      </div>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {features.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            key={title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={index + 3}
            className="flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-5 text-left"
          >
            <div className="mb-3 flex size-9 items-center justify-center rounded-md border border-rule text-ink">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="text-body font-medium text-ink">{title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
              {description}
            </p>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
