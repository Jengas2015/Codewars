/* There are n children standing in a line. Each child is assigned a rating value given in the integer array ratings.

You are giving candies to these children subjected to the following requirements:

Each child must have at least one candy.
Children with a higher rating get more candies than their neighbors.
Return the minimum number of candies you need to have to distribute the candies to the children.

 

Example 1:

Input: ratings = [1,0,2]
Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
Example 2:

Input: ratings = [1,2,2]
Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child gets 1 candy because it satisfies the above two conditions.
 

Constraints:

n == ratings.length
1 <= n <= 2 * 104
0 <= ratings[i] <= 2 * 104 */

function candy (ratings) {
    let candies = new Array(ratings.length).fill(1)

    for (let i = 0; i<ratings.length; i++) {
        if (ratings[i-1]< ratings[i]) {
            candies[i]= Math.max(candies[i], candies[i-1]+1)
        }
    }
    for (let i=ratings.length-1; i>=0; i--) {
        if (ratings[i+1] < ratings[i]) {
            candies[i] = Math.max(candies[i], candies[i+1]+1)
        }
    }
    return candies.reduce ((a, b) => a+b)
}
console.log (candy( [1,0,2] ))

//explanation tweet: https://twitter.com/Codingwithroy/status/1672709087476236293?s=20