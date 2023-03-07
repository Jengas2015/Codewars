/* Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). */

/* let objectAnimal = {
  horse: "fast",
  turtle: "slow"
}

console.log(objectAnimal.horse)
console.log(objectAnimal["turtle"]) */

function findOdd (arr) {
  let objectInt = {}

  for (let i = 0; i<arr.length; i++) {
    let elem = arr[i]
    if (objectInt[elem]) {
      objectInt[elem]++
    } else {
      objectInt[elem] = 1
    }
  }

  let keys = Object.keys(objectInt)

  for (let i = 0; i<keys.length; i ++) {
    let propName = Number (keys[i])
    let propValue = objectInt[propName]

    if (propValue % 2 !==0) {
       return (propName)
    }
  }
}

let testArray = [1,2,2,3,3,3,4,3,3,3,2,2,1]

findOdd(testArray)

let objectAnimal = {
  horse: "fast",
  turtle: "slow"
}














/* 
function findOdd(A) {
    let objectCount = {}

    for (let i=0; i<A.length; i++) {
      let elem = A[i]
      if (objectCount[elem]) {
        objectCount[elem]++
      } else {
        objectCount[elem]=1
      }
    }

    let keys = Object.keys(objectCount)
    
    for (let i=0; i<keys.length; i++) {
        let propName = Number(keys[i])
        let propValue = objectCount[propName]

        if (propValue % 2 !==0) {
            return propName
        }
    }
    

  }

  let testArray = [0,1,0,1,0]

  findOdd(testArray) */