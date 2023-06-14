/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space? */

var majorityElement = function(nums) {
    const count = {}
    nums.forEach(num=> {
        if (!count[num]) {
         count[num]=1
        } else {
            count[num]++
        }
     })
     const countKeys = Object.keys(count)
     let highest = countKeys[0]
  
     countKeys.forEach(num => {
        if (count[num]>count[highest]) {
            highest = num
        }
     })
     return highest
};

console.log(majorityElement([2,2,1,1,1,2,2]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1669006782465822721?s=20