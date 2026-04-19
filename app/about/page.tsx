import AboutHero from './components/about-hero';
import OurStory from './components/our-story';
import CraftSection from './components/craft-section';
import TheTeam from './components/the-team';

export default function About() {
  return (
    <main className="bg-white">
      <AboutHero />
      <OurStory />
      <CraftSection />
      <TheTeam />
    </main>
  );
}
