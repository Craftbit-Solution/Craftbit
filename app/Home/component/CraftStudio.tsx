import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Shield, CheckCircle2 } from 'lucide-react';

export default function CraftStudio() {
  const reasons = [
    {
      icon: Code2,
      title: 'Engineering-led approach',
      description: "We're software engineers, not just web designers. Every project is built for performance, scalability, and security.",
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Layers,
      title: 'Full-stack expertise',
      description: 'From database architecture to pixel-perfect interfaces, we handle everything in-house.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      icon: Zap,
      title: 'Faster than agencies',
      description: 'Small team means direct communication, quick decisions, and faster delivery.',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Shield,
      title: 'Better than freelancers',
      description: 'Industry specialists ensure quality, meet deadlines, and never leave you hanging.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <section className="py-8">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-slate-50 to-transparent rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center  mx-auto mb-10">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
          >
            The perfect balance between{' '}
            <br />
            <span className="text-transparent bg-clip-text bg-[#3E92CC]">
              agency & freelancer
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600"
          >
            Get the expertise and reliability of an agency with the speed, 
            flexibility, and personal attention of working with freelancers.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl " />
              <div className="relative p-6">
                <div className="flex items-start gap-5">
                  <div className={`w-14 h-14 rounded-2xl ${reason.bgColor} flex items-center justify-center shrink-0`}>
                    <reason.icon className={`h-7 w-7 bg-gradient-to-br ${reason.color} text-white rounded-xl p-1.5`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-slate-900 rounded-3xl p-8"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-slate-400 text-sm uppercase tracking-wider">Large Agencies</div>
              <div className="text-white text-2xl font-bold">₹5L - ₹50L+</div>
              <div className="text-slate-500 text-sm">Slow, expensive, bureaucratic</div>
            </div>
            <div className="space-y-2 relative">
              <div className="text-slate-400 text-sm uppercase tracking-wider">Webcraft Studio</div>
              <div className="text-white text-2xl font-bold">₹60K - ₹5L</div>
              <div className="text-slate-400 text-sm">Fast, quality, dedicated team</div>
            </div>
            <div className="space-y-2">
              <div className="text-slate-400 text-sm uppercase tracking-wider">Freelancers</div>
              <div className="text-white text-2xl font-bold">₹10K - ₹50K</div>
              <div className="text-slate-500 text-sm">Inconsistent, risky, limited scope</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
