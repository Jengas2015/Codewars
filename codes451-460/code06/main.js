/* Advent of Code Day 1 part 2 */

const FindBasementMap2 = (instructions, startingFloor) => {
    let currentFloor = startingFloor;
    let distanceTraveled = 0;

    instructions.split(
        ''
    ).map(
        value => value === "(" ? 1: -1
    ).some(
        function (element) {
            if (currentFloor < 0) {
                return distanceTraveled;
            } else {
                distanceTraveled++;
                currentFloor += element;
            }
        }
    )

    return distanceTraveled;
}