/* Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata! */

function findMissingLetter(array) {
    const lowerArray = array.map(letter => letter.toLowerCase())
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split('')
    const arrayScope = alphabet.slice(alphabet.indexOf(lowerArray[0]))

    const filteredLetter = arrayScope.filter(letter => {
        return lowerArray.indexOf(letter)=== -1
    })

    const result = array[0] === array[0].toUpperCase()? filteredLetter[0].toUpperCase() : filteredLetter[0]
    return result
}

console.log(findMissingLetter(['O','Q','R','S']))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1650521266036547585?s=20