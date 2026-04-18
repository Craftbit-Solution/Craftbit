"use client";

import { motion, Variants } from "framer-motion";
import { Shield, Clock, Users, Activity, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeader from "./SectionHeader";

const features = [
  {
    icon: Shield,
    title: "On-time delivery",
    description:
      "We set realistic timelines and stick to them. Late delivery means your next revision is on us.",
  },
  {
    icon: Clock,
    title: "48h response",
    description:
      "Every message gets a reply within 48 hours — usually much faster during business hours.",
  },
  {
    icon: Users,
    title: "Direct access",
    description:
      "You talk to the designer and developer directly — no middlemen, no lost-in-translation moments.",
  },
  {
    icon: Activity,
    title: "Performance-first",
    description:
      "Every site we ship is optimized for speed, SEO, and Core Web Vitals out of the box.",
  },
];

const checkItems = [
  "Custom-tailored solutions",
  "Transparent pricing",
  "Fixed-scope contracts",
  "Post-launch support",
  "SEO-ready builds",
  "You own everything",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="py-0 mb-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex items-center justify-center gap-3 mb-12"
      >
        <div className="h-px w-10 bg-linear-to-r from-transparent to-[#3E92CC]" />
        <span className="text-[#3E92CC] font-medium text-xs tracking-widest uppercase">
          Why CraftBit
        </span>
        <div className="h-px w-10 bg-linear-to-l from-transparent to-[#3E92CC]" />
      </motion.div>

      <div className="px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              label=""
              title="What makes working with us different"
              description="We're a small team, which means you get direct access to the people actually building your product — not account managers passing messages around."
              centered={false}
            />

            <div className="mt-10 grid grid-cols-2 gap-3">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-4">
            {features.map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 0.1}
                direction={index % 2 === 0 ? "left" : "right"}
                className="h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="h-full p-6 rounded-2xl border border-[#0D3082]/08 bg-[#fafbff] hover:shadow-lg hover:shadow-[#0D3082]/08 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#3E92CC]/10 flex items-center justify-center mb-4">
                    <feature.icon
                      className="w-5 h-5 text-[#3E92CC]"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#0D3082] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#0D3082]/60 leading-relaxed">
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
