'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Thank you!</h3>
                <p className="text-slate-600 mb-6">
                    We've received your message and will get back to you within 24 hours.
                </p>
                <Button
                    variant="outline"
                    onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            service: '',
                            budget: '',
                            message: '',
                        });
                    }}
                    className="rounded-full"
                >
                    Send another message
                </Button>
            </motion.div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
            >
                <Card className="overflow-hidden p-4 lg:p-6 mt-4 gap-0 space-y-4 hover:shadow-xl transition-all duration-300">

                    <div className="flex items-center gap-2 mb-6">
                        <Clock className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-slate-600">Average response time: 4 hours</span>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name *</Label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    className="h-10 py-2 rounded-[var(--radius)] border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address *</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    className="h-10 py-2 rounded-[var(--radius)] border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="h-10 py-2 rounded-[var(--radius)] border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Company Name</Label>
                                <Input
                                    id="company"
                                    placeholder="Your Company"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="h-10 py-2 rounded-[var(--radius)] border-slate-200 focus:border-orange-500 focus:ring-orange-500"
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label>Service Interested In *</Label>
                                <Select
                                    value={formData.service}
                                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                                    required
                                >
                                    <SelectTrigger className="h-10 w-full min-w-0 rounded-[var(--radius)] border-slate-200">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="custom-web-app">Custom Web Application</SelectItem>
                                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                                        <SelectItem value="business-website">Business Website</SelectItem>
                                        <SelectItem value="saas">SaaS Development</SelectItem>
                                        <SelectItem value="redesign">Website Redesign</SelectItem>
                                        <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Budget Range *</Label>
                                <Select
                                    value={formData.budget}
                                    onValueChange={(value) => setFormData({ ...formData, budget: value })}
                                    required
                                >
                                    <SelectTrigger className="h-10 w-full min-w-0 rounded-[var(--radius)] border-slate-200">
                                        <SelectValue placeholder="Select budget range" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                                        <SelectItem value="1l-2l">₹1,00,000 - ₹2,00,000</SelectItem>
                                        <SelectItem value="2l-5l">₹2,00,000 - ₹5,00,000</SelectItem>
                                        <SelectItem value="5l+">₹5,00,000+</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">Project Details *</Label>
                            <Textarea
                                id="message"
                                placeholder="Tell us about your project, goals, and timeline..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                rows={5}
                                className="rounded-[var(--radius)] h-16 border-slate-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full h-12 mt-2 rounded-[var(--radius)] bg-slate-900 hover:bg-slate-800 text-white font-medium text-base"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-5 w-5" />
                                    Send Message
                                </>
                            )}
                        </Button>

                        <p className="text-center text-sm text-slate-500 mt-2">
                            By submitting this form, you agree to our privacy policy.
                        </p>


                        <div className="p-6 bg-slate-900 rounded-[var(--radius)] mt-12">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                                    <Clock className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">Fast & reliable response</h3>
                                    <p className="text-sm text-slate-400">We'll respond within 24 hours. No spam, guaranteed.</p>
                                </div>
                            </div>
                        </div>
                    </form>

                </Card>

            </motion.div>


        </>

    );
}
