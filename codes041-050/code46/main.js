/* ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". */

function rot13(message){
    const messageArr= message.split('')
    const upperC='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const lowerC='abcdefghijklmnopqrstuvwxyz'.split('')
    const ciphered = []

    for (i=0; i<messageArr.length; i++) {
      if (upperC.includes(messageArr[i])) {
        ciphered.push(upperC[(upperC.indexOf(messageArr[i])+13) % 26])
      } else if(lowerC.includes(messageArr[i])) {
        ciphered.push(lowerC[(lowerC.indexOf(messageArr[i])+13) % 26])
      } else {
        ciphered.push(messageArr[i])
      }
    }
    return ciphered.join('')
  }

  rot13('Hello world!')

  //link to explanation tweet: https://twitter.com/Codingwithroy/status/1641449600249896962?s=20