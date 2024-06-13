const ribbonAndBowCalc = (dimensionsArrays) => {

    const ribbonLength = (array) => {
        array.sort((a, b) => a-b);
        return 2 * (array[0] + array[1])
    };

    const bowLength = (array) => {
        return array[0] * array[1] * array[2];
    }

    const mappedArrays = dimensionsArrays.map(element => [element]);
    const numberfiedArrays = mappedArrays.map(subArray => {
        let [str] = subArray;
        let [a, b, c] = str.split('x');
        return [parseInt(a), parseInt(b), parseInt(c)];
    });
}

//memoization

/* 
    public int FindFloorMap (string instructions, int startingFloor)
    {
        return instructions.Select(value => value == "(" ? 1 : -1).Aggregate (startingFloor, (total, next) => total + next);
    }

*/