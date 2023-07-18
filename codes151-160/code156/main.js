/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

function canConstruct(ransomNote, magazine) {
    let magazineCount = {}
    const magArray = magazine.split('')

    for (let i=0; i<magArray.length; i++) {
        magazineCount[magArray[i]]= (magazineCount[magArray[i]] || 0) + 1
    }

    for (let i=0; i< ransomNote.length; i++) {
        if (magazineCount[ransomNote[i]]) {
            magazineCount[ransomNote[i]]--
        } else if (!magazineCount[ransomNote[i]] || magazineCount[ransomNote[i]]===0) {
            return false
        }
    }

    return true


/*     let ransomNoteArr = ransomNote.split("");
    let magazineArr = magazine.split("");
    let result = true;
    ransomNoteArr.forEach((letter) => {
        if (magazineArr.includes(letter)) {
            magazineArr.splice(magazineArr.indexOf(letter), 1);
        } else {
            result = false;
        }
    });
    return result; */
}

//console logs

console.log(canConstruct("a", "b")); //false
console.log(canConstruct("aa", "ab")); //false
console.log(canConstruct("aa", "aab")); //true
console.log(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj")); //true
