import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Search, Zap, Shield, GraduationCap, Headphones, BarChart3, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import SectionLabel from './SectionLabel';

export default function IncludedWithProject() {
  const features: any[] = [
    {
      icon: Monitor,
      title: "Responsive Design",
      description: "Perfect on all devices",
    },
    {
      icon: Search,
      title: "SEO Foundation",
      description: "Ready for search engines",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Fast loading speeds",
    },
    {
      icon: Shield,
      title: "Security",
      description: "SSL & best practices",
    },
    {
      icon: GraduationCap,
      title: "Training",
      description: "Learn to manage your site",
    },
    {
      icon: Headphones,
      title: "Support",
      description: "30 days post-launch support",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Google Analytics setup",
    },
    {
      icon: RefreshCw,
      title: "Revisions",
      description: "Until you're satisfied",
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const titleVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-6  px-6">

      <SectionLabel text={"All Inclusive"} />
      
      <div className="">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 leading-tight"
          >
            What's included with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              every project
            </span>
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            No hidden costs. Every project comes with these essentials.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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
                <Card className="overflow-hidden p-2 lg:p-6 mt-4 gap-0 hover:shadow-xl transition-all duration-300">

                  {/* Checkmark Badge - Top Right */}
                  <motion.div
                    className="absolute -top-1 -right-3 w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </motion.div>

                  {/* Icon Container */}
                  <motion.div
                    className="mb-4 relative"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>

                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
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
