import type { PulsarFunction, PulsarPayload, PulsarTransformer } from './types'

export const createPulsarFunction = (
  name: string,
  func: (...args: any[]) => any,
): PulsarFunction => ({
  name,
  registrationType: 'function',
  func,
})

export const createPulsarTransformer = (
  name: string,
  transform: (...args: any[]) => any,
): PulsarTransformer => ({
  name,
  registrationType: 'transformer',
  transform,
})

export const createPulsarPayload = (
  name: string,
  obj: object,
): PulsarPayload => ({
  name,
  registrationType: 'payload',
  obj,
})
