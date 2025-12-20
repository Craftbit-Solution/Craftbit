"use client";

import { ArrowRight, Sparkles, Workflow } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ServiceHero() {
    return (
        <>
            <section className="relative flex items-center overflow-hidden">
                {/* Grid Pattern */}
                {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" /> */}

                <div className="relative px-6 py-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8"
                            >
                                <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}>
                                    <Sparkles className="w-4 h-4" />
                                </motion.div>
                                <span className="text-sm font-semibold">Our Services</span>
                            </motion.div>


                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                                Web solutions tailored to {" "}
                                <span className="relative">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                                        your business
                                    </span>
                                </span>
                            </h1>


                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                From simple business websites to complex SaaS applications, we have the expertise to bring your vision to life.                            </p>


                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-[var(--radius)] px-8 h-14 text-base font-medium group">
                                    Get a Free Quate
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right */}
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative flex items-center justify-center"
                        >
                            {/* Glow background */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-[420px] h-[420px] rounded-full bg-blue-500/10 blur-3xl" />
                            </div>

                            {/* Decorative rings */}
                            <div className="absolute w-[460px] h-[460px] rounded-full border border-blue-200/40" />
                            <div className="absolute w-[520px] h-[520px] rounded-full border border-blue-100/30" />

                            {/* Image container */}
                            <div className="relative z-10  flex items-center justify-center">

                                <div className="relative flex items-center justify-center w-64 sm:w-80 lg:w-[400px] aspect-square">

                                    <div className="absolute inset-0 rounded-full border-2 border-blue-400 shadow-2xl shadow-blue-300/40 pointer-events-none" />

                                    <img
                                        // src="https://i.pinimg.com/1200x/33/ae/98/33ae98d3f7ee3f79ce452e81299d200b.jpg"
                                        src="/images/services_hero_image.png"
                                        alt="Services Hero"
                                        className="w-full h-full object-contain"
                                    />
                                </div>


                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-slate-100"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                                            <Workflow className="text-blue-600 w-5 h-5" />
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">
                                            Scalable Solutions
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    )
}
