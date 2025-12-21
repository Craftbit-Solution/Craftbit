import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Palette, Handshake } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function FeaturesSection() {

    const features: any[] = [
        {
            icon: Cpu,
            title: 'Modern Technology',
            description: 'Fast, scalable, and future-ready development using modern tools.',
            color: 'blue',
        },
        {
            icon: Brain,
            title: 'Strategic Thinking',
            description: 'Design and structure guided by user behavior and business goals.',
            color: 'violet',
        },
        {
            icon: Palette,
            title: 'Beautiful Design',
            description: 'Minimal, premium UI that feels intentional and professional.',
            color: 'rose',
        },
        {
            icon: Handshake,
            title: 'Reliable Partnership',
            description: 'We work closely with you — like an extended part of your team.',
            color: 'emerald',
        },
    ];

    return (
        <section className="relative py-12">
            <div className="px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >

                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        What We Bring
                        <span className="block text-blue-500">To The Table</span>
                    </h2>

                    <p className="text-lg text-slate-600">
                        Everything you need to launch and scale your digital product, all in one place.
                    </p>
                </motion.div>


                {/* Features grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden p-4 lg:p-6 mt-4 gap-0 space-y-4 h-[250px] hover:shadow-xl transition-all duration-300">

                                {/* Top accent line */}
                                <div className={`absolute top-0 left-8 right-8 h-1  rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity`} />

                                {/* Icon */}
                                <div className={`w-14 h-14 border bg-blue-400 text-white rounded-2xl  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>

                                {/* Content */}
                                <h3 className="text-lg font-bold text-slate-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>

                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
