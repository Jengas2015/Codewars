/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
 */

function findUniq(arr) {
    const uniqueVal = []
    arr.forEach(num => {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            uniqueVal.push(num)
        }
    })
    return uniqueVal[0]
}

console.log(findUniq([3, 10, 3, 3, 3 ]))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1647967021982703616?s=20