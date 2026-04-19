'use client';
import { motion, Variants } from 'framer-motion';
import { Code2, Database, Palette } from 'lucide-react';
import SectionWrapper from '@/components/shared/section-wrapper';

const team = [
  {
    role: 'Full-stack development',
    icon: Code2,
    description:
      "End-to-end web applications — from database design to frontend implementation. We handle the full build so you don't need to coordinate multiple contractors.",
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    role: 'UI & frontend design',
    icon: Palette,
    description:
      'Clean, fast, responsive interfaces that look professional and convert. No templates — every design is built for your specific product and audience.',
    skills: ['UI/UX Design', 'Figma', 'Tailwind CSS', 'Animations'],
  },
  {
    role: 'Backend & infrastructure',
    icon: Database,
    description:
      'Reliable APIs, secure data handling, and deployment infrastructure that scales as your business grows.',
    skills: ['REST APIs', 'Cloud Hosting', 'Security', 'DevOps'],
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TheTeam() {
  return (
    <SectionWrapper className="py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-6 flex items-center justify-center gap-3"
      >
        <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
        <span className="text-xs font-medium tracking-widest text-[#3E92CC] uppercase">
          Our capabilities
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
        className="mb-12 text-center"
      >
        <h2 className="mb-4 text-3xl leading-tight font-bold tracking-tight text-[#0D3082] sm:text-4xl">
          What our team covers
        </h2>
        <p className="mx-auto max-w-lg text-lg leading-relaxed text-[#0D3082]/60">
          Three focused areas of expertise — handled in-house, not outsourced.
        </p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {team.map((member, index) => (
          <motion.div
            key={member.role}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={index + 2}
            className="border-[#0D3082]/08 hover:shadow-[#0D3082]/08 flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3E92CC]/10">
              <member.icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
            </div>
            <h3 className="mb-3 text-base font-semibold text-[#0D3082]">
              {member.role}
            </h3>
            <p className="mb-5 flex-1 text-sm leading-relaxed text-[#0D3082]/60">
              {member.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {member.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-[#0D3082]/05 rounded-full px-2.5 py-1 text-xs font-medium text-[#0D3082]/65"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={6}
        className="border-[#0D3082]/08 mt-8 rounded-2xl border bg-[#f0f4ff] px-6 py-5 text-center"
      >
        <p className="text-sm leading-relaxed text-[#0D3082]/70">
          We&apos;re a small, focused team — which means you get{' '}
          <span className="font-semibold text-[#0D3082]">direct access</span> to
          the people actually building your product, not a rotating cast of
          junior developers.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
