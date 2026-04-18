import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import IconWrapper from './IconWrapper';

export default function OurApproach() {
  const approaches: any[] = [
    {
      number: '1',
      title: 'Understand First',
      description:
        'We start by deeply understanding your goals, users, and challenges to ensure the solution fits your needs perfectly.',
    },
    {
      number: '2',
      title: 'Design & Iterate',
      description:
        'We craft elegant, user-centered designs through rapid prototyping and continuous feedback loops.',
    },
    {
      number: '3',
      title: 'Build & Scale',
      description:
        'We develop robust, scalable solutions using modern technologies that grow with your business.',
    },
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageStackVariants: any = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <SectionLabel text={'How We Work'} />

      <div className="flex items-center justify-center px-4 py-6">
        <div className="w-full">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Side - Stacked Image Cards */}
            <motion.div
              className="relative order-2 flex h-[400px] items-center justify-center md:h-[480px] lg:order-1"
              initial="hidden"
              animate="visible"
              variants={imageStackVariants}
            >
              {/* Background Card 3 */}
              <motion.div
                className="absolute h-80 w-[280px] rounded-3xl border border-blue-200/50 bg-blue-100/60 shadow-lg md:h-[380px] md:w-[340px]"
                style={{
                  transform:
                    'rotate(-6deg) translateX(-20px) translateY(-15px)',
                }}
                whileHover={{ rotate: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Background Card 2 */}
              <motion.div
                className="absolute h-80 w-[280px] rounded-3xl border border-blue-300/50 bg-blue-200/50 shadow-xl md:h-[380px] md:w-[340px]"
                style={{
                  transform: 'rotate(-3deg) translateX(-10px) translateY(-8px)',
                }}
                whileHover={{ rotate: -4, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />

              {/* Main Image Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <div className="group relative h-80 w-[280px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:h-[380px] md:w-[340px]">
                  {/* Image */}
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=80"
                    alt="Team collaboration"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-blue-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Decorative Corner Element */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-24 w-24"
                    initial={{ pathLength: 0 }}
                  >
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <motion.path
                        d="M 0 100 Q 0 50 50 50 Q 100 50 100 0"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 h-16 w-16 rounded-2xl bg-blue-500 opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-6 left-10 h-12 w-12 rounded-xl bg-blue-400 opacity-30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
            </motion.div>

            {/* Right Side - Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {/* Main Title */}
              <motion.h2
                variants={itemVariants}
                className="mt-4 mb-6 text-4xl leading-tight font-bold text-slate-900 md:text-5xl lg:text-6xl"
              >
                Our <span className="text-blue-600">Approach</span>
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="mb-6 max-w-lg text-lg leading-relaxed text-slate-600 md:text-xl"
              >
                We focus on delivering simple, scalable, and user-centric
                digital solutions that create real value for businesses.
              </motion.p>

              {/* Approach Steps */}
              <div className="space-y-8">
                {approaches.map((approach, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                  >
                    <div className="flex gap-5">
                      {/* Number Badge */}
                      <div className="shrink-0">
                        <IconWrapper element={approach.number} />
                      </div>

                      {/* Content */}
                      <div className="">
                        <h3 className="mb-2 text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                          {approach.title}
                        </h3>
                        <p className="leading-relaxed text-slate-500">
                          {approach.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
