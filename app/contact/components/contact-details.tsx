'use client';

import { motion, type Variants } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Eyebrow } from '@/components/design';
import { cn } from '@/lib/utils';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'For detailed inquiries or proposals',
    value: 'hello@craftbit.in',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=hello@craftbit.in&su=Inquiry: Project',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon–Sat, 10 AM – 7 PM IST',
    value: '+91 62018 55200',
    secondary: '+91 78704 02553',
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
    description: 'Remote-first studio',
    value: 'Remote',
    href: null,
  },
] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.06 + i * 0.07,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ContactDetails() {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        custom={0}
      >
        <Eyebrow>Reach us directly</Eyebrow>
        <h2 className="mt-3 text-heading font-medium tracking-tight text-ink">
          Prefer to skip the form?
        </h2>
        <p className="mt-3 max-w-[40ch] text-body text-ink-muted">
          Email or call works fine. We respond to all messages within 24 hours
          — usually faster.
        </p>
      </motion.div>

      <ul className="mt-8 flex flex-col gap-1">
        {contactMethods.map((method, index) => {
          const Icon = method.icon;
          const content = (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-40px' }}
              custom={index + 1}
              className={cn(
                'group flex items-start gap-4 rounded-md border border-transparent px-3 py-3 transition-colors',
                method.href && 'hover:border-rule hover:bg-ink/2',
              )}
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-md border border-rule bg-paper">
                <Icon className="size-4 text-ember" strokeWidth={2} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-ink">{method.title}</p>
                <p className="mt-0.5 text-caption text-ink-muted">
                  {method.description}
                </p>
                <p className="mt-1 text-sm font-medium text-ember transition-colors group-hover:text-ink">
                  {method.value}
                </p>
                {'secondary' in method && method.secondary ? (
                  <p className="text-sm font-medium text-ember/80 transition-colors group-hover:text-ink">
                    {method.secondary}
                  </p>
                ) : null}
              </div>
            </motion.div>
          );

          return (
            <li key={method.title}>
              {method.href ? (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block outline-none focus-visible:rounded-md focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
        custom={6}
        className="mt-6 flex items-start gap-3 border-t border-rule pt-6"
      >
        <span className="mt-1.5 size-2 shrink-0 animate-pulse rounded-full bg-success" />
        <div>
          <p className="text-sm font-medium text-ink">
            Available for new projects
          </p>
          <p className="mt-1 text-caption leading-relaxed text-ink-muted">
            Capacity for 1–2 new projects this quarter. Reach out early to
            secure your spot.
          </p>
        </div>
      </motion.div>
    </aside>
  );
}
