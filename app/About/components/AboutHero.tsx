"use client";


import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Palette, Zap } from 'lucide-react';

export default function AboutHero() {
    const floatingIcons = [
        { icon: Code2, delay: 0, x: '10%', y: '20%' },
        { icon: Palette, delay: 0.2, x: '85%', y: '15%' },
        { icon: Zap, delay: 0.4, x: '75%', y: '75%' },
        { icon: Sparkles, delay: 0.6, x: '15%', y: '70%' },
    ];

    return (
        <section className="relative flex items-center justify-center overflow-hidden">

            {/* Floating icons */}
            {floatingIcons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: item.delay + 0.8, duration: 0.5 }}
                    className="absolute hidden lg:block"
                    style={{ left: item.x, top: item.y }}
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 3 + index, ease: "easeInOut" }}
                        className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-blue-500/10 flex items-center justify-center border border-slate-100"
                    >
                        <item.icon className="w-6 h-6 text-blue-500" />
                    </motion.div>
                </motion.div>
            ))}

            <div className="relative py-12 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 border border-blue-100 mb-8"
                >
                     <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                    <span className="text-sm font-medium text-blue-700">Digital Web-Crafting Studio</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
                >
                    <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                        We Craft Digital
                    </span>
                    <br />
                    <span className="bg-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        Experiences
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12"
                >
                    CraftBit helps early-stage startups turn ideas into polished, high-impact digital products. 
                    We design and build clean, fast, and scalable websites that grow with your business from day one.
                </motion.p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-8 lg:gap-16"
                >
                    {[
                        { value: '50+', label: 'Projects Delivered' },
                        { value: '98%', label: 'Client Satisfaction' },
                        { value: '3x', label: 'Faster Launch Time' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
