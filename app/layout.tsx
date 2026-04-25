import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/shared/navbar';
import Footer from '@/components/shared/footer';
import Notice from '@/components/shared/notice';
import { Analytics } from '@vercel/analytics/next';
import WhatsAppFloat from '@/components/shared/whatsapp-float';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'CraftBit | Web Development & Portfolio Websites',
  description:
    'CraftBit builds fast, modern personal websites, portfolios, and business pages. Affordable web development starting at ₹2,500.',
  keywords: [
    'Website Starting at ₹2,500/- - Website in Just 24 Hours',
    'personal website India',
    'portfolio website developer',
    'web development company India',
    'Next.js development',
    'CraftBit',
    'unique website development',
    'professional website in 24 hours',
    'affordable website development India',
    'freelance web developer India',
    'personal portfolio website for developers',
    'business website starting ₹2500',
    'fast website development service',
    'responsive website design India',
    'hire web developer for portfolio website',
    'custom website for freelancers',
    'startup website development India',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(112, 135, 189, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(136, 152, 181, 0.08) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <Navbar />
        <div className="mx-auto min-h-screen max-w-7xl pt-20">
          {children}
          <Analytics />
        </div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
