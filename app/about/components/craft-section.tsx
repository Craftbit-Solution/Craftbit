'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  MessageSquare,
  Hammer,
  Code,
  Zap,
  Layers,
  CheckCircle2,
  LucideIcon,
} from 'lucide-react';

type CraftPoint = {
  id: number;
  icon: LucideIcon;
  text: string;
};

export default function CraftSection() {
  const craftPoints: CraftPoint[] = [
    { id: 1, icon: MessageSquare, text: 'Clear Communication' },
    { id: 2, icon: Clock, text: 'On-Time Delivery' },
    { id: 3, icon: Code, text: 'Clean and maintainable code' },
    { id: 4, icon: Zap, text: 'Performance and responsiveness' },
    {
      id: 5,
      icon: Layers,
      text: 'Thoughtful UI that feels intuitive and modern',
    },
  ];

  return (
    <section className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl font-bold text-blue-900 md:text-5xl">
          Our Guarantee
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-600">
          We&apos;re committed to your success at every step of the journey
        </p>
      </motion.div>

      <div className="px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main card */}
              <div className="rounded-3xl bg-linear-to-br from-slate-900 to-slate-800 p-8">
                <div className="space-y-6">
                  {craftPoints.map((point, index) => (
                    <motion.div
                      key={point.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex items-center gap-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 transition-colors group-hover:bg-blue-500/30">
                        <point.icon className="h-6 w-6 text-blue-400" />
                      </div>
                      <span className="font-medium text-white">
                        {point.text}
                      </span>
                      <CheckCircle2 className="ml-auto h-5 w-5 text-green-400 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 border-t border-slate-700 pt-8">
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded-full bg-slate-700" />
                    <div className="h-3 w-1/2 rounded-full bg-slate-700/50" />
                    <div className="h-3 w-2/3 rounded-full bg-blue-500/30" />
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
                className="absolute -right-6 -bottom-6 rounded-2xl bg-blue-500 p-6 shadow-xl shadow-blue-500/30"
              >
                <div className="text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-blue-100">Satisfaction Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
              <Hammer className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-700">
                Our Digital Craft
              </span>
            </div>

            <h2 className="mb-6 text-3xl leading-tight font-bold text-slate-900 lg:text-5xl">
              More Than Just
              <span className="block text-blue-500">Building Websites</span>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-slate-600">
              We don&apos;t just build websites — we help startups establish
              credibility, communicate value, and convert users.
            </p>

            <p className="mb-8 leading-relaxed text-slate-500">
              From the first wireframe to the final deployment, we focus on
              creating digital experiences your users trust and your team can
              confidently grow on.
            </p>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                  <CheckCircle2 className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="mb-1 font-semibold text-slate-900">
                    Our Goal Is Simple
                  </div>
                  <p className="text-sm text-slate-600">
                    Build digital experiences your users trust and your team can
                    confidently grow on.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
