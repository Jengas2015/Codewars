/* Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively? */

var isSymmetric = function(root) {
    if (!root) return true;
    return helper(root.left, root.right);
}

function helper(left, right) {
    if (!left && !right) return true;
    if (!left || !right || left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
}

// iterative approach

var isSymmetric = function(root) {
    if (!root) return true;
    let queue = [root.left, root.right];
    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();
        if (!left && !right) continue;
        if (!left || !right || left.val !== right.val) return false;
        queue.push(left.left, right.right, left.right, right.left);
    }
    return true;
}

// build tree

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(3);

console.log(isSymmetric(root)); // true