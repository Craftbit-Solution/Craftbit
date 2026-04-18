"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description:
      "Over 8 years of experience delivering high-quality digital solutions for businesses worldwide.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "We respect deadlines and deliver projects on schedule without compromising quality.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "24/7 support and maintenance to ensure your digital presence runs smoothly.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description:
      "Recognized for excellence in web design and user experience innovation.",
  },
];

const checkItems = [
  "Custom-tailored solutions",
  "Transparent pricing",
  "Agile methodology",
  "Post-launch support",
  "SEO optimization",
  "Security-first approach",
];

export default function WhyChooseUs() {
  const textVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-0 mb-8">
      <motion.div
        className="flex items-center justify-center gap-3 mb-2"
        variants={textVariants}
      >
        <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
        <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
          Why CraftBit
        </span>
        <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
      </motion.div>

      <div className="px-6 mt-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <SectionHeader
              label="Why CraftBit"
              title="Building Digital Excellence Together"
              description="We don't just build websites — we craft digital experiences that transform businesses and captivate audiences."
              centered={false}
            />

            <div className="mt-10 grid grid-cols-2 gap-4">
              {checkItems.map((item, index) => (
                <AnimatedSection key={item} delay={index * 0.05}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#3E92CC]/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-[#3E92CC]" />
                    </div>
                    <span className="text-[#0D3082]/70 text-sm font-medium">
                      {item}
                    </span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`p-6 rounded-2xl transition-all duration-300 ${
                    index === 0
                      ? "bg-linear-to-br from-[#0D3082] to-[#3E92CC] text-white shadow-xl shadow-[#0D3082]/20"
                      : "bg-white shadow-lg shadow-[#0D3082]/5 border border-[#0D3082]/5 hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      index === 0 ? "bg-white/20" : "bg-[#3E92CC]/10"
                    }`}
                  >
                    <feature.icon
                      className={`w-6 h-6 ${index === 0 ? "text-white" : "text-[#3E92CC]"}`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${index === 0 ? "text-white" : "text-[#0D3082]"}`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed ${index === 0 ? "text-white/80" : "text-[#0D3082]/60"}`}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
