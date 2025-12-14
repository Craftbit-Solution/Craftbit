"use client";

import ServiceHero from './components/ServiceHero';
import ServicesOffering  from './components/ServicesOffering';

export default function Services() {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <ServiceHero />

            <div className="w-[70%] mx-auto border-t border-blue-400" />

            {/* Service Section */}
            <ServicesOffering />

            <div className="w-[70%] mx-auto border-t border-blue-400" />
        </div>
    );
}
