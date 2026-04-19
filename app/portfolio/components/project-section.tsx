'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper from '@/components/shared/section-wrapper';

const categories: string[] = [
  'All',
  'Web Development',
  'E-Commerce',
  'UI/UX Design',
  'Branding',
];

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  live_url: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Organic Store',
    category: 'E-Commerce',
    description:
      'An organic products store where customers can browse and buy natural food products.',
    image:
      'https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    live_url: 'https://organicstore.vercel.app/',
  },
  {
    id: 2,
    title: 'Luxe Fashion Store',
    category: 'E-Commerce',
    description:
      'Premium e-commerce experience for a luxury fashion brand with a focus on conversion.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Custom Theme', 'SEO'],
    live_url: '',
  },
  {
    id: 3,
    title: 'HealthHub App',
    category: 'UI/UX Design',
    description:
      'Modern healthcare platform redesign improving usability and user engagement.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['Figma', 'User Research', 'Prototyping'],
    live_url: '',
  },
  {
    id: 4,
    title: 'Finova Banking',
    category: 'Web Development',
    description:
      'Secure digital banking solution with analytics dashboard and financial tools.',
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Security'],
    live_url: '',
  },
  {
    id: 5,
    title: 'Artisan Marketplace',
    category: 'E-Commerce',
    description:
      'Multi-vendor marketplace connecting independent artisans with global customers.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['WooCommerce', 'Multi-vendor', 'Payments'],
    live_url: '',
  },
  {
    id: 6,
    title: 'Zenith Branding',
    category: 'Branding',
    description:
      'Complete brand identity for a tech startup — logo, guidelines, and asset library.',
    image:
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
    tags: ['Logo Design', 'Brand Guide', 'Identity'],
    live_url: '',
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? 'bg-linear-to-r from-[#0D3082] to-[#3E92CC] text-white shadow-md shadow-[#0D3082]/20'
                : 'border border-[#0D3082]/12 bg-white text-[#0D3082]/70 hover:bg-[#0D3082]/5'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="group border-[#0D3082]/08 hover:shadow-[#0D3082]/08 overflow-hidden rounded-2xl border bg-white transition-all duration-300 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#0D3082]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {project.live_url && (
                    <Button
                      onClick={() => window.open(project.live_url, '_blank')}
                      className="rounded-full bg-white px-5 text-sm font-semibold text-[#0D3082] hover:bg-white/90"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View live
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5 text-[#3E92CC]" />
                  <span className="text-xs font-medium text-[#3E92CC]">
                    {project.category}
                  </span>
                </div>
                <h3 className="mb-1.5 text-base font-semibold text-[#0D3082] transition-colors group-hover:text-[#3E92CC]">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-[#0D3082]/60">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#0D3082]/05 rounded-full px-2.5 py-1 text-xs font-medium text-[#0D3082]/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
