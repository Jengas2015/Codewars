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
    let fast = head;
    let prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    return merge(sortList(head), sortList(slow));
}

function merge(l1, l2) {
    let dummy = new ListNode();
    let temp = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }
    if (l1) temp.next = l1;
    if (l2) temp.next = l2;
    return dummy.next;
}

