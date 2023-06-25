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

function trap(height) {
    let totalVolume = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (leftPointer < rightPointer) {
        if (height[leftPointer] < height[rightPointer]) {
            if (height[leftPointer] >= leftMax) {
                leftMax = height[leftPointer];
            } else {
                totalVolume += leftMax - height[leftPointer];
            }
            leftPointer++;
        } else {
            if (height[rightPointer] >= rightMax) {
                rightMax = height[rightPointer];
            } else {
                totalVolume += rightMax - height[rightPointer];
            }
            rightPointer--;
        }
    }
    return totalVolume;
}