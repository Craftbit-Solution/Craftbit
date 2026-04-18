'use client';

import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import IconWrapper from './IconWrapper';

export default function ServiceCard({ service, index }: any) {
  const {
    icon: Icon,
    title,
    description,
    features,
    priceRange,
    targetAudience,
    color = 'from-blue-500 to-blue-600',
    bgColor = 'bg-blue-50',
  } = service;

  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`group relative`}
    >
      <Card className="mt-4 gap-0 space-y-4 overflow-hidden p-4 transition-all duration-300 hover:shadow-xl lg:p-6">
        {/* Icon */}

        <IconWrapper
          element={<Icon className="h-5 w-5 text-white" strokeWidth={2} />}
        />

        {/* Title & Description */}
        <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {title}
        </h3>
        <p className="mb-4 leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-600">
          {description}
        </p>

        {/* Price */}
        <div className="mb-6 border-b border-slate-100 pb-6">
          <span className="text-sm text-slate-500">Starting from</span>
          <div className="text-xl font-bold text-slate-900">{priceRange}</div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="mb-4 flex cursor-pointer items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {open ? 'See less' : 'See more'}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>

        {open && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            {/* Features */}
            <ul className="mb-6 space-y-3">
              {features.map((feature: any, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-(--radius) bg-green-100">
                    <Check className="h-3 w-3 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Target Audience */}
            <div className="mb-6 rounded-(--radius) bg-slate-50 px-4 py-2">
              <span className="text-xs font-medium tracking-wider text-slate-500 uppercase">
                Perfect for
              </span>
              <p className="mt-1 text-sm text-slate-700">{targetAudience}</p>
            </div>
          </div>
        )}

        {/* CTA */}
        <Button
          className={`group/btn h-10 w-full rounded-(--radius) bg-slate-900 font-medium text-white hover:bg-slate-800`}
        >
          Get Started
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </Button>
      </Card>
    </motion.div>
  );
}
