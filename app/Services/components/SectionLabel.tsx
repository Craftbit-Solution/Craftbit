    import { motion } from 'framer-motion';

    export default function SectionLabel({
        text= ""
    }: any) {

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
            <>
                <motion.div
                    className="flex items-center justify-center gap-3 mb-2 mt-6"
                    variants={textVariants}
                >
                    <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
                    <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">{text}</span>
                    <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
                </motion.div>
            </>
        )
    }
