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
Example 3:

Input: nums1 = [1,2], nums2 = [3], k = 3
Output: [[1,3],[2,3]]
Explanation: All possible pairs are returned from the sequence: [1,3],[2,3]
 

Constraints:

1 <= nums1.length, nums2.length <= 105
-109 <= nums1[i], nums2[i] <= 109
nums1 and nums2 both are sorted in non-decreasing order.
1 <= k <= 104 */

class MinHeap {
    constructor() {
      this.heap = [];
    }
  
    push(val) {
      this.heap.push(val);
      this.bubbleUp(this.heap.length - 1);
    }
  
    pop() {
      if (this.isEmpty()) return null;
      if (this.heap.length === 1) return this.heap.pop();
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.sinkDown(0);
      return root;
    }
  
    peek() {
      return this.isEmpty() ? null : this.heap[0];
    }
  
    size() {
      return this.heap.length;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleUp(index) {
      let parent = Math.floor((index - 1) / 2);
      while (index > 0 && this.heap[index][0] < this.heap[parent][0]) {
        [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
        index = parent;
        parent = Math.floor((index - 1) / 2);
      }
    }
  
    sinkDown(index) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;
      const length = this.heap.length;
  
      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
  
      if (smallest !== index) {
        [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
        this.sinkDown(smallest);
      }
    }
  }
  
  function kSmallestPairs(nums1, nums2, k) {
    const result = [];
    const minHeap = new MinHeap();
  
    for (let i = 0; i < Math.min(nums1.length, k); i++) {
      minHeap.push([nums1[i] + nums2[0], i, 0]);
    }
  
    while (k > 0 && !minHeap.isEmpty()) {
      const [sum, i, j] = minHeap.pop();
      result.push([nums1[i], nums2[j]]);
  
      if (j < nums2.length - 1) {
        minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
      }
  
      k--;
    }
  
    return result;
  }
  
  // Example 1
  const nums1_1 = [1, 7, 11];
  const nums2_1 = [2, 4, 6];
  const k_1 = 3;
  console.log(kSmallestPairs(nums1_1, nums2_1, k_1));
  
  // Example 2
  const nums1_2 = [1, 1, 2];
  const nums2_2 = [1, 2, 3];
  const k_2 = 2;
  console.log(kSmallestPairs(nums1_2, nums2_2, k_2));
  
  // Example 3
  const nums1_3 = [1, 2];
  const nums2_3 = [3];
  const k_3 = 3;
  console.log(kSmallestPairs(nums1_3, nums2_3, k_3));
  