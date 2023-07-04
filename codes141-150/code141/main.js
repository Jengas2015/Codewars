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
words[i].length <= maxWidth
*/

function fullJustify (words, maxWdith) {
    let currentLineLength = 0
    let formattedArray = []
    let currentLineWords = []
    for (let i = 0; i<words.length; i++) {
        if (currentLineLength + words[i].length + currentLineWords.length > maxWdith) {
            formattedArray.push(formatLine(currentLineWords, currentLineLength, maxWdith))
            currentLineWords = []
            currentLineLength = 0
        } 
            currentLineLength+= words[i].length
            currentLineWords.push(words[i])
        
    }

    let lastLine = currentLineWords.join(' ') + " ".repeat(maxWdith-(currentLineWords.length-1)-currentLineLength)
    formattedArray.push(lastLine)

    return formattedArray
}

function formatLine (line, lineLength, maxWdith) {
    let availableSpace = maxWdith-lineLength
    const spacesBetweenWords = line.length -1
    let spaceAlottment = Math.floor(availableSpace/ spacesBetweenWords)
    let formattedLine = ""
    let extraSpaces = availableSpace % spacesBetweenWords
    
    if (line.length === 1) {
        return line[0] + " ".repeat(availableSpace)
    }

    for (let i = 0 ; i<line.length; i++) {
        if (i!==spacesBetweenWords) {
            formattedLine+=line[i]
            if (i<extraSpaces) {
                formattedLine+=" "
            }
            formattedLine += " ".repeat(spaceAlottment)
        }
    }
    formattedLine += line[spacesBetweenWords]

    return formattedLine
}

//console log of examples
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)); //Output: ["This    is    an", "example  of text", "justification.  "]
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)); //Output: ["What   must   be", "acknowledgment  ", "shall be        "]
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20)); //Output: ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]
