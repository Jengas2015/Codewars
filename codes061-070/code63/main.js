/* In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore */

function alphanumeric(string) {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
    const upperAlpha = lowerAlpha.toUpperCase()
    const numbers = "0123456789"

    if (string.length<=0) {
        return false
    }

    for (i = 0; i< string.length; i++) {
        const char = string[i]
        if (!lowerAlpha.includes(char) && !upperAlpha.includes(char) && !numbers.includes(char)) {
            return false
        }
    }
    return true;
}

console.log (alphanumeric(" "))