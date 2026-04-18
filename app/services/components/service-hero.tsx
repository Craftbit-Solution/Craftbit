'use client';

import { ArrowRight, Sparkles, Workflow } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ServiceHero() {
  return (
    <section className="relative flex items-center overflow-hidden">
      {/* Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

      <div className="relative px-6 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
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
              <span className="text-sm font-semibold">Our Services</span>
            </motion.div>

            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Web solutions tailored to{' '}
              <span className="relative">
                <span className="relative z-10 bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  your business
                </span>
              </span>
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              From simple business websites to complex SaaS applications, we
              have the expertise to bring your vision to life.{' '}
            </p>

            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group h-14 w-full rounded-(--radius) bg-slate-900 px-8 text-base font-medium text-white hover:bg-slate-800 sm:w-auto"
              >
                Get a Free Quate
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="absolute h-[460px] w-[460px] rounded-full border border-blue-200/40" />
            <div className="absolute h-[520px] w-[520px] rounded-full border border-blue-100/30" />

            <div className="relative z-10 flex items-center justify-center">
              <div className="relative flex aspect-square w-64 items-center justify-center sm:w-80 lg:w-[400px]">
                <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-blue-400 shadow-2xl shadow-blue-300/40" />

                <img
                  // src="https://i.pinimg.com/1200x/33/ae/98/33ae98d3f7ee3f79ce452e81299d200b.jpg"
                  src="/images/services_hero_image.png"
                  alt="Services Hero"
                  className="h-full w-full object-contain"
                />
              </div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-4 -bottom-4 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                    <Workflow className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    Scalable Solutions
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
