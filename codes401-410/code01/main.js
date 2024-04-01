/* You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and an integer k.

Define a pair (u, v) which consists of one element from the first array and one element from the second array.

Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.

 

Example 1:

Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]
Example 2:

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
Explanation: The first 2 pairs are returned from the sequence: [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]
 

Constraints:

1 <= nums1.length, nums2.length <= 105
-109 <= nums1[i], nums2[i] <= 109
nums1 and nums2 both are sorted in non-decreasing order.
1 <= k <= 104
k <= nums1.length * nums2.length */

var kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    let heap = new MinHeap();
    for (let i=0; i<nums1.length; i++) {
        for (let j=0; j<nums2.length; j++) {
            heap.insert([nums1[i], nums2[j]]);
            if (heap.size() > k) {
                heap.pop();
            }
        }
    }
    while (heap.size() > 0) {
        result.unshift(heap.pop());
    }
    return result;
    }

class MinHeap {
    constructor() {
        this.heap = [];
    }
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (parent[0] + parent[1] < element[0] + element[1]) break;
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    pop() {
        let min = this.heap[0];
        let last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.sinkDown(0);
        }
        return min;
    }
    sinkDown(index) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let smallest = index;
        let length = this.heap.length;
        if (left < length && this.heap[left][0] + this.heap[left][1] < this.heap[smallest][0] + this.heap[smallest][1]) {
            smallest = left;
        }
        if (right < length && this.heap[right][0] + this.heap[right][1] < this.heap[smallest][0] + this.heap[smallest][1]) {
            smallest = right;
        }
        if (smallest !== index) {
            [this.heap[smallest], this.heap[index]] = [this.heap[index], this.heap[smallest]];
            this.sinkDown(smallest);
        }
    }
    size() {
        return this.heap.length;
    }
}

