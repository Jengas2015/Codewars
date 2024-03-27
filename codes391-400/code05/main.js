/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1]
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109 */

var searchRange = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let result = [-1, -1];
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (nums[mid] === target) {
            let left = mid;
            let right = mid;
            
            while (nums[left] === target) {
                left--;
            }
            
            while (nums[right] === target) {
                right++;
            }
            
            result[0] = left + 1;
            result[1] = right - 1;
            
            return result;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return result;
}

