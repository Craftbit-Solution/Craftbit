"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Monitor, Clock, Shield, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Code2,
    title: "Built by engineers",
    description:
      "Every site is built for performance and scale — not just made to look good in a browser.",
  },
  {
    icon: Monitor,
    title: "End-to-end ownership",
    description:
      "Design, development, and deployment — all handled by us. No handoffs, no gaps.",
  },
  {
    icon: Clock,
    title: "Agency speed, minus the bureaucracy",
    description:
      "No approval chains. You talk to whoever is building your product, directly.",
  },
  {
    icon: Shield,
    title: "Freelancer flexibility, minus the risk",
    description: "We show up, meet deadlines, and don't disappear mid-project.",
  },
];

const comparisons = [
  {
    label: "Large Agencies",
    price: "₹5L+",
    desc: "High cost, slow turnaround, multiple middlemen",
    featured: false,
  },
  {
    label: "CraftBit",
    price: "Starting ₹50K",
    desc: "Quality work, direct team, honest timelines",
    featured: true,
  },
  {
    label: "Freelancers",
    price: "₹10K–₹40K",
    desc: "Lower cost, but inconsistent and limited in scope",
    featured: false,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function CraftStudio() {
  return (
    <section className="py-8">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
          <span className="text-[#3E92CC] font-medium text-xs tracking-widest uppercase">
            Our positioning
          </span>
          <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D3082] leading-tight mb-5 tracking-tight">
            The sweet spot between{" "}
            <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
              agency and freelancer
            </span>
          </h2>
          <p className="text-lg text-[#0D3082]/60 leading-relaxed">
            Agencies charge too much and move too slow. Freelancers are
            affordable but risky. We&apos;re built to give you the best of both
            — without the tradeoffs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-5">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 2}
              whileHover={{ scale: 1.01 }}
              className="flex items-start gap-4 bg-white border border-[#0D3082]/08 rounded-2xl p-6 hover:shadow-lg hover:shadow-[#0D3082]/08 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#3E92CC]/10 flex items-center justify-center shrink-0">
                <reason.icon
                  className="w-5 h-5 text-[#3E92CC]"
                  strokeWidth={2}
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0D3082] mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  {reason.title}
                </h3>
                <p className="text-sm text-[#0D3082]/60 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={6}
          className="bg-[#0D3082] rounded-2xl p-6 sm:p-8"
        >
          <div className="flex flex-col sm:grid sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x sm:divide-white/10">
            {comparisons.map((col) => (
              <div
                key={col.label}
                className={`relative rounded-xl sm:rounded-none px-5 py-4 sm:py-2 sm:px-6 text-center
          ${
            col.featured
              ? "bg-[#3E92CC]/15 border border-[#3E92CC]/30 sm:border-0 sm:bg-transparent"
              : "bg-white/5 sm:bg-transparent"
          }`}
              >
                {col.featured && (
                  <div className="hidden sm:block absolute inset-0 bg-[#3E92CC]/15 border border-[#3E92CC]/30 rounded-xl" />
                )}

                <div className="flex sm:flex-col items-center sm:items-center justify-between sm:justify-center gap-3 sm:gap-0">
                  <div
                    className={`text-xs font-semibold tracking-widest uppercase sm:mb-2 min-w-[100px] sm:min-w-0 text-left sm:text-center
              ${col.featured ? "text-[#3E92CC]" : "text-white/40"}`}
                  >
                    {col.label}
                  </div>

                  <div className="relative text-white font-bold text-xl sm:text-2xl sm:mb-2 font-display text-right sm:text-center">
                    {col.price}
                  </div>

                  <div
                    className={`hidden sm:block relative text-xs leading-relaxed text-center
              ${col.featured ? "text-white/75" : "text-white/40"}`}
                  >
                    {col.desc}
                  </div>
                </div>

                <p
                  className={`sm:hidden text-xs mt-1.5 text-left leading-relaxed
          ${col.featured ? "text-white/70" : "text-white/35"}`}
                >
                  {col.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-xs text-[#0D3082]/50 mt-3">
          Pricing varies by project scope.{" "}
          <span className="text-[#0D3082] font-medium cursor-pointer hover:text-[#3E92CC] transition-colors">
            Get a free quote →
          </span>
        </p>
      </div>
    </section>
  );
}
