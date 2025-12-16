"use client";

import { ArrowRight, Check, ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import IconWraper from './IconWraper';

export default function ServiceCard({ service, index }: any) {

    const {
        icon: Icon,
        title,
        description,
        features,
        priceRange,
        targetAudience,
        color = 'from-blue-500 to-blue-600',
        bgColor = 'bg-blue-50',
    } = service;

    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group`}
        >
            <Card className="overflow-hidden p-4 lg:p-6 mt-4 gap-0 space-y-4 hover:shadow-xl transition-all duration-300">
                {/* Icon */}

                <IconWraper
                    element={<Icon className="w-5 h-5 text-white" strokeWidth={2} />}
                />

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">{title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">{description}</p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-sm text-slate-500">Starting from</span>
                    <div className="text-xl font-bold text-slate-900">{priceRange}</div>
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center gap-2 cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700 mb-4"
                >
                    {open ? "See less" : "See more"}
                    {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>

                {open && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">

                        {/* Features */}
                        <ul className="space-y-3 mb-6">
                            {features.map((feature: any, i: number) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-[var(--radius)] bg-green-100 flex items-center justify-center mt-0.5 shrink-0">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <span className="text-sm text-slate-600">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Target Audience */}
                        <div className="px-4 py-2 bg-slate-50 rounded-[var(--radius)] mb-6">
                            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                Perfect for
                            </span>
                            <p className="text-sm text-slate-700 mt-1">{targetAudience}</p>
                        </div>
                    </div>
                )}

                {/* CTA */}
                <Button className={`w-full rounded-[var(--radius)] h-10 font-medium group/btn bg-slate-900 hover:bg-slate-800 text-white`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
            </Card>
        </motion.div>
    );
}
