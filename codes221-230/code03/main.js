/* Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

 

Example 1:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
Example 2:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true
Example 3:


Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false
 

Constraints:

m == board.length
n = board[i].length
1 <= m, n <= 6
1 <= word.length <= 15
board and word consists of only lowercase and uppercase English letters.
 

Follow up: Could you use search pruning to make your solution faster with a larger board? */

function exist(board, word) {
  const m = board.length;
  const n = board[0].length;
  const visited = Array(m)
    .fill()
    .map(() => Array(n).fill(false));

  const dfs = (i, j, idx) => {
    if (idx === word.length) return true;
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (visited[i][j]) return false;
    if (board[i][j] !== word[idx]) return false;

    visited[i][j] = true;
    const res =
      dfs(i + 1, j, idx + 1) ||
      dfs(i - 1, j, idx + 1) ||
      dfs(i, j + 1, idx + 1) ||
      dfs(i, j - 1, idx + 1);
    visited[i][j] = false;
    return res;
  };

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) if (dfs(i, j, 0)) return true;

  return false;
}

