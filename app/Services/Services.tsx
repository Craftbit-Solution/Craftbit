'use client';

import IncludedWithProject from './components/IncludedWithProject';
import OurApproach from './components/OurApproach';
import ProcessSection from './components/ProcessSection';
import ServiceHero from './components/ServiceHero';
import ServicesLists from './components/ServicesLists';

export default function Services() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl">
      {/* Hero Section */}
      <ServiceHero />

      {/* <div className="w-[100%] mx-auto border-t border-grey-400" /> */}

      {/* Service Section */}
      <ServicesLists />

      <IncludedWithProject />

      {/* Our Approach */}
      <OurApproach />

      {/* Lounch Steps */}
      <ProcessSection />
    </div>
  );
}
