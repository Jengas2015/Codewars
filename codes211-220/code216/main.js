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

function findWords(board, words) {
    const result = [];
    const trie = new Trie();
    for (let word of words) trie.insert(word);
    const dfs = (i, j, node) => {
        if (node.word) {
            result.push(node.word);
            node.word = null;
        }
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        if (!node.children.has(board[i][j])) return;
        const c = board[i][j];
        board[i][j] = '#';
        dfs(i - 1, j, node.children.get(c));
        dfs(i + 1, j, node.children.get(c));
        dfs(i, j - 1, node.children.get(c));
        dfs(i, j + 1, node.children.get(c));
        board[i][j] = c;
    };
    for (let i = 0; i < board.length; i++)
        for (let j = 0; j < board[0].length; j++) dfs(i, j, trie.root);
    return result;
}

class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = null;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) node.children.set(c, new TrieNode());
            node = node.children.get(c);
        }
        node.word = word;
    }
}

