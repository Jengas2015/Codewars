/* Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "1 + 1"
Output: 2
Example 2:

Input: s = " 2-1 + 2 "
Output: 3
Example 3:

Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
 

Constraints:

1 <= s.length <= 3 * 105
s consists of digits, '+', '-', '(', ')', and ' '.
s represents a valid expression.
'+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
'-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
There will be no two consecutive operators in the input.
Every number and running calculation will fit in a signed 32-bit integer. */

function calculate(s) {
    let stack = [];
    let sign = '+';
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === ' ') continue;
        if (char >= '0' && char <= '9') {
            num = num * 10 + Number(char);
        }
        if (char === '(') {
            let j = i + 1;
            let count = 1;
            while (count > 0) {
                if (s[j] === '(') count++;
                if (s[j] === ')') count--;
                j++;
            }
            num = calculate(s.slice(i + 1, j - 1));
            i = j - 1;
        }
        if (char === '+' || char === '-' || i === s.length - 1) {
            if (sign === '+') stack.push(num);
            if (sign === '-') stack.push(-num);
            sign = char;
            num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
}
