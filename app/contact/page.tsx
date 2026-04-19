'use client';
import ContactForm from './components/contact-form';
import ContactDetails from './components/contact-details';
import SectionWrapper from '@/components/shared/section-wrapper';

export default function Contact() {
  return (
    <main className="bg-white">
      <SectionWrapper className="pt-28 pb-20">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0D3082]/12 bg-[#f0f4ff] px-4 py-2 text-sm font-medium text-[#0D3082]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3E92CC]" />
            Get in touch
          </div>
          <h1 className="mb-4 text-4xl leading-[1.12] font-bold tracking-tight text-[#0D3082] sm:text-5xl">
            Let&apos;s build something
            <br />
            <span className="bg-linear-to-r from-[#0D3082] to-[#3E92CC] bg-clip-text text-transparent">
              you&apos;re proud of
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-[#0D3082]/60">
            Tell us about your project and we&apos;ll get back to you within 24
            hours. No commitment required.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactDetails />
          <ContactForm />
        </div>
      </SectionWrapper>
    </main>
  );
}
