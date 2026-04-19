import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-12">
      <motion.div
        className="mt-2 mb-8 flex items-center justify-center gap-3"
        variants={textVariants}
      >
        <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
        <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
          Vision to Reality
        </span>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
      </motion.div>

      <div className="relative mx-auto max-w-4xl px-6">
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
            className="mb-6 text-4xl leading-[1.1] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Ready to Build Something
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
              Extraordinary?
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
          >
            Let&apos;s discuss how we can bring your vision to life with
            precision, passion, and purpose.
          </motion.p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>

          <motion.p
            className="mt-8 text-sm text-slate-400"
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
