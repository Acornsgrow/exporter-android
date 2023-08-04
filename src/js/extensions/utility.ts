import { FontToken, FontTokenValue } from '@supernovaio/supernova-sdk'
import {
  createPulsarFunction,
  createPulsarTransformer,
} from '../pulsar/registration/create-registration'

export const aconcat = createPulsarTransformer(
  'aconcat',
  (lhs: any[], rhs: any[]) => lhs.concat(rhs),
)

export const ajoin = createPulsarTransformer(
  'ajoin',
  (array: any[], separator: string) => array.join(separator),
)

export const isDigit = createPulsarTransformer(
  'isDigit',
  (value: string) => value >= '0' && value <= '9',
)

// Ensure integers are formatted as floating point values (e.g. 1 -> 1.0)
export const toFixed = createPulsarTransformer('toFixed', (value: number) =>
  Number.isInteger(value) ? value.toFixed(1) : value,
)

// Utility because the ternary expression is not supported in Pulsar
export const ternary = createPulsarFunction(
  'ternary',
  (predicate: boolean, trueCase: any, falseCase: any) =>
    predicate ? trueCase : falseCase,
)

type FamilyGroups = {
  [key: string]: FontTokenValue[]
}

export const groupByFamily = createPulsarTransformer(
  'groupByFamily',
  (array: FontToken[]) =>
    array
      .map((value) => value.value)
      .reduce((acc, value) => {
        acc[value.family] = acc[value.family] || []
        acc[value.family].push(value)
        return acc
      }, {} as FamilyGroups),
)
