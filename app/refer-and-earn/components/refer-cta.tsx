'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';
import SectionWrapper from '@/components/shared/section-wrapper';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.06 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ReferCTA() {
  return (
    <SectionWrapper className="section-y">
      <div className="rounded-2xl border border-rule bg-ink px-8 py-14 text-center sm:px-16 sm:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={0}
        >
          <Eyebrow className="text-paper/50">Ready to earn?</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-5 text-heading font-medium tracking-tight text-paper"
        >
          Know someone who needs a website?
          <br />
          <span className="font-serif font-normal italic text-paper/85">
            Introduce them and earn ₹500.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-5 max-w-[65ch] text-subhead text-paper/60"
        >
          Drop us a WhatsApp message with your referral — we&apos;ll take it
          from there and pay you when their project starts.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={3}
          className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href="https://wa.me/916201855200?text=Hi%20CraftBit%2C%20I%27d%20like%20to%20refer%20someone."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
          >
            Refer on WhatsApp
            <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-paper/20 bg-transparent px-6 text-body font-medium text-paper transition-colors hover:border-paper/40 hover:bg-paper/5"
          >
            Contact us
          </Link>
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={4}
          className="mt-8 text-sm text-paper/35"
        >
          ₹500 per referral · Paid on project start · No caps
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
