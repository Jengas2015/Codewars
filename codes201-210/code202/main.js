/* Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 104].
0 <= Node.val <= 105 */

var getMinimumDifference = function(root) {

    let min = Infinity;
    let prev = -Infinity;
    
    const traverse = (node) => {
        if (!node) return;
        
        traverse(node.left);
        
        min = Math.min(min, node.val - prev);
        prev = node.val;
        
        traverse(node.right);
    }
    
    traverse(root);
    
    return min;
}

