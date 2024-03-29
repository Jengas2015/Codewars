/* Given the root of a binary tree, return the average value of the nodes on each level in the form of an array. Answers within 10-5 of the actual answer will be accepted.
 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].
Example 2:


Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1 */

var averageOfLevels = function(root) {
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let sum = 0;
        let count = 0;
        let temp = [];
        while(queue.length > 0) {
            let node = queue.shift();
            sum += node.val;
            count++;
            if(node.left) temp.push(node.left);
            if(node.right) temp.push(node.right);
        }
        queue = temp;
        result.push(sum/count);
    }
    return result;
}

