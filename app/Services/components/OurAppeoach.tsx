import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

export default function OurAppeoach() {

    const approaches: any[] = [
        {
            number: "1",
            title: "Understand First",
            description: "We start by deeply understanding your goals, users, and challenges to ensure the solution fits your needs perfectly."
        },
        {
            number: "2",
            title: "Design & Iterate",
            description: "We craft elegant, user-centered designs through rapid prototyping and continuous feedback loops."
        },
        {
            number: "3",
            title: "Build & Scale",
            description: "We develop robust, scalable solutions using modern technologies that grow with your business."
        }
    ];

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageStackVariants: any = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <SectionLabel text={"How We Work"} />

            <div className="flex items-center justify-center py-6 px-4">

                <div className="w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Left Side - Stacked Image Cards */}
                        <motion.div
                            className="relative h-[400px] md:h-[480px] flex items-center justify-center order-2 lg:order-1"
                            initial="hidden"
                            animate="visible"
                            variants={imageStackVariants}
                        >
                            {/* Background Card 3 */}
                            <motion.div
                                className="absolute w-[280px] md:w-[340px] h-[320px] md:h-[380px] rounded-3xl bg-blue-100/60 border border-blue-200/50 shadow-lg"
                                style={{
                                    transform: 'rotate(-6deg) translateX(-20px) translateY(-15px)',
                                }}
                                whileHover={{ rotate: -8, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Background Card 2 */}
                            <motion.div
                                className="absolute w-[280px] md:w-[340px] h-[320px] md:h-[380px] rounded-3xl bg-blue-200/50 border border-blue-300/50 shadow-xl"
                                style={{
                                    transform: 'rotate(-3deg) translateX(-10px) translateY(-8px)',
                                }}
                                whileHover={{ rotate: -4, scale: 1.02 }}
                                transition={{ duration: 0.4 }}
                            />


                            {/* Main Image Card */}
                            <motion.div
                                className="relative w-[280px] md:w-[340px] h-[320px] md:h-[380px] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden group"
                                whileHover={{ scale: 1.03, y: -5 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {/* Image */}
                                <img
                                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Decorative Corner Element */}
                                <motion.div
                                    className="absolute bottom-0 left-0 w-24 h-24"
                                    initial={{ pathLength: 0 }}
                                >
                                    <svg viewBox="0 0 100 100" className="w-full h-full">
                                        <motion.path
                                            d="M 0 100 Q 0 50 50 50 Q 100 50 100 0"
                                            fill="none"
                                            stroke="#3B82F6"
                                            strokeWidth="3"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1.5, delay: 0.8 }}
                                        />
                                    </svg>
                                </motion.div>
                            </motion.div>

                            {/* Floating Decorative Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-2xl opacity-20"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-6 left-10 w-12 h-12 bg-blue-400 rounded-xl opacity-30"
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                            />
                        </motion.div>

                        {/* Right Side - Content */}
                        <motion.div
                            className="order-1 lg:order-2"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >


                            {/* Main Title */}
                            <motion.h2
                                variants={itemVariants}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mt-4 mb-6 leading-tight"
                            >
                                Our <span className="text-blue-600">Approach</span>
                            </motion.h2>

                            {/* Subtitle */}
                            <motion.p
                                variants={itemVariants}
                                className="text-slate-600 text-lg md:text-xl leading-relaxed mb-6 max-w-lg"
                            >
                                We focus on delivering simple, scalable, and user-centric digital solutions that create real value for businesses.
                            </motion.p>

                            {/* Approach Steps */}
                            <div className="space-y-8">
                                {approaches.map((approach, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="group"
                                    >
                                        <div className="flex gap-5">
                                            {/* Number Badge */}
                                            <div className="flex-shrink-0">
                                                <motion.div
                                                    className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300"
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <span className="text-white font-bold text-lg">{approach.number}</span>
                                                </motion.div>
                                            </div>

                                            {/* Content */}
                                            <div className="">
                                                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                                    {approach.title}
                                                </h3>
                                                <p className="text-slate-500 leading-relaxed">
                                                    {approach.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    );
}
