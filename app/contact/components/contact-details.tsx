'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'For detailed inquiries or proposal',
    value: 'faizan.md9735@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=faizan.md9735@gmail.com&su=Project-Inquery',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Mon-Sat, 10 AM - 7 PM IST',
    value: '+91 6201855200',
    href: 'tel:+6201855200',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick questions & updates',
    value: 'Chat with us',
    href: 'https://wa.me/6201855200',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Remote-first, based in',
    value: 'Jharkhand, India',
    href: null,
    color: 'bg-purple-50 text-purple-600',
  },
];

export default function ContactDetails() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-2 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        >
          <Sparkles className="h-4 w-4" />
        </motion.div>
        <span className="text-sm font-semibold">Get In Touch</span>
      </motion.div>

      <h1 className="mb-4 text-4xl leading-tight font-bold text-slate-900 sm:text-5xl">
        Let&apos;s build something{' '}
        <span className="bg-linear-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
          great together
        </span>
      </h1>

      <p className="mb-6 text-lg leading-relaxed text-slate-600">
        Ready to start your project? Fill out the form or reach out directly. We
        typically respond within 24 hours.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-1">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05 }}
          >
            <Card className="mt-2 block gap-0 space-y-4 overflow-hidden p-4 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start gap-3">
                <div
                  className={`h-10 w-10 rounded-xl ${method.color} flex shrink-0 items-center justify-center`}
                >
                  <method.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-0.5 font-semibold text-slate-900">
                    {method.title}
                  </h3>
                  <p className="mb-1 text-xs text-slate-500">
                    {method.description}
                  </p>
                  <p className="text-sm font-medium text-slate-700">
                    {method.value}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Book a Call CTA */}
      {/* <div className="p-6 bg-slate-900 rounded-[var(--radius)]">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                            <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-white">Free Consultation</h3>
                            <p className="text-sm text-slate-400">
                                Not sure where to start? Book a free 30-minute consultation call.
                            </p>
                        </div>
                    </div>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-white text-slate-900 hover:bg-slate-100 rounded-[var(--radius)] h-12 font-medium">
                            Schedule a Call
                        </Button>
                    </a>
                </div> */}
    </motion.div>
  );
}
