import { ColorTokenValue, FontTokenValue, GradientTokenValue, TypographyTokenValue } from "@supernovaio/supernova-sdk"
import { PulsarFunction, PulsarTransformer } from "../pulsar"

// Add the [indentation] to all but the first line
const asComment: PulsarTransformer = new PulsarTransformer(
    "asComment",
    (text: string, indentation: string) => text
        .trim()
        .split("\n")
        .map((line, index) => ((index > 0) ? `${indentation}` : ``) + `// ${line}`)
        .join("\n")
)

const hexARGB: PulsarFunction = new PulsarFunction(
    "hexARGB",
    ({ hex }: ColorTokenValue) => {
        const asPart = (start: number, end: number) => hex.substring(start, end).toUpperCase()
        const alpha = asPart(6, 2)
        const red = asPart(0, 2)
        const green = asPart(2, 2)
        const blue = asPart(4, 2)
        return {
            alpha: alpha,
            red: red,
            green: green,
            blue: blue,
            full: `0x${alpha}${red}${green}${blue}`
        }
    }
)

const fontWeightCompose: PulsarFunction = new PulsarFunction(
    "fontWeightCompose",
    ({ subfamily }: FontTokenValue) => {
        let lowered = subfamily.toLowerCase()
        if (lowered.includes("emi")) return "SemiBold"
        else if (lowered.includes("heavy")) return "Black"
        else if (lowered.includes("bold")) return "Bold"
        else if (lowered.includes("medium")) return "Medium"
        else if (lowered.includes("ult") && lowered.includes("light")) return "Thin"
        else return "Normal"
    }
)

const textDecoration: PulsarFunction = new PulsarFunction(
    "textDecoration",
    ({ textDecoration }: TypographyTokenValue) => {
        switch (textDecoration) {
            case "Underline": return "Underline"
            case "Strikethrough": return "LineThrough"
            default: break;
        }
    }
)

const brushType: PulsarFunction = new PulsarFunction(
    "brushType",
    ({ type }: GradientTokenValue) => {
        switch (type) {
            case "Linear": return "linearGradient"
            case "Radial": return "radialGradient"
            case "Angular": return "sweepGradient"
            default: return ""
        }
    }
)

export default [
    asComment,
    hexARGB,
    fontWeightCompose,
    textDecoration,
    brushType,
]
