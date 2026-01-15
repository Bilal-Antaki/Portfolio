'use client';

import { useState, useEffect, useRef } from 'react';
import './Logo.css';

export default function Logo() {
  const [isHappy, setIsHappy] = useState(false);
  const [normalSvg, setNormalSvg] = useState('');
  const [smileSvg, setSmileSvg] = useState('');
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load both SVG files
    const loadSvg = (url: string) => {
      return fetch(url)
        .then(response => response.text())
        .then(data => {
          const parser = new DOMParser();
          const svgDoc = parser.parseFromString(data, 'image/svg+xml');
          const svg = svgDoc.querySelector('svg');

          if (svg) {
            svg.classList.add('eve-logo-svg');

            // Set viewBox if not present
            if (!svg.getAttribute('viewBox')) {
              const width = svg.getAttribute('width');
              const height = svg.getAttribute('height');
              if (width && height) {
                svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
              }
            }

            // Remove fixed width/height
            svg.removeAttribute('width');
            svg.removeAttribute('height');

            return svg.outerHTML;
          }
          return '';
        });
    };

    // Load both normal and smile SVGs
    Promise.all([
      loadSvg('/Portfolio/images/Portfolio_Logo_Optimized.svg'),
      loadSvg('/Portfolio/images/Portfolio_Logo_Smile_Optimized.svg')
    ])
      .then(([normal, smile]) => {
        setNormalSvg(normal);
        setSmileSvg(smile);
        // Initialize eye tracking after SVGs load
        setTimeout(() => initEyeTracking(), 100);
      })
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  const initEyeTracking = () => {
    // Eye tracking animation - subtle jitter/scanning motion
    const animateEyes = () => {
      if (!logoRef.current) return;

      // Target any path elements that look like eyes (small black circles/paths)
      const eyeElements = logoRef.current.querySelectorAll(
        'path[fill="#000000"], circle[fill="#000000"], ellipse[fill="#000000"]'
      );

      eyeElements.forEach((eye) => {
        if (eye instanceof SVGElement) {
          // Random movement for scanning effect
          const randomDelay = Math.random() * 1500;
          const randomDuration = 200 + Math.random() * 300;
          const randomDistance = (Math.random() * 2 - 1); // -1px to 1px

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
  };

  return (
    <div
      ref={logoRef}
      className="logo-container"
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
        dangerouslySetInnerHTML={{ __html: isHappy ? smileSvg : normalSvg }}
      />
    </div>
  );
}
