
"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ContactHero() {
    return (
        <>
            <section className="pt-4 mb-12">
                <div className="">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    // className="text-center"
                    >

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
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
                            Let’s Create Something {" "}

                            <span className="text-blue-500">
                                Thoughtful
                            </span>
                        </h1>
                        <p className="mt-6 text-xl text-slate-600">
                            From early concepts to growing platforms, we partner with startups to build digital experiences that feel intentional, perform reliably, and grow alongside the business behind them.                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
