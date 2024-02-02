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

var buildTree = function(inorder, postorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }
    let build = function (inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return null;
        let root = new TreeNode(postorder[postEnd]);
        let index = map.get(root.val);
        let leftSize = index - inStart;
        root.left = build(inStart, index - 1, postStart, postStart + leftSize - 1);
        root.right = build(index + 1, inEnd, postStart + leftSize, postEnd - 1);
        return root;
    }
    return build(0, inorder.length - 1, 0, postorder.length - 1);
}

