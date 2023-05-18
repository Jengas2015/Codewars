/* Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs) */

function numberOfPairs(gloves) {
    const gloveObject = {}
    let glovePairs = 0
    gloves.forEach(color => {
       if(gloveObject[color]) {
        gloveObject[color] ++
        if(gloveObject[color] % 2 === 0) {
            glovePairs ++
        }
       } else {
        gloveObject[color] = 1
       }
    })
    return glovePairs
}

console.log(numberOfPairs(["red", "red", "red", "red", "red", "red"]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1659207361280757764?s=20