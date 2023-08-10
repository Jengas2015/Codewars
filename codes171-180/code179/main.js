/* Given the head of a linked list, remove the nth node from the end of the list and return its head.

 

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

Follow up: Could you do this in one pass? */

// Solution 1: Two pass
// Description: First pass to get the length of the list, second pass to remove the node
// Time Complexity: O(n)
// Space Complexity: O(1)

var removeNthFromEnd = function (head, n) {
    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }
    let dummy = new ListNode(0, head);
    curr = dummy;
    for (let i = 0; i < length - n; i++) {
        curr = curr.next;
    }
    curr.next = curr.next.next;
    return dummy.next;
};

// Solution 2: One pass
// Description: Use two pointers, first pointer moves n + 1 steps, then move both pointers until the first pointer reaches the end
// Time Complexity: O(n)
// Space Complexity: O(1)
var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0, head);
    let first = dummy;
    let second = dummy;
    for (let i = 0; i < n + 1; i++) {
        first = first.next;
    }
    while (first) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next;
    return dummy.next;
}

// class constructor for linked list

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// Tests
console.log(removeNthFromEnd(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))), 2)); // [1,2,3,5]