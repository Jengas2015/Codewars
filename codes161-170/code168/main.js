/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'. */

function isValid(s) {

    let stack = []
    let map = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    }

    for(let i =0; i<s.length; i++) {
        if(map[s[i]]) {
            stack.push(map[s[i]])
        } else {
            if (s[i]!==stack.pop()) {
                return false
            }
        }
    }

    return stack.length===0













/*     const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            stack.push(map[s[i]]);
        } else {
            if (s[i] !== stack.pop()) {
                return false;
            }
        }
    }
    return stack.length === 0; */
}

// console logs
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false