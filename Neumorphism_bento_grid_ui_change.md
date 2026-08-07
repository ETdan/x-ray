# UI Design System

## Bento Grid × Soft Neumorphism

## 1. Design Objective

Redesign the application around a **Bento Grid + refined Neumorphic visual system**.

The product is intended for broad, everyday usage, so the design must remain:

- familiar
- highly usable
- accessible
- professional
- responsive
- visually calm
- modern

The design should feel **premium and tactile**, but never strange or overly experimental.

The primary visual concept is:

> **A modern digital workspace composed of soft, tactile information blocks arranged in an intelligent Bento Grid.**

---

# 2. Core Design Philosophy

Use two ideas together:

### Bento Grid = Structure

Bento determines:

- layout
- hierarchy
- information grouping
- visual rhythm
- content density
- responsive composition

### Neumorphism = Material

Neumorphism determines:

- depth
- surfaces
- shadows
- pressed states
- elevation
- tactile interaction

Do not use neumorphism to determine the entire layout.

Do not turn every element into a floating pill.

---

# 3. Desired Feeling

The interface should feel:

**Soft**

**Calm**

**Precise**

**Premium**

**Organized**

**Tactile**

**Modern**

Think:

> A high-quality physical desk transformed into a digital interface.

Cards feel like soft surfaces.

Buttons feel pressable.

Panels feel slightly elevated.

The overall composition feels organized like a Bento box.

---

# 4. Design Balance

Target approximately:

### 50% — Mainstream UI

Keep conventional:

- navigation
- buttons
- forms
- dropdowns
- tables
- tabs
- search
- filters
- modals

### 30% — Bento Composition

Use:

- asymmetric grids
- large feature blocks
- compact information cards
- statistics
- content modules
- dashboards
- visual groupings

### 20% — Neumorphic Material

Use:

- soft elevation
- inset surfaces
- subtle shadows
- tactile controls
- pressed states

Neumorphism should be noticeable, but restrained.

---

# 5. Global Background

Use a soft neutral background.

Recommended:

```text
#E9ECE8
```

Alternative:

```text
#EEF0EC
#E7E9E5
#F1F2EF
```

The background should be slightly darker than pure white so elevated surfaces are visible.

Avoid:

- pure white everywhere
- dark gradients
- colorful gradients
- textured paper backgrounds

The visual identity here comes from **light, shadow, and geometry**, not texture.

---

# 6. Surface Colors

Primary surface:

```text
#EEF0EC
```

Secondary surface:

```text
#E5E8E4
```

Elevated surface:

```text
#F4F5F2
```

White can still be used for important content areas, but avoid making every surface pure white.

The interface should feel like one continuous material.

---

# 7. Color System

Use a restrained neutral palette with one strong accent.

Recommended primary accent:

### Deep Blue

```text
#315A78
```

Supporting colors:

```text
Indigo:    #526D82
Green:     #5E8068
Ochre:     #C99A42
Coral:     #C66B5C
```

Use accent colors selectively.

Most of the application should remain neutral.

---

# 8. Color Philosophy

Do not make every Bento card a different color.

Instead:

```text
Neutral background
        ↓
Neutral surfaces
        ↓
Dark typography
        ↓
One primary accent
        ↓
Occasional secondary accents
```

Color communicates hierarchy.

It should not become decoration.

---

# 9. Typography

Typography should provide most of the hierarchy.

Use a modern sans-serif.

Recommended:

- Inter
- Geist
- DM Sans
- Plus Jakarta Sans

Use:

### Large

Hero headlines

Major statistics

Page titles

### Medium

Card titles

Section headings

### Small

Metadata

Descriptions

Labels

Avoid excessive uppercase text.

Neumorphic interfaces benefit from calm typography.

---

# 10. Bento Grid System

Use a 12-column responsive grid on desktop.

Example:

```text
┌───────────────────────────────┬──────────────┐
│                               │              │
│        FEATURED CONTENT       │   STATISTIC  │
│                               │              │
├──────────────┬────────────────┴──────────────┤
│              │                               │
│   CATEGORY   │        MAIN CONTENT           │
│              │                               │
├──────────────┴──────────────┬────────────────┤
│                             │                │
│        INSIGHT              │     ACTION     │
│                             │                │
└─────────────────────────────┴────────────────┘
```

Do not force every page into the exact same grid.

The Bento system should be flexible.

---

# 11. Bento Rules

Every major page should contain:

- one primary focal area
- supporting information blocks
- secondary actions
- contextual information

Avoid:

```text
Card
Card
Card
Card
Card
Card
```

Instead create visual relationships.

For example:

```text
Large feature
+
small statistic
+
medium content
+
small action
```

The size of a block should communicate importance.

---

# 12. Card Design

Cards should feel like soft physical surfaces.

Default:

```text
background: #EEF0EC

border: none

border-radius: 18px

shadow:
  8px 8px 18px rgba(...)
  -8px -8px 18px rgba(...)
```

Use subtle dual-direction shadows.

The light source should remain consistent throughout the application.

---

# 13. Neumorphic Shadow System

Define a small number of elevation levels.

### Level 1 — Subtle

For:

- cards
- navigation
- small containers

### Level 2 — Elevated

For:

- important cards
- floating panels
- featured content

### Level 3 — Interactive

For:

- buttons
- controls
- active elements

### Inset

For:

- inputs
- selected states
- toggles
- pressed buttons

Do not invent a new shadow for every component.

Use a consistent elevation system.

---

# 14. Important Neumorphism Rule

Do NOT make everything neumorphic.

Neumorphism becomes visually muddy when every object has:

- large shadows
- rounded corners
- floating depth

Use flat surfaces when appropriate.

Use neumorphism to emphasize:

**interaction and hierarchy.**

---

# 15. Buttons

Buttons should feel tactile.

Primary button:

- accent background
- soft elevation
- moderate radius
- strong readable text

On hover:

```text
slightly increased elevation
```

On active:

```text
pressed / inset appearance
```

Conceptually:

```text
REST
╭──────────────╮
│   EXPLORE    │
╰──────────────╯

ACTIVE
╭──────────────╮
│   EXPLORE    │
╰──────────────╯
   pressed
```

The button should feel physically pressable.

---

# 16. Inputs

Inputs should use subtle inset depth.

Default:

```text
background: same as surrounding surface

border: none

box-shadow: inset ...
```

Focus:

- accent outline
- subtle glow
- increased contrast

Never sacrifice accessibility for the soft aesthetic.

---

# 17. Navigation

Keep navigation conventional.

Desktop:

- clean horizontal navigation
- logo
- primary links
- user actions

Mobile:

- standard mobile navigation
- clear touch targets

The visual identity comes from:

- spacing
- surface treatment
- typography
- subtle elevation

Do not invent unusual navigation patterns.

---

# 18. Hero Sections

Hero sections should use Bento composition rather than a conventional centered landing-page hero.

Example:

```text
┌─────────────────────────────────────────────┐
│                                             │
│   LARGE TITLE              ┌─────────────┐  │
│   SUPPORTING TEXT          │  STATISTIC  │  │
│                            └─────────────┘  │
│   [ PRIMARY ACTION ]                        │
│                                             │
└─────────────────────────────────────────────┘
```

The hero should communicate the product value immediately.

Avoid giant empty hero areas.

---

# 19. Statistics

Statistics are ideal Bento elements.

Example:

```text
┌────────────────────────┐
│                        │
│        3,420           │
│        reviews         │
│                        │
│        +18.4%          │
│                        │
└────────────────────────┘
```

Use large numbers.

Use small supporting metadata.

Use accent color only for important changes.

---

# 20. Charts

Charts should integrate naturally with Bento cards.

Avoid overly decorative dashboards.

Use:

- clean axes
- restrained colors
- generous whitespace
- clear labels

Charts should feel like information, not decoration.

---

# 21. Tables

Tables should remain mostly flat.

Do not make every row look like a floating neumorphic card.

Use:

- clean typography
- subtle separators
- grouped headers
- soft hover states

Neumorphism is not appropriate for every data-heavy interaction.

---

# 22. Forms

Forms should feel calm and spacious.

Use:

- large touch targets
- clear labels
- soft surfaces
- inset fields
- clear validation

Avoid overly compact forms.

---

# 23. Border Usage

Neumorphism naturally reduces the need for borders.

Default:

```text
No visible border
```

Use borders only when needed for:

- accessibility
- separation
- focus
- data-heavy interfaces
- image framing

The primary hierarchy should come from:

**surface + shadow + spacing.**

---

# 24. Radius System

Use a consistent radius scale.

Small:

```text
10px
```

Medium:

```text
16px
```

Large:

```text
20px
```

Extra large:

```text
28px
```

Bento cards can use larger radii.

Controls should generally use smaller radii.

Avoid excessive pill-shaped UI.

---

# 25. Decorative Elements

Keep decoration minimal.

Possible:

- subtle circles
- small geometric forms
- soft gradients
- abstract line patterns

But decoration should remain secondary.

The Bento composition itself provides enough visual interest.

---

# 26. Gradients

Gradients are allowed, but only extremely subtle.

Good:

```text
background:
linear-gradient(...)
```

Bad:

```text
bright blue → purple → pink
```

Gradients should simulate light or material variation.

They should not become the main design element.

---

# 27. Imagery

Images should sit naturally inside Bento containers.

Use:

- rounded image frames
- large crops
- soft elevation
- editorial compositions

Images can break the grid slightly to create visual interest.

---

# 28. Empty States

Empty states should use the same visual system.

Example:

```text
┌─────────────────────────────────┐
│                                 │
│             ◯                   │
│                                 │
│       Nothing here yet          │
│                                 │
│       supporting text           │
│                                 │
│        [ GET STARTED ]          │
│                                 │
└─────────────────────────────────┘
```

Use subtle illustrations rather than generic icons when appropriate.

---

# 29. Motion

Motion should reinforce physicality.

Use:

### Hover

Slight elevation.

### Press

Inset shadow.

### Enter

Small fade / translate.

### Loading

Soft transitions.

Avoid:

- bouncing
- excessive scaling
- dramatic movement
- long animations

Target:

```text
150–250ms
```

---

# 30. Mobile Design

Bento must adapt intelligently.

Desktop:

```text
12-column grid
```

Tablet:

```text
6-column grid
```

Mobile:

```text
2-column or 1-column composition
```

Do not simply make every card full width.

Some smaller Bento elements can remain side-by-side on mobile.

---

# 31. Accessibility

Neumorphism has a known accessibility problem: low contrast.

Therefore:

- text must maintain strong contrast
- controls must have clear boundaries
- focus states must be obvious
- active states must be distinguishable
- don't rely only on shadows
- don't rely only on color

If an element becomes difficult to identify because of the aesthetic, simplify it.

---

# 32. Avoid These Patterns

Do NOT create:

- excessive floating cards
- giant shadows
- extreme rounded corners
- low-contrast text
- monochrome interfaces with no hierarchy
- every element looking embossed
- every button looking like a physical object
- excessive gradients
- excessive blur
- glassmorphism
- crypto dashboard aesthetics
- generic AI SaaS aesthetics

---

# 33. Design Hierarchy

Use this hierarchy:

```text
CONTENT
   ↓
BENTO COMPOSITION
   ↓
TYPOGRAPHY
   ↓
SPACING
   ↓
SURFACE
   ↓
SHADOW
   ↓
COLOR
   ↓
DECORATION
```

Content always comes first.

The visual system should support the content.

---

# 34. Agent Implementation Instructions

Before modifying the application:

1. Inspect the existing application.
2. Identify all major pages.
3. Identify shared components.
4. Identify the current design tokens.
5. Identify repeated UI patterns.

Then:

### Phase 1 — Foundation

Implement:

- colors
- typography
- spacing
- radius
- shadows
- surfaces

### Phase 2 — Layout

Implement:

- Bento grid
- responsive grid
- page-level compositions

### Phase 3 — Components

Update:

- cards
- buttons
- inputs
- navigation
- modals
- tables
- forms

### Phase 4 — Interaction

Add:

- hover elevation
- pressed states
- focus states
- subtle transitions

### Phase 5 — Refinement

Remove unnecessary decoration.

Check consistency.

Check mobile.

Check accessibility.

---

# 35. Critical Instruction

Do not simply apply:

```text
border-radius: 20px
box-shadow: ...
```

to the existing application.

That is NOT a redesign.

The layout itself must become more intentional.

Use Bento composition to determine:

- what deserves attention
- what belongs together
- what is secondary
- what can be compact
- what should be visually dominant

Then use Neumorphism to give those structures depth.

---

# 36. Final Visual Target

The final product should feel like:

> **A modern digital workspace built from carefully arranged soft surfaces.**

It should be:

**Bento in structure.**

**Neumorphic in material.**

**Mainstream in interaction.**

**Minimal in decoration.**

**Premium in execution.**

The user should notice the design quality without needing to think:

> "This website uses neumorphism."

That is the goal.

The aesthetic should feel natural rather than technically obvious.
