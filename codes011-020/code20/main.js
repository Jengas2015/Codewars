/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str){
    let isoString = new Set(str.toLowerCase())
    return isoString.size === str.length
    
  }

  let testStr = "Dermatoglyphics"

  isIsogram(testStr)

//   Explanation here: https://twitter.com/Codingwithroy/status/1630950343428169730?s=20