
    "use client";

    import { motion } from 'framer-motion';
    import { Code2, Database, Palette } from 'lucide-react';

    export default function TheTeam() {
        const team: any[] = [
            {
                role: "Full-Stack Developer",
                icon: Code2,
                experience: "8+ years",
                skills: ["React", "Node.js", "PostgreSQL", "AWS"],
                description: "Architecting robust, scalable solutions that power your business"
            },
            {
                role: "Frontend Specialist",
                icon: Palette,
                experience: "6+ years",
                skills: ["UI/UX", "React", "Animation", "Performance"],
                description: "Crafting pixel-perfect interfaces that users love"
            },
            {
                role: "Backend Engineer",
                icon: Database,
                experience: "7+ years",
                skills: ["APIs", "Databases", "Security", "DevOps"],
                description: "Building reliable infrastructure that scales with you"
            }
        ];
        return (
            <>
                <section className="py-8">
                    <div className="px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-10"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-blue-500">
                                Our Team
                            </h2>
                            <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
                                Three specialists, one unified vision: building exceptional web solutions
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700 group-hover:border-amber-500/50 transition-colors">
                                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6">
                                            <member.icon className="w-8 h-8 text-amber-400" />
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-2">{member.role}</h3>
                                        <p className="text-amber-400 font-medium mb-4">{member.experience} experience</p>
                                        <p className="text-slate-400 mb-6">{member.description}</p>

                                        <div className="flex flex-wrap gap-2">
                                            {member.skills.map((skill: any) => (
                                                <span
                                                    key={skill}
                                                    className="px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </>
        )
    }
