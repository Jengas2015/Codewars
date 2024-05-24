/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters. */

var longestCommonPrefix = function(strs) {

    if (strs.length===0) {
        return "";
    }
    if (strs.length===1) {
        return strs[0];
    }

    let prefix = "";
    let firstWord = strs[0];

    for (let i = 0; i < firstWord.length; i++) {
        for (let j=1; j<strs.length; j++) {
            if(firstWord[i] !== strs[j][i]) {
                return prefix
            }
        }
        prefix += firstWord[i]
    }

    return prefix;
}

