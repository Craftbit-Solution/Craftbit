"use client"

import PortfolioHero from './components/PortfolioHero'
import WhatWeCreate from './components/WhatWeCreate'
import WhyChooseUs from './components/WhyChooseUs'
import CTASection from './components/CTASection'
import ProjectSection from './components/ProjectSection'

export default function Portfolio() {

    return (
        <div className="min-h-screen max-w-6xl mx-auto">   
            <PortfolioHero />
            <ProjectSection />
            <WhatWeCreate />
            <WhyChooseUs />
            <CTASection />
        </div>
    )
}
