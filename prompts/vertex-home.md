# Implementation Prompt: Vertex Homepage (`prompts/vertex-home.md`)

## 1. Goal

Implement the **Vertex Hoepage** on `app/page.tsx` matching `design/vertex-home.png` down to exact layout, spacing, typography, colors, icons, and visual framing, while adapting cleanly down to mobile viewports.

---

## 2. Skills & Documentation Read

- `AGENTS.md`: Project architecture, workflow rules, exact UI fidelity to reference images, server/client separation, and required verification checks.
- `C:\Users\Rafli\.gemini\config\skills\impeccable\SKILL.md` & `reference/craft-floor.md`: Visual craft, contrast, typography hierarchy, browser surface refinements, and post-build mechanical detector check.
- `C:\Users\Rafli\.gemini\config\plugins\ponytail\skills\ponytail\SKILL.md`: Minimalist implementation—reuse existing tokens and primitives in `components/ui/design-system.tsx` and `app/globals.css`, zero new dependencies, fewest files touched.
- `C:\Users\Rafli\.gemini\config\skills\caveman\SKILL.md`: Terse, direct chat responses while keeping persisted artifacts (`prompts/vertex-home.md` and source code) thorough and clear.
- `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`: Next.js 16 App Router route and component structure conventions.

---

## 3. Code & Assets Inspected

- `design/vertex-home.png`: Source-of-truth desktop reference image for the Vertex homepage:
  1. **Outer Frame & Background**:
     - Warm cream canvas (`#FAF8F6`) flanked on the left and right edges by vertical border lines (`#EFE9E2`) and subtle diagonal hash/stripe gutters (`repeating-linear-gradient(-45deg, ...)`).
  2. **Top Navigation Bar** (separated by a full-width bottom border `#EFE9E2`):
     - Left group: `VertexLogo` (orange V-triangle mark + bold `Vertex` wordmark) + navigation links `Courses` and `My Learning` in `Inter` regular/medium `#1E293B`.
     - Right group: Outline notification bell icon (`Bell`) and a circular user profile avatar (`36px` diameter).
  3. **Hero Section** (centered, separated at the bottom by a horizontal border `#EFE9E2`):
     - Eyebrow pill: `INTELLIGENT LEARNING` in uppercase orange (`#EA580C` / `#F97316`), tracked out (`tracking-[0.1em]`), inside a soft rounded border pill (`border-[#F5DEC9] bg-[#FDF7F2]`).
     - Display Headline (`Playfair Display` Bold, two lines):
       - Line 1: `Search your learning`
       - Line 2: `in plain English.`
     - Subtitle (`Inter` Regular, two lines, `#64748B`):
       - `Vertex understands what you want to learn and`
       - `finds the exact lessons across all your courses.`
     - Primary CTA Button: Warm orange gradient (`#F27442` to `#E05E2B`), soft drop shadow, label `Explore Courses` + right arrow (`→`).
     - Hero Search Bar: Centered wide container (`max-w-[744px]`, height `60px`, `rounded-[16px]`, white fill, `border-[#EAE4DC]`, soft shadow) with magnifying glass icon on left, placeholder `Ask anything about your learning...`, and a bordered keyboard shortcut badge `⌘ K` on the right (`/search?q=...` GET form submission).
  4. **All Courses Section**:
     - Header row: `All Courses` (`Playfair Display` Bold, `26px`, `#0F172A`) on the left; `View all courses →` link in orange (`#E86B35`) on the right.
     - 3-column Course Card Grid (`grid-cols-1 md:grid-cols-3 gap-5`):
       - **Card 1**: Custom dark rounded-square Next.js `N` emblem (`56×56px` with subtle diagonal sheen), title `Next.js for Production` (`Playfair Display` Bold `20px`), description `Build scalable, high-performance web applications with Next.js.`, divider line, footer metadata: signal bars icon + `Intermediate`, clock icon + `18h 24m`, document icon + `12 modules`.
       - **Card 2**: Custom Docker whale & containers SVG emblem, title `Docker Essentials` (`Playfair Display` Bold `20px`), description `Containerize applications and streamline your development workflow.`, divider line, footer metadata: signal bars icon + `Beginner`, clock icon + `10h 12m`, document icon + `8 modules`.
       - **Card 3**: Custom blue rounded-square TypeScript `TS` emblem (`#3178C6`), title `TypeScript Deep Dive` (`Playfair Display` Bold `20px`), description `Go beyond the basics and write safer, more expressive code.`, divider line, footer metadata: signal bars icon + `Intermediate`, clock icon + `14h 36m`, document icon + `10 modules`.
  5. **Footer Callout & Decorative Skyline**:
     - Horizontal divider rule flanking a centered callout: outline orange star icon (`#F97316`) + `New courses and lessons added every week.` (`#475569`).
     - Bottom decorative artwork: Soft vertical stepped gradient columns in warm peach/coral tones rising from the bottom edge.
- `app/globals.css`: Contains Vertex color variables, `@theme inline` definitions, `Playfair Display` (`--font-display`) and `Inter` (`--font-sans`).
- `components/ui/design-system.tsx`: Contains `VertexLogo`, `SignalBarsIcon`, and reusable design-system primitives.
- `app/layout.tsx`: Configures Google Fonts (`Inter` and `Playfair_Display`) and root HTML shell.

---

## 4. Decisions & Assumptions

1. **Preserve Design System Showcase**: Move the existing 14-section Design System showcase from `app/page.tsx` to `app/design-system/page.tsx` so it remains accessible while `/` serves the Vertex Homepage as requested.
2. **Reuse & Minimal Footprint**: Reuse `VertexLogo` and `SignalBarsIcon` from `components/ui/design-system.tsx` and `lucide-react` icons (`Bell`, `Search`, `ArrowRight`, `Clock`, `FileText`, `Star`). Build bespoke inline SVGs for the Next.js, Docker, and TypeScript course emblems, the avatar portrait, and the bottom stepped peach bar skyline so zero external image dependencies are needed.
3. **Interactive Search Form**: Wire the hero search input as a native `<form action="/search" method="GET">` with `⌘K` / `Ctrl+K` keyboard shortcut focus support via a tiny inline or client-free/progressive approach, or a minimal client input wrapper if needed—keeping the page itself a fast Server Component. (Using a tiny client enhancer or native form keeps server boundaries clean).
4. **Metadata Update**: Update `app/layout.tsx` title to `Vertex — Intelligent Learning Platform`.

---

## 5. Files Expected to Touch

- `prompts/vertex-home.md` (this implementation prompt)
- `app/design-system/page.tsx` (preserve the existing Design System page at `/design-system`)
- `app/layout.tsx` (update default metadata title for Vertex)
- `app/page.tsx` (implement the Vertex Homepage matching `design/vertex-home.png`)

---

## 6. Requirements

1. **Exact Desktop Visual Fidelity**:
   - Framed central canvas with diagonal-striped side margins (`hidden lg:block`) matching `design/vertex-home.png`.
   - Header navbar with `VertexLogo`, `Courses`, `My Learning`, notification bell, and circular profile avatar.
   - Hero section with `INTELLIGENT LEARNING` pill, `Search your learning in plain English.` Playfair Display heading, two-line subtitle, `Explore Courses →` gradient CTA button, and `Ask anything about your learning...` search bar with `⌘ K` badge.
   - `All Courses` section header with `View all courses →` link and 3 course cards (`Next.js for Production`, `Docker Essentials`, `TypeScript Deep Dive`) with exact icons, Playfair Display titles, descriptions, dividers, and 3-item metadata footers.
   - Bottom callout with horizontal side lines, orange star icon, `New courses and lessons added every week.`, and the soft coral-orange stepped vertical bar illustration at the foot of the page.
2. **Responsive Adaptation**:
   - Mobile and tablet viewports stack the 3 course cards (`grid-cols-1 md:grid-cols-3`), scale the hero headline smoothly (`text-[36px] sm:text-[52px] lg:text-[60px]`), and keep navigation and search bar padded cleanly without horizontal overflow.
3. **Accessibility & Semantics**:
   - Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), accessible `aria-label` on icon buttons and search input, keyboard focus states.

---

## 7. Security Considerations

- Server-rendered read-only page with no client tokens, secrets, or external network requests.
- Search form uses standard GET query parameter (`name="q"`).

---

## 8. Acceptance Criteria

- Visiting `/` renders the Vertex Homepage matching `design/vertex-home.png`.
- All 3 course cards, hero elements, navigation items, side hatches, and bottom gradient bars match the reference image.
- Responsive layout works cleanly from `375px` mobile up to `1440px+` desktop.
- `bun x tsc --noEmit`, `bun run lint`, and `bun run build` pass with zero errors.

---

## 9. Checks to Run

1. `bun x tsc --noEmit`
2. `bun run lint`
3. `bun run build`
4. Impeccable detector: `C:\Users\Rafli\.gemini\config\skills\impeccable\scripts\impeccable.cmd detect --json app/page.tsx`

---

## 10. Manual Test Steps

1. Start the dev server with `bun run dev` and open `http://localhost:3000`.
2. Verify the desktop layout at `1440px` width against `design/vertex-home.png` (side striped gutters, header nav, hero pill/title/button/search bar, 3 course cards, star divider, and bottom stepped orange gradient bars).
3. Type a query into the `Ask anything about your learning...` search input and verify focus ring and form behavior.
4. Resize the viewport down to `375px` width and confirm the layout stacks cleanly with no horizontal scroll.
