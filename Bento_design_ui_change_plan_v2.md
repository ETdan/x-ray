# Visual Design System

## Editorial Print × Japanese Woodblock × Subtle Memphis

## 1. Design Direction

Redesign the application's visual identity around an **editorial print aesthetic**.

The product is intended for mass usage, so usability and familiarity are more important than stylistic experimentation.

The interface should feel:

- modern
- trustworthy
- polished
- editorial
- distinctive
- approachable
- professional

The design should **not** feel aggressively brutalist.

The goal is:

> **A familiar modern web application wrapped in the visual language of a beautifully designed printed publication.**

Think:

**Modern SaaS usability + editorial magazine design + Japanese print aesthetics + subtle Memphis graphics.**

---

# 2. Most Important Principle

## Style the UI — don't redesign how UI works.

Users should already understand:

- navigation
- buttons
- forms
- cards
- dropdowns
- tabs
- tables
- search
- filters
- modals
- pagination

Do not make these elements unnecessarily experimental.

The uniqueness should come primarily from:

- background
- color
- typography
- spacing
- imagery
- patterns
- borders
- composition
- decorative elements
- editorial details

The interface should remain immediately understandable.

---

# 3. Visual Balance

Use approximately this balance:

### 60% — Mainstream / Familiar UI

Standard:

- navigation
- buttons
- inputs
- cards
- tables
- forms
- responsive layouts
- conventional interaction patterns

### 25% — Editorial Print

Use:

- warm paper background
- typography hierarchy
- editorial spacing
- section dividers
- captions
- labels
- large headlines
- magazine-like compositions

### 10% — Japanese Print

Use:

- Prussian blue
- indigo
- vermilion
- ochre
- subtle woodblock-inspired graphics
- stamp-like accents

### 5% — Memphis

Use:

- dots
- lines
- geometric shapes
- small patterns
- decorative corner elements

Memphis should be **accent**, not the identity.

---

# 4. Overall Visual Feeling

Imagine a premium magazine or annual industry report transformed into a modern website.

The website should feel like it was:

- printed on warm paper
- carefully typeset
- illustrated with Japanese woodblock colors
- photographed by an editorial design team
- then converted into a modern digital product

Avoid making it look like an actual paper document.

It should still clearly be a modern website.

---

# 5. Background

The background is one of the most important parts of the visual identity.

Use a warm paper tone rather than standard white.

Recommended base:

```text
#F5F2EC
```

Alternative supporting tones:

```text
#FAF8F3
#EFEAE0
#E8E2D7
```

The background can contain an extremely subtle texture.

Possible treatments:

- tiny paper grain
- faint halftone dots
- very subtle grid
- sparse decorative patterns

The texture should be almost invisible at first glance.

### Important

Do NOT create a heavily patterned background.

The background should support the content, not compete with it.

---

# 6. Color System

The color palette should be inspired by Japanese woodblock printing while remaining contemporary.

## Primary Colors

### Paper

```text
#F5F2EC
```

Primary application background.

### Ink

```text
#202326
```

Primary text and structural color.

Avoid pure `#000000`.

### Prussian Blue

```text
#234765
```

Primary brand/accent color.

Use for:

- primary buttons
- important links
- headings
- charts
- featured areas
- selected states

### Indigo

```text
#344E63
```

Secondary blue.

### Vermilion

```text
#C9553D
```

Use sparingly for:

- alerts
- highlights
- important tags
- decorative elements
- selected editorial accents

### Ochre

```text
#D6A13A
```

Use for:

- ratings
- highlights
- small illustrations
- secondary emphasis

### Muted Green

```text
#657C68
```

Use for:

- success
- verified states
- positive indicators

---

# 7. Color Usage Rule

Do not turn every component into a colored component.

Most UI should remain:

**paper + white + ink**

with occasional:

**blue + vermilion + ochre**

Color should create hierarchy.

It should not become decoration everywhere.

---

# 8. Cards

Cards should remain familiar.

Do NOT turn every card into a brutalist block.

Use:

- white/off-white surfaces
- subtle borders
- modest corner radius
- very light shadows
- generous spacing

Recommended visual direction:

```text
border: 1px solid rgba(32,35,38,0.18)
border-radius: 12px
```

Some featured/editorial cards may use stronger borders.

Use heavier borders intentionally rather than universally.

---

# 9. Borders

Borders are inspired by printed layouts and editorial rule lines.

Use borders primarily for:

- section separation
- card boundaries
- table rows
- image frames
- headers
- editorial dividers

Most borders should be:

```text
1px
```

Occasionally use:

```text
2px
```

for important visual elements.

Avoid putting a thick dark border around every component.

---

# 10. Shadows

Move away from the heavy neo-brutalist offset shadow.

The default should be:

- subtle
- short
- soft

Example:

```text
0 2px 8px rgba(32,35,38,0.06)
```

For selected editorial components, a slightly harder shadow can be used.

Hard offset shadows should be an accent rather than the default card treatment.

---

# 11. Typography

Typography should carry much of the visual identity.

Use a combination of:

### Display Font

A distinctive but highly readable sans-serif.

Examples:

- Space Grotesk
- Sora
- DM Sans
- Plus Jakarta Sans

Use for:

- large headings
- important numbers
- section titles

### Body Font

Use a neutral highly readable font.

Examples:

- Inter
- Source Sans 3
- DM Sans

Use for:

- paragraphs
- forms
- navigation
- descriptions

### Mono / Editorial Metadata

Use sparingly.

Examples:

- IBM Plex Mono
- Space Mono

Use for:

- dates
- metadata
- category labels
- data identifiers
- small editorial captions

Do not use monospace throughout the interface.

---

# 12. Editorial Typography

Large headings should occasionally break the normal application layout.

Use:

- oversized titles
- intentional line breaks
- varying text sizes
- strong whitespace
- small metadata above headings
- editorial captions

Example structure:

```text
[ WORKPLACE DATA / 2026 ]

THE REAL
WORKPLACE
STORY.

Anonymous experiences,
salary information and
company insights.
```

This is where the design should feel different from a normal SaaS product.

---

# 13. Editorial Labels

Introduce small editorial labels throughout the application.

Examples:

```text
01 / COMPANIES
02 / SALARIES
03 / REVIEWS
04 / INSIGHTS
```

or:

```text
WORKPLACE DATA
2026 EDITION
VERIFIED
FEATURED
TRENDING
```

These labels should be subtle.

They create the feeling of a publication without compromising usability.

---

# 14. Japanese Print Influence

Japanese influence should be subtle.

Do not turn the interface into a Japanese-themed website.

Use the influence primarily through:

### Colors

Prussian blue

Indigo

Vermilion

Ochre

Warm paper

### Composition

Large empty spaces

Strong visual framing

Asymmetric but balanced layouts

### Graphics

Very subtle:

- waves
- mountains
- sun circles
- woodblock textures
- line illustrations

These should appear occasionally in hero sections, empty states, banners, and featured content.

---

# 15. Hokusai-Inspired Elements

Use Hokusai-inspired visual language rather than literal copies.

For example:

- wave-like line patterns
- layered blue shapes
- mountain silhouettes
- circular sun elements
- flowing organic lines

Do not make these elements appear everywhere.

They should work like illustrations in a magazine.

---

# 16. Memphis Elements

Memphis should be extremely restrained.

Use small:

- dotted patterns
- circles
- diagonal lines
- geometric shapes
- grids

Good locations:

- corners of hero sections
- empty areas
- behind illustrations
- section headers
- featured cards

Avoid:

- random shapes floating everywhere
- bright geometric backgrounds
- excessive dots
- playful childish graphics

---

# 17. Bento Layout

Keep the Bento concept, but make it **editorial rather than brutalist**.

Use Bento layouts to create interesting compositions.

For example:

```text
┌──────────────────────────────┬───────────────┐
│                              │               │
│       FEATURED CONTENT       │   STATISTIC   │
│                              │               │
├───────────────┬──────────────┴───────────────┤
│               │                              │
│   INSIGHT     │       FEATURED REVIEW        │
│               │                              │
└───────────────┴──────────────────────────────┘
```

Cards should not all look identical.

Vary:

- size
- content density
- typography
- imagery
- composition

while maintaining the same visual language.

---

# 18. Navigation

Navigation should remain conventional.

Do not create an experimental navigation system.

Use:

- clean header
- readable navigation
- clear active state
- strong typography
- subtle paper background
- minimal border/divider

The branding and typography can make the navigation distinctive.

The interaction should remain familiar.

---

# 19. Buttons

Buttons should look modern and mainstream.

Avoid oversized brutalist buttons.

Primary button:

- Prussian blue
- white text
- moderate radius
- medium/heavy typography
- subtle shadow
- comfortable padding

Secondary button:

- paper/white background
- ink border
- dark text

Hover states can use:

- slight color change
- tiny translation
- subtle shadow change

No dramatic animation.

---

# 20. Inputs

Inputs should be conventional and extremely usable.

Use:

- white/paper background
- 1px ink border
- moderate radius
- clear labels
- strong focus state

Avoid:

- pill-shaped inputs
- excessive borders
- oversized fields
- decorative input backgrounds

---

# 21. Tables and Data

Data-heavy screens must prioritize readability.

Do not sacrifice usability for the aesthetic.

Use:

- strong typography
- clear columns
- subtle row separators
- paper background
- restrained accent colors
- editorial headers

Numbers should be visually prominent where useful.

---

# 22. Images

Images are an opportunity to reinforce the editorial identity.

Use:

- strong crops
- unusual but intentional aspect ratios
- framed images
- captions
- editorial placement

Image frames can occasionally use:

```text
1px–2px ink border
```

Avoid generic rounded image cards everywhere.

---

# 23. Illustrations

Illustrations should feel:

- editorial
- hand-crafted
- slightly imperfect
- print-inspired

Prefer:

- line illustrations
- woodblock-style illustrations
- limited-color illustrations
- geometric editorial illustrations

Avoid:

- generic SaaS illustrations
- 3D gradient illustrations
- cartoon characters
- overly colorful vector art

---

# 24. Radius

Do not eliminate rounded corners completely.

The application should remain modern.

Recommended range:

```text
8px – 14px
```

Use larger radius only for specific visual elements.

Avoid excessive pill shapes.

---

# 25. Spacing

Spacing should feel editorial.

Prefer:

- generous section spacing
- strong margins
- breathing room around headings
- larger gaps between major sections

Do not fill every available space.

Whitespace is part of the design.

---

# 26. Motion

Keep motion subtle.

Use animation to communicate interaction, not decoration.

Good:

- 150–250ms transitions
- slight movement
- opacity changes
- shadow changes
- small image movement

Avoid:

- bouncing
- excessive scaling
- long transitions
- parallax-heavy effects

---

# 27. Responsive Design

The visual identity must survive mobile.

Do not simply stack every desktop card vertically.

On mobile:

- preserve editorial hierarchy
- preserve important visual compositions
- simplify decorative elements
- maintain whitespace
- keep typography intentional

The mobile version should feel like a mobile editorial publication, not a collapsed desktop dashboard.

---

# 28. Accessibility

The aesthetic must never reduce accessibility.

Maintain:

- sufficient color contrast
- visible focus states
- readable font sizes
- semantic HTML
- keyboard navigation
- accessible form labels
- accessible buttons
- reduced-motion support

---

# 29. Component Consistency

The system should feel cohesive without making every component identical.

Consistency should come from:

- color palette
- typography
- spacing
- borders
- background
- imagery
- editorial labels
- visual rhythm

Not from every card having the same exact style.

---

# 30. What NOT To Do

Do NOT make the redesign:

- neo-brutalist
- overly geometric
- childish
- cartoonish
- overly Japanese
- overly decorative
- overly colorful
- futuristic
- glassmorphic
- gradient-heavy
- crypto-looking
- AI-startup-looking
- generic SaaS

Especially avoid:

```text
thick border + hard shadow
```

on every component.

That is too brutalist for this product.

---

# 31. Priority Order

When making design decisions, follow this order:

### 1. Usability

Can the user understand and use it immediately?

### 2. Hierarchy

Can the user understand what is important?

### 3. Typography

Does the content have strong visual structure?

### 4. Layout

Does the composition feel intentional?

### 5. Color

Does the palette reinforce hierarchy?

### 6. Editorial Style

Does it feel like a designed publication?

### 7. Decorative Details

Only add decoration when it improves the composition.

---

# 32. Agent Instructions

When modifying the existing application:

1. Inspect the existing UI before changing it.
2. Preserve existing functionality.
3. Preserve existing information architecture unless there is a strong UX reason to change it.
4. Do not blindly apply the same style to every component.
5. Establish the global visual system first.
6. Update typography and background first.
7. Update major layouts second.
8. Update components third.
9. Add decorative elements last.
10. Keep decorative elements sparse.
11. Reuse the visual system across all pages.
12. Do not introduce unnecessary dependencies.
13. Do not replace functional components merely for visual reasons.
14. Ensure desktop and mobile both feel intentional.
15. After implementation, inspect the entire application for visual consistency.

---

# 33. Final Design Test

After implementing the redesign, ask:

### First impression

Does this look different from a generic SaaS application?

### Usability

Would a first-time user immediately understand the interface?

### Professionalism

Would this feel appropriate for a serious product with hundreds of thousands of users?

### Personality

Does it have a recognizable visual identity?

### Restraint

Are the decorative elements supporting the interface rather than competing with it?

### Editorial quality

Does it feel carefully designed rather than simply themed?

---

# Final Direction

The target is NOT:

> "A brutalist website with Japanese colors."

The target IS:

> **"A modern, mainstream digital product with the visual sophistication of an editorial publication, printed on warm paper and influenced by Japanese woodblock colors and subtle Memphis graphics."**

When in doubt:

**Choose usability over style.**

**Choose editorial over brutalism.**

**Choose subtlety over decoration.**

**Choose recognizable UI patterns over experimentation.**

The product should feel **familiar enough for mass adoption, but distinctive enough that users remember it.**
