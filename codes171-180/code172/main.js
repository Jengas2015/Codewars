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

function calculate (s) {
    let res = 0, sum = 0, sign = 1;
    let myStack = [];
    myStack.push(1);
    const isDigit = (ch) => {
        return ch >= '0' && ch <= '9';
    }
    for(let ch of s){
        if(isDigit(ch)) sum = sum * 10 + (ch - '0');
        else{
            res += sum * sign * myStack[myStack.length - 1];
            sum = 0;
            if(ch === '-') sign = -1;
            else if(ch === '+') sign = 1;
            else if(ch === '(') {myStack.push(myStack[myStack.length - 1] * sign); sign = 1;}
            else if(ch === ')') myStack.pop(); 
        }
    }
    return res += (sign * sum);
}

//console logs
console.log(calculate("1 + 1")) //2
console.log(calculate(" 2-1 + 2 ")) //3
console.log(calculate("(1+(4+5+2)-3)+(6+8)")) //23