/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space? */

function rotate(nums, k) {
    k = k % nums.length; // k is set to 3 % 7 = 3
    reverse(nums, 0, nums.length - 1); // reverse the entire array: [7,6,5,4,3,2,1]
    reverse(nums, 0, k - 1); // reverse the first k elements: [5,6,7,4,3,2,1]
    reverse(nums, k, nums.length - 1); // reverse the remaining n-k elements: [5,6,7,1,2,3,4]
}

function reverse(nums, start, end) {
    while (start < end) {
        let temp = nums[start]; // store the value at the start index in a temporary variable
        nums[start] = nums[end]; // set the value at the start index to the value at the end index
        nums[end] = temp; // set the value at the end index to the value stored in the temporary variable
        start++; // increment the start index
        end--; // decrement the end index
    }
}

console.log (rotate([-1,-100,3,99], 2))