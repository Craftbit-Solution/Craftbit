import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Eyebrow } from '@/components/design';
import { Logo } from '@/components/shared/logo';

export default function Footer() {
  const links = {
    services: [
      { name: 'Custom Web Apps', href: '/services' },
      { name: 'E-commerce', href: '/services' },
      { name: 'Business Websites', href: '/services' },
      { name: 'SaaS Development', href: '/services' },
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
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-16">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex text-paper">
              <Logo className="h-7" />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper/60">
              A dedicated team of developers delivering premium web solutions
              without agency overhead.
            </p>
          </div>

          <div>
            <Eyebrow className="mb-3">Services</Eyebrow>
            <ul className="space-y-2">
              {links.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-3">Company</Eyebrow>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.name}
                    <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow className="mb-3">Contact</Eyebrow>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@craftbit.in"
                  className="flex items-center gap-3 rounded-md border border-paper/8 bg-paper/3 px-3 py-2.5 transition-colors hover:border-paper/15 hover:bg-paper/5"
                >
                  <Mail
                    className="size-3.5 shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-paper/85">
                    hello@craftbit.in
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+916201855200"
                  className="flex items-start gap-3 rounded-md border border-paper/8 bg-paper/3 px-3 py-2.5 transition-colors hover:border-paper/15 hover:bg-paper/5"
                >
                  <Phone
                    className="mt-0.5 size-3.5 shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm leading-snug text-paper/85">
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
                  className="flex items-center gap-3 rounded-md border border-paper/8 bg-paper/3 px-3 py-2.5 transition-colors hover:border-paper/15 hover:bg-paper/5"
                >
                  <Linkedin
                    className="size-3.5 shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-paper/85">
                    CraftBit Digital Solution
                  </span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 rounded-md border border-paper/8 bg-paper/3 px-3 py-2.5">
                  <MapPin
                    className="size-3.5 shrink-0 text-ink-muted"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-sm text-paper/85">Remote</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/15 py-5 md:flex-row">
          <p className="text-xs text-paper/50">
            © 2026 Craftbit. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-paper/50 transition-colors hover:text-paper"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-paper/50 transition-colors hover:text-paper"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
