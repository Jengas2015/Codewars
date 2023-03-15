/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input! */

function duplicateEncode(word){
    const wordArray = word.toLowerCase().toString().split('')
    
    const dupes = []
    
    wordArray.map((char, index)=> {
        if(wordArray.indexOf(char) !== index) {
            dupes.push(char)
        }
    })

    const parensArray = []
    
    wordArray.forEach(char => {
        if (dupes.includes(char)) {
            parensArray.push(")")
        } else {
            parensArray.push("(")
        }
    })

    return parensArray.join('')
  }

  duplicateEncode("(( @")

  // tweet to explanation: https://twitter.com/Codingwithroy/status/1636016313712640000?s=20