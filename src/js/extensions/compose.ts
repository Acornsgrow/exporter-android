import {
  ColorTokenValue,
  FontTokenValue,
  GradientTokenValue,
  TypographyTokenValue,
} from '@supernovaio/supernova-sdk'
import {
  createPulsarFunction,
  createPulsarTransformer,
} from '../pulsar/registration/create-registration'

// Add the [indentation] to all but the first line
export const asComment = createPulsarTransformer(
  'asComment',
  (text: string, indentation: string) =>
    text
      .trim()
      .split('\n')
      .map((line, index) => (index > 0 ? `${indentation}` : ``) + `// ${line}`)
      .join('\n'),
)

export const hexARGB = createPulsarFunction(
  'hexARGB',
  ({ a, r, g, b }: ColorTokenValue) => {
    const toHex = (part: number) =>
      ((part < 16 ? '0' : '') + part.toString(16)).toUpperCase()
    const parts = {
      alpha: toHex(a),
      red: toHex(r),
      green: toHex(g),
      blue: toHex(b),
    }
    const hex = `0x${parts.alpha}${parts.red}${parts.green}${parts.blue}`
    return {
      ...parts,
      full: hex,
      value: parseInt(hex, 16),
    }
  },
)

export const fontWeightCompose = createPulsarFunction(
  'fontWeightCompose',
  ({ subfamily }: FontTokenValue) => {
    const lowered = subfamily.toLowerCase()
    if (lowered.includes('emi')) return 'SemiBold'
    else if (lowered.includes('heavy')) return 'Black'
    else if (lowered.includes('bold')) return 'Bold'
    else if (lowered.includes('medium')) return 'Medium'
    else if (lowered.includes('ult') && lowered.includes('light')) return 'Thin'
    else return 'Normal'
  },
)

export const textDecoration = createPulsarFunction(
  'textDecoration',
  ({ textDecoration }: TypographyTokenValue) => {
    switch (textDecoration) {
      case 'Underline':
        return 'Underline'
      case 'Strikethrough':
        return 'LineThrough'
      default:
        break
    }
  },
)

export const brushType = createPulsarFunction(
  'brushType',
  ({ type }: GradientTokenValue) => {
    switch (type) {
      case 'Linear':
        return 'linearGradient'
      case 'Radial':
        return 'radialGradient'
      case 'Angular':
        return 'sweepGradient'
      default:
        return ''
    }
  },
)
