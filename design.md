# Design System Document: High-End Developer Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Ethereal Architect"**

This design system is built to move away from the "template" look of standard developer portfolios. It is rooted in the concept of a "Deep Void"—a cinematic, high-contrast environment where code and craft are presented as artifacts in a digital gallery. 

The system rejects the rigidity of traditional grids in favor of **intentional asymmetry** and **tonal depth**. By utilizing a "No-Line" philosophy, we define space through gravity and light rather than structural containers. The aesthetic is editorial, leaning heavily on extreme typographic scales and glassmorphism to create a sense of high-end, bespoke craftsmanship.

---

## 2. Colors & Atmospheric Depth

The palette is anchored in a "Deep Void" (`#0A0A0F`), using a sophisticated spectrum of violets and cyans to simulate digital light.

### Color Tokens
- **Background & Surfaces:**
  - `surface_dim / background`: `#131318` (The base void)
  - `surface_container_lowest`: `#0e0e13` (Used for "inset" elements or subtle wells)
  - `surface_container_high`: `#2a292f` (The standard elevation for glass cards)
- **Accents (The Neon Core):**
  - `primary`: `#d0bcff` (Violet glow)
  - `secondary`: `#4cd7f6` (Cyan pulse)
  - `tertiary`: `#ccbeff` (Soft lavender for supporting info)

### The "No-Line" Rule
Explicitly prohibit the use of 1px solid borders for sectioning or containment. Boundaries must be defined through:
1.  **Tonal Shifts:** Placing a `surface_container_low` card against the `background`.
2.  **Negative Space:** Using the spacing scale to let elements breathe.
3.  **Shadow Gravity:** Using diffused ambient light to imply an edge.

### Signature Textures
Main CTAs and Hero sections must utilize the **Violet-to-Cyan Gradient**. This is not a static fill but a "light source." Use linear gradients (135deg) transitioning from `primary_container` (`#a078ff`) to `secondary_container` (`#03b5d3`) to provide a professional, cinematic polish.

---

## 3. Typography: The Editorial Voice

We pair the tech-forward, geometric tension of **Space Grotesk** with the Swiss-style readability of **Inter**.

- **Space Grotesk (Headlines):** Used for all `display` and `headline` levels. It should feel massive and authoritative. Use "tight" letter-spacing (-0.02em) for larger display sizes to create an editorial impact.
- **Inter (Body/Utility):** Used for `title`, `body`, and `labels`. Inter provides a grounded, functional contrast to the expressive headlines.

### Typography Scale Highlights
- **Display-LG (3.5rem):** Reserved for Hero statements.
- **Headline-LG (2rem):** Used for project titles.
- **Body-MD (0.875rem):** The workhorse for descriptions, set with generous line-height (1.6) to ensure readability against the dark void.

---

## 4. Elevation, Depth & Glassmorphism

In this system, depth is a physical property. We move beyond flat UI by treating components as layered "sheets" of light-refracting material.

### The Layering Principle
Stacking defines importance. A `surface_container_highest` element suggests it is closer to the user (the light source) than the `surface_dim` background.

### Glassmorphism & The "Ghost Border"
To achieve the "Premium" feel:
- **Backdrop Blur:** Use `blur(12px)`.
- **Transparency:** Use `surface_container` tokens at 60–80% opacity.
- **Ghost Border Fallback:** If a container requires further definition (e.g., against a complex background), use the `outline_variant` token at **15% opacity**. This creates a microscopic "glint" on the edge of the glass rather than a structural line.

### Ambient Shadows
Avoid black shadows. Use a "Tinted Shadow" approach:
- **Shadow Color:** A dark violet or deep navy (tinted `on-surface`).
- **Diffusion:** Large blur (32px–64px) with low opacity (6%). This mimics how light wraps around an object in a void.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (Violet to Cyan). No border. White text (`on_primary_container`). 12px (`md`) corner radius.
- **Secondary:** Glass effect. `surface_container_high` with 40% opacity and a `backdrop-blur`.
- **Tertiary:** Text only, using `primary` color for the label. No container.

### Cards & Projects
- **The Rule:** No divider lines. Separate metadata from content using `surface_container_low` backgrounds or 32px of vertical white space.
- **Hover State:** Lift the card slightly and increase the `backdrop-blur` intensity. The "Ghost Border" opacity can increase from 15% to 30% to simulate light catching the edge.

### Chips & Tags
- Used for tech stacks. Use `surface_container_highest` with `label-md` typography. Keep corners at `full` (pill-shaped) to contrast against the `12px` rounded cards.

### Input Fields
- Avoid boxes. Use a "Bottom Glow" approach: a subtle `surface_container_high` fill with a 2px `primary` (Violet) underline that activates only on focus.

---

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Align text to the left while keeping imagery off-center to create a "magazine" feel.
- **Embrace the Void:** Let the `#0A0A0F` background dominate. It makes the glass and gradients feel more precious.
- **Prioritize Motion:** Because there are no borders, use subtle micro-interactions (e.g., a surface color shifting 5% on hover) to signal interactivity.

### Don't:
- **Never use 100% opaque white borders.** It shatters the cinematic atmosphere.
- **Don't over-saturate.** The gradient is an accent. If every card has a gradient, nothing is special. Use the "Void" to balance the "Vibrant."
- **Avoid standard drop shadows.** If the shadow looks like a "fuzzy grey cloud," it's too heavy. It should look like a soft atmospheric glow.

### Accessibility Note:
While we lean into cinematic dark modes, ensure all `body-md` text maintains a 4.5:1 contrast ratio against the `surface` containers. Use `on_surface_variant` (`#cbc3d7`) for secondary text, but never go darker than this for essential information.
