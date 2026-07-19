import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';

export default function Footer() {
  const links = {
    services: [
      { name: 'Custom Web Apps', path: 'Services' },
      { name: 'E-commerce', path: 'Services' },
      { name: 'Business Websites', path: 'Services' },
      { name: 'SaaS Development', path: 'Services' },
    ],
    company: [
      { name: 'About Us', path: 'About', href: '/about' },
      { name: 'Portfolio', path: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', path: 'Contact', href: '/contact' },
      { name: 'Pricing', path: 'Pricing', href: '/pricing' },
      { name: 'Refer & Earn', path: 'Refer & Earn', href: '/refer-and-earn' },
    ],
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          <div className="lg:col-span-1">
            <div className="mb-4 inline-flex items-center rounded-md bg-white/5 ring-1 ring-white/10">
              <img
                src="./images/craftbit-logo.png"
                alt="CraftBit"
                className="h-10 w-auto rounded-md object-contain"
              />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              A dedicated team of developers delivering premium web solutions
              without agency overhead.
            </p>
          </div>

          <div>
            <Eyebrow className="mb-3 text-slate-500">Services</Eyebrow>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <div className="group flex items-center text-sm text-slate-400 transition-colors hover:text-white">
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-3 text-slate-500">Company</Eyebrow>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-3 text-slate-500">Contact</Eyebrow>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@craftbit.in"
                  className="flex items-center gap-3 rounded-md border border-white/8 bg-white/3 px-3 py-2.5 transition-colors hover:border-white/15 hover:bg-white/5"
                >
                  <Mail
                    className="size-3.5 shrink-0 text-slate-500"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-slate-200">
                    hello@craftbit.in
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-start gap-3 rounded-md border border-white/8 bg-white/3 px-3 py-2.5 transition-colors hover:border-white/15 hover:bg-white/5"
                >
                  <Phone
                    className="mt-0.5 size-3.5 shrink-0 text-slate-500"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm leading-snug text-slate-200">
                    +91 6201855200
                    <br />
                    +91 7870402553
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/craftbit-digital-solution/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-md border border-white/8 bg-white/3 px-3 py-2.5 transition-colors hover:border-white/15 hover:bg-white/5"
                >
                  <Linkedin
                    className="size-3.5 shrink-0 text-slate-500"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-slate-200">
                    CraftBit Digital Solution
                  </span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 rounded-md border border-white/8 bg-white/3 px-3 py-2.5">
                  <MapPin
                    className="size-3.5 shrink-0 text-slate-500"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-slate-200">Remote</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 py-5 md:flex-row">
          <p className="text-xs text-slate-500">
            © 2025 Craftbit. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-slate-500 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
