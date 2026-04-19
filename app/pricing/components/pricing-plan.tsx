'use client';
import { motion, Variants } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/section-wrapper';

type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '₹60,000',
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
    price: '₹1,00,000',
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
    price: '₹3,00,000',
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

const maintenance = {
  features: [
    'Regular updates & backups',
    'Security monitoring',
    'Performance optimization',
    'Content updates',
    'Priority support',
  ],
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function PricingPlans() {
  return (
    <SectionWrapper className="py-10">
      <div className="mb-5 grid gap-4 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index}
            className={`relative flex flex-col rounded-2xl p-6 ${
              plan.popular
                ? 'border-2 border-[#3E92CC] bg-white shadow-lg shadow-[#3E92CC]/10'
                : 'border-[#0D3082]/08 hover:shadow-[#0D3082]/06 border bg-white transition-shadow duration-300 hover:shadow-lg'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-4 py-1 text-xs font-bold text-white shadow-md shadow-[#0D3082]/20">
                Most popular
              </div>
            )}

            <div className="mb-4">
              <p className="mb-2 text-xs font-bold tracking-widest text-[#0D3082]/40 uppercase">
                {plan.name}
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-bold text-[#0D3082]">
                  {plan.price}
                </span>
                <span className="text-xs text-[#0D3082]/40">onwards</span>
              </div>
            </div>

            <p className="border-[#0D3082]/06 mb-5 border-b pb-5 text-sm leading-relaxed text-[#0D3082]/60">
              {plan.description}
            </p>

            <ul className="mb-6 flex flex-1 flex-col gap-2.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2.5">
                  <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-2.5 w-2.5 text-green-600" />
                  </div>
                  <span className="text-xs text-[#0D3082]/70">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button
                className={`group w-full rounded-full font-semibold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-linear-to-r from-[#0D3082] to-[#3E92CC] text-white shadow-md shadow-[#0D3082]/20 hover:opacity-90'
                    : 'border-[1.5px] border-[#0D3082]/20 bg-white text-[#0D3082] hover:border-[#3E92CC] hover:bg-[#0D3082]/5'
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={4}
        className="border-[#0D3082]/08 rounded-2xl border bg-[#fafbff] p-6"
      >
        <div className="grid gap-6 lg:grid-cols-[280px_1fr_auto] lg:items-center">
          <div>
            <h3 className="mb-1.5 text-base font-semibold text-[#0D3082]">
              Maintenance & Support
            </h3>
            <p className="text-sm leading-relaxed text-[#0D3082]/60">
              Keep your site secure, fast, and up to date with ongoing monthly
              care. Peace of mind after launch.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {maintenance.features.map((feature) => (
              <span
                key={feature}
                className="border-[#0D3082]/08 flex items-center gap-1.5 rounded-lg border bg-white px-3 py-1.5 text-xs font-medium text-[#0D3082]/70"
              >
                <Check className="h-3 w-3 shrink-0 text-green-500" />
                {feature}
              </span>
            ))}
          </div>

          <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-end lg:gap-3">
            <div className="lg:text-right">
              <p className="text-xs font-medium tracking-wider text-[#0D3082]/40 uppercase">
                Starting from
              </p>
              <p className="text-xl font-bold text-[#0D3082]">
                ₹10,000 / month
              </p>
            </div>
            <Link href="/contact">
              <Button
                variant="outline"
                className="rounded-full border-[1.5px] border-[#0D3082]/20 bg-white text-sm font-semibold whitespace-nowrap text-[#0D3082] hover:border-[#3E92CC] hover:bg-[#0D3082]/5"
              >
                Get started
                <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
