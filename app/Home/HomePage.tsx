import HomeHero from "./components/HomeHero";
import CraftStudio from "./components/CraftStudio";
import WhyChooseUs from "./components/WhyChooseUs";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen max-w-6xl mx-auto pt-20">
        <HomeHero />
        <WhyChooseUs />
        <CraftStudio />
      </div>
    </>
  );
}
