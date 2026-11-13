# Implementation Prompt: Seed Sanity Dataset (`prompts/seed-sanity.md`)

## 1. Goal

Import the provided `studio/scripts/seed/seed.ndjson` (141 documents: 6 categories, 5 instructors, 120 lessons, 10 courses) into the Sanity `production` dataset using the Sanity CLI (`sanity dataset import`), align the Studio schema and web data layer with the exact field shapes inside `seed.ndjson`, deploy the updated schema, and verify all document counts without modifying `seed.ndjson` or `videos.json`.

---

## 2. Skills & References Read

- `AGENTS.md`: Sections 5 (Architecture), 8 (Data Modeling), 9 (Video Ingestion), 13 (Checks to run).
- `sanity-best-practices` (`.agents/skills/sanity-best-practices/SKILL.md`): Schema field definitions, Portable Text, image alt fields, and GROQ projections.
- `sanity-migration` (`.agents/skills/sanity-migration/SKILL.md`): Deterministic IDs, `sanity datasets import --replace` for idempotent reruns, and post-import count/reference validation.
- `ponytail`: Minimalist execution — use native `npx sanity dataset import` directly instead of custom seeding scripts; align schema fields with the canonical seed data in the fewest lines possible.
- `caveman`: Terse, high-signal communication.

---

## 3. Code & Files Inspected

- `studio/scripts/seed/seed.ndjson`:
  - 141 NDJSON lines total:
    - `category`: 6 documents (`_id`, `_type`, `title`, `slug`, `description`)
    - `instructor`: 5 documents (`_id`, `_type`, `name`, `slug`, `photo` with `alt` and `_sanityAsset`, `expertise` as `string[]`, `bio` as Portable Text `block[]`)
    - `lesson`: 120 documents (`_id`, `_type`, `title`, `slug`, `videoUrl`, `thumbnail` with `alt` and `_sanityAsset`, `duration`, `freePreview` boolean, `studentCount`, `notes` Portable Text `block[]`, `keyPoints` `string[]`, `proTip`, `resources` array)
    - `course`: 10 documents (`_id`, `_type`, `title`, `slug`, `summary`, `coverImage` with `alt` and `_sanityAsset`, `instructor` ref, `category` ref, `level` `'beginner' | 'intermediate' | 'advanced'`, `price`, `popular` boolean, `studentCount`, `learningOutcomes`, `modules`)
- `studio/scripts/seed/videos.json`:
  - 120 video metadata objects keyed by lesson slug (`id`, `title`, `channel`, `duration`, `query`), matching the 120 lessons in `seed.ndjson` for video pipeline lookups.
- `studio/schemaTypes/courseType.ts`, `lessonType.ts`, `instructorType.ts`:
  - Discovered field mismatches against `seed.ndjson`:
    1. `courseType.ts`: Uses `isPopular` instead of `popular`, capitalized `level` options (`Beginner`, `Intermediate`, `Advanced`) instead of lowercase (`beginner`, `intermediate`, `advanced`), and `coverImage` lacks `alt` field.
    2. `lessonType.ts`: Uses `isFreePreview` instead of `freePreview`, and `thumbnail` lacks `alt` field.
    3. `instructorType.ts`: Uses `expertise` (`string`) instead of `array` of `string`, `bio` (`text`) instead of `array` of `block` (Portable Text), and `photo` lacks `alt` field.
- `sanity/lib/queries.ts` & `sanity/lib/types.ts`:
  - Queries and TypeScript interfaces reference `isPopular`, `isFreePreview`, `level`, `expertise: string`, and `bio: string`.

---

## 4. Decisions & Assumptions

1. **Zero Modification to Seed Files**:
   - `studio/scripts/seed/seed.ndjson` and `studio/scripts/seed/videos.json` will not be modified.
2. **Schema & Data Layer Alignment with `seed.ndjson`**:
   - Update `studio/schemaTypes/courseType.ts`:
     - Rename `isPopular` to `popular` (boolean).
     - Update `level` list values to `'beginner'`, `'intermediate'`, `'advanced'` (initialValue `'beginner'`).
     - Add `alt` (`string`) field to `coverImage`.
   - Update `studio/schemaTypes/lessonType.ts`:
     - Rename `isFreePreview` to `freePreview` (boolean).
     - Add `alt` (`string`) field to `thumbnail`.
   - Update `studio/schemaTypes/instructorType.ts`:
     - Change `expertise` to `array` of `string` (`of: [defineArrayMember({type: 'string'})]`).
     - Change `bio` to Portable Text (`array` of `block`, `of: [defineArrayMember({type: 'block'})]`).
     - Add `alt` (`string`) field to `photo` and update preview subtitle to format `expertise` array cleanly.
   - Update `sanity/lib/queries.ts` and `sanity/lib/types.ts`:
     - Project `popular` and `freePreview` (and alias or type appropriately so both schema and consumers stay consistent), update `Instructor` (`expertise?: string[]`, `bio?: PortableTextBlock[]`), `SanityImage` (`alt?: string`), and `Course` (`level?: 'beginner' | 'intermediate' | 'advanced'`).
3. **Sanity CLI Import & Verification**:
   - Run `npx sanity dataset import scripts/seed/seed.ndjson production --replace` from `studio/`.
   - The CLI automatically uploads all `_sanityAsset` image URLs (`picsum.photos`, `randomuser.me`, `i.ytimg.com`) and links them to the documents.
   - Deploy the updated Studio schema (`npx sanity schema deploy`).
   - Verify exact document counts in `production` via GROQ (`category`: 6, `instructor`: 5, `lesson`: 120, `course`: 10, total: 141) and confirm `git status` shows `seed.ndjson` and `videos.json` untouched.

---

## 5. Files Expected to Touch

- **New Files**:
  - `prompts/seed-sanity.md`
- **Modified Files**:
  - `studio/schemaTypes/courseType.ts`
  - `studio/schemaTypes/lessonType.ts`
  - `studio/schemaTypes/instructorType.ts`
  - `sanity/lib/queries.ts`
  - `sanity/lib/types.ts`
- **Untouched Read-Only Seed Files**:
  - `studio/scripts/seed/seed.ndjson`
  - `studio/scripts/seed/videos.json`

---

## 6. Security Considerations

- CLI import and schema deploy run locally via authenticated Sanity CLI session; no tokens or secrets are hardcoded or exposed to client bundles.
- `SANITY_API_READ_TOKEN` remains server-only in `.env.local`.

---

## 7. Acceptance Criteria

- [ ] `studio/scripts/seed/seed.ndjson` and `studio/scripts/seed/videos.json` are completely unmodified.
- [ ] Studio schemas (`course`, `lesson`, `instructor`) match all fields in `seed.ndjson` without unknown-field warnings in Sanity Studio.
- [ ] `npx sanity dataset import scripts/seed/seed.ndjson production --replace` completes with 141 documents imported and assets uploaded.
- [ ] GROQ verification query confirms exact counts in `production`: 6 categories, 5 instructors, 120 lessons, 10 courses (141 total).
- [ ] `npx sanity schema deploy` succeeds in `studio/`.
- [ ] `bunx tsc --noEmit` (in root and `studio/`) and `bun run lint` pass with zero errors.

---

## 8. Checks to Run

1. `cd studio && npx sanity dataset import scripts/seed/seed.ndjson production --replace`
2. `cd studio && npx sanity documents query '{"categories": count(*[_type == "category"]), "instructors": count(*[_type == "instructor"]), "lessons": count(*[_type == "lesson"]), "courses": count(*[_type == "course"]), "total": count(*[_type in ["category", "instructor", "lesson", "course"]])}' --dataset production`
3. `cd studio && npx sanity schema deploy`
4. `cd studio && bun run typecheck`
5. `bunx tsc --noEmit && bun run lint`

---

## 9. Manual Test Steps

1. Run `cd studio && bun run dev` and open `http://localhost:3333`.
2. Click **Courses** (verify 10 courses load with cover images, `popular` toggle, lowercase `level`, and nested modules/lessons).
3. Click **Lessons** (verify 120 lessons load with YouTube thumbnails, Portable Text notes, and `freePreview` toggle).
4. Click **Instructors** (verify 5 instructors load with portraits, `expertise` string tags, and Portable Text `bio`).
5. Click **Categories** (verify 6 categories load).
