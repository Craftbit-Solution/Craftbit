'use client';

import { motion, Variants } from 'framer-motion';
import { Shield, Clock, Users, Activity, CheckCircle } from 'lucide-react';
import AnimatedSection from './animated-section';
import SectionHeader from './header';

const features = [
  {
    icon: Shield,
    title: 'On-time delivery',
    description:
      'We set realistic timelines and stick to them. Late delivery means your next revision is on us.',
  },
  {
    icon: Clock,
    title: '48h response',
    description:
      'Every message gets a reply within 48 hours — usually much faster during business hours.',
  },
  {
    icon: Users,
    title: 'Direct access',
    description:
      'You talk to the designer and developer directly — no middlemen, no lost-in-translation moments.',
  },
  {
    icon: Activity,
    title: 'Performance-first',
    description:
      'Every site we ship is optimized for speed, SEO, and Core Web Vitals out of the box.',
  },
];

const checkItems = [
  'Custom-tailored solutions',
  'Transparent pricing',
  'Fixed-scope contracts',
  'Post-launch support',
  'SEO-ready builds',
  'You own everything',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="mb-8 py-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mb-12 flex items-center justify-center gap-3"
      >
        <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
        <span className="text-xs font-medium tracking-widest text-[#3E92CC] uppercase">
          Why CraftBit
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <div className="relative px-6">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <SectionHeader
              label=""
              title="What makes working with us different"
              description="We're a small team, which means you get direct access to the people actually building your product — not account managers passing messages around."
              centered={false}
            />

            <div className="mt-10 grid grid-cols-2 gap-3">
              {checkItems.map((item, index) => (
                <AnimatedSection key={item} delay={index * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E92CC]/10">
                      <CheckCircle className="h-3 w-3 text-[#3E92CC]" />
                    </div>
                    <span className="text-sm font-medium text-[#0D3082]/70">
                      {item}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? 'left' : 'right'}
                className="h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="border-[#0D3082]/08 hover:shadow-[#0D3082]/08 h-full rounded-2xl border bg-[#fafbff] p-6 transition-all duration-300 hover:shadow-lg"
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
