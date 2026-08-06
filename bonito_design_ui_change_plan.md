# X-Ray "Editorial Print-Bento" Design System

This design system blends **Editorial Print Typography**, **Neo-Brutalist Ink Borders**, **Memphis Halftone Patterns**, and **Hokusai Color Palettes** into a clean **Bento Box Grid** layout. It delivers high contrast and a unique aesthetic without sacrificing corporate credibility or data clarity.

---

## 1. Design System Tokens

### A. Color Palette

```
Canvas / Paper:      #F5F2EC (Warm Washi Canvas)
Card Surface:        #FFFFFF (Crisp White)
Sumi Ink (Borders):  #14171A (Deep Woodblock Charcoal)
Prussian Blue:       #1C3B57 (Primary Accent / Headers)
Hanko Vermilion:     #C84B31 (Stamp Badges / High Alerts)
Monastic Ochre:      #E5A93C (Rating Highlights / Stars)
Soft Mint:           #22C55E (Verified Indicators)
Muted Halftone Dot:  #D8D3C7 (Background Texture Dots)

```

### B. Tailwind CSS Configuration (`tailwind.config.js`)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F5F2EC",
        ink: {
          DEFAULT: "#14171A",
          muted: "#5A626A",
        },
        prussian: {
          DEFAULT: "#1C3B57",
          hover: "#152E44",
        },
        vermilion: {
          DEFAULT: "#C84B31",
          light: "#FDF2F0",
        },
        ochre: "#E5A93C",
        borderInk: "#14171A",
      },
      boxShadow: {
        print: "4px 4px 0px 0px #14171A",
        "print-lg": "6px 6px 0px 0px #14171A",
        "print-sm": "2px 2px 0px 0px #14171A",
        "print-hover": "8px 8px 0px 0px #14171A",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 2. Core UI Rules & Geometry

### 1. The Ink-Border Principle

- Every Bento card features a solid **2px dark ink border** (`border-2 border-ink`) set over a **pure white** (`bg-white`) container.
- Cards cast a hard offset shadow (`shadow-print`), giving them the appearance of physical printed plates floating above the patterned canvas.

### 2. The Halftone Patterned Canvas

- The overall site background uses `#F5F2EC` (Warm Washi Paper) overlaid with a subtle radial dot matrix.
- Key Bento cards feature decorative halftone dot clusters (Memphis style) placed in corners or behind floating badge elements.

### 3. Hanko Stamp Badges

- Verification badges and tags take inspiration from traditional Japanese red ink name stamps (_Hanko_): square/rectangular rounded boxes with thin outer lines, uppercase monospace typography, and a slight tilt or clean offset.

---

## 3. Global CSS & Patterns (`src/styles/globals.css`)

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&family=Space+Mono:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Halftone Dotted Background */
body {
  background-color: #f5f2ec;
  background-image: radial-gradient(#d8d3c7 1.75px, transparent 1.75px);
  background-size: 22px 22px;
  color: #14171a;
  font-family: "Inter", sans-serif;
}

/* Localized Memphis Dot Pattern for Cards */
.memphis-dots-blue {
  background-image: radial-gradient(#1c3b57 1.5px, transparent 1.5px);
  background-size: 12px 12px;
}

.memphis-dots-vermilion {
  background-image: radial-gradient(#c84b31 1.5px, transparent 1.5px);
  background-size: 10px 10px;
}
```

---

## 4. Reusable Bento System Components

### Stamp Badge Component (`src/components/ui/StampBadge.jsx`)

```jsx
import React from "react";

export const StampBadge = ({ children, variant = "vermilion" }) => {
  const styles = {
    vermilion: "border-vermilion text-vermilion bg-vermilion-light",
    prussian: "border-prussian text-prussian bg-prussian/5",
    ink: "border-ink text-ink bg-canvas",
  };

  return (
    <span
      className={`inline-block border-2 px-2.5 py-0.5 text-xs font-mono font-bold uppercase tracking-wider rounded-md shadow-[2px_2px_0px_0px_rgba(20,23,26,0.15)] ${styles[variant]}`}
    >
      {children}
    </span>
  );
};
```

---

## 5. Visual Layout Example (Bento Box Hero & Grid)

Below is a complete implementation of the **X-Ray Home Landing Bento Grid** utilizing this Print-Bento + Memphis system.

```jsx
// src/components/landing/BentoHeroSection.jsx
import React from "react";
import {
  FiSearch,
  FiArrowUpRight,
  FiLock,
  FiCheckCircle,
} from "react-icons/fi";
import { StampBadge } from "../ui/StampBadge";

export const BentoHeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Editorial Header Block */}
      <div className="mb-10 text-center md:text-left flex flex-col md:flex-row justify-between items-end border-b-2 border-ink pb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <StampBadge variant="vermilion">
              ETHIOPIAN WORKPLACE TRANSPARENCY
            </StampBadge>
            <span className="font-mono text-xs text-ink-muted">
              #2026_EDITION
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-ink tracking-tight">
            SEE BEYOND <br />
            <span className="text-prussian underline decoration-vermilion decoration-4 underline-offset-8">
              THE JOB POST.
            </span>
          </h1>
        </div>
        <p className="max-w-md text-ink-muted font-body text-base mt-4 md:mt-0">
          Anonymous salary data, honest interview experiences, and real company
          culture reviews for professionals across Ethiopia.
        </p>
      </div>

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Bento Box 1: Large Search & Value Prop (8 Columns) */}
        <div className="md:col-span-8 bg-white border-2 border-ink rounded-xl p-8 shadow-print relative overflow-hidden flex flex-col justify-between min-h-[320px]">
          {/* Memphis Accent Background Graphic */}
          <div className="absolute -right-10 -top-10 w-40 h-40 memphis-dots-blue opacity-30 rounded-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-xs font-bold text-ink uppercase tracking-widest">
                [ 01 // GLOBAL DIRECTORY ]
              </span>
              <StampBadge variant="prussian">3,400+ VERIFIED POSTS</StampBadge>
            </div>

            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4">
              Should you work here? <br />
              <span className="text-ink-muted text-lg font-normal">
                Search over 450+ companies operating in Addis Ababa & regional
                hubs.
              </span>
            </h2>
          </div>

          {/* Large Print-Style Search Bar */}
          <div className="relative mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-ink w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search company, job title, or salary..."
                  className="w-full bg-canvas border-2 border-ink pl-12 pr-4 py-3.5 rounded-lg text-ink font-body placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-prussian font-medium"
                />
              </div>
              <button className="bg-prussian hover:bg-prussian-hover text-white font-display font-bold px-8 py-3.5 rounded-lg border-2 border-ink shadow-print transition-all active:translate-x-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2">
                <span>EXPLORE</span>
                <FiArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bento Box 2: Anonymity Guarantee Card (4 Columns) */}
        <div className="md:col-span-4 bg-prussian text-white border-2 border-ink rounded-xl p-6 shadow-print flex flex-col justify-between relative">
          <div className="flex items-center justify-between">
            <FiLock className="w-8 h-8 text-ochre" />
            <span className="font-mono text-xs text-canvas/70">
              100% ANONYMOUS
            </span>
          </div>

          <div className="my-6">
            <h3 className="text-xl font-display font-bold text-white mb-2">
              Cryptographically Detached Identity.
            </h3>
            <p className="text-sm text-canvas/80 leading-relaxed">
              We store your login credentials solely to verify you are a real
              person. Your account is never linked to your public reviews,
              salaries, or interview posts.
            </p>
          </div>

          <div className="border-t border-white/20 pt-4 flex items-center justify-between text-xs font-mono">
            <span>NO PERSONAL NAMES</span>
            <span className="text-ochre font-bold">STRICT POLICY</span>
          </div>
        </div>

        {/* Bento Box 3: Salary Highlight Card (4 Columns) */}
        <div className="md:col-span-4 bg-white border-2 border-ink rounded-xl p-6 shadow-print flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="font-mono text-xs font-bold text-ink-muted">
                [ NET ETB PAY ]
              </span>
              <StampBadge variant="vermilion">HIGHEST PAYING</StampBadge>
            </div>
            <h4 className="text-lg font-display font-bold text-ink">
              Senior Backend Engineer
            </h4>
            <p className="text-sm text-ink-muted">Fintech • Addis Ababa</p>
          </div>

          <div className="my-6 p-4 bg-canvas border border-ink/20 rounded-lg">
            <div className="text-3xl font-display font-bold text-prussian">
              75,000{" "}
              <span className="text-sm font-mono font-normal text-ink">
                ETB / mo
              </span>
            </div>
            <span className="text-xs text-ink-muted font-mono mt-1 block">
              + 12,000 ETB Transport & Fuel Allowance
            </span>
          </div>

          <div className="flex justify-between items-center text-xs font-mono font-bold">
            <span className="text-ink">5 SALARY ENTRIES</span>
            <span className="text-prussian underline cursor-pointer">
              VIEW BREAKDOWN →
            </span>
          </div>
        </div>

        {/* Bento Box 4: Recent Company Culture Review (8 Columns) */}
        <div className="md:col-span-8 bg-white border-2 border-ink rounded-xl p-6 shadow-print flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Memphis Dot Accent */}
          <div className="absolute right-0 bottom-0 w-32 h-32 memphis-dots-vermilion opacity-20 pointer-events-none" />

          <div>
            <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-display font-bold text-ink">
                  Ethio-Tech Solutions
                </span>
                <FiCheckCircle className="text-emerald-600 w-4 h-4" />
              </div>
              <div className="flex items-center gap-1 bg-ochre/20 border border-ink/30 px-2.5 py-1 rounded font-mono font-bold text-xs">
                <span>★ 4.2</span>
                <span className="text-ink-muted">(48 Reviews)</span>
              </div>
            </div>

            <p className="font-display font-semibold text-lg text-ink mb-2">
              "Great engineering culture and standard work hours, but career
              growth can be slow."
            </p>
            <p className="text-sm text-ink-muted line-clamp-2 mb-4">
              Pros: Management respects work-life balance. Overtime is rare and
              compensated. Modern stack (Go, React). Cons: Annual salary
              adjustments often lag behind local inflation rates.
            </p>
          </div>

          <div className="border-t-2 border-canvas pt-4 flex flex-wrap justify-between items-center text-xs font-mono text-ink-muted">
            <span>CURRENT EMPLOYEE • MID-LEVEL DEV</span>
            <span className="text-vermilion font-bold">RECOMMENDS COMPANY</span>
          </div>
        </div>
      </div>
    </section>
  );
};
```

---

## 6. How This System Answers Your Vision

1. **Feels Like Print:** Uses off-white parchment textures (`#F5F2EC`), strict rule dividers (`border-b-2 border-ink`), and uppercase monospace metadata headers (`[ 01 // GLOBAL DIRECTORY ]`).
2. **Bold Ink Accents:** Solid 2px dark charcoal borders and offset drop shadows (`shadow-print`) make cards pop visually off the screen like printed ink plates.
3. **Memphis Texture Nuance:** Radial halftone dot overlays (`memphis-dots-blue`) give visual depth to empty spaces without adding heavy gradients or 3D blur effects.
4. **Hokusai Color Palette:** Combines deep Prussian Blue (`#1C3B57`), Hanko Vermilion (`#C84B31`), and Monastic Ochre (`#E5A93C`) to maintain cultural grounding and professionalism.
