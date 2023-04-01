/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false */

function generateHashtag (str) {
    const strArr= [...str]
    if(strArr.length === 0 || str[0]===' ') {
      return false
    }
    strArr[0]=strArr[0].toUpperCase()

    for (i=0; i<strArr.length; i++) {
        if (strArr[i]===' ') {
            strArr[i+1]=strArr[i+1].toUpperCase()
        }
    }

    const spaceRemoved = strArr.filter(char => {
        return char!==" "
    })

    if (spaceRemoved.length>139) {
        return false
    } else{
        return (`#${spaceRemoved.join('')}`)
    }

}

console.log(generateHashtag("Hello there thanks for trying my Kata"))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1642264702997741570?s=20