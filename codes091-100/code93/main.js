/* Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo" */

var encryptThis = function (text) {
    let strArray = text.split(' ')
    const encodedStr = strArray.map(word => {
        const codedFirstChar = word.charCodeAt(0)
        if (word.length===1) {
            return codedFirstChar
        }
        else if (word.length===2) {
            return codedFirstChar + word[1]
        } else {
            return codedFirstChar + word.slice(word.length-1) + word.slice(2, word.length-1) + word.slice(1, 2)
        }
    })
    return encodedStr.join(' ')
}

console.log(encryptThis("hello world"))

//explanation tweet: https://twitter.com/Codingwithroy/status/1658116286340014081?s=20