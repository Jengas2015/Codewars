/* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105 */

var trap = function(height) {
    let leftMax = new Array(height.length).fill(0);
    let rightMax = new Array(height.length).fill(0);
    
    let max = 0;
    for (let i = 0; i < height.length; i++) {
        leftMax[i] = max;
        max = Math.max(max, height[i]);
    }
    
    max = 0;
    for (let i = height.length - 1; i >= 0; i--) {
        rightMax[i] = max;
        max = Math.max(max, height[i]);
    }
    
    let result = 0;
    for (let i = 0; i < height.length; i++) {
        let water = Math.min(leftMax[i], rightMax[i]) - height[i];
        if (water > 0) {
            result += water;
        }
    }
    
    return result;
}

