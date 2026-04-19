'use client';
import { Button } from '@/components/ui/button';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ExternalLink, Layers } from 'lucide-react';
import { useState } from 'react';

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
  color: string;
};
const projects: Project[] = [
  {
    id: 1,
    title: 'Organic Store',
    category: 'E-Commerce',
    description:
      'An Organic Products website, Where person can buy all the Organics Food products.',
    image:
      'https://user-images.githubusercontent.com/106812942/278866276-08e3e6cb-0648-4adb-a9fa-891a98e27d33.png',
    tags: ['React', 'Node.js', 'MongoDB'],
    live_url: 'https://organicstore.vercel.app/',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Luxe Fashion Store',
    category: 'E-Commerce',
    description:
      'Premium e-commerce experience for a luxury fashion brand with 200% increase in conversions.',
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
    tags: ['Shopify', 'Custom Theme', 'SEO'],
    live_url: '',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'HealthHub App',
    category: 'UI/UX Design',
    description:
      'Modern healthcare platform redesign that improved user engagement by 150%.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
    tags: ['Figma', 'User Research', 'Prototyping'],
    live_url: '',
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Finova Banking',
    category: 'Web Development',
    description:
      'Secure digital banking solution with advanced analytics and financial tools.',
    image:
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    tags: ['Next.js', 'TypeScript', 'Security'],
    live_url: '',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    id: 5,
    title: 'Artisan Marketplace',
    category: 'E-Commerce',
    description:
      'Multi-vendor marketplace connecting artisans with global customers.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tags: ['WooCommerce', 'Multi-vendor', 'Payments'],
    live_url: '',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 6,
    title: 'Zenith Branding',
    category: 'Branding',
    description:
      'Complete brand identity design for a tech startup including logo, guidelines, and assets.',
    image:
      'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
    tags: ['Logo Design', 'Brand Guide', 'Identity'],
    live_url: '',
    color: 'from-yellow-500 to-orange-500',
  },
];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };
  return (
    <>
      <section className="py-12">
        <motion.div
          className="mb-2 flex items-center justify-center gap-3"
          variants={textVariants}
        >
          <div className="h-px w-12 bg-linear-to-r from-transparent to-blue-500" />
          <span className="text-sm font-medium tracking-wider text-blue-600 uppercase">
            Projects
          </span>
          <div className="h-px w-12 bg-linear-to-l from-transparent to-blue-500" />
        </motion.div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? 'bg-linear-to-r from-[#0D3082] to-[#3E92CC] text-white shadow-lg shadow-[#0D3082]/25'
                : 'border border-[#0D3082]/10 bg-white text-[#0D3082]/70 hover:bg-[#0D3082]/5'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      <section className="py-16">
        <div className="mx-auto px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group relative overflow-hidden rounded-xl bg-white shadow-lg shadow-[#0D3082]/5 transition-all duration-500 hover:shadow-xl hover:shadow-[#0D3082]/10"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                      animate={{
                        scale: hoveredProject === project.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <div
                      className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80`}
                    />

                    <div className="absolute inset-0 border-2 border-transparent transition-all duration-500 group-hover:border-white/20" />

                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      initial={false}
                    >
                      <Button
                        variant="secondary"
                        onClick={() => window.open(project.live_url, '_blank')}
                        className="cursor-pointer rounded-full bg-white px-6 text-[#0D3082] hover:bg-white/90"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </Button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <Layers className="h-4 w-4 text-[#3E92CC]" />
                      <span className="text-sm font-medium text-[#3E92CC]">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-[#0D3082] transition-colors group-hover:text-[#3E92CC]">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-[#0D3082]/60">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#0D3082]/5 px-3 py-1 text-xs font-medium text-[#0D3082]/70"
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
        </div>
      </section>
    </>
  );
}
