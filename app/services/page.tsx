'use client';

import IncludedWithProject from './components/included-with-project';
import ProcessSection from './components/processes';
import ServiceHero from './components/service-hero';
import ServicesLists from './components/service-list';

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <ServicesLists />
      <IncludedWithProject />
      <ProcessSection />
    </main>
  );
}
