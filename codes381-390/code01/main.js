/* The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

Given an integer n, return the number of distinct solutions to the n-queens puzzle.

 

Example 1:


Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 9 */

var totalNQueens = function(n) {
    let count = 0;
    const dfs = (row, col, pie, na) => {
        if (row >= n) {
            count++;
            return;
        }
        let bits = (~(col | pie | na)) & ((1 << n) - 1);
        while (bits) {
            let p = bits & -bits;
            bits &= bits - 1;
            dfs(row + 1, col | p, (pie | p) << 1, (na | p) >> 1);
        }
    };
    dfs(0, 0, 0, 0);
    return count;
}

