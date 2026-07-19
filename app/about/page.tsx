import AboutCTA from './components/about-cta';
import AboutHero from './components/about-hero';
import OurStory from './components/our-story';
import Values from './components/values';

export default function About() {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <Values />
      <AboutCTA />
    </main>
  );
}
