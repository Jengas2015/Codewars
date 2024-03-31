/* Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

The answer is guaranteed to fit in a 32-bit signed integer.

 

Example 1:

Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
Output: 4
Explanation: Since your initial capital is 0, you can only start the project indexed 0.
After finishing it you will obtain profit 1 and your capital becomes 1.
With capital 1, you can either start the project indexed 1 or the project indexed 2.
Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
Example 2:

Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
Output: 6
 

Constraints:

1 <= k <= 105
0 <= w <= 109
n == profits.length
n == capital.length
1 <= n <= 105
0 <= profits[i] <= 104
0 <= capital[i] <= 109 */

var findMaximizedCapital = function(k, w, profits, capital) {
    const n = profits.length;
    const arr = Array(n).fill(0).map((_, i) => i);
    arr.sort((a, b) => capital[a] - capital[b]);
    let i = 0;
    const pq = new PriorityQueue((a, b) => b - a);
    for (let j = 0; j < k; j++) {
        while (i < n && capital[arr[i]] <= w) {
            pq.push(profits[arr[i]]);
            i++;
        }
        if (pq.length === 0) break;
        w += pq.pop();
    }
    return w;
}

class PriorityQueue {
    constructor(compare) {
        this.compare = compare;
        this.arr = [];
    }
    
    push(val) {
        this.arr.push(val);
        this.bubbleUp();
    }
    
    pop() {
        const res = this.arr[0];
        this.arr[0] = this.arr[this.arr.length - 1];
        this.arr.pop();
        this.bubbleDown();
        return res;
    }
    
    bubbleUp() {
        let i = this.arr.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (this.compare(this.arr[i], this.arr[p]) < 0) {
                break;
            }
            [this.arr[i], this.arr[p]] = [this.arr[p], this.arr[i]];
            i = p;
        }
    }
    
    bubbleDown() {
        let i = 0;
        while (i < this.arr.length) {
            const l = (i << 1) + 1;
            const r = (i << 1) + 2;
            let max = i;
            if (l < this.arr.length && this.compare(this.arr[l], this.arr[max]) > 0) {
                max = l;
            }
            if (r < this.arr.length && this.compare(this.arr[r], this.arr[max]) > 0) {
                max = r;
            }
            if (max === i) {
                break;
            }
            [this.arr[i], this.arr[max]] = [this.arr[max], this.arr[i]];
            i = max;
        }
    }
}

