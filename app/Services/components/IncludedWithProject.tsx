import { motion } from 'framer-motion';
import {
  Monitor,
  Search,
  Zap,
  Shield,
  GraduationCap,
  Headphones,
  BarChart3,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import SectionLabel from './SectionLabel';
import IconWrapper from './IconWrapper';

export default function IncludedWithProject() {
  const features: any[] = [
    {
      icon: Monitor,
      title: 'Responsive Design',
      description: 'Perfect on all devices',
    },
    {
      icon: Search,
      title: 'SEO Foundation',
      description: 'Ready for search engines',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Fast loading speeds',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'SSL & best practices',
    },
    {
      icon: GraduationCap,
      title: 'Training',
      description: 'Learn to manage your site',
    },
    {
      icon: Headphones,
      title: 'Support',
      description: '30 days post-launch support',
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Google Analytics setup',
    },
    {
      icon: RefreshCw,
      title: 'Revisions',
      description: "Until you're satisfied",
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants: any = {
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
    <div className="px-6 py-6">
      <SectionLabel text={'All Inclusive'} />

      <div className="">
        {/* Header */}
        <motion.div
          className="mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <motion.h2
            variants={titleVariants}
            className="mb-4 text-4xl leading-tight font-bold text-slate-900 md:text-5xl lg:text-6xl"
          >
            What's included with{' '}
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              every project
            </span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl"
          >
            No hidden costs. Every project comes with these essentials.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <Card className="mt-4 gap-0 overflow-hidden p-2 transition-all duration-300 hover:shadow-xl lg:p-4">
                  {/* Checkmark Badge - Top Right */}
                  <motion.div
                    className="absolute top-1 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-green-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                  >
                    <CheckCircle2
                      className="h-5 w-5 text-white"
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <IconWrapper
                    element={
                      <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                    }
                  />
                  {/* Title */}
                  <h3 className="mt-2 mb-1 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
