# EVE Interactive Logo Component

A highly interactive, animated SVG logo component for your portfolio website featuring breathing animations, hover effects, click interactions, and eye-tracking animations.

## Features

### 🎭 **Animations**
- **Breathing Effect**: Continuous subtle vertical translation (4s loop) for a buoyant, alive feel
- **Hover Scale**: 10% scale-up with premium cubic-bezier easing
- **Click Toggle**: Happy state that can swap between normal and smile eye expressions
- **Eye Tracking**: Subtle horizontal jitter animation that mimics scanning/tracking motion
- **Drop Shadow**: Subtle CSS filter for depth

### ♿ **Accessibility**
- Keyboard navigation support (Enter/Space to toggle)
- Focus indicators
- ARIA labels
- Reduced motion support for users with vestibular disorders

### 📱 **Responsive**
- Scales appropriately on mobile devices
- Reduced animations on smaller screens
- Performance optimized with GPU acceleration

## File Structure

```
components/
├── Logo.tsx         # Main React component
├── Logo.css         # Styles and animations
└── Logo.README.md   # This file
```

## Usage

The logo is already integrated into the Header component:

```tsx
import Logo from './Logo';

// In your component
<Logo />
```

## Customization

### Adding Eye State Paths to Your SVG

To enable the eye state toggle, your SVG needs specific IDs. Open your SVG file and add these IDs to the appropriate paths:

**Normal Eyes:**
- `id="left-eye-normal"`
- `id="right-eye-normal"`

**Smile Eyes:**
- `id="left-eye-smile"`
- `id="right-eye-smile"`

**Example SVG structure:**
```xml
<svg>
  <!-- Normal state eyes -->
  <path id="left-eye-normal" d="..." fill="#000000"/>
  <path id="right-eye-normal" d="..." fill="#000000"/>

  <!-- Happy state eyes (hidden by default) -->
  <path id="left-eye-smile" d="..." fill="#000000"/>
  <path id="right-eye-smile" d="..." fill="#000000"/>

  <!-- Optional: Face and screen elements -->
  <path id="white-face" d="..." fill="#ffffff"/>
  <path id="black-screen" d="..." fill="#000000"/>
</svg>
```

### Adjusting Animation Timing

Edit `Logo.css`:

```css
/* Breathing speed (default: 4s) */
.eve-logo-svg {
  animation: breathe 4s ease-in-out infinite;
}

/* Hover transition speed (default: 0.5s) */
.eve-logo-svg {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Adjusting Logo Size

Edit `Logo.css`:

```css
.eve-logo-svg {
  width: 120px; /* Desktop size */
}

@media (max-width: 768px) {
  .eve-logo-svg {
    width: 100px; /* Tablet size */
  }
}

@media (max-width: 480px) {
  .eve-logo-svg {
    width: 80px; /* Mobile size */
  }
}
```

### Customizing Eye Tracking

Edit `Logo.tsx` - `initEyeTracking()` function:

```typescript
// Animation frequency (default: 4-6 seconds)
const interval = setInterval(animateEyes, 4000 + Math.random() * 2000);

// Movement distance (default: -1px to 1px)
eye.style.transform = `translateX(${Math.random() * 2 - 1}px)`;

// Animation duration (default: 200-500ms)
const randomDuration = 200 + Math.random() * 300;
```

### Changing Hover Scale

Edit `Logo.css`:

```css
.logo-container:hover .eve-logo-svg {
  transform: scale(1.1); /* Change 1.1 to your preferred scale */
}
```

### Modifying Drop Shadow

Edit `Logo.css`:

```css
.eve-logo-svg {
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.12))
          drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08));
}
```

## Advanced Customization

### Custom Eye Selectors

If your SVG uses different naming conventions, update the selectors in `Logo.tsx`:

```typescript
const eyeElements = logoRef.current.querySelectorAll(
  '[id*="your-eye-id"], [class*="your-eye-class"]'
);
```

### Adding Sound Effects

You can add audio feedback on click:

```typescript
const handleLogoClick = () => {
  setIsHappy(!isHappy);

  // Play sound
  const audio = new Audio('/sounds/click.mp3');
  audio.play().catch(e => console.log('Audio play failed:', e));
};
```

### Persistent Happy State

To save the happy state in localStorage:

```typescript
// In useEffect
const savedState = localStorage.getItem('eve-happy-state');
if (savedState) setIsHappy(savedState === 'true');

// In handleLogoClick
localStorage.setItem('eve-happy-state', (!isHappy).toString());
```

## Performance Notes

- Uses CSS `will-change` for optimized animations
- GPU acceleration via `translateZ(0)` and `backface-visibility: hidden`
- Debounced eye tracking to prevent excessive DOM updates
- Lazy-loaded SVG content for faster initial page load

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Troubleshooting

### Logo not showing
1. Check that the SVG file exists at `/public/images/Portfolio_Logo_Optimized.svg`
2. Ensure basePath is configured in `next.config.ts` if deploying to GitHub Pages

### Eyes not animating
1. Verify eye paths have the correct IDs in your SVG
2. Check browser console for JavaScript errors
3. Ensure the SVG has loaded (check Network tab)

### Performance issues
1. Reduce animation frequency in `initEyeTracking()`
2. Disable eye tracking on mobile devices
3. Use `prefers-reduced-motion` media query

## Credits

Created with SVG exported from Inkscape, animated with CSS keyframes and vanilla JavaScript, wrapped in a React component for seamless Next.js integration.
