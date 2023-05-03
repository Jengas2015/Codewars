/* The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count(string) {
    const charObject = {}
    const strArray = string.split('')
    strArray.forEach(letter => {
        if(!charObject[letter]) {
            charObject[letter]=1
        } else {
            charObject[letter]++
        }
    })
    return charObject
}

//explanation tweet: https://twitter.com/Codingwithroy/status/1653764895278604288?s=20