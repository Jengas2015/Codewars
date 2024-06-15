/* C# implementation of Day 1 Part 2 

class BasementFinder
{
    public static int FindBasementMap (string instructions, int startingFloor)
    {
        int currentFloor = startingFloor;

        return instructions.Select
        (
        value => value == '(' ? 1 : -1
        ).Select
        (
            change =>
            {
                int newFloor = currentFloor + change;
                currentFloor = newFloor;
                return newFloor;
            }
        ).IndexOf(-1) + 1;
    }
};


Idempotent

*/

