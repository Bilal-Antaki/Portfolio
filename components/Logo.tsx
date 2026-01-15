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
          // Random movement for scanning effect - increased movement
          const randomDelay = Math.random() * 1500;
          const randomDuration = 200 + Math.random() * 300;
          const randomDistance = (Math.random() * 2 - 1); // -1px to 1px (increased from 0.3)

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
    const newHappyState = !isHappy;
    setIsHappy(newHappyState);

    // Manually toggle eye visibility with direct opacity manipulation
    if (logoRef.current) {
      // Get all eye elements
      const normalEyesLeft = logoRef.current.querySelectorAll('#left-eye-normal, .left-eye-normal');
      const normalEyesRight = logoRef.current.querySelectorAll('#right-eye-normal, .right-eye-normal');
      const smileEyesLeft = logoRef.current.querySelectorAll('#left-eye-smile, .left-eye-smile');
      const smileEyesRight = logoRef.current.querySelectorAll('#right-eye-smile, .right-eye-smile');

      console.log('Toggle eyes - Happy state:', newHappyState);
      console.log('Normal eyes found:', normalEyesLeft.length + normalEyesRight.length);
      console.log('Smile eyes found:', smileEyesLeft.length + smileEyesRight.length);

      if (newHappyState) {
        // Happy state: hide normal, show smile
        normalEyesLeft.forEach(eye => (eye as SVGElement).style.opacity = '0');
        normalEyesRight.forEach(eye => (eye as SVGElement).style.opacity = '0');
        smileEyesLeft.forEach(eye => (eye as SVGElement).style.opacity = '1');
        smileEyesRight.forEach(eye => (eye as SVGElement).style.opacity = '1');
      } else {
        // Normal state: show normal, hide smile
        normalEyesLeft.forEach(eye => (eye as SVGElement).style.opacity = '1');
        normalEyesRight.forEach(eye => (eye as SVGElement).style.opacity = '1');
        smileEyesLeft.forEach(eye => (eye as SVGElement).style.opacity = '0');
        smileEyesRight.forEach(eye => (eye as SVGElement).style.opacity = '0');
      }

      // Add a subtle bounce effect on click
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
