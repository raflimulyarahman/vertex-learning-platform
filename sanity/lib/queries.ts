import { defineQuery } from 'next-sanity'

/**
 * Fetch all courses for catalog and homepage listings with expanded
 * instructor and category references, plus computed module and lesson counts.
 */
export const ALL_COURSES_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    _type,
    title,
    slug,
    summary,
    coverImage,
    level,
    price,
    isPopular,
    studentCount,
    instructor->{
      _id,
      name,
      slug,
      photo,
      expertise
    },
    category->{
      _id,
      title,
      slug
    },
    "moduleCount": count(coalesce(modules, [])),
    "lessonCount": count(coalesce(modules[].lessons[], []))
  }
`)

/**
 * Fetch a single course by its slug with full details, learning outcomes,
 * instructor bio, category, and all nested modules with expanded lesson summaries.
 */
export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    summary,
    coverImage,
    level,
    price,
    isPopular,
    studentCount,
    learningOutcomes[]{
      _key,
      icon,
      title,
      description
    },
    instructor->{
      _id,
      name,
      slug,
      photo,
      expertise,
      bio
    },
    category->{
      _id,
      title,
      slug,
      description
    },
    modules[]{
      _key,
      title,
      summary,
      lessons[]->{
        _id,
        _type,
        title,
        slug,
        duration,
        isFreePreview,
        studentCount,
        thumbnail
      }
    },
    "moduleCount": count(coalesce(modules, [])),
    "lessonCount": count(coalesce(modules[].lessons[], []))
  }
`)

/**
 * Fetch a lesson by its slug, including rich text notes, key points, pro tip,
 * resources, and a reverse-resolved parent course with curriculum modules for navigation.
 */
export const LESSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    slug,
    videoUrl,
    thumbnail,
    duration,
    isFreePreview,
    studentCount,
    notes,
    keyPoints,
    proTip,
    resources[]{
      _key,
      type,
      title,
      description,
      url
    },
    "course": *[_type == "course" && references(^._id)][0] {
      _id,
      _type,
      title,
      slug,
      instructor->{
        _id,
        name,
        slug,
        photo
      },
      modules[]{
        _key,
        title,
        summary,
        lessons[]->{
          _id,
          _type,
          title,
          slug,
          duration,
          isFreePreview
        }
      }
    }
  }
`)

/**
 * Fetch all categories with computed count of courses referencing each.
 */
export const ALL_CATEGORIES_QUERY = defineQuery(`
  *[_type == "category" && defined(slug.current)] | order(title asc) {
    _id,
    _type,
    title,
    slug,
    description,
    "courseCount": count(*[_type == "course" && references(^._id)])
  }
`)

/**
 * Fetch an instructor by slug with full bio, expertise, and list of referenced courses.
 */
export const INSTRUCTOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    _type,
    name,
    slug,
    photo,
    expertise,
    bio,
    "courses": *[_type == "course" && references(^._id) && defined(slug.current)] | order(title asc) {
      _id,
      _type,
      title,
      slug,
      summary,
      coverImage,
      level,
      price,
      isPopular,
      studentCount,
      category->{
        _id,
        title,
        slug
      },
      "moduleCount": count(coalesce(modules, [])),
      "lessonCount": count(coalesce(modules[].lessons[], []))
    }
  }
`)

/**
 * Fetch all instructors with course count.
 */
export const ALL_INSTRUCTORS_QUERY = defineQuery(`
  *[_type == "instructor" && defined(slug.current)] | order(name asc) {
    _id,
    _type,
    name,
    slug,
    photo,
    expertise,
    bio,
    "courseCount": count(*[_type == "course" && references(^._id)])
  }
`)

/**
 * Slugs queries for generateStaticParams
 */
export const COURSE_SLUGS_QUERY = defineQuery(`
  *[_type == "course" && defined(slug.current)]{
    "slug": slug.current
  }
`)

export const LESSON_SLUGS_QUERY = defineQuery(`
  *[_type == "lesson" && defined(slug.current)]{
    "slug": slug.current
  }
`)
