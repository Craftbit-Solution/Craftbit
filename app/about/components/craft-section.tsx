'use client';
import { motion, Variants } from 'framer-motion';
import {
  Cpu,
  Brain,
  Palette,
  Handshake,
  MessageSquare,
  Clock,
} from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

const features = [
  {
    icon: Cpu,
    title: 'Modern technology',
    description:
      'Fast, scalable, future-ready builds using the right tools for the job — not whatever is trendy.',
  },
  {
    icon: Brain,
    title: 'Strategic thinking',
    description:
      'Design and structure guided by user behavior and business goals, not just aesthetics.',
  },
  {
    icon: Palette,
    title: 'Clean design',
    description:
      "Minimal, intentional UI that looks professional and gets out of the user's way.",
  },
  {
    icon: Handshake,
    title: 'Real partnership',
    description:
      'We work closely with you throughout — not just at kickoff and delivery.',
  },
  {
    icon: MessageSquare,
    title: 'Clear communication',
    description:
      'You talk directly to the people building your product. No account managers in between.',
  },
  {
    icon: Clock,
    title: 'On-time delivery',
    description:
      'We set realistic timelines and stick to them. Late means your next revision is free.',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CraftSection() {
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
          What we bring
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
        <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl">
          More than just
          <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
            {' '}
            building websites
          </span>
        </h2>
        <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#0D3082]/60">
          Everything you need to launch and grow your digital product — handled
          by people who actually care about the outcome.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 2}
            className="border-[#0D3082]/08 hover:shadow-[#0D3082]/08 rounded-2xl border bg-[#fafbff] p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3E92CC]/10">
              <feature.icon
                className="h-5 w-5 text-[#3E92CC]"
                strokeWidth={2}
              />
            </div>
            <h3 className="mb-2 text-base font-semibold text-[#0D3082]">
              {feature.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#0D3082]/60">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
