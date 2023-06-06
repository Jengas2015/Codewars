/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck! */

function dup(s) {
    const noDupes = s.map(string => {
        let noDupeWord = ""
        for(i=0; i<string.length; i++) {
            if (string[i]!==string[i-1]) {
                noDupeWord+=string[i]
            }
        }
        return noDupeWord
    })
    return noDupes
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1666105627465089025?s=20