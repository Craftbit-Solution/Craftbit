import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  const textVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12">
      <motion.div
        className="flex items-center justify-center gap-3 mb-8 mt-2"
        variants={textVariants}
      >
        <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
          Vision to Reality
        </span>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6"
          >
            Ready to Build Something
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
              Extraordinary?
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl max-w-2xl mx-auto text-slate-600 leading-relaxed mb-10"
          >
            Let's discuss how we can bring your vision to life with precision,
            passion, and purpose.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <motion.p
            className="mt-8 text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            No commitment required • Free consultation • Response within 24
            hours
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
