import ProfileSection from '../get-a-website/components/profile-section';

export const metadata = {
  title: 'Get a Professional Website | CraftBit',
  description:
    'Build your personal website, portfolio, or business page with CraftBit. Clean, fast, and affordable starting at ₹2,500.',
  keywords: [
    'portfolio website',
    'personal website',
    'business website',
    'web development India',
    'CraftBit',
  ],
};

export default function GetAWebsite() {
  return (
    <main className="bg-white">
      <ProfileSection />
    </main>
  );
}