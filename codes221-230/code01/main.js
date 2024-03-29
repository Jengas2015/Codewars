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

function solveNQueens(n) {
    let res = 0;
    let board = new Array(n).fill(0).map(() => new Array(n).fill('.'));
    const isValid = (row, col) => {
        for (let i = 0; i < n; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }
    const backtrack = (row) => {
        if (row === n) {
            res++;
            return;
        }
        for (let col = 0; col < n; col++) {
            if (!isValid(row, col)) continue;
            board[row][col] = 'Q';
            backtrack(row + 1);
            board[row][col] = '.';
        }
    }
    backtrack(0);
    return res;
}

