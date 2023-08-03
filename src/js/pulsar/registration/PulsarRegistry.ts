import { PulsarRegistration } from './types'

export function register(registrations: PulsarRegistration[]) {
  for (const registration of registrations) {
    if (registration.registrationType === 'function') {
      Pulsar.registerFunction(registration.name, registration.func)
    } else if (registration.registrationType === 'transformer') {
      Pulsar.registerTransformer(registration.name, registration.transform)
    } else if (registration.registrationType === 'payload') {
      Pulsar.registerPayload(registration.name, registration.obj)
    }
  }
}
