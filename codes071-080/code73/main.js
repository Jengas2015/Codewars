/* Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
 */

function towerBuilder(nFloors) {
    let tower = [];
    let floor = "";
    let space = " ";
    let star = "*";
    let width = nFloors * 2 - 1;
    for (let i = 0; i < nFloors; i++) {
      floor = "";
      for (let j = 0; j < width; j++) {
        if (j < nFloors - i - 1 || j > nFloors + i - 1) {
          floor += space;
        } else {
          floor += star;
        }
      }
      tower.push(floor);
    }
    return tower;
}

console.log(towerBuilder(3))

//https://twitter.com/Codingwithroy/status/1650873306839433222?s=20