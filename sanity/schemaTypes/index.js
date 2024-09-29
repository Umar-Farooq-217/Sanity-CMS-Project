import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {mainPageDataType} from './mainPageDataType'
import { middleDataType } from './middleDataType'
import { lastDataType } from './lastDataType'

export const schema = {
  types: [mainPageDataType,middleDataType,lastDataType],
}
