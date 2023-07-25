/* Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109 */

function longestConsecutive(nums) {

    let numsSet = new Set(nums)

    let maxLength = 0

    for (let num of numsSet) {
        if (!numsSet.has(num-1)) {
            let currentNum = num
            let sequenceLength = 1

            while (numsSet.has(currentNum + 1)) {
                sequenceLength ++
                currentNum ++
            }
            maxLength = Math.max(maxLength, sequenceLength)
        }
    }

    return maxLength





    
/*     let set = new Set(nums);
    let longest = 0;
    for (let num of nums) {
        if (!set.has(num - 1)) {
            let current = num;
            let currentLength = 1;
            while (set.has(current + 1)) {
                current++;
                currentLength++;
            }
            longest = Math.max(longest, currentLength);
        }
    }
    return longest; */
}

// console logs
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
console.log(longestConsecutive([1, 2, 0, 1])); // 3