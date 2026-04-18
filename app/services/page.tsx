'use client';

import IncludedWithProject from './components/included-with-project';
import OurApproach from './components/our-approach';
import ProcessSection from './components/processes';
import ServiceHero from './components/service-hero';
import ServicesLists from './components/service-list';

export default function ServicesPage() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      <ServiceHero />
      {/* <div className="w-[100%] mx-auto border-t border-grey-400" /> */}
      <ServicesLists />
      <IncludedWithProject />
      <OurApproach />
      <ProcessSection />
    </div>
  );
}
