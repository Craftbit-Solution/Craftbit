'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/shared/logo';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Refer & Earn', href: '/refer-and-earn' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300',
          menuOpen && 'border-rule bg-paper',
          !menuOpen && scrolled && 'border-rule bg-paper/80 backdrop-blur-md',
          !menuOpen && !scrolled && 'border-transparent bg-transparent',
        )}
      >
        <div className="section-x mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 lg:h-16">
          <Link
            href="/"
            className="relative z-10 flex shrink-0 items-center text-ink"
            onClick={() => setMenuOpen(false)}
          >
            <Logo className="h-6 md:h-7" />
          </Link>

          {/* Desktop / tablet nav — centered via absolute */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center md:flex md:gap-0.5 lg:gap-1"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'relative whitespace-nowrap px-2 py-1.5 text-caption font-medium tracking-normal transition-colors duration-150 lg:px-3 lg:py-2 lg:text-body',
                    isActive
                      ? 'text-ink'
                      : 'text-ink-muted hover:text-ink',
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute inset-x-2 bottom-0.5 h-px bg-ember lg:inset-x-3 lg:bottom-1"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop / tablet CTA + mobile toggle */}
          <div className="relative z-10 flex shrink-0 items-center gap-2">
            <Link
              href="/contact"
              className="hidden h-8 items-center gap-1.5 whitespace-nowrap rounded-md bg-ember px-3 text-caption font-medium tracking-normal text-paper transition-opacity duration-150 hover:opacity-90 md:inline-flex lg:h-9 lg:gap-1.5 lg:px-4 lg:text-body"
            >
              Get a free quote
              <ArrowRight className="size-3.5 shrink-0" strokeWidth={2.5} />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="rounded-md p-2 text-ink transition-colors hover:bg-ink/5 md:hidden"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              {menuOpen ? (
                <X className="size-5" strokeWidth={2} />
              ) : (
                <Menu className="size-5" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Sibling of header so backdrop-filter does not trap position:fixed */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            className="fixed inset-0 z-40 flex flex-col bg-paper pt-14 md:hidden"
          >
            <nav
              className="section-x flex flex-1 flex-col justify-center overflow-y-auto"
              aria-label="Mobile"
            >
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{
                      delay: 0.04 * index,
                      duration: 0.28,
                      ease,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block border-b border-rule py-4 text-subhead transition-colors',
                        isActive
                          ? 'text-ink'
                          : 'text-ink-muted hover:text-ink',
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.22, duration: 0.28, ease }}
              className="section-x border-t border-rule py-5"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-ember px-4 text-body font-medium text-paper transition-opacity hover:opacity-90"
              >
                Get a free quote
                <ArrowRight className="size-4" strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
