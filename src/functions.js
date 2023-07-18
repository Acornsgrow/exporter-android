/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
function indentMultilineText(text, indentationString) {
    return text.trim().split("\n").join("\n" + indentationString);
}

/**
 * 
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup 
 * 
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
    if (tokenGroup.isRoot) {
        return []
    } else {
        return tokenGroup.path.concat(tokenGroup.name)
    }
}

/**
 * 
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 * 
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
    return lhs.concat(rhs)
}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} separator 
 */
function arrayJoin(array, separator) {
    return array.join(separator)
}

 function groupFontsByFamily(fonts) {
    var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key].toLowerCase()] = rv[x[key].toLowerCase()] || []).push(x);
          return rv;
        }, {});
      };

    return groupBy(fonts, "family")
}

/**
 * 
 * @param {string} s
 */
function isDigit(c) {
    return c >= '0' && c <= '9';
}

// Add the [indentationString] to all but the first line
const createDocumentationComment = (text, indentationString) => text
    .trim()
    .split("\n")
    .map((line, index) => ((index > 0) ? `${indentationString}` : ``) + `// ${line}`)
    .join("\n")

// Ensure integers are formatted as floating point values (e.g. 1 -> 1.0)
const toFixed = (number) => (Number.isInteger(number)) ? number.toFixed(1) : number

// Utility because the ternary expression is not supported in Pulsar
const ternary = (predicate, trueCase, falseCase) => (predicate) ? trueCase : falseCase

const groupBy = (values, key) => values
    .map((value) => value.value)
    .reduce((acc, value) => {
        (acc[value[key]] = acc[value[key]] || []).push(value);
        return acc;
    }, {});

const hexToHexARGB = (hexString) => {
    let { alpha, red, green, blue } = {
        alpha: hexString.substring(6, 2).toUpperCase(),
        red: hexString.substring(0, 2).toUpperCase(),
        green: hexString.substring(2, 2).toUpperCase(),
        blue: hexString.substring(4, 2).toUpperCase(),
    }
    return {
        alpha: alpha,
        red: red,
        green: green,
        blue: blue,
        full: `0x${alpha}${red}${green}${blue}`
    }
}

const getBrushType = ({ type }) => {
    switch (type) {
        case "Linear": return "linearGradient"
        case "Radial": return "radialGradient"
        case "Angular": return "sweepGradient"
        default: return ""
    }
}

const getFontStyle = ({ subfamily }) => (subfamily.toLowerCase().includes("italic")) ? "Italic" : "Normal"

const getFontWeight = ({ subfamily }) => {
    let lowered = subfamily.toLowerCase()
    if (lowered.includes("emi")) return "SemiBold"
    else if (lowered.includes("heavy")) return "Black"
    else if (lowered.includes("bold")) return "Bold"
    else if (lowered.includes("medium")) return "Medium"
    else if (lowered.includes("ult") && lowered.includes("light")) return "Thin"
    else return "Normal"
}

const getTextDecoration = ({ textDecoration }) => {
    switch (textDecoration) {
        case "Underline":
            return "Underline"
        case "Strikethrough":
            return "LineThrough"
        default:
            break;
    }
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)
Pulsar.registerFunction("toFixed", toFixed)
Pulsar.registerFunction("ternary", ternary)
Pulsar.registerFunction("groupBy", groupBy)
Pulsar.registerFunction("hexToHexARGB", hexToHexARGB)
Pulsar.registerFunction("getBrushType", getBrushType)
Pulsar.registerFunction("getFontStyle", getFontStyle)
Pulsar.registerFunction("getFontWeight", getFontWeight)
Pulsar.registerFunction("getTextDecoration", getTextDecoration)
Pulsar.registerFunction("indentMultilineText", indentMultilineText)
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)
Pulsar.registerFunction("groupFontsByFamily", groupFontsByFamily)
Pulsar.registerFunction("isDigit", isDigit)