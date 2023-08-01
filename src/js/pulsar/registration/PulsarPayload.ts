import { PulsarRegistration } from "./PulsarRegistration";
import { RegistrationType } from "./RegistrationType";

export class PulsarPayload implements PulsarRegistration {
    name: string;
    type: RegistrationType = RegistrationType.Payload;
    obj: object;

    constructor(name: string, obj: object) {
        this.name = name;
        this.obj = obj;
    }
}
