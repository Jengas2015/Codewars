/* Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100 */

var rightSideView = function(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];
    while(queue.length){
        let len = queue.length;
        for(let i=0; i<len; i++){
            let node = queue.shift();
            if(i === len-1) result.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return result;
}

