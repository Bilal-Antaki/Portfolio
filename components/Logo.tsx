'use client';

import { useState, useEffect, useRef } from 'react';
import './Logo.css';

export default function Logo() {
  const [isHappy, setIsHappy] = useState(false);
  const [svgContent, setSvgContent] = useState('');
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load and inline the SVG
    fetch('/Portfolio/images/Portfolio_Logo_Optimized.svg')
      .then(response => response.text())
      .then(data => {
        // Parse the SVG and convert inkscape:label to id and class
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(data, 'image/svg+xml');
        const svg = svgDoc.querySelector('svg');

        if (svg) {
          // Add class for styling
          svg.classList.add('eve-logo-svg');

          // Convert inkscape:label attributes to id and class for easier CSS/JS targeting
          const labeledElements = svg.querySelectorAll('[inkscape\\:label]');
          labeledElements.forEach((element) => {
            const label = element.getAttribute('inkscape:label');
            if (label) {
              element.setAttribute('id', label);
              element.classList.add(label);
            }
          });

          // Set viewBox if not present for proper scaling
          if (!svg.getAttribute('viewBox')) {
            const width = svg.getAttribute('width');
            const height = svg.getAttribute('height');
            if (width && height) {
              svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
            }
          }

          // Remove fixed width/height to make it responsive
          svg.removeAttribute('width');
          svg.removeAttribute('height');

          setSvgContent(svg.outerHTML);

          // Initialize eye tracking animation after SVG loads
          setTimeout(() => initEyeTracking(), 100);
        }
      })
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  const initEyeTracking = () => {
    // Eye tracking animation - subtle jitter/scanning motion
    const animateEyes = () => {
      if (!logoRef.current) return;

      // Target specific eye elements from your SVG
      const eyeElements = logoRef.current.querySelectorAll(
        '#left-eye-normal, #right-eye-normal, #left-eye-smile, #right-eye-smile, ' +
        '.left-eye-normal, .right-eye-normal, .left-eye-smile, .right-eye-smile'
      );

      eyeElements.forEach((eye) => {
        if (eye instanceof SVGElement) {
          // Random subtle movement for scanning effect - reduced movement
          const randomDelay = Math.random() * 1500;
          const randomDuration = 200 + Math.random() * 300;
          const randomDistance = (Math.random() * 0.6 - 0.3); // -0.3px to 0.3px (reduced from 0.75)

          setTimeout(() => {
            eye.style.transition = `transform ${randomDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            eye.style.transform = `translateX(${randomDistance}px)`;

            setTimeout(() => {
              eye.style.transform = 'translateX(0)';
            }, randomDuration);
          }, randomDelay);
        }
      });
    };

    // Run eye tracking periodically with some variation
    const runTracking = () => {
      animateEyes();
      const nextDelay = 3000 + Math.random() * 3000; // 3-6 seconds
      setTimeout(runTracking, nextDelay);
    };

    // Start the tracking loop
    setTimeout(runTracking, 2000); // Initial delay
  };

  const handleLogoClick = () => {
    setIsHappy(!isHappy);

    // Add a subtle bounce effect on click
    if (logoRef.current) {
      logoRef.current.style.animation = 'none';
      setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.style.animation = '';
        }
      }, 10);
    }
  };

  return (
    <div
      ref={logoRef}
      className={`logo-container ${isHappy ? 'happy-state' : ''}`}
      onClick={handleLogoClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLogoClick();
        }
      }}
      aria-label="EVE Logo - Click to toggle happy state"
    >
      <div
        className="logo-svg-wrapper"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
}
