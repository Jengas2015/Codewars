/* Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests. */

function firstNonRepeatingLetter(s) {
    let sArray = s.toLowerCase().split('')
    const sCase = s.split('')
    const uniqueLetter = []
    sArray.forEach(letter=> {
        if (!uniqueLetter.includes(letter)) {
            uniqueLetter.push(letter)
        } else if (uniqueLetter.includes(letter)) {
            uniqueLetter.splice(uniqueLetter.indexOf(letter), 1)
        }
    })
    if (sArray.indexOf(uniqueLetter[0])!==sCase.indexOf(uniqueLetter[0])) {
        uniqueLetter[0]=uniqueLetter[0].toUpperCase()
    }
    if(uniqueLetter[0]===undefined) {
        return ''
      } else {
        return uniqueLetter[0]
      }
  }

  console.log(firstNonRepeatingLetter("sTreSS"))

  // link to explanation tweet: https://twitter.com/Codingwithroy/status/1644361135645229056?s=20