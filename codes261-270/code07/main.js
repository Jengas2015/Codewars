/* Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'. */

/**
 * @param {character[][]} matrix
 * @return {number}
    */
    var maximalSquare = function(matrix) {
        let max = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0 ; j < matrix[0].length; j++) {
                if (matrix[i][j] === '1') {
                    let size = 1;
                    let flag = true;
                    while (i + size < matrix.length && j + size < matrix[0].length && flag) {
                        for (let k = j; k <= j + size; k++) {
                            if (matrix[i + size][k] === '0') {
                                flag = false;
                                break;
                            }
                        }
                        for (let k = i; k <= i + size; k++) {
                            if (matrix[k][j + size] === '0') {
                                flag = false;
                                break;
                            }
                        }
                        if (flag) size++;
                    }
                    max = Math.max(max, size);
                }
            }
        }
        return max * max;
    }
