/* Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n */

var reverseBetween = function (head, left, right) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;
    let curr = dummy.next;
    let count = 1;
    while (count < left) {
        prev = prev.next;
        curr = curr.next;
        count++;
    }
    while (count < right) {
        let temp = curr.next;
        curr.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
        count++;
    }
    return dummy.next;
}

// constructor

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);

    }
}

// test

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseBetween(head, 2, 4)); // [1,4,3,2,5]