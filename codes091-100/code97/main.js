/* Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3 */

function highestRank(arr) {
    const numCount = {}
    arr.forEach(number => {
        if(numCount[number]) {
            numCount[number]++
        } else {
            numCount[number] = 1
        }
    })

    
    let highestNumCount = Object.keys(numCount)[0]
    const nums = Object.keys(numCount)
    console.log(nums)

    for (i=0; i<nums.length; i++) {
        if(numCount[nums[i]] > numCount[highestNumCount]) {
            highestNumCount = Object.keys(numCount)[i]
        } else if(numCount[nums[i]]===numCount[highestNumCount]) {
            highestNumCount = Math.max(Object.keys(numCount)[i], highestNumCount)
        }
    }

    return Number(highestNumCount)

}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12] ))

//explanation tweet: https://twitter.com/Codingwithroy/status/1659577277674291200?s=20