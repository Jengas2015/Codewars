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
    let queue = [root];
    let result = [];
    let level = 0;

    while (queue.length) {
        let len = queue.length;
        let temp = [];

        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (level % 2 === 0) {
                temp.push(node.val);
            } else {
                temp.unshift(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(temp);
        level++;
    }

    return result;
}

