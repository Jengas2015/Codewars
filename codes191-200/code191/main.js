/* Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
 

Follow up: Can you flatten the tree in-place (with O(1) extra space)? */

// Solution 1: Recursive

// Time Complexity: O(n)

// Space Complexity: O(n)

var flatten = function (root) {
    if (!root) return null;

    let prev = null;

    const dfs = (node) => {
        if (!node) return;

        dfs(node.right);
        dfs(node.left);

        node.right = prev;
        node.left = null;
        prev = node;
    };

    dfs(root);
}

// Solution 2: Iterative

// Time Complexity: O(n)

// Space Complexity: O(n)

var flatten = function (root) {

    if (!root) return null;

    const stack = [root];

    while (stack.length) {
        const node = stack.pop();

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);

        if (stack.length) node.right = stack[stack.length - 1];
        node.left = null;
    }
}

// Solution 3: Morris Traversal

// Time Complexity: O(n)

// Space Complexity: O(1)

var flatten = function (root) {

    let curr = root;

    while (curr) {
        if (curr.left) {
            let next = curr.left;
            let pre = next;

            while (pre.right) {
                pre = pre.right;
            }

            pre.right = curr.right;
            curr.left = null;
            curr.right = next;
        }

        curr = curr.right;
    }
}

// Solution 4: Morris Traversal (Recursive)

// Time Complexity: O(n)

// Space Complexity: O(1)

var flatten = function (root) {

    const dfs = (node) => {
        if (!node) return;

        if (node.left) {
            let next = node.left;
            let pre = next;

            while (pre.right) {
                pre = pre.right;
            }

            pre.right = node.right;
            node.left = null;
            node.right = next;
        }

        dfs(node.right);
    }

    dfs(root);
}

// Solution 5: Morris Traversal (Iterative)

// Time Complexity: O(n)

// Space Complexity: O(1)

var flatten = function (root) {

    let curr = root;

    while (curr) {
        if (curr.left) {
            let next = curr.left;
            let pre = next;

            while (pre.right) {
                pre = pre.right;
            }

            pre.right = curr.right;
            curr.left = null;
            curr.right = next;
        }

        curr = curr.right;
    }
}

