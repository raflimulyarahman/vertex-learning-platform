import 'server-only'

import { sanityFetch } from './fetch'
import {
  ALL_COURSES_QUERY,
  COURSE_BY_SLUG_QUERY,
  LESSON_BY_SLUG_QUERY,
  ALL_CATEGORIES_QUERY,
  INSTRUCTOR_BY_SLUG_QUERY,
  ALL_INSTRUCTORS_QUERY,
} from './queries'
import type {
  CourseListItem,
  CourseDetail,
  LessonDetail,
  CategoryWithCount,
  InstructorDetail,
  Instructor,
} from './types'

/**
 * Fetch all published courses for the catalog / explore view.
 */
export async function getCourses(): Promise<CourseListItem[]> {
  return sanityFetch<CourseListItem[]>({
    query: ALL_COURSES_QUERY,
    tags: ['course', 'instructor', 'category'],
  })
}

/**
 * Fetch a single course by its slug including curriculum modules and lessons.
 */
export async function getCourseBySlug(slug: string): Promise<CourseDetail | null> {
  return sanityFetch<CourseDetail | null>({
    query: COURSE_BY_SLUG_QUERY,
    params: { slug },
    tags: [`course:${slug}`, 'lesson', 'instructor'],
  })
}

/**
 * Fetch a lesson by slug, including notes and reverse-resolved parent course navigation.
 */
export async function getLessonBySlug(slug: string): Promise<LessonDetail | null> {
  return sanityFetch<LessonDetail | null>({
    query: LESSON_BY_SLUG_QUERY,
    params: { slug },
    tags: [`lesson:${slug}`, 'course'],
  })
}

/**
 * Fetch all categories with associated course counts.
 */
export async function getCategories(): Promise<CategoryWithCount[]> {
  return sanityFetch<CategoryWithCount[]>({
    query: ALL_CATEGORIES_QUERY,
    tags: ['category', 'course'],
  })
}

/**
 * Fetch an instructor profile by slug with all courses they teach.
 */
export async function getInstructorBySlug(slug: string): Promise<InstructorDetail | null> {
  return sanityFetch<InstructorDetail | null>({
    query: INSTRUCTOR_BY_SLUG_QUERY,
    params: { slug },
    tags: [`instructor:${slug}`, 'course'],
  })
}

/**
 * Fetch all instructors.
 */
export async function getInstructors(): Promise<Instructor[]> {
  return sanityFetch<Instructor[]>({
    query: ALL_INSTRUCTORS_QUERY,
    tags: ['instructor'],
  })
}
