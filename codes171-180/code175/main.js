/* You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
 

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order. */

//Definition for singly-linked list.


class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

function mergeTwoLists(l1, l2) {
    let head = new ListNode();
    let current = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            current.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1) current.next = l1;
    if (l2) current.next = l2;
    return head.next;
}

//console log tests
console.log(mergeTwoLists(l1, l2)); //Output: [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])); //Output: []
console.log(mergeTwoLists([], [0])); //Output: [0]
