/* A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
 

Constraints:

1 <= beginWord.length <= 10
endWord.length == beginWord.length
1 <= wordList.length <= 5000
wordList[i].length == beginWord.length
beginWord, endWord, and wordList[i] consist of lowercase English letters.
beginWord != endWord
All the words in wordList are unique. */

function ladderLength(beginWord, endWord, wordList) {
    let queue = [beginWord];
    let visited = new Set();
    let count = 0;

    while (queue.length) {
        let size = queue.length;
        count++;
        for (let i = 0; i < size; i++) {
            let word = queue.shift();
            if (word === endWord) return count;
            if (visited.has(word)) continue;
            visited.add(word);
            for (let nextWord of getNextWords(word, wordList)) {
                queue.push(nextWord);
            }
        }
    }
    return 0;
}

function getNextWords(word, wordList) {
    let nextWords = [];
    for (let nextWord of wordList) {
        if (isNextWord(word, nextWord)) {
            nextWords.push(nextWord);
        }
    }
    return nextWords;
}

function isNextWord(word1, word2) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
        if (word1[i] !== word2[i]) count++;
    }
    return count === 1;
}

