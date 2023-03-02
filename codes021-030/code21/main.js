/* Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
    let xCount = 0
    let oCount = 0
    let strArray = str.toLowerCase().split('')
    for (i=0; i<strArray.length; i++) {
        if (strArray[i]==="x") {
            xCount++
        } else if (strArray[i]==="o") {
            oCount++
        }
    }
    return xCount === oCount
}

let testString = "zzoo"

XO(testString)

// Explanation here: https://twitter.com/Codingwithroy/status/1631314681653493761?s=20