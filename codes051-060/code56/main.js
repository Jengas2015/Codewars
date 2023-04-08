/* My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed. */

function orderWeight(strng) {
    function sumOfDigits (num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10; // add the last digit
      num = Math.floor(num / 10); // remove the last digit
    }
    return sum;
  }
    
    function compareBySumOfDigits (a, b) {
    let sumA = sumOfDigits(a); // get the sum of digits of a
    let sumB = sumOfDigits(b); // get the sum of digits of b
    if (sumA === sumB) { // if the sums are equal
      return a.localeCompare(b); // compare them as strings using localeCompare method
    } else { // if the sums are different
      return sumA - sumB; // compare them as numbers
    }
  }
  
  function sortBySumOfDigits (arr) {
    arr.sort(compareBySumOfDigits); // sort by using the custom comparator function
    return arr;
  }
    let array = strng.split(" ")
    array = sortBySumOfDigits(array)
    const result = array.join(" ")
    return result
  }

console.log(orderWeight("103 123 4444 99 2000"))