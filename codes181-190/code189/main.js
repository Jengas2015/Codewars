/* Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

 

Example 1:


Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: inorder = [-1], postorder = [-1]
Output: [-1]
 

Constraints:

1 <= inorder.length <= 3000
postorder.length == inorder.length
-3000 <= inorder[i], postorder[i] <= 3000
inorder and postorder consist of unique values.
Each value of postorder also appears in inorder.
inorder is guaranteed to be the inorder traversal of the tree.
postorder is guaranteed to be the postorder traversal of the tree. */

var buildTree = function (inorder, postorder) {
    if (!inorder.length || !postorder.length) return null;
    let root = new TreeNode(postorder.pop());
    let index = inorder.indexOf(root.val);
    root.right = buildTree(inorder.slice(index + 1), postorder);
    root.left = buildTree(inorder.slice(0, index), postorder);
    return root;
}

// treenode class

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
); // [3,9,20,null,null,15,7]
console.log(buildTree([-1], [-1])); // [-1]





