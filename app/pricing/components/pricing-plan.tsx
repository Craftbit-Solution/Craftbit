'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Check, RefreshCw, Settings } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow, Section } from '@/components/design';
import { cn } from '@/lib/utils';

type Plan = {
  name: string;
  price: string;
  turnaround: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

type OngoingService = {
  icon: typeof Settings;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹8,000',
    turnaround: '2–3 weeks',
    description:
      'A clean, fast business website to establish your online presence and start converting visitors.',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'Contact form',
      'SEO foundation',
      'Google Analytics setup',
      '30 days post-launch support',
    ],
    cta: 'Get a quote',
  },
  {
    name: 'Growth',
    price: '₹30,000',
    turnaround: '4–6 weeks',
    description:
      'A conversion-focused website or e-commerce store built to grow your business.',
    features: [
      'Up to 10 pages',
      'E-commerce ready',
      'Payment integration',
      'CMS / admin panel',
      'Performance optimized',
      '60 days post-launch support',
    ],
    cta: 'Get a quote',
    popular: true,
  },
  {
    name: 'Custom',
    price: '₹60,000',
    turnaround: '8–16 weeks',
    description:
      'Full-scale web applications, SaaS products, or complex platforms built to scale.',
    features: [
      'Custom architecture',
      'User auth & roles',
      'API integrations',
      'Dashboard & analytics',
      'Scalable infrastructure',
      '90 days post-launch support',
    ],
    cta: 'Talk to us',
  },
];

const ongoingServices: OngoingService[] = [
  {
    icon: Settings,
    name: 'Maintenance & Support',
    price: '₹6,000 / month',
    priceNote: 'after 6 months free',
    description:
      'Keep your site secure, fast, and up to date with ongoing monthly care. Peace of mind after launch.',
    features: [
      'Regular updates & backups',
      'Security monitoring',
      'Performance optimization',
      'Content updates',
      'Priority support',
    ],
  },
  {
    icon: RefreshCw,
    name: 'Website Redesign',
    price: '₹5,000 / month',
    description:
      'Modernize your existing website with improved design, performance, and user experience.',
    features: [
      'Complete visual overhaul',
      'Performance optimization',
      'Mobile responsiveness',
      'Content migration',
      'SEO preservation',
    ],
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

export default function PricingPlans() {
  return (
    <>
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={index}
              className={cn(
                'relative flex h-full flex-col rounded-lg border p-6 sm:p-8',
                plan.popular
                  ? 'border-ember/40 bg-ember/8 shadow-sm'
                  : 'border-rule bg-paper/60',
              )}
            >
              {plan.popular ? (
                <p className="mb-4 font-mono text-caption font-medium tracking-[0.14em] text-ember uppercase">
                  Most popular
                </p>
              ) : null}

              <h3 className="text-body font-medium text-ink">{plan.name}</h3>

              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="font-mono text-2xl tracking-tight tabular-nums text-ink md:text-[1.65rem]">
                  {plan.price}
                </span>
                <span className="text-sm text-ink-muted">onwards</span>
              </div>

              <p className="mt-3 font-mono text-caption font-medium tracking-[0.14em] text-ink-muted uppercase">
                {plan.turnaround}
              </p>

              <p className="mt-4 border-b border-rule pb-5 text-sm leading-relaxed text-ink-muted">
                {plan.description}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                      <Check
                        className="size-2.5"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  'mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md px-6 text-body font-medium transition-opacity hover:opacity-90',
                  plan.popular
                    ? 'bg-ember text-paper'
                    : 'border border-rule bg-transparent text-ink hover:border-ink/25 hover:bg-ink/5',
                )}
              >
                {plan.cta}
                <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={0}
          >
            <Eyebrow>Recurring</Eyebrow>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            custom={1}
            className="mt-4 text-heading font-medium tracking-tight text-ink"
          >
            Ongoing Services
          </motion.h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ongoingServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-40px' }}
                custom={index + 2}
                className="flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-6 sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-rule text-ink">
                      <Icon className="size-4" strokeWidth={1.75} aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-body font-medium text-ink">
                        {service.name}
                      </h3>
                      <p className="mt-1 font-mono text-caption font-medium tracking-[0.14em] text-ink-muted uppercase">
                        Recurring
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 text-right">
                    <p className="text-body font-medium text-ink">
                      {service.price}
                    </p>
                    {service.priceNote ? (
                      <p className="mt-1 text-sm text-ink-muted">
                        {service.priceNote}
                      </p>
                    ) : null}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check
                          className="size-2.5"
                          strokeWidth={2.5}
                          aria-hidden
                        />
                      </span>
                      <span className="text-sm leading-relaxed text-ink">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-rule bg-transparent px-6 text-body font-medium text-ink transition-colors hover:border-ink/25 hover:bg-ink/5"
                >
                  Get started
                  <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </Section>
    </>
  );
}
