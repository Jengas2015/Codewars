/* Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order. */

var deleteDuplicates = function (head) {
    if (!head) return head;
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    while (curr) {
        while (curr.next && curr.val === curr.next.val) {
            curr = curr.next;
        }
        if (prev.next === curr) {
            prev = prev.next;
        } else {
            prev.next = curr.next;
        }
        curr = curr.next;
    }
    return dummy.next;
}

// build class listnode

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// test

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(4, new ListNode(5)))))));