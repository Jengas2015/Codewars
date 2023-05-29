/* Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata. */

function reverse(str) {
    let words = str.trim().split(' ');
    let result = [];
    for (let word of words) {
      if (word !== '') {
        result.push(word);
      }
    }
    for(i=0; i<result.length; i++) {
        if(i % 2 !==0) {
            result[i]=result[i].split('').reverse().join('')
        }
    }
    return result.join(' ')
}

console.log(reverse("     Reverse      this string, please!"))

//explanation tweet: https://twitter.com/Codingwithroy/status/1663180867273908227?s=20