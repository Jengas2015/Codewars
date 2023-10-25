/* Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

 

Example 1:


Input: points = [[1,1],[2,2],[3,3]]
Output: 3
Example 2:


Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4
 

Constraints:

1 <= points.length <= 300
points[i].length == 2
-104 <= xi, yi <= 104
All the points are unique. */

function maxPoints(points) {
    let max = 0;
    for (let i = 0; i < points.length; i++) {
        let map = {};
        let same = 1;
        let curMax = 0;
        for (let j = i + 1; j < points.length; j++) {
            let x = points[j][0] - points[i][0];
            let y = points[j][1] - points[i][1];
            if (x === 0 && y === 0) {
                same++;
                continue;
            }
            let gcd = getGCD(x, y);
            x /= gcd;
            y /= gcd;
            map[`${x}/${y}`] = (map[`${x}/${y}`] || 0) + 1;
            curMax = Math.max(curMax, map[`${x}/${y}`]);
        }
        max = Math.max(max, curMax + same);
    }
    return max;
}

function getGCD(a, b) {
    if (b === 0) return a;
    return getGCD(b, a % b);
}

