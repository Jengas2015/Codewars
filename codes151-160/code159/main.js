/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case? */

function isAnagram(s, t) {

    let sArray = s.split('')
    let tArray = t.split('')
    let sMap = {}
    let tMap = {}
    
    if (sArray.length!==tArray.length) {
        return false
    }

    for (let i = 0; i<sArray.length; i++) {
        sMap[sArray[i]]= (sMap[sArray[i]] || 0) +1
    }

    for (let i=0; i<tArray.length; i++) {
        tMap[tArray[i]]= (tMap[tArray[i]] || 0) +1
    }

    let sKeys = Object.keys(sMap)
    let tKeys = Object.keys(tMap)

    if (sKeys.length !== tKeys.length) {
        return false
    }

    for (let i=0; i<sKeys.length; i++) {
        if (sMap[sKeys[i]]!==tMap[sKeys[i]]) {
            return false
        }
    }

    return true









/*     if (s.length !== t.length) return false;
    const map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = map[s[i]] + 1 || 1;
    }
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) return false;
        map[t[i]]--;
    }
    return true; */
}

// console log of examples

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "ab")); // false