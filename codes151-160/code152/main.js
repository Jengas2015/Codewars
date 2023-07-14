/* Given an m x n matrix, return all elements of the matrix in spiral order.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:


Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100 */

function spiralOrder(matrix) {

    let spiralArray = []
    let direction = "right"
    let pointer = [0, 0]
    let totalLength = matrix[0].length * matrix.length
    let topBorder = 0
    let rightBorder = matrix[0].length - 1
    let bottomBorder = matrix.length - 1
    let leftBorder = 0

    while (spiralArray.length < totalLength) {
        if (direction === "right") {
            while (pointer[1] <= rightBorder) {
                spiralArray.push(matrix[pointer[0]][pointer[1]])
                pointer[1]++
            }
            direction = "down"
            pointer[1]--
            pointer[0]++
            topBorder++
        } else if (direction === "down") {
            while (pointer[0] <= bottomBorder) {
                spiralArray.push(matrix[pointer[0]][pointer[1]])
                pointer[0]++
            }
            direction = "left"
            pointer[0]--
            pointer[1]--
            rightBorder--
        } else if (direction === "left") {
            while (pointer[1] >= leftBorder) {
                spiralArray.push(matrix[pointer[0]][pointer[1]])
                pointer[1]--
            }
            direction = "up"
            pointer[0]--
            pointer[1]++
            leftBorder++
        } else if (direction === "up") {
            while (pointer[0] >= topBorder) {
                spiralArray.push(matrix[pointer[0]][pointer[1]])
                pointer[0]--
            }
            direction = "right"
            pointer[0]++
            pointer[1]++
            bottomBorder--
        }
    }

    return spiralArray




    /*     let result = [];
        let top = 0;
        let bottom = matrix.length - 1;
        let left = 0;
        let right = matrix[0].length - 1;
        let direction = "right";
    
        while (top <= bottom && left <= right) {
            if (direction === "right") {
                for (let i = left; i <= right; i++) {
                    result.push(matrix[top][i]);
                }
                top++;
                direction = "down";
            } else if (direction === "down") {
                for (let i = top; i <= bottom; i++) {
                    result.push(matrix[i][right]);
                }
                right--;
                direction = "left";
            } else if (direction === "left") {
                for (let i = right; i >= left; i--) {
                    result.push(matrix[bottom][i]);
                }
                bottom--;
                direction = "up";
            } else if (direction === "up") {
                for (let i = bottom; i >= top; i--) {
                    result.push(matrix[i][left]);
                }
                left++;
                direction = "right";
            }
        }
        return result; */
}

//console log of examples:
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])); // [1,2,3,4,8,12,11,10,9,5,6,7,13,14,15,16]
console.log(spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]])); // [1,2,3,4,5,6,7,8,9,10]
console.log(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]])); // [1,2,3,4,5,6,7,8,9,10]
console.log(spiralOrder([[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]])); // [1,2,3,4,5,6,7,8,9,10,20,19,18,17,16,15,14,13,12,11]
