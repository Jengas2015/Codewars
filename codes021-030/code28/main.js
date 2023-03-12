/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

const countBits = function(n) {
    let quotient = n
    let binaryArray = []

    while(Math.floor(quotient) !== 0) {
        binaryArray.unshift(quotient%2)
        quotient = Math.floor(quotient/2)
    }

    return binaryArray.reduce((acc, curr)=> acc+ curr, 0)

  };

  countBits(7)

// Explanation tweet: https://twitter.com/Codingwithroy/status/1634950508652920832?s=20