'use client';

import ContactForm from './components/contact-form';
import ContactDetails from './components/contact-details';
import ContactHero from './components/contact-hero';

export default function Contact() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <section className="relative overflow-hidden px-6 py-12">
        <ContactHero />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <ContactDetails />

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
