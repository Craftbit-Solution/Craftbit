import React from 'react'
import OurStory from './components/OurStory'
import AboutHero from './components/AboutHero'
import CraftSection from './components/CraftSection'
import FeaturesSection from './components/FeaturesSection'
import TheTeam from './components/TheTeam'

export default function About() {
    return (
        <div className="min-h-screen max-w-6xl mx-auto">
            <AboutHero />
            <OurStory />
            <CraftSection />
            <FeaturesSection />
            <TheTeam />
        </div>
    )
}
