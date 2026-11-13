import type { PortableTextBlock } from 'next-sanity'

/**
 * Base Sanity document reference fields
 */
export interface SanityReference {
  _type: 'reference'
  _ref: string
  _key?: string
}

/**
 * Sanity Image field with hotspot/crop support
 */
export interface SanityImage {
  _type?: 'image'
  alt?: string
  asset?: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
}

/**
 * Sanity Slug
 */
export interface SanitySlug {
  _type?: 'slug'
  current: string
}

/**
 * Category document
 */
export interface Category {
  _id: string
  _type: 'category'
  title: string
  slug: SanitySlug
  description?: string
}

export interface CategoryWithCount extends Category {
  courseCount?: number
}

/**
 * Instructor document
 */
export interface Instructor {
  _id: string
  _type: 'instructor'
  name: string
  slug: SanitySlug
  photo?: SanityImage
  expertise?: string[]
  bio?: PortableTextBlock[]
}

/**
 * Lesson resource link
 */
export interface LessonResource {
  _key?: string
  type: 'code' | 'docs' | 'github' | 'link' | 'pdf'
  title: string
  description?: string
  url: string
}

/**
 * Lesson document
 */
export interface Lesson {
  _id: string
  _type: 'lesson'
  title: string
  slug: SanitySlug
  videoUrl?: string
  thumbnail?: SanityImage
  duration?: number // in seconds
  freePreview?: boolean
  isFreePreview?: boolean
  studentCount?: number
  notes?: PortableTextBlock[]
  keyPoints?: string[]
  proTip?: string
  resources?: LessonResource[]
}

/**
 * Learning Outcome embedded object in course
 */
export interface LearningOutcome {
  _key?: string
  icon: string
  title: string
  description: string
}

/**
 * Module embedded object inside Course
 */
export interface CourseModule<TLesson = SanityReference | LessonSummary> {
  _key: string
  title: string
  summary?: string
  lessons?: TLesson[]
}

/**
 * Course document
 */
export interface Course {
  _id: string
  _type: 'course'
  title: string
  slug: SanitySlug
  summary?: string
  coverImage?: SanityImage
  level?: 'beginner' | 'intermediate' | 'advanced'
  price?: number
  popular?: boolean
  isPopular?: boolean
  studentCount?: number
  learningOutcomes?: LearningOutcome[]
  instructor?: Instructor | SanityReference
  category?: Category | SanityReference
  modules?: CourseModule[]
}

/**
 * Condensed Lesson summary for module listings / course detail
 */
export interface LessonSummary {
  _id: string
  _type: 'lesson'
  title: string
  slug: SanitySlug
  duration?: number
  freePreview?: boolean
  isFreePreview?: boolean
  studentCount?: number
  thumbnail?: SanityImage
}

/**
 * Condensed Instructor summary for course cards
 */
export interface InstructorSummary {
  _id: string
  name: string
  slug: SanitySlug
  photo?: SanityImage
  expertise?: string[]
  bio?: PortableTextBlock[]
}

/**
 * Condensed Category summary
 */
export interface CategorySummary {
  _id: string
  title: string
  slug: SanitySlug
  description?: string
}

/**
 * ALL_COURSES_QUERY return type (catalog card)
 */
export interface CourseListItem {
  _id: string
  _type: 'course'
  title: string
  slug: SanitySlug
  summary?: string
  coverImage?: SanityImage
  level?: 'beginner' | 'intermediate' | 'advanced'
  price?: number
  popular?: boolean
  isPopular?: boolean
  studentCount?: number
  instructor?: InstructorSummary | null
  category?: CategorySummary | null
  moduleCount: number
  lessonCount: number
}

/**
 * COURSE_BY_SLUG_QUERY return type (full course details)
 */
export interface CourseDetail {
  _id: string
  _type: 'course'
  title: string
  slug: SanitySlug
  summary?: string
  coverImage?: SanityImage
  level?: 'beginner' | 'intermediate' | 'advanced'
  price?: number
  popular?: boolean
  isPopular?: boolean
  studentCount?: number
  learningOutcomes?: LearningOutcome[]
  instructor?: InstructorSummary | null
  category?: CategorySummary | null
  modules?: Array<{
    _key: string
    title: string
    summary?: string
    lessons?: LessonSummary[]
  }>
  moduleCount: number
  lessonCount: number
}

/**
 * Parent course navigation structure inside LessonDetail
 */
export interface LessonParentCourse {
  _id: string
  _type: 'course'
  title: string
  slug: SanitySlug
  instructor?: InstructorSummary | null
  modules?: Array<{
    _key: string
    title: string
    summary?: string
    lessons?: Array<{
      _id: string
      _type: 'lesson'
      title: string
      slug: SanitySlug
      duration?: number
      freePreview?: boolean
      isFreePreview?: boolean
    }>
  }>
}

/**
 * LESSON_BY_SLUG_QUERY return type (lesson with reverse parent course lookup)
 */
export interface LessonDetail {
  _id: string
  _type: 'lesson'
  title: string
  slug: SanitySlug
  videoUrl?: string
  thumbnail?: SanityImage
  duration?: number
  freePreview?: boolean
  isFreePreview?: boolean
  studentCount?: number
  notes?: PortableTextBlock[]
  keyPoints?: string[]
  proTip?: string
  resources?: LessonResource[]
  course?: LessonParentCourse | null
}

/**
 * INSTRUCTOR_BY_SLUG_QUERY return type (instructor with taught courses)
 */
export interface InstructorDetail {
  _id: string
  _type: 'instructor'
  name: string
  slug: SanitySlug
  photo?: SanityImage
  expertise?: string[]
  bio?: PortableTextBlock[]
  courses?: CourseListItem[]
}
