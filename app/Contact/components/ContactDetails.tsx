'use client'
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
        <>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8">
                    Get In Touch
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-4">
                    Let's build something{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                        great together
                    </span>
                </h1>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Ready to start your project? Fill out the form or reach out directly.
                    We typically respond within 24 hours.
                </p>

                {/* Contact Methods */}
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.05 }}
                        >
                            {method.href ? (
                                <Card className="block overflow-hidden p-4 mt-2 gap-0 space-y-4 hover:shadow-xl transition-all duration-300">
                                    <a
                                        href={method.href}
                                        target={method.href.startsWith('http') ? '_blank' : undefined}
                                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className={`w-10 h-10 rounded-xl ${method.color} flex items-center justify-center shrink-0`}>
                                                <method.icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-slate-900 mb-0.5">{method.title}</h3>
                                                <p className="text-xs text-slate-500 mb-1">{method.description}</p>
                                                <p className="text-sm font-medium text-slate-700">{method.value}</p>
                                            </div>
                                        </div>
                                    </a>
                                </Card>

                            ) : (
                                <Card className="block overflow-hidden p-4 mt-2 gap-0 space-y-4 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-3">
                                        <div className={`w-10 h-10 rounded-xl ${method.color} flex items-center justify-center shrink-0`}>
                                            <method.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-slate-900 mb-0.5">{method.title}</h3>
                                            <p className="text-xs text-slate-500 mb-1">{method.description}</p>
                                            <p className="text-sm font-medium text-slate-700">{method.value}</p>
                                        </div>
                                    </div>
                                </Card>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Book a Call CTA */}
                <div className="p-6 bg-slate-900 rounded-[var(--radius)]">
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
                </div>
            </motion.div>
        </>
    )
}
