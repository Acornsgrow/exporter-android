export type PulsarRegistration =
  | PulsarFunction
  | PulsarTransformer
  | PulsarPayload

export type PulsarFunction = {
  name: string
  func: (...args: any[]) => any
  registrationType: 'function'
}

export type PulsarTransformer = {
  name: string
  transform: (...args: any[]) => any
  registrationType: 'transformer'
}

export type PulsarPayload = {
  name: string
  obj: object
  registrationType: 'payload'
}
