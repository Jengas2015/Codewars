/* Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

function descendingOrder(n){
    let numArray = n.toString().split('').map(str => Number(str))
    
    numArray.sort((a, b) => b-a)

    let backToNumber = Number(numArray.join(''))

    return backToNumber

  }

let testNum = 1021

descendingOrder(testNum)

/* explanation tweet here: https://twitter.com/Codingwithroy/status/1630218007053041665?s=20 */