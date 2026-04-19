'use client';

import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Service } from './service-list';
import Link from 'next/link';

export default function ServiceCard({
  service,
  index,
}: Readonly<{
  service: Service;
  index: number;
}>) {
  const {
    icon: Icon,
    title,
    description,
    features,
    priceRange,
    targetAudience,
    popular,
  } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group border-[#0D3082]/08 hover:shadow-[#0D3082]/08 flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3E92CC]/10">
          <Icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
        </div>
        {popular && (
          <span className="rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-3 py-1 text-xs font-semibold text-white shadow-sm shadow-[#0D3082]/20">
            Most popular
          </span>
        )}
      </div>

      <h3 className="mb-2 text-base font-semibold text-[#0D3082] transition-colors duration-200 group-hover:text-[#3E92CC]">
        {title}
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-[#0D3082]/60">
        {description}
      </p>

      <div className="mb-5 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-3">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100">
              <Check className="h-2.5 w-2.5 text-green-600" />
            </div>
            <span className="text-xs leading-tight text-[#0D3082]/65">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-[#0D3082]/06 mb-4 h-px" />

      <div className="mt-auto flex flex-col gap-3">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium tracking-wider text-[#0D3082]/40 uppercase">
              Starting from
            </p>
            <p className="mt-0.5 text-base font-bold text-[#0D3082]">
              {priceRange}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium tracking-wider text-[#0D3082]/40 uppercase">
              Perfect for
            </p>
            <p className="mt-0.5 max-w-[140px] text-xs leading-tight text-[#0D3082]/55">
              {targetAudience}
            </p>
          </div>
        </div>

        <Link href="/contact">
          <Button className="group/btn w-full rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] font-medium text-white shadow-md shadow-[#0D3082]/20 transition-opacity hover:opacity-90">
            Get started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
