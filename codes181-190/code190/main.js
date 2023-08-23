/* Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 
aaaa
Example 1:


Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
Example 2:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 6000].
-100 <= Node.val <= 100
 

Follow-up:

You may only use constant extra space.
The recursive approach is fine. You may assume implicit stack space does not count as extra space for this problem. */

// Solution 1: BFS

// Time Complexity: O(n)

// Space Complexity: O(n)

var connect = function (root) {
    if (!root) return root;
    let queue = [root];
    while (queue.length) {
        let size = queue.length;
        let prev = null;
        while (size--) {
            let node = queue.shift();
            if (prev) prev.next = node;
            prev = node;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
}

// Solution 2: DFS

// Time Complexity: O(n)

// Space Complexity: O(1)

var connect = function (root) {
    if (!root) return root;
    let leftmost = root;
    while (leftmost.left) {
        let head = leftmost;
        while (head) {
            head.left.next = head.right;
            if (head.next) head.right.next = head.next.left;
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}

// Solution 3: DFS

// Time Complexity: O(n)

// Space Complexity: O(n)

var connect = function (root) {
    if (!root) return root;
    let map = new Map();
    dfs(root, 0, map);
    return root;
}

function dfs(node, level, map) {
    if (!node) return;
    if (map.has(level)) {
        let prev = map.get(level);
        prev.next = node;
        map.set(level, node);
    } else {
        map.set(level, node);
    }
    dfs(node.left, level + 1, map);
    dfs(node.right, level + 1, map);
}

// Solution 4: DFS

// Time Complexity: O(n)

// Space Complexity: O(1)

var connect = function (root) {
    if (!root) return root;
    let leftmost = root;
    while (leftmost) {
        let head = leftmost;
        while (head) {
            if (head.left) head.left.next = head.right;
            if (head.right && head.next) head.right.next = head.next.left;
            head = head.next;
        }
        leftmost = leftmost.left;
    }
    return root;
}

