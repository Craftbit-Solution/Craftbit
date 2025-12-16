import { motion } from 'framer-motion';

export default function IconWraper({ element= null }: any) {
    return (
        <>
            <motion.div
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
            >
                <span className="text-white font-bold text-lg">
                    {element}
                </span>
            </motion.div>
        </>
    )
}
