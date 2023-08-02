import { PulsarRegistration } from "./PulsarRegistration";
import { RegistrationType } from "./RegistrationType";

/**
 * A function utilizing Javascript to inject logic into the Pulsar templating language
 */
export class PulsarFunction implements PulsarRegistration {
    name: string;
    type: RegistrationType = RegistrationType.Function;
    func: Function;

    constructor(name: string, func: Function) {
        this.name = name;
        this.func = func;
    }
}
