/* You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' */

function decipherThis(str) {
    const numbers = "0123456789"
    let strArray = str.split(' ')
    let result = []
    for (i=0; i<strArray.length; i++) {
        let charCode = ""
        for (j=0; j<strArray[i].length; j++) {
            if (numbers.includes(strArray[i][j])) {
                charCode+=strArray[i][j]
            }

        }
        let deCharCode = ""
        deCharCode += strArray[i].replace(charCode, String.fromCharCode(charCode))
        result.push(deCharCode)
    }
    const actualResults = []
    for (i=0; i<result.length; i++) {
        let swapMe = ""
        for (j=0; j<result[i].length; j++) {
            const lastResultLetter = result[i][result[i].length-1]
            const secondResultLetter = result[i][1]

            if(result[i].length===1) {
                swapMe+=result[i]
            } else if(j===1) {
                swapMe+= lastResultLetter
            } else if(j===result[i].length-1) {
                swapMe+=secondResultLetter
            } else {
                swapMe+=result[i][j]
            }
        }
        actualResults.push(swapMe)
    }
    return actualResults.join(' ')
}; 

console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"))