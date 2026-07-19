'use client';

import { motion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/shared/section-wrapper';
import { cn } from '@/lib/utils';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  live_url: string;
  status?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Organic Store',
    category: 'E-Commerce',
    description:
      'An e-commerce platform for organic products — live and in active development. Includes an admin dashboard, storefront, payments, product listing, filtering, and search.',
    image: '/images/organic-store.png',
    tags: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    live_url: 'https://organicstore.vercel.app/',
    status: 'Live · Ongoing',
  },
  {
    id: 2,
    title: 'Varsha Farm House',
    category: 'Business Website',
    description:
      'A landing page with a contact page for a countryside farm house property.',
    image: '/images/varsha-farm-house1.png',
    tags: ['React', 'Tailwind CSS'],
    live_url: 'https://www.varshafarmhouse.com/',
  },
  {
    id: 3,
    title: 'Anurag Pandey Portfolio',
    category: 'Portfolio/Profile',
    description: 'A developer portfolio site.',
    image: '/images/anurag-pandey-ap001-portfolio.png',
    tags: ['Next.js', 'Tailwind CSS', 'Three.js'],
    live_url: 'https://demo-anurag-p.vercel.app/',
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.06 + i * 0.08,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ProjectSection() {
  return (
    <SectionWrapper className="pb-16 md:pb-20">
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project, index) => {
          const imageRight = index % 2 === 1;

          return (
            <motion.article
              key={project.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              custom={0}
              className="group grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              <div
                className={cn(
                  'relative aspect-16/10 overflow-hidden rounded-lg border border-rule bg-paper/60',
                  imageRight && 'lg:order-2',
                )}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 32rem, 100vw"
                  priority={index === 0}
                />
              </div>

              <div className={cn(imageRight && 'lg:order-1')}>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-caption font-medium tracking-[0.18em] text-ink-muted uppercase">
                    {project.category}
                  </span>
                  {project.status ? (
                    <>
                      <span
                        className="size-1 rounded-full bg-rule"
                        aria-hidden
                      />
                      <span className="font-mono text-caption font-medium tracking-[0.14em] text-ember uppercase">
                        {project.status}
                      </span>
                    </>
                  ) : null}
                </div>

                <h2 className="mt-4 text-heading font-medium tracking-tight text-ink">
                  {project.title}
                </h2>

                <p className="mt-4 max-w-[52ch] text-subhead text-ink-muted">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-rule bg-paper/60 px-2.5 py-1 text-sm text-ink-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-ember px-6 text-body font-medium text-paper transition-opacity hover:opacity-90"
                >
                  Visit live site
                  <ArrowUpRight className="size-4 shrink-0" strokeWidth={2.5} />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
