'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Code2, ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Refer & Earn', href: '/refer-and-earn' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

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
        className={`relative w-full max-w-5xl transition-all duration-300 ${scrolled
          ? 'border-[#0D3082]/15 bg-white/95 shadow-lg shadow-[#0D3082]/10'
          : 'border-[#0D3082]/08 shadow-[#0D3082]/06 bg-white/90 shadow-md'
          } flex h-[60px] items-center justify-between rounded-2xl border px-6 backdrop-blur-xl`}
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          {/* Symbol only on mobile */}
          <img
            src="./images/craftbit-symbol.png"
            alt="CraftBit"
            className="h-9 w-auto rounded-lg object-contain sm:hidden"
          />
          {/* Full logo on sm+ */}
          <img
            src="./images/craftbit-logo.png"
            alt="CraftBit"
            className="hidden h-10 w-auto rounded-lg object-contain sm:block sm:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <LayoutGroup id="desktop-nav">
          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors duration-150"
                  style={{
                    color: isActive ? '#0D3082' : 'rgba(13,48,130,0.65)',
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-pill"
                      className="absolute inset-0 rounded-lg bg-[#0D3082]/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </LayoutGroup>

        {/* Desktop CTA */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-4 py-2 text-[13.5px] font-semibold text-white shadow-md shadow-[#0D3082]/25 transition-all duration-150 hover:-translate-y-px hover:opacity-90"
          >
            Get a free quote
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="hover:bg-[#0D3082]/08 rounded-lg p-1.5 text-[#0D3082] transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? 'close' : 'open'}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="border-[#0D3082]/08 absolute top-[calc(100%+10px)] right-0 left-0 z-50 rounded-2xl border bg-white p-3 shadow-xl shadow-[#0D3082]/10"
            >
              <LayoutGroup id="mobile-nav">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.05,
                        duration: 0.22,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="relative block rounded-xl px-3.5 py-2.5 text-[15px] font-medium transition-colors duration-150"
                        style={{
                          color: isActive ? '#0D3082' : 'rgba(13,48,130,0.70)',
                        }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="mobile-active-pill"
                            className="absolute inset-0 rounded-xl bg-[#0D3082]/10"
                            transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                          />
                        )}
                        <span className="relative z-10">{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </LayoutGroup>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.18 }}
                className="bg-[#0D3082]/08 my-2 h-px"
              />

              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 flex w-full items-center justify-center gap-1.5 rounded-xl bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-4 py-3 text-[15px] font-semibold text-white shadow-md shadow-[#0D3082]/20"
                >
                  Get a free quote
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
