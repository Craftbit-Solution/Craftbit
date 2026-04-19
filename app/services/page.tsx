'use client';

import IncludedWithProject from './components/included-with-project';
import OurApproach from './components/our-approach';
import ProcessSection from './components/processes';
import ServiceHero from './components/service-hero';
import ServicesLists from './components/service-list';

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServiceHero />
      <ServicesLists />
      <IncludedWithProject />
      <OurApproach />
      <ProcessSection />
    </main>
  );
}
