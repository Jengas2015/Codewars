/* Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] */

function solution(str){
   const strArray = [...str]
   let pairedArr =[]
   const oddArr = []
    for (i=0; i<strArray.length; i++) {
        if (i % 2 === 0) {
            pairedArr.push(strArray[i])
        } if (i % 2 !==0) {
            oddArr.push(strArray[i])
        }
    }

    for (i=0; i<oddArr.length; i++) {
            pairedArr[i]+=oddArr[i]
    }

    if (strArray.length % 2 !==0) {
        pairedArr[pairedArr.length-1]+="_"
    }

    return pairedArr
}

solution("abcdefg")

// link to explanation tweet: https://twitter.com/Codingwithroy/status/1639728867911892992?s=20