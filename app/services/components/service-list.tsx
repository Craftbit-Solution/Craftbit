'use client';

import { motion, Variants } from 'framer-motion';
import {
  Code2,
  ShoppingCart,
  Globe,
  Rocket,
  RefreshCw,
  LucideIcon,
  Settings,
} from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';
import ServiceCard from './service-card';
import { useState } from 'react';

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  targetAudience: string;
  popular?: boolean;
};

const services: Service[] = [
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description:
      'Tailored solutions for booking systems, dashboards, CRM tools, and internal business applications.',
    features: [
      'Custom functionality for your workflow',
      'Scalable architecture',
      'API integrations',
      'Admin dashboard included',
      'Mobile responsive',
    ],
    priceRange: '₹25,000 – ₹80,000',
    targetAudience:
      'Growing businesses, startups, companies with specific workflows',
    popular: true,
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Platforms',
    description:
      'High-converting online stores with seamless checkout, inventory management, and payment integration.',
    features: [
      'Product catalog management',
      'Secure payment gateway',
      'Order tracking system',
      'Inventory management',
      'SEO optimized',
    ],
    priceRange: '₹30,000 – ₹1,00,000',
    targetAudience:
      'D2C brands, retail businesses going online, established shops',
  },
  {
    icon: Globe,
    title: 'Business Websites',
    description:
      'Professional, fast, and conversion-focused websites that establish your online presence.',
    features: [
      'Modern, responsive design',
      'Contact forms & lead capture',
      'Google Analytics setup',
      'SEO foundation',
      'Fast loading speed',
    ],
    priceRange: '₹8,000 – ₹25,000',
    targetAudience: 'Service businesses, local companies, professionals',
  },
  {
    icon: Rocket,
    title: 'SaaS Development',
    description:
      'Full-featured SaaS products from MVP to scale, built for growth and sustainability.',
    features: [
      'User authentication & roles',
      'Subscription billing',
      'Multi-tenant architecture',
      'API development',
      'Analytics dashboard',
    ],
    priceRange: '₹80,000 – ₹2,50,000+',
    targetAudience: 'Funded startups, entrepreneurs with validated ideas',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description:
      'Modernize your existing website with improved design, performance, and user experience.',
    features: [
      'Complete visual overhaul',
      'Performance optimization',
      'Mobile responsiveness',
      'Content migration',
      'SEO preservation',
    ],
    priceRange: '₹10,000 – ₹40,000',
    targetAudience: 'Established businesses with outdated websites',
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, updates, security patches, and improvements to keep your site running smoothly.',
    features: [
      'Regular updates & backups',
      'Security monitoring',
      'Performance optimization',
      'Content updates',
      'Priority support',
    ],
    priceRange: '₹2,000 – ₹10,000 / month',
    targetAudience: 'All businesses needing ongoing website care',
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

export default function ServicesLists() {
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
          What We Offer
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
        <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl lg:text-5xl">
          Services built around{' '}
          <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
            what you actually need
          </span>
        </h2>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-[#0D3082]/60">
          No bloated packages or unnecessary upsells — just the right scope for
          where your business is now.
        </p>
      </motion.div>

      <div className="mb-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
