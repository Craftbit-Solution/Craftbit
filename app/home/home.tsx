import HomeHero from './components/hero';
import CraftStudio from './components/craft-studio';
import WhyChooseUs from './components/why-choose-us';

export default function HomePage() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl">
      <HomeHero />
      <WhyChooseUs />
      <CraftStudio />
    </div>
  );
}
