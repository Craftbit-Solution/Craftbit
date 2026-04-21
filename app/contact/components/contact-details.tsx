'use client';
import { motion, Variants } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries or proposals',
    value: 'faizan.md9735@gmail.com / mdalqma786@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=faizan.md9735@gmail.com&su=Project-Inquiry',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon–Sat, 10 AM – 7 PM IST',
    value: '+91 62018 55200 / +91 7870402553',
    href: 'tel:+916201855200',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick questions and updates',
    value: 'Chat with us',
    href: 'https://wa.me/916201855200',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Remote-first, based in',
    value: 'Remote',
    href: null,
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ContactDetails() {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-8"
      >
        <h2 className="mb-3 text-2xl font-bold tracking-tight text-[#0D3082]">
          Reach us directly
        </h2>
        <p className="leading-relaxed text-[#0D3082]/60">
          Prefer to skip the form? Any of these work fine. We respond to all
          messages within 24 hours — usually faster.
        </p>
      </motion.div>

      <div className="mb-8 flex flex-col gap-3">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const card = (
            <motion.div
              key={method.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
              className="border-[#0D3082]/08 hover:shadow-[#0D3082]/06 flex items-start gap-4 rounded-2xl border bg-[#fafbff] px-5 py-4 transition-all duration-200 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#3E92CC]/10">
                <Icon className="h-5 w-5 text-[#3E92CC]" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0D3082]">
                  {method.title}
                </p>
                <p className="mb-0.5 text-xs text-[#0D3082]/45">
                  {method.description}
                </p>
                <p className="text-sm font-medium text-[#3E92CC]">
                  {method.value}
                </p>
              </div>
            </motion.div>
          );

          return method.href ? (
            <a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {card}
            </a>
          ) : (
            <div key={method.title}>{card}</div>
          );
        })}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={6}
        className="border-[#0D3082]/08 rounded-2xl border bg-[#f0f4ff] px-5 py-4"
      >
        <div className="flex items-start gap-3">
          <span className="mt-1 h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-500" />
          <div>
            <p className="text-sm font-semibold text-[#0D3082]">
              Currently available for new projects
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-[#0D3082]/55">
              We have capacity for 1–2 new projects this quarter. Reach out
              early to secure your spot.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
