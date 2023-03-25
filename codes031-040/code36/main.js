/* Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

 */

function toCamelCase(str){
    let strArray = [...str]
    const upperCaseArray = []
    strArray.forEach((char, index)=> {
        if (char === '-' || char === '_') {
            strArray.splice(index, 1)
            upperCaseArray.push(strArray[index].toUpperCase())
        } else {
            upperCaseArray.push(char)
        }
    }) 
    return upperCaseArray.join('')
}

toCamelCase('the-stealth-warrior')

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1637822572489261056?s=20