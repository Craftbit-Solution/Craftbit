'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Palette } from 'lucide-react';

export default function TheTeam() {
  const team: any[] = [
    {
      role: 'Full-Stack Developer',
      icon: Code2,
      experience: '8+ years',
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      description:
        'Architecting robust, scalable solutions that power your business',
    },
    {
      role: 'Frontend Specialist',
      icon: Palette,
      experience: '6+ years',
      skills: ['UI/UX', 'React', 'Animation', 'Performance'],
      description: 'Crafting pixel-perfect interfaces that users love',
    },
    {
      role: 'Backend Engineer',
      icon: Database,
      experience: '7+ years',
      skills: ['APIs', 'Databases', 'Security', 'DevOps'],
      description: 'Building reliable infrastructure that scales with you',
    },
  ];
  return (
    <section className="py-8">
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-4xl font-bold text-blue-500 md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-400">
            Three specialists, one unified vision: building exceptional web
            solutions
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative rounded-2xl border border-slate-700 bg-slate-800 p-8 transition-colors group-hover:border-amber-500/50">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10">
                  <member.icon className="h-8 w-8 text-amber-400" />
                </div>

                <h3 className="mb-2 text-2xl font-bold text-white">
                  {member.role}
                </h3>
                <p className="mb-4 font-medium text-amber-400">
                  {member.experience} experience
                </p>
                <p className="mb-6 text-slate-400">{member.description}</p>

                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill: any) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-700 px-3 py-1 text-sm text-slate-300"
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
  );
}
