/* Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False */

function scramble(str1, str2) {
    const freq = {};
  
    for (let i = 0; i < str1.length; i++) {
      let char = str1[i];
      freq[char] = (freq[char] || 0) + 1;
    }
    
    for (let j = 0; j < str2.length; j++) {
      let char = str2[j];
      if (!freq[char] || freq[char] === 0) {
        return false;
      } else {
        freq[char]--;
      }
    }
      return true;
}

console.log(scramble("katas", "steak"))

// link to explanation tweet: https://twitter.com/Codingwithroy/status/1645484906049355776?s=20