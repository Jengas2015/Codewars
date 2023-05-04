/* Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!! */

function expandedForm(num) {
    const numString = num.toString()
    const numArray = []
    let result = []
    for (i=0; i<numString.length; i++) {
        numArray.push(numString[i]+'0'.repeat(numString.length-i-1))
    }

    numArray.forEach(number => {
        if (number !== "0".repeat(number.length)) {
            result.push(number)
        }
    })

    //alternatively, you can use filter to achieve the same results.

    // result = numArray.filter(number => {
    //     return number !== "0".repeat(number.length)
    // })

    return result.join(" + ")

}

console.log(expandedForm(70304))

//explanation tweet: https://twitter.com/Codingwithroy/status/1654144283719483393?s=20

