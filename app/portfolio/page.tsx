'use client';

import PortfolioHero from './components/portfolio-hero';
import WhatWeCreate from './components/what-we-create';
import WhyChooseUs from './components/why-choose-us';
import CTASection from './components/cta-section';
import ProjectSection from './components/project-section';

export default function PortfolioPage() {
  return (
    <main className="bg-white">
      <PortfolioHero />
      <ProjectSection />
      <WhatWeCreate />
      <WhyChooseUs />
      <CTASection />
    </main>
  );
}
