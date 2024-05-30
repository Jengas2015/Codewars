/* Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
 

Example 1:

Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified.
Note that the second line is also left-justified because it contains only one word.
Example 3:

Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
 

Constraints:

1 <= words.length <= 300
1 <= words[i].length <= 20
words[i] consists of only English letters and symbols.
1 <= maxWidth <= 100
words[i].length <= maxWidth */

function fullJustify(words, maxWidth) {
    let res = [];
    let temp = [];
    let tempLen = 0;
    for (let i = 0; i < words.length; i++) {
        if (tempLen + temp.length + words[i].length <= maxWidth) {
            temp.push(words[i]);
            tempLen += words[i].length;
        } else {
            let space = maxWidth - tempLen;
            let spaceNum = temp.length - 1;
            let spaceStr = '';
            if (spaceNum === 0) {
                spaceStr = ' '.repeat(space);
            } else {
                let spaceArr = [];
                for (let j = 0; j < spaceNum; j++) {
                    spaceArr.push(' '.repeat(Math.floor(space / spaceNum) + (j < space % spaceNum ? 1 : 0)));
                }
                spaceStr = spaceArr.join('');
            }
            let str = temp.join(spaceStr);
            res.push(str + ' '.repeat(maxWidth - str.length));
            temp = [words[i]];
            tempLen = words[i].length;
        }
    }
    res.push(temp.join(' ') + ' '.repeat(maxWidth - temp.join(' ').length));
    return res;
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)); // ["This    is    an", "example  of text", "justification.  "]

/* C#

public class Solution {
    public IList<string> FullJustify(string[] words, int maxWidth) {
        var res = new List<string>();
        var cur = new List<string>();
        int num_of_letters = 0;

        foreach (var word in words) {
            if (word.Length + cur.Count + num_of_letters > maxWidth) {
                for (int i = 0; i < maxWidth - num_of_letters; i++) {
                    cur[i % (cur.Count - 1 > 0 ? cur.Count - 1 : 1)] += " ";
                }
                res.Add(string.Join("", cur));
                cur.Clear();
                num_of_letters = 0;
            }
            cur.Add(word);
            num_of_letters += word.Length;
        }

        string lastLine = string.Join(" ", cur);
        while (lastLine.Length < maxWidth) lastLine += " ";
        res.Add(lastLine);

        return res;
    }
}

*/