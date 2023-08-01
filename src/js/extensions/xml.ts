import { TokenGroup } from "@supernovaio/supernova-sdk";
import { PulsarFunction, PulsarTransformer } from "../pulsar";

const createFullTokenGroupPath: PulsarFunction = new PulsarFunction(
    "createFullTokenGroupPath",
    (group: TokenGroup) => (group.isRoot) ? [] : group.path.concat(group.name)
)

// Add the [indentationString] to all but the first line
const indentMultiline: PulsarTransformer = new PulsarTransformer(
    "indentMultiline",
    (text: string, indentation: string) => text.trim().split("\n").join(`\n${indentation}`)
)

const groupFontsByFamily: PulsarFunction = new PulsarFunction(
    "groupFontsByFamily",
    (fonts: any) => {
        let groupBy = (xs: any, key: string) => {
            return xs.reduce(function(rv: any, x: any) {
              (rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []).push(x);
              return rv;
            }, {});
          };
    
        return groupBy(fonts, "family")
    }
)

export default [
    createFullTokenGroupPath,
    indentMultiline,
    groupFontsByFamily,
]

