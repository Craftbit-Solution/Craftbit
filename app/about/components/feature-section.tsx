'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Palette, Handshake, LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

export default function FeaturesSection() {
  const features: Feature[] = [
    {
      icon: Cpu,
      title: 'Modern Technology',
      description:
        'Fast, scalable, and future-ready development using modern tools.',
      color: 'blue',
    },
    {
      icon: Brain,
      title: 'Strategic Thinking',
      description:
        'Design and structure guided by user behavior and business goals.',
      color: 'violet',
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description:
        'Minimal, premium UI that feels intentional and professional.',
      color: 'rose',
    },
    {
      icon: Handshake,
      title: 'Reliable Partnership',
      description:
        'We work closely with you — like an extended part of your team.',
      color: 'emerald',
    },
  ];

  return (
    <section className="relative py-12">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 lg:text-5xl">
            What We Bring
            <span className="block text-blue-500">To The Table</span>
          </h2>

          <p className="text-lg text-slate-600">
            Everything you need to launch and scale your digital product, all in
            one place.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="mt-4 h-[250px] gap-0 space-y-4 overflow-hidden p-4 transition-all duration-300 hover:shadow-xl lg:p-6">
                <div
                  className={`absolute top-0 right-8 left-8 h-1 rounded-b-full opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-blue-400 text-white transition-transform duration-500 group-hover:scale-110`}
                >
                  <feature.icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
