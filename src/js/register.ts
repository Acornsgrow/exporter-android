import { register } from './pulsar/registration/PulsarRegistry'
import * as Compose from './extensions/compose'
import * as Utility from './extensions/utility'
import * as Xml from './extensions/xml'

register([
  ...Object.values(Compose),
  ...Object.values(Utility),
  ...Object.values(Xml),
])
