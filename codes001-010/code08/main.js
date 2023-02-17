/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

function reverseWords(str) {
    // Go for it
    let testValue = str.split(' ').map(word => {
        return word.split('').reverse().join('')
    }).join(' ')
    console.log(testValue)
  }

  let testSTr = 'The quick brown fox jumps over the lazy dog.'

  reverseWords(testSTr)