'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`relative w-full max-w-5xl transition-all duration-300 ${
          scrolled
            ? 'border-[#0D3082]/15 bg-white/95 shadow-lg shadow-[#0D3082]/10'
            : 'border-[#0D3082]/08 shadow-[#0D3082]/06 bg-white/90 shadow-md'
        } flex h-[60px] items-center justify-between rounded-2xl border px-6 backdrop-blur-xl`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[9px] bg-linear-to-br from-[#0D3082] to-[#3E92CC]">
            <Code2 className="h-[18px] w-[18px] text-white" strokeWidth={2.2} />
          </div>
          <span className="font-display text-[1.05rem] font-bold tracking-tight text-[#0D3082]">
            Craft<span className="text-[#3E92CC]">Bit</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:bg-[#0D3082]/08 rounded-lg px-3.5 py-1.5 text-sm font-medium text-[#0D3082]/65 transition-all duration-150 hover:text-[#0D3082]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-4 py-2 text-[13.5px] font-semibold text-white shadow-md shadow-[#0D3082]/25 transition-all duration-150 hover:-translate-y-px hover:opacity-90"
          >
            Get a free quote
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="hover:bg-[#0D3082]/08 rounded-lg p-1.5 text-[#0D3082] transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="border-[#0D3082]/08 absolute top-[calc(100%+10px)] right-0 left-0 z-50 rounded-2xl border bg-white p-3 shadow-xl shadow-[#0D3082]/10"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:bg-[#0D3082]/08 block rounded-xl px-3.5 py-2.5 text-[15px] font-medium text-[#0D3082]/70 transition-all duration-150 hover:text-[#0D3082]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="bg-[#0D3082]/08 my-2 h-px" />
              <Link
                href="/contact"
                className="mt-1 w-full rounded-xl bg-linear-to-r from-[#0D3082] to-[#3E92CC] py-3 text-[15px] font-semibold text-white shadow-md shadow-[#0D3082]/20"
              >
                Get a free quote →
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
