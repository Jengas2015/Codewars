/* Given an array of integers citations where citations[i] is the number of citations a researcher received for their ith paper, return the researcher's h-index.

According to the definition of h-index on Wikipedia: The h-index is defined as the maximum value of h such that the given researcher has published at least h papers that have each been cited at least h times.

 

Example 1:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.
Example 2:

Input: citations = [1,3,1]
Output: 1
 

Constraints:

n == citations.length
1 <= n <= 5000
0 <= citations[i] <= 1000 */

function hIndex (citations) {
    //sort citations
    citations.sort((a, b) => b-a)
    //initialize index
    let index = 0

    //handle edge cases
    if (citations.length===1) {
        return citations[0] >= 1? 1: 0
    }

    //increment index for each time it comes across a citations value greater than it.
    for (let i = 0; i< citations.length; i++) {
        if(citations[i]>index) {
            index++
        } else {
            return index
        }
    }
    return index
}

console.log(hIndex( [3,0,6,1,5] ))

//explanation tweet: https://twitter.com/Codingwithroy/status/1671194147133304841?s=20