/* You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!). */

function isValidWalk(walk) {
    const coordinates = [0,0]
    for (let i = 0; i<walk.length; i++) {
        if (walk[i]==='n') {
            coordinates[1]++
        } else if (walk[i]==='s') {
            coordinates[1]--
        } else if (walk[i]==='e') {
            coordinates[0]++
        } else if (walk[i]==='w') {
            coordinates[0]--
        }
    }
    return coordinates[0] === 0 && coordinates[1] === 0 && walk.length===10
  }

  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','e']))

  // tweet to explanation: https://twitter.com/Codingwithroy/status/1636729996034048000?s=20