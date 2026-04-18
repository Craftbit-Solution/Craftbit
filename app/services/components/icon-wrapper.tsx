import { motion } from 'framer-motion';

export default function IconWrapper({ element = null }: any) {
  return (
    <motion.div
      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25 transition-shadow duration-300 group-hover:shadow-blue-500/40"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-lg font-bold text-white">{element}</span>
    </motion.div>
  );
}
