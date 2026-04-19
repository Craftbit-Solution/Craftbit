'use client';

import PortfolioHero from './components/PortfolioHero';
import WhatWeCreate from './components/WhatWeCreate';
import WhyChooseUs from './components/WhyChooseUs';
import CTASection from './components/CTASection';
import ProjectSection from './components/ProjectSection';

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
