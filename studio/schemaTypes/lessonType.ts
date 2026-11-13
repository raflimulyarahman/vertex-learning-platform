import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const lessonType = defineType({
  name: 'lesson',
  title: 'Lesson',
  type: 'document',
  icon: DocumentTextIcon,
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
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Embed URL for video playback (YouTube, Vimeo, or Bunny)',
    }),
    defineField({
      name: 'thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'duration',
      type: 'number',
      description: 'Duration in seconds',
    }),
    defineField({
      name: 'isFreePreview',
      title: 'Free Preview',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'studentCount',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'notes',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
      description: 'Rich text notes in Portable Text',
    }),
    defineField({
      name: 'keyPoints',
      title: 'Key Points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Key takeaways for the "In this lesson you will" section',
    }),
    defineField({
      name: 'proTip',
      title: 'Pro Tip',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'resources',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'resource',
          title: 'Resource',
          fields: [
            defineField({
              name: 'type',
              type: 'string',
              options: {
                list: [
                  {title: 'Code', value: 'code'},
                  {title: 'Documentation', value: 'docs'},
                  {title: 'GitHub', value: 'github'},
                  {title: 'Link', value: 'link'},
                  {title: 'PDF', value: 'pdf'},
                ],
              },
              initialValue: 'link',
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
            defineField({
              name: 'url',
              type: 'url',
              validation: (rule) =>
                rule.required().uri({
                  scheme: ['http', 'https'],
                }),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      duration: 'duration',
      media: 'thumbnail',
    },
    prepare({title, duration, media}) {
      const minutes =
        typeof duration === 'number' ? Math.round(duration / 60) : null
      return {
        title,
        subtitle:
          minutes !== null ? `${minutes} min (${duration}s)` : 'No duration',
        media,
      }
    },
  },
})
