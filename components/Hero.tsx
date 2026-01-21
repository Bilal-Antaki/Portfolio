'use client';

import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isGhibliStyle, setIsGhibliStyle] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Preload Ghibli image
  useEffect(() => {
    const img = new window.Image();
    img.src = '/Portfolio/images/Sq_pfp_ghibli_optimized.png';
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleImage = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setIsGhibliStyle(!isGhibliStyle);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-8"
          >
            <motion.div
              onClick={toggleImage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-64 h-64 rounded-full overflow-hidden cursor-pointer border-4 border-neutral-600 transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/30"
            >
              {/* Normal profile image */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isGhibliStyle ? 0 : 1 }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0.4, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/Portfolio/images/Sq_pfp.jpeg"
                  alt="Bilal Antaki - Profile Picture"
                  fill
                  sizes="256px"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Ghibli style image */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isGhibliStyle ? 1 : 0 }}
                transition={{ duration: 0.5, ease: [0.2, 0, 0.4, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="/Portfolio/images/Sq_pfp_ghibli_optimized.png"
                  alt="Bilal Antaki - Ghibli Style"
                  fill
                  sizes="256px"
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Hey, I'm <span className="text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Bilal Antaki</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-700 font-medium mb-6"
          >
            Path Planning and Control Robotics Engineer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-base md:text-lg text-neutral-600 max-w-3xl mx-auto mb-8"
          >
            Here, you can check out what I'm working on. I do my best to build things all the time!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neutral-400 hover:text-primary transition-colors cursor-pointer"
          aria-label="Scroll to content"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <HiChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
