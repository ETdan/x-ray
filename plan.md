# X-Ray Frontend Specification (React + JSX)

## Project Overview

### Project Name

**X-Ray**

### Tagline

**See beyond the job post.**

### Mission

X-Ray exists to bring transparency to the Ethiopian job market.

Today’s job market heavily favors employers. Candidates invest significant time preparing applications and interviews while having limited information about the companies they are applying to. Important details such as salary ranges, work life balance, company culture, interview experiences, benefits, and employee satisfaction are often unavailable.

X-Ray shifts part of that power back to job seekers by allowing employees and candidates to **anonymously share workplace experiences**.

Instead of asking only:

> Can this company hire me?

Applicants should also be able to ask:

> Should I work here?

The goal is **not** to attack companies. The goal is to encourage transparency, reward good employers, and help professionals make informed career decisions.

---

## Design Philosophy

The interface should communicate:

* **Transparency & Uncompromising Trust**
* **Simplicity & Speed**
* **Professionalism**
* **Modern, Data-First UX**

**Avoid flashy effects.** The focus remains strictly on information hierarchy and scannable data.

### Design Anchors

* Apple
* Stripe
* Linear

### Avoid

* Heavy gradients
* Persistent animations
* Dashboard clutter
* Dark mode (for MVP)

---

## Anonymity, Privacy & Trust Architecture

### 1. Core Privacy Guarantee

Authentication is **mandatory to submit** reviews, salaries, or interviews to prevent spam, duplicate submissions, and bot attacks.

However, the UI must explicitly communicate the separation of identity.

**Privacy callout (rendered on all submission forms and auth modals):**

> We store your login credentials solely to verify you are a real person. Your account identity is cryptographically detached and never linked to your public reviews, salaries, or interview posts.

### 2. Content & Naming Guidelines

To prevent personal attacks, defamation, and legal liability while protecting non-executive staff:

* **No personal names** of non-executive employees, managers, HR staff, or colleagues.
* **Departmental references allowed** (e.g., “The Engineering Lead” instead of “Abebe in Tech”).
* **CEO / Founder exception:** constructive references to public executives are permitted.
* **Profanity & NDA enforcement:** automatic client/server validation blocks explicit profanity, trade secrets, and unverified criminal allegations.

### 3. Currency & Compensation Standard

* **Currency:** Ethiopian Birr (**ETB**) only.
* **Primary salary metric:** **Net monthly take-home pay** (after tax and pension deductions).
* **Optional allowances:** Transport, Mobile/Data, Fuel.
* **Optional bonus fields:** Bonus and 13th-month salary.

---

## Target Audience

* Students & Fresh Graduates
* Working Professionals & Job Seekers
* Recruiters
* Companies
* HR Professionals

---

## Core Features

* Company Profiles & Verification
* Anonymous Employee Reviews
* ETB Net Salary Sharing & Comparison
* Interview Experiences & Question Logs
* Job Listings & Direct Application Routing
* Global Multi-Category Search
* Company Claim & Verification System
* User Dashboard
* Company Representative Dashboard

---

## Frontend Stack

### Required

* **React** (v18+)
* **JSX ONLY** (`.jsx`, `.js`)
* **Vite**
* **React Router** (v6+)
* **Tailwind CSS**
* **Axios**
* **TanStack Query** (React Query)
* **React Hook Form**
* **Zod** (JavaScript version)
* **Framer Motion** (subtle UI transitions)
* **React Icons**
* **Recharts**

### Strictly Prohibited

* TypeScript (`.tsx`, `.ts`)
* Next.js
* Redux

**Every source file must be `.jsx` or `.js` only.**

---

## Folder Structure

```text
src/
│
├── assets/
│   ├── images/
│   └── icons/
├── components/
│   ├── common/        # AnonymityNotice, Ratings, SearchBar, Badges, Modals
│   ├── ui/            # Buttons, Cards, Inputs, Tabs, Skeletons
│   ├── layout/        # Navbar, Footer, MobileDrawer
│   ├── company/       # CompanyCard, ClaimCompanyModal, VerificationBadge
│   ├── review/        # ReviewCard, ReviewForm, GuidelinesCallout
│   ├── salary/        # SalaryCard, SalaryForm, NetPayCalculator
│   ├── interview/     # InterviewCard, InterviewForm
│   ├── job/           # JobCard, JobHeader, ApplyModal
│   └── profile/       # UserContributions, SavedItems
│
├── hooks/             # useAuth, useDebounce, useCompanies, useSalaries
├── context/           # AuthContext, ToastContext
├── services/          # api.js, auth.service.js, company.service.js
├── layouts/           # MainLayout, AuthLayout, DashboardLayout
├── pages/             # Landing, Companies, Jobs, Reviews, Salaries, ClaimCompany
├── routes/            # AppRoutes, ProtectedRoute
├── utils/             # formatters.js, validators.js
├── styles/            # globals.css, tailwind.css
│
├── App.jsx
└── main.jsx
```

---

## Color Palette

```text
Primary:   #4F46E5  (Indigo)

Neutral:
  #FFFFFF  (White)
  #F8FAFC  (Slate 50 - Page Backgrounds)
  #E2E8F0  (Slate 200 - Borders & Dividers)
  #64748B  (Slate 500 - Muted Subtext)
  #1E293B  (Slate 800 - Body Text & Headers)

Success:   #22C55E  (Verified Badges & Positive Ratings)
Danger:    #EF4444  (Reports, Cons, High Difficulty)
Warning:   #F59E0B  (Verification Pending)
```

---

## Typography & Visual Style

* Clean and highly readable typography.
* Large spacing scale.
* Rounded cards.
* Soft shadows.
* Minimal borders.
* Large search bars.
* Generous whitespace.

---

## Design System

### Spacing

* 4px spacing scale.

### Radius

* Small: 8px
* Medium: 12px
* Large: 16px

### Shadows

* Soft shadows only.

### Cards

* White background.
* Light border.
* Rounded corners.
* Subtle hover elevation.

### Buttons

* Primary
* Secondary
* Outline
* Ghost
* Destructive

### Inputs

* Consistent height.
* Validation states.
* Helper text support.

---

## Design Principles

Every page should answer a single question.

| Page      | Primary Question          |
| --------- | ------------------------- |
| Landing   | Why should I trust X-Ray? |
| Company   | Should I work here?       |
| Job       | Should I apply?           |
| Salary    | Am I underpaid?           |
| Interview | What should I expect?     |
| Review    | What is it actually like? |

---

## Navigation

### Navbar

**Left**

* X-Ray Logo
* Home
* Jobs
* Companies
* Salaries
* Reviews
* Interviews

**Right**

* Search Trigger
* Login
* Register
* User Avatar Menu

---

## Global Search

Search across the entire platform.

### Categories

* Companies
* Jobs
* Reviews
* Salaries
* Interviews

### Features

* Instant search
* Search suggestions
* Recent searches
* Popular searches
* Grouped results by category
* Keyboard navigation
* Empty-state suggestions

---

## Pages & Structure

### 1. Landing Page

#### Sections

* Navbar
* Hero Section with large global search bar
* Anonymity value proposition
* Featured Companies
* Highest Rated Companies
* Highest Paying Companies (ETB Net)
* Best Work-Life Balance Companies
* Recently Reviewed Companies
* Recent Interview Experiences
* Latest Jobs
* Platform Statistics
* Testimonials
* Footer

---

### 2. Authentication

#### Pages

* Login
* Register
* Forgot Password

#### OAuth Providers

* Google
* Telegram

#### UX Requirement

Display the privacy callout explaining that OAuth credentials are used only to verify account uniqueness and are never linked to public posts.

---

### 3. Jobs

#### Job Search

**Features**

* Search
* Filters
* Sort
* Pagination

**Job Card Fields**

* Title
* Company
* Location
* Employment Type
* Salary Range (ETB)
* Posted Date

#### Job Details

**Sections**

* Job Header
* Description
* Requirements
* Responsibilities
* Benefits
* Salary
* Company Snapshot
* Related Jobs
* Reviews Preview
* Salary Preview
* Interview Preview

---

### 4. Companies

#### Company Search

**Filters**

* Industry
* Location
* Company Size
* Minimum Rating
* Verification Status

#### Company Profile

**Header**

* Logo
* Company Name
* Industry
* Website
* Headquarters
* Company Size
* Verification Badge

**Content Sections**

* Overview
* Ratings Summary
* Work-Life Balance Score
* Salary Summary
* Benefits
* Employee Reviews
* Interview Experiences
* Open Jobs
* Photos
* Official Company Responses
* FAQ

#### Claim Company

Dedicated page/modal for verification requests.

---

### 5. Reviews

#### Reviews List

**Filters**

* Rating
* Department
* Current Employee
* Former Employee

#### Write Review Form

**Required Fields**

* Employment Status (Current / Former)
* Job Title
* Overall Rating (1–5)
* Work-Life Balance (1–5)
* Compensation (1–5)
* Benefits (1–5)
* Career Growth (1–5)
* Management (1–5)
* Culture (1–5)
* CEO Approval (Yes / No / Neutral)
* Recommend Company (Yes / No)
* Pros
* Cons
* Review Title
* Review Body

**UX Requirements**

* Show `AnonymityNotice` at the top.
* Real-time inline warning: *“Do not include names of specific individuals.”*

---

### 6. Salaries

#### Salary List

**Filters**

* Position
* Experience
* Location

#### Submit Salary Form

**Required Fields**

* Job Title
* Department
* Years of Experience (At Company / Total)
* Employment Type (Full-time, Contract, Internship)
* **Net Monthly Salary (ETB)**
* Work Location

**Optional Fields**

* Transport Allowance
* Mobile/Data Allowance
* Fuel Allowance
* Bonus
* 13th-Month Salary

---

### 7. Interviews

#### Interview List

**Filters**

* Position
* Difficulty
* Offer Received

#### Submit Interview Form

**Required Fields**

* Position
* Experience Level
* Interview Difficulty (Easy / Medium / Hard)
* Process Duration
* Offer Outcome (Accepted / Declined / No Offer)
* Interview Stages
* Questions Asked
* Tips for Candidates

---

### 8. User Profile & Settings

#### User Profile

* Profile Information
* Saved Items
* Anonymous Contribution History (visible only to the owner)
* Created Companies
* Bookmarks
* Contribution Statistics

#### Company Representative Dashboard

* Manage Company Profile
* Upload Logo & Photos
* Edit Company Information
* Post Jobs
* Respond Publicly to Reviews with `Verified Representative` badge

#### Settings

* Account
* Connected Accounts (Google / Telegram)
* Notifications
* Privacy
* Password
* Security

---

### 9. About Page

#### Purpose

Explain why X-Ray exists and how it protects user privacy.

#### Sections

* Our Mission
* Why We Built X-Ray
* Our Vision
* Community Guidelines
* Trust & Transparency
* Contact

---

### 10. Legal Pages

* Privacy Policy
* Terms of Service

---

### 11. Error Pages

* 404
* 500

---

## Company Ownership & Verification Workflow

```text
[Authenticated User Creates Company]
                ↓
Status: Community Created
                ↓
Public Company Profile Available
                ↓
[Official Representative Claims Profile]
                ↓
Verification Request Submitted
  • Official company email
  • Full name & position
  • Trade license / TIN certificate
                ↓
Status: Verification Pending
                ↓
[Admin Review & Approval]
                ↓
Magic invite link sent to official email
                ↓
Representative activates account
                ↓
Status: Verified Company
```

### Verification Badges

* **Community Created**
* **Verification Pending**
* **Verified Company**

---

## Permissions Matrix

| Action                             | Visitor | Authenticated User | Verified Company Rep | Admin                          |
| ---------------------------------- | ------- | ------------------ | -------------------- | ------------------------------ |
| Read reviews & salaries            | ✓       | ✓                  | ✓                    | ✓                              |
| Submit review / salary / interview | ✗       | ✓                  | ✓                    | ✓                              |
| Create company profile             | ✗       | ✓                  | ✓                    | ✓                              |
| Claim company                      | ✗       | ✓                  | N/A                  | ✓                              |
| Edit company info                  | ✗       | ✗                  | ✓                    | ✓                              |
| Respond publicly to reviews        | ✗       | ✗                  | ✓                    | ✗                              |
| Delete/edit community reviews      | ✗       | ✗                  | ✗                    | Spam/Hate only                 |
| View reviewer identities           | ✗       | ✗                  | ✗                    | ✗ (cryptographically detached) |

---

## Trust & Moderation Safeguards

* Duplicate company detection.
* Daily company-creation limits.
* Report Company.
* Report Review.
* Report Salary.
* Report Interview.
* Spam and abuse moderation.
* Admins may remove only spam, hate speech, or policy-violating content.

---

## User Flow

```text
Visitor
  ↓
Search Company
  ↓
Open Company Profile
  ↓
Read Reviews
  ↓
Read Salaries
  ↓
Read Interviews
  ↓
Browse Open Jobs
  ↓
Apply Externally
  ↓
Return Later
  ↓
Share Review
  ↓
Share Salary
  ↓
Share Interview Experience
```

---

## Reusable Components

### Layout & Privacy

* `Navbar`
* `Footer`
* `MobileDrawer`
* `AnonymityNotice`

### Data & Input

* `SearchBar`
* `RatingStars`
* `WorkLifeBalanceBar`
* `NetPayInput`
* `GuidelineWarning`
* `Filters`
* `Pagination`

### Display & Feedback

* `CompanyCard`
* `JobCard`
* `SalaryCard`
* `ReviewCard`
* `InterviewCard`
* `VerificationBadge`
* `Badge`
* `Avatar`
* `Tooltip`
* `Dropdown`
* `Modal`
* `Drawer`
* `Tabs`
* `Accordion`
* `Toast`
* `LoadingSkeleton`
* `EmptyState`
* `Breadcrumb`

---

## Charts

Use **Recharts**.

### Planned Charts

* Rating Distribution
* Salary Distribution
* Salary by Experience
* Review Trends
* Interview Difficulty Distribution
* Company Rating Trends

---

## Motion

Use **Framer Motion sparingly**.

### Allowed

* Fade transitions
* Slide transitions
* Card hover effects
* Modal transitions
* Page transitions

### Avoid

* Heavy parallax
* Continuous animations
* Decorative motion that distracts from content

---

## Responsive Design

Support:

* Mobile
* Tablet
* Desktop

### Mobile Requirements

* Navbar becomes a drawer.
* Filters become bottom sheets.
* Tables convert to stacked cards when necessary.

Adopt a **mobile-first** approach.

---

## Accessibility

* Semantic HTML
* Full keyboard navigation
* Proper ARIA labels
* Visible focus states
* WCAG-compliant color contrast
* Screen-reader-friendly form labels and error messages

---

## Performance

* Lazy-loaded routes.
* Route-level code splitting.
* Optimized images.
* Skeleton loading states.
* Infinite scrolling where appropriate.
* TanStack Query caching and background refetching.
* Avoid unnecessary re-renders.

---

## Engineering Principles

* Build reusable components before page-specific components.
* Never duplicate UI logic.
* Prefer composition over inheritance.
* Separate presentation from data fetching.
* Keep pages thin; move business logic into hooks/services.
* All API communication goes through the `services/` layer.
* Use TanStack Query for all server state.
* Do not hardcode mock data inside production components.
* Components must be responsive by default.
* Follow mobile-first design.

---

## Future Features (Not MVP)

* AI Interview Preparation
* AI Salary Estimation
* Offer Comparison
* Ghosting Score
* Hiring Timeline
* Company Response Rate
* Resume Builder
* Saved Companies
* Saved Jobs
* Notifications
* Salary Reports
* Market Analytics
* Internship Insights

---

## MVP Goal

Build the **most trusted workplace transparency platform for Ethiopian professionals** by answering one critical question before accepting a job:

> **Should I work here?**

The frontend must feel **clean, modern, trustworthy, and data-first**, prioritizing reliable workplace information over traditional job-board clutter.
