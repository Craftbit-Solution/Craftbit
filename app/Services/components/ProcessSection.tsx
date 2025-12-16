import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Palette, Code, Rocket, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SectionLabel from './SectionLabel';
import IconWraper from './IconWraper';

export default function ProcessSection() {
    const steps: any[] = [
        {
            icon: Lightbulb,
            title: "Discovery",
            description: "We dive deep into your business goals, target audience, and competition to create a strategic roadmap.",
        },
        {
            icon: Palette,
            title: "Design",
            description: "We craft beautiful, intuitive designs that align with your brand and resonate with your users.",
        },
        {
            icon: Code,
            title: "Development",
            description: "We build robust, scalable solutions using cutting-edge technologies and best practices.",
        },
        {
            icon: Rocket,
            title: "Launch",
            description: "We deploy your solution with precision, ensuring a smooth launch and ongoing support.",
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
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
        <div className="py-12 px-6">

            <SectionLabel text={"Our Process"} />

            <div className="">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={titleVariants}
                >


                    <motion.h2
                        variants={titleVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6"
                    >
                        From idea to launch in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                            4 simple steps
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={titleVariants}
                        className="text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                    >
                        A transparent, collaborative process that keeps you informed and involved every step of the way.
                    </motion.p>
                </motion.div>

                {/* Process Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative"
                            >
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-24 left-full w-8 h-px bg-gradient-to-r from-blue-300 to-transparent z-0" />
                                )}

                                <Card className="overflow-hidden p-4 lg:p-6 mt-4 h-[300px]  space-y-4 gap-0 hover:shadow-xl transition-all duration-300">

                                    {/* Icon Container */}
                                    <div className="flex-shrink-0">
                                        <IconWraper
                                            element={<Icon className="w-6 h-6 text-white" strokeWidth={2} />}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {step.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
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
                    <Button className={`w-[250px] rounded-[var(--radius)] h-14 font-medium group/btn bg-slate-900 hover:bg-slate-800 text-white`}>
                        Let's Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>

                </motion.div>
            </div>
        </div>
    );
}
