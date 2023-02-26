/* You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string. */

function getMiddle(s)
{
  //Code goes here! 
  
  //plan: no matter the result, split string into an array, then if even, slice from length/2 then end after 2 indices, 

  let stringArray = s.split('')
  let stringLength = s.length-1
  if (stringArray.length%2===0) {
    
    return (stringArray.slice((stringLength/2), (stringLength/2+2)).join(''))
  } else {
    return (stringArray.slice((stringLength/2), (stringLength/2 + 1)).join(''))
  }
 

  //if odd, still slice from length/2, but this time, round the value up, and slice only that value. Finally, join the result into a string
  //and return said string.

}

let testString = "fire"

getMiddle(testString)