/* Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
 

Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)? */

var sortList = function(head) {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(mid));
}

function merge(l1, l2) {
    let dummy = new ListNode();
    let tail = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            tail = tail.next;
            l1 = l1.next;
        } else {
            tail.next = l2;
            tail = tail.next;
            l2 = l2.next;
        }
    }
    if (l1) tail.next = l1;
    if (l2) tail.next = l2;
    return dummy.next;
}

