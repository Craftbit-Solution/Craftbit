import { motion, Variants } from 'framer-motion';
import {
  Lightbulb,
  Palette,
  Code,
  Rocket,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionLabel from './section-label';
import IconWrapper from './icon-wrapper';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ProcessSection() {
  const steps: Step[] = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description:
        'We dive deep into your business goals, target audience, and competition to create a strategic roadmap.',
    },
    {
      icon: Palette,
      title: 'Design',
      description:
        'We craft beautiful, intuitive designs that align with your brand and resonate with your users.',
    },
    {
      icon: Code,
      title: 'Development',
      description:
        'We build robust, scalable solutions using cutting-edge technologies and best practices.',
    },
    {
      icon: Rocket,
      title: 'Launch',
      description:
        'We deploy your solution with precision, ensuring a smooth launch and ongoing support.',
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants: Variants = {
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
    <div className="px-6 py-12">
      <SectionLabel text={'Our Process'} />

      <div className="">
        ={' '}
        <motion.div
          className="mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2
            variants={titleVariants}
            className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl"
          >
            From idea to launch in{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              4 simple steps
            </span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            A transparent, collaborative process that keeps you informed and
            involved every step of the way.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                variants={cardVariants}
                className="group relative"
              >
                {index < steps.length - 1 && (
                  <div className="absolute top-24 left-full z-0 hidden h-px w-8 bg-linear-to-r from-blue-300 to-transparent lg:block" />
                )}

                <Card className="mt-4 h-[270px] gap-0 space-y-4 overflow-hidden p-4 transition-all duration-300 hover:shadow-xl lg:p-6">
                  <div className="shrink-0">
                    <IconWrapper
                      element={
                        <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                      }
                    />
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {step.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            className={`group/btn h-14 w-[250px] rounded-(--radius) bg-slate-900 font-medium text-white hover:bg-slate-800`}
          >
            Let&apos;s Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
