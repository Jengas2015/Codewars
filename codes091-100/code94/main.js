/* Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels. */

function encode(string) {
    const vowelObject = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    }
    let strArray = string.split('')
    const codedStr = strArray.map(letter => {
        if(vowelObject.hasOwnProperty(letter)) {
            return vowelObject[letter]
        } else {
            return letter
        }
    })
    return codedStr.join('')

}

function decode(string) {
    const vowelObject = {
        1: "a",
        2: "e",
        3: "i",
        4: "o",
        5: "u"
    }

    let strArray = string.split('')
    const decodedStr = strArray.map(character => {
        if(vowelObject.hasOwnProperty(character)) {
            return vowelObject[character]
        } else {
            return character
        }
    })
    return decodedStr.join('')
}

console.log(encode("How are you today?"))

console.log(decode(encode("How are you today?")))

//explanation tweet: https://twitter.com/Codingwithroy/status/1658545191458856985?s=20