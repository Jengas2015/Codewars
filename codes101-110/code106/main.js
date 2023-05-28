/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer */

function upArray(arr) {
    if (!arr || !Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr[i] < 0 || arr[i] > 9) {
            return null;
        }
    }
    let carry = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        let sum = arr[i] + carry;
        if (sum === 10) {
            carry = 1;
            arr[i] = 0;
        } else {
            carry = 0;
            arr[i] = sum;
            break;
        }
    }

    if (carry === 1) {
        arr.unshift(1);
      }
    
      return arr;
}

console.log(upArray([2, 3, 9, 9]))

// explanation tweet: https://twitter.com/Codingwithroy/status/1662900248740495363?s=20
