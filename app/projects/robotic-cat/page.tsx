'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi';
import { getProjectById } from '@/data/projects';

export default function RoboticCatProject() {
  const project = getProjectById('robotic-cat');

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
          >
            <HiArrowLeft className="mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-neutral-600">
              {project.shortDescription}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="aspect-video bg-neutral-100 rounded-lg flex items-center justify-center">
            {project.vimeoUrl ? (
              <iframe
                src={project.vimeoUrl}
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <p className="text-neutral-400 text-lg">Video Coming Soon</p>
            )}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Overview</h2>
          <p className="text-neutral-600 leading-relaxed text-lg">
            {project.fullDescription}
          </p>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Key Achievements */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Key Achievements</h2>
          <div className="space-y-3">
            {project.achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-start">
                <HiCheckCircle className="text-primary flex-shrink-0 mt-1 mr-3" size={24} />
                <p className="text-neutral-600 text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technical Challenges */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Technical Challenges</h2>
          <div className="bg-neutral-50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.challenges.map((challenge, idx) => (
                <li key={idx} className="text-neutral-600 text-lg flex items-start">
                  <span className="text-primary mr-2">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
          >
            <HiArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
