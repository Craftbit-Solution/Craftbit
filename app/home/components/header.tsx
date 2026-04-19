import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  centered?: boolean;
  light?: boolean;
}
export default function SectionHeader({
  label,
  title,
  description,
  centered = true,
  light = false,
}: Readonly<SectionHeaderProps>) {
  return (
    <div
      className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-4 inline-block rounded-full px-4 py-1.5 text-sm font-medium ${
            light
              ? 'bg-white/10 text-white/90'
              : 'bg-[#3E92CC]/10 text-[#3E92CC]'
          }`}
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl leading-tight font-bold md:text-4xl lg:text-5xl ${
          light ? 'text-white' : 'text-[#0D3082]'
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg ${
            light ? 'text-white/70' : 'text-[#0D3082]/60'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
