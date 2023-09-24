/* Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8 */

function generateParenthesis(n) {
  let res = [];
  let str = "";
  function helper(open, close, str) {
    if (open === 0 && close === 0) {
      res.push(str);
      return;
    }
    if (open > 0) {
      helper(open - 1, close, str + "(");
    }
    if (close > open) {
      helper(open, close - 1, str + ")");
    }
  }
  helper(n, n, str);
  return res;
}

