'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Code2,
  ShoppingCart,
  Globe,
  Rocket,
  RefreshCw,
  Settings,
  type LucideIcon,
} from 'lucide-react';
import { Eyebrow, Section } from '@/components/design';
import ServiceCard from './service-card';

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
    priceRange: '₹50,000',
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
    priceRange: '₹40,000',
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
    priceRange: '₹8,000',
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
    priceRange: '₹60,000',
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
    priceRange: '₹5,000 / month',
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
    priceRange: '₹6,000 / month',
    targetAudience: 'All businesses needing ongoing website care',
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

export default function ServicesLists() {
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
          <Eyebrow>What We Offer</Eyebrow>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={1}
          className="mt-4 text-heading font-medium tracking-tight text-ink"
        >
          Services built around what you actually need
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          custom={2}
          className="mx-auto mt-4 max-w-[65ch] text-subhead text-ink-muted"
        >
          No bloated packages or unnecessary upsells — just the right scope for
          where your business is now.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}
