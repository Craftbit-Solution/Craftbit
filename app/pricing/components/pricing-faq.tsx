'use client';

import { motion, type Variants } from 'framer-motion';
import { Eyebrow, Section } from '@/components/design';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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

export default function PricingFAQ() {
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
          <Eyebrow>FAQ</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          Questions we get asked
        </motion.h2>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        custom={2}
        className="mx-auto mt-12 max-w-2xl"
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="border-rule"
            >
              <AccordionTrigger className="py-5 text-left text-body font-medium text-ink hover:no-underline [&[data-state=open]]:text-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </Section>
  );
}
