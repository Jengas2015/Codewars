/* You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array. */

function deepCount(a) {
    let count = 0

    function hasArray(el) {
        el.forEach(element => {
            if (Array.isArray(element)) {
                hasArray(element)
            }
        })
        count+=el.length
    }

    a.forEach(elements => {
        if(Array.isArray(elements)) {
            hasArray(elements)
        }
    })
    count+=a.length

    return count
}

console.log(deepCount([1, 2, [3, 4, [5]]]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1660372330151854087?s=20