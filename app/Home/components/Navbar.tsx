"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full max-w-5xl relative transition-all duration-300 ${
          scrolled
            ? "bg-white/95 border-[#0D3082]/15 shadow-lg shadow-[#0D3082]/10"
            : "bg-white/90 border-[#0D3082]/08 shadow-md shadow-[#0D3082]/06"
        } backdrop-blur-xl border rounded-2xl px-6 h-[60px] flex items-center justify-between`}
      >
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-[34px] h-[34px] rounded-[9px] bg-linear-to-br from-[#0D3082] to-[#3E92CC] flex items-center justify-center shrink-0">
            <Code2 className="w-[18px] h-[18px] text-white" strokeWidth={2.2} />
          </div>
          <span className="font-bold text-[1.05rem] text-[#0D3082] tracking-tight font-display">
            Craft<span className="text-[#3E92CC]">Bit</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#0D3082]/65 hover:text-[#0D3082] hover:bg-[#0D3082]/08 px-3.5 py-1.5 rounded-lg transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2 shrink-0">
          <button className="flex items-center gap-1.5 text-[13.5px] font-semibold text-white bg-linear-to-r from-[#0D3082] to-[#3E92CC] px-4 py-2 rounded-full shadow-md shadow-[#0D3082]/25 hover:opacity-90 hover:-translate-y-px transition-all duration-150">
            Get a free quote
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen((p) => !p)}
          className="md:hidden p-1.5 rounded-lg hover:bg-[#0D3082]/08 transition-colors text-[#0D3082]"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white border border-[#0D3082]/08 rounded-2xl shadow-xl shadow-[#0D3082]/10 p-3 z-50"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[15px] font-medium text-[#0D3082]/70 hover:text-[#0D3082] hover:bg-[#0D3082]/08 px-3.5 py-2.5 rounded-xl transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-[#0D3082]/08 my-2" />
              <button className="w-full bg-linear-to-r from-[#0D3082] to-[#3E92CC] text-white text-[15px] font-semibold py-3 rounded-xl shadow-md shadow-[#0D3082]/20 mt-1">
                Get a free quote →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
