import {defineArrayMember, defineField, defineType} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const courseType = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 3,
      description: 'Short marketing summary of the course',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'Beginner'},
          {title: 'Intermediate', value: 'Intermediate'},
          {title: 'Advanced', value: 'Advanced'},
        ],
        layout: 'radio',
      },
      initialValue: 'Beginner',
    }),
    defineField({
      name: 'price',
      type: 'number',
      description: 'Price in USD',
    }),
    defineField({
      name: 'isPopular',
      title: 'Popular Course',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      title: 'Student Count',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'learningOutcomes',
      title: 'Learning Outcomes',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'learningOutcome',
          title: 'Learning Outcome',
          fields: [
            defineField({
              name: 'icon',
              type: 'string',
              description:
                'Lucide icon name identifier (e.g., Sparkles, Code, Shield, Zap)',
            }),
            defineField({
              name: 'title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        }),
      ],
      description: "List of learning outcomes for the 'What you\\'ll learn' section",
    }),
    defineField({
      name: 'instructor',
      type: 'reference',
      to: [{type: 'instructor'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'modules',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'module',
        }),
      ],
      description: 'Ordered list of course modules',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      instructor: 'instructor.name',
      media: 'coverImage',
    },
    prepare({title, instructor, media}) {
      return {
        title,
        subtitle: instructor ? `by ${instructor}` : 'No instructor assigned',
        media,
      }
    },
  },
})
