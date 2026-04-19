'use client';
import { motion, Variants } from 'framer-motion';
import { MessageCircle, Gem, Clock, Headphones } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

const reasons = [
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
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function WhyChooseUs() {
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
          Why work with us
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
          What makes the difference
        </h2>
        <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#0D3082]/60">
          Good work is table stakes. Here&apos;s what we do beyond that.
        </p>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 2}
            className="border-[#0D3082]/08 hover:shadow-[#0D3082]/08 flex items-start gap-4 rounded-2xl border bg-[#fafbff] p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3E92CC]/10">
              <reason.icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
            </div>
            <div>
              <h3 className="mb-1.5 text-base font-semibold text-[#0D3082]">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#0D3082]/60">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
