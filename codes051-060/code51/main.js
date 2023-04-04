/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

function maxSequence (arr) {
    let maxSum = 0
    let currSum = 0
    for (num of arr) {
        currSum+=num
        if (currSum<0) {
            currSum=0
        }
        if (currSum>maxSum) {
            maxSum=currSum
        }
    }

    return maxSum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1642904971602427906?s=20