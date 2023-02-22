/* Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. */

function disemvowel(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let deVoweledStr = ''

    for (i=0; i < str.length; i++) {
        if(!vowels.includes(str[i])) {
            deVoweledStr+=str[i]
        }
    }

    console.log(deVoweledStr)
  
/*   let strSplit= str.split('')

  for (i=0; i<strSplit.length; i++) {
    if(strSplit[i] === 'a'|| strSplit[i] === 'e' || strSplit[i] === 'i' || strSplit[i] === 'o' || strSplit[i] === 'u' || strSplit[i] === 'A'|| strSplit[i] === 'E' || strSplit[i] === 'I' || strSplit[i] === 'O' || strSplit[i] === 'U') {
        strSplit.splice(i, 1)
    }
  }
  console.log(strSplit)
  let deVoweledStr = strSplit.join('')

  console.log (deVoweledStr) */

  }

testStr = "No offense but,\nYour writing is among the worst I've ever read"

disemvowel(testStr)