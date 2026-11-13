# Implementation Prompt: Vertex Design System (`prompts/design-system.md`)

## 1. Goal

Implement the **Vertex Design System** (Version 1.0 • May 2025) from `design/vertex-designsystem.png`. Configure Tailwind CSS v4 tokens, load Google Fonts (`Playfair Display` and `Inter`), build reusable UI primitives (`components/ui/`), and render the complete 14-section design system specification sheet on `app/page.tsx` matching the reference desktop layout while adapting cleanly down to mobile.

---

## 2. Skills & Documentation Read

- `AGENTS.md`: Project architecture, workflow rules, UI fidelity mandate, and verification checks.
- `C:\Users\Rafli\.gemini\config\skills\impeccable\SKILL.md`: Design craft, precision token extraction, layout fidelity, and post-build detector pass.
- `C:\Users\Rafli\.gemini\config\plugins\ponytail\skills\ponytail\SKILL.md`: Minimalist engineering, zero unnecessary dependencies, native HTML/CSS/SVG over external icon/component bloat, fewest files possible.
- `C:\Users\Rafli\.gemini\config\skills\caveman\SKILL.md`: Terse communication in chat while keeping persisted files (`prompts/*.md`, code) complete and clear.
- `node_modules/next/dist/docs/01-app/01-getting-started/01-installation.md`: Next.js 16 App Router conventions (`LayoutProps<"/">`, `next/font/google`).

---

## 3. Code & Assets Inspected

- `design/vertex-designsystem.png`: Source-of-truth reference image containing 14 numbered design system sections:
  - Header block: Vertex brand mark (orange gradient V-triangle icon + `Vertex` wordmark), `Design System` Playfair Display title, subtitle ("A unified design language for Vertex learning platform. Clean, modern and focused on clarity, consistency and intuitive learning experiences."), and `VERSION 1.0 • MAY 2025`.
  - `01 COLORS`:
    - Primary: `Primary 500` (`#F97316`), `Primary 400` (`#FB923C`), `Primary 300` (`#FDBA74`), `Primary 200` (`#FED7AA`), `Primary 100` (`#FFEEE5`).
    - Neutral: `Neutral 900` (`#0F172A`), `Neutral 700` (`#334155`), `Neutral 500` (`#64748B`), `Neutral 300` (`#CBD5E1`), `Neutral 200` (`#E2E8F0`), `Neutral 100` (`#F1F5F9`), `Neutral 50` (`#FAFAFC`), `White` (`#FFFFFF`).
  - `02 TYPOGRAPHY`:
    - `Playfair Display` (`Ag`, Elegant • Readable • Timeless)
    - `Inter` (`Ag`, Clean • Modern • Highly legible)
  - `03 TYPE SCALE`:
    - `Display 1`: Playfair Display, `48 / 56`, Bold, Page titles
    - `Display 2`: Playfair Display, `36 / 44`, Bold, Section titles
    - `Heading 1`: Inter, `28 / 36`, Semi Bold, Card titles
    - `Heading 2`: Inter, `22 / 30`, Semi Bold, Sub section
    - `Heading 3`: Inter, `18 / 26`, Medium, Small titles
    - `Body Large`: Inter, `16 / 24`, Regular, Body copy
    - `Body`: Inter, `14 / 20`, Regular, Supporting text
    - `Small`: Inter, `12 / 16`, Regular, Captions, meta
  - `04 SPACING SYSTEM`: Base unit `4px` — `4` (`0.25rem`), `8` (`0.5rem`), `12` (`0.75rem`), `16` (`1rem`), `24` (`1.5rem`), `32` (`2rem`), `40` (`2.5rem`), `48` (`3rem`), `64` (`4rem`).
  - `05 RADIUS & SHADOWS`:
    - Radius: `4px (xs)`, `8px (sm)`, `12px (md)`, `16px (lg)`, `24px (xl)`, `Full (circle)`.
    - Shadows:
      - `Sm`: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
      - `Md`: `0 4px 12px -2px rgba(15, 23, 42, 0.08)`
      - `Lg`: `0 12px 24px -4px rgba(15, 23, 42, 0.10)`
      - `Xl`: `0 20px 40px -8px rgba(15, 23, 42, 0.12)`
  - `06 ICONS`:
    - 9 icons in both `Outline Style` and `Filled Style` (labeled `Fileed Style` in the reference sheet): Bell, Search, Play Circle, Document/Notes, Bookmark, Bar Chart/Level, Clock, User, Chevron Right.
    - Specs: `24x24px grid`, `2px stroke width (outline)`, `Rounded line caps`, `Consistent optical balance`.
  - `07 BUTTONS`:
    - Columns: `Primary`, `Secondary`, `Tertiary`, `Text` across rows `Default`, `Hover`, `Disabled`.
    - Specs: `Height: 44px (default)`, `Padding: 0 16px (lg), 0 12px (md)`, `Radius: 12px`, `Font: Inter Medium (14–16px)`.
  - `08 INPUTS`:
    - `Search / Text Input`: search icon, `Search anything...` placeholder, `⌘ K` shortcut badge.
    - `Select`: `Most Relevant` with chevron down icon.
    - Field Specs: `Height: 44px`, `Radius: 12px`, `Border: 1px solid #E2E8F0`, `Padding: 0 16px`, `Focus: Border color #FB923C`.
  - `09 BADGES / TAGS`:
    - `Video`: `VIDEO` pill (`#FFEEE5` bg, `#F97316` text)
    - `Lesson`: `LESSON` pill (`#EEF2FF` bg, `#4F46E5` indigo/violet text)
    - `Popular`: `POPULAR` pill (`#FEF3C7` / warmpeach bg, `#D97706` / `#F97316` text)
  - `10 STATUS / INDICATORS`:
    - `In Progress` (orange partial arc spinner icon), `Completed` (green check circle), `Now Playing` (solid orange play circle), `Locked` (slate padlock icon).
  - `11 PROGRESS BAR`:
    - Orange progress fill (`#F97316` to `#FB923C`) on `#F1F5F9` track at `35%` width + `35% complete` label.
  - `12 CARDS`:
    - `Course Card`: Dark `N` badge, `Next.js for Production`, summary, footer meta (`Intermediate`, `18h 24m`, `12 modules`).
    - `Lesson Card (Video)`: `VIDEO` badge, `Data Fetching in Server Components`, summary, footer (`Lesson 5.1 • 12:45`, `Watch from 12:45` with play circle).
    - `Lesson Card (Lesson)`: `LESSON` badge, `Data Fetching & Caching`, summary, footer (`Module 5`, `View lesson` with external-link icon).
    - `Resource Card`: Document icon box, `Caching and Revalidation Guide`, subtitle, footer (`PDF • 1.2 MB`, external-link icon).
  - `13 NAVIGATION`:
    - Brand nav (`Vertex` logo, active `Courses` with orange underline, `My Learning`), `Breadcrumbs` (`All Courses > Next.js for Production > Data Fetching & Caching`), `Pagination` (`<`, active `1`, `2`, `3`, `...`, `8`, `>`).
  - `14 PRINCIPLES`:
    - `Clarity First`, `Consistency`, `Focus & Calm`, `Accessible` with custom line icons and descriptions.
- `package.json`: Next.js `16.4.6`, React `19.3.0`, Tailwind CSS `4.3.3` (`@tailwindcss/turbopack`).
- `app/layout.tsx` & `app/globals.css`: Default `create-next-app` Geist boilerplate; needs migration to `Inter` and `Playfair_Display` plus Vertex design tokens.

---

## 4. Decisions & Assumptions

1. **Lucide React + Precision Filled/Custom SVGs**: Use `lucide-react` (queried via Context7) for 24×24 outline icons with `strokeWidth={2}` and rounded caps, paired with matching filled SVG icons for the `Fileed Style` row and custom brand/principle marks where needed.
2. **Design Tokens + Reusable Primitives + Visual Showcase**:
   - Define all color, font, radius, shadow, and typography tokens in `app/globals.css` using Tailwind v4 `@theme` and utility classes so every downstream page (Catalog, Course, Lesson, Search) reuses them directly.
   - Export clean, reusable primitives in `components/ui/design-system.tsx` (`VertexLogo`, `Icon`, `Button`, `Badge`, `StatusIndicator`, `ProgressBar`, `SearchInput`, `SelectInput`, `CourseCardPreview`, `VideoLessonCardPreview`, `LessonCardPreview`, `ResourceCardPreview`, `Breadcrumbs`, `Pagination`) so future pages import them without duplication.
   - Render the full 14-section Vertex Design System bento grid in `app/page.tsx` so visiting `/` displays the exact specification sheet from `design/vertex-designsystem.png`.
3. **Typography & Light Theme**:
   - Load `Playfair_Display` (weights `700`) and `Inter` (weights `400`, `500`, `600`, `700`) in `app/layout.tsx` via `next/font/google` bound to `--font-display` and `--font-sans`.
   - Remove the default dark-mode media query override in `app/globals.css` so the warm light canvas (`#FAF8F6` outer sheet background, `#FFFFFF` cards, `#0F172A` text) renders faithfully regardless of OS color scheme.

---

## 5. Files Expected to Touch

- `prompts/design-system.md` (this implementation prompt)
- `app/layout.tsx` (configure `Playfair_Display` and `Inter` fonts and page metadata)
- `app/globals.css` (define Vertex color, font, shadow, radius, and type-scale tokens in Tailwind v4)
- `components/ui/design-system.tsx` (reusable Vertex UI primitives and SVG icon set)
- `app/page.tsx` (complete 14-section Vertex Design System specification showcase matching `design/vertex-designsystem.png`)

---

## 6. Requirements

1. **Colors (`01 COLORS`)**: Exact hex values for Primary (`500` `#F97316`, `400` `#FB923C`, `300` `#FDBA74`, `200` `#FED7AA`, `100` `#FFEEE5`) and Neutral (`900` `#0F172A`, `700` `#334155`, `500` `#64748B`, `300` `#CBD5E1`, `200` `#E2E8F0`, `100` `#F1F5F9`, `50` `#FAFAFC`, `White` `#FFFFFF`).
2. **Typography & Type Scale (`02` & `03`)**: `Playfair Display` and `Inter` specimens and exact 8-row Type Scale table (`Display 1` through `Small`) with exact sizes, line-heights, weights, and use labels.
3. **Spacing, Radius & Shadows (`04` & `05`)**: Proportional peach bars for 4px–64px spacing scale; 6 radius boxes (`4px` to `Full`); 4 shadow cards (`Sm`, `Md`, `Lg`, `Xl`) with exact CSS shadow values.
4. **Icons (`06`)**: 9 outline icons and 9 filled icons on a 24×24 grid with 2px stroke width and rounded line caps, plus bulleted Icon Specs.
5. **Buttons & Inputs (`07` & `08`)**: Interactive and state-locked (`Default`, `Hover`, `Disabled`) matrix for `Primary`, `Secondary`, `Tertiary` (with external link icon), and `Text` (with play circle icon) buttons, plus `Search / Text Input` (`⌘ K`) and `Select` (`Most Relevant`) with specification bullets.
6. **Badges, Status & Progress Bar (`09`, `10`, `11`)**: `VIDEO`, `LESSON`, and `POPULAR` badges; `In Progress`, `Completed`, `Now Playing`, and `Locked` status indicators; `35% complete` progress bar.
7. **Cards (`12`)**: All 4 card variants (`Course Card`, `Lesson Card (Video)`, `Lesson Card (Lesson)`, `Resource Card`) with accurate badges, typography, icons, and metadata footers.
8. **Navigation & Principles (`13` & `14`)**: Top nav bar (`Vertex`, `Courses`, `My Learning`), `Breadcrumbs`, `Pagination`, and the 4 `Principles` items (`Clarity First`, `Consistency`, `Focus & Calm`, `Accessible`).
9. **Responsive Layout**: Exact multi-column bento grid on desktop (`lg` / `xl`), stacking cleanly without horizontal overflow on mobile and tablet viewports.

---

## 7. Security Considerations

- Purely presentational UI and CSS token definitions; no secrets, tokens, or external runtime data fetching involved.
- All inputs on the showcase sheet are controlled/read-only UI primitives with safe React rendering.

---

## 8. Acceptance Criteria

- All 14 sections of `design/vertex-designsystem.png` render with matching copy, hex codes, dimensions, icons, and visual hierarchy.
- Reusable UI components and Tailwind v4 design tokens are cleanly exported for upcoming pages.
- TypeScript check (`bun x tsc --noEmit`), ESLint (`bun run lint`), and production build (`bun run build`) pass with zero errors.

---

## 9. Checks to Run

1. `bun x tsc --noEmit`
2. `bun run lint`
3. `bun run build`
4. Impeccable mechanical detector: `C:\Users\Rafli\.gemini\config\skills\impeccable\scripts\impeccable.cmd detect --json app/page.tsx components/ui/design-system.tsx app/globals.css`

---

## 10. Manual Test Steps

1. Run `bun run dev` and open `http://localhost:3000`.
2. Compare the desktop viewport (`1440px` width) against `design/vertex-designsystem.png` across all 14 numbered sections (`01 COLORS` through `14 PRINCIPLES`).
3. Resize the browser down to mobile (`375px` width) and verify that sections, tables, button matrices, and cards stack cleanly without horizontal scrolling.
