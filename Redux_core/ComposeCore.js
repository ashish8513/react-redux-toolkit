import {compose} from 'redux'

function removeSpaces(string) {
    return string.split(" ").join("");

}
function repeatString(string) {
    return string.repeat(2);
}

function convertToUpper(string) {
    return string.toUpperCase();
}

const input = 'abc def ghi '



// const output=convertToUpper(repeatString(removeSpaces(input)))

// console.log(output)
// console.log(convertToUpper("ashish"))
// console.log(removeSpaces("abcd egfh ijkl"));

// console.log(repeatString("abcd"))

const composedFunction=compose(removeSpaces,repeatString,convertToUpper)
console.log(composedFunction(input))