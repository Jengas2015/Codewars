/* Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]
 

Constraints:

The number of nodes in the list is n.
1 <= k <= n <= 5000
0 <= Node.val <= 1000
 

Follow-up: Can you solve the problem in O(1) extra memory space? */

var reverseKGroup = function(head, k) {
    if(!head || k === 1) return head;
    
    let dummy = new ListNode(0);
    dummy.next = head;
    
    let prev = dummy;
    let i = 0;
    
    while(head){
        i++;
        if(i % k === 0){
            prev = reverse(prev, head.next);
            head = prev.next;
        } else {
            head = head.next;
        }
    }
    return dummy.next;
}

function reverse(prev, next){
    let last = prev.next;
    let curr = last.next;
    
    while(curr !== next){
        last.next = curr.next;
        curr.next = prev.next;
        prev.next = curr;
        curr = last.next;
    }
    return last;
}

// test
class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

let list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(reverseKGroup(list, 2)); // [2,1,4,3,5]