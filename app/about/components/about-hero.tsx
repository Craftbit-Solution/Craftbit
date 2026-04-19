'use client';

import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette, Zap } from 'lucide-react';

export default function AboutHero() {
  const floatingIcons = [
    { id: 1, icon: Code2, delay: 0, x: '10%', y: '20%' },
    { id: 2, icon: Palette, delay: 0.2, x: '85%', y: '15%' },
    { id: 3, icon: Zap, delay: 0.4, x: '75%', y: '75%' },
    { id: 4, icon: Sparkles, delay: 0.6, x: '15%', y: '70%' },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden">
      {floatingIcons.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: item.delay + 0.8, duration: 0.5 }}
          className="absolute hidden lg:block"
          style={{ left: item.x, top: item.y }}
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + index,
              ease: 'easeInOut',
            }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-xl shadow-blue-500/10"
          >
            <item.icon className="h-6 w-6 text-blue-500" />
          </motion.div>
        </motion.div>
      ))}

      <div className="relative py-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-blue-600"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
          <span className="text-sm font-medium text-blue-700">
            Digital Web-Crafting Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
        >
          <span className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
            We Craft Digital
          </span>
          <br />
          <span className="bg-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          CraftBit helps early-stage startups turn ideas into polished,
          high-impact digital products. We design and build clean, fast, and
          scalable websites that grow with your business from day one.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 lg:gap-16"
        >
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '3x', label: 'Faster Launch Time' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
