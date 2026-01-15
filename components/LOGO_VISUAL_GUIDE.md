# EVE Logo Visual Animation Guide

## 🎬 Animation Timeline

```
Second 0-2:     Logo loads, breathing animation starts
                ↓
Second 2-5:     First eye tracking animation (random jitter)
                ↓
Second 5-11:    Eyes track again (3-6 second intervals)
                ↓
On Hover:       Scale up 10%, shadow deepens
                ↓
On Click:       Toggle between normal eyes ⟷ smile eyes
                ↓
Continuous:     Breathing animation loops forever
```

## 👁️ Eye States

### Normal State (Default)
```
Visible:
- #left-eye-normal  ✅
- #right-eye-normal ✅

Hidden:
- #left-eye-smile   ❌
- #right-eye-smile  ❌

CSS: .logo-container [id*="eye-normal"] { opacity: 1; }
     .logo-container [id*="eye-smile"]  { opacity: 0; }
```

### Happy State (After Click)
```
Hidden:
- #left-eye-normal  ❌
- #right-eye-normal ❌

Visible:
- #left-eye-smile   ✅
- #right-eye-smile  ✅

CSS: .logo-container.happy-state [id*="eye-normal"] { opacity: 0; }
     .logo-container.happy-state [id*="eye-smile"]  { opacity: 1; }
```

## 🎯 Transform Origins

```
Global SVG:
└─ transform-origin: center center
   ├─ Breathing: translateY(0 → -4px → 0)
   ├─ Hover: scale(1 → 1.1)
   └─ Active: scale(1.05)

Eye Elements:
└─ transform-origin: center center
   └─ Tracking: translateX(-0.75px → 0 → +0.75px → 0)
```

## 📐 Animation Math

### Breathing Animation
```css
@keyframes breathe {
  0%   { transform: translateY(0px);   } /* Ground level */
  50%  { transform: translateY(-4px);  } /* Peak height */
  100% { transform: translateY(0px);   } /* Back to ground */
}

Duration: 4 seconds
Easing: ease-in-out (smooth acceleration/deceleration)
Loop: infinite
```

**Visualization:**
```
Height
  ↑
4px |     ╱───╲
3px |    ╱     ╲
2px |   ╱       ╲
1px |  ╱         ╲
0px | •           •
    └──────────────→ Time (4s loop)
    0s   2s   4s
```

### Hover Scale
```css
transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);

Initial:  scale(1.0)  100% size
Hover:    scale(1.1)  110% size

Cubic bezier values:
- 0.34: Control point 1 X (slow start)
- 1.56: Control point 1 Y (overshoot!)
- 0.64: Control point 2 X
- 1.00: Control point 2 Y (settle)
```

**Visualization:**
```
Scale
  ↑
1.12|      ╱╲    (overshoot)
1.10|     ╱  ───╮
1.05|    ╱       │
1.00| ──╯        └──→ (settle)
    └────────────────→ Time (0.5s)
```

### Eye Tracking
```javascript
// Randomly every 3-6 seconds:
Random delay:    0 - 1500ms        (stagger left/right eye)
Random distance: -0.75px to +0.75px (horizontal movement)
Duration:        200 - 500ms       (quick movement)
Easing:          cubic-bezier(0.4, 0, 0.2, 1) (smooth)
```

**Visualization:**
```
Position (X-axis)
  ↑
0.75|  ╱╲       ╱╲
0.50| ╱  ╲     ╱  ╲
0.00|•    ╲___╱    •___ (rest position)
-0.50|     ╲  ╱     ╲  ╱
-0.75|      ╲╱       ╲╱
     └────────────────────→ Time
     0s  3s  6s  9s  12s
```

## 🎨 Filter Effects

### Drop Shadow (Normal)
```css
filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.12))
        drop-shadow(0 1px 3px rgba(0, 0, 0, 0.08));
```
- Outer shadow: 8px blur, 12% opacity, 2px down
- Inner shadow: 3px blur, 8% opacity, 1px down

### Drop Shadow (Hover)
```css
filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))
        drop-shadow(0 2px 6px rgba(0, 0, 0, 0.10));
```
- Outer shadow: 12px blur, 15% opacity, 4px down
- Inner shadow: 6px blur, 10% opacity, 2px down

## 🔄 State Transition Timing

```
Eye Toggle (Normal ⟷ Happy):
├─ Opacity:    0.3s ease
├─ Visibility: 0.3s ease
└─ Total:      300ms

Hover Scale:
├─ Transform:  0.5s cubic-bezier
└─ Filter:     0.5s (implicit)
└─ Total:      500ms

Click Response:
├─ Transform:  0.1s ease (active state)
├─ Eye toggle: 0.3s ease
└─ Total:      400ms perceived
```

## 🎮 User Interaction Flow

```
1. PAGE LOAD
   └─> SVG fetches (async)
       └─> Parse and inject
           └─> Add IDs/classes from inkscape:label
               └─> Start breathing animation
                   └─> Wait 2s → Start eye tracking

2. USER HOVERS
   └─> Scale 1.0 → 1.1 (500ms)
       └─> Shadow deepens
           └─> User moves away
               └─> Scale 1.1 → 1.0 (500ms)

3. USER CLICKS
   └─> Scale briefly to 1.05 (100ms)
       └─> Toggle happy-state class
           └─> Eye opacity crossfade (300ms)
               └─> Normal eyes fade out
               └─> Smile eyes fade in

4. CONTINUOUS
   └─> Every 3-6 seconds:
       └─> Left eye moves (random delay 0-1.5s)
       └─> Right eye moves (random delay 0-1.5s)
       └─> Duration: 200-500ms
       └─> Return to center
```

## 📱 Responsive Breakpoints

```css
Desktop (>768px):
├─ Logo width: 120px
└─ Breathing:  0px ⟷ -4px

Tablet (≤768px):
├─ Logo width: 100px
└─ Breathing:  0px ⟷ -3px
└─ Hover:      scale(1.1)

Mobile (≤480px):
├─ Logo width: 80px
└─ Breathing:  0px ⟷ -3px
└─ Hover:      scale(1.08) (reduced)

Reduced Motion:
├─ Breathing:   DISABLED
├─ Eye track:   DISABLED
└─ Hover:       scale(1.05) (instant, no overshoot)
```

## 🎯 Performance Characteristics

### Frame Rate Targets
```
Breathing animation:     60 FPS (GPU accelerated)
Hover transition:        60 FPS (GPU accelerated)
Eye tracking:            60 FPS (transform only)
```

### Will-Change Hints
```css
.eve-logo-svg {
  will-change: transform;  /* Tells browser to optimize */
}
```

### GPU Acceleration Triggers
```css
transform: translateZ(0);        /* Force GPU layer */
backface-visibility: hidden;     /* Optimize 3D transforms */
```

### Reflow Prevention
- Only `transform` and `opacity` animations (no layout changes)
- No `width`, `height`, `top`, `left` changes
- All measurements in viewport units or px (no % calculations)

## 🧪 Testing Checklist

- [ ] Logo appears on page load
- [ ] Breathing animation is smooth
- [ ] Hover scales up smoothly with bounce
- [ ] Click toggles eyes (normal ⟷ smile)
- [ ] Eyes jitter every few seconds
- [ ] Keyboard Enter/Space works
- [ ] Tab focus shows outline
- [ ] Mobile: Logo scales down appropriately
- [ ] Reduced motion: Animations disabled
- [ ] Performance: No jank or stutter

## 🎨 CSS Custom Properties (Future Enhancement)

You could add CSS variables for easy theming:

```css
.eve-logo-svg {
  --logo-size: 120px;
  --breathe-distance: -4px;
  --breathe-duration: 4s;
  --hover-scale: 1.1;
  --hover-duration: 0.5s;
  --eye-track-distance: 0.75px;
  --eye-track-duration: 300ms;
}
```

Then reference them:
```css
.eve-logo-svg {
  width: var(--logo-size);
  animation: breathe var(--breathe-duration) ease-in-out infinite;
}

@keyframes breathe {
  50% { transform: translateY(var(--breathe-distance)); }
}
```

---

**This creates a truly sentient-feeling character through the combination of:**
1. Constant motion (breathing)
2. Responsive interaction (hover/click)
3. Unpredictable micro-movements (eye tracking)
4. Premium easing curves (overshoot, bounce)
5. Layered animations (multiple timelines)

The result: A logo that feels alive! 🤖✨
