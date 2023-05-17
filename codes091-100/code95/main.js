/* You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges. */

function getLengthOfMissingArray(arrayOfArrays) {

    if (arrayOfArrays === null || arrayOfArrays.length === 0) {
        return 0
    }
    for (i = 0; i < arrayOfArrays.length; i++) {
        if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
            return 0
        }
    }
    const sortedArrayLengths = arrayOfArrays.map(array => {
        return array.length
    }).sort((a, b) => a - b)
    let missingLink = sortedArrayLengths[0]
    for (i = 0; i < sortedArrayLengths.length; i++) {
        if (missingLink !== sortedArrayLengths[i]) {
            return missingLink
        } else {
            missingLink++
        }
    }
}


console.log(getLengthOfMissingArray([[2, 1, 4, 0, 0],
[1, 0, 4, 1],
[4, 1, 4, 0, 3, 2, 0, 3, 4, 4, 0, 3, 4, 4],
[3, 0, 0, 4, 0, 0, 0],
[3, 0, 0, 3, 1, 3, 4, 1, 3, 0],
[3, 2, 1, 3, 4, 0, 4, 2],
[4, 0, 1, 3, 0, 3, 3, 0, 4, 1, 1],
[3, 2, 1, 2, 0, 2, 4, 0, 2, 4, 4, 1, 4],
[0, 0, 0, 3, 0, 1, 3, 0, 3],
[4, 4, 4, 0, 4, 3, 1, 1, 0, 3, 3, 3],
[2, 3, 2, 4, 1, 1, 4, 2, 1, 1, 1, 3, 2, 3, 3]]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1658850440195260424?s=20