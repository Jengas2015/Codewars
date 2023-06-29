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

function longestCommonPrefix(strs) {
    let commonPrefix = ""

    for (let i = 0; i< strs[0].length; i++) {
        let currentLetter = strs[0][i]
        for (let j=1; j<strs.length; j++) {
            if (strs[j][i]!==currentLetter) {
                return commonPrefix
            }
        }
        commonPrefix+=currentLetter
    }
    return commonPrefix
}

//console log test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])) //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) //""
console.log(longestCommonPrefix(["ab", "a"])) //"a"

// explanation tweet: https://twitter.com/Codingwithroy/status/1674481480523718668?s=20