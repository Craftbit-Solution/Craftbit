"use client"
import { motion } from "framer-motion";
import { Sparkles, Target, Shield } from "lucide-react";

export default function WhatWeCreate() {
    const highlights = [
        {
            icon: Sparkles,
            title: "Premium Projects",
            description: "From ambitious startups to enterprise solutions"
        },
        {
            icon: Target,
            title: "Diverse Clientele",
            description: "Partnering with visionaries across industries"
        },
        {
            icon: Shield,
            title: "Quality Assured",
            description: "Every project meets our exacting standards"
        }
    ];

    const textVariants: any = {
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
        <section className="py-6 relative overflow-hidden">
            {/* Subtle Background */}
            <div className="absolute top-0 right-0 w-1/2 h-full" />

            <motion.div
                className="flex items-center justify-center gap-3 mb-2 mt-6"
                variants={textVariants}
            >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                <span className="text-blue-600 font-medium text-sm tracking-wider uppercase"> What We Create</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </motion.div>

            <div className="px-6 mt-8 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Where Vision Meets
                            <span className="text-blue-600"> Precision</span>
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We specialize in creating bespoke digital solutions that transcend expectations.
                            Our portfolio represents partnerships with forward-thinking brands who demand
                            nothing less than extraordinary.
                        </p>
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-slate-900">150+</span>
                                <span className="text-sm text-slate-500">Projects</span>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-slate-900">98%</span>
                                <span className="text-sm text-slate-500">Satisfaction</span>
                            </div>
                            <div className="w-px h-12 bg-slate-200" />
                            <div className="text-center">
                                <span className="block text-4xl font-bold text-slate-900">50+</span>
                                <span className="text-sm text-slate-500">Clients</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ x: 10 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div
                                    className="group flex items-start gap-5 p-6 rounded-[var(--radius)] bg-slate-50"
                                >

                                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md group-hover:shadow-blue-100 transition-all">
                                        <item.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

