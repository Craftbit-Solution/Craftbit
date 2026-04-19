import OurStory from './components/our-story';
import AboutHero from './components/about-hero';
import CraftSection from './components/craft-section';
import FeaturesSection from './components/feature-section';
import TheTeam from './components/the-team';

export default function About() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <AboutHero />
      <OurStory />
      <CraftSection />
      <FeaturesSection />
      <TheTeam />
    </div>
  );
}
