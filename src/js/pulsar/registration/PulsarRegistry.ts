// @ts-nocheck
import { PulsarFunction } from "./PulsarFunction";
import { PulsarPayload } from "./PulsarPayload";
import { PulsarRegistration } from "./PulsarRegistration";
import { PulsarTransformer } from "./PulsarTransformer";

export namespace PulsarRegistry {
    export function register(registrations: PulsarRegistration[]) {
        for (let registration of registrations) {
            if (registration instanceof PulsarFunction) {
                Pulsar.registerFunction(registration.name, registration.func);
            } else if (registration instanceof PulsarTransformer) {
                Pulsar.registerTransformer(registration.name, registration.func);
            } else if (registration instanceof PulsarPayload) {
                Pulsar.registerPayload(registration.name, registration.obj);
            }
        }
    }
}
