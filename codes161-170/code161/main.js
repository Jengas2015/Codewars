/* Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 231 - 1 */

function isHappy(n) {
    let squareMap = new Map()

    while(n!==1) {
        let digits = n.toString().split('').map(digit => Number(digit))
        let squaredSum = 0
        for(let i = 0; i < digits.length; i++) {
            squaredSum+=Math.pow(digits[i], 2)
        }
        if (squareMap.has(squaredSum)) {
            return false
        } else {
            squareMap.set(squaredSum, 1)
        }
        n=squaredSum
    }
    return true





/*   let set = new Set();
  while (n !== 1) {
    let sum = 0;
    while (n > 0) {
      sum += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (set.has(sum)) return false;
    set.add(sum);
    n = sum;
  }
  return true; */
}

// console.log examples
console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(7)); // true
