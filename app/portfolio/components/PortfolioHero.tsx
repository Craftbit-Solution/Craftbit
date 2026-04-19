"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full blur-3xl -translate-x-1/2"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
          <span className="text-sm font-semibold">Our Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
        >
          Projects That
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-blue-600"
            animate={{ backgroundPosition: ["0%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{ backgroundSize: "200%" }}
          >
            Speak For Themselves
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
        >
          Explore our collection of successful projects that showcase our
          expertise in creating exceptional digital experiences.
        </motion.p>
      </div>
    </section>
  );
}
