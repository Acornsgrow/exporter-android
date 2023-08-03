import { TokenGroup } from '@supernovaio/supernova-sdk'
import {
  createPulsarFunction,
  createPulsarTransformer,
} from '../pulsar/registration/create-registration'

export const createFullTokenGroupPath = createPulsarFunction(
  'createFullTokenGroupPath',
  (group: TokenGroup) => (group.isRoot ? [] : group.path.concat(group.name)),
)

// Add the [indentationString] to all but the first line
export const indentMultiline = createPulsarTransformer(
  'indentMultiline',
  (text: string, indentation: string) =>
    text.trim().split('\n').join(`\n${indentation}`),
)

export const groupFontsByFamily = createPulsarFunction(
  'groupFontsByFamily',
  (fonts: any) => {
    const groupBy = (xs: any, key: string) => {
      return xs.reduce(function (rv: any, x: any) {
        rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []
        rv[x[key].toLowerCase()].push(x)
        return rv
      }, {})
    }

    return groupBy(fonts, 'family')
  },
)
