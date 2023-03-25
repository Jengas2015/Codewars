/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

var uniqueInOrder=function(iterable){
    let iterableArray = []
    const uniqueIterable = []
    if (typeof iterable==='string') {
        iterableArray = iterable.split('')
    } else {
        iterableArray = iterable
    }

    for (let i=0; i<iterableArray.length; i++) {
        if(i===0) {
            uniqueIterable.push(iterableArray[i])
        } else if(iterableArray[i]!==iterableArray[i-1]) {
            uniqueIterable.push(iterableArray[i])
        }
    }
    return uniqueIterable
  }

  uniqueInOrder('AaaABbBCAb')

  //link to explanation tweet: https://twitter.com/Codingwithroy/status/1637461509394636802?s=20