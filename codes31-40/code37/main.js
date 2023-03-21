/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  "" */

function order(words){
    let wordsArray = words.split(' ')
    const numberedObject = {}

    wordsArray.forEach(word => {
        if (word.includes(1)) {
            numberedObject[word] = 1
        } else if (word.includes(2)) {
            numberedObject[word] = 2
        } else if (word.includes(3)) {
            numberedObject[word] = 3
        } else if (word.includes(4)) {
            numberedObject[word] = 4
        } else if (word.includes(5)) {
            numberedObject[word] = 5
        } else if (word.includes(6)) {
            numberedObject[word] = 6
        } else if (word.includes(7)) {
            numberedObject[word] = 7
        } else if (word.includes(8)) {
            numberedObject[word] = 8
        } else if (word.includes(9)) {
            numberedObject[word] = 9
        }
    })

    let objectToArray = Object.entries(numberedObject)
    //returns [['wo4rd', 4], [w1ord, 1], [word6, 6]]
    objectToArray.sort((a, b) => {
        return a[1] - b[1]
    })

    const backToObject = Object.fromEntries(objectToArray)
    const objectKeys = Object.keys(backToObject)

    return objectKeys.join(' ')

  }

  order("4of Fo1r pe6ople g3ood th5e the2")

// tweet to explanation: https://twitter.com/Codingwithroy/status/1638200254741770244?s=20