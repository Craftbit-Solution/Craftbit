import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const links = {
    services: [
      { name: 'Custom Web Apps', path: 'Services' },
      { name: 'E-commerce', path: 'Services' },
      { name: 'Business Websites', path: 'Services' },
      { name: 'SaaS Development', path: 'Services' },
    ],
    company: [
      { name: 'About Us', path: 'About' },
      { name: 'Portfolio', path: 'Portfolio' },
      { name: 'Contact', path: 'Contact' },
    ],
  };

  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:py-24">
          <div className="lg:col-span-1">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-600">
                <span className="text-lg font-bold text-white">CB</span>
              </div>
              <span className="text-xl font-semibold tracking-tight">
                CraftBit<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              A dedicated team of developers delivering premium web solutions
              without agency overhead.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-semibold text-white">Services</h4>
            <ul className="space-y-3">
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
            <h4 className="mb-6 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
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
            <h4 className="mb-6 font-semibold text-white">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:faizan.md9735@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-blue-500" />
                  faizan.md9735@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-blue-500" />
                  +91 6201855200
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 text-blue-500" />
                  Jharkhand, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800 py-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2025 Webcraft Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-slate-500 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
