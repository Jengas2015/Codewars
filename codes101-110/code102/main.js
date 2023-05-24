/* In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula

(n/k)=(n!)/(k!(n-k)!)
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information (http://en.wikipedia.org/wiki/Pascal's_triangle)

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger. */

function pascalsTriangle(n) {
    //return a flat array representing the values of Pascal's Triangle to the n-th level
    let result = [];
    let row = [1];
    for (let i = 0; i < n; i++) {
        result = result.concat(row);
        row = nextRow(row);
    }
    return result;
}

function nextRow(row) {
    let next = [1];
    for (let i = 0; i < row.length - 1; i++) {
        next.push(row[i] + row[i + 1]);
    }
    next.push(1);
    return next;
}

console.log(pascalsTriangle(4))