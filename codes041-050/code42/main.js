/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

function moveZeros(arr) {
    const zeroLess = arr.filter(char => char!==0)

    const allTheZeroes = arr.filter(char => char ===0)

    allTheZeroes.forEach(zero => zeroLess.push(zero))

    return zeroLess
  }

  moveZeros([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ])