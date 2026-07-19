'use client';

import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Service } from './service-list';

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
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        delay: index * 0.08,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex h-full flex-col rounded-lg border border-rule bg-paper/60 p-6 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-rule text-ink">
            <Icon className="size-4" strokeWidth={1.75} aria-hidden />
          </div>
          <div className="min-w-0">
            <h3 className="text-body font-medium text-ink">{title}</h3>
            {popular ? (
              <p className="mt-1 font-mono text-caption font-medium tracking-[0.14em] text-ember uppercase">
                Most popular
              </p>
            ) : null}
          </div>
        </div>

        <div className="shrink-0 text-right">
          <p className="font-mono text-caption font-medium tracking-[0.14em] text-ink-muted uppercase">
            Starting from
          </p>
          <p className="mt-1 text-body font-medium text-ink">{priceRange}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-ink-muted">{description}</p>

      <ul className="mt-6 flex flex-1 flex-col gap-2.5">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
              <Check className="size-2.5" strokeWidth={2.5} aria-hidden />
            </span>
            <span className="text-sm leading-relaxed text-ink">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-rule pt-5">
        <p className="text-sm leading-relaxed text-ink-muted">
          <span className="font-medium text-ink">Perfect for</span>
          {' — '}
          {targetAudience}
        </p>

        <Link
          href="/contact"
          className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
        >
          Get started
          <ArrowRight className="size-4 shrink-0" strokeWidth={2.5} />
        </Link>
      </div>
    </motion.article>
  );
}
