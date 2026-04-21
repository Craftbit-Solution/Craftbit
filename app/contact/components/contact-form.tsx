'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Send, Loader2, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  location: string;
  message: string;
};

const empty: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  location: '',
  message: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const set =
    (field: keyof FormData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className="border-[#0D3082]/08 flex flex-col items-center justify-center rounded-2xl border bg-[#fafbff] px-8 py-16 text-center"
      >
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-[#0D3082]">Message sent!</h3>
        <p className="mb-8 max-w-xs text-sm leading-relaxed text-[#0D3082]/60">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setFormData(empty);
          }}
          className="hover:bg-[#0D3082]/05 rounded-full border-[#0D3082]/20 text-[#0D3082]"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  const inputClass =
    'h-10 rounded-xl border-[#0D3082]/15 bg-white text-[#0D3082] placeholder:text-[#0D3082]/30 focus:border-[#3E92CC] focus:ring-[#3E92CC]/20 transition-colors';
  const labelClass =
    'text-xs font-medium uppercase tracking-wider text-[#0D3082]/50';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="border-[#0D3082]/08 rounded-2xl border bg-[#fafbff] p-6 lg:p-8"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className={labelClass}>
              Full name *
            </Label>
            <Input
              id="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={set('name')}
              required
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email" className={labelClass}>
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={set('email')}
              required
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="phone" className={labelClass}>
              Phone
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={set('phone')}
              className={inputClass}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="company" className={labelClass}>
              Company
            </Label>
            <Input
              id="company"
              placeholder="Your company"
              value={formData.company}
              onChange={set('company')}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label className={labelClass}>Service *</Label>
            <Select
              value={formData.service}
              onValueChange={(v) => setFormData((p) => ({ ...p, service: v }))}
              required
            >
              <SelectTrigger className="h-10 w-full rounded-xl border-[#0D3082]/15 bg-white text-[#0D3082] focus:border-[#3E92CC]">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="custom-web-app">
                  Custom Web Application
                </SelectItem>
                <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                <SelectItem value="business-website">
                  Business Website
                </SelectItem>
                <SelectItem value="saas">SaaS Development</SelectItem>
                <SelectItem value="redesign">Website Redesign</SelectItem>
                <SelectItem value="maintenance">
                  Maintenance & Support
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="location" className={labelClass}>
              Location
            </Label>
            <Input
              id="location"
              type="tel"
              placeholder="Mumbai, India"
              value={formData.location}
              onChange={set('location')}
              className={inputClass}
            />
          </div>
          {/* <div className="space-y-1.5">
            <Label className={labelClass}>Budget range *</Label>
            <Select
              value={formData.budget}
              onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}
              required
            >
              <SelectTrigger className="h-10 w-full rounded-xl border-[#0D3082]/15 bg-white text-[#0D3082] focus:border-[#3E92CC]">
                <SelectValue placeholder="Select budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50k-1l">₹50,000 – ₹1,00,000</SelectItem>
                <SelectItem value="1l-2l">₹1,00,000 – ₹2,00,000</SelectItem>
                <SelectItem value="2l-5l">₹2,00,000 – ₹5,00,000</SelectItem>
                <SelectItem value="5l+">₹5,00,000+</SelectItem>
              </SelectContent>
            </Select>
          </div> */}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className={labelClass}>
            Project details *
          </Label>
          <Textarea
            id="message"
            placeholder="Tell us about your project, goals, and timeline..."
            value={formData.message}
            onChange={set('message')}
            required
            rows={5}
            className="resize-none rounded-xl border-[#0D3082]/15 bg-white text-[#0D3082] transition-colors placeholder:text-[#0D3082]/30 focus:border-[#3E92CC] focus:ring-[#3E92CC]/20"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 w-full rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] text-base font-semibold text-white shadow-md shadow-[#0D3082]/20 transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send message
            </>
          )}
        </Button>

        <p className="text-center text-xs text-[#0D3082]/40">
          No spam, ever. We&apos;ll only use your details to respond to your
          inquiry.
        </p>
      </form>
    </motion.div>
  );
}
