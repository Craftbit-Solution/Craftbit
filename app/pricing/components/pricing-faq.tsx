'use client';
import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: 'Do you offer fixed-price projects?',
    answer:
      'Yes. Every project starts with a clear scope and a fixed price. No hourly billing surprises — you know the total cost before we write a single line of code.',
  },
  {
    question: "What's included in the support period?",
    answer:
      "Bug fixes, minor content updates, and technical help for anything related to what we built. It's not a retainer for new features — those would be scoped separately.",
  },
  {
    question: 'How does payment work?',
    answer:
      'We take 50% upfront to begin work and 50% on delivery. For larger Custom projects we can split into three milestone payments. We accept bank transfer and UPI.',
  },
  {
    question: 'Can I upgrade or add features later?',
    answer:
      'Absolutely. Many clients start with a Starter site and add features as the business grows. We scope each addition separately so you only pay for what you actually need.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Starter websites: 2–3 weeks. Growth projects: 4–6 weeks. Custom applications: 8–16 weeks depending on complexity. We give you a realistic timeline before we start.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      "Yes — we're remote-first and have worked with clients across time zones. All communication happens over email, WhatsApp, and video calls.",
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

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
          FAQ
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mb-10 text-center text-3xl font-bold tracking-tight text-[#0D3082] sm:text-4xl"
      >
        Questions we get asked
      </motion.h2>
      <div className="divide-[#0D3082]/06 mx-auto max-w-2xl divide-y">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 2}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-sm font-semibold text-[#0D3082]">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-[#3E92CC] transition-transform duration-200 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-[#0D3082]/60">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
