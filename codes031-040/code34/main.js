/* Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */

function persistence(num) {
    function toArray (value) {
        return value.toString().split('').map(numeral => Number(numeral))
    }
    let numArray = toArray(num)
    let loopedCount = 0

    while (numArray.length>1) {
        let reducedVal = numArray.reduce((acc, curr)=> {
            return acc * curr
        }, 1)
        loopedCount++
        numArray=toArray(reducedVal)
    }
    return loopedCount
 }

 persistence(39)

 // link to explanation tweet: https://twitter.com/Codingwithroy/status/1637180413922668544?s=20