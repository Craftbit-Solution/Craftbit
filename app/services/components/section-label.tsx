import { motion, Variants } from 'framer-motion';

export default function SectionLabel({
  text = '',
}: Readonly<{ text: string }>) {
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className="mt-6 mb-2 flex items-center justify-center gap-3"
      variants={textVariants}
    >
      <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
      <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
        {text}
      </span>
      <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
    </motion.div>
  );
}
