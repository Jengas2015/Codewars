/* Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

 

Example 1:


Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]
Example 2:

Input: head = [2,1], x = 2
Output: [1,2]
 

Constraints:

The number of nodes in the list is in the range [0, 200].
-100 <= Node.val <= 100
-200 <= x <= 200 */

var partition = function(head, x) {
    let less = new ListNode(0);
    let greater = new ListNode(0);
    let lessHead = less;
    let greaterHead = greater;
    while(head) {
        if(head.val < x) {
            less.next = head;
            less = less.next;
        } else {
            greater.next = head;
            greater = greater.next;
        }
        head = head.next;
    }
    greater.next = null;
    less.next = greaterHead.next;
    return lessHead.next;
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// test

let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(2);

console.log(partition(head, 3));