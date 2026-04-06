# Design System Specification: The Ethereal Edge

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is not a utility; it is a statement of intent. The Creative North Star, **"The Digital Curator,"** rejects the cluttered, modular "template" look of standard SaaS platforms in favor of high-end editorial layouts. It treats the viewport as a gallery space where negative space is as important as the content itself.

By utilizing intentional asymmetry, extreme typographic scaling, and tonal depth, we move away from "web design" and toward "digital craft." We prioritize the feeling of looking through a high-end lens—where elements appear to float in a pressurized, sophisticated vacuum of deep charcoal and aurora-lit mist.

---

## 2. Colors: Tonal Atmosphere
We do not use color to decorate; we use it to define atmosphere. The palette is divided into a "Core Dark" (Deep Charcoal) and an "Aurora Light" (Misty White) mode.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid, high-contrast borders for sectioning. Boundaries must be defined solely through background color shifts. A `surface-container-low` section sitting on a `surface` background creates a sophisticated transition that feels architectural rather than mechanical.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of frosted glass.
- **Base Layer:** `surface` (#0c0e12).
- **Secondary Depth:** `surface-container-low` (#111318) for large content blocks.
- **High Focus:** `surface-container-high` (#1d2025) for interactive modules.

### The "Glass & Gradient" Rule
To achieve the "Futuristic" brand personality, utilize glassmorphism for floating elements.
- **Glass Token:** Use `surface-variant` (#23262c) at 60% opacity with a `24px` backdrop-blur.
- **Signature Glow:** Apply subtle mesh gradients in the background using `primary_dim` (#8455ef) and `secondary_dim` (#40ceed) at 10% opacity to provide a "visual soul."

---

## 3. Typography: Editorial Authority
The typography system uses a high-contrast pairing: **Epilogue** for authoritative, wide-set headings and **Manrope** for technical, clean body execution.

*   **Display (Epilogue):** Set with `tight` letter-spacing (-0.02em). These are the anchors of the page. Use `display-lg` (3.5rem) to break the grid—let headings overlap image containers slightly to create bespoke depth.
*   **Headline (Epilogue):** Sharp and strategic. Use `headline-md` (1.75rem) for section starters.
*   **Body (Manrope):** The "Workhorse." Use `body-lg` (1rem) with generous line-height (1.6) to ensure the elite feel remains readable.
*   **Labels (Manrope):** All-caps, tracked out (+0.1em). Use `label-md` for "System Metadata" or "Strategic Tags."

---

## 4. Elevation & Depth: The Layering Principle
We move away from the "shadow-heavy" look of 2010s material design. Depth is achieved via **Tonal Layering.**

*   **The Layering Stack:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a "recessed" or "carved" look that feels premium and intentional.
*   **Ambient Shadows:** For floating elements (Modals/Dropdowns), use an ultra-diffused shadow: `0 20px 80px rgba(0, 0, 0, 0.45)`. The shadow must never look like a "drop"; it should look like an ambient occlusion.
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use the `outline-variant` (#46484d) at **15% opacity**. This creates a "whisper" of an edge that catches the light without interrupting the visual flow.
*   **Interaction Glow:** On hover, a card should not just lift; it should emit a subtle inner-glow using `primary` (#ba9eff) at 5% opacity.

---

## 5. Components: Precision Primitives

### Buttons: The Strategic Action
- **Primary:** A gradient-filled container (`primary` to `primary_dim`) with `on_primary` text. No border. `xl` (0.75rem) roundedness.
- **Secondary:** A "Ghost Border" variant. Transparent background, `outline-variant` at 20% opacity. On hover, the background fills to 10% `primary`.
- **Tertiary:** Text-only with a `2px` underline that expands from center on hover.

### Cards: The Gallery Frame
- **Construction:** Use `surface-container` with `xl` (0.75rem) corners.
- **Rule:** **No Divider Lines.** Separate header and body content using the `spacing-6` (2rem) scale.
- **Visual:** Apply a subtle `0.5px` top-stroke using `outline_variant` at 30% to simulate a "light catch" on the top edge.

### Input Fields: The Minimalist Entry
- **Default State:** A simple bottom-border using `outline_variant` at 40%. No box.
- **Focus State:** Bottom-border transforms into a `primary` to `secondary` gradient. Label moves to `label-sm` and shifts to `primary`.

### Navigation: The Glass Rail
- **Style:** A floating `surface_container_highest` bar with 70% opacity and `20px` backdrop blur. Positioned `spacing-10` from the top, not pinned to the edges.

---

## 6. Do’s and Don’ts

### Do:
- **Do** use extreme white space. If a section feels "comfortable," add `spacing-8` more.
- **Do** use asymmetrical image placements. Align text to the left and images to the slightly-off-center right to break the "template" feel.
- **Do** use `secondary` (#53ddfc) for data-heavy accents or strategic highlights.

### Don’t:
- **Don’t** use 100% white (#ffffff) for body text in dark mode. Use `on_surface_variant` (#aaabb0) to reduce eye-strain and maintain the "Elite" mood.
- **Don’t** use standard 1px grey dividers. Use a background-color shift or 2rem of empty space.
- **Don’t** use fast, "snappy" animations. Use slow, ease-in-out transitions (400ms+) to mimic luxury movement.

### Accessibility Note:
While we lean into sophisticated low-contrast visuals, ensure all critical interactive elements meet a 4.5:1 contrast ratio against their immediate background. Use the `primary` and `error` tokens specifically for high-visibility feedback.