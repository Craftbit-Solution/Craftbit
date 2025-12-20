import React from 'react'
import HomeHero from './components/HomeHero'
import WhyChooseUs from './components/WhyChoseUs'
import CraftStudio from './components/CraftStudio'

export default function HomePage() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto">
            <HomeHero />
            <WhyChooseUs />
            <CraftStudio />
        </div>
    )
}
