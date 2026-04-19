'use client';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Target, Shield } from 'lucide-react';

export default function WhatWeCreate() {
  const highlights = [
    {
      icon: Sparkles,
      title: 'Premium Projects',
      description: 'From ambitious startups to enterprise solutions',
    },
    {
      icon: Target,
      title: 'Diverse Clientele',
      description: 'Partnering with visionaries across industries',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Every project meets our exacting standards',
    },
  ];

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-6">
      <div className="absolute top-0 right-0 h-full w-1/2" />

      <motion.div
        className="mt-6 mb-2 flex items-center justify-center gap-3"
        variants={textVariants}
      >
        <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
        <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
          {' '}
          What We Create
        </span>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
      </motion.div>

      <div className="relative mt-8 px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl">
              Where Vision Meets
              <span className="text-blue-600"> Precision</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              We specialize in creating bespoke digital solutions that transcend
              expectations. Our portfolio represents partnerships with
              forward-thinking brands who demand nothing less than
              extraordinary.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-slate-900">
                  150+
                </span>
                <span className="text-sm text-slate-500">Projects</span>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-slate-900">
                  98%
                </span>
                <span className="text-sm text-slate-500">Satisfaction</span>
              </div>
              <div className="h-12 w-px bg-slate-200" />
              <div className="text-center">
                <span className="block text-4xl font-bold text-slate-900">
                  50+
                </span>
                <span className="text-sm text-slate-500">Clients</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="group flex items-start gap-5 rounded-(--radius) bg-slate-50 p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm transition-all group-hover:shadow-md group-hover:shadow-blue-100">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
