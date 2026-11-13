import {defineArrayMember, defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons'

export const moduleType = defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'lessons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'lesson'}],
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lessons: 'lessons',
    },
    prepare({title, lessons}) {
      const count = Array.isArray(lessons) ? lessons.length : 0
      return {
        title,
        subtitle: `${count} lesson${count === 1 ? '' : 's'}`,
      }
    },
  },
})
