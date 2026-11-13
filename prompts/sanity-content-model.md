# Implementation Prompt: Vertex Sanity Content Model & Data Layer (`prompts/sanity-content-model.md`)

## 1. Goal

Implement the complete Sanity content model and Studio configuration for Vertex (`course`, `module`, `lesson`, `instructor`, `category`), along with a secure server-side read client, typed GROQ queries, and data access layer adhering to `AGENTS.md` and Sanity best practices.

---

## 2. Skills & References Read

- `AGENTS.md`: Sections 5 (Architecture), 6 (Tech Stack), 8 (Data Modeling), 12 (Pitfalls), 13 (Checks).
- `sanity-best-practices`:
  - `references/schema.md`: `defineType`, `defineField`, `defineArrayMember`, data > presentation, no title repetition, proper array keys.
  - `references/nextjs.md`: Server client, private dataset tokens, GROQ query patterns.
- `ponytail`: Minimalist, zero unnecessary dependencies or wrapper abstractions; use native Sanity schema types and direct GROQ queries.
- `caveman`: Terse communication while preserving full technical completeness.

---

## 3. Code & Config Inspected

- `sanity.config.ts`: Sanity Studio config mounted at `/studio` with `structureTool` and `visionTool`.
- `sanity.cli.ts`: CLI config reading `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.
- `sanity/env.ts`: Exports `apiVersion`, `dataset`, `projectId`.
- `sanity/schemaTypes/index.ts`: Currently empty schema types array.
- `sanity/structure.ts`: Basic default structure builder.
- `sanity/lib/client.ts` & `sanity/lib/live.ts`: Standard client setups without private read token support.
- `.env.example` & `.env.local`: Configured with project ID `3puec4cd` and dataset `production`.

---

## 4. Decisions & Assumptions

1. **Schema Definitions**:
   - `category` (document): `title` (string, required), `slug` (slug from title, required), `description` (text).
   - `instructor` (document): `name` (string, required), `slug` (slug from name, required), `photo` (image with hotspot), `expertise` (string), `bio` (text).
   - `lesson` (document):
     - `title` (string, required), `slug` (slug from title, required).
     - `videoUrl` (url, for YouTube, Vimeo, or Bunny embeds).
     - `thumbnail` (image with hotspot).
     - `duration` (number, in seconds; formatted dynamically in UI).
     - `isFreePreview` (boolean, default false).
     - `studentCount` (number, default 0).
     - `notes` (array of Portable Text blocks).
     - `keyPoints` (array of strings for "In this lesson you will" section).
     - `proTip` (text).
     - `resources` (array of objects: `type` [string dropdown: 'code' | 'docs' | 'github' | 'link' | 'pdf'], `title`, `description`, `url`).
     - *Parent Course*: Per `AGENTS.md` section 8, a lesson does not store its parent course directly; it is derived via reverse GROQ reference.
   - `module` (object, embedded inside course):
     - `title` (string, required), `summary` (text), `lessons` (array of references to `lesson`, required).
     - Module/lesson numbers (e.g., Module 5, Lesson 5.1) are derived from array ordering, not stored.
   - `course` (document):
     - `title` (string, required), `slug` (slug from title, required).
     - `summary` (text), `coverImage` (image with hotspot), `level` (string list: 'Beginner' | 'Intermediate' | 'Advanced'), `price` (number).
     - `isPopular` (boolean, default false), `studentCount` (number, default 0).
     - `learningOutcomes` (array of objects: `icon` [string identifier matching Lucide icons], `title` [string], `description` [text]).
     - `instructor` (reference to `instructor`, required).
     - `category` (reference to `category`).
     - `modules` (array of embedded `module` objects).

2. **Studio Structure (`sanity/structure.ts`)**:
   - Organized desk structure featuring grouped document lists for Courses, Lessons, Instructors, and Categories with clear icons for rapid content authoring.

3. **Server-Side Data Access & Security**:
   - Private dataset: all reads require a server-only read token (`SANITY_API_READ_TOKEN`).
   - `sanity/env.ts`: Add `readToken = process.env.SANITY_API_READ_TOKEN`.
   - `sanity/lib/client.ts`: Configure with `token: readToken` and `useCdn: false` (authenticated requests must bypass CDN).
   - Never expose `readToken` to browser client code.
   - `sanity/lib/queries.ts`: Write clean GROQ queries:
     - `ALL_COURSES_QUERY`: Fetches courses for catalog/homepage with instructor, category, module count, and total lesson count.
     - `COURSE_BY_SLUG_QUERY`: Fetches full course details with resolved modules, lessons, and instructor.
     - `LESSON_BY_SLUG_QUERY`: Fetches lesson details, key points, resources, and reverse-resolved parent course (`*[_type == "course" && references(^._id)][0]`).
     - `ALL_CATEGORIES_QUERY`: Fetches categories.
     - `INSTRUCTOR_BY_SLUG_QUERY`: Fetches instructor profile and referenced courses.
   - `sanity/lib/data.ts`: Server fetch helper functions (`getCourses()`, `getCourseBySlug(slug)`, `getLessonBySlug(slug)`, `getCategories()`, `getInstructorBySlug(slug)`).
   - `sanity/lib/types.ts`: Clean TypeScript definitions matching GROQ projections.

---

## 5. Files Expected to Touch

- **New Files**:
  - `sanity/schemaTypes/categoryType.ts`
  - `sanity/schemaTypes/instructorType.ts`
  - `sanity/schemaTypes/lessonType.ts`
  - `sanity/schemaTypes/moduleType.ts`
  - `sanity/schemaTypes/courseType.ts`
  - `sanity/lib/types.ts`
  - `sanity/lib/queries.ts`
  - `sanity/lib/data.ts`
- **Modified Files**:
  - `sanity/schemaTypes/index.ts`
  - `sanity/structure.ts`
  - `sanity/env.ts`
  - `sanity/lib/client.ts`
  - `sanity/lib/live.ts`
  - `.env.example`

---

## 6. Security Considerations

- `SANITY_API_READ_TOKEN` stays strictly on the server; never prefix with `NEXT_PUBLIC_`.
- Server data access helpers will not leak private dataset access to the browser.
- Input validation in Sanity schema ensures slugs and required fields cannot be left empty.

---

## 7. Acceptance Criteria

- [ ] All 5 schemas (`course`, `module`, `lesson`, `instructor`, `category`) correctly defined using `defineType`, `defineField`, and `defineArrayMember`.
- [ ] Schema relationships match `AGENTS.md` section 8 (module embedded in course, course referencing instructor & category, module referencing lessons, lesson parent derived via reverse ref).
- [ ] Studio structure cleanly categorizes content types.
- [ ] Server read client configured with private read token support and `useCdn: false`.
- [ ] GROQ queries and data functions in place for courses, course detail, lesson with parent course, categories, and instructors.
- [ ] TypeScript types strictly defined without `any`.
- [ ] `bun run lint` and `bunx tsc --noEmit` pass with zero errors.

---

## 8. Checks to Run

1. `bunx tsc --noEmit`: Typecheck across the entire repository.
2. `bun run lint`: Run ESLint.
3. Standalone Studio dev server check / compilation (`cd studio && bun run dev`).

---

## 9. Manual Test Steps

1. Start the standalone Studio workspace (`cd studio && bun run dev`).
2. Open the URL reported by the process (`http://localhost:3333`).
3. Verify Studio loads without schema validation or bundle errors.
4. Verify document types appear: Courses, Lessons, Instructors, Categories.
5. Create a draft Category, Instructor, Lesson, and Course with an embedded Module referencing the Lesson. Verify all fields save properly.
