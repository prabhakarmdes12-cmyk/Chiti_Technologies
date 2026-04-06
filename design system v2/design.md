# Chiti Technologies — Unified Design System (UDS) v2.0.0

*Context: Production-Ready UI Framework incorporating Accessibility, Semantic States, mathematical spacing scales, and multi-theme support.*

---

## 1. Vision & Core Principles
The Chiti Technologies UDS balances high-fidelity cinematic styling with rigorous, production-grade usability standards. It is designed to be as functional for visually impaired users operating keyboard-navigated B2B dashboards as it is for premium mouse-tracking D2C conversion funnels.

### The Five Pillars
1. **Cinematic & Immersive:** Aurora effects, glassmorphism, depth.
2. **Physics-Driven Motion:** Weighty, spring-based interactions.
3. **Scalable & Modular:** Adapting across heavy enterprise and light D2C layers.
4. **Ruthless Hierarchy:** Prioritizing negative space.
5. **Universal Access:** Color contrast compliance, deterministic spacing, and graceful motion degradation.

---

## 2. Design Tokens & Multi-Theme Architecture

### 2.1 Theme Palettes
We utilize CSS variables to seamlessly switch between contexts.

**Dark Theme (Default Studio):**
- **Background:** `hsl(220, 10%, 4%)`
- **Surface Level 1:** `hsl(220, 10%, 8%)`
- **Surface Level 2 (Elevated):** `hsl(220, 10%, 12%)`
- **Text Main:** `hsl(0, 0%, 98%)`
- **Text Muted:** `hsl(220, 10%, 65%)`
- **Glass Border:** `rgba(255, 255, 255, 0.08)`

**Light Theme (Commerce/SaaS Base):**
- **Background:** `hsl(0, 0%, 98%)`
- **Surface Level 1:** `hsl(0, 0%, 100%)`
- **Surface Level 2 (Elevated):** `hsl(0, 0%, 95%)`
- **Text Main:** `hsl(220, 10%, 10%)`
- **Text Muted:** `hsl(220, 10%, 40%)`
- **Glass Border:** `rgba(0, 0, 0, 0.08)`

### 2.2 Brand & Semantic Colors
*Semantic tokens are essential for conveying status across enterprise applications.*

**Brand Tokens:**
- **Primary (Electric Violet):** `hsl(260, 100%, 65%)`
- **Secondary (Cyan Glow):** `hsl(190, 100%, 50%)`

**Semantic Status Tokens:**
- **Success:** `hsl(150, 80%, 40%)` — Success states, checkmarks, growth metrics.
- **Info:** `hsl(210, 90%, 50%)` — Neutral notifications, tooltips.
- **Warning:** `hsl(35, 90%, 50%)` — Destructive actions on hold, cautionary limits.
- **Error/Danger:** `hsl(350, 80%, 55%)` — Deletion, critical failures, input invalidity.

### 2.3 Mathematical Spacing & Grid System
We enforce a strict 4pt/8pt spacing scale (`base = 8px`). Arbitrary margins are forbidden.
- `--space-1` : `4px` (Tight component internals)
- `--space-2` : `8px` (Icon to text spacing)
- `--space-3` : `16px` (Standard padding)
- `--space-4` : `24px` (Card padding)
- `--space-5` : `32px` (Section sub-spacing)
- `--space-6` : `48px` (Standard section gap)
- `--space-8` : `64px` (Major layout boundaries)
- `--space-12`: `96px` (Hero padding)

### 2.4 Typography
- **Display/Headings:** `Outfit` (Geometric, wide tracking).
- **Body UI:** `Inter` (Hyper-legible).
- **Technical/Code:** `JetBrains Mono` (Tabular data, monospaced needs).

---

## 3. Accessibility Standards (a11y)

The UDS V2 enforces strict accessibility as a baseline, not an afterthought.

1. **Focus States:** Every interactive element must map the `:focus-visible` pseudo-class to cast a mathematically precise outer ring: `box-shadow: 0 0 0 3px var(--primary-violet);`. Native outlines are suppressed *only* when custom visible focus is applied.
2. **Graceful Motion Degradation:** All physics, CSS transitions, and aurora background loops are wrapped in `@media (prefers-reduced-motion: reduce)`. If a user opts out of motion in their OS, animations drop to `0ms` instantly. 
3. **Contrast Compliance:** All semantic and primary text components must pass a minimum WCAG AA (4.5:1) ratio against their respective surface backgrounds.

---

## 4. Component Library

### 4.1 Interactive Controls (Buttons)
- **Primary CTA:** Brand gradient, soft glow.
- **Glass/Ghost:** Context-aware backdrop blur.
- **Semantic Actions:** Danger buttons (Solid Error Red), Success toggles.
- **Disabled State:** Opacity `0.5`, `cursor: not-allowed`, desaturated colors.

### 4.2 Status Alerts & Banners
- **Architecture:** 1px border using the semantic color at 30% opacity, background utilizing semantic color at 10% opacity, accompanied by an aligned icon.
- **Usage:** In app-wide notifications and inline form validation.

### 4.3 Forms & Validation
- **Floating Labels:** Smooth transition, compliant contrast.
- **Error States:** Border flashes Red. Accompanying ARIA-live region announces error text directly below the input using `--text-error`.

### 4.4 The "Chiti Card" (v2.0)
- **Mechanics:** 3D cursor tilt with inner radial highlight. 
- **Light Theme Behavior:** Inner light transitions to an inverted soft dark shadow cast to provide depth against a stark white interface.
- **Accessibility:** Falls back to a standard static card without transform-style if reduced motion is enabled.

---
*End of Protocol. V2.0 represents the unified structure for Chiti Technologies.*
