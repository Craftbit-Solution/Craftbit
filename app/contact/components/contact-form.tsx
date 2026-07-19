'use client';

import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  location: string;
  message: string;
};

const empty: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  location: '',
  message: '',
};

const PROJECT_TYPES = [
  { value: 'custom-web-app', label: 'Custom Web Application' },
  { value: 'ecommerce', label: 'E-commerce Platform' },
  { value: 'business-website', label: 'Business Website' },
  { value: 'saas', label: 'SaaS Development' },
  { value: 'redesign', label: 'Website Redesign' },
  { value: 'maintenance', label: 'Maintenance & Support' },
] as const;

const BUDGET_RANGES = [
  { value: 'under-15k', label: 'Under ₹15,000' },
  { value: '15k-40k', label: '₹15,000 – ₹40,000' },
  { value: '40k-80k', label: '₹40,000 – ₹80,000' },
  { value: '80k-plus', label: '₹80,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
] as const;

const COOLDOWN_SECONDS = 45;
const STORAGE_KEY = 'contact_countdown_end';

const fieldClass =
  'h-11 rounded-md border-rule bg-paper text-ink placeholder:text-ink-muted/50 shadow-none focus-visible:border-ember focus-visible:ring-ember/20';

const labelClass = 'text-sm font-medium text-ink';

function SubmitLabel({
  isSubmitting,
  cooldown,
}: {
  isSubmitting: boolean;
  cooldown: number;
}) {
  if (isSubmitting) {
    return (
      <>
        <Loader2 className="size-4 animate-spin" />
        Sending...
      </>
    );
  }

  if (cooldown > 0) {
    return <>Wait {cooldown}s before resending</>;
  }

  return (
    <>
      <Send className="size-4" />
      Send message
    </>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(empty);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const storedEndTime = localStorage.getItem(STORAGE_KEY);
    if (!storedEndTime) return;

    const remaining = Math.ceil((Number(storedEndTime) - Date.now()) / 1000);
    if (remaining > 0) {
      setCooldown(remaining);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.removeItem(STORAGE_KEY);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cooldown > 0 || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const emailParams = {
      message: formData.message,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.service,
      location: formData.location,
      budget: formData.budget,
      title: formData.service,
    };

    emailjs
      .send(
        'service_qg0lsin',
        'template_runly1g',
        { ...emailParams },
        'nofDJb3u1FkZQ7btt',
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData(empty);
          const endTime = Date.now() + COOLDOWN_SECONDS * 1000;
          localStorage.setItem(STORAGE_KEY, endTime.toString());
          setCooldown(COOLDOWN_SECONDS);
        },
        (error: unknown) => {
          console.error('EmailJS Error:', error);
          setSubmitError(
            'Something went wrong sending your message. Please try again, or email us directly at hello@craftbit.in.',
          );
          setIsSubmitting(false);
        },
      );
  };

  const set =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center justify-center rounded-2xl border border-rule bg-paper px-8 py-16 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-success/15">
          <CheckCircle2 className="size-7 text-success" />
        </div>
        <h3 className="text-xl font-medium tracking-tight text-ink">
          Message sent
        </h3>
        <p className="mt-2 max-w-xs text-body text-ink-muted">
          We&apos;ve received your message and will get back within 24 hours.
        </p>
        <Button
          variant="outline"
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError(null);
            setFormData(empty);
          }}
          className="mt-8 h-11 cursor-pointer rounded-md border-rule text-ink hover:bg-ink/5"
        >
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-rule bg-paper p-6 sm:p-8"
    >
      <div className="mb-7">
        <h2 className="text-xl font-medium tracking-tight text-ink">
          Project inquiry
        </h2>
        <p className="mt-1.5 text-sm text-ink-muted">
          Fields marked with * are required.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name" className={labelClass}>
              Full name *
            </Label>
            <Input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={set('name')}
              required
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={formData.email}
              onChange={set('email')}
              required
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone" className={labelClass}>
              Phone
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={set('phone')}
              className={fieldClass}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className={labelClass}>
              Company
            </Label>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              placeholder="Your company"
              value={formData.company}
              onChange={set('company')}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="service" className={labelClass}>
              Project type *
            </Label>
            <Select
              value={formData.service}
              onValueChange={(v) => setFormData((p) => ({ ...p, service: v }))}
            >
              <SelectTrigger
                id="service"
                className={cn(fieldClass, 'w-full')}
              >
                <SelectValue placeholder="Select a project type" />
              </SelectTrigger>
              <SelectContent>
                {PROJECT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input
              type="text"
              required
              value={formData.service}
              onChange={() => {}}
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget" className={labelClass}>
              Budget range *
            </Label>
            <Select
              value={formData.budget}
              onValueChange={(v) => setFormData((p) => ({ ...p, budget: v }))}
            >
              <SelectTrigger id="budget" className={cn(fieldClass, 'w-full')}>
                <SelectValue placeholder="Select a budget range" />
              </SelectTrigger>
              <SelectContent>
                {BUDGET_RANGES.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input
              type="text"
              required
              value={formData.budget}
              onChange={() => {}}
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="location" className={labelClass}>
            Location
          </Label>
          <Input
            id="location"
            name="location"
            autoComplete="address-level2"
            placeholder="Mumbai, India"
            value={formData.location}
            onChange={set('location')}
            className={fieldClass}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className={labelClass}>
            Project details *
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your project, goals, and timeline..."
            value={formData.message}
            onChange={set('message')}
            required
            rows={5}
            className={cn(
              fieldClass,
              'h-auto min-h-34 resize-y py-3',
            )}
          />
        </div>

        {submitError ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-md border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm text-destructive"
          >
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            <p>{submitError}</p>
          </div>
        ) : null}

        <Button
          type="submit"
          disabled={isSubmitting || cooldown > 0}
          className="h-11 w-full cursor-pointer rounded-md bg-ember text-body font-medium text-paper transition-opacity hover:opacity-90 disabled:opacity-60"
        >
          <SubmitLabel isSubmitting={isSubmitting} cooldown={cooldown} />
        </Button>

        <p className="text-center text-caption text-ink-muted">
          No spam. We only use your details to respond to this inquiry.
        </p>
      </form>
    </motion.div>
  );
}
