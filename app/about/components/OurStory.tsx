'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function OurStory() {
  const values: string[] = [
    'We treat your business like our own',
    'Quality over quick fixes',
    'Honest pricing, no hidden fees',
    'Long-term partnerships, not transactions',
  ];

  return (
    <section className="py-12">
      <div className="px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl leading-tight font-bold text-blue-900 md:text-5xl">
              Our Story
            </h2>
            <div className="mt-4 space-y-6 text-lg leading-relaxed text-slate-600">
              <p>
                After years of working at large agencies and tech companies, we
                noticed a gap in the market. Small and medium businesses were
                either paying agency prices for cookie-cutter solutions, or
                taking chances with unreliable freelancers.
              </p>
              <p>
                We started Webcraft Studio to offer something different: the
                expertise and reliability of an agency, with the personal
                attention and fair pricing of a boutique team.
              </p>
              <p>
                Today, we're a tight-knit team of three developers who genuinely
                care about the success of every project we take on. We're
                selective about the work we accept because we believe in doing
                fewer things, but doing them exceptionally well.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <h4 className="mb-4 font-semibold text-slate-900">Our Values</h4>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-500" />
                    <span className="text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 rotate-3 transform rounded-3xl bg-linear-to-br from-amber-400 to-orange-500 opacity-20" />
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
