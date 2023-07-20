/* Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space. */

function wordPattern(pattern, s) {

    let patternArr = pattern.split('')
    let sArray = s.split(' ')

    let patternWordMap = {}
    let wordSet = new Set()

    for (let i = 0; i < sArray.length; i++) {
        if (!patternWordMap.hasOwnProperty(patternArr[i])) {
            if (wordSet.has(sArray[i])) {
                return false
            }
            patternWordMap[patternArr[i]] = sArray[i]
            wordSet.add(sArray[i])
        } else if (patternWordMap[patternArr[i]]!==sArray[i]) {
            return false
        }
        
    }

    if (patternArr.length !== sArray.length) {
        return false
    }

    return true









    /*     const arr = s.split(' ');
        if (pattern.length !== arr.length) return false;
        const map = {};
        const set = new Set();
        for (let i = 0; i < pattern.length; i++) {
            if (map[pattern[i]] === undefined) {
                if (set.has(arr[i])) return false;
                map[pattern[i]] = arr[i];
                set.add(arr[i]);
            } else {
                if (map[pattern[i]] !== arr[i]) return false;
            }
        }
        return true; */
}

//console log of examples
console.log(wordPattern("abba", "dog cat cat dog")); //true
console.log(wordPattern("abba", "dog cat cat fish")); //false
console.log(wordPattern("aaaa", "dog cat cat dog")); //false
console.log(wordPattern("abba", "dog dog dog dog")); //false
