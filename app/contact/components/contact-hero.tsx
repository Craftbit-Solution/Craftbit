'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="mb-12 pt-4">
      <div className="">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
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
          <h1 className="text-5xl leading-tight font-bold text-slate-900 md:text-6xl">
            Let’s Create Something{' '}
            <span className="text-blue-500">Thoughtful</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            From early concepts to growing platforms, we partner with startups
            to build digital experiences that feel intentional, perform
            reliably, and grow alongside the business behind them.{' '}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
