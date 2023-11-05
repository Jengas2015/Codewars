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
s consist of only digits and English letters. */

function longestPalindrome(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        let odd = expandFromCenter(s, i, i);
        let even = expandFromCenter(s, i - 1, i);
        if (odd.length > longest.length) longest = odd;
        if (even.length > longest.length) longest = even;
    }
    return longest;
}
