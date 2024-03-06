/* Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique. */

var findWords = function(board, words) {
    let result = [];
    for (let word of words) {
        if (exist(board, word)) {
        result.push(word);
        }
    }
    return result;
    }

    function exist(board, word) {

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (dfs(board, i, j, word, 0)) {
                    return true;
                }
            }
        }
        return false;
    }

    function dfs(board, i, j, word, index) {
        if (index === word.length) {
            return true;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[index]) {
            return false;
        }
        let temp = board[i][j];
        board[i][j] = '*';
        let found = dfs(board, i + 1, j, word, index + 1) ||
                    dfs(board, i - 1, j, word, index + 1) ||
                    dfs(board, i, j + 1, word, index + 1) ||
                    dfs(board, i, j - 1, word, index + 1);
        board[i][j] = temp;
        return found;
    }
    console.log(findWords([["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], ["oath","pea","eat","rain"])); // ["eat","oath"]
    console.log(findWords([["a","b"],["c","d"]], ["abcb"])); // []

    