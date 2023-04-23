/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" */

// complete the function
function solution(string) {
    let result = ""
    for (i=0; i<string.length; i++) {
        if (string[i]===string[i].toUpperCase()) {
            result += " " + string[i]
        } else {
            result += string[i]
        }
    }
    return result
}

console.log(solution("camelCasingTest"))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1650164846065754113?s=20