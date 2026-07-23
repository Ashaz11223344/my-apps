# Project Context: Ashaz Pathan's Interactive 3D Portfolio

This document provides a comprehensive technical overview of the project, detailing its architecture, components, directory structure, tech stack, and design alignment.

---

## 1. Project Overview

This project is a high-fidelity, premium interactive 3D portfolio and resume website built for **Ashaz Pathan**, a Computer Engineering student. The project emphasizes immersive user experience (UX) and visual aesthetics, aligning with the **"Ethereal Architect"** design concept. It features smooth 3D background animations linked directly to page scrolling, glassmorphic container aesthetics, micro-interactions, and responsive layout reflow.

---

## 2. Tech Stack

- **Core & Runtime**: React 18/19, TypeScript, Vite (HMR enabled)
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`), `maath` (spatial math utilities)
- **Animation & Physics**: Framer Motion (for DOM entrance and state transitions)
- **Styling**: Tailwind CSS & Custom CSS (supporting glassmorphic blur and gradients)
- **Routing**: React Router DOM (`BrowserRouter`, `Routes`, `Route`)
- **Icons**: Lucide React

---

## 3. Architecture & Routing

The application functions as a single-page app (SPA) with two main view states routed via `react-router-dom`:

1.  **Main Portfolio View (`/`)**: A scrollable landing experience containing:
    -   **Navigation**: Fixed top bar with glass background and mix-blend-difference typography.
    -   **Hero**: Landing section introducing the developer.
    -   **Project Gallery**: Vertical stack of featured projects with interactive iframe previews.
    -   **Contact Section**: Direct contact channels.
2.  **Resume View (`/myresume`)**: A dedicated page featuring an interactive glassmorphic resume layout and a full-screen PDF preview modal.

Both routes render on top of a **fixed 3D canvas background** that reacts dynamically to the user's scrolling progress.

---

## 4. Key Components

### 3D Canvas Background (`src/components/canvas/Scene.tsx`)
-   **Floating Particle Void**: Distributes 5,000 particles in a 3D sphere using `maath/random`. The swarm slowly rotates and shifts its vertical position based on page scroll progress.
-   **Abstract Central Sphere**: Renders a wireframe mesh sphere.
    -   **Desktop**: Placed on the right side to balance screen real estate.
    -   **Mobile**: Centered behind content as a subtle backdrop.
    -   **Dynamic Morphing**: The sphere scales and transitions color smoothly from **Violet (`#a078ff`)** to **Pink (`#ff78a0`)** as the user scrolls.

### Liquid Preloader (`src/components/dom/PageLoader.tsx`)
-   An SVG liquid preloader screen that animates out using Framer Motion when the site resources finish loading.

### Project Gallery (`src/components/dom/ProjectGallery.tsx` & `src/data/projects.ts`)
Renders a curated list of 10 featured projects (including *Filex*, *Focus*, *Invoice Generator*, *Attendify*, *Lumina Spaces*, etc.).
-   **Live Iframe Previews**: Hovering over a project card initiates a scaling calculation to render the live URL inside a mini-browser mockup using an `iframe`.
-   **Spotlight Cursor Tracking**: Cards track the user's cursor to draw a dynamic radial background glow matched to each project's unique primary color.
-   **Expanded Detail Modal**: Clicking a project opens a full-screen immersive overlay.

### Interactive Resume (`src/components/dom/Resume.tsx`)
A glassmorphic profile sheet describing the developer's background:
-   **Education**: Diploma in Computer Engineering at MET Bhujbal Knowledge City (2023–2026).
-   **Technical Skills**: Python, React, TypeScript, HTML/CSS, MySQL, NumPy, Pandas, Matplotlib, C.
-   **Internship**: 3-Month Full Stack App Development (AI/ML) training at NPIT Solutions.
-   **Achievements**: 1st Place at the MAHA-VEER 2026 national-level project competition for *Lumina Spaces*.
-   **PDF Reader**: Includes a pop-up modal containing an `iframe` to preview/download `/public/resume.pdf` inline.

---

## 5. Project Directory Structure

```
D:\MY-APPS/
├── public/
│   ├── auth/                      # Static auth pages for "Bestfriend's Birthday" project
│   │   ├── auth.html
│   │   ├── auth.css
│   │   └── auth.js
│   ├── favicon.svg
│   ├── icons.svg
│   └── resume.pdf                 # Hosted resume PDF
├── src/
│   ├── assets/                    # Static image and vector assets
│   ├── components/
│   │   ├── canvas/
│   │   │   └── Scene.tsx          # 3D R3F Background
│   │   └── dom/
│   │       ├── Contact.tsx
│   │       ├── Hero.tsx
│   │       ├── PageLoader.tsx
│   │       ├── ProjectGallery.tsx
│   │       └── Resume.tsx
│   ├── data/
│   │   └── projects.ts            # Curated projects list and data definitions
│   ├── App.css
│   ├── App.tsx                    # Root React coordinator & Routing
│   ├── index.css                  # Core tailwind / global rules
│   └── main.tsx                   # App mounting point
├── design.md                      # Design System Specifications
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 6. Design Theme & Creative Guidelines

The project implements the design system documented in `design.md`, emphasizing the following rules:
-   **No-Line Philosophy**: Physical borders are avoided. Sections are defined via tonal variations (`surface_container_high` over `background`) or vertical negative space (32px - 64px gaps).
-   **Depth Representation**: Achieved through backdrop-blurs (`12px`) and low-opacity, wide-radius ambient shadows tinted with dark blues/purples.
-   **Editorial Contrast**: Pairs high-impact, tight-letter-spaced **Space Grotesk** headings with legible **Inter** body text.
