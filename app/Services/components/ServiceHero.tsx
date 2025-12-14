"use client";

import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ServiceHero() {
    return (
        <>
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            {/* Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius)] bg-blue-50 border border-blue-100 mb-4"
                            >
                                <span className="text-sm font-medium text-slate-700">Our Services</span>
                            </motion.div>

                            {/* Headline */}
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                                Web solutions tailored to {" "}
                                <span className="relative">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                                        your business
                                    </span>
                                </span>
                            </h1>

                            {/* Subheading */}
                            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
                                From simple business websites to complex SaaS applications, we have the expertise to bring your vision to life.                            </p>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Button size="lg" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white rounded-[var(--radius)] px-8 h-14 text-base font-medium group">
                                    Get a Free Quate
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                        >
                            <div className="relative bg-white flex items-center justify-center">
                                <div className='flex items-center justify-center  rounded-[50%] p-8 lg:p-10 w-[400px] h-[400px] shadow-4xl shadow-blue-200/50 border border-blue-400'>
                                    <img
                                        src="https://i.pinimg.com/1200x/33/ae/98/33ae98d3f7ee3f79ce452e81299d200b.jpg"
                                        alt="Services Hero"
                                        className="max-h-full w-auto object-contain rounded-[50%]"
                                    />
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

// "https://i.pinimg.com/736x/9c/21/1a/9c211a5c817650599203a3058ba606b3.jpg" 
// "/images/service_hero_img.jpg"
// "https://i.pinimg.com/1200x/33/ae/98/33ae98d3f7ee3f79ce452e81299d200b.jpg"
