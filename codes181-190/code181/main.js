/* Given the head of a linked list, rotate the list to the right by k places.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]
Example 2:


Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109 */

var rotateRight = function(head, k) {

    if (!head || !head.next) {
        return head
    }

    let curr = head
    let len = 1

    while(curr.next) {
        curr=curr.next
        len++
    }

    curr.next = head
    k = k % len

    for (let i = 0; i< len-k; i++) {
        curr=curr.next
    }

    head = curr.next
    curr.next = null

    return head







/*     if (!head || !head.next) return head;
    let len = 1;
    let curr = head;
    while (curr.next) {
        len++;
        curr = curr.next;
    }
    curr.next = head;
    k = k % len;
    for (let i = 0; i < len - k; i++) {
        curr = curr.next;
    }
    head = curr.next;
    curr.next = null;
    return head; */
}

// test

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))); // [1,2,3,4,5]

console.log(rotateRight(head, 2)); // [4,5,1,2,3]
