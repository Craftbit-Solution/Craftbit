import React from 'react'
import HomeHero from './components/HomeHero'
import CraftStudio from './components/CraftStudio'
import WhyChooseUs from './components/WhyChooseUs'

export default function HomePage() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto">
            <HomeHero />
            <WhyChooseUs />
            <CraftStudio />
        </div>
    )
}
