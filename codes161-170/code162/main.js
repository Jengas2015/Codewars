/* Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true

Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
0 <= k <= 105 */

function containsNearbyDuplicate(nums, k) {

let numCount = new Map()

for (let i = 0; i<nums.length; i++) {

    if (numCount.has(nums[i])) {
        if (Math.abs(i-numCount.get(nums[i])) <= k) {
            return true
        }
    }
    numCount.set(nums[i], i)

}

return false






/*     let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) return true;
        map.set(nums[i], i);
    }
    return false; */
}

// console log of examples
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
