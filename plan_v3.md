# X-Ray Frontend Specification — React + JSX

## Project Overview

### Project Name

**X-Ray**

### Tagline

**See beyond the job post.**

### Mission

X-Ray exists to bring transparency to the Ethiopian job market.

Today’s job market heavily favors employers. Candidates invest significant time preparing applications and interviews while having limited information about the companies they are applying to.

Important details such as:

- Salary
- Work-life balance
- Company culture
- Interview experiences
- Benefits
- Employee satisfaction
- Career growth

are often unavailable.

X-Ray shifts part of that power back to job seekers by allowing employees and candidates to anonymously share workplace experiences.

The central product question is:

> **Should I work here?**

X-Ray should not feel like a traditional job board.

It should feel like a **trusted workplace intelligence platform** where jobs are one part of a larger company-focused experience.

---

# 1. Product Design Direction

## Core Design Concept

The interface should combine three ideas:

### Stripe

Use Stripe as inspiration for:

- Strong typography
- Clear hierarchy
- Generous whitespace
- Flat layouts
- High-quality information presentation
- Restrained use of color
- Professional visual language

### Glassdoor

Use Glassdoor as inspiration for:

- Company-centered information
- Reviews
- Salary data
- Interview experiences
- Ratings
- Dense but highly scannable information

### Modern Glass / Layered UI

Use subtle glass-like surfaces for:

- Navigation
- Search
- Featured content
- Floating panels
- Important statistics
- Hero sections

However, **glassmorphism must remain subtle**.

The product must never look like a futuristic crypto dashboard or design experiment.

---

## Overall Visual Personality

The site should feel:

- Serious
- Trustworthy
- Modern
- Confident
- Data-driven
- Friendly
- Slightly playful
- Premium
- Ethiopian-market appropriate

The goal is:

> **Professional first, personality second.**

Not:

> Design trend first, usability second.

---

# 2. Visual Design Principles

## 2.1 Serious Foundation

The majority of the interface should use:

- White
- Off-white
- Very light neutral backgrounds
- Dark text
- Neutral borders
- Subtle shadows

The interface should remain visually calm even when displaying large amounts of data.

---

## 2.2 Controlled Bright Color

Use **one primary brand color** and a small number of semantic colors.

Do not create a rainbow UI.

### Recommended Palette

```text
Brand Primary:
#4F46E5

Brand Accent:
#FACC15

Background:
#F8FAFC

Surface:
#FFFFFF

Surface Glass:
rgba(255,255,255,0.70)

Primary Text:
#172033

Secondary Text:
#64748B

Border:
#E2E8F0

Positive:
#16A34A

Negative:
#DC2626

Warning:
#F59E0B
```

### Color Philosophy

Indigo remains the primary identity.

Yellow is used sparingly for:

- Featured content
- Important statistics
- Highlights
- Small decorative elements
- Calls to action
- Rating-related emphasis

Yellow should **not** become a secondary primary color.

The combination should make the interface feel more alive without making it childish.

---

# 3. Visual Language

## 3.1 Flat + Glass

The default UI should be mostly flat.

Use glass surfaces only where they improve hierarchy.

Examples:

- Sticky navbar
- Search overlay
- Hero search panel
- Featured company cards
- Floating filters
- Modal dialogs
- Important statistics

Avoid applying glass effects to every card.

---

## 3.2 No Heavy Neumorphism

Neumorphism should **not** be used as the primary design language.

Avoid:

- Excessive inner shadows
- Soft inflated buttons
- Pillow-like cards
- Low-contrast controls

The interface must remain accessible and information-dense.

---
X-Ray is a mass-market product.

The design should be distinctive without becoming difficult to use.

---

# 4. Cards

Cards should feel more like **information surfaces** than generic dashboard boxes.

### Default Card

```text
Background: white
Border: 1px solid #E2E8F0
Radius: 14–18px
Shadow: very subtle
Padding: 20–28px
```

### Important Cards

Featured cards may use:

- Glass background
- Slightly stronger shadow
- Brand accent
- Image
- Larger typography

### Avoid

Do not put every element inside a card.

Large sections should sometimes exist directly on the page.

This prevents the interface from becoming:

> “card inside card inside card.”

---

# 5. Typography

Use a modern professional sans-serif.

Recommended:

- Inter
- Geist
- Plus Jakarta Sans

Typography should create hierarchy through:

- Size
- Weight
- Spacing
- Contrast

rather than excessive decoration.

### Example Scale

```text
Hero:
56–72px

Page heading:
40–48px

Section heading:
24–32px

Card heading:
18–22px

Body:
15–17px

Metadata:
13–14px
```

---

# 6. Imagery

Images are now a meaningful part of the product.

X-Ray should not be entirely text-and-card based.

Images should be used for:

- Company banners
- Company galleries
- Company logos
- Workplace photos
- Featured companies
- Editorial content
- Landing-page storytelling
- Empty states where appropriate

Photography should feel:

- Real
- Professional
- Human
- Local
- Authentic

Avoid generic corporate stock photography whenever possible.

---

# 7. Company Is the Central Entity

This is a major structural change.

Reviews and salaries should **not be treated as independent top-level destinations in the main product architecture**.

They belong to companies.

The relationship should be:

```text
Company
│
├── Overview
├── Jobs
├── Reviews
├── Salaries
├── Interviews
├── Benefits
├── Photos
└── Company Responses
```

The user should primarily discover workplace information through a company.

---

# 8. Navigation

## Desktop Navbar

The navbar should have three clear zones.

### Left

The X-Ray logo should be noticeably larger than the navigation items.

```text
[X-RAY]
```

The logo should have enough visual weight to establish brand identity.

### Center

```text
Jobs
Companies
Salaries
```

Do not expose Reviews as a primary navbar destination.

Reviews are accessed through companies.

### Right

When authenticated:

```text
[Search] [Profile Avatar]
```

When unauthenticated:

```text
[Search] [Login] [Register]
```

### Final Structure

```text
┌───────────────────────────────────────────────────────────────┐
│ X-RAY          Jobs     Companies     Salaries     Search  ◯  │
└───────────────────────────────────────────────────────────────┘
```

The navbar should be:

- Sticky
- Minimal
- Slightly translucent
- Backdrop blurred
- Subtly bordered

It should not dominate the page.

---

# 9. Mobile Navigation

Mobile navigation should prioritize:

```text
X-Ray
Search
Jobs
Companies
Profile
```

Use a bottom navigation or compact drawer depending on screen size.

The mobile experience should not simply shrink the desktop navbar.

---

# 10. Landing Page

The landing page should introduce X-Ray as a workplace intelligence platform rather than another job board.

## Structure

### 1. Navbar

Minimal and premium.

### 2. Hero

Large statement:

> **Know the company before you join.**

Supporting text:

> Real workplace reviews, salary data, interview experiences, and jobs from people who have actually been there.

### 3. Global Search

Large search interface:

```text
Search companies, jobs, roles...
```

Search suggestions should prioritize:

```text
Companies
Jobs
Roles
Locations
```

### 4. Featured Companies

Large visual company cards.

Cards may contain:

- Company logo
- Company banner
- Company name
- Industry
- Rating
- Review count
- Salary range
- Open jobs

### 5. Explore Workplace Data

Instead of separate pages competing with companies, present data as entry points:

```text
Top Rated Companies
Highest Paying Companies
Best Work-Life Balance
Most Reviewed Companies
Recently Reviewed
```

Each result should lead to a company profile.

### 6. Latest Jobs

Jobs remain a strong independent discovery experience.

### 7. How X-Ray Works

Three simple steps:

```text
Search
↓
Understand
↓
Decide
```

### 8. Trust / Anonymity Section

Explain the privacy model clearly.

### 9. Platform Statistics

Examples:

```text
Companies
Reviews
Salary Reports
Interview Experiences
Jobs
```

### 10. Footer

---

# 11. Companies

## Company Discovery

Users can search and filter companies.

### Filters

- Industry
- Location
- Company Size
- Rating
- Verification
- Remote / On-site / Hybrid

---

# 12. Company Profile

The company page is the **most important page in the entire product**.

It should feel substantially richer than a normal profile page.

---

## Company Hero

Large banner image across the top.

```text
┌───────────────────────────────────────────────────────┐
│                                                       │
│                 COMPANY BANNER                        │
│                                                       │
└───────────────────────────────────────────────────────┘
       ◯ Logo

       Company Name ✓
       Industry · Location · Company Size

       ★ 4.3     128 Reviews
```

### Hero Content

- Company banner
- Company logo
- Company name
- Verification badge
- Industry
- Location
- Company size
- Website
- Overall rating
- Review count
- Open jobs count

Primary actions:

```text
View Jobs
Write Review
Share
```

---

# 13. Company Page Navigation

Use a sticky company-level navigation.

```text
Overview
Reviews
Salaries
Interviews
Jobs
Benefits
Photos
```

This replaces independent review/salary destinations.

---

# 14. Company Overview

The overview should answer:

> **What is this company like?**

Sections:

### About

Company description.

### Ratings Snapshot

```text
Overall Rating       4.3
Work-Life Balance    4.1
Management            3.8
Career Growth         4.0
Compensation          3.9
Culture               4.4
```

### Salary Snapshot

Show aggregated salary information.

Example:

```text
Software Engineer
ETB 35,000 – 75,000 / month

Product Manager
ETB 45,000 – 90,000 / month
```

CTA:

> View all salaries

### Recent Reviews

Display a preview.

CTA:

> Read all reviews

### Interview Experiences

Display recent interview experiences.

### Open Jobs

Show current openings.

### Benefits

Company benefits.

### Photos

Company gallery preview.

### Official Company Response

Verified representatives can respond publicly.

---

# 15. Company Reviews

Reviews exist **inside the company profile**.

URL structure should conceptually follow:

```text
/company/:companyId/reviews
```

not:

```text
/reviews/:reviewId
```

as the primary discovery pattern.

### Review Features

- Rating
- Employment status
- Job title
- Department
- Work-life balance
- Compensation
- Benefits
- Career growth
- Management
- Culture
- CEO approval
- Recommend company
- Pros
- Cons
- Review title
- Review body
- Date

All reviews remain anonymous.

---

# 16. Company Salaries

Salary information also exists **inside the company profile**.

Conceptually:

```text
/company/:companyId/salaries
```

### Salary Overview

Show:

- Median salary
- Average salary
- Salary range
- Salary by role
- Salary by experience
- Salary distribution

### Salary Table

```text
Role                Experience       Net Monthly Salary

Software Engineer   1–2 years        ETB 35,000
Software Engineer   3–5 years        ETB 55,000
Senior Engineer     5+ years         ETB 80,000
```

All salary figures remain:

> **Net monthly ETB**

---

# 17. Company Interviews

Interview experiences belong to the company.

```text
/company/:companyId/interviews
```

Display:

- Position
- Experience level
- Difficulty
- Duration
- Outcome
- Interview stages
- Questions
- Candidate tips

---

# 18. Company Jobs

Jobs should be directly associated with companies.

```text
/company/:companyId/jobs
```

The company page should show:

```text
12 Open Positions
```

with a link to all jobs.

---

# 19. Company Photos

Companies should support visual content.

### Company Banner

One primary banner image.

Recommended ratio:

```text
3:1
```

### Company Logo

Square image.

### Company Gallery

Multiple images.

Possible categories:

- Office
- Team
- Events
- Workplace
- Culture

### Gallery UX

Use a visual grid:

```text
┌───────────────┬───────┬───────┐
│               │       │       │
│     LARGE     │ IMG   │ IMG   │
│               │       │       │
├───────┬───────┴───────┴───────┤
│ IMG   │          IMG            │
└───────┴────────────────────────┘
```

Images should open in a lightbox.

---

# 20. Other Image Infrastructure

The application should support image slots beyond companies.

Create a reusable image architecture for:

- Company banners
- Company logos
- Company galleries
- User avatars
- Job-related media
- Landing-page featured content
- Editorial content
- Future employer branding
- Future community content

Images should be optimized and lazy-loaded.

---

# 21. Jobs

Jobs remain a separate primary navigation destination.

## Job Search

Features:

- Search
- Filters
- Sort
- Pagination
- Location filtering
- Employment type
- Salary filtering
- Remote/hybrid/on-site

## Job Card

Display:

- Job title
- Company
- Company logo
- Location
- Employment type
- Salary range
- Posted date
- Company rating

The company name/logo should always link back to the company profile.

---

# 22. Job Details

Sections:

- Job Header
- Description
- Requirements
- Responsibilities
- Benefits
- Salary
- Company Snapshot
- Company Rating
- Related Jobs
- Recent Reviews
- Salary Snapshot
- Interview Snapshot

The company snapshot should encourage users to investigate the employer before applying.

---

# 23. Global Search

Search should primarily discover:

### Companies

Highest priority.

### Jobs

Second priority.

### Roles

Example:

```text
Software Engineer
Backend Engineer
Product Designer
```

### Locations

Example:

```text
Addis Ababa
Bole
Remote
```

Search results can surface related workplace data.

Example:

```text
Ethio Telecom
Company
4.2 ★
124 Reviews
Salary data available
```

---

# 24. Authentication

## Pages

- Login
- Register
- Forgot Password

## OAuth

- Google
- Telegram

Authentication remains mandatory for contributions.

The anonymity guarantee must be clearly explained during submission.

---

# 25. Reviews & Salary Submission

Users submit reviews and salaries **through a company**.

Example:

```text
Company Profile
      ↓
Write a Review
      ↓
Review Form
```

and:

```text
Company Profile
      ↓
Share Salary
      ↓
Salary Form
```

This prevents orphaned reviews and salaries that are not clearly associated with a workplace.

---

# 26. User Profile

Profile should focus on the user's private activity.

Sections:

- Profile information
- Saved companies
- Saved jobs
- Anonymous contributions
- Contribution statistics
- Created companies
- Bookmarks
- Settings

Public users should never be able to identify contributors through their profile.

---

# 27. Company Representative Dashboard

Verified representatives can:

- Manage company profile
- Upload logo
- Upload banner
- Upload gallery images
- Edit company information
- Post jobs
- Respond to reviews
- Manage benefits
- Update company description

Responses must display:

> **Verified Company Representative**

---

# 28. Design Components

## Layout

- Navbar
- Footer
- MobileNavigation
- CompanyNavigation
- MobileDrawer

## Search

- GlobalSearch
- SearchInput
- SearchSuggestions
- SearchResults

## Company

- CompanyCard
- CompanyHero
- CompanyHeader
- CompanyNavigation
- CompanyStats
- CompanyRating
- CompanySalarySnapshot
- CompanyReviewPreview
- CompanyInterviewPreview
- CompanyGallery
- CompanyBanner
- CompanyLogo
- VerificationBadge

## Reviews

- ReviewCard
- ReviewForm
- ReviewSummary
- RatingDistribution

## Salaries

- SalaryCard
- SalaryTable
- SalaryForm
- SalaryDistribution
- SalaryByExperience
- SalarySummary

## Jobs

- JobCard
- JobHeader
- JobFilters
- ApplyModal

## Interviews

- InterviewCard
- InterviewForm
- InterviewSummary

## General UI

- Button
- Card
- Badge
- Avatar
- Modal
- Drawer
- Tabs
- Accordion
- Dropdown
- Tooltip
- Toast
- Skeleton
- EmptyState
- Breadcrumb
- Pagination
- ImageGallery
- Lightbox

---

# 29. Folder Structure

```text
src/
│
├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── common/
│   ├── ui/
│   ├── layout/
│   ├── company/
│   ├── review/
│   ├── salary/
│   ├── interview/
│   ├── job/
│   ├── profile/
│   └── media/
│
├── hooks/
├── context/
├── services/
├── layouts/
├── pages/
│   ├── Landing/
│   ├── Jobs/
│   ├── Companies/
│   ├── Company/
│   ├── Auth/
│   ├── Profile/
│   └── About/
│
├── routes/
├── utils/
├── styles/
│   ├── globals.css
│   └── tailwind.css
│
├── App.jsx
└── main.jsx
```

---

# 30. Color System

```text
Primary:
#4F46E5

Accent:
#FACC15

Background:
#F8FAFC

Surface:
#FFFFFF

Surface Secondary:
#F1F5F9

Text:
#172033

Muted:
#64748B

Border:
#E2E8F0

Success:
#16A34A

Danger:
#DC2626

Warning:
#F59E0B
```

### Rule

Use approximately:

```text
80% Neutral
15% Primary
5% Accent / Semantic Color
```

Color should communicate hierarchy, not decoration.

---

# 31. Glass Surface System

Use glass surfaces selectively.

```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(16px);
border: 1px solid rgba(255, 255, 255, 0.55);
```

Do not use glass effects everywhere.

The glass layer should communicate:

> “This element is floating above the main content.”

---

# 32. Motion

Use Framer Motion sparingly.

Allowed:

- Page transitions
- Fade-in
- Small slide transitions
- Card hover
- Modal transitions
- Image gallery transitions
- Search suggestions

Avoid:

- Parallax
- Constant animations
- Excessive bouncing
- Decorative motion
- Long animations

Motion should communicate state, not personality.

---

# 33. Responsive Design

Support:

- Mobile
- Tablet
- Desktop

Mobile-first implementation.

### Mobile

- Compact navigation
- Bottom navigation where appropriate
- Sticky company navigation
- Filters become bottom sheets
- Tables become cards
- Company gallery becomes responsive
- Large hero images scale appropriately

---

# 34. Accessibility

- Semantic HTML
- Keyboard navigation
- ARIA labels
- Visible focus states
- WCAG-compliant contrast
- Accessible forms
- Screen-reader-friendly errors
- Reduced-motion support

Glass effects must never reduce text readability.

---

# 35. Performance

- Lazy-loaded routes
- Route-level code splitting
- Optimized images
- Responsive image sizes
- Lazy-loaded galleries
- Skeleton loading
- TanStack Query caching
- Background refetching
- Avoid unnecessary renders

Images should never unnecessarily block initial page rendering.

---

# 36. Engineering Principles

- React + JSX only
- No TypeScript
- No Redux
- Reusable components
- Composition over inheritance
- Thin pages
- Business logic in hooks/services
- API communication through services
- TanStack Query for server state
- No production mock data
- Responsive by default
- Mobile-first
- Accessible by default

---

# 37. Trust & Privacy

The existing privacy model remains unchanged.

Authentication is mandatory for submissions.

The UI must communicate:

> We store your login credentials solely to verify you are a real person. Your account identity is cryptographically detached and never linked to your public reviews, salaries, or interview posts.

Content rules remain:

- No personal names of non-executive employees
- Departmental references allowed
- Public executive references allowed where constructive
- Profanity filtering
- NDA/trade-secret protection
- Abuse moderation

---

# 38. Company Verification

Company statuses:

```text
Community Created
Verification Pending
Verified Company
```

Verification workflow:

```text
User Creates Company
        ↓
Community Created
        ↓
Company Profile Published
        ↓
Representative Claims Profile
        ↓
Verification Request
        ↓
Admin Review
        ↓
Verified Company
```

---

# 39. Core User Flow

The primary product flow becomes:

```text
Visitor
   ↓
Search Company
   ↓
Open Company
   ↓
Understand Company
   ↓
Read Reviews
   ↓
Check Salaries
   ↓
Read Interviews
   ↓
Check Jobs
   ↓
Decide
   ↓
Apply
```

Contribution flow:

```text
Company
   ↓
Write Review
   ↓
Share Salary
   ↓
Share Interview
```

---

# 40. Page Architecture

The application should conceptually revolve around four major surfaces:

```text
                    X-RAY
                      │
        ┌─────────────┼─────────────┐
        │             │             │
     Companies       Jobs        Profile
        │
   ┌────┼────┬────┬────┬────┐
   │    │    │    │    │
Overview Reviews Salaries Interviews Jobs
   │
Benefits + Photos + Responses
```

This is the central information architecture.

Reviews, salaries, and interviews are **not isolated products**.

They are different dimensions of a company's workplace information.

---

# 41. MVP Scope

## Must Have

### Companies

- Company search
- Company profile
- Company banner
- Company logo
- Company gallery
- Ratings
- Reviews
- Salaries
- Interviews
- Jobs
- Verification

### Jobs

- Search
- Filters
- Job details
- Company integration

### Contributions

- Anonymous review
- Anonymous salary
- Anonymous interview

### Authentication

- Login
- Register
- Google
- Telegram

### Trust

- Company verification
- Moderation
- Reporting
- Privacy messaging

---

# 42. Future Features

Not MVP:

- AI Interview Preparation
- AI Salary Estimation
- Offer Comparison
- Ghosting Score
- Hiring Timeline
- Company Response Rate
- Resume Builder
- Saved Companies
- Saved Jobs
- Notifications
- Salary Reports
- Market Analytics
- Internship Insights
- Employer Branding Pages
- Company Culture Media
- Industry Salary Reports

---

# 43. Final Product Personality

X-Ray should ultimately feel like:

> **Stripe's design discipline + Glassdoor's workplace information + a subtle modern glass layer + a small amount of bold Ethiopian-market personality.**

It should **not** look like:

- A generic Bootstrap dashboard
- A brutalist experiment
- A Neumorphism showcase
- A crypto application
- A children's app
- A traditional job board

The product should communicate:

> **“This is serious information, presented by a modern company.”**

The visual personality should come from **composition, typography, photography, spacing, and controlled color**, rather than excessive UI effects.

---

# 44. MVP Success Criterion

Build the most trusted workplace transparency platform for Ethiopian professionals.

The product should answer one question exceptionally well:

> **Should I work here?**

Every major design and architecture decision should reinforce that question.
