import { FontToken, Token } from '@supernovaio/supernova-sdk'
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
  [key: string]: FontToken[]
}

type ComponentGroups = {
  [component: string]: Token[]
}

type ComponentProperty = {
  component: string
}

export const groupByFamily = createPulsarTransformer(
  'groupByFamily',
  (array: FontToken[]) =>
    array.reduce((acc, value) => {
      acc[value.value.family] = acc[value.value.family] || []
      acc[value.value.family].push(value)
      return acc
    }, {} as FamilyGroups),
)

export const groupByComponent = createPulsarFunction(
  'groupByComponent',
  (array: Token[]) => {
    const componentOptions =
      array.at(0)?.properties?.find((prop) => prop.codeName === 'component')
        ?.options ?? []
    return array.reduce((acc, value) => {
      const optionId =
        (value.propertyValues as ComponentProperty).component ?? ''
      const componentName =
        componentOptions.find((option) => option.id === optionId)?.name ?? ''
      acc[componentName] = acc[componentName] || []
      acc[componentName].push(value)
      return acc
    }, {} as ComponentGroups)
  },
)

export const toJson = createPulsarFunction('toJson', (any: any) =>
  JSON.stringify(any, null, '  '),
)

export const getFullTokenName = createPulsarFunction(
  'getFullTokenName',
  (token: Token) => {
    return token.parent?.path?.concat(token.parent.name, token.name)?.join(' ')
  },
)

export const getComponentTokenName = createPulsarFunction(
  'getComponentTokenName',
  (token: Token) =>
    token.parent?.path
      ?.slice(3)
      ?.concat(token.parent.name, token.name)
      ?.join(' '),
)

export const getTokenType = createPulsarFunction(
  'getTokenType',
  (token: Token) => token.tokenType,
)

export const getPackageName = createPulsarFunction(
  'getPackageName',
  (asPath: boolean = false, prefix: string = '', suffix: string = '') =>
    (prefix ? prefix.split(/[./]/) : [])
      .concat(Pulsar.exportConfiguration.packageName.split('.'))
      .concat(suffix ? suffix.split(/[./]/) : [])
      .join(asPath ? '/' : '.'),
)

export const filterComponentTokens = createPulsarTransformer(
  'filterComponentTokens',
  (tokens: Token[]) =>
    tokens.filter(
      (token) =>
        (token.propertyValues as ComponentProperty).component === undefined,
    ),
)
