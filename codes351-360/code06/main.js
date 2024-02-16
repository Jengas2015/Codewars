/* Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100 */

var zigzagLevelOrder = function (root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    let isReverse = false;
    while (queue.length) {
        const level = [];
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (isReverse) {
                level.unshift(node.val);
            } else {
                level.push(node.val);
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
        isReverse = !isReverse;
    }
    return result;
}

