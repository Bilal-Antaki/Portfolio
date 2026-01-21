'use client';

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Minimal footer for homepage
  if (isHomePage) {
    return (
      <footer className="bg-neutral-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-neutral-400 text-sm">
            © 2026 Bilal Antaki. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }

  // Full footer for other pages
  return (
    <footer className="bg-neutral-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bilal Antaki</h3>
            <p className="text-neutral-400">Navigation and Control Robotics Engineer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="mailto:bilal.antaki.1@gmail.com"
              className="text-neutral-400 hover:text-primary-light transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bilal-antaki/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-light transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/Bilal-Antaki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-primary-light transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-neutral-400 text-sm">
            © {currentYear} Bilal Antaki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
