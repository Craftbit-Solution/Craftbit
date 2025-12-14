

"use client";

import { Code2, ShoppingCart, Globe, Rocket, RefreshCw, Wrench, ArrowRight, CheckCircle2, MessageCircle, Calendar, Check, MagnetIcon, CheckCheck, Gift, Play, Star, Icon } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

const services: any[] = [
    {
        icon: Code2,
        title: 'Custom Web Applications',
        description: 'Tailored solutions for booking systems, dashboards, CRM tools, and internal business applications.',
        features: [
            'Custom functionality for your workflow',
            'Scalable architecture',
            'API integrations',
            'Admin dashboard included',
            'Mobile responsive',
        ],
        priceRange: '₹1,50,000 - ₹5,00,000',
        targetAudience: 'Growing businesses, startups, companies with specific workflows',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
        popular: true,
    },
    {
        icon: ShoppingCart,
        title: 'E-commerce Platforms',
        description: 'High-converting online stores with seamless checkout, inventory management, and payment integration.',
        features: [
            'Product catalog management',
            'Secure payment gateway',
            'Order tracking system',
            'Inventory management',
            'SEO optimized',
        ],
        priceRange: '₹1,00,000 - ₹2,50,000',
        targetAudience: 'D2C brands, retail businesses going online, established shops',
        color: 'from-purple-500 to-purple-600',
        bgColor: 'bg-purple-50',
    },
    {
        icon: Globe,
        title: 'Business Websites',
        description: 'Professional, fast, and conversion-focused websites that establish your online presence.',
        features: [
            'Modern, responsive design',
            'Contact forms & lead capture',
            'Google Analytics setup',
            'SEO foundation',
            'Fast loading speed',
        ],
        priceRange: '₹60,000 - ₹1,20,000',
        targetAudience: 'Service businesses, local companies, professionals',
        color: 'from-green-500 to-green-600',
        bgColor: 'bg-green-50',
    },
    {
        icon: Rocket,
        title: 'SaaS Development',
        description: 'Full-featured SaaS products from MVP to scale, built for growth and sustainability.',
        features: [
            'User authentication & roles',
            'Subscription billing',
            'Multi-tenant architecture',
            'API development',
            'Analytics dashboard',
        ],
        priceRange: '₹3,00,000 - ₹10,00,000+',
        targetAudience: 'Funded startups, entrepreneurs with validated ideas',
        color: 'from-blue-500 to-blue-600',
        bgColor: 'bg-blue-50',
    },
    {
        icon: RefreshCw,
        title: 'Website Redesign',
        description: 'Modernize your existing website with improved design, performance, and user experience.',
        features: [
            'Complete visual overhaul',
            'Performance optimization',
            'Mobile responsiveness',
            'Content migration',
            'SEO preservation',
        ],
        priceRange: '₹50,000 - ₹1,50,000',
        targetAudience: 'Established businesses with outdated websites',
        color: 'from-pink-500 to-pink-600',
        bgColor: 'bg-pink-50',
    },

];

const maintenance = {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, security patches, and improvements to keep your site running smoothly.',
    features: [
        'Regular updates & backups',
        'Security monitoring',
        'Performance optimization',
        'Content updates',
        'Priority support',
    ],
    priceRange: '₹10,000 - ₹30,000/month',
    targetAudience: 'All businesses needing ongoing website care',
    color: 'from-slate-500 to-slate-600',
    bgColor: 'bg-slate-100',
}

export default function ServicesLists() {

    return (
        <>
            <section className="py-4 lg:py-4">
                <div className="max-w-7xl mx-auto px-8 lg:px-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
                                Explore Our {" "} <span className="relative">
                                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                                        Professional Services and Solutions.
                                    </span>
                                </span>
                            </h1>
                            <p>Explore our professional services and solutions designed to help businesses grow, including web applications, e-commerce platforms, and SaaS development</p>
                        </div>
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} service={service} index={index} />
                        ))}
                    </div>

                    <div className="flex flex-col bg-white rounded-[var(--radius)] shadow-lg border border-slate-100 overflow-hidden p-4 lg:p-6 mt-4 space-y-4">

                        <div className="flex items-start gap-4">
                            <div className={`w-14 h-14 rounded-[var(--radius)] ${maintenance.bgColor} flex items-center justify-center mb-2`}>
                                <Wrench className={`h-7 w-7 bg-gradient-to-br ${maintenance.color} text-white rounded-[var(--radius)] p-1.5`} />
                            </div>

                            <div className="flex-1 space-y-1">
                                <h3 className="text-xl font-bold text-slate-900">{maintenance.title}</h3>
                                <p className="text-slate-600">{maintenance.description}</p>
                            </div>
                        </div>

                        <ul className="flex flex-wrap gap-4 mt-2">
                            {maintenance.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-[var(--radius)]">
                                    <div className="w-5 h-5 flex items-center justify-center bg-green-100 rounded-[var(--radius)]">
                                        <Check className="h-3 w-3 text-green-600" />
                                    </div>
                                    <span className="text-sm text-slate-600">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-2 text-lg">
                            <span className="font-medium text-slate-500">Starting from:</span> <span className="text-slate-900 font-semibold">{maintenance.priceRange}</span>
                        </div>

                        <div className="flex flex-col lg:flex-row items-center justify-between mt-2 gap-4">
                            <div className="flex-1 px-4 py-2 bg-slate-50 rounded-[var(--radius)]">
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Perfect for</span>
                                <p className="text-sm text-slate-700 mt-1">{maintenance.targetAudience}</p>
                            </div>

                            <Button className="h-10 rounded-[var(--radius)] bg-slate-900 hover:bg-slate-800 text-white px-6">
                                Get Started
                                <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />

                            </Button>
                        </div>

                    </div>
                </div>

            </section>
        </>
    )
}
