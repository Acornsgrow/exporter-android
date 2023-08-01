import { PulsarRegistry } from "./pulsar/registration/PulsarRegistry"
import Compose from "./extensions/compose"
import Utility from "./extensions/utility"
import Xml from "./extensions/xml"

PulsarRegistry.register([
    ...Compose,
    ...Utility,
    ...Xml,
])
