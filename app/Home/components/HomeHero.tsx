"use client";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Shield,
  Clock,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const guarantees = [
  {
    icon: Shield,
    iconBg: "#eef3ff",
    iconColor: "#0D3082",
    title: "30-day money-back",
    desc: "Not happy? Full refund, no questions.",
  },
  {
    icon: Clock,
    iconBg: "#f0fdf4",
    iconColor: "#16a34a",
    title: "On-time delivery",
    desc: "Late? Your first revision is free.",
  },
  {
    icon: MessageCircle,
    iconBg: "#fffbeb",
    iconColor: "#b45309",
    title: "48h response",
    desc: "Always reachable, always responsive.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HomeHero() {
  return (
    <section className="relative z-10 select-text">
      <div className="px-6 pt-12 pb-20 relative z-10">
        <div className="text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f0f4ff] border border-[#0D3082]/12 text-[#0D3082] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-sm font-medium">
              Now taking new projects for Q2 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-[#0D3082] leading-[1.12] tracking-tight"
          >
            Your business, built
            <br />
            <span className="relative inline-block">
              <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
                for the digital age
              </span>
              <motion.svg
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.7 }}
                className="absolute -bottom-2 left-0 w-full pointer-events-none"
                viewBox="0 0 300 10"
                fill="none"
              >
                <motion.path
                  d="M2 7C55 2 110 2 160 5.5C200 8.5 250 5 298 3"
                  stroke="url(#g1)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0D3082" />
                    <stop offset="100%" stopColor="#3E92CC" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 text-lg md:text-xl text-[#0D3082]/60 max-w-[560px] mx-auto leading-relaxed"
          >
            We build{" "}
            <span className="text-[#0D3082] font-medium">
              fast, conversion-focused websites
            </span>{" "}
            and digital products for growing businesses. From design to
            deployment — you get a partner, not just a vendor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] hover:opacity-90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-xl shadow-[#0D3082]/25 hover:shadow-2xl hover:shadow-[#0D3082]/30 transition-all duration-300 group"
            >
              Get a free consultation
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-[1.5px] border-[#0D3082]/20 text-[#0D3082] px-8 py-6 rounded-full text-base font-medium hover:bg-[#0D3082]/5 hover:border-[#3E92CC] transition-all duration-300 group bg-white"
            >
              <Monitor className="mr-2 w-4 h-4 text-[#3E92CC]" />
              See our work
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-14 flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-[620px] mx-auto"
          >
            {guarantees.map((g) => {
              const Icon = g.icon;
              return (
                <div
                  key={g.title}
                  className="flex items-start gap-3 flex-1 px-4 py-4 rounded-xl border border-[#0D3082]/12 bg-[#fafbff] text-left"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: g.iconBg }}
                  >
                    <Icon
                      className="w-4 h-4"
                      style={{ color: g.iconColor }}
                      strokeWidth={2.2}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D3082] leading-snug">
                      {g.title}
                    </p>
                    <p className="text-xs text-[#0D3082]/55 mt-0.5 leading-snug">
                      {g.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
