// Challenge 1 take input and capitalize first letter only
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
console.log(capitalize('test'));

String.prototype.capitalize = () => capitalize(this);

// make all character upper case
function allCaps(str) {
    return str.toUpperCase();
}

console.log(allCaps('teafdsadfdsfst  kaflnafs'));

String.prototype.allcaps = () => allCaps(this);

// makes first character of each word capital
function capitalizeWords(str) {
    const splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}
console.log(capitalizeWords('sdfjkalkj asfadsf  asdf'));

String.prototype.capitalizeWords = () => capitalizeWords(this);
// remove extra white space
function removeExtraSpaces(str) {
    str = str.trim().split(' ');
    return str.join('');
}
console.log(removeExtraSpaces('   foo  1 '));

String.prototype.removeExtraSpaces = () => removeExtraSpaces(this);
// convert string to kebab case
function kabobCase(str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('-');
}
console.log(kabobCase('test another testing something'));

String.prototype.kabobCase = () => kabobCase(this);

// convert string to camel case
function snakeCase(str) {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map((x) => x.toLowerCase())
        .join('_');
}
console.log(snakeCase('test another testing something'));

String.prototype.snakeCase = () => snakeCase(this);
// convert to camel case
function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase())).replace(/\s+/g, '');
}
console.log(camelCase('EquipmentClass name'));

String.prototype.camelCase = () => camelCase(this);
// shifts first letter of word to the back
function shiftString(str = '', step = 0) {
    const { length } = str;
    const index = step % length;
    const shift = index < 0 ? length + index : index;
    if (!str || length === 1 || !shift) {
        return str;
    }
    const reverseString = (str) => str.split('').reverse().join('');
    const newStr = reverseString(str);
    const s1 = newStr.slice(0, shift);
    const s2 = newStr.slice(shift);
    return reverseString(s1) + reverseString(s2);
}
console.log(shiftString('StackDev', 3)); // evStackD

String.prototype.shiftString = () => shiftString(this);
// Export
module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kabobCase = kabobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shiftString = shiftString;

export default Script;
