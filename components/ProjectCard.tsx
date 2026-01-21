'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      >
        {/* Project Image */}
        <div className="relative h-64 bg-neutral-100">
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        )}
        {!project.thumbnail && (
          <div className="flex items-center justify-center h-full text-neutral-400">
            <span className="text-lg font-medium">Image Coming Soon</span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          {project.title}
        </h3>

        <p className="text-neutral-600 mb-4 line-clamp-3 flex-grow">
          {project.shortDescription}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* View Details Indicator */}
        <div className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors group">
          View Details
          <HiArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
    </Link>
  );
}
