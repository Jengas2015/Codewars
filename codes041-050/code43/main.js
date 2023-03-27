/* Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway ! */

function pigIt(str){
    const strArray = str.split(' ')
    const firstLetters = strArray.map(word => word[0])
    for (i=0; i<strArray.length; i++) {
        if(strArray[i] !=='!' && strArray[i] !== '?'){
            strArray[i]=strArray[i].slice(1) + firstLetters[i] + "ay"
        }
    }

    return strArray.join(' ')
  }

  pigIt('Hello world !')

  //link to explanation tweet: https://twitter.com/Codingwithroy/status/1640415577922519047?s=20