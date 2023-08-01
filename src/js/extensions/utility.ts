import { FontToken, FontTokenValue } from "@supernovaio/supernova-sdk";
import { PulsarFunction, PulsarTransformer } from "../pulsar";

const aconcat: PulsarTransformer = new PulsarTransformer(
    "aconcat",
    (lhs: any[], rhs: any[]) => lhs.concat(rhs)
)

const ajoin: PulsarTransformer = new PulsarTransformer(
    "ajoin",
    (array: any[], separator: string) => array.join(separator)
)

const isDigit: PulsarTransformer = new PulsarTransformer(
    "isDigit",
    (value: string) => value >= '0' && value <= '9'
)

// Ensure integers are formatted as floating point values (e.g. 1 -> 1.0)
const toFixed: PulsarTransformer = new PulsarTransformer(
    "toFixed",
    (value: number) => (Number.isInteger(value)) ? value.toFixed(1) : value
)

// Utility because the ternary expression is not supported in Pulsar
const ternary: PulsarFunction = new PulsarFunction(
    "ternary",
    (predicate: boolean, trueCase: any, falseCase: any) => (predicate) ? trueCase : falseCase
)

class FamilyGroups {
    [key: string]: FontTokenValue[]
}

const groupByFamily: PulsarTransformer = new PulsarTransformer(
    "groupByFamily",
    (array: FontToken[]) => array
        .map((value) => value.value)
        .reduce((acc, value) => {
            (acc[value.family] = acc[value.family] || []).push(value);
            return acc;
        }, new FamilyGroups())
)

export default [
    aconcat,
    ajoin,
    isDigit,
    toFixed,
    ternary,
    groupByFamily,
]
