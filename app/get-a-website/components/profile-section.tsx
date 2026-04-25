'use client';

import SectionWrapper from '@/components/shared/section-wrapper';

export default function ProfileSection() {
  return (
    <SectionWrapper className="py-16">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D3082]">
          Build your professional online presence
        </h1>
        <p className="mt-3 text-[#0D3082]/60 max-w-xl mx-auto">
          In 2026, your online presence defines your first impression. 
          We help you create a clean, fast, and professional website.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          'Professional single-page website',
          'Portfolio / business info in one place',
          'Fully responsive design',
          'Live website with your personal link',
          'Fast performance & clean UI',
          '6 months free support',
        ].map((item) => (
          <div
            key={item}
            className="rounded-xl border border-[#0D3082]/08 bg-[#fafbff] p-4 text-sm text-[#0D3082]/70"
          >
            ✅ {item}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <p className="text-[#0D3082]/60 mb-4">
          Get a free mockup of your website — no commitment
        </p>

        <a
          href="/contact"
          className="inline-block rounded-full bg-gradient-to-r from-[#0D3082] to-[#3E92CC] px-6 py-3 text-white font-semibold"
        >
          Get your free design
        </a>
      </div>
    </SectionWrapper>
  );
}