import PricingCTA from './components/pricing-cta';
import PricingFAQ from './components/pricing-faq';
import PricingHero from './components/pricing-hero';
import PricingPlans from './components/pricing-plan';

export default function PricingPage() {
  return (
    <main className="bg-white">
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
      <PricingCTA />
    </main>
  );
}
