"use client";

import CTASection from './components/CTASection';
import IncludedWithProject from './components/IncludedWithProject';
import OurAppeoach from './components/OurAppeoach';
import ProcessSection from './components/ProcessSection';
import ServiceHero from './components/ServiceHero';
import ServicesLists from './components/ServicesLists';

export default function Services() {


    return (
        <div className="min-h-screen max-w-7xl mx-auto">

            {/* Hero Section */}
            <ServiceHero />

            <div className="w-[100%] mx-auto border-t border-grey-400" />

            {/* Service Section */}
            <ServicesLists />
            
            <IncludedWithProject />

            {/* Our Approach */}
            <OurAppeoach />

            {/* Lounch Steps */}
            <ProcessSection />

        </div>
    );
}


