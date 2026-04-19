'use client';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

const values: string[] = [
  'We treat your business like our own',
  'Quality over quick fixes',
  'Honest pricing, no hidden fees',
  'Long-term partnerships, not transactions',
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function OurStory() {
  return (
    <SectionWrapper className="py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
            <span className="text-xs font-medium tracking-widest text-[#3E92CC] uppercase">
              Our story
            </span>
          </motion.div>

          <h2 className="mb-6 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl">
            Why we started CraftBit
          </h2>

          <div className="space-y-5 leading-relaxed text-[#0D3082]/65">
            <p>
              After working at larger agencies and tech companies, we kept
              seeing the same problem — small and growing businesses were either
              paying agency prices for cookie-cutter work, or taking chances
              with unreliable freelancers.
            </p>
            <p>
              We started CraftBit to offer something in between: the expertise
              and reliability of an agency, with the personal attention and fair
              pricing of a boutique team.
            </p>
            <p>
              We&apos;re a tight-knit team who genuinely care about every
              project we take on. We stay small on purpose — because that&apos;s
              how we keep the quality high.
            </p>
          </div>

          <div className="border-[#0D3082]/08 mt-10 rounded-2xl border bg-[#fafbff] p-6">
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-[#0D3082]/40 uppercase">
              What we stand for
            </h4>
            <ul className="space-y-3">
              {values.map((value, i) => (
                <motion.li
                  key={value}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i + 2}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3E92CC]/10">
                    <CheckCircle2 className="h-3 w-3 text-[#3E92CC]" />
                  </div>
                  <span className="text-sm text-[#0D3082]/70">{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="shadow-[#0D3082]/08 overflow-hidden rounded-3xl border border-[#0D3082]/10 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="border-[#0D3082]/08 absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-lg"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <p className="text-xs font-semibold text-[#0D3082]">
              Open for new projects
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
