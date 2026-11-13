import {categoryType} from './categoryType'
import {courseType} from './courseType'
import {instructorType} from './instructorType'
import {lessonType} from './lessonType'
import {moduleType} from './moduleType'

export const schemaTypes = [
  categoryType,
  instructorType,
  lessonType,
  moduleType,
  courseType,
]

export const schema = {
  types: schemaTypes,
}

export {
  categoryType,
  courseType,
  instructorType,
  lessonType,
  moduleType,
}
