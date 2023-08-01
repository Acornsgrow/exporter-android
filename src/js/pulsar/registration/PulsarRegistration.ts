import { PulsarRegistry } from "./PulsarRegistry";
import { RegistrationType } from "./RegistrationType";

/**
 * A function or object meant to be registered with the Pulsar engine
 * via the {@link PulsarRegistry}
 */
export interface PulsarRegistration {
    readonly name: string;
    readonly type: RegistrationType;
}
