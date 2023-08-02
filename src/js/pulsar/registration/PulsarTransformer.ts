import { PulsarRegistration } from "./PulsarRegistration";
import { RegistrationType } from "./RegistrationType";

/**
 * An extension to Pulsar, similar to Kotlin's extension function pattern.
 *
 * NOTE: This pattern can only be applied to the following types: `string`, `number`, `object`, `array`, and `boolean`
 */
export class PulsarTransformer implements PulsarRegistration {
    name: string;
    type: RegistrationType = RegistrationType.Transformer;
    func: Function;

    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
    }
}
