/* Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0] */

function sortArray(array) {
    //extract new array of odd nums
    const oddNum = array.filter(number => number % 2 !== 0)
    // sort odd nums
    oddNum.sort((a, b) => a-b)
    //for loop through original array, if number is odd, replace with number in oddNum array. 
    //Increment variable for oddNum separately
    for (i=0, j=0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            array[i]=oddNum[j]
            j++
        }
    }
    return array
}

console.log(sortArray([5, 3, 2, 8, 1, 4]))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1649888595669295110?s=20