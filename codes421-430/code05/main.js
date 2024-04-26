/* Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
 */

function longestPalindrome(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let sub = s.slice(i, j + 1);
            if (sub === sub.split('').reverse().join('') && sub.length > longest.length) {
                longest = sub;
            }
        }
    }
    return longest;
}

console.log(longestPalindrome('babad')); // 'bab'


