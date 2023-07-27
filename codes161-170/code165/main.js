/* Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 

Constraints:

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104 */

function merge(intervals) {
    intervals.sort((a, b) => a[0]-b[0])
    let result = []

    for (let i=0; i<intervals.length; i++) {
        let merged = false
        for (let j=0; j<result.length; j++) {
            if (intervals[i][0] <= result[j][1] && intervals[i][1] >= result[j][0]) {
                result[j][0] = Math.min(result[j][0], intervals[i][0])
                result[j][1] = Math.max(result[j][1], intervals[i][1])
                merged = true
                break
            }
        }
        if (!merged) {
            result.push(intervals[i])
        }
    }

    return result








/*     if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    let current = intervals[0];
    result.push(current);
    for (let i = 1; i < intervals.length; i++) {
        let next = intervals[i];
        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            current = next;
            result.push(current);
        }
    }
    return result; */
}

// console logs
console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1, 4], [4, 5]])); // [[1,5]]
console.log(merge([[1, 4], [0, 4]])); // [[0,4]]