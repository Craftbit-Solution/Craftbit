import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '../components/shared/navbar';
import Footer from '@/components/shared/footer';
import Notice from '@/components/shared/notice';
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
  title: 'Craftbit',
  description: 'A web development company focused on quality and performance.',
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
        <Notice />
        <div className="mx-auto min-h-screen max-w-7xl pt-20">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
