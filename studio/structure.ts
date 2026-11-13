import type {StructureResolver} from 'sanity/structure'
import {BookIcon, DocumentTextIcon, UserIcon, TagIcon} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('course')
        .title('Courses')
        .icon(BookIcon),
      S.documentTypeListItem('lesson')
        .title('Lessons')
        .icon(DocumentTextIcon),
      S.divider(),
      S.documentTypeListItem('instructor')
        .title('Instructors')
        .icon(UserIcon),
      S.documentTypeListItem('category')
        .title('Categories')
        .icon(TagIcon),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['course', 'lesson', 'instructor', 'category'].includes(
            listItem.getId() || ''
          )
      ),
    ])
