'use client';

import SectionWrapper from '@/components/shared/section-wrapper';
import ContactDetails from './components/contact-details';
import ContactForm from './components/contact-form';
import ContactHero from './components/contact-hero';

export default function Contact() {
  return (
    <main className="bg-paper">
      <ContactHero />

      <SectionWrapper className="pb-20 md:pb-28">
        {/* Compact contact strip — stays visible above the form on mobile */}
        <div className="mb-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-rule pb-6 lg:hidden">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@craftbit.in&su=Inquiry: Project"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ember outline-none transition-colors hover:text-ink focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            hello@craftbit.in
          </a>
          <a
            href="tel:+916201855200"
            className="text-sm font-medium text-ember outline-none transition-colors hover:text-ink focus-visible:ring-[3px] focus-visible:ring-ring/50"
          >
            +91 62018 55200
          </a>
        </div>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="order-2 lg:order-1">
            <ContactDetails />
          </div>
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
