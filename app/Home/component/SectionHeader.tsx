import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ 
  label, 
  title, 
  description,
  centered = true,
  light = false
}: any) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl ${centered ? 'mx-auto' : ''}`}>
      {label && (
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
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
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
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
