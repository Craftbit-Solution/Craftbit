'use client';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>
          <span className="text-sm font-semibold">Our Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
        >
          Projects That
          <br />
          <motion.span
            className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{ backgroundSize: '200%' }}
          >
            Speak For Themselves
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-3xl text-lg text-slate-400 md:text-xl"
        >
          Explore our collection of successful projects that showcase our
          expertise in creating exceptional digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
