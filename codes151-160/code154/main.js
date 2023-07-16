/* Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:


Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:


Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

Follow up:

A straightforward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution? */

function setZeroes(matrix) {

    let firstRowZero = false
    let firstColumnZero = false

    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[0][j] === 0) {
            firstRowZero = true
            break
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            firstColumnZero = true
            break
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[0][j] = 0
                matrix[i][0] = 0
            }
        }
    }

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (firstRowZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }

    }

    if (firstColumnZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }


    /*     let rows = new Set();
        let cols = new Set();
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(matrix[i][j] === 0){
                    rows.add(i);
                    cols.add(j);
                }
            }
        }
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[0].length; j++){
                if(rows.has(i) || cols.has(j)){
                    matrix[i][j] = 0;
                }
            }
        }
        return matrix; */
}

//console logs of examples:
console.log(setZeroes([[1, 1, 1], [1, 0, 1], [1, 1, 1]])); //Output: [[1,0,1],[0,0,0],[1,0,1]]
console.log(setZeroes([[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]])); //Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
