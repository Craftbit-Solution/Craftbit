import { Card } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { MessageCircle, Gem, Clock, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: MessageCircle,
    title: 'Crystal Clear Communication',
    description:
      'Real-time updates, transparent timelines, and always a direct line to your dedicated team.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Gem,
    title: 'Uncompromising Quality',
    description:
      'Every pixel, every line of code is crafted to meet the highest standards of excellence.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Reliable Delivery',
    description:
      'We respect your time. Projects delivered on schedule, every single time.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Headphones,
    title: 'Long-term Partnership',
    description:
      'Beyond launch support, maintenance, and continuous optimization for lasting success.',
    gradient: 'from-green-500 to-emerald-500',
  },
];

export default function WhyChooseUs() {
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
        className="mt-6 mb-2 flex items-center justify-center gap-3"
        variants={textVariants}
      >
        <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
        <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
          {' '}
          Why Choose us
        </span>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
      </motion.div>
      <div className="mt-8 px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Why Partner With Us
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            What sets us apart in a crowded digital landscape.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -5 }}>
                <Card className="group h-full border border-slate-100 bg-white px-3 py-4 shadow-sm transition-all duration-500 hover:shadow-xl">
                  <div className="flex items-start gap-6">
                    <div
                      className={`h-14 w-14 shrink-0 rounded-2xl bg-linear-to-br ${reason.gradient} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <reason.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-slate-900 group-hover:text-blue-600">
                        {reason.title}
                      </h3>
                      <p className="leading-relaxed text-slate-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
