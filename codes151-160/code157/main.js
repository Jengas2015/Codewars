/* Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character. */

function isIsomorphic(s, t) {
    let sArray = s.split('')
    let tArray = t.split('')

    let sMap = {}
    let tMap = {}

    for (let i = 0; i < s.length; i++) {
        if (s[i] in sMap) {
            if (sMap[s[i]]!==t[i]) {
                return false
            }
        } else if (!(t[i] in tMap)) {
            sMap[s[i]]=t[i]
            tMap[t[i]]=s[i]
        } else {
            return false
        }
    }

    return true








/*     let map = {};
    let set = new Set();
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            if (map[s[i]] !== t[i]) return false;
        } else {
            if (set.has(t[i])) return false;
            map[s[i]] = t[i];
            set.add(t[i]);
        }
    }
    return true; */
}

// console log of examples:

console.log(isIsomorphic("egg", "add")); // true
console.log(isIsomorphic("foo", "bar")); // false
console.log(isIsomorphic("paper", "title")); // true
console.log(isIsomorphic("badc", "baba")); // false
