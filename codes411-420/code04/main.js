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

var maxPoints = function(points) {
    if (points.length < 3) return points.length;
    let max = 2;
    for (let i = 0; i < points.length; i++) {
        const slopes = {};
        let same = 0;
        let localMax = 1;
        for (let j = i + 1; j < points.length; j++) {
            if (points[i][0] === points[j][0] && points[i][1] === points[j][1]) {
                same++;
            } else {
                const slope = getSlope(points[i], points[j]);
                slopes[slope] = slopes[slope] + 1 || 2;
                localMax = Math.max(localMax, slopes[slope]);
            }
        }
        max = Math.max(max, localMax + same);
    }
    return max;
}

function getSlope(p1, p2) {
    if (p1[0] === p2[0]) return 'v';
    if (p1[1] === p2[1]) return 'h';
    return (p1[1] - p2[1]) / (p1[0] - p2[0]);
}
