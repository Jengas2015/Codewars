/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters. */

/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 88 ms, faster than 97.78% of JavaScript online submissions for Valid Palindrome.
 * Memory Usage: 44.4 MB, less than 57.78% of JavaScript online submissions for Valid Palindrome.
 * TC: O(N), where N is the length of s
 * SC: O(1)
 * 
 * Note: use two pointers to check if the string is palindrome
 *      use regular expression to remove non-alphanumeric characters
 *     use toLowerCase() to convert all uppercase letters into lowercase letters
 * 
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
 *           https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *          https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 *         https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
 * 
    */
var isPalindrome = function (s) {
    if (s.length === 0) {
        return true;
    }

    const regex = /[^a-z0-9]/g;
    const str = s.toLowerCase().replace(regex, '');
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


