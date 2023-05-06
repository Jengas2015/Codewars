/* Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe" */

function toWeirdCase(string) {
    const strArray = string.split(' ')
    let splitAgain = strArray.map(word=> {
        return word.split('')
    })

    for (i=0; i<splitAgain.length; i++) {
        for(j=0; j<splitAgain[i].length; j++) {
            if(j===0 || j % 2 === 0) {
                splitAgain[i][j] = splitAgain[i][j].toUpperCase()
            } else {
                splitAgain[i][j] = splitAgain[i][j].toLowerCase()
            }
        }
    }

    const result = splitAgain.map(array => {
        return array.join('')
    })

    return result.join(' ')
}

console.log(toWeirdCase("This is a test"))

//explanation tweet: https://twitter.com/Codingwithroy/status/1654937687512457222?s=20