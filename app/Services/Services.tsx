"use client";

import ServiceHero from './components/ServiceHero';
import ServicesLists from './components/ServicesLists';

export default function Services() {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <ServiceHero />

            <div className="w-[70%] mx-auto border-t border-blue-400" />

            {/* Service Section */}
            <ServicesLists />

            <div className="w-[70%] mx-auto border-t border-blue-400" />
        </div>
    );
}
