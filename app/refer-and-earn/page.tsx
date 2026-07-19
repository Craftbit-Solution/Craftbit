import EarningPotential from './components/earning-potential';
import HowItWorks from './components/how-it-works';
import ReferCTA from './components/refer-cta';
import ReferHero from './components/refer-hero';

export default function ReferAndEarn() {
  return (
    <main>
      <ReferHero />
      <EarningPotential />
      <HowItWorks />
      <ReferCTA />
    </main>
  );
}
