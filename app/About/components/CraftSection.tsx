import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MessageSquare, Hammer, Code, Zap, Layers, CheckCircle2 } from 'lucide-react';

export default function CraftSection() {
    
    const craftPoints: any[] = [
        { icon: MessageSquare, text: 'Clear Communication' },
        { icon: Clock, text: 'On-Time Delivery' },
        { icon: Code, text: 'Clean and maintainable code' },
        { icon: Zap, text: 'Performance and responsiveness' },
        { icon: Layers, text: 'Thoughtful UI that feels intuitive and modern' },
    ];


    return (
        <section className="relative py-12">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
                    Our Guarantee
                </h2>
                <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
                    We're committed to your success at every step of the journey
                </p>
            </motion.div>

            <div className="px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative">
                            {/* Main card */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8">
                                <div className="space-y-6">
                                    {craftPoints.map((point, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-4 group"
                                        >
                                            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                                <point.icon className="w-6 h-6 text-blue-400" />
                                            </div>
                                            <span className="text-white font-medium">{point.text}</span>
                                            <CheckCircle2 className="w-5 h-5 text-green-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative code lines */}
                                <div className="mt-8 pt-8 border-t border-slate-700">
                                    <div className="space-y-2">
                                        <div className="h-3 bg-slate-700 rounded-full w-3/4" />
                                        <div className="h-3 bg-slate-700/50 rounded-full w-1/2" />
                                        <div className="h-3 bg-blue-500/30 rounded-full w-2/3" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating accent card */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -right-6 -bottom-6 bg-blue-500 rounded-2xl p-6 shadow-xl shadow-blue-500/30"
                            >
                                <div className="text-white">
                                    <div className="text-3xl font-bold">100%</div>
                                    <div className="text-blue-100 text-sm">Satisfaction Rate</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
                            <Hammer className="w-4 h-4 text-blue-500" />
                            <span className="text-sm font-medium text-blue-700">Our Digital Craft</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            More Than Just
                            <span className="block text-blue-500">Building Websites</span>
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            We don't just build websites — we help startups establish credibility,
                            communicate value, and convert users.
                        </p>

                        <p className="text-slate-500 leading-relaxed mb-8">
                            From the first wireframe to the final deployment, we focus on creating
                            digital experiences your users trust and your team can confidently grow on.
                        </p>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                                </div>
                                <div>
                                    <div className="font-semibold text-slate-900 mb-1">Our Goal Is Simple</div>
                                    <p className="text-slate-600 text-sm">
                                        Build digital experiences your users trust and your team can confidently grow on.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
             
        </section>
    );
}
