/* Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces. */

function lengthOfLongestSubstring(s) {
    let leftPointer = 0
    let maxLength = 0
    let charSet = new Set()

    for (let i = 0; i< s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[leftPointer]);
            leftPointer++
        }
        charSet.add(s[i])
        maxLength = Math.max(maxLength, i - leftPointer + 1)
    }
    return maxLength;
}

// console log of examples
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
