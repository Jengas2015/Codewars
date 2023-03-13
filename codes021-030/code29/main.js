/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice */

function duplicateCount(text){
  let duplicates = 0
  const textArray = text.toString().toLowerCase().split('')
  const textObject = {}
  for (let i=0; i<textArray.length; i++) {
    const elem = textArray[i]
    if (textObject[elem]) {
      textObject[elem]++
    } else {
      textObject[elem]=1
    }
  }

  const keys = Object.keys(textObject)
  for(let i=0; i< keys.length; i++) {
    let propName = keys[i]
    let propValue = textObject[propName]
    if(propValue>1) {
      duplicates++
    }
  }

  return duplicates
  }

  duplicateCount("aA11" )

  // Link to tweet explanation: https://twitter.com/Codingwithroy/status/1635298036191752192?s=20