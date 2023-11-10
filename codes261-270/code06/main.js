/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k.

Find the maximum profit you can achieve. You may complete at most k transactions: i.e. you may buy at most k times and sell at most k times.

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

 

Example 1:

Input: k = 2, prices = [2,4,1]
Output: 2
Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.
Example 2:

Input: k = 2, prices = [3,2,6,5,0,3]
Output: 7
Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
 

Constraints:

1 <= k <= 100
1 <= prices.length <= 1000
0 <= prices[i] <= 1000
 */

var maxProfit = function(k, prices) {
    if (prices.length <= 1) return 0;
    if (k >= prices.length / 2) return quickSolve(prices);
    let dp = Array(k+1).fill(0).map(() => Array(prices.length).fill(0));
    for (let i = 1; i <= k; i++) {
        let tmpMax = -prices[0];
        for (let j = 1; j < prices.length; j++) {
            dp[i][j] = Math.max(dp[i][j-1], prices[j] + tmpMax);
            tmpMax = Math.max(tmpMax, dp[i-1][j-1] - prices[j]);
        }
    }
    return dp[k][prices.length-1];
}

function quickSolve(prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
    }
    return profit;
}

