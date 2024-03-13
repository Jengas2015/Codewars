/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8 */

var generateParenthesis = function (n) {
    let result = [];
    function backtrack(s = '', left = 0, right = 0) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }
        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }
    backtrack();
    return result;
}

