
'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeHero() {
    return (
        <section className="relative z-10 select-text">

            <div className="px-6 pt-12 pb-20 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-[#0D3082] text-blue-600 text-sm font-medium mb-8"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                        <span className="text-sm font-semibold">
                            Digital Excellence Delivered
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D3082]"
                    >
                        We Craft Digital
                        <br />
                        <span className="relative inline-block">
                            <span className="text-[#0D3082] animate-gradient">
                                Experiences
                            </span>

                            <motion.svg
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 0.8 }}
                                className="absolute -bottom-2 left-0 w-full pointer-events-none"
                                viewBox="0 0 300 12"
                                fill="none"
                            >
                                <motion.path
                                    d="M2 8C50 2 100 2 150 6C200 10 250 6 298 4"
                                    stroke="url(#gradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#0D3082" />
                                        <stop offset="50%" stopColor="#3E92CC" />
                                        <stop offset="100%" stopColor="#0D3082" />
                                    </linearGradient>
                                </defs>
                            </motion.svg>
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-8 text-lg md:text-xl text-[#0D3082]/60 max-w-2xl mx-auto leading-relaxed"
                    >
                        Transform your vision into reality with our expert web development
                        and design solutions. We build websites that captivate, convert, and scale.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#0D3082] to-[#3E92CC] hover:opacity-90 text-white px-8 py-6 rounded-full text-lg font-medium shadow-xl shadow-[#0D3082]/25 hover:shadow-2xl hover:shadow-[#0D3082]/30 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-[#0D3082]/20 text-[#0D3082] px-8 py-6 rounded-full text-lg font-medium hover:bg-[#0D3082]/5 transition-all duration-300 group"
                        >
                            <Play className="mr-2 w-5 h-5 text-[#3E92CC]" />
                            View Our Work
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
