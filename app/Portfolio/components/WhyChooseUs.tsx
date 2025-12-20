import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MessageCircle, Gem, Clock, Headphones } from "lucide-react";

const reasons = [
    {
        icon: MessageCircle,
        title: "Crystal Clear Communication",
        description: "Real-time updates, transparent timelines, and always a direct line to your dedicated team.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Gem,
        title: "Uncompromising Quality",
        description: "Every pixel, every line of code is crafted to meet the highest standards of excellence.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        icon: Clock,
        title: "Reliable Delivery",
        description: "We respect your time. Projects delivered on schedule, every single time.",
        gradient: "from-orange-500 to-red-500"
    },
    {
        icon: Headphones,
        title: "Long-term Partnership",
        description: "Beyond launch support, maintenance, and continuous optimization for lasting success.",
        gradient: "from-green-500 to-emerald-500"
    }
];

export default function WhyChooseUs() {

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
        <section className="py-12">

            <motion.div
                className="flex items-center justify-center gap-3 mb-2 mt-6"
                variants={textVariants}
            >
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                <span className="text-blue-600 font-medium text-sm tracking-wider uppercase"> Why Choose us</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </motion.div>
            <div className="px-6 mt-8">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Why Partner With Us
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        What sets us apart in a crowded digital landscape.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={reason.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <motion.div
                                whileHover={{ y: -5 }}
                            >
                                <Card
                                    className="group h-full bg-white px-3 py-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
                                >

                                    <div className="flex items-start gap-6">
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <reason.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 mb-2">
                                                {reason.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
